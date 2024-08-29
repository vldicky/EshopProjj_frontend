import axios from "axios";
import * as FirebaseAuthService from "../authService/FirebaseAuthService.ts"
import {CartItemDto} from "../../src/data/cartitem/CartItem.type.ts";


export const getUserCart= async () => {

  // const baseUrl: string = "http://ec2-18-140-1-80.ap-southeast-1.compute.amazonaws.com:8080"`${baseUrl}/public/product`
  const response = await axios.get<CartItemDto[]>("http://localhost:8080/cart",
    await FirebaseAuthService.getAuthConfig()
  )
  return response.data;
}

export const putCartItem = async (pid:number, quantity:number)=>{
  const response = await axios.put<CartItemDto>(
    `http://localhost:8080/cart/${pid}/${quantity}`,
    null,
    await FirebaseAuthService.getAuthConfig()
    )
  return response.data;
}

export const patchCartItemQty = async (pid:number, quantity:number)=>{
  console.log(pid, quantity);
  const response = await axios.patch<CartItemDto>(
    `http://localhost:8080/cart/${pid}/${quantity}`,
    null,
    await FirebaseAuthService.getAuthConfig()
  )
  return response.data;
}

export const deleteCartItem = async (pid:number)=>{
  const response = await axios.delete(
    `http://localhost:8080/cart/${pid}`,
    await FirebaseAuthService.getAuthConfig()
  )
  return response.data;
}