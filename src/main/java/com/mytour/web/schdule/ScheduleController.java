package com.mytour.web.schdule;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Consumer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mytour.web.mapper.ScheduleMapper;
import com.mytour.web.util.Printer;


@RestController
@RequestMapping("/alldatas")
public class ScheduleController {
	@Autowired
	ScheduleMapper scheduleMapper;
	@Autowired
	ScheduleProxy scheduleProxy;
	@Autowired
    Printer printer;
	@Autowired Scheduler  schedulesProxy;

	@GetMapping("/schedule/create")
	public Map<?, ?> createHotel() {
		HashMap<String, String> map = new HashMap<>();
		map.put("CREATE_ALLDATA", SQL.CREATE_ALLDATA.toString());
		Consumer<HashMap<String, String>> p = r -> scheduleMapper.createSchedule(map);
		p.accept(map);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;
	}

	@GetMapping("/alldata/insert")
	public Map<?,?> insertHotelDB() {
		HashMap<String, String> param = new HashMap<>();
		scheduleProxy.insetSchedules();
		param.clear();
		param.put("msg", "SUCCESS");
		return param;
	}
	 @PostMapping("/mapd/alldatasTour") 
	 public Map<?,?> schedulesTour(@RequestBody  Schedule schedule){
		 List<Schedule> l = schedule.getScheduleList();
		 ArrayList<Schedule> mytourlist = new ArrayList<>();
		 HashMap<String, Object> mytourData = new HashMap<>();
		 for(Schedule s : l) {
			 mytourData.put(s.getPlace(), s.getLatitude());
		 }
		 HashMap<String, Object> param = new HashMap<>();
		 param.put("msg","SUCCESE");
		 param.put("distance", schedulesProxy.destination(mytourData));
		 return param;
	 }

}
