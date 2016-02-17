module.exports = function (app) {
  var Router 		= require('koa-router');
  var router = new Router();

  router
  .get('/', function *() {
    yield this.render('register');
  })
  .get('/login', function *() {
    yield this.render('login');
  })
  .get('/recover', function *() {
    yield this.render('recover');
  })
  .get('/change', function *() {
    yield this.render('change');
  });

  app.use(router.middleware());
};
