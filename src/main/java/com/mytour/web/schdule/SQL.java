package com.mytour.web.schdule;

public enum SQL {
	CREATE_ALLDATA;
	@Override
	public String toString() {
		String result ="";
		switch(this) {
		case CREATE_ALLDATA:
			result = "CREATE TABLE ALLDATA"
					+ "(PLACE VARCHAR(30) PRIMARY KEY,"
					+ "SPOT VARCHAR(30),"
					+ "POINT VARCHAR(30),"
					+ "IMG VARCHAR(700),"
					+ "LATITUDE VARCHAR(500),"
					+ "INFO VARCHAR(500))"
					+ "default character set utf8 collate UTF8_GENERAL_CI;";
			break;
			
		}
		return result;
	}
}
