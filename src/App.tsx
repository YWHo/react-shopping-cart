import { useState } from "react";
import { useQuery } from "react-query";
// Components
import { Badge, Drawer, Grid, LinearProgress } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import { Wrapper } from "./App.styles";
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

async function getProducts(): Promise<CartItemType[]> {
  const response = await fetch("https://fakestoreapi.com/products");
  return await response.json();
}

function App() {
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    "products",
    getProducts
  );
  console.log(data);
  return <div className="App">Start</div>;
}

export default App;
