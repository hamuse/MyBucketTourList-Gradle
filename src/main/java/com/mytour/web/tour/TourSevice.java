package com.mytour.web.tour;

import org.springframework.stereotype.Component;

@Component
public interface TourSevice {
	public Tour findTourByPlace(String place);
}
