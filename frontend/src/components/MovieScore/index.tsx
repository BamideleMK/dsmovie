import MovieStars from "components/MovieStars";
import './styles.css';

function MovieScore() {
    const score = 3.5;
    const count = 13;

    return (
        <div className="dsmovie-score-container">
            <p className="dsmovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <MovieStars />      {/* CTRL + Spacebar from inside the <MovieScore /> will import MovieStars */}
            <p className="dsmovie-score-count">{count} avaliações</p>   {/* Rating counter */}
        </div>

    );
}
export default MovieScore;

/*
    Observe that we are using some VARIABLES here:
        score
        count
    We use Tenary Condition:
    {score > 0 ? score.toFixed(1) : '-'}
        Condition is what comes BEFORE  ?
        if the condition is TRUE, Show what comes AFTER ?
        Else, show what comes after :  
        
        when there's RATING, it will show with 1 decimal place
        When there's no RATING, it will show just DASH  '-'
        
*/