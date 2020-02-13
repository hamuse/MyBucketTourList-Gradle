"use strict";
function Session() {
	sessionStorage.setItem('ctx', '');
	sessionStorage.setItem('js', '/resources/js');
	sessionStorage.setItem('css','/resource/mytourcss');
	sessionStorage.setItem('img','/resources/mytourimg');
	return {
		ctx: () => { return sessionStorage.getItem('ctx'); },
		js: () => { return sessionStorage.getItem('js'); },
		css: () => { return sessionStorage.getItem('css'); },
		img: () => { return sessionStorage.getItem('img'); }
	}
}
function User(s){
	sessionStorage.setItem('uname', s.uname);
	sessionStorage.setItem('nickname', s.nickname);
	sessionStorage.setItem('uid', s.uid);
	sessionStorage.setItem('pwd', s.pwd);
	sessionStorage.setItem('tel', s.tel);
	sessionStorage.setItem('birth', s.birth);
	sessionStorage.setItem('pettype', s.pettype);
   return{
		uname : () =>{return sessionStorage.getItem('uname');},
		uid : () =>{return sessionStorage.getItem('uid');},
		pwd : () =>{return sessionStorage.getItem('pwd');},
		nickname : () =>{return sessionStorage.getItem('nickname');},
		tel : () =>{return sessionStorage.getItem('tel');},
		birth : () =>{return sessionStorage.getItem('birth');},
      pettype : () =>{return sessionStorage.getItem('pettype');}
   }
}
function Review(){

   return{
      rartseq : () =>{return localStorage.getItem('rartseq');},
      ruid : () =>{return localStorage.getItem('ruid');},
      rtitle : () =>{return localStorage.getItem('rtitle');},
      rcontent : () =>{return localStorage.getItem('rcontent');},
      rtel : () =>{return localStorage.getItem('rtel');},
      rimg : () =>{return localStorage.getItem('rimg');},
   }
} 

