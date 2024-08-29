import {useState,useEffect} from "react";
import * as ProductApi from "../../../api/ProductApi.ts";
import LoadingContainer from "./component/LoadingContainer.tsx";
import {Box, Container} from "@mui/system";
import {GetAllProductDtoList} from '../../../data/product/Product.type.ts';
import {NavigateFunction, useNavigate} from "react-router-dom";
import TopNavbar from '../../component/TopNavbar.tsx';
import GetAllProductGrid from "./component/GetAllProductGrid.tsx";
import CategoryTopMid from "../CategoryTopMid";


export default function ProductListingPage(){

  const [getAllProductDto, setGetAllProductDto] = useState<GetAllProductDtoList[]|undefined>(undefined);

  const navigate: NavigateFunction = useNavigate();

  const getGetAllProduct = async()=>{
    try {
      const responseData = await ProductApi.getGetAllProduct();
      setGetAllProductDto(responseData);
    }catch(err){
      console.error(err)
      navigate("/error")
    }
  }


  useEffect(()=>{
    getGetAllProduct();
    document.title ="T-time shop-ProductListingPage";
  },[]);


  return (

      <Container>
        <TopNavbar/>
        <Box
          sx={{
            width:"100%",
            backgroundImage:`url("https://i.pinimg.com/736x/e1/f4/36/e1f43661d0588d07ba29fcfe9e8868bd.jpg")`,
            backgroundRepeat:"no-repeat",
            backgroundPosition:"Top",
            backgroundSize:"contain"
          }}
        >
        <CategoryTopMid/>
        {
          getAllProductDto
            ? <GetAllProductGrid getAllProductDto={getAllProductDto}/>
            : <LoadingContainer/>
        }
        </Box>
      </Container>
  )
}