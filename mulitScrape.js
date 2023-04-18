const axios = require('axios');
const cheerio = require('cheerio');

axios.get('https://www.theregister.com/2000/05/09/bofh_returns_from_the_dead/')
  .then(response => {
    // The HTML code of the website is stored in the "data" property of the response object
    const html = response.data;
    const $ = cheerio.load(html);
    const episodeElements = $('div[id=page] > article');

    const episode = episodeElements.map((index, element) => {
      return {
        title: $(element).find('div[class=header_right] > h1').text(),
        subtitle: $(element).find('div[class=header_right] > h2').text(),
        story: $(element).find('div[id=body] > p').text(),
      };
    }).get();

console.log(JSON.stringify(episode));
});
