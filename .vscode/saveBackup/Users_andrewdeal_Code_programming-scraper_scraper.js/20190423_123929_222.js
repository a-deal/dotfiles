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
const puppeteer = require('puppeteer-core');
const cheerio = require('cheerio');
const yargs = require('yargs');

// Configuration
const BASE_URL = 'https://www.rawstrengthandconditioning.com/category/';
const TEMPLATE_PATHS = [
  'cardio-body-building',
  'specialty-extra-raw-body-aesthetics',
  'specialty-extra-raw-gymnastics'
];
const COOKIE = yargs.cookie;

console.log(COOKIE);
