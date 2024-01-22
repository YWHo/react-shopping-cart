import { useState } from "react";
import { useQuery } from "react-query";
// Components
import { Badge, Drawer, Grid, LinearProgress } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import { CartItemType, getProducts } from "./apiRequests";
import Item from "./Item/Item";
import { Wrapper, StyledButton } from "./App.styles";

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    "products",
    getProducts
  );
  console.log("App data:\n", data);
  const getTotalItems = (items: CartItemType[]) =>
    items.reduce(
      (acc: number, item) => acc + (item.amount ? item.amount : 0),
      0
    );
  const handleAddToCard = (clickedItem: CartItemType) => null;
  const handleRemoveFromCart = () => null;

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong</div>;

  return (
    <Wrapper>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        Cart goes here
      </Drawer>
      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge
          badgeContent={getTotalItems(cartItems)}
          color="error"
          overlap="rectangular"
        >
          <AddShoppingCart />
        </Badge>
      </StyledButton>
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
