package com.mytour.web.review;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.mytour.web.mapper.ReviewMapper;
import com.mytour.web.proxy.Box;
import com.mytour.web.proxy.Inventory;
import com.mytour.web.proxy.Proxy;




@Component("reviewCrawler")
@Lazy
public class ReviewCrawling extends Proxy {
	@Autowired
	Inventory<HashMap<String, String>> inventory;
	@Autowired
	Box<String> box;
	@Autowired
	Review review;
	@Autowired
	ReviewProxy reviewProxy;
	@Autowired
	ReviewMapper reviewMapper;

	
	public List<String> crawlingurl() {
		List<String> tempurls = new ArrayList<String>();
		List<String> title = new ArrayList<String>();
		
		for (int i = 0; i < 10; i++) {
			String travelurl = "http://newsearch.seoul.go.kr/ksearch/search.do?category=news&kwd=%EC%84%9C%EC%9A%B8%EC%97%AC%ED%96%89&date=&startDate=&endDate=&originalQuery=&categorize=true&page="+i+"&pageNum="+i+1+"&resrch=false&sort=d&fields=&group=&id=&ctgrnm=&url=&tit=&detail=false&basickwd=&exactkwd=&inkwd=&notkwd=&notkwd=false&callLoc=&autospc=y&tr_code=&imgno=&srch_opt=n&imageRelation=&imgkwds=&imgRelateNoneKwds=&imgRelateKwds=";
			String toururl ="http://newsearch.seoul.go.kr/ksearch/search.do?category=news&kwd=%EC%84%9C%EC%9A%B8%EA%B4%80%EA%B4%91&date=&startDate=&endDate=&originalQuery=&categorize=true&page="+i+"&pageNum="+i+1+"&resrch=false&sort=d&fields=&group=&id=&ctgrnm=&url=&tit=&detail=false&basickwd=&exactkwd=&inkwd=&notkwd=&notkwd=false&callLoc=&autospc=y&tr_code=&imgno=&srch_opt=n&imageRelation=&imgkwds=&imgRelateNoneKwds=&imgRelateKwds=";
			tempurls.add(travelurl);
			tempurls.add(toururl);
		}

		for (String url : tempurls) {
			try {

				Document rawData = Jsoup.connect(url).timeout(10 * 1000).get();
				Elements finedurl = rawData.select("a[class=title]");

				for (Element e : finedurl) {
					
					title.add(e.text().replaceAll("[0-9]", ""));
					
				}

			} catch (Exception e) {
				e.printStackTrace();
			}
		}
	
		
		return title;
	}


}
