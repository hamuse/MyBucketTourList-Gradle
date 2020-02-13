package com.mytour.web.sharing;

public enum Path {
	UPLOAD_PATH;
	@Override
	public String toString() {
		String result = "";
		switch(this){
		case UPLOAD_PATH :
			result = "C:\\Users\\user\\hamusePRJ\\mytourPRJ\\src\\main\\webapp\\resources\\wegoimg";
			break;
		}
		return result;
	}
}
