var main_vue = main_vue || {}
main_vue = {
  

   head:()=>{return `
    <head>
   <link href="/web/resources/mytourjs/review/css/agency.min.css" rel="stylesheet">
    <link href="/web/resources/mytourjs/review/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
   
    </head>
  `},
  review:()=>{return `	
 
  <div style="-webkit-writing-mode: vertical-lr; position: inherit;">
<div  ><button id = "create" >커뮤테이블생성</button></div>
<div  ><button id = "createlike" >좋아요테이블생성</button></div>
<div  ><button id = "createcomment" >코멘트테이블생성</button></div>
<div  ><button id = "crawling" >crawling</button></div>
<div  ><button id = "likedummy" >좋아요더미</button></div>
</div>


<div style="position: inherit;">
  <section class="breadcrumb breadcrumb_bg" style="background-image: url("../img/mainphoto.jsp");" >
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb_iner">
                        <div class="breadcrumb_iner_item text-center" >
                            <h2>mytourstargram</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
  
  

 <section class="bg-light page-section" id="portfolio">
    <div class="container">

        <div class="col-lg-4"></div>
  <div class="blog_right_sidebar">
   <aside class="single_sidebar_widget search_widget">
                          
                              <div class="form-group">
                                  <div class="input-group mb-3">
                                      <input id="searchword" style="color:#271e3c; border: 1px solid #271e3c; border-radius: 2px;" type="text" class="form-control" placeholder="Search Keyword" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Search Keyword'">
                                      <div class="input-group-append">
                                          <button id="searchbtn" style="color:#271e3c; border: 1px solid #271e3c; border-radius: 2px;" class="btn" type="button"><i class="ti-search"></i></button>
                                      </div>                                    
                                  </div>
                              </div>

                              <div id ="writebtnspace"></div>

                                                       
    </aside>
  </div>
    <div id="bestsearch" style="padding-left: 40px;" ></div> 
    <div id="personalbestspace" class="jumbotron" style="background-color: #da2a2114;">
        <div id = "personalbestreviewtitle" ></div>
        <div id = "personalbestreviewbody" class="row" style="justify-content: center; "></div>
    </div>
    <div id="bestspace" class="jumbotron" style="background-color: #da2a2114;">
        <div id = "bestreviewtitle" ></div>
        <div id = "bestreviewbody" class="row" style="justify-content: center; "></div>
    </div>

      <div id = "reviewbody" class="row" style="justify-content: center; ">
     </div>
    </div> 
  </section>

`



	}
}