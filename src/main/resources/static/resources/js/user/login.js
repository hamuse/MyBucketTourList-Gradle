"use strict"
var login = login || {}
login = (() => {
	const WHEN_ERR = '호출하는 login 페이지가 없음'
	let context, js;
	let mainVuejs;
	let loginvuejs;
	let mainHomejs
	let routerjs
	let mypagejs
	let init = () => {
		context = $.ctx()
		js = $.js()
		loginvuejs = js + '/uservue/login_vue.js'
		mainHomejs = js + '/cmm/mainHome.js'
		routerjs = js + '/cmm/router.js'
		mypagejs = js + '/user/mypage.js'
	}
	let onCreate = () => {
		init()
		$.when(
			$.getScript(loginvuejs),
			$.getScript(mainHomejs),
			$.getScript(routerjs),
			$.getScript(mypagejs)
		).done(() => {
			setContentView()
			gofind()
			login()
		}).fail(() => {
			alert(WHEN_ERR)
		})
	}
	let setContentView = () => {
		$('#mainbody').html(login_vue.login_body())
	}
	let gofind = () => {
		findinfo.onCreate()
		let x = '';
		$('#findid_btn').click(() => {
			x = 'id'
			findinfo.onCreate(x)
		})
		$('#findpwd_btn').click(() => {
			x = 'pw'
			findinfo.onCreate(x)
		})
	}
	let login = () => {
		$('#userlogin_btn').click(() => {
			$.ajax({
				url: context + '/user/' + $('#uid').val(),
				type: 'POST',
				data: JSON.stringify({ uid: $('#uid').val(), pwd: $('#pwd').val() }),
				dataType: 'json',
				contentType: 'application/json',
				success: d => {
					$('#joinspace').remove()
					let s = d.user
					if (d.user == null) {
						$('#mainbody')
							.html(`<div style="text-align: -webkit-center;height :200px"><h4 id ="likecount">회원이 아니거나 존재하지 않는 아이디입니다</h4></div>`)
					} else {
						$.extend(new User(s))
						mainHome.onCreate()
					}
				},
				error: e => {
					alert('Loign AJAX 실패');
				}
			})
		})
	}
	return { onCreate }
})()
