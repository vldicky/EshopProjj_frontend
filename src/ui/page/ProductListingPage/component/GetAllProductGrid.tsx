// import {ThemeProvider} from "@mui/material/styles";
import GetAllProductCard from "./GetAllProductCard.tsx";
import {GetAllProductDtoList} from "../../../../data/product/Product.type.ts";
import Grid from "@mui/material/Unstable_Grid2/Grid2";



type Props={
  getAllProductDto: GetAllProductDtoList[]
}

export default function GetAllProductGrid({getAllProductDto}:Props){
  return(

      <Grid container spacing={3} mt={2}>
        {
          getAllProductDto.map((value:GetAllProductDtoList)=>(
            // Array.from({length:10}).map(()=>(
           <Grid key={value.pid} md={4} sm={6} xs={12} display="flex" justifyContent="center" alignItems="center">
             <GetAllProductCard  getAllProductDto={value}/>
           </Grid>
          ))
        }
      </Grid>

  )
}