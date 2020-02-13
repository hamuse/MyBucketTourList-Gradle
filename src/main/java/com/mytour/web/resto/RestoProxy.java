package com.mytour.web.resto;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.mytour.web.mapper.RestoMapper;

import lombok.Data;

@Data
@Component
public class RestoProxy {
	 @Autowired RestoMapper restoMapper;
	
	public List<String> placeList(){
		List<String> place = Arrays.asList("명가의뜰",
				"불고기브라더스 서울역사점",
				"계림식당",
				"황소고집",
				"필동면옥",
				"대림정",
				"명동교자 본점",
				"명동피자",
				"돈돈돈까스",
				"평안도 족발집",
				
				"동화반점",
				"에베레스트레스토랑",
				"약수순대국",
				"호박식당",
				"오레노",
				"강원정");
		
		
		return place;
	}
	public List<String> spotList(){
		List<String> spot = Arrays.asList("서울특별시 용산구 동자동 43-227",
				"서울특별시 용산구 동자동 청파로 378",
				"서울특별시 종로구 종로3가 돈화문로4길 39",
				"서울특별시 종로구 종로1가 청계천로 75-1",
				"서울특별시 중구 필동 서애로 26",
				"서울특별시 중구 충무로4가 퇴계로 205",
				"서울특별시 중구 명동2가 명동10길 29",
				"서울특별시 중구 충무로2가 명동10길 41",
				"서울특별시 중구 장충동2가 188-11",
				"서울특별시 중구 장충동 장충단로 174-6",
				
				"서울특별시 중구 광희동 장충단로13길 7",
				"서울특별시 중구 장충단로 247 지하 3 층",
				"서울특별시 중구 신당3동 368-77",
				"서울특별시 중구 신당4동 다산로 154",
				"서울특별시 용산구 이태원1동 이태원로27가길 8",
				"서울특별시 용산구 원효로1동 원효로89길 13-10");
		return spot;
	}
	public List<String> pointList(){
		List<String> point = Arrays.asList("서울역",
				"서울역",
				"종로3가역",
				"종로3가역",
				"충무로역",
				"충무로역",
				"명동역",
				"명동역",
				"동대입구역",
				"동대입구역",
				
				"동대문역사문화공원역",
				"동대문역사문화공원역",
				"약수역",
				"약수역",
				"이태원역",
				"숙대입구역");
		return point;
	}
	public List<String> imgList(){
		List<String> img = Arrays.asList("http://nimage.newsway.kr/photo/2016/02/01/2016020108523894313_20160201085343_1.jpg",
				"https://t1.daumcdn.net/cfile/tistory/99B577415AB0C23E10",
				"https://i.imgur.com/iaouQI6.jpg",
				"https://mblogthumb-phinf.pstatic.net/MjAxNzEyMjFfMjIx/MDAxNTEzODQyMzczOTI0.1_RV_CA-Jzi_i2rJF4U_k0ajqUc-_MeXXhxr8ieLX2Qg.p0n7mzZ59UEXZhgXMrU_gHJD0OSrlO1oYu_krrLw2-gg.JPEG.ray203/%EC%98%A4%ED%8F%AC%EA%B3%A0%EA%B8%B0%EC%A7%91_%ED%99%A9%EC%86%8C%EA%B3%A0%EC%A7%91_%EA%B0%88%EB%A7%A4%EA%B8%B0%EC%82%B4021.JPG?type=w800",
				"http://cfile232.uf.daum.net/image/2166B5475561D8BB08E950",
				"https://img.siksinhot.com/place/1424695627225790.jpg?w=640",
				"https://media-cdn.tripadvisor.com/media/photo-s/0c/e2/f5/28/20160825-180906-largejpg.jpg",
				"https://mp-seoul-image-production-s3.mangoplate.com/13745/1044931_1563255525308_743794?fit=around|512:512&crop=512:512;*,*&output-format=jpg&output-quality=80",
				"https://scontent-lga3-1.cdninstagram.com/vp/b117d82471bf6518c3f75a36f9e4d8e9/5E59D496/t51.2885-15/sh0.08/e35/s640x640/75305213_131998541546717_4148416926571904871_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=105",
				"https://lh5.googleusercontent.com/proxy/9gWGcfjvVoKZE91G7QlcDdIBOlGmjQvBxGwtCwCfHMlyg2HRHbnB5vNSQqEASqD4X6QaYSCtLx-c2nZVN8OPJw2qRJPDW18FVNXHDl_JQaRT4yhx47FvbldlDYStuKmPZxFRdmoEVPR_yH776kvZePA64qlPSvG8uZSAnI5KB8gAfPPPiupldGGlUjPIwS7aeOuEqtkrgaqBasVQfpuzsy8HCvNQUOd2LbhjwK-DKbgfS1qcOpqonZQyBUKJ2lK2Fw8Z1CNfF3hAHCcs1Qxt2xgE3asm87PBHSrZzU2q4hs_85tFBIMktFbOqJBTounjsbYP4xh-HWjahfyNpvdJBDAFpkP_uI2DUZGKdoUf5T2WqsIs7Xm4KmgsBAbmVIw0TIRptfkwAHvhP2OffmFzWvG7lQTEl6dkMjKxorzxwSusI8dyq0DSPcMA9msMzq7CozGpHuN8zuWG57iUeibm6w",
				
				"https://lh5.googleusercontent.com/proxy/AlNRoFIxDEvUaMUt4YI4OzO2LeBbKaQjh3KGRHdZExRCCvBlHFqIRgNe0kU6nLI_kyCR_G0pG_3p5UmA4visEq9oZmM1UspMxrNU1Tye2rVH2KQHVnsOu9djL9R4I69kW73odPhXLNjqAgmBK3nxwzVnkHzpp9fd4mZZndJN8Hh9L0CE3O9WMxsDwWbTDoSyJIUetuw3a_idn2GHHjge_RAPPVVKgUP_A0rX7k3nb_Gw0pBZmbvFEWxZJOqI5K-BQSEtnjnnyYXd8fREVz9RFuEFvAfNoeGGt-3eTpHNGZCf1AlCgrO-fiEkLA",
				"https://whereisit.cafe24.com/data/editor/1808/20180821130116_4c76894f523a2080a6a65a62dd8c14eb_la3w.png",
				"https://fastly.4sqi.net/img/general/width960/1583836_Hie2a9LXbtSGufsWDFSXvtYkyQwv8YcIqYkTQluMUBI.jpg",
				"https://www.menupan.com/restaurant/restimg/005/zzmenuimg/h12087524_z.jpg",
				"https://mp-seoul-image-production-s3.mangoplate.com/197186/881154_1578572247965_63293?fit=around|512:512&crop=512:512;*,*&output-format=jpg&output-quality=80",
				"https://static.tasteem.io/uploads/63/post/3048/content_82188e2a-33ee-49d7-bf69-45885e186203.jpeg");
		return img;
	}
	public List<String> latitudeList() {
		List<String> latitude = Arrays.asList(		
				"126.970466/37.5491014",
				"126.971042/37.5523812",
				"126.994478/37.5701434",
				"126.986124/37.5685659",
				"126.996901/37.5603768",
				"126.994592/37.5615660",
				"126.985741/37.5625562",
				"126.985854/37.5620427",
				"127.005197/37.5597281",
				"127.006034/37.5602506",
				"127.008163/37.5677287",
				"127.007302/37.5670170",
				"127.010017/37.5529974",
				"127.012304/37.5572950",
				"126.994866/37.5351489",
				"126.967811/37.5404511");
		
		return latitude;
	}
	public List<String> infoList(){
		List<String> info = Arrays.asList("전국 각지 한식 명인들의 노하우와 제철 식재를 활용한 메뉴가 특징으로 찌개, 구이류와 함께 다양한 찬을 푸짐하게 차려내는 ‘한상차림’과 전국 각 지역의 대표 메뉴를 단품으로 즐길 수 있는 ‘반상차림’ 등을 선보인다.",
				"도시락배달도 되고 서울역 도시락맛집에서 포장도 된다고 하니깐 기차여행갈때 포장해서 맛있게 기차안에서 먹기 좋을거 같아요.",
				"닭도리탕으로 유명한 종로 계림",
				"술안주로도 좋고 점심이나 저녁식사로도 훌륭해요",
				"음식평론가 이용재의 도발적 비평서 ‘냉면의 품격’",
				"음식도 맛있고 서비스도 좋은 대림정",
				"예전 맛 그대로 깊은국물과 진한양념 김치는 언제 먹어도 궁합이 좋습니다.",
				"인테리어부터 메뉴까지 신경쓴 티가나는 양식점",
				"#돈까스_좋아해요? #정식 #등심 #함박 #까스",
				"장충동 족발골목에 있는 평안도 족발 맛집",
				
				"동대문에 유명한 중국집 공룡알 팔보완자맛집",
				"네팔  부부가 운영하는 네팔 음식 전문점",
				"토렴(밥이나 국수 등에 뜨거운 국물을 부었다 따랐다 하여 덥게 하는 것)하는 식당",
				"가족외식 , 아이와 함께라면 , 일상데이트 , 특별한 날엔 , 삼겹살 , 돼지갈비 , 맛집TOP100",
				"최고급 식재료를 사용해 프렌치 & 이탈리안을 요리하는 곳.",
				"보약같은 느낌의 삼계탕 맛집");
		return info;
	}
	
	public List<Resto> restoDB(){
		Resto resto = null;
		List<Resto> restoList = new ArrayList<>();
		for(int i = 0 ; i<placeList().size();i++) {
			resto = new Resto(placeList().get(i), spotList().get(i),pointList().get(i),imgList().get(i),latitudeList().get(i),infoList().get(i));
			restoList.add(resto);
		 }
		return restoList; 
	}
	
	public void insetRestoDb() {
		List<Resto> rList = restoDB();
		for(int i = 0; i < rList.size();i++) {
			restoMapper.insertResto(rList.get(i));
		}
	}
}
