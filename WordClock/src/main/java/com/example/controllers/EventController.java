package com.example.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.models.Event;
import com.example.repository.EventDao;

@RestController("EventController")
@RequestMapping("/event")
@CrossOrigin(origins="*")
public class EventController {
	
	private EventDao eventDao;
	
	public EventController() {
		// TODO Auto-generated constructor stub
	}

	@Autowired
	public EventController(EventDao eventDao) {
		super();
		this.eventDao = eventDao;
	}
	
	@PostMapping("/save")
	public @ResponseBody Event saveEvent(@RequestBody Event event) {
		System.out.println(event);
		return this.eventDao.save(event);
	}
	
	@GetMapping("/all")
	public @ResponseBody List<Event> allEvents(){
		return this.eventDao.findAll();
	}
	
	

}
