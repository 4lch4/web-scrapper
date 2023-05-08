// let episode = new Map();
  // episode.set('title', title);
  // episode.set('subtitle', subtitle);
  // episode.set('number', episodeNumber);
  // episode.set('pubDate', pubDate);
  // episode.set('story', story);
  // episode.set('URL', bofhLink);

import {episode} from './testMap.js' ;

import * as fs from 'fs';
import * as df from 'date-format';

let stringDate = df.asString('yyyy-MM-dd', episode.get('pubDate'));
let stringYear = df.asString('yyyy', episode.get('pubdate'));

let fileName = "./OutPut/" + stringYear + " " + episode.get('number') + (".md");

fs.writeFile(fileName, "# " + episode.get('title') + "\n\n## " + episode.get('subtitle') + "\n\n", (err) =>{
  if (err) throw err;
})

function append(story){
  fs.appendFile(fileName, story, (err) => {
    if (err) throw err;
  });
}

append(episode.get('story'));
append("\n\nPublished on: " + episode.get('pubDate'));
append("\nWritten By: Simon Travaglia");
append("\nPosted to: " + episode.get('URL'));
