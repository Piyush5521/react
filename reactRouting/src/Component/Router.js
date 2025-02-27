import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Page1 from '../Pages/Page1'
import Page2 from '../Pages/Page2'
import Page3 from '../Pages/Page3'
// import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
export default function Router() {
  const Layout = () => {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    )
  }

  // const BrowserRoutes = () => {
  //   return (
  //     <BrowserRouter>
  //       <Routes>
  //         <Route path="/" element={<Layout />}>
  //               <Route path="/" element={<Page1/>} />
  //               <Route path="/page2" element={<Page2/>} />
  //               <Route path="/page3" element={<Page3/>} />
  //         </Route>
  //       </Routes>
  //     </BrowserRouter>
  //   )
  // }

  const BrowserRoutes = createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children: [
        {
          path:'/',
          element:<Page1/>,
        },
        {
          path:'/page2',
          element:<Page2/>,
        },
        {
          path:'/page3',
          element:<Page3/>,
        }
      ]
    }
  ])

  return(
    <RouterProvider router={BrowserRoutes} /> 
  )
}
