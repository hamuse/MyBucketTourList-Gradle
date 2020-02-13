package com.mytour.web.review;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.mytour.web.mapper.ReviewMapper;

import lombok.Data;
@Data
@Component
public class ReviewProxy {
	
	@Autowired ReviewCrawling reviewCrawler;
	@Autowired ReviewMapper reviewMapper;

    private int totalCount,startRow,endRow ,
	pageCount,pageNum;
    private final int pageSize = 6;
    
    public void paging() {
    	totalCount =reviewMapper.countCommunity();
    	pageCount = (totalCount % pageSize !=0)?(totalCount /pageSize)+1 : totalCount / pageSize;
    	startRow = (pageNum < 1)? 0 : (pageNum-1)*pageSize;
    	endRow =(pageNum ==pageCount)?totalCount -1:startRow+pageSize-1;

    }
	

}
