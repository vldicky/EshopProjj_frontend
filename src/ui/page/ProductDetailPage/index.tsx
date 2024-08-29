import {Container} from "@mui/system";
import TopNavbar from "../../component/TopNavbar.tsx";
import {useState, useEffect} from "react";
import {ProductDetailDto} from "../../../data/product/Product.type.ts";
import * as ProductApi from "../../../api/ProductApi.ts";
import {NavigateFunction, useNavigate, useParams} from "react-router-dom";
import LoadingContainer from "./component/LoadingContainer.tsx";
import ProductDetailPaper from "./component/ProductDetailPaper.tsx";


type Params={
  productId: string;
}

export default function ProductDetailPage(){

  const [productDetailDto, setProductDetailDto] = useState<ProductDetailDto|undefined>(undefined);
  const navigate: NavigateFunction = useNavigate();
  const params: Readonly<Partial<Params>> = useParams<Params>();  //The use of ProductDetail pass by Params

  const getProductByPid = async()=>{
    try {
      if(params.productId) {
        const responseData :ProductDetailDto= await ProductApi.getProductByPid(params.productId);
        setProductDetailDto(responseData);
        document.title = responseData.productname
      }
    }catch(err){
      console.error(err)
      navigate("/error")
    }
  }

  useEffect(()=>{
    getProductByPid();
    document.title = "T-time shop-ProductDetailPage";
  },[]);

  return(
    <>
      <TopNavbar/>
        <Container>
        {
          productDetailDto
          ? <ProductDetailPaper productDetailDto={productDetailDto}/>
            : <LoadingContainer/>
        }
        </Container>

    </>
  )
}