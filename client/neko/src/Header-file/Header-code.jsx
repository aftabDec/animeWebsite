import React, { useState } from 'react';
import { IoSearchSharp, IoPersonSharp, IoCloudDownloadSharp } from 'react-icons/io5';
import { RxCross2 } from "react-icons/rx";
import './header.css';
import Menu from "../menuFile/menu-slide.jsx";
import { Link } from "react-router-dom"
import LogoImg from "../images/logo2.jpg";
import { useAuth } from '../store/store.jsx';


function Headerjs() {
  const [showMenu, setShowMenu] = useState(false);
 const [showSearch, setShowSearch] = useState(false)
 const [searchValue, setSearchValue] = useState("")
 const [loginDisplay, setLoginDisplay] = useState(false)
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const toggleSearch = () =>{
    setShowSearch(!showSearch)
  }
  const clearSearch = () =>{
      setSearchValue("")
  }

const {isLoggedIn} = useAuth()

  return (
    <>
      <div className="header">
       <nav>
       <Link to="/"> <div className="title-img">
          <img src={LogoImg} alt="image" />
          <h2>Kitsune</h2>
        </div></Link> 
        <div className="left-nav">
          
          <p><a  onClick={toggleMenu}> Browse </a></p>
          <p><Link to="/admin">Admin</Link></p>
          <p><Link to="/contact" > Contact </Link></p>
         
       
        </div>
        <div className="right-nav">
          <a className='s'  onClick={toggleSearch}><IoSearchSharp  /></a>
          

          {isLoggedIn ?  <Link to="/logout">
            <button className='LoginBTn'>Logout</button>
            </Link>
            : <>
           <Link to="/login">
            <button className='LoginBTn'>Login</button>
            </Link>
              </>
            }
          
           
        </div>
       </nav>
      </div>
      <div className={`show-input ${showSearch ? "show2" : ""}` }>
       
        
          <input
           value={searchValue}
           type="text" placeholder='Search' 
           onChange={(e) => setSearchValue(e.target.value)} 
           />
         {searchValue && < div className='cross-x' onClick={clearSearch}><RxCross2 /></div>}
      
      </div>
      <Menu showMenu={showMenu} />
     
    </>
  );
}

export default Headerjs;
