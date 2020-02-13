package com.mytour.web.hotel;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Consumer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mytour.web.mapper.HotelMapper;
import com.mytour.web.util.Printer;




@RestController
@RequestMapping("/hotels")
public class HotelController {
	@Autowired
	HotelMapper hotelMapper;
	@Autowired
	Printer printer;
	@Autowired
	HotelProxy hotelProxy;

	@GetMapping("/hotel/create")
	public Map<?, ?> createHotel() {
		HashMap<String, String> map = new HashMap<>();
		map.put("CREATE_HOTEL", SQL.CREATE_HOTEL.toString());
		Consumer<HashMap<String, String>> p = r -> hotelMapper.createHotel(map);
		p.accept(map);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;
	}

	@GetMapping("/hotel/insert")
	public Map<?, ?> insertHotelDB() {
		HashMap<String, String> param = new HashMap<>();
		hotelProxy.insetHotelDb();
		param.clear();
		param.put("msg", "SUCCESS");
		return param;
	}

	@GetMapping("/hotel/list")
	public Map<?, ?> hotelList() {
		HashMap<String, Object> param = new HashMap<>();
		List<Hotel> hotel = hotelMapper.selectHotelList();
		ArrayList<Hotel> hotellist = new ArrayList<>();
		for (int i = 0; i < hotel.size(); i++) {
			System.out.println("hotel:" + hotel.get(i));
			hotellist.add(hotel.get(i));
		}
		param.put("list", hotellist);
		param.put("msg", "SUCCESS");
		return param;
	}

}
