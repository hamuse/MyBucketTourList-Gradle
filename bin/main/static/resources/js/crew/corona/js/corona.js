"use strict"
var corona = corona || {}
corona = (() => {
	const WHEN_ERR = '찾는coronajs를 호출할수 없습니다.'
	let context, js;
	let coronaVuejs;
	let init = () => {
		context = $.ctx()
		js = $.js()
		coronaVuejs = js + '/crew/corona/vue/coronaVue.js'
	}
	let onCreate = () => {
		init()
		$.when(
			$.getScript(coronaVuejs)
		).done(() => {
			setContentView()
			coronaMapVue()
		}).fail(() => {
			alert(WHEN_ERR)
		})
	}
	let setContentView = () => {
		$('html').scrollTop(0);
		$('#mainbody').html(coronaVue.coronaVue_body())
	}
	let coronaMapVue = () => {
		$.getJSON(context + '/maps/corona/list', d => {
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
					center: new kakao.maps.LatLng(37.3037415, 127.010068),
					level: 12
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
			var imageSrc = "http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
			for (let i = 0; i < positions.length; i++) {
				 var imageSize = new kakao.maps.Size(24, 35); 
				  var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
				let marker = new kakao.maps.Marker({
					map: map,
					position: positions[i].latlng,
					image : markerImage
				});
				let infowindow = new kakao.maps.InfoWindow({
					content: positions[i].content
				});
				kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
				kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
			}
			function makeOverListener(map, marker, infowindow) {
				return function () {
					infowindow.open(map, marker);
				};
			}
			function makeOutListener(infowindow) {
				return function () {
					infowindow.close();
				};
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
		})
	}
	return { onCreate }
})();
