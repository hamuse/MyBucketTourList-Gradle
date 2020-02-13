var update = update || {}
update = (() => {
	let context, js;
	let init = () => {
		context = $.ctx()
		js = $.js()
	}
	let onCreate = () => {
		init();
		$.when(
		).done(() => {
			setContentView()
		}).fail(() => {
		})
	}
	let setContentView = () => {
		$('#reviewbody').empty()
			$(`<div style="display: block; padding-top:20px; padding-right: 17px; width: 70%; text-align: -webkit-center; border: solid #d4d4d4;">
              	 제목: <input id = "updatetitle"type="text" style= "width: 70%;"></input>
             
			  <div id ="imgspace" style="padding-left: 10px;padding-top: 10px;padding-bottom: 10px;width: 70%;">
			  <img class="img-fluid d-block mx-auto" src=${localStorage.getItem('rimg')} alt=""></div>
			  
			<div> 내용:<textarea id = "updatecontent"  style= "width: 70%;"  cols="20" rows="10"></textarea> </div>
			  <button id="updatebtn" class="btn btn-primary" data-dismiss="modal" type="button"> 수정 </button>
              </div>`).appendTo('#reviewbody')
		
		update()
	}

	let update = () => {

		let artseq 
		
			$('#updatetitle').val(localStorage.getItem('rtitle'))
			$('#updatecontent').val(localStorage.getItem('rcontent'))
			artseq = localStorage.getItem('rartseq')
		
		$('#updatebtn').click(e => {
			e.preventDefault()
			let json = {
				artseq: artseq,
				title: $('#updatetitle').val(),			
				content:$('#updatecontent').val(),	
			}
			$.ajax({
				url: `${context}/review/update/${artseq}`,
				type: 'POST',
				data: JSON.stringify(json),
				dataType: 'json',
				contentType: 'application/json',
				success: d => {
					   if (d.msg === 'success') {
                        $('#reviewbody').html(`<h6>성공적으로 수정되었습니다</h6>`)
                    } else {
                        alert('오류')
                    }
				},
				error: e => {alert('실패 ') }
			})
		})
	}
	return { onCreate }

})();