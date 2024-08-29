export interface GetAllProductDtoList {
  pid:         number;
  productname: string;
  image_url:    string;
  price:       number;
  hasStock:    boolean;
}

export interface ProductDetailDto {
  pid:         number;
  productname: string;
  description: string;
  image_url:    string;
  price:       number;
  stock:       number;
}