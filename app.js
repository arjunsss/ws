var express = require('express')
var app = express()
var expressWs = require('express-ws')(app);
var port = 3500
app.get('/', (req, res) => { res.send("HELLO WORLD") })

app.ws('/ws/', (ws, req) => {
    ws.on('message', (msg) => {
        console.log(`Received ${msg.length} bytes`)
    })
})

app.listen(port, function () {
    console.log(`SERVER RUNNING - PORT ${port}`)
})