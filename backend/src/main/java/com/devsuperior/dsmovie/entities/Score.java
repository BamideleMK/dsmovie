package com.devsuperior.dsmovie.entities;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "tb_score")

public class Score {
	//	Score ATTRIBUTES
	
	@EmbeddedId 						//	Using EmbeddedId bcos this ID is a COMPOST id
	private ScorePK id = new ScorePK();		// Instantiating ScorePK as ID	
	private Double value;				// Additional Specialization attribute
	
	
	//	Basically, it's just this
	/*
	 * But in Java, the PRY Key, 
	 * which is the Identifier of each class, has to be ONE ATTRIBUTE
	 * OBS:	Learn more in the Relational Database
	 * 
	 * The TWO Foreign Keys (Movie and User) become COMPOSITE Primary Key
	 * 		When we have the Movie ID and the User ID, as used above
	 *  
	 * We need to create the AUXILIARY Classes as REFEREBCES;
	 * That's what we did above.
	 * We created the Auxiliary Key called ScorePK 
	 * And use ScorePK here		(We use it to create an Object called "id")
	 * 
	 * All Constructors, Getters and Setters are set in the ScorePK
	 * 
	 * Now I have TWO Attributes:
	 * 	ID	which will make references to Movie and User
	 * 	VALUE	which 
	 * 
	 * This way, Score will point to TWO References: the FILM and to the USER
	 * 	There is the 2nd Attribute, which is VALUE
	   ============================================================= */
	
	//	We can now CREATE OUR EMPTY CONSTRUCTOR
	
	public Score() {
		// ...
	}
	
	//	CREATE GETTERS() and SETTERS()
	
	public void setMovie(Movie movie) { 
		id.setMovie(movie);
		
		//	Manually Associating a Movie to a SCORE
	}
	
	public void setUser(User user) {
		// Manually Associating a USER to a SCORE
		id.setUser(user); 	
		
		// id is an INSTANCE name.ADDs a VALUE to it
	}

	public ScorePK getId() {
		return id;
	}


	public void setId(ScorePK id) {
		this.id = id;
	}


	public Double getValue() {
		return value;
	}


	public void setValue(Double value) {
		this.value = value;
	}
	
	
	

}
