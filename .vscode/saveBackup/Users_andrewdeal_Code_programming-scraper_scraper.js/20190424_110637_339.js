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
const fs = require('fs');
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
    break;
  }

  let WODS = [];
  for (let program in Programs) {
    for (let wodURL of Programs[program]) {
      let wod = await wodScraper(wodURL, browser);
      WODS = [...WODS, wod];
      break;
    }
    console.log(WODS);
    fs.writeFileSync(`${program}-wods.json`, JSON.stringify(WODS));
  }

  await browser.close();
})();

async function wodScraper(url, browser) {
  let $ = await loadPage(url, browser);
  return extractWODText($);
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

const extractWODText = $ => {
  let WOD = {};
  let sectionHeader = '';
  WOD['session'] = $('h1')
    .text()
    .substring(9, 10);
  $('main > section > div')
    .find('p')
    .each(function(_, e) {
      let $e = $(e);
      let text = $e.text();
      if ($e.has('strong').length) {
        let headerText = $e
          .find('strong')
          .text()
          .trim();
        sectionHeader = headerText;
        WOD[headerText] = '';
      } else if (
        sectionHeader.length &&
        !text.includes('Logged in') &&
        text.charCodeAt(0) !== 160
      ) {
        WOD[sectionHeader] = WOD[sectionHeader].concat(`${text.trim()}\n`);
      }
    });
  return WOD;
};

const extractWODLinks = $ => {
  let links = [];
  $('main > section')
    .find('article a.entry-title')
    .each(function(i, e) {
      links.push($(e).attr('href'));
    });
  return links;
};
