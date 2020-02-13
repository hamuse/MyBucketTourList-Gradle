package com.mytour.web.map;

import java.util.List;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Lazy
@Component
@AllArgsConstructor
@NoArgsConstructor
public class Corona {
	private String place,latitude;
					
}
