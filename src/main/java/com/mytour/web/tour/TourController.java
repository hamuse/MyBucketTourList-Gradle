package com.mytour.web.tour;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Consumer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mytour.web.mapper.TourMapper;
import com.mytour.web.proxy.Inventory;
import com.mytour.web.util.Printer;




@RestController

@RequestMapping("/tours")
public class TourController {
	@Autowired TourMapper tourMapper;
	@Autowired Inventory<Tour[]> inventory;
	@Autowired Printer printer;
	@Autowired TourProxy tourProxy;
	@Autowired TourServiceImpl tourService;
	@Autowired Tour tour;
	
	@GetMapping("/create/table")
	public Map<?, ?> createTour() {
		HashMap<String, String> paramMap = new HashMap<String, String>();
		paramMap.put("CREATE_TRAVEL", SQL.CREATE_TRAVEL.toString());
		Consumer<HashMap<String, String>> c = t -> tourMapper.createTour(t);
		c.accept(paramMap);
		paramMap.clear();
		paramMap.put("msg", "SUCCESS");
		return paramMap;
	}
	
	@GetMapping("/insert/dummy")
	public Map<?, ?> insertTour() {
		HashMap<String, String> paramMap = new HashMap<String, String>();
		tourProxy.insertTour();
		paramMap.clear();
    	paramMap.put("msg", "SUCCESS");
		return paramMap;
	}
	
	@GetMapping("/list")
	public Map<?, ?> list() {
		HashMap<String, List<Tour>> map = new HashMap<>();
		map.put("list", tourMapper.tourList(tourProxy));
		System.out.println(map.get("list"));
		return map;
	}
	
	@PostMapping("/tour/details")
	public Map<?,?> detailsList(@RequestBody Tour tour){
		ArrayList<Tour> place = detailsDB(tour);
		HashMap<String, Object> map = new HashMap<>();
		map.put("msg", "SUCCESS");
		map.put("list",place);
		return map;
	}
	@GetMapping("/tour/random")
	public Map<?, ?> randomTour() {
		HashMap<String, Object> map = new HashMap<>();
		map.put("list", tourMapper.selectTourRandom());
		return map;
	}
	@Transactional
	private ArrayList<Tour> detailsDB(Tour tour) {
		List<Tour> l = tour.getPlaceList();
		ArrayList<Tour> place = new ArrayList<>();
		for(Tour s : l) {
			place.add(tourService.findTourByPlace(s.getPlace()));
		}
		return place;
	}
}
