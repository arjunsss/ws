var fs = require('fs')
const websocket = require('websocket-stream')
var ws = websocket(`ws://localhost:3500/ws`)
var rs = fs.createReadStream('./app.js')
setTimeout(() => rs.pipe(ws), 500)
