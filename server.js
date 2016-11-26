//server.js

var express = require('express')

var compression = require('compression')
var path = require('path')

var app = express()

app.use(compression())
//serve my static stuffs like css
app.use(express.static(__dirname, 'public'))

//send all requests to index.html so browserHistory in react router works
app.get('*', function(req, res){
	res.sendFile(path.join(__dirname,'public','index.html'))
})

var PORT = process.env.PORT || 8080
app.listen(PORT, function(){
	console.log('Production express server running at localhost:' + PORT)
})