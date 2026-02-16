import Header from "./header";  
import Footer from "./footer"; 
import { useState } from "react";
import SumCard  from "./sumCard";
import ProductCard from "./pages/productCard";
function App(){
  const [products,setProducts]=useState([

    {name:"rice",price:100},
    {name:"sugar",price:150},
    {name:"apple",price:320},
  ]);


  const updatePrice = (index) => {
    alert(index)
    setProducts(products.map(product => ({
      ...product,
      price: product.price + 10
    })));
  };
  

 

  return  <>< Header /> 

  <ProductCard products={products}/>

  
  

  <Footer />
  </>;
}
export default App;
