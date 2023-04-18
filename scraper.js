const axios = require('axios');
const cheerio = require('cheerio');

axios.get('https://www.theregister.com/2023/04/14/bofh_2023_episode_7/')
  .then(response => {
    // The HTML code of the website is stored in the "data" property of the response object
    const html = response.data;
    const $ = cheerio.load(html);
    const title = $('div[class=header_right] > h1').text();
    const title2 = $('div[class=header_right] > h2').text();
    const header_right = $('header_right').text();
    console.log(title);
    console.log(title2);
  })
