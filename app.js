/*jshint esversion: 6 */
//--- import libraries
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');
const cookieParser = require('cookie-parser');
const util = require(__dirname+'/util');
//----------

//--- global constants & 환경변수
global.__BASEDIR = __dirname + '/';
const port = (process.env.service_target_port || 8090);
//--------


//---- 기본 library 셋팅
const app = express();
app.use(express.static(path.join(__BASEDIR, '/public')));		//static resource 폴더 
app.use(bodyParser.urlencoded({extended:false}));				//include request 객체 parser
app.use(cookieParser());										//include cookie parser
//-----------

//--- ejs(Embed JS) 환경 셋팅
app.set('view engine','ejs');							//ui page rendering 시 ejs 사용
app.set('views', path.join(__BASEDIR, '/templates'));	//ui rendering시 사용할 ejs파일 위치 지정
//-------------

//----- middle ware: routing되는 서버모듈 시작 전에 항상 수행-인증토큰 검증
app.use(function(req, res, next) {
	let pathname = req.url;
    util.log("Request for [" + pathname + "] received.");
	next();

});
//-------------

//--- include 개발 모듈
app.use(require(path.join(__BASEDIR, "/routes/prod.js")));		//include 상품정보처리
//--------

//----- start web server 
app.listen(port, () => {
	console.log('Listen: ' + port);
});
//----------------
