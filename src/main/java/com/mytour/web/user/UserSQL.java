package com.mytour.web.user;

public enum UserSQL {
	CREATE_USER,DROP_USER,TRUNCATE_USER,UPLOAD_PATH;
	@Override
	public String toString() {
		String result = "";
		
		switch (this) {
		case CREATE_USER:
			result = "CREATE TABLE USER"
					+ "(uid VARCHAR(30) PRIMARY KEY,"
					+ "pwd VARCHAR(30) ,"
					+ "uname VARCHAR(30) ,"
					+ "nickname VARCHAR(30) ,"
					+ "gender VARCHAR(30) ,"
					+ "birth VARCHAR(60) ,"
					+ "tel VARCHAR(30))"
					+ "default character set utf8 collate UTF8_GENERAL_CI;";
			break;
		case DROP_USER :
			result = "drop table USER";
			break;
		case TRUNCATE_USER :
			result = "TRUNCATE TABLE USER";
			break;
		case UPLOAD_PATH :
			result = "C:\\Users\\user\\hamusePRJ\\mytourPRJ\\src\\main\\webapp\\resources\\wegoimg\\";
			break;	
		default:
			break;
		}
		return result;
	}
	
	
	
}
