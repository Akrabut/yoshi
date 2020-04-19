import path from 'path';
import * as fs from 'fs-extra';
import { getProjectArtifactId } from 'yoshi-helpers/build/utils';
import { constantCase } from 'constant-case';
import { FlowBMModel } from './createFlowBMModel';

export default ({ pages, moduleId }: FlowBMModel) => {
  const artifactId = `com.wixpress.${getProjectArtifactId()}`;
  const pageComponents = pages.map(({ componentId, route }) => {
    return {
      pageComponentId: componentId,
      pageComponentName: componentId,
      route,
    };
  });

  const template = {
    moduleId,
    mainPageComponentId: pageComponents.reduce((prev, { route, ...rest }) =>
      route.split(path.delimiter).length >
      prev.route.split(path.delimiter).length
        ? prev
        : { ...rest, route },
    ).pageComponentId,
    pageComponents,

    config: {
      topology: {
        staticsUrl: {
          artifactId,
        },
      },
    },
    bundles: [
      {
        file: {
          artifactId,
          path: 'module.bundle.min.js',
        },
        debugFile: {
          artifactId,
          path: 'module.bundle.js',
        },
      },
    ],
  };

  const templatePath = path.join(
    process.cwd(),
    `app-config-templates/module_${constantCase(moduleId)}.json`,
  );

  fs.outputJSONSync(templatePath, template, { spaces: 2 });
};
