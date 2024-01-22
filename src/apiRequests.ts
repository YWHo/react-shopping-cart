import mockProduct from "./mockData/mockProduct";
const HOST = process.env.REACT_APP_REMOTE_HOST;

export type CartItemType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
  image: string;
  amount: number;
};

export async function getProducts(): Promise<CartItemType[]> {
  try {
    const fullPath = `${HOST}/products`;
    const response = await fetch(`${fullPath}`);
    return await response.json();
  } catch (err) {
    // Use Mock data if the remote server is not working
    return mockProduct().map((item) => ({ ...item, amount: 0 }));
  }
}
