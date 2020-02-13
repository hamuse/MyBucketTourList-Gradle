"use strict"
var deleteinfo = deleteinfo ||{}
deleteinfo =(()=>{
	const WHEN_ERR = '호출하는 login 페이지가 없음'
	let context, js;
    let mainVuejs,deleteinfovuejs,mainHomejs ;
	let init = () => {
        context = $.ctx()
		js = $.js()
		deleteinfovuejs = js + '/uservue/deleteinfo_vue.js'
		mainVuejs = js +'/vue/mainVue.js'
		mainHomejs = js + '/cmm/mainHome.js'
	}
	let onCreate=()=>{
		init()
		$.when(
			$.getScript(mainVuejs),
			$.getScript(deleteinfovuejs),
			$.getScript(mainHomejs)
		).done(()=>{
			setContentView()
			godeletemain()
		}).fail(()=>{
			alert(WHEN_ERR)
		})
	}
	let setContentView=()=>{
		$('#mainbody').html(deleteinfo_vue.deleteinfo_body())
	}
	let godeletemain=()=>{
		$('#gogomain_btn').click(()=>{
			let data ={uid:$(`#uid`).val(),pwd:$(`#pwd`).val()}
			$.ajax({
				url:context+'/user/'+$('#uid').val()+'/remove',
				type:'DELETE',
				data:JSON.stringify(data),
				dataType:'json',
				contentType:'application/json',
				success:d=>{
                	mainHome.onCreate()
				},error:e=>{
				}
			})
            })
	}
	return{onCreate}
})()