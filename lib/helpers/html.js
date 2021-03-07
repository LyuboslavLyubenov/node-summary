const cheerio = require('cheerio')
const htmlToText = require('html-to-text')

const convertHTMLToText = body => {
  return htmlToText.fromString(body.toString(), {
    ignoreHref: true,
    ignoreImage: true,
  })
}

const getTitle = htmlBody => {
  let $ = cheerio.load(htmlBody)
  return $('title').text() || $('h1').text() || ''
}

module.exports = {
  convertHTMLToText,
  getTitle
}