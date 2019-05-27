/*
TODO
[ ] Find a NodeJS Scraping Library (with ability to make http request)
[ ] Configure scraper program to accept a cookie with Authentication details
[ ] Construct request to base page for template programming
[ ] Identify html tags that link to each day's programming
[ ] Identify html tag that contains day's programming
[ ] Identify html tag that links to next page of archived workouts
*/
//
const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
const argv = require('yargs').argv;

// Configuration
const BASE_URL = 'https://www.rawstrengthandconditioning.com/category/';
const TEMPLATE_PATHS = [
  'cardio-body-building',
  'specialty-extra-raw-body-aesthetics',
  'specialty-extra-raw-gymnastics'
];
const COOKIE = argv.cookie;

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`${BASE_URL}${TEMPLATE_PATHS[0]}`);

  console.log(page);

  await browser.close();
})();
