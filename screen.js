const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 })
  await page.goto('https://pptr.dev/');
  await page.waitForSelector('sidebar-component')
  
  const option = await page.$('sidebar-component');
  await option.evaluate((el) => {el.style['background-color'] = '#1F54C0'});
  
  await page.screenshot({ path: 'screen.png' })

  await browser.close();
})().catch(error => {
  console.error(error);
  process.exit(1);
});

