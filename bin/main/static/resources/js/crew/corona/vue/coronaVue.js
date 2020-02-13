var coronaVue = coronaVue || {}
coronaVue = {
	coronaVue_body:()=>{
		return`<div class ="container" style = "height: 1300px; width: 2500px; ">
			<div class = "mainimg"><h2>CORONA_MAP</h2><br>
			  <p>
			<MARQUEE behavior="scroll" style="font-size: 30px; color: #db0e0e; ">확진자:16 / 유증상자:475 / 격리해제:414 / 격리:61</MARQUEE>
			<!-- 스크롤의 속성 -->
    		  </p>
			<div style="margin-right:2%;margin-left:2%;margin-top:5%; width:1050px; height:1000px; border: 1px solid gray;" >
			<div id="map" style="margin-right:2%;margin-left:2%;margin-top:5%; width:1000px; height:900px;"></div>
			</div>
			</div>
			</div>
      </div>`
	}
}