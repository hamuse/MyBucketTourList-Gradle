var write_vue = write_vue ||{}
write_vue ={
	write:()=>{return `
	      <div id="form_write"  style="display: block; padding-right: 17px;padding-bottom: 17px; width: 70%; text-align: -webkit-center; border: solid #d4d4d4;">
        <div style="padding: 10px; width: 80%;">
          <input name="title" type="text" style = "width:100%;"/>
        </div>

        <form  id="writeform">     
          <input  id="drop" placeholder="여기로 drag & drop!사진파일이 없으면 글이 업로드되지 않습니다."style="border: 1px solid #d4d4d4; width:75%; height:80px; padding:3px">          
          </input>
          <div id="thumbnails"style="border: 1px solid #d4d4d4; width:75%; height:100px; padding:3px;writing-mode: vertical-lr;">
          </div>
        </form>

        <div style="padding: 10px;width:100%;">
                  <textarea name="content" style= "width: 80%;"  cols="30" rows="20"></textarea>
        </div>        
                <button id="writebtn" class="btn btn-primary" data-dismiss="modal" type="button"> write</button>
     </div>


  
	`}
}