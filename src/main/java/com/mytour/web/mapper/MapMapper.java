package com.mytour.web.mapper;


import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.mytour.web.map.Corona;
import com.mytour.web.map.Maps;



@Repository
public interface MapMapper {
		
	public void createMap(HashMap<String,String> paramMap);
	public Maps selectMapsByPlace(String place);
	public void insertMap(Maps param);
	public void createCorona(HashMap<String,String> paramMap);
	public void insertCorona(Corona param);
	public List<Corona> selectCoronaList();
	
}
