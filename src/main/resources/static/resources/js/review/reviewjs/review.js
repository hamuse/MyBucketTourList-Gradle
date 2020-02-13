var review = review || {};
review = (() => {
    const WHEN_ERR = '호출하는 리뷰 js를 찾을 수 없습니다 .'
    let context, js;
    let mainVuejs, detail, writejs, search, updatejs, reviewbestjs, reviewdetailskilljs;
    let reviewmainvue, detailvue;
    let init = () => {
        context = $.ctx()
        js = $.js()
        reviewmainvue = js + '/review/vue/main_vue.js'
        detailvue = js + '/review/vue/detail_vue.js'
        mainVuejs = js + '/vue/mainVue.js'
        detail = js + '/review/vue/detail_vue.js'
        search = js + '/review/vue/search_vue.js'
        writejs = js + '/review/reviewjs/write.js'
        updatejs = js + '/review/reviewjs/update.js'
        reviewbestjs = js + '/review/reviewjs/reviewbest.js'
        reviewdetailskilljs = js + '/review/reviewjs/reviewdetailskill.js'
    }
    let onCreate = () => {
        init();
        $.when(
            $.getScript(mainVuejs),
            $.getScript(detail),
            $.getScript(detailvue),
            $.getScript(writejs),
            $.getScript(updatejs),
            $.getScript(reviewbestjs),
            $.getScript(reviewdetailskilljs),
            $.getScript(search),
            $.getScript(reviewmainvue)

        ).done(() => {
            setContentView()
            movewrite()
            movesearch()
            make()
            crw()

        }).fail(() => {
            alert(WHEN_ERR)
        })
    }
    let setContentView = () => {
        $('#mainbody').empty()
        $(main_vue.review()).appendTo('#mainbody')
        $.extend(new Review())
        if (sessionStorage.getItem('uid')!= null) {
            $(`<div style="padding-bottom: 20px;" >
              <button id = "gowrite" style="background-color: brown;"class="button rounded-0 primary-bg text-white w-100 btn_1" >Write</button>
             </div>`).appendTo('#writebtnspace')
            best()
            personalbest()
        } else {
            $('#bestspace').remove()
            $('#personalbestspace').remove()
        }
        recent_list({ pageNo: 1 })
        scroll()
        $(main_vue.head()).appendTo('head')
    }
    let scroll = () => {
        let count = 1;
        setTimeout(function () {
            $(window).on('scroll.one', () => {
                if ($(document).height() - $(this).height() - 10 < $(this).scrollTop()) {
                    count++;
                    recent_list({ pageNo: count })
                }
            })
        },1000);
    }
    let personalbest = () => {
        $.getJSON(`${context}/review/personalbest/${sessionStorage.getItem('uid')}`, d => {
            $(`<h2 class="typography" style="text-align-last: center;">${sessionStorage.getItem('uname')}님이  관심있는  글입니다</h2>`).appendTo('#personalbestreviewtitle')
            $(`<div style="padding-bottom: 20px; text-align :right">
              <button id="personalgobestlist" class="genric-btn primary-border circle arrow">추천글 더보기</button>
             </div>`).appendTo('#personalbestreviewtitle')
                .click(e => {
                    e.preventDefault()
                    $('#reviewbody').empty()
                    $('#bestspace').remove()
                    $(window).unbind('scroll.one');
                    $.each(d, (i, j) => {
                        if (i > 3) {
                            $(`<div class="col-md-4 col-sm-6 portfolio-item">
                    <a class="portfolio-link" data-toggle="modal" href="#portfolioModal2">
                        <div id="id${j.artseq}" class="portfolio-hover">
                        <div class="portfolio-hover-content">
                            <i class="fas fa-plus fa-3x"></i>
                        </div>
                        </div>
                        <img style="width:100%;height: 200px;"class="img-fluid" src=${j.img} alt="">
                    </a>
										<div class="portfolio-caption">
											
                        <h5 >베스트추천</h5>
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
                        }
                    })
                })
            $.each(d, (i, j) => {
                if (i < 3) {
                    $(`<div class="col-md-4 col-sm-6 portfolio-item">
                    <a class="portfolio-link" data-toggle="modal" href="#portfolioModal2">
                        <div id="id${j.artseq}" class="portfolio-hover">
                        <div class="portfolio-hover-content">
                            <i class="fas fa-plus fa-3x"></i>
                        </div>
                        </div>
                        <img style="width:100%;height: 200px;"class="img-fluid" src=${j.img} alt="">
                    </a>
										<div class="portfolio-caption">
											
                        <h5 style="color: #df432a;">베스트추천</h5>
                        <h4>${j.title}</h4>
                    </div>
                    </div>`).appendTo('#personalbestreviewbody')
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
                }
            })
        })
    }
    let best = () => {
        $.getJSON(`${context}/review/firstbest/${sessionStorage.getItem('uid')}`, d => {
            let gender;
            if (d.age.gender == 'M') { gender = '남성' } else { gender = '여성' }
            $(`<h2 class="typography" style="text-align-last: center;">${d.age.ages}대 ${gender}이  좋아하는 글입니다</h2>`).appendTo('#bestreviewtitle')
            $(`<div style="padding-bottom: 20px; text-align :right">
              <button id="gobestlist" class="genric-btn primary-border circle arrow">연령별 추천글 검색</button>
             </div>`).appendTo('#bestreviewtitle')
                .click(e => {
                    e.preventDefault()
                    $('#reviewbody').empty()
                    $('#bestspace').empty()
                    $('#personalbestspace').remove()
                    reviewbest.onCreate()
                })
            $.each(d.review, (i, j) => {
                $(`<div class="col-md-4 col-sm-6 portfolio-item">
                    <a class="portfolio-link" data-toggle="modal" href="#portfolioModal2">
                        <div id="id${j.artseq}" class="portfolio-hover">
                        <div class="portfolio-hover-content">
                            <i class="fas fa-plus fa-3x"></i>
                        </div>
                        </div>
                        <img style="width:100%;height: 200px;"class="img-fluid" src=${j.img} alt="">
                    </a>
                    <div class="portfolio-caption">
                        <h5 style="color: #df432a;">베스트추천</h5>
                        <h4>${j.title}</h4>
                    </div>
                    </div>`).appendTo('#bestreviewbody')
                $('#id' + j.artseq).click(e => {
                    e.preventDefault()
                    $('html').scrollTop(0);
                    $('#reviewbody').empty()
                    $('#personalbestspace').remove()
                    $('#bestspace').remove()
                    $(detail_vue.detail(j)).appendTo('#reviewbody')
                    localStorage.clear(); 
                    $.extend(new Review(j))
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

        $(window).unbind('scroll.one');
    }
    let recent_list = x => {
        $.getJSON(context + '/review/list/' + x.pageNo, d => {
            $.each(d.review, (i, j) => {
                $(`<div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal2">
            <div id="id${j.artseq}" class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img style="width:100%;height: 200px;"class="img-fluid" src=${j.img} alt="">
          </a>
          <div class="portfolio-caption">
            <h4>${j.title}</h4>
          </div>
        </div>`).appendTo('#reviewbody')
                $('#id' + j.artseq).click(e => {
                    e.preventDefault()
                    $('html').scrollTop(0);
                    $('#reviewbody').empty()
                    $('#personalbestspace').remove()
                    $('#bestspace').remove()
                    $(detail_vue.detail(j)).appendTo('#reviewbody')
                    localStorage.clear(); 
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
    let movewrite = () => {
        $('#gowrite').click(e => {
            e.preventDefault()
            $('#personalbestspace').remove()
            $('#bestspace').remove()
            $('#reviewbody').empty()
            write.onCreate()
        })
    }

    let movesearch = () => {
        $('#searchbtn').click(e => {
            e.preventDefault()
            $.getJSON(context + '/review/search/' + $('#searchword').val(), d => {
                $('#personalbestspace').remove()
                $('#bestspace').remove()
                $('#reviewbody').empty()
                $.each(d, (i, j) => {
                    $(`<div class="col-md-4 col-sm-6 portfolio-item">
                    <a class="portfolio-link" data-toggle="modal" href="#portfolioModal2">
                        <div id="id${i}" class="portfolio-hover">
                        <div class="portfolio-hover-content">
                            <i class="fas fa-plus fa-3x"></i>
                        </div>
                        </div>
                        <img style="width:100%;height: 200px;"class="img-fluid" src=${j.img} alt="">
                    </a>
                    <div class="portfolio-caption">
                        <h4>${j.title}</h4>
                    </div>
                    </div>`).appendTo('#reviewbody')
                    $('#id' + i).click(e => {
                        e.preventDefault()
                        $('#reviewbody').empty()
                        $(`<div style="display: block; padding-right: 17px; width: 70%; text-align: center; border: solid #d4d4d4;">
                            <h2 class="text-uppercase">${j.title}</h2>
                        <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                        <img class="img-fluid d-block mx-auto" src=${j.img} alt="">
                        <p>${j.content}</p>           
                        <div style=" padding-left: 10px;">
                            <input type="text" style="width:100%" />
                            <a href="#" class="genric-btn primary small" style="width:100%">댓글달기</a>
                        </div>
                        <div style="text-align: initial; padding-left: 15px; padding-top: 9px; padding-bottom: 10px;">
                            <li>a;lkdsjflakhgi;law</li>
                            <li>ahgl;aksgk;lsadghlksadghs</li>
                            <li>aldjghlaskdjhgljksadghsadkjgh</li>
                        </div>                
                        </div>`).appendTo('#reviewbody')
                    })
                    $(window).unbind('scroll.one');
                })
            })
        })
    }
    let make = () => {
        $('#create').click(() => {
            $.getJSON(context + '/review/create/table', d => {
                alert("성공!!" + d.msg)
            })
        })
        $('#createlike').click(() => {
            $.getJSON(context + '/review/create/tablelike', d => {
                alert("성공!!" + d.msg)
            })
        })
        $('#createcomment').click(() => {
            $.getJSON(context + '/review/create/tablecomment', d => {
                alert("성공!!" + d.msg)
            })
        })
        $('#likedummy').click(() => {
            $.getJSON(context + '/review/create/likedummy', d => {
                alert("성공!!" + d.msg)
            })
        })
    }

    let crw = () => {
        $('#crawling').click(() => {
            $.getJSON(context + '/review/crawler', d => {
                alert("성공!!")
            })
        })
    }
    return { onCreate }

})()