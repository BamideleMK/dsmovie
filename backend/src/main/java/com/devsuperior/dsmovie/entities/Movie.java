package com.devsuperior.dsmovie.entities;

import javax.persistence.Entity;		//	We choose this because it is for SPECIFICATION
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

// we should now have these 5 LIBRARIES IMPORTEF

@Entity		//	hit CTRL + Shift + O 	to import the Entity: choose: java.persistence.Entity
@Table(name = "tb_movie")	//	Specifying the name of the Table: We'll use the NAME in INSERT

public class Movie {
	// Adding the Movie ATTRIBUTES
	
	@Id				//	Indicates that this ID will be use as PK in the Database
	@GeneratedValue(strategy = GenerationType.IDENTITY)	//	Means ID will be AUTO INCREMENTED in the Database
	private Long id;		//	This ID will be our PK in the Database, so we specify that
	private String title;
	private Double score;
	private Integer count;
	private String image;	//	We use all the CLASS types (in UPPERCASE)
	
	/* Let's create an EMPTY CONSTRUCTOR: Movie
	 * 	this way I can INSTANTIATE Movie without any value
	 */
	
	public Movie() {
		//...
	}

	/*	I need to Create CONSTRUCTOR That RECEIVES the ARGUEMENT too
	 * 	Right click --- Source --- Generate Constructor using FIELDS
	 * 		select ALL FIELDS
	 */
	
	//	I can Use this to PASS Value to the INSTANCE when Instantiating Movie
	public Movie(Long id, String title, Double score, Integer count, String image) {
		this.id = id;
		this.title = title;
		this.score = score;
		this.count = count;
		this.image = image;
	}
	
	// GETTERS / SETTERS to Access the ATTRIBUTES

	public Long getId() {
		return id;			//	To Return the VALUE of the ID
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Double getScore() {
		return score;
	}

	public void setScore(Double score) {
		this.score = score;
	}

	public Integer getCount() {
		return count;
	}

	public void setCount(Integer count) {
		this.count = count;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}
	

	
	
	
	
	
	
	
	

}
