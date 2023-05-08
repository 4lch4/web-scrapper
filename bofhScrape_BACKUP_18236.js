const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

//let bofhLink = 'https://www.theregister.com/2023/04/14/bofh_2023_episode_7/';
let bofhLink = 'https://www.theregister.com/2022/12/09/bofh_2022_episode_23/';
//let bofhLink = 'https://www.theregister.com/2000/05/09/bofh_returns_from_the_dead/';

axios.get(bofhLink)
  .then(response => {
    // The HTML code of the website is stored in the "data" property of the response object
    const html = response.data;
    const $ = cheerio.load(html);
    const episodeElements = $('div[id=page] > article');

  var title = (episodeElements
    .find('div[class=header_right] > h1')
    .text()
  );

  var subtitle = (episodeElements
    .find('div[class=header_right] > h2')
    .text()
  );

  var episodeNumber = (episodeElements
    .find('#body > p:nth-child(1) > span')
    .text()
  );

  var pubDate = new Date (episodeElements
      .find('span[class=dateline]')
      .text()
      .substring(4,15)
  );

  var story = (episodeElements
    .find('div[id=body] > p')
    .toArray()
    .map(element => $(element)
    .text()
    )
  );
<<<<<<< HEAD
  
  var saveFolder = ('/home/zyzyx/git/web-scrapper/Epub/')
  var fileName = (pubDate.getFullYear() + ' - ' + episodeNumber + '.epub');
  var storyContent = ('# ' + title + '\n ## ' + subtitle);
      
fs.writeFile(saveFolder + fileName, storyContent, err => {
      if (err) {
        console.error(err);
      }
    });

//  let episode = new Map();
//    episode.set('title', title);
//    episode.set('subtitle', subtitle);
//    episode.set('number', episodeNumber);
//    episode.set('pubDate', pubDate);
//    episode.set('story', story);

//  console.log(episode.get('number'));
=======

  var pubDate = new Date (episodeElements
      .find('span[class=dateline]')
      .text()
      .substring(4,15)
  );

  let episode = new Map();
  episode.set('title', title);
  episode.set('subtitle', subtitle);
  episode.set('number', episodeNumber);
  episode.set('pubDate', pubDate);
  episode.set('story', story);
  episode.set('URL', bofhLink);

  // console.log(episode.get('number'));
>>>>>>> 98118695153e8ca6f73b8edafe879253d8f124ae
});
