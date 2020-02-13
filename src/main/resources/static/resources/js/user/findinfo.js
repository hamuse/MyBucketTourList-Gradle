"use strict"
var findinfo = findinfo || {}
findinfo = (() => {
	const WHEN_ERR = '호출하는 findinfo 페이지가 없음'
	let context, js;
	let mainVuejs;
	let findinfovuejs;
	let loginjs
	let init = () => {
		context = $.ctx()
		js = $.js()
		findinfovuejs = js + '/uservue/findinfo_vue.js'
		mainVuejs = js + '/vue/mainVue.js'
		loginjs = js + '/user/login.js'
	}
	let onCreate = x => {
		init()
		$.when(
			$.getScript(mainVuejs),
			$.getScript(findinfovuejs),
			$.getScript(loginjs)
		).done(() => {
			setContentView(x)
			find()
		}).fail(() => {
			alert(WHEN_ERR)
		})
	}
	let setContentView = () => {
		$('#findid_btn').click(() => {
			$('#mainbody').html(findinfo_vue.findinfo_id())
		})
		$('#findpwd_btn').click(() => {
			$('#mainbody').html(findinfo_vue.findinfo_pwd())
		})
	}
	let find = () => {
		$('#btnfindid').click(() => {
			let json = {
				uname: $('#finduname').val(),
				tel: $('#findtel').val(),
			}
			$.ajax({
				url: `${context}/user/findid`,
				type: 'POST',
				data: JSON.stringify(json),
				dataType: 'json',
				contentType: 'application/json',
				success: d => {
					$('#finduserid').html
						(`<h4 style="text-align: -webkit-center;">아이디는 ${d.uid}입니다</h4>`)
				},
				error: e => { }
			})
		})
		$('#btnfindpw').click(() => {
			let json = {
				uid: $('#finduserid').val(),
				tel: $('#findteltel').val(),
			}
			$.ajax({
				url: `${context}/user/findpw`,
				type: 'POST',
				data: JSON.stringify(json),
				dataType: 'json',
				contentType: 'application/json',
				success: d => {
					$('#finduserpw').html
						(`<h4 style="text-align: -webkit-center;">비밀번호는 ${d.pwd}입니다</h4>`)
				},
				error: e => { }
			})
		})
	}

	return { onCreate }
})()