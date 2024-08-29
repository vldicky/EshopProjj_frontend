import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import ShoppingCartTableitem from "./ShoppingCartTableitem.tsx";
import {CartItemDto} from "../../../../data/cartitem/CartItem.type.ts"

type Props={
  cartItemDtoList: CartItemDto[],
  changeQuantity:(pid:number,quantity:number)=>void,
  deleteCartItem: (pid:number)=>void
}

export default function ShoppingCartTable({cartItemDtoList,changeQuantity,deleteCartItem}:Props){

  return(
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product Image</TableCell>
            <TableCell>Product Name</TableCell>
            <TableCell>Unit Price</TableCell>
            <TableCell>Quantity-Selector</TableCell>
            <TableCell>Sub-Total</TableCell>
            <TableCell>Erase</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            cartItemDtoList.map((value)=>(
            <ShoppingCartTableitem key={value.pid} cartItemDto={value}
                                   changeQuantity={changeQuantity}
                                   deleteCartItem={deleteCartItem}/>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>

  )
}