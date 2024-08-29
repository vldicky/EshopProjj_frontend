// import {Box} from "@mui/system";
import {Stack, Typography} from "@mui/material";
import {CartItemDto} from "../../data/cartitem/CartItem.type.ts"

type Props={
  cartItemDto: CartItemDto
}

export default function ShoppingCartDraweritem({cartItemDto}:Props){

  return(
    <>
      <Stack direction = "column" alignItems="center">
        {/*<Box*/}
        {/*  style={{*/}
        {/*    width: "110px",*/}
        {/*    height: "120px",*/}
        {/*    alignItems:"center"*/}
        {/*  }}*/}
        {/*>*/}
          <img width="42%" src={cartItemDto.imageUrl}/>
        {/*</Box>*/}
        <Typography variant="subtitle2" width="260">{cartItemDto.productName}</Typography>
        <Typography variant="caption">{cartItemDto.price.toLocaleString()}</Typography>
        <Typography variant="caption">Quantity:{cartItemDto.cartQuantity}</Typography>
      </Stack>
    </>
  )
}