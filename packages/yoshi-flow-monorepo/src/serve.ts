import { serveApp, ServeOptions } from 'yoshi-common/build/commands/serve';
import loadPackageGraph from './load-package-graph';

export default async ({ env }: ServeOptions = {}) => {
  const graphResult = await loadPackageGraph();

  const closeFunctions = await Promise.all(
    graphResult.apps.map(async app => {
      return serveApp({
        config: app.config,
        cwd: app.location,
        env,
      });
    }),
  );

  return () => Promise.all(closeFunctions.map(func => func()));
};
