package com.mytour.web.space;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Consumer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mytour.web.mapper.SpaceMapper;
import com.mytour.web.util.Printer;




@RestController
@RequestMapping("/spaces")
public class SpaceController {
	@Autowired
	SpaceMapper spaceMapper;
	@Autowired
	Printer printer;
	@Autowired
	SpaceServiceImpl spaceService;
	@Autowired Space space;
	
	@GetMapping("/mylist/create")
	public Map<?, ?> createMyList() {
		HashMap<String, String> map = new HashMap<>();
		map.put("CREATE_SPACE", SQL.CREATE_SPACE.toString());
		Consumer<HashMap<String, String>> p = t -> spaceMapper.createSpace(map);
		p.accept(map);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;
	}

	@PostMapping("/mylist/save/{uid}")
	public Map<?,?> saveMyList(@PathVariable String uid, @RequestBody Space space) {
		ArrayList<Space> mytourList = saveTourList(uid, space); 
		HashMap<String, Object> map = new HashMap<>();
		map.put("msg", "SUCCESS");
		return map;
		
	}
	
	@GetMapping("/mytour/list/{uid}")
	public Map<?,?> myTourList(@PathVariable String uid){
		space.setUserid(uid);
		HashMap<String,Object> map = new HashMap<>(); 
		map.clear();
		map.put("list", spaceMapper.myTourList(space));
		return map;
	}
	
	@GetMapping("/mydetail/list/{findnum}")
	public Map<?,?> myDetailList(@PathVariable String findnum){
		HashMap<String,Object> map = new HashMap<>(); 
		space.setFindnum(findnum);
		map.put("msg", "통신 성공");
		map.put("dlist",spaceMapper.myDetailList(findnum));
		return map;
	}
	
	@DeleteMapping("/mytour/delete/{findnum}")
	public String removeTourList(@PathVariable String findnum) {
	Consumer<String> t = s-> spaceMapper.deleteMytourList(findnum);
	t.accept(findnum);
	return "success";
	}
	
	
	@Transactional
	private ArrayList<Space> saveTourList(String uid, Space space) {
		List<Space> l = space.getMytourList();
		 String finnumvalue= "";
		  if(spaceMapper.maxseq() != null) {
			  finnumvalue = uid+String.valueOf(Integer.parseInt(spaceMapper.maxseq())+1);
		  }else {
			  finnumvalue = uid+String.valueOf(1);
		  }
		 
		 ArrayList<Space> mytourList = new ArrayList<>();
		 for(Space s : l) {
			Space sp = new Space();
			sp.setUserid(uid);
			sp.setFindnum(finnumvalue);
			sp.setPlace(s.getPlace());
			sp.setSpot(s.getSpot());
			sp.setPoint(s.getPoint());
			sp.setImg(s.getImg());
			sp.setLatitude(s.getLatitude());
			sp.setInfo(s.getInfo());
			sp.setDistance(s.getDistance());
			mytourList.add(sp); 
		
		 }
	     spaceService.saveTourList(mytourList);
		 return mytourList;
	}
	

}
