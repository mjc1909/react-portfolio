import { useRoutes } from "react-router-dom";
// Common Pages.
import HomePage from "./pages/home/HomePage";
import Navigation from "./components/Navigation/Navigation";
import ProjectsPage from "./pages/projects/ProjectsPage";
import Footer from "./components/Footer/Footer";

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
              path: "/about",
              element : <ProjectsPage></ProjectsPage>
            },
            {
              path: "/contact",
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
       <Footer></Footer>
    </div>
  </>;

}

export default App;
