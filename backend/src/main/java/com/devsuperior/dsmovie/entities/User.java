package com.devsuperior.dsmovie.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity								// Import Entity
@Table(name = "tb_user")			//	What ENTITY?	the "tb_user"

public class User {
	// USER Attributes
	
	@Id													// Using ID as PK
	@GeneratedValue(strategy = GenerationType.IDENTITY)	//	ID will be Auto Incremented
	private Long id;
	private String email;
	
	
	/* Let's create an EMPTY CONSTRUCTOR: "User"
	 * 	this way I can INSTANTIATE "User" without any value
	 */
	
	public User() {
		//...
	}
	
	/*	Another CONSTRUCTOR with the Arguments (Parameters)
	 * 		In case I choose to Instantiate User with Parameters
	 */
	
	public User(Long id, String email) {
		this.id = id;
		this.email = email;
	}
	
//	NEXT is Getters / Setters	(Access Methods)	Shift + Alt + S
	
	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}
	
	public String getEmail() {
		return email;
	}
	
	public void setEmail(String email) {
		this.email = email;
	}
}





