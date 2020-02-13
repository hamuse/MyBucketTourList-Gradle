package com.mytour.web.map;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.mytour.web.mapper.MapMapper;

import lombok.Data;

@Data
@Component
public class CoronaProxy {
	@Autowired MapMapper mapMapper;
	
	public List<String> placeList() {
		List<String> place = Arrays.asList("인천광역시 의료원",
				"인천공항",
				"김포공항",
				"일산역",
				"일산 명지병원",
				"강남구",
				"한강",
				"강남역",
				"강남구 호텔 투숙",
				"분당서울대병원",
				"평택 송탄터미널",
				"평택 365연합의원",
				"강남구소재 웨딩숍",
				"성동구 소재 역술인 방문",
				"성신여대입구 CGV",
				"한성대입구역",
				"중랑구",
				"중랑구 보건소",
				"서울의료원",
				"서울대병원",
				"종로구일대",
				"교대역",
				"군산시청",
				"군산 의료기관",
				"전라북도 군산의료원",
				"원광대병원",
				"강릉역",
				"충무로역",
				"서울역",
				"순천향대학교 부천병원",
				"인천 출입국관리사무소",
				"부천역 CGV",
				"부천시청",
				"산본로데오거리",
				"분당 서울대병원",
				"팔달구청",
				"수원역",
				"국립중앙의료원",
				"성균관대학교 자연과학캠퍼스",
				"장안구보건소",
				"국군수도병원");
		
		return place;
	}
	public List<String> latitudeList() {
		List<String> latitude = Arrays.asList(
				"126.668589/37.4786022",
				"126.440877/37.4795073",
				"126.808431/37.5566873",
				"126.768949/37.6828706",
				"126.830928/37.6421083",
				"127.047466/37.5175526",
				"126.935791/37.5255893",
				"127.030014/37.4931680",
				"127.045075/37.5102374",
				"127.123165/37.3515778",
				"127.058131/37.0794485",
				"127.057301/37.0520654",
				"127.055873/37.5206575",
				"127.030726/37.5484351",
				"127.017178/37.5925591",
				"127.005787/37.5880552",
				"127.092889/37.6066071",
				"127.092889/37.6066071",
				"127.097280/37.6130637",
				"126.999107/37.5790273",
				"126.999390/37.5876858",
				"127.019170/37.4954317",
				"126.736830/35.9675127",
				"126.723266/35.9755750",
				"126.712399/35.9545867",
				"126.933600/37.3593969",
				"128.898418/37.7629152",
				"126.994094/37.5611515",
				"126.971042/37.5523812",
				"126.762714/37.4983725",
				"126.630765/37.4617310",
				"126.781127/37.4858663",
				"126.765889/37.5029019",
				"126.931692/37.3596480",
				"127.123165/37.3515778",
				"127.019481/37.2825752",
				"126.999872/37.2661507",
				"127.006114/37.5676297",
				"126.975737/37.2934133",
				"127.010068/37.3037415",
				"127.149989/37.3838667");
		
		return latitude;
	}

	 public List<Corona> coronaDB() {
		 Corona corona= null;
		 List<Corona> coronaList = new ArrayList<>();
		 for(int i = 0 ; i<placeList().size();i++) {
			 corona = new Corona(placeList().get(i), latitudeList().get(i));
			 coronaList.add(corona);
		 }
	  return coronaList;
	 }
		@Transactional
		public void insertCoronaDB() {
			 List<Corona> coronaList = coronaDB();
			for(int i=0;i<coronaList.size();i++) {
				mapMapper.insertCorona(coronaList.get(i));
			}
		} 
}
