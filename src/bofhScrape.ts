import Axios from 'axios'
import { load as loadHtml } from 'cheerio'

const bofhLink = 'https://www.theregister.com/2022/12/09/bofh_2022_episode_23/'

async function main() {
  try {
    const { data } = await Axios.get(bofhLink)

    const html = data as string

    const $ = loadHtml(html)
    const episodeElements = $('div[id=page] > article')

    const props: { [key: string]: any } = {
      title: episodeElements.find('div[class=header_right] > h1').text(),
      subtitle: episodeElements.find('div[class=header_right] > h2').text(),
      episodeNumber: episodeElements.find('#body > p:nth-child(1) > span').text(),
      pubDate: new Date(episodeElements.find('span[class=dateline]').text().substring(4, 15)),
      story: episodeElements
        .find('div[id=body] > p')
        .toArray()
        .map(element => $(element).text()),
    }

    const episodeMap = new Map()
    for (const key of Object.keys(props)) episodeMap.set(key, props[key])

    episodeMap.set('URL', bofhLink)

    return episodeMap
  } catch (error) {
    throw error
  }
}

main()
  .then(res => {
    console.log(`Execution completed successfully!`)
    console.log(res)
  })
  .catch(err => {
    console.error(`Execution failed!`)
    console.error(err)
  })
