"use strict"
var hotel = hotel || {}
hotel = (() => {
	const WHEN_ERR = '찾는 hotel.js를 호출할수 없습니다.'
	let context, js;
	let hotelvuejs;
	let restojs;
	let hotelDataSource;
	let loginjs;
	let init = () => {
		context = $.ctx()
		js = $.js()
		hotelvuejs = js + '/crew/hotel/vue/hotelVue.js'
		restojs = js + '/crew/resto/js/resto.js'
		loginjs = js + '/user/login.js'
	}
	let onCreate = () => {
		init()
		$.when(
			$.getScript(hotelvuejs),
			$.getScript(restojs),
			$.getScript(loginjs)
		).done(() => {
			setContentView()
			hotelCreate()
			mapsDBinsert()
			restoCreate()
			createTour()
			hotelList()
			createCorona()
			createAlldata()
			loginModalvue()
			createMyListdata()
		}).fail(() => {
			alert(WHEN_ERR)
		})
	}
	let setContentView = () => {
		$('#mainbody').empty()
		$(hotelVue.hotelVue_body()).appendTo('#mainbody')
	}
	let hotelList = () => {
		$.getJSON(context + '/hotels/hotel/list', d => {
			hotelDataSource = d.list
			$.each(hotelDataSource, (i, j) => {
				$(`<div style="width:23%; height: 260px; float:left; margin-right:2%; margin-top:2%; text-align: center;">
         <div style="width: 100%; height: 100%;  border-radius: 5px;">
<div style="width: 100%; height: 60%;  border-radius: 2px;">
<img style="width:100%; height:100%;" src="${j.img}">
</div>
	<p style="color:darkslategray;">${j.place}</p>
	<input style="color:#6c757d; background-color: #fff; border: 1px solid #6c757d; cursor: pointer; padding: .375rem .75rem; font-size: 1rem; border-radius: .25rem;" type="button" id="button_${i}" name="button_${i}" value="상세보기">
          </div>`).appendTo('#hotelbodydiv')
			})
			hoteldetailClickEvent()
		})
	}
	let hoteldetailClickEvent = () => {
		let hotelIndex = ''
		let btntag = ''
		let splitbtn = ''
		let splitplace = ''
		$("input[name^='button']").on("click", function (e) {
			e.preventDefault
			splitbtn = $(this).attr('name')
			splitplace = splitbtn.split("_")
			btntag = splitplace[0]
			hotelIndex = splitplace[1]
			hoteldetailModal(hotelIndex)
			const modal = document.getElementById("myModal");
			modal.style.display = "block";
			const span = document.getElementsByClassName("close")[0];
			span.onclick = function () {
				modal.style.display = "none";
				$('#myModal').remove()
			}
			$('#hotelCancelbtn').click(e => {
				e.preventDefault
				$('#myModal').remove()
			})
			$('#hotelCheckbtn').click(function () {
				if (sessionStorage.getItem('uid') == null) {
					$('#myModal').remove()
					const modals = document.getElementById("loginModal");
					modals.style.display = "block";
					const spans = document.getElementsByClassName("close")[0];
					spans.onclick = function () {
						modals.style.display = "none";
					}
					$('#loginCancelbtn').click(e => {
						e.preventDefault
						$('#loginModal').remove()
						onCreate()
					})
					$('#loginCheckbtn').click(e => {
						e.preventDefault
						$('#loginModal').remove()
						login.onCreate()
					})
				} else {
					let hotelData = hotelDataSource[hotelIndex]
					sessionStorage.setItem('hotelName', hotelData.place);
					sessionStorage.setItem('hotelspot', hotelData.spot);
					sessionStorage.setItem('hotelpoint', hotelData.point);
					sessionStorage.setItem('hotelimg', hotelData.img);
					sessionStorage.setItem('hotellatitude', hotelData.latitude);
					sessionStorage.setItem('hotelinfo', hotelData.info);
					resto.onCreate()
					$('#myModal').remove()
				}

			})
			window.onclick = function (event) {
				if (event.target == modal) {
					$('#myModal').remove()
				}
			}
		})
	}
	let hotelCreate = () => {
		$('#hotelDBbtn').click(e => {
			e.preventDefault
			alert("db버튼 클릭")
		/* 	$.getJSON(context + '/hotels/hotel/create', d => {
				alert("create table hotel 성공" + d.msg) */
				$.getJSON(context + '/hotels/hotel/insert', d => {
					alert("insert db hotel 성공" + d.msg)
				})
		/* 	}) */
		})
	}
	let hoteldetailModal = hotelIndex => {
		let hotelData = hotelDataSource[hotelIndex];
		$(`<div id="myModal" class="modal" style="display: none; text-align: center;  position: fixed; z-index: 1;  padding-top: 100px;   left: 0;  top: 0;  width: 100%;  height: 100%;   overflow: auto;  background-color: rgb(0,0,0);  background-color: rgba(0,0,0,0.4);> 
								<!-- Modal content -->
								<div class="modaldiv" style="position: fixed;">
							  <div class="modal-content" style=" background-color: #FEFEFE; margin: auto; padding: 20px; border: 1px solid #888; width: 50%;>
							    <div style="width:100%;">
									<span class="close">&times;</span>
									<h2>${hotelData.place}</h2>
								<div id="imgdiv" style="width:50%; height:50%">
								<img style="width:100%; height:100%; margin-left:50%;" src="${hotelData.img}" alt="">
								</div>
								<br/>
								<div id="hoteldetailspan" style="width:70%; margin-left:10% ">	
								<h4>주소:${hotelData.spot}</h4>
								<h4>전철역:${hotelData.point}</h4>
								<h4>${hotelData.info}</h4>
								</div>
								<div id="buttondiv" style="width:50%; height:40%; margin-left:60%; ">	
							    <button id="hotelCancelbtn" style="color: #fff; background-color: #6c757d; border: 1px solid #6c757d; cursor: pointer; padding: .375rem .75rem; font-size: 1rem; border-radius: .25rem;">취소</button>
								<button id="hotelCheckbtn" value ="hotelname" style="color: #fff; background-color: #6c757d; border: 1px solid #6c757d; cursor: pointer; padding: .375rem .75rem; font-size: 1rem; border-radius: .25rem;">예약</button>
								<div>
								</div>
								</div>
								</div>
							</div>`).appendTo('body')
	}
	let loginModalvue = () => {
		$(`<div id="loginModal" class="modal" style="display: none; text-align: center; position: fixed; z-index: 1;  padding-top: 100px;   left: 0;  top: 0;  width: 100%;  height: 100%;   overflow: auto;  background-color: rgb(0,0,0);  background-color: rgba(0,0,0,0.4);> 
								<!-- Modal content -->
								<div class="modaldiv" style="position: fixed;">
							  <div class="modal-content" style=" background-color: #FEFEFE; margin: auto; padding: 20px; border: 1px solid #888; width: 50%;>
							    <div style="width:100%;">
									<span class="close">&times;</span>
									<h1>예약을 원하시면 로그인을 해주세요</h1>
								<div id="imgdiv" style="width:50%; height:50%">
								</div>
								<br/>
								<div id="loginmodal" style="width:70%; margin-left:10% ">	
								</div>
								<div id="loginbuttondiv" style="width:50%; height:40%; margin-left:60%;">	
							    <button id="loginCancelbtn" style="color: #fff; background-color: #6c757d; border: 1px solid #6c757d; cursor: pointer; padding: .375rem .75rem; font-size: 1rem; border-radius: .25rem;">취소</button>
								<button id="loginCheckbtn" style="color: #fff; background-color: #6c757d; border: 1px solid #6c757d; cursor: pointer; padding: .375rem .75rem; font-size: 1rem; border-radius: .25rem;">로그인</button>
								<div>
								</div>
								</div>
								</div>
							</div>`).appendTo('body')
	}

	let restoCreate = () => {
		$('#restoDBbtn').click(e => {
			e.preventDefault
			alert("restoDBbtn")
/* 			$.getJSON(context + '/restos/resto/create', d => {
				alert("create table Resto:" + d.msg) */
				$.getJSON(context + '/restos/resto/insert', d => {
					alert("insert db Resto" + d.msg)
				})
		/* 	}) */
		})
	}
	let createTour = () => {
		$('#createtourDBbtn').click(e => {
			e.preventDefault
		/* 	$.getJSON(context + '/tours/create/table', d => {
				alert("create table Tour성공" + d.msg) */
				$.getJSON(context + '/tours/insert/dummy', d => {
					alert("insert db Tour성공" + d.msg)
				})
			/* }) */
		})
	}
	let createCorona = () => {
		$('#createCoronaDBbtn').click(e => {
			e.preventDefault
			alert("createCorona btn click")
		/* 	$.getJSON(context + '/maps/corona/create', d => {
				alert("create table CORONA성공" + d.msg) */
				$.getJSON(context + '/maps/corona/insert', d => {
					alert("insert db corona성공" + d.msg)
				})
		/* 	}) */
		})
	}
	let createAlldata = () => {
		$('#createAlldataDBbtn').click(e => {
			e.preventDefault
			alert("createAlldata btn click")
		/* 	$.getJSON(context + '/alldatas/alldata/create', d => {
				alert("create table CORONA성공" + d.msg) */
				$.getJSON(context + '/alldatas/alldata/insert', d => {
					alert("insert db corona성공" + d.msg)
				})
		/* 	}) */
		})
	}
	let createMyListdata = ()=>{
		$('#createMyListDBbtn').click(e=>{
			e.preventDefault
			alert("createMyListdata btn click")
			$.getJSON(context+'/spaces/mylist/create',d=>{
				alert("Create table MyList 성공"+d.msg)
			})
		})
	}
	
	let mapsDBinsert = () => {
		$('#mapdb').click(e => {
			e.preventDefault
		/* 	$.getJSON(context + '/maps/map/create', d => {
				alert("create table maps" + d.msg) */
				$.getJSON(context + '/maps/insert/mapDB', d => {
					alert("insert db maps" + d.msg)
				})
			/* }) */
		})
	}

	return { onCreate }
})();