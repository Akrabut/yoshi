import Scripts from '../../../../../scripts';

const scripts = Scripts.setupProjectFromTemplate({
  templateDir: __dirname,
  projectType: 'javascript',
});

describe.each(['prod', 'dev'] as const)('inline svg inclusion [%s]', mode => {
  it('integration', async () => {
    await scripts[mode](async () => {
      await page.goto(scripts.serverUrl);
      const imageSource = await page.$eval(
        '#inline-svg-inclusion',
        elm => (elm as HTMLImageElement).src,
      );

      expect(imageSource).toMatch(/svg/);
    });
  });

  it('component tests', async () => {
    await scripts.test(mode);
  });
});
