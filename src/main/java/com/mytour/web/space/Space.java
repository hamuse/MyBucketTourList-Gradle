package com.mytour.web.space;

import java.util.List;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Component
@Lazy
@AllArgsConstructor
@NoArgsConstructor
public class Space {
	private String listseq,userid,savedate,findnum,place,spot,point,img,latitude,info,distance;
	private List<Space> mytourList;
	
	public Space(String userid,String place,String spot,String point,String img,String latitude,String info,String distance,String findnum) {
		this.userid =userid ;
		this.place = place;
		this.spot = spot;
		this.point = point;
		this.img = img;
		this.latitude = latitude;
		this.info =info;
		this.distance = distance;
		this.findnum = findnum;
	}
}
