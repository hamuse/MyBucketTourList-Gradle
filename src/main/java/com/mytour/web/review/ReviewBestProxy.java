package com.mytour.web.review;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.mytour.web.mapper.ReviewMapper;

import lombok.Data;

@Data
@Component
public class ReviewBestProxy {
	@Autowired ReviewMapper reviewMapper;
	public HashMap<String,Object> userage(String uid) {		
		Date date = new Date();
		int ages = Integer.parseInt
				(String.valueOf(Integer.parseInt(new SimpleDateFormat("yyyy").format(date))
						-Integer.parseInt(reviewMapper.selectbyId(uid).getBirth().split("-")[0])).substring(0,1)+0);
		HashMap<String,Object> map= new HashMap<>();
		map.put("ages", ages);
		map.put("endages", ages+10);
		map.put("gender", reviewMapper.selectbyId(uid).getGender());
		
		return map;
	}
}
