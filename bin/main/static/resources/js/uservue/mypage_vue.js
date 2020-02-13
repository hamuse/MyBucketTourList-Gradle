"use strict"
var mypage_vue = mypage_vue || {}
mypage_vue = {
	mypage_body: x => {
		return `
		<div style="padding-bottom: 30px; height: 550px;">
		<div>
		<div id="host-container my page">
<div>
	<form name="searchForm" id="searchForm">
		<div id="host-header" align="center">
			<h1> ${x.nickname} 님의 Mypage</h1>
		</div>
		<div class="sub">
			<div align="center">
      <div style="display: inline-block;">
				<div class="card-block" >
					<div class="form-group row">
						<div style="width:80px;"><p>아이디</p></div>
						<div class="col-sm-5">
							<input type="text" id="uid" class="form-control" name="userName" value="" readonly="readonly"
							placeholder="${x.uid}">
						</div>
					</div>
					<div class="form-group row">
						<div style="width:80px;"><p>이름</p></div>
						<div class="col-sm-5">
							<input type="text" id="myusername" class="form-control" name="userName" value="" readonly="readonly"
							placeholder="${x.uname}">
						</div>
					</div>

					<div class="form-group row">
						<div style="width:80px;"><p>닉네임</p></div>
						<div class="col-sm-5">
							<input type="text" id="nickname" class="form-control" name="userName" value="" readonly="readonly"
							placeholder="${x.nickname}">
						</div>
					</div>
					<div class="form-group row">
						<div style="width:80px;"><p>생일</p></div>
						<div class="col-sm-5">
							<input type="text" id="mybirth" class="form-control" name="pubManagerTitle" value="" readonly="readonly"
							placeholder="${x.birth}">
						</div>
					</div>



					<div class="form-group row">
					<div style="width:80px;"><p>전화번호</p></div>
						<div class="col-sm-6 input-group" id="phoneIpt">
							<input type="text"  id="myuserPhone" value="${x.tel}" readonly="readonly">
						</div>
					</div>
					
					<div class="form-group row">
						<div style="width:80px;"></div>
						<div class="col-sm-5">
						</div>
					</div>

          </div>
          </div>
		  <div text-align: center; font-size: 0;>
		  
							<span class="form-group row" style="display: inline-block; margin-right:1%">
						<label for="managerPhone" class="col-sm-2 form-control-label"></label>
						<span  class="col-sm-5">
							<a id="mytourlist_btn" href="#">
								<h2 style=" color:#343a40" align="center">My TourList | |</h2>
							</a>
						</span>
					</span>
		  			<span class="form-group row" style="display: inline-block; margin-right:1%">
						<label for="managerPhone" class="col-sm-2 form-control-label"></label>
						<span  class="col-sm-5">
							<a id="listhost_btn" href="#">
								<h2 style=" color:#343a40" align="center">리스트 |</h2>
							</a>
						</span>
					</span>
					<span class="form-group row" style="display: inline-block; margin-right:1%">
						<label for="managerPhone" class="col-sm-2 form-control-label"></label>
						<span id="change_btn" class="col-sm-5">
							<a href="#">
								<h2  style=" color:#343a40" align="center">| 정보수정 |</h2>
							</a>
						</span>
					</span>
					<span class="form-group row" style="display: inline-block;">
						<label for="managerPhone" class="col-sm-2 form-control-label"></label>
						<span id="delete_btn" class="col-sm-5">
							<a href="#">
								<h2  style=" color:#343a40; align:center"  >| 회원탈퇴</h2>
							</a>
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