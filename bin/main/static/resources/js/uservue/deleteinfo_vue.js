var deleteinfo_vue = deleteinfo_vue||{}
deleteinfo_vue = {
	deleteinfo_body:()=>{
		return `<div id="host-container">
		<form name="deletehost_form">
		<div id="host-header">
				<h1 align="center">회원탈퇴</h1>
			</div>
		<div class="form-group row">
					<label for="pwd" class="col-sm-2 form-control-label">아이디</label>
					<div class="col-sm-5">
						<input type="text" id="uid" class="form-control" name="userid" maxlength="20" autocomplete="off"
							value="">
					</div>
				</div>
		<div class="form-group row">
					<label for="pwd" class="col-sm-2 form-control-label">비밀번호입력</label>
					<div class="col-sm-5">
						<input type="text" id="pwd" class="form-control" name="userpwd" maxlength="20" autocomplete="off"
							value="">
					</div>
				</div>
		<div class="form-group row">
					<label for="pwd2" class="col-sm-2 form-control-label">비밀번호확인</label>
					<div class="col-sm-5">
						<input type="text" class="form-control" name="userName" maxlength="20" autocomplete="off"
							value="">
					</div>
				</div>
		<div class="form-group row">
        <label for="pwd2" class="col-sm-2 form-control-label">탈퇴사유를 선택</label>
            <div class="formfield">
              <input type="radio" name="hosttype" value="서비스불만족" alt="탈퇴사유" >서비스불만족
              <input type="radio" name="hosttype" value="원하는정보없음" alt="탈퇴사유" >원하는정보없음
              <input type="radio" name="hosttype" value="다른사이트이용" alt="탈퇴사유" >다른사이트이용
              <input type="radio" name="hosttype" value="기타" alt="탈퇴사유">기타
              <input type="text" placeholder="직접입력">
			</div>
		</div>
		<button id="gogomain_btn" style="width: 10%; float: right;">탈퇴</button><br/><br/>
	</form></div>`
	}
}