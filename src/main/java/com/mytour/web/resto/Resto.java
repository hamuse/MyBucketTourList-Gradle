package com.mytour.web.resto;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Lazy
@AllArgsConstructor
@NoArgsConstructor
@Component
public class Resto {
	private String place,spot,point,img,latitude,info;
}
