/*
TODO
[x] Find a NodeJS Scraping Library (with ability to make http request)
[x] Configure scraper program to accept a cookie with Authentication details
[x] Construct request to base page for template programming
[x] Identify html tags that link to each day's programming
[x] Identify html tag that contains day's programming
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
  // 'cardio-body-building': [],
  'specialty-extra-raw-body-aesthetics': []
  // 'specialty-extra-raw-gymnastics': []
};

(async () => {
  const start = new Date();
  const browser = await puppeteer.launch();
  for (let program in Programs) {
    Programs[program] = await programScraper(program, browser);
  }

  console.log(Programs);
  for (let program in Programs) {
    let promisedWODs = [];
    for (let wodURL of Programs[program]) {
      promisedWODs.push(wodScraper(wodURL, browser));
    }
    const WODS = await Promise.all(promisedWODs);

    fs.writeFileSync(`${program}-wods.json`, JSON.stringify(WODS));
  }

  await browser.close();
  const end = new Date();
  console.log(
    `Script completed in ${Math.round((end - start) / 1000)} seconds`
  );
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
  const pageHTML = await (await page.goto(url, { timeout: 0 })).text();
  return cheerio.load(pageHTML);
}

// Accepts HTML and returns formatted WOD
const extractWODText = $ => {
  let WOD = {};
  let sectionHeader = '';
  WOD['week'] = $('time').text();
  WOD['session'] = $('h1')
    .text()
    .substring(8, 9);
  WOD['workout'] = wodParser($('main > section > div'));

  return WOD;
};

// Accepts the cheerio'd representation of
// a WOD's main section and returns the contained  text
function wodParser($) {
  let content = '';
  $section.find('p, li').each(function(_, e) {
    let $e = $(e);
    let text = $e.text();
    if (text.charCodeAt(0) === 160) return;
    content += text;
  });
  return content;
}

// $('main > section > div')
//   .find('p')
//   .each(function(_, e) {
//     if (text.charCodeAt(0) === 160) return;
//     if (
//       $e.has('strong').length &&
//       $e
//         .next('p')
//         .text()
//         .charCodeAt(0) !== 160 &&
//       !$e.next('p').has('strong').length
//     ) {
//       let headerText = $e.find('strong').text();
//       let contentText = '';
//       if (text.length > headerText.length) {
//         contentText = text.indexOf(headerText[headerText.length - 2]);
//       }
//       wod['workout'][headerText.trim()] = contentText;
//       sectionHeader = headerText;
//     } else if (sectionHeader.length && !text.includes('Logged in')) {
//       WOD['workout'][sectionHeader] = WOD['workout'][sectionHeader].concat(
//         `${text.trim()}\n`
//       );
//     }
//   });

// Accepts HTML and returns an array of URLs
const extractWODLinks = $ => {
  let links = [];
  $('main > section')
    .find('article a.entry-title')
    .each(function(i, e) {
      links.push($(e).attr('href'));
    });
  return links;
};
