package com.mytour.web.tour;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.mytour.web.mapper.TourMapper;
import com.mytour.web.proxy.Box;

import lombok.Data;

@Data
@Component
public class TourProxy {
	@Autowired TourMapper tourMapper;
	@Autowired Tour tour;
	@Autowired Box<String> box;
	@Autowired Trunk<String> trunk;

	public List<String> placeList() {
		List<String> place = Arrays.asList("한국의집",
				"블루스퀘어",
				"숭례문(남대문)",
				"N서울타워",
				"명동대성당",
				"서울숲",
				"국립극장",
				"전쟁기념관",
				"종묘",
				"탑골공원",
				"창덕궁",
				"경복궁",
				"청계천",
				"경리단길",
				"매봉산 팔각정",
				"효창공원",
				"백범김구기념관",
				"광장시장");
		
		return place;
	}
	
	public List<String> spotList() {
		List<String> spot = Arrays.asList("서울시 중구 퇴계로 36길 10",
				"서울특별시 용산구 한남동 이태원로 294",
				"서울특별시 중구 남대문로4가 세종대로 40",
				"서울특별시 용산구 용산2가동 남산공원길 105",
				"서울특별시 중구 저동1가 명동길 74",
				"서울특별시 성동구 성수동1가 뚝섬로 273",
				"서울특별시 중구 장충동 장충단로 59",
				"서울특별시 용산구 남영동 이태원로 29",
				"서울특별시 종로구 훈정동 종로 157",
				"서울 종로구 종로 99",
				
				"서울특별시 종로구 와룡동 율곡로 99",
				"서울특별시 종로구 세종로 사직로 161",
				"서울 종로구 서린동 148",
				"서울특별시 용산구 이태원동 210-65",
				"서울특별시 성동구 옥수동 490-5",
				"서울특별시 용산구 효창동 효창원로 177-18",
				"서울특별시 용산구 효창동 임정로 26",
				"서울특별시 종로구 종로4가 창경궁로 88");
		return spot;
	}
	public List<String> pointList(){
		List<String> point = Arrays.asList("충무로역",
				"이태원역",
				"서울역",
				"명동역",
				"명동역",
				"한양대역",
				"명동역",
				"용산역",
				"종로3가역",
				"종로3가역",
				"종로3가역",
				"종로3가역",
				"동대입구역",
				"이태원역",
				"옥수역",
				"효창공원역",
				"효창공원역",
				"종로5가역");
		return point;
	}
	public List<String> imgList() {
		List<String> img = Arrays.asList("https://www.chf.or.kr/igm/im4/sub2_img.jpg",
				"https://dimg.donga.com/wps/NEWS/IMAGE/2017/07/27/85544609.1.jpg",
				"https://i.pinimg.com/originals/4a/6a/85/4a6a858101de4f74e3c8100575a76364.jpg",
				"https://blog.hmgjournal.com/images_n/contents/171013_N1.png",
				"https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Myeongdongchurch.jpg/270px-Myeongdongchurch.jpg",
				"https://lh5.googleusercontent.com/p/AF1QipMzqN8rfV78KNioIyiJxaPPJ9HGl1NEDul-8fDw=w592-h440-n-k-no",
				"https://www.ntok.go.kr/images/kr/useinfo/bg_info_haeoreum_02.png",
				"https://lh5.googleusercontent.com/p/AF1QipMOy0Dox0O09hOig08Dnq3FAAH8-fXnd2NU9z1K=w592-h440-n-k-no",
				"https://www.korea.kr/newsWeb/resources/attaches/2019.08/08/noname01.jpg",
				"https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F1729EA0B4BA596E67B",
				"https://upload.wikimedia.org/wikipedia/commons/c/cb/Changdeokgung-Injeongjeon.jpg",
				"https://post-phinf.pstatic.net/MjAxODA4MjJfMTY1/MDAxNTM0OTIyMTc0NzEy.J0aCknD1DgGaD5TX3e-7Bvhn8hQUkjzSYaGdxY3wkUUg.BtGdGzY9wmCdI92D47jGoWrFpH-D81h3BQQ7LirWmvQg.JPEG/%EA%B2%BD%EB%B3%B5%EA%B6%81_%EC%95%BC%EA%B2%BD%ED%88%AC%EC%96%B4_%285%29.jpg?type=w1200",
				"https://upload.wikimedia.org/wikipedia/commons/b/b8/Seoul_Cheonggyecheon_night.jpg",
				"https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile28.uf.tistory.com%2Fimage%2F222532425846397114099E",
				"https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F2241A94954815FBC19",
				"http://www.tripview.co.kr/wp-content/uploads/2016/03/009-20160328-131735.jpg",
				"https://upload.wikimedia.org/wikipedia/commons/1/1e/Baekbeom_ginyeomgwan.JPG",
				"https://img-wishbeen.akamaized.net/post/1440739883401_b4aeb750cb51b8401.jpg");
		return img;
	}
	public List<String> latitudeList() {
		List<String> latitude = Arrays.asList("126.994603/37.5601875",
				"127.002627/37.5406902",
				"126.975317/37.5599595",
				"126.988923/37.5492850",
				"126.986827/37.5632772",
				"127.040535/37.5451436",
				"127.000025/37.5528716",
				"126.977023/37.5362457",
				"126.994840/37.5731167",
				"126.988331/37.5711790",
				"126.991295/37.5827570",
				"126.976952/37.5806736",
				"126.978687/37.5692675",
				"126.992365/37.5399870",
				"127.019736/37.5412834",
				"126.963237/37.5455404",
				"126.959096/37.5445659",
				"126.998689/37.5702697");
		
		return latitude;
	}
	public List<String> infoList() {
		List<String> info = Arrays.asList("한국의집은 한국의 전통생활과 문화를 소개할 목적으로 건립, 운영중이며 한국의 전통가옥과 궁중음식, 전통문화상품, 전통공연, 전통혼례 등 한국의 아름다움을 한곳에서 즐길 수 있는 복합문화공간.",
				"서울특별시의 공연예술 극장",
				"국보1호 숭례문(남대문)",
				"서울의 랜드마크인 N서울타워와 N서울타워가 자리한 남산",
				"1977년 11월 22일 대한민국의 사적 제258호로 지정되었다.",
				"예쁜 꽃들과 많는 종류의 식물, 사슴 등 동물들도 많이 볼 수 있는곳",
				"국립중앙극장은 민족예술의 발전과 연극문화의 향상에 관한 사무를 관장하는 대한민국 문화체육관광부의 소속기관",
				"전쟁기념관은 대한민국 서울특별시 용산구 이태원로 29 에 위치한 기념관으로, 대한민국을 지켜온 항쟁과 전쟁에 대한 기록을 모으고 보존하는 곳이다. 전쟁에 대한 교훈을 통해 전쟁을 예방하고, 평화적 통일을 목적으로 한다. 1990년 9월 28일에 기공식이 있었다",
				"종묘는 조선 왕조의 역대 국왕들과 왕후들의 신주를 모시고 제례를 봉행하는 유교 사당이다. 서울특별시 종로구 훈정동 1번지에 위치해 있으며, 사적 제125호로 지정되어 있다",
				"탑골공원은 대한민국 서울특별시 종로구 종로2가에 있는 공원이다.",	
				"창덕궁은 대한민국 서울특별시에 있는 조선 시대 궁궐로 동쪽으로 창경궁과 맞닿아 있다. 경복궁의 동쪽에 있어서 조선 시대에는 창경궁과 더불어 동궐이라 불렀다",
				"경복궁은 대한민국 서울 세종로에 있는 조선 왕조의 법궁이다. 근정전을 중심으로 하고 있다. 1395년에 창건하였다.",
				"청계천은 대한민국 서울특별시 내부에 있는 지방하천으로, 한강 수계에 속하며 중랑천의 지류이다.",
				"이태원 경리단길은 서울시 용산구 이태원2동에 위치한 서울의 명소로, 육군중앙경리단을 시작으로 하얏트 호텔 입구까지 이어진 오르막길과 그옆으로 뻗어나간 작은 골목길들을 포함해 녹사평역에서 경리단까지의 내리막길을 통칭하는 길",
				"서울의 유명한 조망 명소 중 하나, 매봉산 팔각정.",
				"효창 공원(孝昌公園)은 원래 5살 어린 나이에 죽은 정조의 첫째 아들 문효세자와 몇달 후 죽은 그의 어머니 의빈 성씨의 무덤으로 효창원(孝昌園)이었으나, 두 무덤은 서삼릉으로 강제 이장 당하고, 이름도 효창공원이 되었다.",
				"백범김구기념관은 대한민국의 독립운동가인 백범 김구를 기념하기 위해서 대한민국 서울특별시 용산구 효창동 255번지에 건립된 박물관이다.",
				"광장시장은 서울특별시 종로구 예지동에 위치한 시장이다. 100여년의 역사를 지닌 대한민국 최초의 상설시장이다");
		
		return info;
	}
	
	public List<Tour> makeTour() {
		Tour tour= null;
		List<Tour> tourlist = new ArrayList<>();
		for(int i = 0; i<placeList().size(); i++) {
			tour = new Tour(placeList().get(i), spotList().get(i),pointList().get(i),imgList().get(i),latitudeList().get(i), infoList().get(i));
			tourlist.add(tour);
		}
		return tourlist;
	}
	
	
	@Transactional
	public void insertTour() {
		List<Tour> tourList = makeTour();
		for(int i = 0; i < tourList.size(); i++) {
			tourMapper.insertTour(tourList.get(i));
		}
	}

}
