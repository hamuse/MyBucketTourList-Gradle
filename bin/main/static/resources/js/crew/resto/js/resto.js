"use strict"
var resto = resto || {}
resto = (() => {
	const WHEN_ERR = '호출하는 restojs를 찾을수 없습니다.'
	let context, js;
	let restovuejs;
	let restoDataSource;
	let mapjs;
	let init = () => {
		context = $.ctx();
		js = $.js();
		restovuejs = js + '/crew/resto/vue/restoVue.js'
		mapjs = js + '/crew/js/map.js'
	}
	let onCreate = () => {
		init()
		$.when(
			$.getScript(restovuejs),
			$.getScript(mapjs)
		).done(() => {
			setContentView()
			restoList()
		}).fail(() => {
			alert(WHEN_ERR)
		})
	}
	let setContentView = () => {
		$('html').scrollTop(0);
		$('#mainbody').html(restoVue.restoVue_body())
	}
	let restoList = () => {
		$.getJSON(context + '/restos/resto/list', d => {
			restoDataSource = d.list
			$.each(restoDataSource, (i, j) => {
				$(`<div style="width:23%; height: 260px; float:left; margin-right:2%; margin-top:2%; text-align: center;">
         <div style="width: 100%; height: 100%;  border-radius: 5px;">
<div style="width: 100%; height: 60%;  border-radius: 2px;">
<img style="width:100%; height:100%;" src="${j.img}">
</div>
	<p style="color:darkslategray;">${j.place}</p>
	<input style="color:#6c757d; background-color: #fff; border: 1px solid #6c757d; cursor: pointer; padding: .375rem .75rem; font-size: 1rem; border-radius: .25rem;" type="button" id="button_${i}" name="button_${i}"  value="상세보기">
          </div>`).appendTo('#restobodydiv')
			})
			restodetailClickEvent()
		})
	}
	let restodetailClickEvent = () => {
		let restoIndex = ''
		let btntag = ''
		let splitbtn = ''
		let splitplace = ''
		$("input[name^='button']").on("click", function (e) {
			e.preventDefault
			splitbtn = $(this).attr('name')
			splitplace = splitbtn.split("_")
			btntag = splitplace[0]
			restoIndex = splitplace[1]
			restodetailModal(restoIndex)
			const modal = document.getElementById("restoModal");
			modal.style.display = "block";
			const span = document.getElementsByClassName("close")[0];
			span.onclick = function () {
				modal.style.display = "none";
				$('#restoModal').remove()
			}
			$('#restoCancelbtn').click(e => {
				e.preventDefault
				$('#restoModal').remove()
			})
			$('#restoCheckbtn').click(function () {
				let restoData = restoDataSource[restoIndex]
				sessionStorage.setItem('restoName', restoData.place);
				sessionStorage.setItem('restospot', restoData.spot);
				sessionStorage.setItem('restopoint', restoData.point);
				sessionStorage.setItem('restoimg', restoData.img);
				sessionStorage.setItem('restolatitude', restoData.latitude);
				sessionStorage.setItem('restoinfo', restoData.info);
				map.onCreate()
				$('#restoModal').remove()
			})
			window.onclick = function (event) {
				if (event.target == modal) {
					$('#restoModal').remove()
				}
			}
		})
	}
	let restodetailModal = restoIndex => {
		let restoData = restoDataSource[restoIndex]
		$(`<div id="restoModal" class="modal" style="display: none; text-align: center;  position: fixed; z-index: 1;  padding-top: 100px;   left: 0;  top: 0;  width: 100%;  height: 100%;   overflow: auto;  background-color: rgb(0,0,0);  background-color: rgba(0,0,0,0.4);> 
								<!-- Modal content -->
								<div class="modaldiv" style="position: fixed;">
							  <div class="modal-content" style=" background-color: #FEFEFE; margin: auto; padding: 20px; border: 1px solid #888; width: 50%;>
							    <div style="width:100%;">
									<span class="close">&times;</span>
									<h1>${restoData.place}</h1>
								<div id="imgdiv" style="width:50%; height:50%">
								<img style="width:100%; height:100%; margin-left:50%;" src="${restoData.img}" alt="">
								</div>
								<br/>
								<div id="restodetailspan" style="width:70%; margin-left:10% ">	
								<h4>${restoData.spot}</h4>
								<h4>${restoData.point}</h4>
								<h4>${restoData.info}</h4>
								</div>
								<div id="restobuttondiv" style="width:50%; height:40%; margin-left:60%;">	
							    <button id="restoCancelbtn" style="color: #fff; background-color: #6c757d; border: 1px solid #6c757d; cursor: pointer; padding: .375rem .75rem; font-size: 1rem; border-radius: .25rem;">취소</button>
								<button id="restoCheckbtn" value ="restoname" style="color: #fff; background-color: #6c757d; border: 1px solid #6c757d; cursor: pointer; padding: .375rem .75rem; font-size: 1rem; border-radius: .25rem;">예약</button>
								<div>
								</div>
								</div>
								</div>
							</div>`).appendTo('body')
	}
	return { onCreate }
})();