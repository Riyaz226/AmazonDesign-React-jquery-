import React, { Component } from 'react'
import one from '../Images/ps4.jfif'
import two from '../Images/tv.jfif'
import three from '../Images/sofa.jfif'
import four from '../Images/sta.jfif'
import five from '../Images/ele.jfif'
import six from '../Images/ps5.jfif'
import seven from '../Images/cd.jfif'
import eight from '../Images/bi.jfif'
import nine from '../Images/re.jfif'
import ten from '../Images/gl.jfif'
import eleven from '../Images/ip.jfif'
import tweleve from '../Images/ke.jfif'
import thirteen from '../Images/bo.jfif'
import fourteen from '../Images/ww.jfif'

import './Style.css';

function scrolll(){
  var left=document.querySelector(".scroll-images");
  left.scrollBy(390,0)
}
function scrollr(){
    var right=document.querySelector(".scroll-images");
    right.scrollBy(-390,0)
  }
export default class Scroll extends Component {
  render() {
    return (
      <>
  <div class="third">    
     <div class="main-scroll-div">
            <div>
                <button class="icon" onClick={scrolll}><i class="fas fa-angle-double-left"></i></button>
            </div>
             <div class="cover">
                <div class="scroll-images">
                    <div class="child"><img class="child-img" src={one} alt="image"/></div>
                    <div class="child"><img class="child-img" src={two} alt="image"/></div>
                    <div class="child"><img class="child-img" src={three} alt="image"/></div>
                    <div class="child"><img class="child-img" src={four} alt="image"/></div>
                    <div class="child"><img class="child-img" src={five} alt="image"/></div>
                    <div class="child"><img class="child-img" src={six} alt="image"/></div>
                    <div class="child"><img class="child-img" src={seven} alt="image"/></div>
                    <div class="child"><img class="child-img" src={eight} alt="image"/></div>
                    <div class="child"><img class="child-img" src={nine} alt="image"/></div>
                    <div class="child"><img class="child-img" src={ten} alt="image"/></div>
                    <div class="child"><img class="child-img" src={eleven} alt="image"/></div>
                    <div class="child"><img class="child-img" src={tweleve} alt="image"/></div>
                    <div class="child"><img class="child-img" src={thirteen} alt="image"/></div>
                    <div class="child"><img class="child-img" src={fourteen} alt="image"/></div>
                </div>
            </div>
            <div>
            <button class="icon" onClick={scrollr}><i class="fas fa-angle-double-right"></i></button>
           </div>
        </div>
      </div>  
      </>
    )
  }
}
