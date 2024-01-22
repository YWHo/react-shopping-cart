import CartItem from "../CartItem/CartItem";
import { CartItemType } from "../apiRequests";
import { Wrapper } from "./Cart.Styles";

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

function Cart({ cartItems, addToCart, removeFromCart }: Props) {
  return (
    <Wrapper>
      <h2>Your shopping Cart</h2>
      {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
    </Wrapper>
  );
}

function calculateTotal(items: CartItemType[]) {
  return items.reduce((acc: number, item) => acc + item.amount * item.price, 0);
}

export default Cart;
