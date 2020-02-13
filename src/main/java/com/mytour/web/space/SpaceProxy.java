package com.mytour.web.space;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.mytour.web.mapper.SpaceMapper;

import lombok.Data;

@Data
@Component
public class SpaceProxy {
		@Autowired SpaceMapper spaceMapper;
		
		
}
