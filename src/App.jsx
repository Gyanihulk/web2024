import Test from "./Test";
import "./app.scss";

import Cursor from "./components/cursor/Cursor";
import "./app.scss";
import Project from "./pages/Project";
import Home from "./pages/Home";
import {
  createBrowserRouter,

  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />, 
    // loader: homeLoader, 
  },
  {
    path: "project/:id", 
    element: <Project />, 
    // loader: projectLoader,
  },
]);

const App = () => {
  return (
    <div>
      <Cursor />
      <RouterProvider router={router} />
   
    </div>
  );
};

export default App;
