package com.mytour.web.map;

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

import com.mytour.web.mapper.MapMapper;
import com.mytour.web.util.Printer;




@RestController
@RequestMapping("/maps")
public class MapController {
		@Autowired MapMapper mapMapper;
		@Autowired Printer printer;
		@Autowired MapsServiceImpl mapsService;
		@Autowired MapProxy mapProxy;
		@Autowired CoronaProxy coronaProxy;
		 
		@GetMapping("/map/create")
		public Map<?,?> createMap(){
			HashMap<String,String> paramMap= new HashMap<>();
			paramMap.put("CREATE_MAP", SQL.CREATE_MAP.toString());
			Consumer<HashMap<String,String>> p = r -> mapMapper.createMap(r);
			p.accept(paramMap);
			paramMap.clear();
			paramMap.put("msg", "SUCCESS");
			return paramMap;
		}
		@GetMapping("/corona/create")
		public Map<?,?> createCorona(){
			HashMap<String,String> paramMap= new HashMap<>();
			paramMap.put("CREATE_CORONA", SQL.CREATE_CORONA.toString());
			Consumer<HashMap<String,String>> p = r -> mapMapper.createCorona(r);
			p.accept(paramMap);
			paramMap.clear();
			paramMap.put("msg", "SUCCESS");
			return paramMap;
		}
		
		@PostMapping("/place")
		public Map<?,?> markerlist(@RequestBody  Maps maps ){
			ArrayList<Maps> place = findPlace(maps);
			HashMap<String, Object> map = new HashMap<>();
			map.put("result", "SUCCESS");
			map.put("list", place);
			return map;
		}
		
		@GetMapping("/insert/mapDB")
		public Map<?,?> insertMapDB(){
			HashMap<String, String> paramMap = new HashMap<>();
			mapProxy.insertMapDB();
			paramMap.clear();
	    	paramMap.put("msg", "SUCCESS");
			return paramMap;
		}
		
		@GetMapping("/corona/insert")
		public Map<?,?> insertCoronaDB(){
			HashMap<String, String> paramMap = new HashMap<>();
			coronaProxy.insertCoronaDB();
			paramMap.clear();
	    	paramMap.put("msg", "SUCCESS");
			return paramMap;
		}
		@GetMapping("/corona/list")
		public Map<?, ?> coronaList() {
			printer.accept("coronaList  controller");
			HashMap<String, Object> param = new HashMap<>();
			List<Corona> corona = mapMapper.selectCoronaList();
			ArrayList<Corona> coronallist = new ArrayList<>();
			for (int i = 0; i < corona.size(); i++) {
				System.out.println("corona:" + corona.get(i));
				coronallist.add(corona.get(i));
			}
			param.put("list", coronallist);
			param.put("msg", "SUCCESS");

			return param;
		}
		
		
		@Transactional
		private ArrayList<Maps> findPlace(Maps maps) {
			List<Maps> l = maps.getPlaceList();
			ArrayList<Maps> place = new ArrayList<>();
			for(Maps s : l) {
				System.out.println(s.getPlace());
				place.add(mapsService.findMapsByPlace(s.getPlace()));
			}
			return place;
		}
}
		
		

