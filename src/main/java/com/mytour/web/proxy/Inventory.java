package com.mytour.web.proxy;

import java.util.ArrayList;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

@Component
@Lazy
public class Inventory<T> {
	private ArrayList<T> inventory;
	public Inventory() {
		inventory = new ArrayList<>();
	}
	public void add(T t) {
		inventory.add(t);
	}
	public void clear() {
		inventory.clear();
	}
	public T get(int T) {
		return inventory.get(T);
	}
	public ArrayList<T> get(){
		return inventory;
	}
}