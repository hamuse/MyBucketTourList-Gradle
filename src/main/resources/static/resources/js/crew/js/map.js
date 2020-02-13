"use strict"
var map = map || {}
map = (() => {
	const WHEN_ERR = '찾는 mapjs를 호출할수 없습니다.'
	let context, js;
	let mapVuejs;
	let tourDataSource;
	let hotelPlace;
	let restoPlace;
	let init = () => {
		context = $.ctx()
		js = $.js()
		mapVuejs = js + '/crew/vue/mapVue.js'
	}
	let onCreate = () => {
		init()
		$.when(
			$.getScript(mapVuejs)
		).done(() => {
			setContentView()
			mapVuefun()
			goMapD()
			tourList()
			checkboxPosition()
			checkModalVue()
		}).fail(() => {
			alert(WHEN_ERR)
		})
	}
	let setContentView = () => {
		$('html').scrollTop(0);
		$('#mainbody').html(mapVue.mapVue_body())
	}
	let goMapD = () => {
		$('#mapD_btn').click(e => {
			e.preventDefault
			let arr = []
			let checkarr = []
			let placearr = []
			let places = []
			let tourData = []
			$('input[name="place"]:checked').each(function (i) {
				checkarr.push($(this).val());
				
			});
			
			if (checkarr.length == 0) {
				const modalcheck = document.getElementById("checkModal");
					modalcheck.style.display = "block";
					const spancheck = document.getElementsByClassName("close")[0];
					spancheck.onclick = function () {
						modalcheck.style.display = "none";
					}
						$('#checkCheckbtn').click(e => {
						e.preventDefault
						$('#checkModal').remove()
						onCreate()
					})
			 } else {
				$.each(checkarr, (i, j) => {
					
					placearr.push({ indexnum: j })
				})
				$.each(placearr, (i, j) => {
					tourData = tourDataSource[j.indexnum]
					places.push({ place: tourData.place })
					arr.push({ place: tourData.place })
				})
				arr.push({ place: hotelPlace })
				arr.push({ place: restoPlace })
				mapD.mapFunc(arr)
				mapD.mapCheck(places)
			}
		})
	}
	let tourList = () => {
		$.getJSON(context + '/tours/list', d => {
			tourDataSource = d.list
			$.each(tourDataSource, (i, j) => {
				$(`<div class = "cl5" style = "margin-top: 2%;
					                              margin-left: 1%;
				                              box-sizing: border-box;
					                         border: 1px solid gray;
					                          width : 32%;
					                         height : 25.8%;
					                          float:left;">
					                        <div class = "climg1" style = "width: 100%;
					                                   height : 60%;
					                                   position: relative;">
					                                    <img style="position : absolute;
															top: 2px;
															width: 95%;
															height: 100%;
															display: block;
															transform: translate(-50%, 0);"
															src = "${j.img}">
					                                   </div>
					                                    <div  style = "margin-top:3px; margin-left:3px;"><input id="${j.place}" type="checkbox" name="place" value="${i}"></div>
					                        <div class = "tx1" style = "position: relative; margin-left:3px;">${j.place} 
					                              </div>
					                        </div>
					                  </div>`).appendTo('#tourizmbody')
			})
		})
	}
	let mapVuefun = () => {
		let hotelList = sessionStorage.getItem('hotelName');
		let restoList = sessionStorage.getItem('restoName');
		let latitudes = ''
		let hotellatitude = ''
		let restolatitude = ''
		let y = ''
		let x = ''
		hotellatitude = sessionStorage.getItem('hotellatitude');
		hotelPlace = hotelList
		restoPlace = restoList
		latitudes = hotellatitude.split("/")
		y = latitudes[0]
		x = latitudes[1]
		let mapContainer = document.getElementById('map'),
			mapOption = {
				center: new kakao.maps.LatLng(37.548526157857246, 126.98696363465645),
				level: 8
			};
		let map = new kakao.maps.Map(mapContainer, mapOption);
		let markerPosition = new kakao.maps.LatLng(x, y);
		let marker = new kakao.maps.Marker({
			position: markerPosition
		});
		marker.setMap(map);
		let iwContent = '<div style="padding:5px; text-align: center;">' + '<예약호텔 위치>' + '<br/>' + hotelPlace + '</div>',
			iwPosition = new kakao.maps.LatLng(x, y);
		let infowindow = new kakao.maps.InfoWindow({
			position: iwPosition,
			content: iwContent
		});
		infowindow.open(map, marker);
	}

	let checkboxPosition = () => {
		let tourIndex = ''
		let hotelList = sessionStorage.getItem('hotelName');
		let restoList = sessionStorage.getItem('restoName');
		let latitudes = ''
		let hotellatitude = ''
		let restolatitude = ''
		let y = ''
		let x = ''

		hotellatitude = sessionStorage.getItem('hotellatitude');
		hotelPlace = hotelList
		latitudes = hotellatitude.split("/")
		y = latitudes[0]
		x = latitudes[1]
		$(document).on('click', 'input[type=checkbox]', function () {
			tourIndex = $(this).attr('value')
			let tourData = tourDataSource[tourIndex]
			let checkPlace = tourData.place
			let checklatitudes = tourData.latitude
			let latitudes = checklatitudes.split("/")
			let checkY = latitudes[0]
			let checkX = latitudes[1]
			var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
				mapOption = {
					center: new kakao.maps.LatLng(37.548526157857246, 126.98696363465645), // 지도의 중심좌표
					level: 8 // 지도의 확대 레벨
				};
			var map = new kakao.maps.Map(mapContainer, mapOption)
			var positions = [
				{
					content: '<div>' + hotelPlace + '</div>',
					latlng: new kakao.maps.LatLng(x, y)
				},
				{
					content: '<div>' + checkPlace + '</div>',
					latlng: new kakao.maps.LatLng(checkX, checkY)
				}
			];
			for (var i = 0; i < positions.length; i++) {

				var marker = new kakao.maps.Marker({
					map: map,
					position: positions[i].latlng 
				});
				var infowindow = new kakao.maps.InfoWindow({
					content: positions[i].content
				});
				infowindow.open(map, marker);
			}
		});
	}
	let checkModalVue=()=>{
			$(`<div id="checkModal" class="modal" style="display: none; text-align: center; position: fixed; z-index: 1;  padding-top: 100px;   left: 0;  top: 0;  width: 100%;  height: 100%;   overflow: auto;  background-color: rgb(0,0,0);  background-color: rgba(0,0,0,0.4);> 
								<!-- Modal content -->
								<div class="modaldiv" style="position: fixed;">
							  <div class="modal-content" style=" background-color: #FEFEFE; margin: auto; padding: 20px; border: 1px solid #888; width: 50%;>
							    <div style="width:100%;">
									<span class="close">&times;</span>
									<h1>관광지를 체크해 주세요</h1>
								<div id="imgdiv" style="width:50%; height:50%">
								</div>
								<br/>
								<div id="loginmodal" style="width:70%; margin-left:10% ">	
								</div>
								<div id="checkbuttondiv" style="width:50%; height:40%; margin-left:60%;">
								<button id="checkCheckbtn" style="color: #fff; background-color: #6c757d; border: 1px solid #6c757d; cursor: pointer; padding: .375rem .75rem; font-size: 1rem; border-radius: .25rem;">확인</button>
								<div>
								</div>
								</div>
								</div>
							</div>`).appendTo('body')
	}
	return { onCreate }

})();