var koa = require('koa');
var app = module.exports = koa();
var koahbs = require('koa-hbs');
var path = require('path');

app.use(koahbs.middleware({
  viewPath: path.join(__dirname, '/views'),
  partialsPath: path.join(__dirname, '/views/partials'),
  defaultLayout: 'main'
}));

require('./routes')(app);

if (!module.parent) app.listen(process.env.PORT || 3000);
