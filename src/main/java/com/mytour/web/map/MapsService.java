package com.mytour.web.map;

import java.util.List;

import org.springframework.stereotype.Component;
@Component
public interface MapsService {

	public Maps findMapsByPlace(String place);
}
