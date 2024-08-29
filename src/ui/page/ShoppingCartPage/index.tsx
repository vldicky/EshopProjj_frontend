import TopNavbar from "../../component/TopNavbar.tsx";
import {Container} from "@mui/system";
import ShoppingCartTable from "./component/ShoppingCartTable.tsx";
import {Button, Stack, Typography} from "@mui/material";
import {CartItemDto} from "../../../data/cartitem/CartItem.type.ts";
import {useState, useEffect, useContext} from "react";
import LoadingContainer from "../ProductDetailPage/component/LoadingContainer.tsx";
import {NavigateFunction, useNavigate} from "react-router-dom";
import * as CartItemApi from "../../../api/CartItemApi.ts"
import {LoginUserContext} from "../../../context/LoginUserContext.ts";


export default function ShoppingCartPage(){

  const [cartItemDtoList,setCartItemDtoList] = useState<CartItemDto[]|undefined>(undefined)
  const navigate: NavigateFunction = useNavigate();
  const loginUser = useContext(LoginUserContext);
  // const [deleteCartItemSuccess, setDeleteCartItemSuccess] = useState<boolean>(false)

  const calTotal = (cartItemDtoList: CartItemDto[])=>{
    return cartItemDtoList.reduce((total,currentValue)=>(
      total + currentValue.cartQuantity* currentValue.price
    ),0);
  }

  const getUserCart = async () =>{
    try{
      setCartItemDtoList(undefined);
      const responseDataList = await CartItemApi.getUserCart();
      setCartItemDtoList(responseDataList);
    }catch(err){
      console.error(err)
      navigate("/error")
    }
  }

  const changeQuantity =(pid:number,quantity:number)=>{
    const updateDtoList = cartItemDtoList?.map((value:CartItemDto) =>{
      if (value.pid === pid){
        value.cartQuantity = quantity;
      }
      return value;
    })
    setCartItemDtoList(updateDtoList);
  }

  const deleteCartItem =(pid:number)=>{
    const updateDtoList = cartItemDtoList?.filter((value:CartItemDto) =>(
        value.pid !== pid
    ))
    setCartItemDtoList(updateDtoList);
  }

  const renderCartItemContainer =()=>{
    if (cartItemDtoList) {
      return (
        <>
          <ShoppingCartTable cartItemDtoList={cartItemDtoList} changeQuantity={changeQuantity} deleteCartItem={deleteCartItem}/>
          <Stack direction="row" justifyContent="space-between" sx={{mt: 2, mb: 3}}>
            <Typography>Total: ${calTotal(cartItemDtoList).toLocaleString()}</Typography>
            <Button> Pay the bill please!</Button>
          </Stack>
        </>
      )
    }else{
      <LoadingContainer/>
    }
  }

  useEffect(()=> {
    if(loginUser){
      getUserCart()
    }else if(loginUser===null){
      navigate("/login")
    }
  },[loginUser])

  // useEffect(()=>{
  //   setDeleteCartItemSuccess(true)
  // },[])

  return(
    <>
    <TopNavbar/>
      <Container sx={{my:2}}>
        {
          renderCartItemContainer()
        }
      </Container>
    </>
  )
}