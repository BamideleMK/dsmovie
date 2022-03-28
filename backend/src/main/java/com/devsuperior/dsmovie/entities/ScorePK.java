package com.devsuperior.dsmovie.entities;

import java.io.Serializable;

import javax.persistence.Embeddable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Embeddable 									
	//	ScorePK to be used as Score Primary Key
public class ScorePK implements Serializable {

	private static final long serialVersionUID = 1L;	//	Hover on ScorePK, choose Default

	/* Copy and PASTE here the those REFERENCES from SCORE CLASS as our Class Attributes
	 * 	I need to now create an AUXILIARY class that will Hold these TWO IDs
	 * 	I will then PUT that Auxiliary class in the Score Class
	 *  I will need to INSTANTIATE it as ID
	 *  	private ScorePK id = new ScorePK();
	 */
	@ManyToOne
	@JoinColumn(name = "movie_id")
	private Movie movie;		// REFERENCING to Movie Class
	
	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;			// REFERENCING to User Class
	
	// Insert the Empty Constructor now
	
	public ScorePK() {
		
	}

	// Insert the Constructor that will receive the Arguments (Although not NEEDED)
	/*
	public ScorePK(Movie movie, User user) {
		this.movie = movie;
		this.user = user;
	}
		The Constructor with Argument is actually not necessary
	 */
	//	CREATE GETTERS() and SETTERS()
	
	public Movie getMovie() {
		return movie;
	}

	public void setMovie(Movie movie) {
		this.movie = movie;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
	
	
	
	
	
	

}
