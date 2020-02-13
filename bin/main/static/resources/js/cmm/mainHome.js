"use strict";
var mainHome = mainHome || {};
mainHome = (() => {
    const WHEN_ERR = '호출하는 mainHome js를 찾을 수 없습니다 .'
    let context, js;
    let routerjs, mainVuejs; 
    let reviewjs, wordjs; 
    let loginjs, mypagejs, userjoinjs;
    let coronajs;
    let hoteljs;
    let logoutjs;

    let init = () => {
        context = $.ctx()
        js = $.js()
        routerjs = js + '/cmm/router.js'
        mainVuejs = js + '/vue/mainVue.js'
        reviewjs = js + '/review/reviewjs/review.js'
        wordjs = js + '/review/reviewjs/wordcloud.js'
        loginjs = js + '/user/login.js'
        mypagejs = js + '/user/mypage.js'
        userjoinjs = js + '/user/userjoin.js'
        hoteljs = js + '/crew/hotel/js/hotel.js'
        coronajs = js + '/crew/corona/js/corona.js'
        logoutjs = js + '/user/logout.js'
    }
    let onCreate = () => {
        init()
        $.when(
            $.getScript(mainVuejs),
            $.getScript(routerjs),
            $.getScript(logoutjs),
            $.getScript(reviewjs),
            $.getScript(wordjs),
            $.getScript(loginjs),
            $.getScript(mypagejs),
            $.getScript(userjoinjs),
            $.getScript(hoteljs),
            $.getScript(coronajs),
        ).done(() => {
            setContentView()
            btnchange()
            btnVowel()
        }).fail(() => {
            alert(WHEN_ERR)
        })
    }
    let setContentView = () => {
        let x = { css: $.css(), img: $.img() }
        $('body').html(mainVue.main_navi(x))
            .append(mainVue.main_body(x))
            .append(mainVue.main_footer())
    }

    let btnchange = () => {
        if (sessionStorage.getItem('uid') != null) {
            $('#btnspace').html('<a id="logout_btn" href="#"  class="btn_1 d-none d-lg-block" style=" border-radius:3px;background-color: dimgrey">Logout</a>')
        } else if (sessionStorage.getItem('uid') == null) {
            $('#btnspace').empty()
            $('#btnspace').html('<a id="login_btn" href="#"  class="btn_1 d-none d-lg-block" style=" border-radius:3px;background-color: dimgrey;">Login</a>')
            $('#joinspace').html(`<a id="join_btn" href="#"  class="btn_1 d-none d-lg-block" style=" border-radius:3px;background-color: dimgrey">Join</a>`)
        }
    }

    let btnVowel = () => {
        $('#tourGobtn').click(e => {
            e.preventDefault()
            hotel.onCreate()
            $('html').scrollTop(0);
        })
        $('#reviewgo').click(e => {
            e.preventDefault()
            review.onCreate()
            $('html').scrollTop(0);
        })
        $('#issues').click(e => {
            e.preventDefault()
            wordcloud.onCreate()
            $('html').scrollTop(0);
        })
        $('#mypage_btn').click(e => {
            e.preventDefault()
            if (sessionStorage.getItem('uid') === null ) {
                alert('로그인해주세요')
            } else if (sessionStorage.getItem('uid') != null) {
                mypage.onCreate();
            }
            $('html').scrollTop(0);
        })
        $('#login_btn').click(e => {
            e.preventDefault
            login.onCreate()
            $('html').scrollTop(0);
        })
        $('#logout_btn').click(e => {
            e.preventDefault
            logout.onCreate()
            $('html').scrollTop(0);
        })
        $('#join_btn').click(e => {
            e.preventDefault
            userjoin.onCreate()
            $('html').scrollTop(0);
        })
        $('#coronaid').click(e => {
            e.preventDefault
            corona.onCreate()
            $('html').scrollTop(0);
        })
    }
    return { onCreate }

})();