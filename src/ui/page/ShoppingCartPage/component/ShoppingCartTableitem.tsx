import {IconButton, TableCell, TableRow} from "@mui/material";
import {CartItemDto} from "../../../../data/cartitem/CartItem.type.ts"
import QuantitySelector from "../../../component/QuantitySelector.tsx";
import {DeleteForever} from "@mui/icons-material";
import * as CartItemApi from "../../../../api/CartItemApi.ts"


type Props = {
  cartItemDto: CartItemDto,
  changeQuantity: (pid: number, quantity: number) => void,
  deleteCartItem: (pid: number) => void
}

export default function ShoppingCartTableitem({cartItemDto, changeQuantity}: Props) {

  // const [isQuantityUpdating, setIsQuantityUpdating] = useState<boolean>(false)
  // Traditional
  // const handleQtyMinusOne = async ()=>{
  //   if(cartItemDto.cartQuantity > 1){
  //     setIsQuantityUpdating(true)
  //     const responseData = await CartItemApi.patchCartItemQty(cartItemDto.pid,
  //       cartItemDto.cartQuantity - 1 );
  //     setIsQuantityUpdating(false)
  //     handleQuantityChange(cartItemDto.pid,responseData.cartQuantity)
  //   }
  // }

  const handleCartItemDelete = async () => {
    await CartItemApi.deleteCartItem(cartItemDto.pid)
  }

  // Qptimistic Approach
  const handleQtyMinusOne = async () => {
    if (cartItemDto.cartQuantity > 1) {
      const quantity = cartItemDto.cartQuantity - 1;
      changeQuantity(cartItemDto.pid, quantity)
      await CartItemApi.patchCartItemQty(cartItemDto.pid,
        quantity);
    }
  }

  const handleQtyPlusOne = async () => {
    if (cartItemDto.cartQuantity < cartItemDto.stock) {
      changeQuantity(cartItemDto.pid, cartItemDto.cartQuantity + 1)
      await CartItemApi.patchCartItemQty(cartItemDto.pid,
        cartItemDto.cartQuantity + 1);
    }
  }

  return (
    <TableRow>
      <TableCell>
        <img height="150" src={cartItemDto.imageUrl}/>
      </TableCell>
      <TableCell>{cartItemDto.productName}</TableCell>
      <TableCell>${cartItemDto.price.toLocaleString()}</TableCell>
      <TableCell>
        <QuantitySelector
          quantity={cartItemDto.cartQuantity}
          handleQtyMinus={handleQtyMinusOne}
          handleQtyPlus={handleQtyPlusOne}
        />
      </TableCell>
      <TableCell>${(cartItemDto.price * cartItemDto.cartQuantity).toLocaleString()}</TableCell>
      <TableCell>
        <IconButton color="error" onClick={handleCartItemDelete}> <DeleteForever/> </IconButton>
      </TableCell>
    </TableRow>
  )
}