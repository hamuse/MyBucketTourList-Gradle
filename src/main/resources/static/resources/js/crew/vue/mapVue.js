var mapVue = mapVue || {}
mapVue = {
	mapVue_body:()=>{
		return `
			<div class ="container" style = "height: 1300px; width: 2500px;">
            <div class = "mainimg"><h2>관광지</h2><br>
                        <div class = "manu" style = "display: inline-block;" >
            </div>
            </div>
            <div class = "cl1" style = "margin-top: 2%;
		        width: 50%;
		        height: 80%;
		        float: left;
		        box-sizing: border-box;">
        
				<div id = "tourizmbody" style = "width: 100%; height : 60%; position: relative;">
				
				
				</div>
            </div>
           
            <div class = "cl2" style = "margin-top: 2%;
        width: 50%;
        height : 80%;
        float: right;
        box-sizing: border-box;"> 
	   <div class="stickycssmap" style=" display: inline-block;   top: 20%;  width: 80px;  height: 80px; margin-left:5%;">	
	   <div id="mapdivposition"> 
	   <div id="map" style="margin-right:2%;margin-left:5%;margin-top:20%;width:500px;height:400px;"></div>
		</div>

		<div style="margin-top : 10%; width:100%; height:100%;">
		<div>
		 <button id = "mapD_btn" style="margin-top : 50%; margin-left:10%; width:200px;color: #fff; background-color: #6c757d; border: 1px solid #6c757d; cursor: pointer; padding: .375rem .75rem; font-size: 1rem; border-radius: .25rem;  text-align: center; ">선택 여행지 보기</button>
		</div>
		</div>

		</div>
		</div>
     
           <div id = "dijkstra" style="
	text-align: center;
	position : center;
	margin-top : 10px;">
      	
		</div>
      </div>`
	},
	mapVue_map:()=>{
		return`<div id="mapdivposition" style=" display: inline-block;  position: sticky;   top: 20%;  width: 80px;  height: 80px; margin-left:5%;"> 
	   <div id="map" style="margin-right:2%;margin-left:5%;margin-top:20%;width:500px;height:400px;"></div>
		</div>`
	}
}