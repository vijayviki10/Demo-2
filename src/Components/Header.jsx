import { AppBar, Toolbar ,Button ,Typography, Box, Badge } from "@mui/material";
import { Card, FloatButton } from "antd";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import CheckroomIcon from '@mui/icons-material/Checkroom';
import { DingtalkOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";


let Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    }
  },
}));


function DrawerAppBar (){
return(<> 



<AppBar style={{backgroundColor : "#000000" , position :"fixed"}} >
<Toolbar style={{ display :"flex", justifyContent : "space-between"}}>

<Link to="/" style={{ textDecoration: "none",color: "white",  cursor: "pointer" }}>
<Typography variant="h5" sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}>
<CheckroomIcon sx={{ verticalAlign: "middle", mr: 1 }} /> Jungle Box <DingtalkOutlined />
</Typography>
</Link>


<Box style={{display :"flex", width : "320px",justifyContent : "space-between", position: "fixed",left:"1180px"}}>
  <Button component={Link} to="/cart" style={{backgroundColor : "white" , color:"black"}} endIcon={<ShoppingCartIcon />}>Cart</Button>
  <Button component={Link} to="/account" style={{backgroundColor : "white" , color:"black"}} endIcon={<AccountCircleIcon />}>Account</Button>
  <Button component={Link} to="/contact" style={{backgroundColor : "white" , color:"black"}} endIcon={<ContactMailIcon />}>Contact</Button>
</Box>

<Search style={{right:"710px"}}>
<SearchIconWrapper>
<SearchIcon/>
</SearchIconWrapper>
<StyledInputBase placeholder="Search…"inputProps={{ 'aria-label': 'search' }}/>
</Search>

</Toolbar>
</AppBar>


<FloatButton.BackTop/>

</>)} 

export default DrawerAppBar


