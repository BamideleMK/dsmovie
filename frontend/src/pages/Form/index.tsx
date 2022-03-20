// CREATING THE COMPONENT FOR FORM
import { Link } from 'react-router-dom';
import './style.css';
function Form() {
    // Below is JAVASCRIPT Object, which Has to come before the RETURN statement
    const movie = {
        id: 1,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
        title: "The Witcher",
        count: 2,
        score: 4.5
    };              //  Component is a Function and a Function can have some logical statement befor the RETURN

    return (
        <div className="dsmovie-form-container">
            {/* in JSX use Curly Bracket to insert Javascript expression:   example:  {movie.id}   */}
            <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />  {/* movie.image | movie.title */}
            <div className="dsmovie-card-bottom-container">     {/* This 2nd Container contains the FILM info */}
                <h3>{movie.title}</h3>                          {/* Calling Object and its VALUE as h3 value */}
                <form className="dsmovie-form">
                    <div className="form-group dsmovie-form-group">
                        <label htmlFor="email">Informe seu email</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group dsmovie-form-group">
                        <label htmlFor="score">Informe sua avaliação</label>
                        <select className="form-control" id="score">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="dsmovie-form-btn-container">
                        <button type="submit" className="btn btn-primary dsmovie-btn">Salvar</button>
                    </div>
                </form >
                <Link to="/">       {/* This takes me back to the ROOT which is the LISTING */}
                    <button className="btn btn-primary dsmovie-btn mt-3">Cancelar</button>
                </Link>
            </div >
        </div >                     //  The RETURN will have to return this FORM body
    );
}
export default Form;        //  It can be called or used ELSEWHERE