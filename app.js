var express = require('express'), 
    exphbs  = require('express-handlebars');
dbPass = ''

var prompt = require('prompt');

prompt.start()

prompt.get(['DBPassword'], function(err, result) {
    dbPass = result.DBPassword;
    startApp();
});

function startApp() {         
    app = express();

    app.engine('handlebars', exphbs({defaultLayout: 'main', partialsDir: 'views/partials/'}));
    app.set('view engine', 'handlebars')

    app.use(express.static(__dirname + '/public'))
    app.use(require('./controllers'))

    app.listen(3000, function() {
      console.log('Listening on port 3000...')
    })
}