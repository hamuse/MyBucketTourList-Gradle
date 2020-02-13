"use strict";
var app = app || {};
app = (() => {
	let run =x=>$.getScript('/resources/js/cmm/router.js',
			()=>{$.extend(new Session())
					onCreate()})
	let onCreate = () => {
		$.when($.getScript($.js() + '/cmm/mainHome.js'))
			.done(() => {mainHome.onCreate()})
			.fail(() => {alert('error occurred on app.js')})
	}
	return { run }
})();