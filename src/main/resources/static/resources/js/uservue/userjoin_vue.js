var userjoin_vue = userjoin_vue||{}
userjoin_vue ={
	userjoin_body:()=>{
		return `		<div><button id = "createuser" >유저테이블생성</button></div>
		<div><button id = "createhost" >호스트테이블생성</button></div>
		<div><button id = "dumuser" >유저더미생성</button></div>
		
		<div style="padding-bottom: 30px;">
		<div id="host-container">
	<div style="solid black;">
		<div>
			<div id="host-header">
				<h1 align="center">일반 회원 가입</h1>
			</div>
			<form name="registerform">

				<div class="form-group row">
					<label for="userName" class="col-sm-2 form-control-label">아이디입력</label>
					<div class="col-sm-5">
						<input id="uid" type="text" class="form-control" name="userid" 
						minlength="4" maxlength="10" autocomplete="off"
							value="" placeholder="4~10자리를 입력해 주세요" required="4">
						<input type="text" class="form-control" id="dupl_check"  value="" readonly="readonly">
					</div>

				</div>

				<div class="form-group row">
					<label for="pwd" class="col-sm-2 form-control-label">패스워드입력</label>
					<div class="col-sm-5">
						<input type="password" id="pwd" placeholder="4이상 8이하 글자를 입력해주세요" minlength="4" maxlength="8" type="text" class="form-control" name="userName" maxlength="20" autocomplete="off"
							value="">
						<input id="pwdcheck" placeholder="비밀번호를 다시 입력해주세요 " type="text" minlength="4" maxlength="8" class="form-control" name="userName" maxlength="20" autocomplete="off"
							value="">
						<input type="text" class="form-control" id="pwdcheckresult"  value="" readonly="readonly">
					</div>
				</div>

				<div class="form-group row">
					<label for="userName" class="col-sm-2 form-control-label">이름입력</label>
					<div class="col-sm-5">
						<input id="uname" type="text" class="form-control" name="userName" maxlength="20" autocomplete="off"
							value="">
					</div>
				</div>
				<div class="form-group row">
					<label for="userNickname" class="col-sm-2 form-control-label">닉네임입력</label>
					<div class="col-sm-5">
						<input id="nickname" type="text" class="form-control" name="userName" minlength="2" maxlength="20" autocomplete="off"
							value="">
					</div>
				</div>

				<div class="form-group row">
					<label for="userName" class="col-sm-2 form-control-label">생년월일</label>
					<div class="col-sm-5"style="display: flex;" >
						<input id="birthyear" placeholder="0000"style="width:100px" type="text" class="form-control" minlength="4"  maxlength="4" value=""><p style="padding-right: 10px;">년 </p>
						<input id="birthmonth" placeholder="00"style="width:100px"type="text" class="form-control" minlength="2"  maxlength="2" value=""><p style="padding-right: 10px;">월</p>
						<input id="birthday" placeholder="00"style="width:100px"type="text" class="form-control" minlength="2"  maxlength="2" value=""><p>일</p>
					</div>
				</div>
				<div class="form-group row">
					<label  for="userName" class="col-sm-2 form-control-label">성별  선택</label>
					<div class="col-sm-5">
						<input name="gendercheck" type="radio"  value="F">여성
						<input name="gendercheck" type="radio"  value="M" >남성

					</div>
				</div>

				<div class="form-group row">
					<label for="phone" class="col-sm-2 form-control-label">전화번호</label>
					<input type="hidden" class="form-control" name="hosttel" value="">
					<div class="col-sm-6 input-group" id="phoneIpt">
						<input id="tel1" type="text" class="form-control" maxlength="4" id="userPhone1" value="">
						<span class="input-group-addon">-</span>
						<input id="tel2" type="text" class="form-control" maxlength="4" id="userPhone2" value="">
						<span class="input-group-addon">-</span>
						<input id="tel3" type="text" class="form-control" maxlength="4" id="userPhone3" value="">
					</div>
				</div>

        
				<div class="btnfield" style="text-align: center">
					<input id="userjoin_btn" type="submit" value="회원가입">
				</div>
			</form>
		</div>
	</div>
</div>
  </div>`
	}
}