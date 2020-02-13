var login_vue = login_vue || {}
login_vue = {
  login_body: () => {
    return `

    <section class="inner-page-contents" >

      <div class="container">
        <div class="row">
          <!-- LEFT COLUMN STARTS-->
          <div style="text-align: center; width: 66.66666667%; margin-left: 16.66666667%;">
            <!-- FOOD STARTS-->
            <section>
              <div class="row login-form">
              


                <div class="input_form" style="width: 50%; margin-left: 25%;">
                    <input name="loginId" id="uid" type="text" placeholder="이메일을 입력해주세요.">
                </div>
                <div class="input_form" style="width: 50%; margin-left: 25%; margin-top: -1px;">
                    <input name="loginPw" id="pwd" type="password" placeholder="비밀번호를 입력해주세요.">
                </div>
                <div style="width: 50%; margin-left: 25%;">
                    <input id="userlogin_btn" type="button" value="로그인" style="height: 45px; color:#6c757d; background-color: #fff; border: 1px solid #6c757d; cursor: pointer; padding: .375rem .75rem; font-size: 1rem; border-radius: .25rem;>

                </div>
				<div style="width: 50%; margin-left: 25%;">
				<a id="findid_btn" href="#" style="color:currentColor">아이디 찾기 |</a><a id="findpwd_btn" href="#" style="color:currentColor">| 비밀번호 찾기</a></div>
              </div>
            </section>
            <!-- /. FOOD ENDS-->
          </div>
          <!-- /. LEFT COLUMN ENDS --> 
        </div>
      </div>
      
    </section>

`
  },
  hostlogin_body: () => {
    return `<section class="inner-page-contents">
      <div class="container">
        <div class="row">
          <!-- LEFT COLUMN STARTS-->
          <div style="text-align: center; width: 66.66666667%; margin-left: 16.66666667%;">
            <!-- FOOD STARTS-->
            <section>
              <div class="row login-form">
              
              <div >카톡로그인 , 페북로그인 , 네이버로그인 , 구글로그인</div>

                <div class="input_form" style="width: 50%; margin-left: 25%;">
                    <input name="hosiloginId" id="hid" type="text" placeholder="이메일을 입력해주세요.">
                </div>
                <div class="input_form" style="width: 50%; margin-left: 25%; margin-top: -1px;">
                    <input name="hostloginPw" id="pwd" type="password" placeholder="비밀번호를 입력해주세요.">
                </div>
                <div style="width: 50%; margin-left: 25%;">
                    <input id="hostlogin_btn" type="button" value="로그인" style="height: 45px;">
                </div>
				<div style="width: 50%; margin-left: 25%;">
				<a id="findid_btn1" href="#">아이디 찾기 |</a><a id="findpwd_btn1" href="#">| 비밀번호 찾기</a></div>
              </div>
            </section>
            <!-- /. FOOD ENDS-->
          </div>
          <!-- /. LEFT COLUMN ENDS --> 
        </div>
      </div>
      
    </section>
`
  }
}