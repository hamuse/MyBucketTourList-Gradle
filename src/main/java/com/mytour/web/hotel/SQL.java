package com.mytour.web.hotel;

public enum SQL {
	CREATE_HOTEL;
	
	@Override
	public String toString() {
		String result ="";
		switch(this) {
		case CREATE_HOTEL:
			result = "CREATE TABLE HOTEL"
					+ "(PLACE VARCHAR(30) PRIMARY KEY,"
					+ "SPOT VARCHAR(30),"
					+ "POINT VARCHAR(30),"
					+ "IMG VARCHAR(500),"
					+ "LATITUDE VARCHAR(500),"
					+ "INFO VARCHAR(500))"
					+ "default character set utf8 collate UTF8_GENERAL_CI;";
			break;
			
		}
		return result;
	}
}
