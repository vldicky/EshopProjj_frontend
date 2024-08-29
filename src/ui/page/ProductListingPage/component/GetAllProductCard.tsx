import {GetAllProductDtoList} from "../../../../data/product/Product.type.ts";
import {Button, Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import {NavigateFunction, useNavigate} from "react-router-dom";
// import QuantitySelector from "../../../component/QuantitySelector.tsx";


type Props={
  getAllProductDto: GetAllProductDtoList
}

export default function GetAllProductCard({getAllProductDto}:Props){

  const navigate: NavigateFunction = useNavigate();


  return (

      <Card sx={{ MaxWidth: 350, MaxHeight: 350}} onClick={()=>{navigate(`/product/${getAllProductDto.pid}`)}}>
        <CardActionArea>
          <CardMedia
            component="img"
            width = "65%"
            height = "360"
            image = {getAllProductDto.image_url}
            alt= {getAllProductDto.productname}
          />
          {/*<Box d-flex*/}
          {/*  sx={{*/}
          {/*    width:"60%",*/}
          {/*    height:"200",*/}
          {/*    backgroundImage:`url(${getAllProductDto.image_url})`,*/}
          {/*    backgroundRepeat:"no-repeat",*/}
          {/*    backgroundPosition:"Top",*/}
          {/*    backgroundSize:"contain"*/}
          {/*  }}*/}
          {/*>*/}
          {/*  /!*{getAllProductDto.productname}*!/*/}
          {/*</Box>*/}
          <CardContent>
            <Typography gutterBottom variant='subtitle1'>{getAllProductDto.productname}</Typography>
            <Typography variant="body2" color="textSecondary">
              <s>{"update"}</s> ${getAllProductDto.price.toLocaleString()}
            </Typography><br/>
             {getAllProductDto.hasStock ? "有貨" : "冇貨"}
            {/*<QuantitySelector */}
            {/*  quantity={quantity}*/}
            {/*  handleQtyPlus={handleQtyPlus}*/}
            {/*  handleQtyMinus={handleQtyMinus}*/}
            {/*/>*/}
            <Button sx={{margin:3}} size="small" variant="contained" color="primary">Go to Cart</Button>
          </CardContent>
        </CardActionArea>
      </Card>
  )
}