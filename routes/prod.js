/*jshint esversion: 6 */

//---- import libraries
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const util = require(__BASEDIR + '/util');
//---------------

//---- 기본 library 셋팅
const router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));
//----------

//--Show
router.get("/", (req, res) => {
	res.redirect('/main');
});

//--Show
router.get("/main", (req, res) => {
	util.log("상품메인");

	res.render("views/main", {
		mode: "view",
	});
});

//-- ProductDetail
router.get("/detail/:id", (req, res) => {
	util.log("상품정보 조회");
	getEntry(req.params.id, function(ret) {
		if(ret != null) {
			res.render("views/detail", {
				mode: "view",
				data: ret
			});				
		}
	});
});

//--- get one data
let getEntry = function(id, callback) {
	util.log("request->" + __API_PRODUCT_URI + "/product/" + id);
	axios.get(__API_PRODUCT_URI + "/product/" + id, {
	})
	.then((ret) => {
		util.log("Success to get detail info !");
		let data = ret.data;
		util.log(data);
		callback(data);	
	})
	.catch((error) => {
		console.error("Fail to get product info!", error);
		callback(null);
	});
}

module.exports = router;
