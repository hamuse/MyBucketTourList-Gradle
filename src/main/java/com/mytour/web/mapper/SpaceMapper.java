package com.mytour.web.mapper;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.mytour.web.space.Space;


@Repository
public interface SpaceMapper {
	public void createSpace(HashMap<String,String> map);
	public void insertSaveList(Space param);
	public List<Space> myTourList(Space space);
	public String maxseq ();
	public List<Space> myDetailList(String findnum);
	public void deleteMytourList(String findnum);
}
