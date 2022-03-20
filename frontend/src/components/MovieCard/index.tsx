import MovieScore from "components/MovieScore";

function MovieCard() {
    // Insert the OBJECT you copy from FORM here
    // Below is JAVASCRIPT Object, which Has to come before the RETURN statement
    const movie = {
        id: 1,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
        title: "The Witcher",
        count: 2,
        score: 4.5
    };              //  Component is a Function and a Function can have some logical statement befor the RETURN
    return (
        <div>
            <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="dsmovie-card-bottom-container">
                <h3>{movie.title}</h3>      {/* We can copy the object we have in FORM */}
                <MovieScore />      {/* Importing MovieScore as sub function */}
                <div className="btn btn-primary dsmovie-btn">Avaliar</div>
            </div>
        </div>

    )
}
export default MovieCard;

/*
    We can NOW insert this MovieCard inside the Listing to TEST it
*/