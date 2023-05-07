// let episode = new Map();
  // episode.set('title', title);
  // episode.set('subtitle', subtitle);
  // episode.set('number', episodeNumber);
  // episode.set('pubDate', pubDate);
  // episode.set('story', story);

import {episode} from './testMap.js' ;


// console.log(episode.get('title'))

const fs = require('fs');

let story = episode.get('title');

fs.writeFile('./story.txt', story, (err) =>{
  if (err) throw err;
})
