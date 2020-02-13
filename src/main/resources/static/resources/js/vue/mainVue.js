var mainVue = mainVue || {}
mainVue = {
	main_body: x => {
		return '<div id="mainbody"><body>'+
 '   <!-- banner part start-->'+
'    <section class="banner_part" style="position: inherit;">'+
'        <div class="container">'+
'            <div class="row align-items-center justify-content-center">'+
'                <div class="col-lg-10">'+
'                    <div class="banner_text text-center">'+
'                            <h3>My Bucket Tour List</h3>'+
'                        <div class="banner_text_iner">'+
'                        </div>'+
'                    </div>'+
'                </div>'+
'            </div>'+
'        </div>'+
'    </section>'+
'    <!-- banner part start-->'+
 '   <!-- booking part start-->'+
'    <section class="booking_part">'+
'    </section>'+
'    <!-- Header part end-->'+
 '   <!--top place start-->'+
'            </div>'+
'        </div>'+
'    </section>'+
'    <!--top place end-->'+
 '   <!--top place start-->'+
'    <!--top place end-->'+
 '   <!--::industries start::-->'+
'    <!--::industries end::-->'+
 '   <!--top place start-->'+
'    <!--top place end-->'+
'   <!--::industries start::-->'+
'</body></div>'
	},
	main_navi: x => {
		return	'  <header class="main_menu">'+
'        <div class="main_menu_iner">'+
'            <div class="container">'+
'                <div class="row align-items-center ">'+
'                    <div class="col-lg-12">'+
'                        <nav class="navbar navbar-expand-lg navbar-light justify-content-between">'+
'                            <a class="navbar-brand" href=""> <img src="'+x.img+'/instagram-2433265_640.png" alt="logo" style=" width: 70px;" > </a>'+
'                            <button class="navbar-toggler" type="button" data-toggle="collapse"'+
'                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"'+
'                                aria-expanded="false" aria-label="Toggle navigation">'+
'                                <span class="navbar-toggler-icon"></span>'+
'                            </button>'+
'                          <div class="collapse navbar-collapse main-menu-item justify-content-center"'+
'                                id="navbarSupportedContent">'+
'                                <ul class="navbar-nav">'+
// '                                  /*   <li  class="nav-item">'+
// '                                        <a id="hotel_go" class="nav-link" href="#" style=" font-size: 26px;">HOTEL</a>'+
// '                                    </li>'+ */
'                                    <li  class="nav-item">'+
'                                        <a id="tourGobtn" class="nav-link" href="#" style=" font-size: 23px;">TOUR</a>'+
'                                    </li>'+
// '                                  /*   <li id="trafficgo" class="nav-item">'+
// '                                        <a  id="trafficgo" class="nav-link" href="#" style=" font-size: 26px;">TRAFFIC</a>'+
// '                                    </li>'+ */
'                                    <li class="nav-item">'+
'                                        <a   id="reviewgo" class="nav-link" href="#" style=" font-size: 23px;">gostargram</a>'+
'                                    </li>'+
'                                    <li class="nav-item">'+
'                                        <a   id="issues" class="nav-link" href="#" style=" font-size: 23px;">seoul Infos</a>'+
'                                    </li>'+
'                                    <li class="nav-item">'+
'                                        <a   id="coronaid" class="nav-link" href="#" style=" font-size: 23px;">Corona Map</a>'+
'                                    </li>'+
// '                                    <li class="nav-item dropdown">'+
// '                                        <a class="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown"'+
// '                                            role="button" data-toggle="dropdown" aria-haspopup="true"'+
// '                                            aria-expanded="false">'+
// '                                            REVIEW'+
// '                                        </a>'+
// '                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">'+
// '                                            <a class="dropdown-item" href="blog.html">리뷰</a>'+
// '                                            <a class="dropdown-item" href="single-blog.html">A</a>'+
// '                                        </div>'+
// '                                    </li>'+
// '                                    <li class="nav-item dropdown">'+
// '                                        <a class="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown_1"'+
// '                                            role="button" data-toggle="dropdown" aria-haspopup="true"'+
// '                                            aria-expanded="false">'+
// '                                            TEAM'+
// '                                        </a>'+
// '                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown_1">'+
// '                                            <a class="dropdown-item" href="top_place.html">top place</a>'+
// '                                            <a class="dropdown-item" href="tour_details.html">tour details</a>'+
// '                                            <a class="dropdown-item" href="elements.html">Elements</a>'+
// '                                        </div>'+
// '                                    </li>'+ 
'                                    <li  class="nav-item">'+
'                                        <a id="mypage_btn" class="nav-link" href="#" style=" font-size: 23px;">MYPAGE</a>'+
'                                    </li>'+
'<div class="btn-group" style="align-items: center;">'+
'<button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="color: #0c3e72; background-color: white; border: white;height: 60px;">'+
'   chat-bot'+
'<div class="dropdown-menu" style = "height:400px">'+
'<iframe style = "height:100%" src="https://frogue.danbee.ai/?chatbot_id="></iframe></div>'+
'</div>'+
'                                </ul>'+
'                            </div>'+
'                            <div id ="btnspace" style="padding-right:15px;"></div>'+
'                            <div id="joinspace"></div>'+
'                        </nav>'+
'                    </div>'+
'                </div>'+
'            </div>'+
'        </div>'+
'    </header>'
	},
	main_footer: () => {
		return  `<div id="main_footerid" style="height:100px; background-color: dimgrey; text-align: center;">
					<p><a>intro</a></p>
						<p class="footer-text m-0" style="text-align: center;">
						
Copyright ©2020 All rights reserved | This is a training project.<i class="ti-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">My Tour</a> 
</p>
<p></p>
</div>`
	},

}