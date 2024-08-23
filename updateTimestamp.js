// updateTimestamp.js
const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, 'static', 'lastUpdated.js')
const currentTimestamp = new Date().toISOString()

const content = `export default {
  timestamp: '${currentTimestamp}'
}`

fs.writeFileSync(filePath, content, 'utf8')
console.log('Last updated timestamp saved.')
