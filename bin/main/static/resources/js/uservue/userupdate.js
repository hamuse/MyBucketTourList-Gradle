"use strict"
var userupdate = userupdate || {}
userupdate = {
	update_body: x => {
		return `
		<div>
		<div>
		<div id="host-container">
<div>
	<form name="searchForm" id="searchForm">
		<div id="host-header" align="center">
			<h1> 내정보 수정</h1>
		</div>
		<div class="sub">
			<div align="center">
      <div style="display: inline-block;">
				<div class="card-block" >
					<div class="form-group row">
					<div style="width:80px;"><p>아이디</p></div>
						<div class="col-sm-5">
							<input type="text" id="uidupdate" class="form-control" name="userName" value="${x.uid}" readonly="readonly"
							placeholder="${x.uid}">
						</div>
					</div>

					 <div class="form-group row">
					<div style="width:80px;"><p>이름</p></div>
						<div class="col-sm-5">
							<input type="text" id="unameupdate" class="form-control" name="userName" value="${x.uname}" >
						</div>
					</div> 

					<div class="form-group row">
					<div style="width:80px;"><p>닉네임</p></div>
						<div class="col-sm-5">
							<input type="text" id="nicknameupdate" class="form-control" name="userName" value="${x.nickname}" >
						</div>
					</div>
					<div class="form-group row">
					<div style="width:80px;"><p>생일</p></div>	
						<div class="col-sm-5">
							<input type="text" id="birthupdate" class="form-control" name="pubManagerTitle" value="${x.birth}">
						</div>
					</div>
					<div class="form-group row">
					<div style="width:80px;"><p>전화번호</p></div>
						<div class="col-sm-6 input-group" id="phoneIpt">
							<input type="text"  id="userPhoneupdate" value="${x.tel}">
						</div>
					</div>
					
					<div class="form-group row">
						<div class="col-sm-5">
						</div>
					</div>

          </div>
          </div>
		  <div text-align: center; font-size: 0;>
	
					<span class="form-group row" style="display: inline-block; margin-right:1%">
						<label for="managerPhone" class="col-sm-2 form-control-label"></label>
						<span class="col-sm-5">
							<a id="userupdatebtn"href="#">
								<h2 style="color:#6c757d" align="center">| 정보수정 |</h2>
							</a>
						</span>
					</span>

          </span>
          </div>
				</div>


			</div>
	</form>
</div></div>
</div>`

	},

}