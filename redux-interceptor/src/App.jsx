import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import { Login } from "./components/Login";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import UserList from "./components/UsersList";
import Posts from "./components/Posts";

function App() {
  const Layout = () => {
    return <>
      <Outlet/>
    </>;
  };


  const BrowserRoutes = createBrowserRouter([
    {
      path:'/',
      element: <Layout/>,
      children: [
        {
          path: '/',
          element: <Login/>
        },
        {
          path: '/signup',
          element: <SignUp/>
        },
        {
          path: '/dashboard',
          element: <Dashboard/>
        },
        {
          path: '/userlist',
          element: <UserList/>
        },
        {
          path: '/posts',
          element: <Posts/>
        }
      ]
    }
  ])


  return <>
    <RouterProvider router={BrowserRoutes}/>
  </>;
}

export default App;
