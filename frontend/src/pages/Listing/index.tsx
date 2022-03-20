/* CREATING A COMPONENT */

import MovieCard from "components/MovieCard";
//import MovieScore from "components/MovieScore";
//  import MovieStars from "components/MovieStars"; NOT USING again
import Pagination from "components/Pagination";

function Listing() {
    return (
        /* This file can only hold ONE Component,
            To PUT Multiple Components, Put them in a DIV or <> ... </>
        */

        <>
            <Pagination />
            <div className="container">
                <div className="row">       {/* This is BOOTSTRAP CLASS we're calling */}
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">   {/* This is also a Bootstrap Class */}
                        <MovieCard />      {/* TESTING */}
                    </div>

                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">   {/* This is also a Bootstrap Class */}
                        <MovieCard />      {/* TESTING */}
                    </div>

                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">   {/* This is also a Bootstrap Class */}
                        <MovieCard />      {/* TESTING */}
                    </div>

                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">   {/* This is also a Bootstrap Class */}
                        <MovieCard />      {/* TESTING */}
                    </div>

                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">   {/* This is also a Bootstrap Class */}
                        <MovieCard />      {/* TESTING */}
                    </div>
                </div>
            </div>
        </>
    );
}
export default Listing;         // Available to be used or called ELSEWHERE