"use strict"
var mapD = mapD || {}
mapD = (() => {
    const WHEN_ERR = '찾는 mapDjs를 호출할수 없습니니다.'
    let context, js;
    let mapDVuejs;
    let hotelsavePlace;
    let hotelsaveSpot;
    let hotelsavePoint;
    let hotelsaveImg;
    let hotelsaveLatitude;
    let hotelsaveInfo;
    let restosavePlace;
    let restosaveSpot;
    let restosavePoint;
    let restosaveImg;
    let restosaveLatitude;
    let restosaveInfo;
    let contentList;
    let tourList;
    let mytourlist;
    let mysaveList;
    let myListjs;
    let init = () => {
        context = $.ctx()
        js = $.js()
        mapDVuejs = js + '/crew/vue/mapDVue.js'
        myListjs = js + '/crew/myList/myList.js'
        hotelsavePlace = sessionStorage.getItem('hotelName');
        hotelsaveSpot = sessionStorage.getItem('hotelspot');
        hotelsavePoint = sessionStorage.getItem('hotelpoint');
        hotelsaveImg = sessionStorage.getItem('hotelimg');
        hotelsaveLatitude = sessionStorage.getItem('hotellatitude');
        hotelsaveInfo = sessionStorage.getItem('hotelinfo');
        restosavePlace = sessionStorage.getItem('restoName');
        restosaveSpot = sessionStorage.getItem('restospot');
        restosavePoint = sessionStorage.getItem('restopoint');
        restosaveImg = sessionStorage.getItem('restoimg');
        restosaveLatitude = sessionStorage.getItem('restolatitude');
        restosaveInfo = sessionStorage.getItem('restoinfo');
    }
    let onCreate = () => {
        init()
        $.when(
            $.getScript(mapDVuejs),
            $.getScript(myListjs)
        ).done(() => {
            setContentView()
            shortestDistance()
            savePopupModalVue()
        }).fail(() => {
            alert(WHEN_ERR)
        })
    }
    let setContentView = () => {
        $('#mainbody').html(mapDVue.mapDVue_body())
        $('html').scrollTop(0)
    }
    let mapFunc = arr => {
        onCreate()
        $.ajax({
            url: context + "/maps/place",
            type: 'POST',
            data: JSON.stringify({ 'placeList': arr }),
            dataType: 'json',
            contentType: 'application/json',
            success: d => {
                let list = d.list
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
                $.each(list, (i, j) => {
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
            },
            error: e => {
                alert('실패')
            }
        })
    }
    let mapCheck = places => {
        detalilistvue(places)
        tourList = places
    }
    let detalilistvue = places => {
        $.ajax({
            url: context + "/tours/tour/details",
            type: 'POST',
            data: JSON.stringify({ 'placeList': places }),
            dataType: 'json',
            contentType: 'application/json',
            success: d => {
                let lists = d.list
                contentList = d.list
                let list = []
                $.each(list, (i, j) => {
                })
                list.push({
                    'place': hotelsavePlace + 'H',
                    'spot': hotelsaveSpot,
                    'point': hotelsavePoint,
                    'img': hotelsaveImg,
                    'latitude': hotelsaveLatitude,
                    'info': hotelsaveInfo
                })
                $.each(lists, (i, j) => {
                    list.push({
                        'place': j.place,
                        'spot': j.spot,
                        'point': j.point,
                        'img': j.img,
                        'latitude': j.latitude,
                        'info': j.info
                    })
                })
                lists.push({
                    'place': hotelsavePlace,
                    'spot': hotelsaveSpot,
                    'point': hotelsavePoint,
                    'img': hotelsaveImg,
                    'latitude': hotelsaveLatitude,
                    'info': hotelsaveInfo
                })
                lists.push({
                    'place': restosavePlace,
                    'spot': restosaveSpot,
                    'point': restosavePoint,
                    'img': restosaveImg,
                    'latitude': restosaveLatitude,
                    'info': restosaveInfo
                })
                list.push({
                    'place': restosavePlace,
                    'spot': restosaveSpot,
                    'point': restosavePoint,
                    'img': restosaveImg,
                    'latitude': restosaveLatitude,
                    'info': restosaveInfo
                })
                mytourlist = list
                $.each(lists, (i, j) => {
                    $(`<div style="width:30%; height: 300px; float:left; margin-top:5%; margin-right:2%; margin-top:2%;">
							<div style="width: 100%; height: 100%; border :1px solid black; border-radius: 5px;">
					<div style="width: 100%; height: 40%; border :2px solid black; border-radius: 2px;">
					<img style="width:100%; height:100%;" src="${j.img}">
					</div><br>
						<p style="color:darkslategray;">${j.place}</p>
						<p style="color:darkslategray;">${j.spot}</p>
						<p style="color:darkslategray;">${j.point}</p>
        		  </div>`).appendTo('#mapdetailvue')
                })
                contentList = list
            },
            error: e => {
                alert('실패')
            }
        })
    }
    let shortestDistance = () => {
        $('#shortestdistancebtn').click(e => {
            e.preventDefault
            $(`<div style="font-size: 2.0em;">추천경로</div>`).appendTo('#textMapid')
            $.each(mytourlist, (i, j) => {
            })
            $.ajax({
                url: context + '/alldatas/mapd/alldatasTour',
                data: JSON.stringify({ 'scheduleList': mytourlist }),
                type: 'POST',
                dataType: 'json',
                contentType: 'application/json',
                success: d => {
                    let distanceData = d.distance
                    let sortedList = []
                    sortedList.push({
                        'place': hotelsavePlace,
                        'spot': hotelsaveSpot,
                        'point': hotelsavePoint,
                        'img': hotelsaveImg,
                        'latitude': hotelsaveLatitude,
                        'info': hotelsaveInfo,
                        'distance': '예약 호텔'
                    })
                    let sortedKey = Object.keys(distanceData).sort(function (a, b) {
                        return distanceData[a].localeCompare(distanceData[b]);
                    });
                    sortedKey.forEach(function (key) {
                        $.each(mytourlist, (i, j) => {
                            if (key === j.place) {
                                console.log("place : " + j.place)
                                j.distance = distanceData[key] + 'km'
                                sortedList.push(j)
                            }
                        })
                    })
                    mysaveList = sortedList
                    $.each(sortedList, (i, j) => {
                        $(`<div style="width:23%; height: 260px; float:left; margin-right:2%; margin-top:2%; text-align: center;">
         <div style="width: 100%; height: 100%;  border-radius: 5px;">
<div style="width: 100%; height: 60%;  border-radius: 2px;">
<img style="width:100%; height:100%;" src="${j.img}">
</div>
    <p>${j.place}</p>
    <p>${j.point}</p>
    <p>${j.distance}</p>
          </div>`).appendTo('#bestTourlist')
                        savePopupModalVue()
                    })
                    $(`<p><a class="btn btn-secondary" href="#" id="mytourlistbtn" role="button">여행지 저장 »</a></p>`).appendTo('#saveListbtnposition')
                    saveMytourList()
                },
                error: e => {
                    alert('실패')
                }
            })
        })
    }
    let pushPopModal = () => {
        setTimeout(function () {
            alert("타임 알럿")
            pushPopModalData()
        }, 3000);
    }
    let pushPopModalData = () => {
        $.getJSON(context + '/tours/tour/random', d => {
            let randomData = d.list
            let checkList = tourList
            let checkTourRandom = [0]
            $(`<div id="pushPopModal" class="modal" style="display: none; text-align: center;  position: fixed; z-index: 1;  padding-top: 100px;   left: 0;  top: 0;  width: 100%;  height: 100%;   overflow: auto;  background-color: rgb(0,0,0);  background-color: rgba(0,0,0,0.4);> 
								<!-- Modal content -->
								<div class="modaldiv" style="position: fixed;">
							  <div class="modal-content" style=" background-color: #FEFEFE; margin: auto; padding: 20px; border: 1px solid #888; width: 50%;>
							    <div style="width:100%;">
									<span class="close">&times;</span>
									<h2>${randomData[i]}</h2>
								<div id="imgdiv" style="width:50%; height:50%">
								<img style="width:100%; height:100%; margin-left:50%;" src="${randomData[i]}" alt="">
								</div>
								<br/>
								<div id="hoteldetailspan" style="width:70%; margin-left:10% ">	
								<h4>주소:${randomData[i]}</h4>
								<h4>전철역:${randomData[i]}</h4>
								</div>
								<div id="buttondiv" style="width:50%; height:40%; margin-left:60%; ">	
								<button id="pushPopupBtn" value ="hotelname" style="color: #fff; background-color: #6c757d; border: 1px solid #6c757d; cursor: pointer; padding: .375rem .75rem; font-size: 1rem; border-radius: .25rem;">확인</button>
								<div>
								</div>
								</div>
								</div>
							</div>`).appendTo('body')
        })
    }
    let saveMytourList = () => {
        $('#mytourlistbtn').click(e => {
            e.preventDefault
            $.ajax({
                url: context + `/spaces/mylist/save/${sessionStorage.getItem('uid')}`,
                type: 'POST',
                data: JSON.stringify({ 'mytourList': mysaveList }),
                dataType: 'json',
                contentType: 'application/json',
                success: d => {
                    if (d.msg === 'SUCCESS') {
                        saveModalFunc()
                    } else {
                        alert('오류')
                    }

                },
                error: e => {
                    alert('실패')
                }
            })
        })
    }

    let savePopupModalVue = () => {
        $(`<div id="savePopupModal" class="modal" style="display: none; text-align: center; position: fixed; z-index: 1;  padding-top: 100px;   left: 0;  top: 0;  width: 100%;  height: 100%;   overflow: auto;  background-color: rgb(0,0,0);  background-color: rgba(0,0,0,0.4);> 
								<!-- Modal content -->
								<div class="modaldiv" style="position: fixed;">
							  <div class="modal-content" style=" background-color: #FEFEFE; margin: auto; padding: 20px; border: 1px solid #888; width: 50%;>
							    <div style="width:100%;">
									<span class="close">&times;</span>
									<h1>저장이 완료되었습니다.</h1>
								<div id="imgdiv" style="width:50%; height:50%">
								</div>
								<br/>
								<div id="savemodaldiv" style="width:70%; margin-left:10% ">	
								</div>
								<div id="saveJsbtndiv" style="width:50%; height:40%; margin-left:60%;">	
							    <button id="saveCancelbtn" style="color: #fff; background-color: #6c757d; border: 1px solid #6c757d; cursor: pointer; padding: .375rem .75rem; font-size: 1rem; border-radius: .25rem;">닫기</button>
								<button id="saveCheckbtn" style="color: #fff; background-color: #6c757d; border: 1px solid #6c757d; cursor: pointer; padding: .375rem .75rem; font-size: 1rem; border-radius: .25rem;">MyTourList 이동</button>
								<div>
								</div>
								</div>
								</div>
							</div>`).appendTo('body')
    }
    let saveModalFunc = () => {
        const savemodal = document.getElementById("savePopupModal");
        savemodal.style.display = "block";
        const spanSave = document.getElementsByClassName("close")[0];
        spanSave.onclick = function () {
            savemodal.style.display = "none";
        }
        $('#saveCancelbtn').click(e => {
            e.preventDefault
            $('#savePopupModal').remove()
        })
        $('#saveCheckbtn').click(e => {
            e.preventDefault
            sessionStorage.setItem('hotelName', '');
            sessionStorage.setItem('hotelspot', '');
            sessionStorage.setItem('hotelpoint', '');
            sessionStorage.setItem('hotelimg', '');
            sessionStorage.setItem('hotellatitude', '');
            sessionStorage.setItem('hotelinfo', '');
            myList.onCreate()
            $('#savePopupModal').remove()
        })
    }

    return { onCreate, mapFunc, mapCheck }
})();