package com.mytour.web.user;

import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.function.BiFunction;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.mytour.web.mapper.UserMapper;




@Component
public class DumProxy {
	@Autowired UserMapper usermapper;
	
	public String makeUserid() {
      List<String> uidText = Arrays.asList("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "n", "m", "o",
                 "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9",
                 "0");
      Collections.shuffle(uidText);
      String uid = uidText.get(0)+uidText.get(1)+uidText.get(2)+uidText.get(3)+uidText.get(4)+uidText.get(5);
      return uid;
	}
	public String makeUserpwd() {
		List<String> pwdText = Arrays.asList("1", "2", "3", "4", "5", "6", "7", "8", "9",
                "0");
     Collections.shuffle(pwdText);
     String pwd = pwdText.get(0)+pwdText.get(1)+pwdText.get(2)+pwdText.get(3)+pwdText.get(4);
     return pwd;	
	}
	public String makeUsername() {
		 List<String> fname = Arrays.asList("김", "이", "박", "최", "정", "강", "조", "윤", "장", "임", "한", "오", "서", "신", "권", "황", "안",
			        "송", "류", "전", "홍", "고", "문", "양", "손", "배", "조", "백", "허", "유", "남", "심", "노", "정", "하", "곽", "성", "차", "주",
			        "우", "구", "신", "임", "나", "전", "민", "유", "진", "지", "엄", "채", "원", "천", "방", "공", "강", "현", "함", "변", "염", "양",
			        "변", "여", "추", "노", "도", "소", "신", "석", "선", "설", "마", "길", "주", "연", "방", "위", "표", "명", "기", "반", "왕", "금",
			        "옥", "육", "인", "맹", "제", "모", "장", "남", "탁", "국", "여", "진", "어", "은", "편", "구", "용");
			    List<String> name = Arrays.asList("가", "강", "건", "경", "고", "관", "광", "구", "규", "근", "기", "길", "나", "남", "노", "누", "다",
			        "단", "달", "담", "대", "덕", "도", "동", "두", "라", "래", "로", "루", "리", "마", "만", "명", "무", "문", "미", "민", "바", "박",
			        "백", "범", "별", "병", "보", "빛", "사", "산", "상", "새", "서", "석", "선", "설", "섭", "성", "세", "소", "솔", "수", "숙", "순",
			        "숭", "슬", "승", "시", "신", "아", "안", "애", "엄", "여", "연", "영", "예", "오", "옥", "완", "요", "용", "우", "원", "월", "위",
			        "유", "윤", "율", "으", "은", "의", "이", "익", "인", "일", "잎", "자", "잔", "장", "재", "전", "정", "제", "조", "종", "주", "준",
			        "중", "지", "진", "찬", "창", "채", "천", "철", "초", "춘", "충", "치", "탐", "태", "택", "판", "하", "한", "해", "혁", "현", "형",
			        "혜", "호", "홍", "화", "환", "회", "효", "훈", "휘", "희", "운", "모", "배", "부", "림", "봉", "혼", "황", "량", "린", "을", "비",
			        "솜", "공", "면", "탁", "온", "디", "항", "후", "려", "균", "묵", "송", "욱", "휴", "언", "령", "섬", "들", "견", "추", "걸", "삼",
			        "열", "웅", "분", "변", "양", "출", "타", "흥", "겸", "곤", "번", "식", "란", "더", "손", "술", "훔", "반", "빈", "실", "직", "흠",
			        "흔", "악", "람", "뜸", "권", "복", "심", "헌", "엽", "학", "개", "롱", "평", "늘", "늬", "랑", "얀", "향", "울", "련");
			    Collections.shuffle(fname);
			    Collections.shuffle(name);
			    String fullname = fname.get(0) + name.get(0) + name.get(1);
			    return fullname;
	 }
	public String makeNickname() {
		 List<String> fnick = Arrays.asList("김", "이", "박", "최", "정", "강", "조", "윤", "장", "임", "한", "오", "서", "신", "권", "황", "안",
			        "송", "류", "전", "홍", "고", "문", "양", "손", "배", "조", "백", "허", "유", "남", "심", "노", "정", "하", "곽", "성", "차", "주",
			        "우", "구", "신", "임", "나", "전", "민", "유", "진", "지", "엄", "채", "원", "천", "방", "공", "강", "현", "함", "변", "염", "양",
			        "변", "여", "추", "노", "도", "소", "신", "석", "선", "설", "마", "길", "주", "연", "방", "위", "표", "명", "기", "반", "왕", "금",
			        "옥", "육", "인", "맹", "제", "모", "장", "남", "탁", "국", "여", "진", "어", "은", "편", "구", "용");
			    List<String> nick = Arrays.asList("가", "강", "건", "경", "고", "관", "광", "구", "규", "근", "기", "길", "나", "남", "노", "누", "다",
			        "단", "달", "담", "대", "덕", "도", "동", "두", "라", "래", "로", "루", "리", "마", "만", "명", "무", "문", "미", "민", "바", "박",
			        "백", "범", "별", "병", "보", "빛", "사", "산", "상", "새", "서", "석", "선", "설", "섭", "성", "세", "소", "솔", "수", "숙", "순",
			        "숭", "슬", "승", "시", "신", "아", "안", "애", "엄", "여", "연", "영", "예", "오", "옥", "완", "요", "용", "우", "원", "월", "위",
			        "유", "윤", "율", "으", "은", "의", "이", "익", "인", "일", "잎", "자", "잔", "장", "재", "전", "정", "제", "조", "종", "주", "준",
			        "중", "지", "진", "찬", "창", "채", "천", "철", "초", "춘", "충", "치", "탐", "태", "택", "판", "하", "한", "해", "혁", "현", "형",
			        "혜", "호", "홍", "화", "환", "회", "효", "훈", "휘", "희", "운", "모", "배", "부", "림", "봉", "혼", "황", "량", "린", "을", "비",
			        "솜", "공", "면", "탁", "온", "디", "항", "후", "려", "균", "묵", "송", "욱", "휴", "언", "령", "섬", "들", "견", "추", "걸", "삼",
			        "열", "웅", "분", "변", "양", "출", "타", "흥", "겸", "곤", "번", "식", "란", "더", "손", "술", "훔", "반", "빈", "실", "직", "흠",
			        "흔", "악", "람", "뜸", "권", "복", "심", "헌", "엽", "학", "개", "롱", "평", "늘", "늬", "랑", "얀", "향", "울", "련");
			    Collections.shuffle(fnick);
			    Collections.shuffle(nick);
			    String fullnick = fnick.get(0) + nick.get(0) + nick.get(1);
			    return fullnick;
	 }
    public String makeGender() {
        List<String> genderText = Arrays.asList("M","F");
        Collections.shuffle(genderText);
        String gender = genderText.get(0);
        return gender;
    }
	public String makeBirthday() {
        String birthday = "";
        int a = 1970,b = 2000;
       BiFunction<Integer,Integer,Integer> f = (t,u)->(int)(Math.random()*(u-t))+t;
       int year = f.apply(a, b);
           List<String> month = Arrays.asList("01","02","03","04","05","06","07","08","09","10","11","12");
           Collections.shuffle(month);
           String selectmonth = month.get(0);
           List<String> day =  Arrays.asList("01","02","03","04","05","06","07","08","09","10","11","12","13","14","15",
        		   "16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31");
           Collections.shuffle(day);
           String selectday = day.get(0);
           birthday= String.valueOf(year)+"-"+selectmonth+"-"+selectday;
          return birthday;
       }
	public String makeTelephone() {
        int a = 1111,b = 9999;
       BiFunction<Integer,Integer,Integer> f = (t,u)->(int)(Math.random()*(u-t))+t;
       int pre = f.apply(a,b);
       int af= f.apply(a,b);
       String tel = "010"+String.valueOf(pre)+String.valueOf(af);
           return tel;
    }
	public String makePetType() {
        List<String> pattypes = Arrays.asList("고양이", "강아지", "새", "고슴도치", "뱀", "페릿", "햄스터");
           Collections.shuffle(pattypes);
           String pattype = pattypes.get(0);
        return pattype;
    }
	public User makeUser(){
		return new User(makeUserid(),makeUserpwd(),makeUsername(),makeNickname(),makeGender(),makeBirthday(),makeTelephone(),makePetType());
	}
	@Transactional
	public void insertUsers() {
		for(int i=0;i< 20;i++) {
			usermapper.insertUser(makeUser());
		}
	}
	public void truncateUsers() {
		HashMap<String, String> map = new HashMap<>();
		map.put("TRUNCATE_USER", UserSQL.TRUNCATE_USER.toString());
		usermapper.truncateUser(map);
	}
}
