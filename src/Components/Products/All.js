import React,{useEffect,useState} from "react";
import './Style.css';
function All() {
  const [data, setData] = useState([]);
     fetch("https://api.escuelajs.co/api/v1/products")
       .then((response) => response.json())
       .then((json) => {
         console.log(json);
         setData(json);
       });
  
    
  return (
      <div class="container">
  <div class="products">
{data.map((item) => (
    <div class="product">
      <div class="panel">
        <a href="#" class="fas fa-heart"></a>
        <a href="#" class="fas fa-share"></a>
        <a href="#" class="fas fa-search"></a>
      </div>
      
        <div class="image">
            <img src={item.images} alt="{item.images}"/>
          </div>
        <div class="namePrice">
            <h3>{item.title}</h3>
            <span>{item.price}&euro;</span>
        </div>
        <p>{item.updatedAt}</p>
        <div class="stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
        </div>
        <div class="bay">
            <button> bay now </button>
        </div>

    </div> 
))}
    </div>   
 </div>

);
}

export default All;
