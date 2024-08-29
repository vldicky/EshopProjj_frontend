import {Button, Divider, Paper, Stack, Typography} from "@mui/material";
import {ProductDetailDto} from "../../../../data/product/Product.type.ts";
import QuantitySelector from "../../../component/QuantitySelector.tsx";
import {Box} from "@mui/system";
import {useContext, useState} from "react";
import * as CartItemApi from "../../../../api/CartItemApi.ts"
import {NavigateFunction,useNavigate} from "react-router-dom";
import {LoginUserContext} from "../../../../context/LoginUserContext.ts";
import AddToCartSuccessSnackBar from "../../../page/CartDetailPage/AddToCartSuccessSnackBar.tsx";


type Props={
  productDetailDto: ProductDetailDto
}

export default function ProductDetailPaper({productDetailDto}:Props){

  const [quantity,setQuantity] = useState<number>(1)
  const navigate: NavigateFunction = useNavigate()
  const loginUser = useContext(LoginUserContext)
  const [isAddingToCart,setIsAddingToCart] = useState<boolean>(false)
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false)

  const handleQtyMinus=()=>{
    if(quantity > 1){
      setQuantity((prevState)=> (
        --prevState
      ))
    }
  }

  const handleQtyPlus=()=>{
    if(quantity < productDetailDto.stock){
      setQuantity( (prevState)=>(
        ++prevState
      ))
    }
  }

  const handleAddToCart = async()=>{
    if(loginUser){
      try{
        setIsAddingToCart(true);
        await CartItemApi.putCartItem(productDetailDto.pid, quantity)
        setSnackbarOpen(true);
        setIsAddingToCart(false);
      }catch(err){
        console.error(err)
      }
    }else if(loginUser===null) {
      navigate("/login")
    }
  }

  const handleSnackbarClose =()=>{
    setSnackbarOpen(false)
  }

  const renderAddToCartbutton = () =>{
    if(productDetailDto.stock>0){
      return(
        <Stack direction="row">
          <QuantitySelector
            quantity={quantity}
            handleQtyPlus={handleQtyPlus}
            handleQtyMinus={handleQtyMinus}
          />
          <Button size="small" color="warning" onClick={handleAddToCart} disabled={isAddingToCart}>
            Add to Cart</Button>
        </Stack>
      )
    }else{
      <Typography variant="caption" color="error">Sold Out!賣光啦</Typography>
    }
  }

  return(
    <>
      <Paper
        sx={{
          mt : 4,
          p : 3,
        }}
      >
        <Stack
          direction={{
          md: "row",
          sm: "column"
          }}
          divider={<Divider orientation="vertical" sx={{mb:4}} flexItem/>}
          justifyContent="space-evenly"
          alignItems="center"
        >
        <Box
          style={{
            width:"25%",
            height:"260"
            // backgroundImage:`url(${productDetailDto.image_url})`,
            // backgroundRepeat:"no-repeat",
            // backgroundPosition:"center",
            // backgroundSize:"contain"
          }}
        >
          <img width="90%" height="230" src = {productDetailDto.image_url}/>
        </Box>
         <Box sx={{margin:4}}>
           <Typography variant='subtitle1'>{productDetailDto.productname}</Typography>
           <Typography variant='subtitle2' sx={{whitespace:"pre-line"}}>
             {productDetailDto.description}
           </Typography>
           <Typography variant="body2" color="textSecondary" sx={{whitespace:"pre-line"}}><br/>
             Price: ${productDetailDto.price.toLocaleString()}
           </Typography>
           {renderAddToCartbutton()}
         </Box>
        </Stack>
      </Paper>
      <AddToCartSuccessSnackBar open={snackbarOpen} handleClose={handleSnackbarClose}/>
    </>
  )
}