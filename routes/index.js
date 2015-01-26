var express = require('express');
var router = express.Router();
// For Ghost
var httpProxy = require('http-proxy');
var blogProxy = httpProxy.createProxyServer({});
var ghost     = require('ghost');
var path      = require('path');

// Route /blog* to Ghost
router.use("/blog/", function(req, res){ 
    blogProxy.web(req, res, { target: 'http://blogrqpidea.azurewebsites.net/' });
});

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Express' });
});

module.exports = router;
