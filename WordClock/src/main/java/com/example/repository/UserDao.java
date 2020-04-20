package com.example.repository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.models.EUser;

@Repository
public interface UserDao extends CrudRepository<EUser, Integer>{

	public EUser findByUsername(String username);
}
