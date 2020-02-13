"use strict"

var myLists= myLists || {}
myLists= (()=>{
	const WHEN_ERR = '호출하는 myLists js를 찾을수 없습니다.'
	let context,js;
	let myListVuejs;
	let init =()=>{
		context =$.ctx()
		js + $.js()
		myListvuejs = js + '/crew/myList/myListVue.js'
	}
	let onCreate=()=>{
		init()
		$.when(
			$.getScript(myListvuejs)
		).done(() => {
			setContentView()
		}).fail(() => {

		})
	}
	let setContentView=()=>{

	}

	return{onCreate}
})();