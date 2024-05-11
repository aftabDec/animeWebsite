
import Header from './Header-file/Header-code.jsx';
import Menu from './menuFile/menu-slide.jsx';
import Login from './Reg/login1.jsx';
import SliderCodes from './carousal/slider.jsx';
import PopularAnimeList from './PopularAnimes/PopularAnimeList.jsx';
import HindiAnimeList from './hindiAnimeList/HindiAnime.jsx';
import { createBrowserRouter, RouterProvider, Routes, Route } from "react-router-dom";
import Register from './register/register.jsx'
import Error from "./errorPage/Error.jsx"
import Logout from "./logout.jsx"
import AdminManage from "./Admin/adminPage/adminpage.jsx"
import UserManage from "./Admin/usermanage/Allusers.jsx"
import PopularAllFile from "./popularAll/popularAll.jsx"
import Contact from "./Contact/contact.jsx"
import AddAnimeP from "./Admin/popularManage/addAnime.jsx"

 const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />
  },

  {
    path: "/pAnime",
    element: <AddAnimeP />
  },
  {
    path: "/Register",
    element: <Register />
  },
  {
    path: "/*",
    element: <Error />
  },
  {
    path: "/logout",
    element:<Logout/>
  },
  {
    path: "/contact",
    element:
       <>
         <Header />
         <Contact/>
       </>
  },
  {
    path: "/users",
    element:
    <>
    
    <UserManage/>
    </>
   
  },
  {
    path: "/admin",
    element:
    <>
    
    <AdminManage/>
    </>
   
  },
  {
    path: "/popular",
    element:
    <>
    <Header />
    <PopularAllFile/>
    </>
  },

  {
    path: "/",
    element: 
      <>
        <Header />
        <Menu />
        <SliderCodes />
        <PopularAnimeList />
        <HindiAnimeList />
      </>
    
  }
]);

function App() {
  return (
    <RouterProvider router={router}>
      <div className="App">
        <Routes />
      </div>
    </RouterProvider>
  );
}

export default App;
