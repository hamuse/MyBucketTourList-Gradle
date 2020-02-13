package com.mytour.web.user;

import java.util.HashMap;
import java.util.Map;
import java.util.function.Consumer;
import java.util.function.Function;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mytour.web.mapper.UserMapper;
import com.mytour.web.util.Printer;



@RestController
@RequestMapping("/user")
public class UserController {
	private static final Logger logger = LoggerFactory.getLogger(UserController.class);
	@Autowired
	Map<String, Object> map;
	@Autowired
	User user;
	@Autowired
	Printer printer;
	@Autowired
	UserMapper userMapper;
	@Autowired
	DumProxy dumproxy;

	@GetMapping("/create/table")
	public Map<?, ?> createUser() {
		HashMap<String, String> paramMap = new HashMap<>();
		System.out.println("11111");
		paramMap.put("CREATE_USER", UserSQL.CREATE_USER.toString());
		System.out.println("왔니" + UserSQL.CREATE_USER.toString());
		Consumer<HashMap<String, String>> c = t -> userMapper.createUser(paramMap);
		c.accept(paramMap);
		paramMap.clear();
		paramMap.put("msg", "SUCCESS");
		return paramMap;
	}

	@PostMapping("/")
	public Map<?, ?> join(@RequestBody User param) {
		printer.accept("조인에들어옴");
		Consumer<User> c = t -> userMapper.insertUser(param);
		c.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;
	}

	@PostMapping("/{uid}")
	public Map<?, ?> login(@PathVariable String uid, @RequestBody User param) {
		printer.accept("로그이니이이니인 아이디 : " + uid);
		Function<User, User> f = t -> userMapper.selectByIdPw(param);
		map.clear();
		map.put("msg", "SUCCESS");
		map.put("user", f.apply(param));
		return map;
	}

	@GetMapping("/{uid}")
	public User selectByIdpwd(@PathVariable String uid, @RequestBody User param) {
		Function<User, User> f = t -> userMapper.selectByIdPw(param);
		return f.apply(param);
	}

	@DeleteMapping("/{uid}/remove")
	public Map<?, ?> removeUser(@PathVariable String uid, @RequestBody User param) {
		Consumer<User> c = o -> userMapper.removeUser(param);
		c.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;
	}

	@GetMapping("/{uid}/existId")
	public Map<?, ?> existId(@PathVariable String uid) {
		printer.accept("exist 들어옴" + uid);
		Function<String, Integer> p = o -> userMapper.existId(uid);
		map.clear();
		map.put("msg", (p.apply(uid) == 0) ? "SUCCESS" : "FAIL");
		return map;
	}

	@GetMapping("/insert/dummy")
	public Map<?, ?> insertUser() {
		HashMap<String, String> paramMap = new HashMap<String, String>();
		dumproxy.insertUsers();
		printer.accept("더미컨트롤러");
		return paramMap;
	}

	@PostMapping("/findid")
	public Map<?, ?> findid(@RequestBody User param) {
		System.out.println("아이디찾기컨트롤러");
		System.out.println(userMapper.findid(param).getUid());
		map.clear();
		map.put("uid", userMapper.findid(param).getUid());

		return map;
	}
	@PostMapping("/findpw")
	public Map<?, ?> findpw(@RequestBody User param) {
		System.out.println("비번찾기컨트롤러");
		System.out.println(param.getUid());
		System.out.println(param.getTel());
		System.out.println(userMapper.findpw(param).getPwd());
		map.clear();

		map.put("pwd", userMapper.findpw(param).getPwd());
		return map;
	}
	@PostMapping("/update")
	public Map<?, ?> update(@RequestBody User param) {
		System.out.println("update컨트롤러");
		System.out.println("바꿀"+param.getUname());
		System.out.println(userMapper.selectByIdPw(param).getUname());
		userMapper.update(param);
		map.clear();

		map.put("user", userMapper.selectByIdPw(param));
		return map;
	}
	@GetMapping("/list/{uid}")
	public Map<?, ?> mylist(@PathVariable String uid) {
		System.out.println("마이리스트 컨트롤러");
		user.setUid(uid);
		System.out.println(userMapper.mylist(user));
		map.clear();
		map.put("list", userMapper.mylist(user));
		return map;
	}
	

}
