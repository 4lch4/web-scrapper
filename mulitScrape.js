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
        pubDate: $(element).find('span[class=dateline]').text(), // this picks up way too much junk. will need to process it into something useful
        story: $(element).find('div[id=body] > p').toArray().map(element => $(element).text()),
      };
    }).get();

    let episode1 = new Map();

//trying to add all the data to a map that I can call and use as an object

    episode1.set('title', $(element).find('div[class=header_right] > h1').text());
    episode1.set('subtitle', $(element).find('div[class=header_right] > h2').text());
    episode1.set('pubDate', $(element).find('span[class=dateline]').text());
//    episode1.set('')

    const story = (episodeElements
      .find('div[id=body] > p')
      .toArray()
      .map(element => $(element).text()));

console.log(episode(0));

//console.log(story);
});
