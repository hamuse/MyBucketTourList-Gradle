package com.mytour.web.user;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Component
@AllArgsConstructor
@Lazy
@NoArgsConstructor
public class User {
	private String uid,pwd,uname,nickname,gender,birth,tel,pettype;
}
