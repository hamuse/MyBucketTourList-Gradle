var wordcloud = wordcloud || {}
wordcloud = (() => {
	let context, js, wordvue, jqjs;
	let init = () => {
		context = $.ctx()
		js = $.js()
		wordvue = js + '/review/vue/wordcloudvue.js'
	}
	let onCreate = () => {
		init();
		$.when(
			$.getScript(wordvue),
		).done(() => {
			setContentView()
			makewordcloud()
		}).fail(() => {
		})
	}
	let setContentView = () => {
		$('#mainbody').empty()
		$(wordcloudvue.cloud()).appendTo('#mainbody')
	}

	let makewordcloud = () => {
		var myWords = new Array();
		$.getJSON(context+`/review/wordcloud`, d => {
			for (var i = 0; i < d.length; i++) {
				myWords[i] = d[i];
			}
			var margin = { top: 10, right: 8, bottom: 10, left: 8 },
				width = 1000 - margin.left - margin.right,
				height = 450 - margin.top - margin.bottom;
			var svg = d3.select("#wordcloudspace").append("svg")
				.attr("width", width + margin.left + margin.right)
				.attr("height", height + margin.top + margin.bottom)
				.append("g")
				.attr("transform",
					"translate(" + margin.left + "," + margin.top + ")");
			var layout = d3.layout.cloud()
				.size([width, height])
				.words(myWords.map(function (d) { return { text: d.key, size: d.cnt }; }))
				.padding(3) 
				.rotate(function () { return ~~(Math.random() * 1)  })
				.fontSize(function (d) { return d.size*5; })   
				.on("end", draw);
			layout.start();
			function draw(words) {
				svg
					.append("g")
					.attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
					.selectAll("text")
					.data(words)
					.enter().append("text")
					.style("font-size", function (d) { return d.size; })
					.style("fill",  function(d) { return d.size >40 ? "#FF3333" : d.size >20 ? "#FFCC00":"#405275"})
					.attr("text-anchor", "middle")
					.style("font-family", "Impact")
					.attr("transform", function (d) {
						return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
					})
					.text(function (d) { return d.text; });
			}
			$('#wordcloudspace svg g g text').click(function (e) {
				window.open(`https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=서울+${$(this).text()}`, "PopupWin", "width=500,height=600");
			});
		})
	}
	return { onCreate }
})()