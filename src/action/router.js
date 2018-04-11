const express = require('express')
const data = require('../resouce/mockgo.js')

const port = data.port
const api = data.api
const resources = data.resources

if(!resources || resources.__proto__ !== Array.prototype || resources.length <= 0){
	console.log(`您配置的数据有问题，resources资源为 ${resources}`)
	return
}

const router = express.Router()

resources.forEach((item,index) => {
	const fn = function(req, res){
		if(item.error){
			res.json({
				code: 500,
				data: '',
				msg: item['error_msg']
			})
			return
		}
		res.json({
			code: 0,
			data: item.data
		})
	}
    
    switch(item.action){
        case "add": break;
        case "delete": break;
        case "update": break;
        case "query": break;
    }

	router.post(item.url, fn)
})

module.exports = {
    router: router,
    api: api,
    port: port
}