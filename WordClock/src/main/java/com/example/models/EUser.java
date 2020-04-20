package com.example.models;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="Euser")
public class EUser {
	
	@Id
	@Column(name="user_id")
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int userId;
	
	@Column(name="username")
	@NotNull
	private String username;
	
	@JsonIgnore
	@OneToMany(
			mappedBy="eventCreator",
			cascade=CascadeType.ALL,
			fetch=FetchType.EAGER)
	private List<Event> eventList = new ArrayList<>();
	
	public EUser() {
		// TODO Auto-generated constructor stub
	}

	public EUser(int userId, @NotNull String username, List<Event> eventList) {
		super();
		this.userId = userId;
		this.username = username;
		this.eventList = eventList;
	}
	
	

	public EUser(@NotNull String username) {
		super();
		this.username = username;
		this.eventList = new ArrayList<>();
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public List<Event> getEventList() {
		return eventList;
	}

	public void setEventList(List<Event> eventList) {
		this.eventList = eventList;
	}

	@Override
	public String toString() {
		return "User [userId=" + userId + ", username=" + username + ", eventList=" + eventList + "]";
	}
	
	
	
}
