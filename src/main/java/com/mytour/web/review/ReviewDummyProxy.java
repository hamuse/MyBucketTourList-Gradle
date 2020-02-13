package com.mytour.web.review;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.mytour.web.mapper.ReviewMapper;
import com.mytour.web.proxy.Inventory;

import lombok.Data;

@Data
@Component
public class ReviewDummyProxy {
	@Autowired ReviewMapper reviewMapper;
	@Autowired Like like;
	@Autowired Review review;
	@Autowired Inventory<HashMap<String,String>> inventory;
	@Autowired ReviewDummyProxy reviewDummyProxy;
 


	public void likedummy() {
		List<String> uid = reviewMapper.uidlist();
		List<String> artseq = reviewMapper.artseqlist();
		for(int i = 0;i<300;i++) {
		Collections.shuffle(uid);
		Collections.shuffle(artseq);
		like.setArtseq(artseq.get(0));
		like.setUid(uid.get(0));
		like.setLikecheck("1");
		reviewMapper.insertLike(like);
		}
		
	}
	public void inputlikecnt() {

		for(int i = 0; i<reviewMapper.likeinfo().size();i++) {
			review.setArtseq(reviewMapper.likeinfo().get(i).getArtseq());
			review.setLikecnt(reviewMapper.likeinfo().get(i).getLikecnt());
			reviewMapper.updatelikecnt(review);
		}				
	}
	public String makeTag() {
        List<String> tags = Arrays.asList("산", "바다", "도시", "휴식", "가족", "레저", "혼자");
           Collections.shuffle(tags);
           String tag = tags.get(0);
        return tag;
    }
	
	public List<String> crawlingurl(){
		List<String> urls = new ArrayList<String>();
		for(int i = 0; i<4; i++) {
		String url ="http://www.ppomppu.co.kr/zboard/zboard.php?id=tour&page="+i+"&category=8&divpage=19";
		
		try {
			Document rawData = Jsoup.connect(url).timeout(10 * 1000).get();
		
			
			//Elements urltag = rawData.select("tr[align=center]").select("td[class=eng list_vspace]");	
			Elements urltag =rawData.select("td[align=left] a");
			
			 
			for(Element e:urltag) {
				if(e.attr("href").length()>35) {
					urls.add("http://www.ppomppu.co.kr/zboard/" + e.attr("href"));
				}
		
				System.out.println("e."+e.attr("href"));
			
			}
			
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		}
		System.out.println("urllist"+urls.toString());
		return urls;
	}
	@Transactional
	public ArrayList<HashMap<String,String>> reviewCrawing(){

		List<String> urls = crawlingurl();
		List<String> uid = reviewMapper.uidlist();
		for(String u:urls) {
			try {
				Document rawData = Jsoup.connect(u).timeout(10 * 1000).get();
				Elements title = rawData.select(".info_bg")
                        .select("tbody").select("tr").select("td")
                        .select("table").select("tbody").select("tr").select("td")
                        .select("font.view_title2");	
				
				  Elements content =rawData.select(".pic_bg")
	                        .select("tbody").select("tr").select("td")
	                        .select("table").select("tbody").select("tr").select("td")
	                        .select("table").select("tbody").select("tr").select("td");
				 
				
				Elements img = rawData.select(".pic_bg")
                        .select("tbody").select("tr").select("td")
                        .select("table").select("tbody").select("tr").select("td")
                        .select("table").select("tbody").select("tr").select("td").select("p").select("img");
				
				review.setImg(img.attr("src"));
				
				
				review.setTitle(title.text());
				review.setContent(content.text());
				review.setTag(reviewDummyProxy.makeTag());
				Collections.shuffle(uid);
				review.setUid(uid.get(0));
				if(img.attr("src") !=""){
					reviewMapper.insertReview(review);
				}
				
			} catch (Exception e2) {
				e2.printStackTrace();
			}
		}
		
		return null;
	}
	

}
