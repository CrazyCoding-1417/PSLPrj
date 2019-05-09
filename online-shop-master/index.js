const express = require('express')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const cors = require('cors')
const webpush = require('web-push')

const mongoose = require('./mongoose');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const router = express.Router();
const request = require('request');
const twitterConfig = require('./twitter.config.js');


mongoose();

var User = require('mongoose').model('User');
var passportConfig = require('./passport');

passportConfig();

const app = express()

dotenv.config()

var corsOption = {
  origin: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  exposedHeaders: ['x-auth-token']
};
app.use(cors(corsOption));

app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json())

webpush.setVapidDetails(process.env.WEB_PUSH_CONTACT, process.env.PUBLIC_VAPID_KEY, process.env.PRIVATE_VAPID_KEY)

app.get('/', (req, res) => {
  res.send('Hello server is working!')
})

app.post('/notifications/discount', (req, res) => {
  const discount = req.body

  console.log({discount})

  const payload = JSON.stringify({
    title: '10% Discount!!',
    body: 'SHOP at Lowes',
    icon: 'http://image.ibb.co/frYOFd/tmlogo.png',
  })

  webpush.sendNotification(discount, payload)
    .then(result => console.log(result))
    .catch(e => console.log(e.stack))

  res.status(200).json({'success': true, payload})
});

router.route('/health-check').get(function(req, res){
  res.status(200);
  res.send('Hello');
});

var createToken = function(auth) {
    return jwt.sign({
      id: auth.id
    }, 'my-secret',
    {
      expiresIn: 60 * 120
    });
  };

  var generateToken = function(req, res, next) {
    req.token = createToken(req.auth);
    return next();
  };

  var sendToken = function(req, res) {
    res.setHeader('x-auth-token', req.token);
    return res.status(200).send(JSON.stringify(req.user));
  };

  router.route('/auth/twitter/reverse')
    .post(function(req, res) {
      request.post({
      url: 'https://api.twitter.com/oauth/request_token',
      oauth: {
        oauth_callback: 'http%3A%2Flocalhost%3A3000%2Ftwitter-callback',
        consumer_key: twitterConfig.consumerKey,
        consumer_secret: twitterConfig.consumerSecret
      }
    }, function(err, r, body) {
      if(err) {
        return res.send(500, { message: e.message });
      }
      var jsonStr = '{"' + body.replace(/&/g, '", "').replace(/=/g, '": "') + '"}';
      res.send(JSON.parse(jsonStr));
    });
  });

router.route('/auth/twitter')
  .post((req, res, next) => {
    request.post({
      url: `https://api.twitter.com/oauth/access_token?oauth_verifier`,
      oauth: {
        consumer_key: twitterConfig.consumerKey,
        consumer_secret: twitterConfig.consumerSecret,
        token: req.query.oauth_token
      },
      form: { oauth_verifier: req.query.oauth_verifier }
    }, function(err, r, body) {
      if(err) {
        return res.send(500, { message: err.message });
      }
      const bodyString = '{ "' + body.replace(/&/g, '", ').replace(/=/g, '": ') + '"}';
      const parsedBody = JSON.parse(bodyString);

      req.body['oauth_token'] = parsedBody.oauth_token;
      req.body['oauth_token_secret'] = parsedBody.oauth_token_secret;
      req.body['user_id'] = parsedBody.user_id;

      next();
    });
  }, passport.authenticate('twitter-token', {session: false}), function(req, res, next) {
    if(!req.user) {
      return res.send(401, 'User Not Authenticated');
    }

    req.auth = {
      id: req.user.id
    };

    return next();
  }, generateToken, sendToken);

var authenticate = expressJwt({
  secret: 'my-secret',
  requestProperty: 'auth',
  getToken: function(req) {
    if(req.headers['x-auth-token']) {
      return req.headers['x-auth-token'];
    }
    return null;
  }
});

var getCurrentUser = function(req, res, next) {
  User.findById(req.auth.id, function(err, user) {
    if(err) {
      next(err);
    } else {
      req.user = user;
      next();
    }
  });
};

var getOne = function (req, res) {
  var user = req.user.toObject();

  delete user['twitterProvider'];
  delete user['__v'];

  res.json(user);
}

router.route('/auth/me')
  .get(authenticate, getCurrentUser, getOne);

app.use('/api/v1', router);

module.exports = app;


app.listen(4000, () => console.log('The server has been started on the port 4000'))
