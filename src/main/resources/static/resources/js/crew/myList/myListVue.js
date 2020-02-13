var myListVue = myListVue ||{}
myListVue = {
	myListVue_body:()=>{
		return` <div  class="container">
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
       <button id="btn_replay" style="color: #fff; background-color: #6c757d; border: 1px solid #6c757d; cursor: pointer; padding: .375rem .75rem; font-size: 1rem; border-radius: .25rem;">리스트돌아가기 »</button>
        <button id="deleteList_btn" style="color: #fff; background-color: #6c757d; border: 1px solid #6c757d; cursor: pointer; padding: .375rem .75rem; font-size: 1rem; border-radius: .25rem;">리스트 삭제하기 »</button>
       <div id="textMapid">
      </div>
        <div id="mybestsaveList" style = "width: 100%; height : 60%; position: relative;">
        </div>
      <p></p>
      </div> 
      <div class="mapDVueclassname" style="margin-top:5%;">
      </div>
      </div> 
      </div>
    </div>
  </div>
        </div>`
	}
}