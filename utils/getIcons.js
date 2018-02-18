// @preval
const fs = require('fs')
const path = require('path')

const iconPath = path.resolve('assets/icons')
const icons = fs.readdirSync(iconPath)

module.exports = icons.reduce((acc, file) => {
  const content = fs.readFileSync(path.join(iconPath, file), 'UTF8')

  acc[file.slice(0, -4)] = {
    path: /d="(.*?)"/.exec(content)[1],
    viewBox: /viewBox="(.*?)"/.exec(content)[1],
  }
  return acc
}, {})
