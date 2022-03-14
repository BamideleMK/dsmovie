// Creating Navbar Component
// ..Out/..Out/then ENTER assets
import { ReactComponent as DeleGithubIcon } from 'assets/img/github.svg'; /* Logo Nick --> Path */
import './styles.css';   /* Importing style.css  from the CSS created in the Navbar */
function Navbar() {
    return (
        <header>
            <nav className="container">  {/* Give the NAV: className="container" (not class)  */}
                <div className="dsmovie-nav-content"> {/* This div holds NAV Content for DSmovie */}
                    {/* This h1 tag goes to the Left side */}
                    <h1>DSMovie</h1>

                    {/*Everything inside "a" is aligned to the Right */}
                    <a href="https://github.com/BamideleMK/dsmovie">
                        <div className="dsmovie-contact-container">
                            {/*Every ReactComponent is HTML Tag, and you can Style it */}
                            <DeleGithubIcon />      {/* Importing the github logo */}
                            <p className="bamideleGithub">BamideleMK</p>
                        </div>

                    </a>
                </div>
            </nav>
        </header>
    );
}
export default Navbar;      /* This can now be called from another file   */