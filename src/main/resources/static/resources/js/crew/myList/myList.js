"use strict"
var myList = myList || {}
myList = (() => {
	const WHEN_ERR = '호출하는 myList js를 찾을수 없습니다.'
	let context, js;
	let myListvuejs;
	let mapvuelist;
	let checkonlist;
	let dlist;
	let init = () => {
		context = $.ctx()
		js = $.js()
		myListvuejs = js + '/crew/myList/myListVue.js'
	}
	let onCreate = () => {
		init()
		$.when(
			$.getScript(myListvuejs)
		).done(() => {

			setContentView()

		}).fail(() => {

		})
	}
	let setContentView = () => {
		$('#mainbody').empty()
		fullMylist()

	}
	let fullMylist = () => {
		$(`<div style="height:100%;">
			<div style="width:60%;    margin: auto;">
						<div class="my-3 p-3 bg-white rounded box-shadow" >
					<h3 class="border-bottom border-gray pb-2 mb-0">My Bucket Tour List</h3>
					<div class="media text-muted pt-2">
					<div id="mytourlist" style="width:100%;"  >
					</div>       
					</div>
					</div>
					</div>
				</div>`).appendTo('#mainbody')

		$.getJSON(context + '/spaces/mytour/list/' + sessionStorage.getItem('uid'), d => {
			dlist = d.list
			$.each(dlist, (i, j) => {
				sessionStorage.setItem('findnum', j.findnum);
				$(`<div id = "id${i}" style="width: 95%;margin: auto;border: solid lightgray 1px;padding-left: 10px;padding-top: 10px;padding-bottom: 10px;">
					<strong class="d-block text-gray-dark">날짜  :${j.savedate}</strong>			
					<p >${j.place}</p></div>`)
					.appendTo('#mytourlist')
				$(`#id${i}`).click(e => {
					e.preventDefault()
					maindetailvue()
					$('#mainbody').html(myListVue.myListVue_body())
				})
			})
		})
	}

	let maindetailvue = () => {
		$.getJSON(context + '/spaces/mydetail/list/' + sessionStorage.getItem('findnum'), d => {
			mapvuelist = d.dlist
			detailMapfunc()
			$.each(d.dlist, (i, j) => {
				$(`<div style="width:23%; height: 260px; float:left; margin-right:2%; margin-top:2%; text-align: center;">
         <div style="width: 100%; height: 100%;  border-radius: 5px;">
<div style="width: 100%; height: 60%;  border-radius: 2px;">
<img style="width:100%; height:100%;" src="${j.img}">
</div>
    <p>${j.place}</p>
    <p>${j.point}</p>
    <p>${j.distance}</p>
		  </div>`).appendTo('#mybestsaveList')
			})
			reMytourList()
			deleteTourList()
		})
	}
	let detailMapfunc = () => {
		let splitXY = ''
		let contents = ''
		let latitude = ''
		let x = ''
		let y = ''
		let positions = []
		let maplines = []
		let mapContainer = document.getElementById('map'),
			mapOption = {
				center: new kakao.maps.LatLng(37.548526157857246, 126.98696363465645),
				level: 7
			};
		let map = new kakao.maps.Map(mapContainer, mapOption);
		$.each(mapvuelist, (i, j) => {
			contents = j.place
			latitude = j.latitude
			splitXY = latitude.split("/")
			x = splitXY[0]
			y = splitXY[1]
			positions.push({
				content: '<div>' + contents + '</div>',
				latlng: new kakao.maps.LatLng(y, x)
			})
			maplines.push({ mapline: new kakao.maps.LatLng(y, x) })
		})
		for (let i = 0; i < positions.length; i++) {
			let marker = new kakao.maps.Marker({
				map: map,
				position: positions[i].latlng,
			});
			let infowindow = new kakao.maps.InfoWindow({
				content: positions[i].content
			});
			infowindow.open(map, marker);
		}
		let linePath = []
		for (let i = 0; i < maplines.length; i++) {
			linePath.push(maplines[i].mapline)
		}
		var polyline = new kakao.maps.Polyline({
			path: linePath, 
			strokeWeight: 3, 
			strokeColor: '#db4040', 
			strokeOpacity: 0.5,
			strokeStyle: 'solid'
		});
		polyline.setMap(map);
		$("#trafficbtn").click(function () {
			map.removeOverlayMapTypeId(kakao.maps.MapTypeId.ROADVIEW);
			map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
			map.removeOverlayMapTypeId(kakao.maps.MapTypeId.BICYCLE);
			map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
		});
		$("#roadviewbtn").click(function () {
			map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TERRAIN);
			map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
			map.removeOverlayMapTypeId(kakao.maps.MapTypeId.BICYCLE);
			map.addOverlayMapTypeId(kakao.maps.MapTypeId.ROADVIEW);
		});
		$("#terrainbtn").click(function () {
			map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TERRAIN);
			map.removeOverlayMapTypeId(kakao.maps.MapTypeId.ROADVIEW);
			map.removeOverlayMapTypeId(kakao.maps.MapTypeId.BICYCLE);
			map.addOverlayMapTypeId(kakao.maps.MapTypeId.TERRAIN);
		});
		$("#bicyclebtn").click(function () {
			map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TERRAIN);
			map.removeOverlayMapTypeId(kakao.maps.MapTypeId.ROADVIEW);
			map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
			map.addOverlayMapTypeId(kakao.maps.MapTypeId.BICYCLE);
		});

		$("#removebtn").click(function () {
			map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TERRAIN);
			map.removeOverlayMapTypeId(kakao.maps.MapTypeId.ROADVIEW);
			map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
			map.removeOverlayMapTypeId(kakao.maps.MapTypeId.BICYCLE);
		});
	}

	let reMytourList = () => {
		$('#btn_replay').click(e => {
			e.preventDefault
			sessionStorage.setItem('findnum', '');
			dlist = null
			onCreate()
		})
	}
	let deleteTourList=()=>{
		$('#deleteList_btn').click(e => {
			e.preventDefault
		deleteModalVue()
		})
	}
	let deleteModalVue=()=>{
		$(`<div id="deleteTourList" class="modal" style="display: none; text-align: center; position: fixed; z-index: 1;  padding-top: 100px;   left: 0;  top: 0;  width: 100%;  height: 100%;   overflow: auto;  background-color: rgb(0,0,0);  background-color: rgba(0,0,0,0.4);> 
                        <!-- Modal content -->
                        <div class="modaldiv" style="position: fixed;">
                       <div class="modal-content" style=" background-color: #FEFEFE; margin: auto; padding: 20px; border: 1px solid #888; width: 50%;>
                         <div style="width:100%;">
                           <span class="close">&times;</span>
                           <h1>선택 여행 목록을 삭제 하시겠습니까? </h1>
                        <div id="imgdiv" style="width:50%; height:50%">
                        </div>
                        <br/>
                        <div id="loginmodal" style="width:70%; margin-left:10% ">   
                        </div>
                        <div id="loginbuttondiv" style="width:50%; height:40%; margin-left:60%;">   
                         <button id="tourdeleteCancelbtn" style="color: #fff; background-color: #6c757d; border: 1px solid #6c757d; cursor: pointer; padding: .375rem .75rem; font-size: 1rem; border-radius: .25rem;">취소</button>
                        <button id="tourdeleteCheckbtn" style="color: #fff; background-color: #6c757d; border: 1px solid #6c757d; cursor: pointer; padding: .375rem .75rem; font-size: 1rem; border-radius: .25rem;">삭제</button>
                        <div>
                        </div>
                        </div>
                        </div>
					 </div>`).appendTo('body')
					 deleteModalfunc()
	}
	let deleteModalfunc=()=>{
			const modaltourdelete = document.getElementById("deleteTourList");
					modaltourdelete.style.display = "block";
					const spansd = document.getElementsByClassName("close")[0];
					spansd.onclick = function () {
						modaltourdelete.style.display = "none";
					}
					$('#tourdeleteCancelbtn').click(e => {
						e.preventDefault
						$('#deleteTourList').remove()
					})
					$('#tourdeleteCheckbtn').click(e => {
						e.preventDefault
						$('#deleteTourList').remove()
						deletebtnFunc()
						
					})
	}

	let deletebtnFunc=()=>{
		$.ajax({
			url:context+'/spaces/mytour/delete/'+sessionStorage.getItem('findnum'),
			type:'DELETE',
			contentType:'application/json',
			success: d =>{
				onCreate()
			},
			error: e =>{
				alert('삭제실패')
			}
		})
	}
	return { onCreate }
})();