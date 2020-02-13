package com.mytour.web.mapper;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.mytour.web.hotel.Hotel;


@Repository
public interface HotelMapper {
	public void createHotel(HashMap<String,String> map);
	public void insertHotel(Hotel hotel);
	public List<Hotel> selectHotelList();
}
