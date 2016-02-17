module.exports = function (app) {
  var Router 		= require('koa-router');
  var router = new Router();
    // var lifestyle = require('lifestyle');
    // var client = new lifestyle.FinnClient("https://cache.api.finn.no/iad/", process.env.finn);

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
  })
  .get('/house', function *() {
      // getHouses();
    yield this.render('house');
  });
  /*
  function getHouses() {
  client
  .search('realestate-homes', { location: '1.20061.20512', ownership_type: 3, sort: 3 })
  .then(function(result) {
  result.entries.forEach(function (ad) {
  return client.getAd(ad.adId);
})
//return client.getAd(adId);
})
.then(function(ad) {
console.log(ad);
//console.log(ad.title, ad.links.alternate);
//ad.aData.general_text.forEach(function(e) {
//console.log(e.value.replace(/<br \/>/g, "\n"))
//});
})
.catch(function(err) {
console.log("Error fetching ad:");
console.log(err.stack);
});
}
*/

  app.use(router.middleware());
};
