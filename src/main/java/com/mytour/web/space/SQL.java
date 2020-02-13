package com.mytour.web.space;

public enum SQL {
	CREATE_SPACE;
	
	
	@Override
	public String toString() {
		String result ="";
		switch(this) {
		case CREATE_SPACE:
			result = "CREATE TABLE SPACE"
					+ "(LISTSEQ INT(10) PRIMARY KEY AUTO_INCREMENT,"
					+ "USERID VARCHAR(30),"
					+ "SAVEDATE TIMESTAMP NOT NULL DEFAULT NOW(),"
					+ "PLACE VARCHAR(30),"
					+ "SPOT VARCHAR(30),"
					+ "POINT VARCHAR(30),"
					+ "IMG VARCHAR(700),"
					+ "LATITUDE VARCHAR(700),"
					+ "INFO VARCHAR(700),"
					+ "DISTANCE VARCHAR(30),"
					+ "FINDNUM VARCHAR(500))"
					+ "default character set utf8 collate UTF8_GENERAL_CI;";
			break;
			
		}
		return result;
	}
}
