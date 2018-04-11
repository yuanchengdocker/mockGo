const data = require('../../data.config.js')
const utils = require('../utils.js')
let resources = data.resources

if(!resources || resources.__proto__ !== Array.prototype || resources.length <= 0){
	console.log(`您配置的数据有问题，resources资源为 ${resources}`)
	return
}

var getParamType = function(value){
	let type = Object.prototype.toString.call(value)

	return type.substring(8,type.length-1)
}

var getMock = function(type){
	let result = ""
	let ran1 = parseInt(Math.random()*10)
	let ran2 = parseInt(Math.random()*10)
	switch(type){
		case "name": result = utils.randomName();break
		case "string": result = utils.randomText(ran1*ran2);break
		case "title": result = utils.randomText(ran1*2);break
		case "number": result = 10000; break;
		case "boolean": result = ran1%2===0; break;
		case "date": result = (new Date()).getTime(); break;
	}
	return result
}

var setParamValue = function(params,mockData){
	if(!params || typeof params !== "object") return

	for(let key in params){
		let value = params[key]
		let type = getParamType(value)
		if(type === "Object"){
			var childObj = {}
			mockData[key] = childObj
			setParamValue(value,childObj)
		} else if(type === "Array"){
			var childArr = (new Array(value.length)).fill({})
			mockData[key] = childArr
			value.forEach((item,index) => {
				setParamValue(item,childArr[index])
			})
		} else {
			mockData[key] = getMock(value)
		}
	}
}

var getMockFn = function(){
	resources.map((item) => {
		var size = item.size || 10
		let datas = []
		for(let i=0;i<size;i++){
			let mockObj = {}
			setParamValue(item.params, mockObj)
			datas.push(mockObj)
		}
		
		item.data = item.isArray ? datas : datas[0]
	})

	return data
}

module.exports = getMockFn()