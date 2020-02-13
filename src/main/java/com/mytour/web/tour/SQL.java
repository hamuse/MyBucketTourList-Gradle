package com.mytour.web.tour;

public enum SQL {
	CREATE_TRAVEL, DROP_TRAVEL, TRUNCATE_TRAVEL, INSERT_TRAVEL;
	
	@Override
	public String toString() {
		String result = "";
		switch (this) {

		case CREATE_TRAVEL:
			result = "CREATE TABLE TOUR"
			+ "(PLACE VARCHAR(30) PRIMARY KEY,"
			+ "SPOT VARCHAR(30),"
			+ "POINT VARCHAR(30),"
			+ "IMG VARCHAR(500),"
			+ "LATITUDE VARCHAR(500),"
			+ "INFO VARCHAR(500))"
			+ "default character set utf8 collate UTF8_GENERAL_CI;";
			break;
		
		case DROP_TRAVEL:	
			result = "drop table TOUR";
			break;

		case TRUNCATE_TRAVEL:
			result = "TRUNCATE TABLE TOUR";
			break;
		
		}
		
		return result;
	}  

}