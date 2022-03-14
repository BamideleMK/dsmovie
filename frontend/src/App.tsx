// ReactComponent is a Javascript function
// Importing ASSETS to be used in my COMPONENTS

import Navbar from "./components/Navbar";

// Creating ReactComponent that will be Navbar; I can then style Navbar

function App() {
  return (
    <Navbar />        //  Calling the Navbar Component | Automatically loads import Navbar at the top
  );
}

export default App;
// This App() function can be called anywhere now:  It is called from index.tsx, which is my MAIN file