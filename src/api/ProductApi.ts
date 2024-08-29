import axios from "axios";
import {GetAllProductDtoList, ProductDetailDto} from "../data/product/Product.type.ts";

export const getGetAllProduct= async () => {

    // const baseUrl: string = "http://ec2-18-140-1-80.ap-southeast-1.compute.amazonaws.com:8080"`${baseUrl}/public/product`
    const response = await axios.get<GetAllProductDtoList[]>("http://localhost:8080/public/product");
    return response.data;
    //
}

export const getProductByPid= async (pid:string)=>{
  const response = await axios.get<ProductDetailDto>(`http://localhost:8080/public/product/${pid}`);
  return response.data;
}