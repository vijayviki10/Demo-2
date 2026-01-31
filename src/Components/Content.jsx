import { Box } from "@mui/material"
import Account from "./Account"
import Cart from "./Cart"
import Contact from "./Contact"
import { Route, Routes } from "react-router-dom"
// import Counter from "./Counter"

function Content (){
return(<Box>
    


<Routes>
<Route path="/cart" element={<Cart/>}></Route>
<Route path="/account" element={<Account/>}></Route>
<Route path="/contact" element={<Contact/>}></Route>
</Routes>






</Box>)}
export default Content