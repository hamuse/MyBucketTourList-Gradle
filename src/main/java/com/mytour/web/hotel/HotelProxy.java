package com.mytour.web.hotel;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.mytour.web.mapper.HotelMapper;

import lombok.Data;

@Data
@Component
public class HotelProxy {
	@Autowired HotelMapper hotelMapper;
	
	public List<String> placeList(){
		List<String> place = Arrays.asList("프레이저 플레이스 센트럴",
				"포 포인츠 바이 쉐라톤",
				"베뉴지 호텔 서울",
				"호스텔코리아 창덕궁",
				"명동 멀린 호텔",
				"명동 바이 롯데",
				"그랜드 앰배서더 서울",
				"서울 신라 호텔",
				"써미트 호텔 동대문",
				"호텔 그레이스리 서울",
				"소테츠 호텔즈 더 스프라지르",
				"이태원 에이원호텔",
				"임피리얼 팰리스 부티크 호텔",
				"크라운 관광 호텔",
				"호텔 더 디자이너스",
				"나인트리 프리미어 호텔");
		
		return place;
	}
	public List<String> spotList(){
		List<String> spot = Arrays.asList("서울 중구 통일로 78", 
				"서울 용산구 한강대로 366",
				"서울 종로구 청계천로 117",
				"서울 종로구 돈화문로 85",
				"서울 중구 퇴계로 245	",
				"서울 중구 퇴계로 137",
				"서울 중구 동호로 287",
				"서울 중구 동호로 249",
				"서울 중구 장충단로 198",
				"서울 중구 세종대로12길 12",
				"서울 중구 장충단로 226",
				"서울 용산구 이태원로20길 2-8",
				"서울 용산구 이태원로 221",
				"서울 용산구 녹사평대로 140",
				"서울 용산구 한강대로 305",
				"서울 중구 마른내로 28");
		return spot;
	}
	public List<String> pointList(){
		List<String> point = Arrays.asList("서울역",
				"서울역",
				"종로3가역",
				"종로3가역",
				"충무로역",
				"명동역",
				"동대입구역",
				"동대입구역",
				"동대문역사문화공원역",
				"약수역",
				"동대문역사문화공원역",
				"이태원역",
				"이태원역",
				"이태원역",
				"숙대입구역",
				"을지로3가역");
		return point;
	}
	public List<String> imgList(){
		List<String> img = Arrays.asList("https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile5.uf.tistory.com%2Fimage%2F99EAEF405ABA419F030766",
				"https://mblogthumb-phinf.pstatic.net/20160809_300/sset73_14707072227249XXe6_JPEG/20160807_133304.jpg?type=w800",
				"https://r-cf.bstatic.com/images/hotel/max1280x900/646/64672802.jpg",
				"https://www.hotel119.co.kr:443/data/file/stay/thumb-1ad5184a77657a1e8d4adfdf6b174685_470x360.jpg",
				"https://q-cf.bstatic.com/xdata/images/hotel/square600/231719322.webp?k=33f7f53f7e0f2365d74b79649e8e04bf3aedc82b10ef18dbbe66bbf8c7297e7f&o=",
				"https://r-cf.bstatic.com/images/hotel/max1280x900/614/61415320.jpg",
				"https://q-cf.bstatic.com/images/hotel/max1280x900/103/103555551.jpg",
				"https://hapskorea.com/wp-content/uploads/2019/02/The-Shilla-Hotel-Seoul-Haps-Korea-Magazine.jpg",
				"https://q-cf.bstatic.com/xdata/images/hotel/square600/123280556.webp?k=1f73258178397745ac190a48940967cbe00a490fa45a4eb31d6ac424af78200d&o=",
				"https://r-cf.bstatic.com/xdata/images/hotel/square600/179607694.webp?k=5b29d7b22550ad584dfe6168bc987639acfcc673bf00c3083c012080614bd9c5&o=",
				"https://r-cf.bstatic.com/xdata/images/hotel/square600/151123708.webp?k=876053cba8f644f6cc87d165af14674221c1ea4ca6a035faa860426000a42ff4&o=",
				"https://q-cf.bstatic.com/images/hotel/max1024x768/963/96351440.jpg",
				"https://pix10.agoda.net/hotelImages/168/168890/168890_17040608280052152367.jpg?s=1024x768",
				"https://r-cf.bstatic.com/images/hotel/max1024x768/526/52635529.jpg",
				"https://q-cf.bstatic.com/xdata/images/hotel/square600/90041808.webp?k=69559858a71f9718bc8686ed95257a0265a40738e9c7165203c618ec81b14e0b&o=",
				"https://r-cf.bstatic.com/xdata/images/hotel/square600/198853009.webp?k=28572e066ad0b14c53f452fa2df9596ecb8cc6775d3eb76021ff41a7171bf8b5&o=");
		return img;
	}
	public List<String> latitudeList() {
		List<String> latitude = Arrays.asList("126.969861/37.5625981",
				"126.972763/37.5508409",
				"126.990822/37.5687196",
				"126.990289/37.5761166",
				"126.999040/37.5626203",
				"126.986963/37.5613490",
				"127.002379/37.5601606",
				"127.005932/37.5566106",
				"127.006861/37.5622328",
				"126.976947/37.5615817",
				"127.007721/37.5646924",
				"126.991607/37.5340224",
				"126.998215/37.5352301",
				"126.990793/37.5314275",
				"126.971577/37.5455428",
				"126.990936/37.5642416");
		
		return latitude;
	}
	public List<String> infoList(){
		List<String> info = Arrays.asList("#서대문역과 지하철 서울역에서 도보로 10분 거리 #실내 수영장과 피트니스 시설을 보유  #무료 시내 셔틀을 제공",
				"#지하도로 서울역과 바로 연결  #레스토랑과 피트니스 센터보유 #호텔 전역에서 무료 Wi-Fi를 이용 #구내에 무료 주차장도 완비",
				"#수표교 남동쪽 코너에 위치 #지하철 종로3가역(1, 3, 5호선), 을지로3가역(2, 3호선)은 호텔에서 모두 500m 이내의 거리 #숙소 전역에 무료 Wi-Fi가 완비",
				"#편안한 객실을 보유 #지하철 3호선 안국역,5호선 종로3가역에서 도보로 단 5분 거리 ",
				"#지하철 4호선 충무로역에서 도보로 단 6분 거리 #전 구역에서 Wi-Fi도 제공",
				"#지하철 명동역 9번 출구에서 도보로 가까운 거리 #에어컨과 무료 Wi-Fi가 구비 #레스토랑",
				"#무료 주차장 #스파와 골프 연습장을 제공",
				"#2019년 포브스지에서 선정한 5성급 호텔 #6개의 식음료 매장과 풀 서비스가 스파가 마련 #신라 면세점과 지하철 3호선 동대입구역까지 무료 셔틀이 제공",
				"#동대입구역,동대문역사문화공원역에서 도보로 6분 이내의 거리, #편안한 객실을 제공 #피트니스 센터와 투어 데스크가 마련 #Wi-Fi 무료 이용이 가능",
				"#여러 인기 관광지 근처 #무료 Wi-Fi를 제공",
				"#지하철 2, 4, 5호선 동대문역사문화공원역 9번 출구에서 도보로 1분 거리 #전 구역에 무료 Wi-Fi를 제공",
				"#국립중앙박물관에서 1.5km 거리 #24시간 프런트 데스크와 수하물 보관소를 보유 #아이파크몰에서 2.4km 거리",
				"#세련된 디자인과 다양한 편의 시설 #무료 Wi-Fi가 완비 #이태원역에서 도보로 3분 거리",
				"#레스토랑, 펍, 클럽, 상점이 즐비 #이태원 거리에서 도보로 3분 거리 #무료 Wi-Fi를 제공",
				"#지하철 4호선 숙대입구역 10번 출구에 위치 #서울역에서 750m 거리 #24시간 프론트 데스크를 운영 #구내 무료 주차장을 제공",
				"#지하철 2호선 ,3호선 을지로3가역 에서 250m 거리 위치 #뷔페 레스토랑, 바, 피트니스 센터를 보유 #명동 번화가는 500m 거리");
		return info;
	}
	
	public List<Hotel> hotelDB(){
		Hotel hotel = null;
		List<Hotel> hotelList = new ArrayList<>();
		for(int i = 0 ; i<placeList().size();i++) {
			hotel = new Hotel(placeList().get(i),spotList().get(i),pointList().get(i),imgList().get(i),latitudeList().get(i),infoList().get(i));
			hotelList.add(hotel);
		 }
		return hotelList; 
	}
	
	public void insetHotelDb() {
		List<Hotel> hList = hotelDB();
		for(int i = 0; i < hList.size();i++) {
			hotelMapper.insertHotel(hList.get(i));
		}
	}
}
