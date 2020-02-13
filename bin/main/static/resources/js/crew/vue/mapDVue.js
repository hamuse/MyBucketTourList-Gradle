var mapDVue = mapDVue || {}
mapDVue = {
        mapDVue_body :()=>{
            return `
        <div class="container">
            <div class="d-none d-sm-block mb-5 pb-4">
             <div id="map" style="height: 480px;"></div>
             <p>
<button id="trafficbtn" value ="traffic">교통정보 보기</button> 
<button id="roadviewbtn" value ="roadview">로드뷰 도로정보 보기</button> 
<button id="terrainbtn" value ="terrain">지형정보 보기</button>
<button id="bicyclebtn" value ="bicycle">자전거 도로 보기</button>
<button id="removebtn" value ="use_district">초기화</button>
</p>
            </div>
            <div class="row">
               <div class="album py-5 bg-light">
    <div class="container">
      <div class="row">
      
      <div style="width:100%;">   
      <div class="bestcol-md-4" style="width:100%;">
      <div id="saveListbtnposition"></div>
      
        <p><a class="btn btn-secondary" href="#" id="shortestdistancebtn" role="button">추천경로 »</a></p>
       <div id="textMapid">
      </div>
        <div id="bestTourlist" style = "width: 100%; height : 60%; position: relative;">
        </div>
      <p></p>
      </div> 
      <div class="mapDVueclassname" style="margin-top:5%;">
      </div>
      </div>
      
   <h2>선택 목록</h2>
       <div id="mapdetailvue" style="width:90%;  margin-left:6%; margin-right:6%;">
      </div> 

      </div>
    </div>
  </div>
        </div>`
        }
}