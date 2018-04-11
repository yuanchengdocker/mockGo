module.exports = {
	port: "8888",
	api: "/api",
	resources: [
		{
			action: "get",
			error: false,
			error_msg: "",
			url: "/sales/query",
			isArray: true,
			size:2,
			params:{
				id:"number",
				name:"name",
				address:"string",
				time:"date",
				child:{
					id:"number",
					male:"boolean",
					hha:{
						dd:"string",
						mm:"boolean"
					}
				},
				childs:[
					{
						id:"number",
						name:"name"
					},
					{
						id:"number",
						name:"name"
					}
				]
			},
			data: null
		},{
			action: "post",
			error: false,
			error_msg: "",
			url: "/sales/add",
			isArray: true,
			params:{
				id:"number",
				name:"name",
				address:"string",
				time:"date",
				child:{
					id:"number",
					male:"boolean",
					hha:{
						dd:"string",
						mm:"boolean"
					}
				},
				childs:[
					{
						id:"number",
						name:"name"
					},
					{
						id:"number",
						name:"name"
					}
				]
			},
			data: null
		}
	]
}