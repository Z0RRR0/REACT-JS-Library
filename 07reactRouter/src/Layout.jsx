import React from 'react'
import {Header, Footer} from './components'
import { Outlet } from 'react-router-dom'


import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// function RedirectToHomeOnRefresh() {
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     // This effect runs once on mount (i.e., refresh)
//     if (location.pathname !== "/") {
//       // Redirect to home
//       navigate("/", { replace: true });
//     }
//   }, []);

//   return null; // no UI
// }



function Layout() {
  return (
    <>
    <Header />
    {/* <RedirectToHomeOnRefresh /> */}
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout