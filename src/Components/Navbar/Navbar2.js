import React from 'react'
import { Link } from 'react-router-dom'

function Navbar2() {
  return (
    <>
               <input type="checkbox" id="check"/>
          <label for="check">
           <i class="fa-sharp fa-solid fa-bars" id="btn"></i><span class="al">All</span>
           <i class="fas fa-times" id="cancel"></i>
          </label>
        <div class="sidebar">
           <header>Hello,Sign In</header>
          <ul>
            <li class="one">Digital Content & Devices
              <li><Link to="/History">Amazon Music<i class="fa-sharp fa-solid fa-angle-right"></i></Link></li>
              <li>Amazon AppStore<i class="fa-sharp fa-solid fa-angle-right"></i></li>
              </li>  
            <li class="one">Shop By Department
            <li><Link to="/Computer">Computers<i class="fa-sharp fa-solid fa-angle-right"></i></Link></li>
            <li><Link to="/Phone">Iphons<i class="fa-sharp fa-solid fa-angle-right"></i></Link></li>
              <li>Smart Home<i class="fa-sharp fa-solid fa-angle-right"></i></li>
              <li>See All<i class="fa-sharp fa-solid fa-angle-right"></i></li>
              </li>  
            <li class="one">Programs & Features
              <li>Gift Cards<i class="fa-sharp fa-solid fa-angle-right"></i></li>
              <li><Link to="/History">Amazon Love<i class="fa-sharp fa-solid fa-angle-right"></i></Link></li>
              <li>I/N Shoping<i class="fa-sharp fa-solid fa-angle-right"></i></li>
              </li>  
            <li class="one">Help & Settings
               <li><Link to="/Comment">Comment Product<i class="fa-sharp fa-solid fa-angle-right"></i></Link></li>
               <li>English<i class="fa-sharp fa-solid fa-angle-right"></i></li>
               <li>Trick<i class="fa-sharp fa-solid fa-angle-right"></i></li>
               <li>Sign In<i class="fa-sharp fa-solid fa-angle-right"></i></li>
            </li>   
          </ul>
        </div>
        
        <div class="nav2">
          <li><a href="#">Today Deals</a></li> 
          <li><a href="#">Customber Service</a></li>
          <li><a href="#">Registry</a></li>  
          <li><a href="#">Gift Cards</a></li>
          <li><a href="#">Sell</a></li>
          <li><a href="#">Shop Deals In Electronic</a></li>
        </div>
    </>
  )
}

export default Navbar2