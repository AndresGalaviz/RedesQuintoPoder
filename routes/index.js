var express = require('express');
var router = express.Router();
// For Ghost
var httpProxy = require('http-proxy');
var blogProxy = httpProxy.createProxyServer({});
// var ghost     = require('ghost');
// var path      = require('path');

// Route /blog* to Ghost
router.use("/ghost/", function(req, res){ 
    blogProxy.web(req, res, { target: 'http://localhost:2368' });
});
ghost({config: path.join(__dirname, '../ghost/config.js')}).then(function (ghostServer) {
     ghostServer.start();
});
router.use("/blog/", function(req, res){ 
    blogProxy.web(req, res, { target: 'blogrqpidea.azurewebsites.net' });
});
/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Express' });
});

module.exports = router;
