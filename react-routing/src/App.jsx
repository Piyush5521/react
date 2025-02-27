import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import ParamComp from "./components/ParamComp";
import NotFound from "./components/NotFound";
function App() {

  const Layout = () => {
      return(
        <>
          <Navbar/>
          <Outlet/>
        </>
      )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        
        },
        {
          path: "/about",
          element: <About />
        
        },
        {
          path: "/dashboard",
          element: <Dashboard /> 
        
        },
        {
          path: '/student/:id',
          element: <ParamComp /> 
       
        },
        {
          path: '*',
          element: <NotFound /> 
        }
      ]
    },
   
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
