package com.mytour.web.proxy;

import java.util.function.BiPredicate;
import java.util.function.Consumer;
import java.util.function.Function;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

@Component("pxy")
@Lazy
public class Proxy<T> {
	public String string(Object t) {
		Function<Object, String> f = String :: valueOf;
		return f.apply(t);
	}
	public int integer(String s) {
		Function<String, Integer>f = Integer :: parseInt;
		return f.apply(s);
	}
	public Boolean equel(String s1,String s2) {
		BiPredicate<String, String> f = String :: equals;
		return f.test(s1, s2);
	}
	public void print(String s) {
		Consumer<String> f = System.out :: print;
		f.accept(s);
	}
}