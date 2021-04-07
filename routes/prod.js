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
router.get("/detail", (req, res) => {
	util.log("상품정보 조회");

	res.render("views/detail", {
		mode: "view",
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

router.post("/detail/search", (req, res) => {
	util.log("상품상세조회");
	console.log(req.body.prod_no);

	let itemNo = req.body.prod_no;
	util.log(itemNo + "e여까지옴");
	
	axios({
		method:"POST",
		url:'',
		data:{
			"itemNo": itemNo
		}
	}).then((res) => {
		console.log(res + "호호호")
	}).catch(error=>{
		console.log(error);
		throw new Error(error);
	});


	
});
//--- get one data
let getEntry = function(id, token, callback) {
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
