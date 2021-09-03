const { chromium } = require('playwright');

var url         = process.env.URL;
var credentials = process.env.CREDENTIALS;

(async () => {
  var browser = await chromium.connect({ timeout: 0, wsEndpoint: 'wss://'+ credentials + '@' + url + '/playwright/chromium/playwright-1.12.2' });
  const page = await browser.newPage();
  await page.goto('http://whatsmyuseragent.org/');
  await page.screenshot({ path: 'screenshot.png' });
  await browser.close();
})();
