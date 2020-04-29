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
                      async after(answers) {
                        if (!answers.components) {
                          answers.components = [];
                        }
                        answers.components.push(
                          await createComponent({
                            name: answers.componentName,
                            appId: answers.appId,
                            type: answers.registerComponentType,
                          }),
                        );
                        return answers;
                      },
                      validate(value: string) {
                        return !!value;
                      },
                      message: 'Name of the component:',
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
