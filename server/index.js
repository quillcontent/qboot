var express = require('express'),
	path = require('path'),
    app = express();

app.set('views', 'server/views/');
app.set('view engine', 'jade');

app.use('/', express.static(path.join(__dirname, '../build')));

app.get('/', function(req, res, next) {
	res.render('index');
});

// 6061 is an aluminum alloy. It's what you make aircraft out of.
app.listen(process.env.PORT || 6061, function() {
  console.log('listening on *:6061');
});
