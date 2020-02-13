package com.mytour.web.schdule;

import java.util.HashMap;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data
@Component
public class Scheduler {
	public final static double AVERAGE_RADIUS_OF_EARTH_KM = 6371;
	
	public Object destination(HashMap<String, Object> pointData) {
		HashMap<String, Object> resultData = new HashMap<>();
		for (String key : pointData.keySet()) {
			String value = pointData.get(key).toString();
			double premier = 0;
			double deux = 0;
			double trois = 0;
			double quatre = 0;
			String hotellngth = null;
			for (String findKey : pointData.keySet()) {
				if (findKey.substring(findKey.length() - 1).equals("H")) {
					hotellngth = pointData.get(findKey).toString();
					break;
				}
			}
			String lngth = value;
			double troisax = 0;
			double troisay = 0;
			double deuxx = 0;
			double deuxy = 0;
			String[] arr = hotellngth.split("/");
			String[] arr1 = lngth.split("/");
			troisax = Double.parseDouble(arr1[1]);
			troisay = Double.parseDouble(arr1[0]);
			deuxx = Double.parseDouble(arr[1]);
			deuxy = Double.parseDouble(arr[0]);
			premier = deuxy;
			deux  = deuxx;
			trois = troisay;
			quatre = troisax;
			if (!key.substring(key.length() - 1).equals("H")) {
				resultData.put(key, String.valueOf(calculateDistanceInKilometer(premier, deux , trois, quatre)));		
			}
		}
		return resultData;
	}
	public int calculateDistanceInKilometer(double premier, double deux , double trois, double quatre) {
		double latDistance = Math.toRadians(premier - trois);
		double lngDistance = Math.toRadians(deux  - quatre);
		double a = Math.sin(latDistance / 2) * Math.sin(latDistance / 2) + Math.cos(Math.toRadians(premier))
				* Math.cos(Math.toRadians(trois)) * Math.sin(lngDistance / 2) * Math.sin(lngDistance / 2);
		double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
		return (int) (Math.round(AVERAGE_RADIUS_OF_EARTH_KM * c));
	}
}
