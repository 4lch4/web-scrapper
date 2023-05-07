// let episode = new Map();
  // episode.set('title', title);
  // episode.set('subtitle', subtitle);
  // episode.set('number', episodeNumber);
  // episode.set('pubDate', pubDate);
  // episode.set('story', story);

import {episode} from './testMap.js' ;

import * as fs from 'fs';
import * as df from 'date-format';

// console.log(episode.get('pubDate'));

let stringDate = df.asString('yyyy-MM-dd', episode.get('pubDate'));

// console.log(stringDate);

let fileName = "./" + stringDate + ".txt";

 // console.log(fileName);

fs.writeFile(fileName, "some more random test \n multi-line test", (err) =>{
  if (err) throw err;
})

fs.appendFile(fileName, "\n", (err) => {
  if (err) throw err;
})
