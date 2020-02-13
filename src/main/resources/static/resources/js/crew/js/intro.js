"use strict"
var intro = intro || {}
intro = (()=>{
	const WHEN_ERR = '호출하는 restojs를 찾을수 없습니다.'
	let context, js;
	let restovuejs;
	let init = () => {
		context = $.ctx();
		js = $.js();
		restovuejs = js + '/resto/vue/restoVue.js'
	}
	let onCreate = () => {
		init()
		$.when(
			$.getScript(restovuejs)
		).done(() => {
			alert('restoOnCreate')
			/* setContentView()
			restodetail() */
		}).fail(() => {
			alert(WHEN_ERR)
		})
	}
	let setContentView = () => {
		alert('resto setContenView')
		$(restoVue.restoVue_head()).appendTo('head')
		$('#mainbody').html(restoVue.restoVue_body())
	}
	let restodetail = () => {
		$(`<div id="myModal" class="modal">
							  <!-- Modal content -->
							  <div class="modal-content">
							    <div style="width:100%; ">
									<span class="close">&times;</span>
									<h1>RESTO</h1>
								<div id="imgdiv" style="width:50%; height:50%">
								<img style="width:100%; height:100%; margin-left:50%;" src="https://cdn.crowdpic.net/detail-thumb/thumb_d_CF17E73F33A3EC79EC61FF29B0BE1F48.jpg" class="img-responsive" alt="">
								</div>
								<br/>
								<div id="hoteldetailspan" style="width:40%; margin-left:10% ">	
								<h4>장소</h4>
								<h4>주소</h4>
								<h4>전화번호</h4>
								</div>
								<div id="buttondiv" style="width:50%; height:40%; margin-left:60%;">	
							    <button id="restoCancelbtn">취소</button>
								<button id="restoCheckbtn">예약</button>
								<div>
								</div>
							  </div>
							</div>`).appendTo('body')
		$('#restopopbtn').click(e => {
			e.preventDefault
			alert('>>>> ')
			const modal = document.getElementById("myModal");
			modal.style.display = "block";
			const span = document.getElementsByClassName("close")[0];
			span.onclick = function () {
				modal.style.display = "none";
			}
			window.onclick = function (event) {
				if (event.target == modal) {
					modal.style.display = "none";
				}
			}
		})
	}
	
	return{onCreate}
})();