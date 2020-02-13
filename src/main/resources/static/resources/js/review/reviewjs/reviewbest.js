var reviewbest = reviewbest || {}
reviewbest = (() => {
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
		bestreviewsearch()
		$(window).unbind('scroll.one');
	}
	let bestreviewsearch = () => {
		$('#bestspace').css({ display: 'flex' })
		$(`<div class="default-select"  style=" float: left; width: 80px;">
			<select id="searchage">
				<option value="20">20대</option>
				<option value="30">30대</option>
				<option value="40">40대</option>
				<option value="50">50대</option>
				</select>
			</div>`).appendTo('#bestspace')
		$(`<div >
						<input name="gendersearch" type="radio"  value="F">여성
						<input name="gendersearch" type="radio"  value="M">남성

					</div>`).appendTo('#bestspace')
		$(`<div ><h3>이 좋아하는 글을 추천합니다</h3></div>`).appendTo('#bestspace')
 		$('#searchage').change(function(){
			bestreviewlist()
		}) 
		$('input[name="gendersearch"]').change(function(){
			bestreviewlist()
		})
	}
	let bestreviewlist=()=>{
		$('#reviewbody').empty()
		$.getJSON(`${context}/review/searchbest/
		${$('#searchage option:selected').val()}/${$('input[name="gendersearch"]:checked').val()}`, d => {
            $.each(d, (i, j) => {
                $(`<div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal2">
            <div id="id${j.artseq}" class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img style="width:100%;"class="img-fluid" src=${j.img} alt="">
          </a>
          <div class="portfolio-caption">
            <h4>${j.title}</h4>
          </div>
        </div>`).appendTo('#reviewbody')
                $('#id' + j.artseq).click(e => {
                    e.preventDefault()
                    $('html').scrollTop(0);
                    $('#reviewbody').empty()
                    $('#bestspace').remove()
                    $(detail_vue.detail(j)).appendTo('#reviewbody')
                        localStorage.setItem('rartseq', j.artseq);
                        localStorage.setItem('ruid', j.uid);
                        localStorage.setItem('rtitle', j.title);
                        localStorage.setItem('rcontent', j.content);
                        localStorage.setItem('rimg', j.img);
                        reviewdetailskill.onCreate()
                    $(window).unbind('scroll.one');
                })

            })
        })
	}
	return { onCreate }
})();