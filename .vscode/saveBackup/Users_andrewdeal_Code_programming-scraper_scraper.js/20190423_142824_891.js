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
const LOGIN_DETAILS = argv.loginCookie.split('=');
const LOGIN_COOKIE = {
  name: LOGIN_DETAILS[0],
  value: LOGIN_DETAILS[1],
  domain: 'www.rawstrengthandconditioning.com',
  path: '/',
  httpOnly: true,
  secure: true
};

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setCookie(LOGIN_COOKIE);
  const pageHTML = await (await page.goto(
    `${BASE_URL}${TEMPLATE_PATHS[0]}`
  )).text();

  const $ = cheerio.load(pageHTML);

  console.log(
    $('main')
      .find('.entry-title')
      .each((index, element) => {
        console.log(element.attr('href'));
      })
  );

  await browser.close();
})();
