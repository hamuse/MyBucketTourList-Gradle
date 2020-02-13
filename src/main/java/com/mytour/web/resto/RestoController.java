package com.mytour.web.resto;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Consumer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mytour.web.mapper.RestoMapper;
import com.mytour.web.util.Printer;




@RestController
@RequestMapping("/restos")
public class RestoController {
	@Autowired RestoMapper restoMapper;
	@Autowired Printer printer;
	@Autowired RestoProxy restoProxy;
	
	@GetMapping("/resto/create")
	public Map<?,?> restoCreate(){
		HashMap<String, String> map = new HashMap<>();
		map.put("CREATE_RESTO", SQL.CREATE_RESTO.toString());
		Consumer<HashMap<String,String>> p = t -> restoMapper.createResto(map);
		p.accept(map);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;
	}
	
	@GetMapping("/resto/insert")
	public Map<?,?> insertRestoDB(){
		HashMap<String, String> param = new HashMap<>();
		restoProxy.insetRestoDb();
		param.clear();
		param.put("msg","SUCCESS");
		return param;
	}
	
	@GetMapping("/resto/list")
	public Map<?,?> restoList(){
		HashMap<String, Object> param = new HashMap<>();
		List<Resto> resto = restoMapper.selectRestoList();
		ArrayList<Resto> restolist = new ArrayList<>();
		for (int i = 0; i < resto.size(); i++) {
			System.out.println("hotel:" + resto.get(i));
			restolist.add(resto.get(i));
		}
		param.put("list",restolist);
		param.put("msg", "SUCCESS");
		return param;
	}
	
}
