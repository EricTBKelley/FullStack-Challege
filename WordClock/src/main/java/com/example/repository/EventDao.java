package com.example.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.models.Event;

@Repository
public interface EventDao extends CrudRepository<Event, Integer>{
	
	public List<Event> findAll();

}
