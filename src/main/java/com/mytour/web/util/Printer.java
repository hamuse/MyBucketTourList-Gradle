package com.mytour.web.util;

import java.util.function.Consumer;

import org.springframework.stereotype.Service;



@Service
public class Printer {
	public void accept(Object o) {
		Consumer<String> c = System.out :: println;
		c.accept((String)o);
	}
}