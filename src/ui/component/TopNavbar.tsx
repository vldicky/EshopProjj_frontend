import {AppBar, Button, CircularProgress, IconButton, Toolbar, Typography} from "@mui/material";
import {useState} from "react";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import {useContext} from "react";
import {LoginUserContext} from "../../context/LoginUserContext.ts";
import * as FirebaseAuthService from "../../authService/FirebaseAuthService.ts"
import {NavigateFunction, useNavigate} from "react-router-dom";
import ShoppingCartDrawer from "./ShoppingCartDrawer.tsx";
import ShoppingBagTwoToneIcon from "@mui/icons-material/ShoppingBagTwoTone";
import FilterResultDrawer from "../page/FilterResultTablePage/component/FilterResultDrawer.tsx";



export default function TopNavbar(){
  const loginUser = useContext(LoginUserContext);
  const [drawerOpen,setDrawerOpen] = useState<boolean>(false)
  const [productDrawerOpen, setProductDrawerOpen] = useState<boolean>(false)
  const navigate: NavigateFunction = useNavigate();

  const closeDrawer=()=>{
    setDrawerOpen(false)
  }

  const closeProductDrawer=()=>{
    setProductDrawerOpen(false)
  }

  const renderLoginContainer=()=>{
    if(loginUser){
      return(
        <>
          <IconButton color="info">
            <ShoppingBagTwoToneIcon onClick={()=> {setDrawerOpen(true)}}
            />
          </IconButton>
          <Typography variant="body1">{loginUser.email}</Typography>
          <Button variant="contained" size="small" color="primary" sx={{margin:2}}
                  onClick={()=>
                  {FirebaseAuthService.handleSignOut()}}
          >Log Out</Button>
        </>
      )
      }else if(loginUser===null){
        return <IconButton color="inherit">
                <AccountCircleSharpIcon onClick={()=>{navigate('/login')}}/>
                </IconButton>
      }else{
      return( <CircularProgress color="inherit"/>);
    }

  }


  return(
    <>
      <AppBar position="static" color="warning">
        <Toolbar>   {/*TopNavbar*/}
          <Typography variant="caption" sx={{flexGrow: 1, whitespace:"pre-line"}}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOUljPopBuhgQnbErXC4oVfl6zq5YEPtgFhiB1Bo3cxFBtAHVH"
              width="70"
              height="40"
              // className="d-inline-block align-left"
              alt="Eshop logo"
              style={{margin:3}}
              onClick ={()=>{navigate('/')}}
            />
              Shop EeX Deliver
          </Typography>
          <Button color="inherit" size="small" sx={{margin:3}} onClick={()=> {setProductDrawerOpen(true)}}>
            Watches & Mobile</Button>
          <Button color="inherit" size="small" sx={{margin:3}} onClick={()=> {setProductDrawerOpen(true)}}>
            Grocery</Button>
          <Button color="inherit" size="small" sx={{margin:3}} onClick={()=> {setProductDrawerOpen(true)}}>
            Live Dining</Button>
          <Button color="inherit" size="small" sx={{margin:3}} onClick={()=> {setProductDrawerOpen(true)}}>
            Accs & Stuff</Button>
          {renderLoginContainer()}
        </Toolbar>
      </AppBar>
      <ShoppingCartDrawer open={drawerOpen} closeDrawer={closeDrawer}/>
      <FilterResultDrawer openProductDrawer={productDrawerOpen} closeProductDrawer={closeProductDrawer}/>
    </>
  )

}