"use strict"
var userjoin = userjoin || {}
userjoin = (() => {
	const WHEN_ERR = '호출하는 userjoin 페이지가 없음'
	let context, js;
	let mainVuejs;
	let userjoinvuejs
	let mainHomejs
	let loginjs
	let init = () => {
		context = $.ctx()
		js = $.js()
		userjoinvuejs = js + '/uservue/userjoin_vue.js'
		mainVuejs = js + '/vue/mainVue.js'
		mainHomejs = js + '/cmm/mainHome.js'
		loginjs = js + '/user/login.js'
	}
	let onCreate = () => {
		init()
		$.when(
			$.getScript(mainVuejs),
			$.getScript(userjoinvuejs),
			$.getScript(mainHomejs),
			$.getScript(loginjs)
		).done(() => {
			setContentView()
			joincheck()
			gologin()
			maketable()
		}).fail(() => {
			alert(WHEN_ERR)
		})
	}
	let setContentView = () => {
		$(`#mainbody`).html(userjoin_vue.userjoin_body())
	}
	let joincheck = () => {
		$('#uid').keyup(() => {
			if ($('#uid').val().length > 3) {
				$.ajax({
					url: context + '/user/' + $('#uid').val() + '/existId',
					contentType: 'application/json',
					success: d => {
						if (d.msg === 'SUCCESS') {
							$('#dupl_check')
								.val('사용가능한 아이디입니다.')
								.css('color', 'blue')
						} else {
							$('#dupl_check')
								.val('중복된 아이디  입니다')
								.css('color', 'red')
						}
					}
				})
			} else {
				$('#dupl_check')
					.val('아이디는 4글자 이상입니다')
			}
		})
		$('#pwdcheck').keyup(() => {
			if ($('#pwd').val() == $('#pwdcheck').val()) {
				$('#pwdcheckresult').val('정확한 비밀번호입니다.').css('color', 'blue')
			} else {
				$('#pwdcheckresult').val('입력한 비밀번호를 다시 확인해주세요.').css('color', 'red')
			}
		})
	}
	let joincheckmodal = x => {
	
		$(`<div id="checkmsgmodal" class="modal" style="display: none; text-align: center; position: fixed; z-index: 1;  padding-top: 100px;   left: 0;  top: 0;  width: 100%;  height: 100%;   overflow: auto;  background-color: rgb(0,0,0);  background-color: rgba(0,0,0,0.4);> 
                        <!-- Modal content -->
                        <div class="modaldiv" style="position: fixed;">
                       <div class="modal-content" style=" background-color: #FEFEFE; margin: auto; padding: 20px; border: 1px solid #888; width: 50%;>
                         <div style="width:100%;">
                          <div><h5>${x}</h5></div>
                        <button id="closecheckmodal" style="color: #fff; background-color: #6c757d; border: 1px solid #6c757d; cursor: pointer; padding: .375rem .75rem; font-size: 1rem; border-radius: .25rem;">확인</button>
                       
                        </div>
                        </div>
                        </div>
                     </div>`).appendTo('#mainbody')

	}
	let gologin = () => {
		$('#userjoin_btn').click(e => {
			e.preventDefault()
			var checkmsg
			if ($('#uid').val().length < 4) {
				checkmsg='아이디를 확인해주세요'
				joincheckmodal(checkmsg)
				const checkidmodals = document.getElementById("checkmsgmodal");
				checkidmodals.style.display = "block";
				$('#closecheckmodal').click(e => {
					e.preventDefault()
					$('#checkmsgmodal').remove()
				})
			} else if ($('#pwd').val()== null || $('#pwdcheck').val()== null || $('#uname').val() == null|| $('#nickname').val() == null||
            $('#birthyear').val() == null|| $('#birthmonth').val()== null || $('#birthday').val() == null) {
				checkmsg='필수값을 입력해주세요'
				joincheckmodal(checkmsg)
				const checkelsemodals = document.getElementById("checkmsgmodal");
				checkelsemodals.style.display = "block";
				$('#closecheckmodal').click(e => {
					e.preventDefault()
					$('#checkmsgmodal').remove()
				})
			} else {
				let data = {
					uid: $(`#uid`).val(), pwd: $(`#pwd`).val(), uname: $(`#uname`).val(),
					nickname: $(`#nickname`).val(),
					birth: ($(`#birthyear`).val() + '-' + $(`#birthmonth`).val() + '-' + $(`#birthday`).val()),
					tel: ($(`#tel1`).val() + $(`#tel2`).val() + $(`#tel3`).val()),
					pettype: ($(`input[name="pettype"]:checked`).val() + $(`#pettype5`).val()),
					gender: $(`input[name="gendercheck"]:checked`).val()
				}
				$.ajax({
					url: context + '/user/',
					type: 'POST',
					dataType: 'json',
					data: JSON.stringify(data),
					contentType: 'application/json',
					success: d => {
						if (d.msg === 'SUCCESS') {
							login.onCreate()
						} else{}
					},
					error: e => {
						alert('AJAX 실패');
					}
				})
			}

		})
	}

	let maketable = () => {
		$('#createuser').click(() => {
			$.getJSON(context + '/user/create/table', d => {
			})
		})
		$('#createhost').click(() => {
			$.getJSON(context + '/host/create/table', d => {
			})
		})
		$('#dumuser').click(() => {
			$.getJSON(context + '/user/insert/dummy', d => {
			})
		})
	}
	return { onCreate }
})()