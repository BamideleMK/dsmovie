/* Observe that we are importing these 3 components below:
    BrowserRouter
    Routes
    Route
      From React Dom that we have just installed
      these COMPONENTS will be used to configure the ROUTES
      I need to IMPORT the COMPONENT that I created (Navbar ex)
      to ACTIVATE the Component in each route
*/
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Listing from 'pages/Listing';      /* This page Rout has been created: pages/listing */
import Form from 'pages/Form';            /* This page Rout has been created: pages/form */

import Navbar from "components/Navbar";   /* I Also need to IMPORT the React COMPONENT that I created */

function App() {
  return (
    <BrowserRouter>                    {/* Configuration of each route: to INITIATE the configuration */}
      <Navbar />             {/* Navbar appears ABOVE all component, so it appears outside the routes */}
      <Routes>                {/* This will configure route by route */}
        <Route path="/" element={<Listing />} />
        <Route path="/form">
          <Route path=":movieId" element={<Form />} />    {/* /form/1 to open film 1, /form/2 to open film 2 */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;














