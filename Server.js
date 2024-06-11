const express = require('express');

app = express();
app.use('/', express.static(__dirname + '/'));

const port = 8000;
app.listen(port, function() {
	console.log("Listening on port " + port);
})
