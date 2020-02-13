var write = write || {}
write = (() => {
	let context, js;
	let writevue, reviewjs;
	let init = () => {
		context = $.ctx()
		js = $.js()
		writevue = js + '/review/vue/write_vue.js'
		reviewjs = js + '/review/reviewjs/review.js'
	}
	let onCreate = () => {
		init();
		$.when(
			$.getScript(writevue),
			$.getScript(reviewjs)
		).done(() => {
			setContentView()
			filemodal()
		}).fail(() => {
		})
	}
	let setContentView = () => {
		$('#reviewbody').html(write_vue.write())
		write()
	}
	let filemodal = () => {
		$(`<div id="filemsgmodal" class="modal" style="display: none; text-align: center; position: fixed; z-index: 1;  padding-top: 100px;   left: 0;  top: 0;  width: 100%;  height: 100%;   overflow: auto;  background-color: rgb(0,0,0);  background-color: rgba(0,0,0,0.4);> 
                        <!-- Modal content -->
                        <div class="modaldiv" style="position: fixed;">
                       <div class="modal-content" style=" background-color: #FEFEFE; margin: auto; padding: 20px; border: 1px solid #888; width: 50%;>
                         <div style="width:100%;">
                          <div><h5>업로드 가능한 파일수를 초과하였습니다</h5></div>
                        <button id="closefilemodal" style="color: #fff; background-color: #6c757d; border: 1px solid #6c757d; cursor: pointer; padding: .375rem .75rem; font-size: 1rem; border-radius: .25rem;">확인</button>
                       
                        </div>
                        </div>
                        </div>
                     </div>`).appendTo('#reviewbody')

	}

	let write = () => {
		$(window).unbind('scroll.one');
		var uploadFiles = [];
		$("#drop").on('dragenter', function (e) {
			$(this).addClass('drag-over');
		}).on('dragleave', function (e) {
			$(this).removeClass('drag-over');
		}).on('dragover', function (e) {
			e.stopPropagation();
			e.preventDefault();
		}).on('drop', function (e) {
			e.preventDefault();
			$(this).removeClass('drag-over');
			var files = e.originalEvent.dataTransfer.files;
			var file = files[0];
			var size = uploadFiles.push(file);
			if (size < 2) {
				preview(file, size - 1);
			} else {
				const modals = document.getElementById("filemsgmodal");
				modals.style.display = "block";
				$('#closefilemodal').click(e => {
					$('#filemsgmodal').remove()
				})
			}
			$('#writebtn').click(e => {
				e.preventDefault();
				let json = {
					title: $('#form_write input[name="title"]').val(),
					content: $('#form_write textarea[name="content"]').val(),
					boardtype: 'review',
					uid: sessionStorage.getItem('uid')
				}
				$.ajax({
					url: `${context}/review/write`,
					type: 'POST',
					data: JSON.stringify(json),
					dataType: 'json',
					contentType: 'application/json',
					success: d => {
						let formData = new FormData()
						$.each(uploadFiles, function (i, file) {
							if (file.upload != 'disable')
								formData.append('uploadFile', file, file.name);
						});
						$.ajax({
							url: ` ${context}/review/fileupload/${sessionStorage.getItem('uid')}`,
							data: formData,
							type: 'POST',
							contentType: false,
							processData: false,
							success: d => {
							}
						})
						review.onCreate()
					},
					error: e => {
					}
				})
			})

			function preview(file, idx) {
				var reader = new FileReader();
				reader.onload = (function (f, idx) {
					return function (e) {
						var div = `<div class="thumb" style=" height:100%"> 
				<img src=${e.target.result} style=" height:100%" /> </div>`;
						$(div).appendTo('#thumbnails')
					};
				})(file, idx);
				reader.readAsDataURL(file);
			}
		});
	}
	return { onCreate }

})();