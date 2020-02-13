package com.mytour.web.mapper;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.mytour.web.resto.Resto;



@Repository
public interface RestoMapper {
	public void createResto(HashMap<String,String> map);
	public void insertResto(Resto param);
	public List<Resto> selectRestoList();
}
