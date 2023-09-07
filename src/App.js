import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css"
import Header from "./components/header";
import Body from "./components/body";
import About from "./components/aboutUs";
import Contact from "./components/contact";
import { Outlet,  createBrowserRouter ,RouterProvider} from "react-router-dom";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestarauntMenu"



/*
*Hedaer
-logo
-nav item

*Body
-Search Component
-restraunt container
  - restraunt card

*Footer
-Copyright
-links
-Address
-Contact
*/



const AppLayout = ()=>{
  return (
    <div className="app">
    <Header/>
    <Outlet/>
    </div>
  )
  
}
const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
      path:"/",
      element:<Body/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/restaraunts/:resId",
        element:<RestaurantMenu/>
      }
    ],
    errorElement:<Error/>
  },
  
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);