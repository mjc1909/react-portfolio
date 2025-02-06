import { useRoutes } from "react-router-dom";
// Common Pages.
import HomePage from "./pages/home/HomePage";
import Navigation from "./components/Navigation/Navigation";
import ProjectsPage from "./pages/projects/ProjectsPage";

// Application
const App = () => {

  // Setting Up Routes
  const routes = useRoutes(
            [

            {
              path: "/",
              element : <HomePage></HomePage>
            },
            {
              path: "/projects",
              element : <ProjectsPage></ProjectsPage>
            },
            
            {
              path: "*",
              element : <div>NOT FOUND</div>
            },

          ]

  );

  return <>
    <div>
        <Navigation></Navigation>
        <div>
            {routes}
        </div>
       {/* GLOBAL FOOTER */}
    </div>
  </>;

}

export default App;
