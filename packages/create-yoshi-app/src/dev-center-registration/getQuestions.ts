import { capitalize } from 'lodash';
import { ExtendedPromptObject } from './extended-prompts';
import {
  createApp,
  createComponent,
  getApps,
  getApp,
  DevCenterComponent,
} from './appService';

const WILL_REGISTER = 2;
const WAS_REGISTERED = 1;
const WIDGET_OUT_OF_IFRAME = 'WIDGET_OUT_OF_IFRAME';
const PAGE_OUT_OF_IFRAME = 'PAGE_OUT_OF_IFRAME';
const PLATFORM = 'PLATFORM';
const WIDGET_IFRAME = 'WIDGET';
const PAGE_IFRAME = 'PAGE';

const formatAppOption = (app: {
  name: string;
  appId: string;
}): { title: string; value: string } => {
  return {
    title: app.name,
    value: app.appId,
  };
};

const getBaseUrl = (projectName: string) =>
  `https://static.parastorage.com/services/${projectName}/1.0.0`;

const generateComponentData = (projectName: string, componentName: string) => {
  const baseUrl = getBaseUrl(projectName);

  return {
    componentUrl: `${baseUrl}/${componentName}ViewerWidget.bundle.min.js`,
    widgetData: {
      addOnlyOnce: false,
      default: true,
      essential: false,
      position: {
        region: 'no_region',
      },
      settingsEndpointUrl: `${baseUrl}/settings/${componentName}.html`,
      widgetEndpointUrl: `${baseUrl}/editor/${componentName}.html`,
      widgetMobileEndpointUrl: `${baseUrl}/editor/${componentName}.html`,
      widgetWidthType: 'NONE_TYPE',
    },
  };
};

const generateViewerScriptData = (projectName: string) => {
  const baseUrl = getBaseUrl(projectName);
  return {
    viewerScriptUrl: `${baseUrl}/viewerScript.bundle.min.js`,
    editorScriptUrl: `${baseUrl}/editorScript.bundle.min.js`,
    platformOnly: false,
    enableInEditor: false,
    baseUrls: {
      staticsBaseUrl: baseUrl,
      staticsEditorBaseUrl: baseUrl,
    },
  };
};

const getDataForComponent = (
  data: any,
  type:
    | typeof WIDGET_OUT_OF_IFRAME
    | typeof PAGE_OUT_OF_IFRAME
    | typeof PLATFORM,
) => {
  if (!data) {
    return undefined;
  }

  if (type === WIDGET_OUT_OF_IFRAME) {
    return {
      widgetOutOfIframeData: data,
      compType: type,
    };
  } else if (type === PAGE_OUT_OF_IFRAME) {
    return {
      pageOutOfIframeData: data,
      compType: type,
    };
  } else if (type === PLATFORM) {
    return {
      platformComponentData: data,
    };
  }
};

// We want to handle iframe widgets for cases when users want to migrate their components
const SUPPORTED_TYPES = [
  WIDGET_OUT_OF_IFRAME,
  PAGE_OUT_OF_IFRAME,
  WIDGET_IFRAME,
  PAGE_IFRAME,
];
const isSupportedComponentType = (component: DevCenterComponent) =>
  SUPPORTED_TYPES.includes(component.type);

export default (): Array<ExtendedPromptObject<string>> => {
  return [
    {
      type: 'select',
      name: 'appRegistrationState',
      message: 'Is your app registered in dev center?',
      choices: [
        { title: 'Yes', value: WAS_REGISTERED },
        {
          title: 'No',
          value: WILL_REGISTER,
        },
      ],
      next(answers) {
        if (answers.appRegistrationState === WILL_REGISTER) {
          return [
            {
              type: 'text',
              name: 'appName',
              async after(answers) {
                return createApp(answers.appName);
              },
              validate(value: string) {
                return !!value;
              },
              message: 'Name of the app:',
            },
            {
              type: 'select',
              name: 'registerComponentType',
              message: 'Register a component',
              choices: [
                { title: 'Register a Widget', value: WIDGET_OUT_OF_IFRAME },
                { title: 'Register a Page', value: PAGE_OUT_OF_IFRAME },
                {
                  title: 'Finish registration',
                  value: null,
                },
              ],
              repeatUntill(answers) {
                return !answers.registerComponentType;
              },
              next(answers) {
                if (answers.registerComponentType) {
                  return [
                    {
                      type: 'text',
                      name: 'componentName',
                      format: val =>
                        val
                          .split(/\s|-/)
                          .map(capitalize)
                          .join(''),
                      async after(answers, context) {
                        if (!answers.components) {
                          answers.components = [];
                        }
                        if (!context.isViewerScriptRegistered) {
                          await createComponent({
                            name: 'Platform',
                            appId: answers.appId,
                            type: PLATFORM,
                            data: getDataForComponent(
                              generateViewerScriptData(context.projectName),
                              PLATFORM,
                            ),
                          });
                          context.isViewerScriptRegistered = true;
                        }
                        answers.components = answers.components.concat(
                          await createComponent({
                            name: answers.componentName,
                            appId: answers.appId,
                            type: answers.registerComponentType,
                            data: getDataForComponent(
                              generateComponentData(
                                context.projectName,
                                answers.componentName,
                              ),
                              answers.registerComponentType,
                            ),
                          }),
                        );
                        return answers;
                      },
                      validate(value: string) {
                        return !!value;
                      },
                      message: `${
                        answers.registerComponentType === WIDGET_OUT_OF_IFRAME
                          ? 'Widget'
                          : 'Page'
                      } name`,
                    },
                  ];
                }
                return [];
              },
            },
          ];
        } else if (answers.appRegistrationState === WAS_REGISTERED) {
          return [
            {
              type: 'autocomplete',
              name: 'appId',
              message: 'Pick the app you want to use',
              optionsPerPage: 8,
              async before(answers, context) {
                context.apps = await getApps();
              },
              async after(answers) {
                const app = await getApp(answers.appId);
                if (!answers.components) {
                  answers.components = [];
                }
                answers.appName = app.name;
                answers.components = answers.components.concat(
                  app.components.filter(isSupportedComponentType),
                );
                return answers;
              },
              async getDynamicChoices(answers, context) {
                return context.apps.map(formatAppOption);
              },
            },
          ];
        }
        return [];
      },
    },
  ];
};
