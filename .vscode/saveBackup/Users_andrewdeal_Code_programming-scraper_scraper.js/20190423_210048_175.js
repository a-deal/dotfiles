/*
TODO
[x] Find a NodeJS Scraping Library (with ability to make http request)
[x] Configure scraper program to accept a cookie with Authentication details
[x] Construct request to base page for template programming
[x] Identify html tags that link to each day's programming
[ ] Identify html tag that contains day's programming
[x] Identify html tag that links to next page of archived workouts
*/
//
const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
const argv = require('yargs').argv;

// Configuration
const BASE_URL = 'https://www.rawstrengthandconditioning.com/category/';
const LOGIN_DETAILS = argv.loginCookie.split('=');
const LOGIN_COOKIE = {
  name: LOGIN_DETAILS[0],
  value: LOGIN_DETAILS[1],
  domain: 'www.rawstrengthandconditioning.com',
  path: '/',
  httpOnly: true,
  secure: true
};

let Programs = {
  'cardio-body-building': []
  // 'specialty-extra-raw-body-aesthetics': [],
  // 'specialty-extra-raw-gymnastics': []
};

(async () => {
  const browser = await puppeteer.launch();
  for (let program in Programs) {
    Programs[program] = await programScraper(program, browser);
  }

  let WODS = [];
  for (let program in Programs) {
    for (let wodURL of Programs[program]) {
      let wod = await wodScraper(wodURL, browser);
      WODS = [...WODS, wod];
    }
  }
  console.log(WODS);

  await browser.close();
})();

async function wodScraper(url, browser) {
  let $ = loadPage(url, browser);
  let WOD = {};
  $('main > section > div')
    .find('p > strong')
    .each((i, e) => {
      let $section = $(e);
      let content = '';

      $section.nextUntil('p > strong').each((i, e) => {
        if (content.length) content.concat('\n', $(e).text());
        else content.concat('', $(e).text());
      });

      WOD[$section.text()] = content;
    });
  return WOD;
}

// Accepts a program and returns all contained WOD links
async function programScraper(programPath, browser) {
  let nextPage = `${BASE_URL}${programPath}`;
  let links = [];
  while (nextPage) {
    $ = await loadPage(nextPage, browser);
    links = [...links, ...extractWODLinks($)];
    let page = $('a.next.page-numbers');
    nextPage = page.length ? page.attr('href') : null;
  }
  return links;
}

// Accepts url and returns its HTML
async function loadPage(url, browser) {
  const page = await browser.newPage();
  await page.setCookie(LOGIN_COOKIE);
  const pageHTML = await (await page.goto(url)).text();
  return cheerio.load(pageHTML);
}

const extractWODLinks = $ => {
  let links = [];
  $('main > section')
    .find('article a.entry-title')
    .each(function(i, e) {
      links.push($(e).attr('href'));
    });
  return links;
};
