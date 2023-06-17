import axios, * as others from 'axios';
import * as cheerio from 'cheerio';
import * as fs from 'fs';
import * as df from 'date-format';

let URL = process.argv[2];

axios.get(URL).then(response => { // The HTML code of the website is stored in the "data" property of the response object
    const html = response.data;
    const $ = cheerio.load(html);
    const episodeElements = $('div[id=page] > div[id=main-col] > div[class=headlines]');

console.log(episodeElements);

var links = (episodeElements
  .find('#div.srow.rt-* > article:nth-child(1) > a href') 
  .text()
  )
);

let bigString = 'temp';

links.forEach(element => {
  console.log(element);
//  bigString = element + "\n\n"
  });
 
//console.log(bigString);

 fs.writeFile('./OutPut/links.txt', bigString, err =>{
    if(err)
      console.log(err);
  });
});
