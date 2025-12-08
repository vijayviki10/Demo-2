import { Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import Content from './Components/Content';
import Account from "./Components/Account";
import Cart from "./Components/Cart";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import { Demo } from "./Components/demo";
import Counter from "./Components/Counter";
import { Button } from "@mui/material";

function App() {
  return (
    
    <>
      
    <Header/>

    <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/account" element={<Account />} />
        <Route path="/contact" element={<Contact/>} />

    </Routes>
   
    
   <Counter></Counter>
   <Demo></Demo>
  

    
    
    </>
  );
}

export default App;



// const [count, setCount] = useState(0)
// <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// <div style={{height:"500vh"}}></div>


