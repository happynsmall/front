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
router.get("/detail/:id", (req, res) => {
	util.log("상품정보 조회");

	ret = {
		author_id: "001",
		author_name: "이해경",
		prod_name: "노트북",
		prod_no: "111",
		prod_section: "PC"
	}
	res.render("views/detail", {
		mode: "view",
		data: ret 
	});
/*
	getEntry(req.params.id, token, function(ret) {
		if(ret != null) {
			res.render("views/detail", {
				mode: "view",
				data: ret
			});				
		}
	});
*/
});


//--- get one data
let getEntry = function(id, token, callback) {
	let _headers = {}
	_headers[__ACCESS_TOKEN_NAME] = token;
	axios.get(__API_PRODUCT_URI + "/detail", {
		headers: _headers,
		params: {
			prod_id: id
		}
	})
	.then((ret) => {
		util.log("Success to get detail info !");
		let data = ret.data;
		util.log(data.value);
		callback(data.value);	
	})
	.catch((error) => {
		console.error("Fail to get product info!", error);
		callback(null);
	});	
}

module.exports = router;
