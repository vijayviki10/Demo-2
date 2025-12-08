import { Box, Button, Typography } from "@mui/material";
import { useContext } from "react";
import { Context } from "./Context";

function Counter() {
  const { count, setCount } = useContext(Context);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", gap: "24px", margin: "50px" }}>
        <Button variant="contained" onClick={handleDecrement}>decrement</Button>
        <Typography>{count}</Typography>
        <Button variant="contained" onClick={handleIncrement}>increment</Button>
      </Box>
    </>
  );
}

export default Counter;
