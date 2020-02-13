package com.mytour.web.mapper;

import java.util.HashMap;

import org.springframework.stereotype.Repository;

import com.mytour.web.schdule.Schedule;



@Repository
public interface ScheduleMapper {
	
	public void createSchedule(HashMap<String,String> map);
	public void insertSchedule(Schedule schedule);
}
