// import * as React from "react";
// import * as ReactDOM from "react-dom";
import {createBrowserRouter} from "react-router-dom";
import ProductListingPage from "../../ui/page/ProductListingPage";
import ErrorDisplayPage from "../../ui/page/ErrorPage/index.tsx";
import LoginPage from "../../ui/page/LoginPage";
import ProductDetailPage from "../../ui/page/ProductDetailPage/index.tsx";
import ShoppingCartPage from "../../ui/page/ShoppingCartPage/index.tsx";
import CheckoutPage from "../../ui/page/CheckoutPage/index.tsx";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductListingPage/>,
    errorElement:<ErrorDisplayPage/>
  },
  {
    path: "/product/:productId",
    element: <ProductDetailPage/>
  },
  {
    path: "/product/:productId/:userId",
    element: <ProductDetailPage/>
  },
  {
    path: "/shoppingcart",
    element: <ShoppingCartPage/>
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/checkout/:transactionId",
    element: <CheckoutPage/>
  },
  // {
  //   path: "/thankyou",
  //   element: <ThankYou/>
  // }
  {
    path: "/error",
    element: <ErrorDisplayPage/>
  }
])
