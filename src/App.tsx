import { useState } from "react";
import { useQuery } from "react-query";
// Components
import { Badge, Drawer, Grid, LinearProgress } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import { CartItemType, getProducts } from "./apiRequests";
import Item from "./Item/Item";
import { Wrapper } from "./App.styles";

function App() {
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    "products",
    getProducts
  );
  console.log("App data:\n", data);
  const getTotalItems = () => null;
  const handleAddToCard = (clickedItem: CartItemType) => null;
  const handleRemoveFromCart = () => null;

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong</div>;

  return (
    <Wrapper>
      <Grid container spacing={3}>
        {data?.map((item) => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCard} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default App;
