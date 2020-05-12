import { viewerUrl } from '../../../dev/sites';

describe('Viewer App', () => {
  it('should change text on button click', async () => {
    await page.goto(viewerUrl);
    await page.waitForSelector('h2');

    const widgetText = await page.$eval('h2', node =>
      node?.textContent?.toLowerCase(),
    );

    expect(widgetText).toEqual('click the button');

    await page.click('button');

    const targetText = 'You clicked the button';

    try {
      await page.waitForFunction(
        (text: string) =>
          document?.querySelector('h2')?.innerText.includes(text),
        {},
        targetText,
      );
    } catch (e) {
      const actualWidgetText = await page.$eval('h2', node =>
        node?.textContent?.toLowerCase(),
      );
      throw new Error(
        `The text "${targetText}" was not found on the page. "${actualWidgetText}" found instead`,
      );
    }
  });
});
