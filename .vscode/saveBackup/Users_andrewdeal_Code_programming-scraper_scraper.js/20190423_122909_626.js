/*
TODO
[ ] Find a NodeJS Scraping Library (with ability to make http request)
[ ] Configure scraper program to accept a cookie with Authentication details
[ ] Construct request to base page for template programming
[ ] Identify html tags that link to each day's programming
[ ] Identify html tag that contains day's programming
[ ] Identify html tag that links to next page of archived workouts
*/
const puppeteer = require('puppeteer-core');
const BASE_URL = 'https://www.rawstrengthandconditioning.com/category/';

console.log(puppeteer);