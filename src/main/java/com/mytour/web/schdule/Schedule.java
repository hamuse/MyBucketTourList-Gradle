package com.mytour.web.schdule;

import java.util.List;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Lazy
@Component
public class Schedule {
	private int scheduleSeq;
	private String place,spot,point,img,latitude,info;
	private List<Schedule> scheduleList;
	
	public Schedule(String place,String spot,String point,
			String img,String latitude,String info) {
		this.place = place;
		this.spot = spot;
		this.point = point;
		this.img = img;
		this.latitude = latitude;
		this.info = info;
	}
}
