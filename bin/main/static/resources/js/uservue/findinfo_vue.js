var findinfo_vue = findinfo_vue || {}
findinfo_vue = {
  findinfo_id: () => {
		return `
		<div id ="finduserid" style="padding-bottom: 30px;">
		<div id="host-container">
    <div>
    <form name="post">
    <div id="host-header">
				<h1 align="center">아이디찾기</h1>
			</div>
<div class="form-group row">
					<label for="userName" class="col-sm-2 form-control-label">이름</label>
					<div class="col-sm-5">
						<input id="finduname"type="text" class="form-control" name="userName" maxlength="20" autocomplete="off"
							value="">
					</div>
				</div>        
      <div class="form-group row">
					<label for="phone" class="col-sm-2 form-control-label">전화번호</label>
					<input type="hidden" class="form-control" name="hosttel" value="">
					<div class="col-sm-6 input-group" id="phoneIpt">
						<input id="findtel" type="text" placeholder="-없이 숫자만 입력해주세요" class="form-control"  value="">
					</div>
				</div>
      <div style="text-align: center">
          <input id="btnfindid" type="submit" value="아이디 찾기" />
          </div>
    </form>
  </div>
</div>
</div>
</div>`
  },
  findinfo_pwd: () => {
		return `
		<div id ="finduserpw" style="padding-bottom: 30px;">
		<div id="host-container">
    <div>
    <form name="post">
    <div id="host-header">
				<h1 align="center">비밀번호찾기</h1>
			</div>

<div class="form-group row">
					<label for="userName" class="col-sm-2 form-control-label">아이디</label>
					<div class="col-sm-5">
						<input id="finduserid"type="text" class="form-control" name="userName" maxlength="20" autocomplete="off"
							value="">
					</div>
				</div>        
      <div class="form-group row">
					<label for="phone" class="col-sm-2 form-control-label">전화번호</label>
					<input type="hidden" class="form-control" name="hosttel" value="">
					<div class="col-sm-6 input-group" id="phoneIpt">
					<input id="findteltel" type="text" placeholder="-없이 숫자만 입력해주세요" class="form-control" value="">
					</div>
				</div>
      <div style="text-align: center">
          <input id="btnfindpw" type="submit" value="비밀번호  찾기" />
          </div>
    </form>
  </div>
</div>
</div>
</div>`
  }

}