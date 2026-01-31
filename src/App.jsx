import Header from './Components/Header';
import Counter from "./Components/Counter";
import { LoginContext } from "./Pages/LoginContext";
import LoginForm from "./Pages/Login";
import { useContext } from "react";
import Content from './Components/Content';
import { Toolbar } from "@mui/material";
import Footers from './Components/Footer';




function App() { 
  
let {isLoggedin} = useContext(LoginContext) 
return (<> 


{isLoggedin?<>

<Header/> 
<Toolbar/>
<Content/>
<Footers></Footers>

 </>:<LoginForm/> }

</>);}
export default App;

