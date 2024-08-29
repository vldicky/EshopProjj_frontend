import {ProductDetailDto} from "../../../../data/productfilter/ProductFilter.type.ts";
import {Button, Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import {NavigateFunction, useNavigate} from "react-router-dom";


type Props={
  productDetailDto: ProductDetailDto,
  handleProductFilter:(catName:string)=>void
}

export default function FilterResultDrawerCard({productDetailDto, handleProductFilter}:Props){

  const navigate: NavigateFunction = useNavigate();

  return (

    <Card sx={{ MaxWidth: 125 }} onClick={()=>{navigate(`/product/${handleProductFilter}`)}}>
      <CardActionArea>
        <CardMedia
          component="img"
          width = "65%"
          height= "120vh"
          image = {productDetailDto.image_url}
          alt= {productDetailDto.productname}
        />
        <CardContent>
          <Typography gutterBottom variant='subtitle1'>{productDetailDto.productname}</Typography>
          <Typography variant="body2" color="textSecondary">
            <s>{"update"}</s> ${productDetailDto.price.toLocaleString()}
          </Typography><br/>
          <Button sx={{margin:2}} size="small" variant="contained" color="primary">Go to Cart</Button>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}