package com.example.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.models.EUser;
import com.example.repository.UserDao;

@RestController("EUserController")
@RequestMapping("/euser")
@CrossOrigin(origins="*")
public class EUserController {
	
	private UserDao userDao;
	
	public EUserController() {
		// TODO Auto-generated constructor stub
	}

	@Autowired
	public EUserController(UserDao userDao) {
		super();
		this.userDao = userDao;
	}
	
	@PostMapping("/save")
	public @ResponseBody EUser saveEUser(@RequestBody EUser user) {
		return userDao.save(user);
	}
	
	@GetMapping("/get")
	public @ResponseBody EUser getEUser(@RequestParam String username) {
		return userDao.findByUsername(username);
	}
	
	@PostMapping("/login")
	public @ResponseBody EUser loginEUser(@RequestBody EUser user) {
		System.out.println(user.getUsername());
		if(getEUser(user.getUsername()) == null) {
			EUser newuser = new EUser(user.getUsername());
			System.out.println("here");
			System.out.println(user);
			return userDao.save(newuser);
		} else {
			return getEUser(user.getUsername());
		}
	}
	
	
	
	

}
