const path = require('path')

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 })
  await page.goto('https://pptr.dev/');
 
  await page.waitForSelector('toolbar-component input[type=search]')

  await page.click('toolbar-component input[type=search]')
 
  await page.type('toolbar-component input[type=search]', 'pdf', { delay: 1000 })
  await page.keyboard.press('Enter')

  await page.pdf({path: 'pdf.pdf', format: 'A4'})
  await browser.close();

})().catch(error => {
  console.error(error);
  process.exit(1);
});







