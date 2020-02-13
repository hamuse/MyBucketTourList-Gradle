var reviewdetailskill = reviewdetailskill || {}
reviewdetailskill = (() => {
    let context, js, reviewjs,updatejs;
    let init = () => {
        context = $.ctx()
        js = $.js()
        reviewjs = js + '/review/reviewjs/review.js'
        updatejs = js + '/review/reviewjs/update.js'
    }
    let onCreate = () => {
        init();
        $.when(
            $.getScript(reviewjs),
            $.getScript(updatejs)
        ).done(() => {
            deletemodal()
            setContentView()
        }).fail(() => {
        })
    }
    let setContentView = () => {
        detailskill()
    }
    let detailskill = () => {
        likeimg()
        $(`<p class="item-intro text-muted">작성자 : ${$.ruid()} 님</p>`).appendTo('#writerid')
        if (sessionStorage.getItem('uid') != null) {
            $(`<input id ="writecomment" type="text" style="width:100%" /><a id = "commentbtn"href="#" class="genric-btn primary small" 
            style="width:100%;background-color: #fed1364d;color: #999999;border: solid #999999 1px;">댓글달기</a>`)
                .appendTo('#commentbtnspace')
        }
        if (sessionStorage.getItem('uid') == $.ruid()) {
            $(`<button id = "contentupdate" style="border: solid #999999 2px; background-color: #f9f9ff;color: #999999; padding-rignt:10px">수정</button>
            <button id = "contentdelete" style="border: solid #999999 2px; background-color: #f9f9ff;color: #999999;" >삭제</button>`)
                .appendTo('#reviewbtnspace')
        }
        $('#contentupdate').click(e => {
            e.preventDefault()
            update.onCreate()
        })
        $('#contentdelete').click(e => {
            e.preventDefault()
            deletecontent()
        })
        comments()
        $('#commentbtn').click(e => {
            e.preventDefault()
            comment()
        })
    }
    let comments = () => {
        $.getJSON(`${context}/review/comment/${$.rartseq()}`, d => {
            $.each(d, (i, j) => {
                if (d != null) {
                    $(`<div  style=" display: flex; "id="commentspace${j.commentno}"><p>${j.comments}</p></div>`).appendTo('#commentspace')
                    if (sessionStorage.getItem('uid') == j.uid) {
                        $(`<div id = "commentdelete" style="width:30px;height:15px;margin-left: 10px;" >x</div>`)
                            .appendTo(`#commentspace${j.commentno}`)
                    }
                }
                $('#commentdelete').click(e => {
                    e.preventDefault()
                    $('#commentspace' + j.commentno).remove()
                    $.getJSON(`${context}/review/comment/delete/${j.commentno}/`, d => {

                    })
                })
            })
        })
    }
    let deletemodal = () => {
        $(`<div id="deletemsgmodal" class="modal" style="display: none; text-align: center; position: fixed; z-index: 1;  padding-top: 100px;   left: 0;  top: 0;  width: 100%;  height: 100%;   overflow: auto;  background-color: rgb(0,0,0);  background-color: rgba(0,0,0,0.4);> 
                        <!-- Modal content -->
                        <div class="modaldiv" style="position: fixed;">
                       <div class="modal-content" style=" background-color: #FEFEFE; margin: auto; padding: 20px; border: 1px solid #888; width: 50%;>
                         <div style="width:100%;">
                          <div><h5>글이 성공적으로 삭제되었습니다</h5></div>
                        <button id="closedeletemodal" style="color: #fff; background-color: #6c757d; border: 1px solid #6c757d; cursor: pointer; padding: .375rem .75rem; font-size: 1rem; border-radius: .25rem;">확인</button>
                
                        </div>
                        </div>
                        </div>
                     </div>`).appendTo('#reviewbody')

    }
    let deletecontent = () => {
        const modals = document.getElementById("deletemsgmodal");
        modals.style.display = "block";
        $('#closedeletemodal').click(e => {
            e.preventDefault()
            $('#deletemsgmodal').remove()
            review.onCreate()
        })
        $.getJSON(`${context}/review/delete/${$.rartseq()}/`, d => {
        })
    }
    let likeimg = () => {
        $.getJSON(`${context}/review/likeimg/${$.rartseq()}/${sessionStorage.getItem('uid')}`, d => {
            if (d.likecheck == 0) {
                $('#heart').attr('src', '/web/resources/mytourimg/reviewimg/beforeheart.png')
            } else if (d.likecheck == null) {
                $('#heart').attr('src', '/web/resources/mytourimg/reviewimg/beforeheart.png')
            } else if (d.likecheck == 1) {
                $('#heart').attr('src', '/web/resources/mytourimg/reviewimg/afterheart.png')
            }
        })
        if (sessionStorage.getItem('uid') != null) {
            $('#likebtn').on("click", function (e) {
                $(this).find(">img").attr("src", function (index, attr) {
                    if (attr.match('beforeheart')) {
                        return attr.replace("beforeheart.png", "afterheart.png")
                    } else {
                        return attr.replace("afterheart.png", "beforeheart.png")
                    }
                })
                like($.rartseq())
            })
        }
    }
    let like = x => {
        $.getJSON(`${context}/review/like/${x}/${sessionStorage.getItem('uid')}`, d => {
            $('#likecount').html(`<h6 id ="likecount" style="color: #777;">${d.count}개</h6>`)
        })
    }


    let comment = () => {

        let json = {
            comments: $('#writecomment').val(),
            artseq: $.rartseq(),
            uid: sessionStorage.getItem('uid')
        }
        $.ajax({
            url: `${context}/review/${$.ruid()}/comment`,
            type: 'POST',
            data: JSON.stringify(json),
            dataType: 'json',
            contentType: 'application/json',
            success: d => {
                $('#commentspace').empty()
                comments()
            },
            error: e => { }
        })
    }
    return { onCreate,deletecontent }

})();