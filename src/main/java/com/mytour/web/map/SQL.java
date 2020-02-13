package com.mytour.web.map;

public enum SQL {
		CREATE_MAP , DROP_MAP , SElECT_PLACE, CREATE_CORONA;
		
		@Override
		public String toString() {
			String result = "";
			
			switch(this){
				
				case CREATE_MAP:
					result="CREATE TABLE MAP"
					+"(PLACE VARCHAR(500) PRIMARY KEY,"
					+"LATITUDE VARCHAR(500))"
					+ "default character set utf8 collate UTF8_GENERAL_CI;";
					break;
				case DROP_MAP:
					result="DROP TABLE MAP";
					break;
				case CREATE_CORONA:
					result="CREATE TABLE CORONA"
					+"(PLACE VARCHAR(500) PRIMARY KEY,"
					+"LATITUDE VARCHAR(500))"
					+ "default character set utf8 collate UTF8_GENERAL_CI;";
					break;
							//infection , similar,release,isolation
		/* infectedcount,similar,release,isolation; */
			}
			return result;
			
		}
}
