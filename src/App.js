import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import { useState } from "react";

function App() {
  const [showCart, setShowCart]=useState(false)

  function showCartHandler(){
    setShowCart(true)
  }
  function hideCarthandler(){
    setShowCart(false)
  }
  return (
    <div>
      {showCart && <Cart  onClick={hideCarthandler}/>}
      <Header onClick={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
