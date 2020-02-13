var detail_vue = detail_vue || {}
detail_vue = {
	detail:j=>{return `<div style="display: block; padding-top:20px; padding-right: 17px; width: 70%; text-align: center; border: solid #d4d4d4;">
                  <h2 class="text-uppercase">${j.title}</h2>
                  <div id = "writerid"></div>
                  
              <div id ="imgspace"><img class="img-fluid d-block mx-auto" src=${j.img} alt=""></div>
              <p>${j.content}</p>   
              <div class="likelike" style="padding-bottom: 20px;">  
              <div id="reviewbtnspace"></div> 
                <button id = "likebtn" style ="height:60px; width:70px; background : none; border: none; float : right;">
                <h6 id ="likecount">${j.likecnt}개</h6><img id="heart" src = "/web/resources/mytourimg/reviewimg/beforeheart.png"></button>
              </div>     
              <div style=" padding-left: 10px; padding-top: 20px;">
                
                <div id="commentbtnspace"></div>
              </div>
          
              <div style="text-align: initial; padding-left: 15px; padding-top: 9px; padding-bottom: 10px;">
                <div id = "commentspace"></div>
              </div>                
              </div>`



	}
}