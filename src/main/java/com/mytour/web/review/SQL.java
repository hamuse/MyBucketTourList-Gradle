package com.mytour.web.review;

public enum SQL {
	CREATE_REVIEW,DROP_REVIEW, TRUNCATE_REVIEW,CREATE_LIKE,CREATE_COMMENT;
	@Override
	public String toString() {
		String result = "";
		switch (this) {


		case CREATE_REVIEW:
			result = "CREATE TABLE IF NOT EXISTS COMMUNITY"
					+ "(ARTSEQ INT(10) PRIMARY KEY AUTO_INCREMENT,"
					+ "UID VARCHAR(20),"
					+ "IMG VARCHAR(500),  "
					+ "TITLE VARCHAR(100),"
					+ "CONTENT VARCHAR(20000),"
					+ "TAG VARCHAR(50),"
					+ "LIKECNT INT(20))"
					+ "default character set utf8 collate UTF8_GENERAL_CI;";
			break;
		case CREATE_LIKE:
			result = "CREATE TABLE IF NOT EXISTS LIKETO(LIKENO INT(10) 	PRIMARY KEY  AUTO_INCREMENT,"
					+ "ARTSEQ INT(10) NOT NULL ,	"
					+ "UID VARCHAR(30) , "
					+ "likecheck VARCHAR(10),"
					+ "FOREIGN KEY (ARTSEQ) REFERENCES COMMUNITY(ARTSEQ) ON DELETE CASCADE,"
					+ "FOREIGN KEY (UID) REFERENCES USER(UID) ON DELETE CASCADE)"
					+ "default character set utf8 collate UTF8_GENERAL_CI;";
			break;
		case CREATE_COMMENT:
			result = "CREATE TABLE IF NOT EXISTS COMMENT"
					+ "(COMMENTNO INT(10) PRIMARY KEY AUTO_INCREMENT,"
					+ "COMMENTS VARCHAR(500) , "
					+ "UID VARCHAR(20),  "
					+ "ARTSEQ INT(10),  "
					+ "BOARDTYPE VARCHAR(50))"
					+ "default character set utf8 collate UTF8_GENERAL_CI;";
			break;

		case DROP_REVIEW:
			result = "DROP TABLE REVIEW";
			break;

		case TRUNCATE_REVIEW:
			result = "TRUNCATE TABLE REVIEW";
			break;
		default:
			break;
		}
		return result;
	}  

}
