import { Divider, Drawer, TextField, Typography} from "@mui/material";
import {Container} from "@mui/system";
import {useEffect, useState} from "react";
import LoadingContainer from "../../../page/ProductDetailPage/component/LoadingContainer.tsx";
import {ProductDetailDto} from "../../../../data/productfilter/ProductFilter.type.ts";
// import * as ProductApi from "../../api/ProductApi.ts";
import FilterResultDrawerCard from "./FilterResultDrawerCard.tsx";
import * as mockData from "../../../../assets/responseProd.json"


type Props={
  openProductDrawer:boolean,
  closeProductDrawer:()=>void,
}


export default function FilterResultDrawer({openProductDrawer, closeProductDrawer}:Props){

  const [productDetailDtoList,setProductDetailDtoList] = useState<ProductDetailDto[]|undefined>(undefined);
  // const navigate:NavigateFunction = useNavigate();
  const [count, setCount] = useState<number>(0)

  const handleProductFilter = (catName:string)=> {
    const updateDtoList = productDetailDtoList?.filter((value:ProductDetailDto) =>{
      if(value.productname!==null && value.productname.includes(catName)){
        return value.pid
      }}
    )
    setProductDetailDtoList(updateDtoList);
  }

  const renderDrawerItem = () => {
    if (productDetailDtoList) {
      if (productDetailDtoList.length > 0) {
        return (
            productDetailDtoList.map((value) => (
              <>
                <FilterResultDrawerCard productDetailDto={value} handleProductFilter={handleProductFilter}/>
                <Divider sx={{my: 1}}></Divider>
              </>
            ))
        )
      } else {
        return (
          <Typography>No Filter Result未搵到再試試啦!</Typography>
        )
      }
    } else{
      return (<LoadingContainer/>)
    }
  }

  useEffect(()=>(
    setProductDetailDtoList(mockData)
  ),[productDetailDtoList])
  //
  // useEffect(()=>(
  //   // setCount(count+1)
  // ),[count])

  return(
    <Drawer anchor="left" open={openProductDrawer} onClose={closeProductDrawer}>
      <TextField>
        Filter Result(setCount)
      </TextField>
      <Container>
        <Divider sx={{my:2}}/>
        {
          renderDrawerItem()
        }
      </Container>
    </Drawer>
  )
}