import { Box, Button, TextField, Typography } from "@mui/material";
import Counter from "./Counter";
import { useState } from "react";

function Cart (){

  let [result,setResult]=useState(0)

  async function submit (){

  let url = `http://localhost:3000/sum?a=${values.firstValue}&b=${values.secondValue}`;
     
  const response = await fetch(url)

  const resultFromBackend = await response.text()

  setResult(resultFromBackend)}
 
  let [values, setValues]=useState({firstValue:0,secondValue:0});

  function handleChange(e){

    if(e.target.id == "first"){
    values.firstValue=e.target.value
    setValues({ ... values})
    }else{
    values.secondValue=e.target.value
    setValues({ ... values})
    }}
 
  return(<>

      <h1>Cart</h1>
      <p>You clicked Cart</p>
      <Counter/>
      <TextField id="first" value={values. firstValue} onChange={handleChange}/>
      <TextField value={values.secondValue} onChange={handleChange}/>
      <Button onClick={submit} variant="contained">CLICK</Button>
      <Typography>Add{result}</Typography>

      

    </>)
}export default Cart
