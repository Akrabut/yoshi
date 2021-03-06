import Scripts from '../../../../scripts';

const scripts = Scripts.setupProjectFromTemplate({
  templateDir: __dirname,
  projectType: 'typescript',
});

it('Should display informative error in component (app errors priority)', async () => {
  await expect(scripts.dev()).rejects.toThrow(
    `> 3 | export default () => <div id="component">Component In Storybook</div>eer;`,
  );
});
