package com.mytour.web.space;

import java.util.List;

import org.springframework.stereotype.Component;

@Component
public interface SpaceService {
	public void saveTourList(List<Space> space);
}
