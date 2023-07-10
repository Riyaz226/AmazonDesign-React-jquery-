import React,{useState} from "react";
import $ from 'jquery';

function Computer() {
  const [data, setData] = useState([]);
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      setData(json);
    });

    var downloadGrid = (function(){
  
      "use strict";
      
      var $cardContainer = $('.download-cards');
      var $downloadCard  = $('.download-card__content-box');
      var $viewTrigger   = $('button').attr('data', 'trigger');
    
      function swapTriggerActiveClass(e) {   
        $viewTrigger.removeClass('active');
        $(e.target).addClass('active');
      }
    
      function swapView(e) {
        var $currentView = $(e.target).attr('data-trigger');
        $cardContainer.attr('data-view', $currentView);
      }
    
      $(document).ready(function(){
        // Event Listener
        $viewTrigger.click(function(e){
          swapTriggerActiveClass(e);
          swapView(e);        
        });  
      });
      
    })();
        
    
  return (
    <>
<div class="container">
  <div class="dc-view-switcher">
    <button data-trigger="grid-view"></button>
    <button data-trigger="list-view" class="active"></button>
  </div>
  <div data-view="list-view" class="download-cards">
  {data.map((item) => (
   <article class="download-card">
      <div class="download-card__icon-box"><img src={item.image} alt="{item.image}" /></div>
      <div class="download-card__content-box">
        <div class="content">
          {/* <h2 class="download-card__content-box__catagory">dress</h2> */}
          <h3 class="download-card__content-box__title">{item.title}</h3>
          <p class="download-card__content-box__description">{item.description}</p>
          <p class="download-card__content-box__price">{item.description}</p>
          <a class="button"> <i class="fa fa-cloud-download"></i> Download</a>
        </div>
      </div>
    </article>
  ))}
  </div>
</div>

</>

)
}

export default Computer
