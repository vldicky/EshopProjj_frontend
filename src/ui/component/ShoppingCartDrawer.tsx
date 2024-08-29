import {Button, Divider, Drawer, Typography} from "@mui/material";
import {Container} from "@mui/system";
import {useState, useEffect} from "react";
import LoadingContainer from "../page/ProductDetailPage/component/LoadingContainer.tsx";
import {CartItemDto} from "../../data/cartitem/CartItem.type.ts";
import * as CartItemApi from "../../api/CartItemApi.ts";
import ShoppingCartDraweritem from "./ShoppingCartDraweritem.tsx";
import {NavigateFunction, useNavigate} from "react-router-dom";

type Props={
  open:boolean,
  closeDrawer:()=>void,
}

export default function ShoppingCartDrawer({open, closeDrawer}:Props){

  const [cartItemDtoList,setCartItemDtoList] = useState<CartItemDto[]|undefined>(undefined);
  const navigate:NavigateFunction = useNavigate();
  const getUserCart = async () =>{
    setCartItemDtoList(undefined);
    const responseDataList = await CartItemApi.getUserCart();
    setCartItemDtoList(responseDataList);
  }

  const renderDrawerItem = () => {
    if (cartItemDtoList) {
      if (cartItemDtoList.length > 0) {
        return (
          cartItemDtoList.map((value) => (
            <>
              <ShoppingCartDraweritem cartItemDto={value}/>
              <Divider sx={{my: 2}}></Divider>
            </>
          ))
        )
      } else {
        return (
          <Typography>仲諗當買咗,行動啦!</Typography>
        )
      }
    } else{
      return (<LoadingContainer/>)
    }
  }

  useEffect(()=>{
    document.title = 'T-time: ShoppingCart'
    }
  )



  return(
    <Drawer anchor="right" open={open} onClose={closeDrawer} onTransitionEnter={getUserCart}>
      <Button onClick={()=>(navigate('/shoppingcart'))}>
        買得喇ready!
      </Button>
      <Container>
        <Divider sx={{my:2}}/>
        {
          renderDrawerItem()
        }
      </Container>
    </Drawer>
  )
}