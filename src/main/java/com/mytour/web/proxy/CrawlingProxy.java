package com.mytour.web.proxy;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;

import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

@Component("crawler")
@Lazy
public class CrawlingProxy extends Proxy{
   @Autowired Inventory<HashMap<String, String>> inventory;
   
   
   public ArrayList<HashMap<String, String>> engCrawling(String url) {
	   url = "https://endic.naver.com/?sLn=kr";
	   inventory.clear();
		try {
			Document rawData = Jsoup.connect(url).timeout(10 * 1000).get();
			Elements txtOrigin = rawData.select("div[class=\"txt_origin\"] a");
			Elements txtTrans = rawData.select("div[class=\"txt_trans\"]");
			HashMap<String, String> map = null;
			for(int i = 0; i < txtOrigin.size(); i++) {
				map = new HashMap<>();
				map.put("origin", txtOrigin.get(i).text());
				map.put("trans", txtTrans.get(i).text());
				inventory.add(map);
			}
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		System.out.println("----------크롤링 결과-----------------");
//		System.out.println(inventory.get().toString());
		inventory.get().forEach(System.out :: println); //:: ->메소드 참조
		return inventory.get();
	}
   public ArrayList<HashMap<String, String>> cgvCrawl(){
	   inventory.clear();
	   
		try {
			final String USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36";
			String cgv = "http://www.cgv.co.kr/movies/?lt=3" ;
			Connection.Response homePage;
			homePage = Jsoup.connect(cgv)
					.method(Connection.Method.GET)
					.userAgent(USER_AGENT)
					.execute();
			Document temp = homePage.parse();
			Elements element = temp.select("div.sect-movie-chart");
			Elements tempforTitle = element.select("strong.title");
			Elements tempforPrecent = element.select("strong.percent");
			Elements tempforTextinfo= element.select("span.txt-info");
			Elements  tempforphoto = temp.select("span.thumb-image");
			HashMap<String, String> map = null;
			for(int i = 0; i<tempforTitle.size();i++) {
				map = new HashMap<>();
				map.put("title", tempforTitle.get(i).text()); 
				map.put("percent", tempforPrecent.get(i).text()); 
				map.put("info", tempforTextinfo.get(i).text()); 
				map.put("photo", tempforphoto.get(i).select("img").attr("src")); 
				inventory.add(map);
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		System.out.println("----------CGV 크롤링 결과-----------------");
		inventory.get().forEach(System.out :: println); 
		return inventory.get();
	}
   public ArrayList<HashMap<String, String>> bugsCrawling() {
	   	inventory.clear();
		try {
			final String USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36";
			String bugsurl = "https://music.bugs.co.kr/chart";
			Connection.Response homePage = Jsoup.connect(bugsurl).method(Connection.Method.GET).userAgent(USER_AGENT)
					.execute();
			Document temp = homePage.parse();
			Elements tempforTitle = temp.select("p.title");
			Elements tempforContent = temp.select("p.artist");
			Elements tempforphoto = temp.select("a.thumbnail");
			HashMap<String, String>map=null;
			for (int i = 0; i<tempforTitle.size();i++) {
				map = new HashMap<>();
				map.put("seq", string(i+1));
				map.put("title", tempforTitle.get(i).text());
				map.put("artist", tempforContent.get(i).text());
				map.put("thumbnail", tempforphoto.get(i).select("img").attr("src"));
				inventory.add(map);
			}
		} catch (Exception e) {
		}
		System.out.println("********************크롤링결과********************");
		inventory.get().forEach(System.out :: println);
		return inventory.get();
	}

}