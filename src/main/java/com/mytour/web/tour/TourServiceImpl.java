package com.mytour.web.tour;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mytour.web.mapper.TourMapper;
import com.mytour.web.util.Printer;




@Service
public class TourServiceImpl implements TourSevice {
	@Autowired TourMapper tourMapper;
	@Autowired Printer printer;
	
	@Override
	public Tour findTourByPlace(String place) {
	Tour tour = tourMapper.selectTourByPlace(place);
		return tour;
	}

}
