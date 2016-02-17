var app = require('../app.js');
var request = require('supertest').agent(app.listen());

describe('Website', function () {
  it('index should contain Rent or buy', function (done) {
    request
    .get('/')
    .expect(200)
    .expect(/Rent or buy/, done);
  });

  it('index should contain Registrer', function (done) {
    request
    .get('/')
    .expect(200)
    .expect(/Register a new user/, done);
  });

  it('login should contain Log in', function (done) {
    request
    .get('/login')
    .expect(200)
    .expect(/Log in/, done);
  });

  it('recover should contain Forgot password', function (done) {
    request
    .get('/recover')
    .expect(200)
    .expect(/Forgot your password/, done);
  });

  it('change should contain Change password', function (done) {
    request
    .get('/change')
    .expect(200)
    .expect(/Change password/, done);
  });
});
