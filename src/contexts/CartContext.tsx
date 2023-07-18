import { createContext, ReactNode, useState } from "react";

import { IProduct } from "../interfaces/products";

import { formatedPrice } from "../services/formatedPrice";

interface ICartProps {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
  amount: number;
  total: number;
}

interface IcartContext {
  cart: ICartProps[];
  cartAmount: number;
  addItemCart: (newItem: IProduct) => void;
  removeItemCart: (product: ICartProps) => void;
  total: string;
}

export const CartContext = createContext({} as IcartContext);

function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<ICartProps[]>([]);
  const [total, setTotal] = useState("");

  function addItemCart(newItem: IProduct) {
    // Se não encontrar, retorna -1
    const indexItem = cart.findIndex((item) => item.id === newItem.id);

    if (indexItem !== -1) {
      let cartList = cart;

      cartList[indexItem].amount = cartList[indexItem].amount + 1;
      cartList[indexItem].total =
        cartList[indexItem].amount * cartList[indexItem].price;

      setCart(cartList);
      totalResult(cartList);

      return;
    }

    let data = {
      ...newItem,
      amount: 1,
      total: newItem.price,
    };

    setCart((previousProduct) => [...previousProduct, data]);
    totalResult([...cart, data]);
  }

  function removeItemCart(product: ICartProps) {
    const indexItem = cart.findIndex((item) => item.id === product.id);

    if (cart[indexItem]?.amount > 1) {
      let cartList = cart;

      cartList[indexItem].amount = cartList[indexItem].amount - 1;
      cartList[indexItem].total =
        cartList[indexItem].total - cartList[indexItem].price;

      setCart(cartList);
      totalResult(cartList);
      return;
    }

    const removeItem = cart.filter((item) => item.id !== product.id);
    setCart(removeItem);
    totalResult(removeItem);
  }

  function totalResult(items: ICartProps[]) {
    let myCart = items;
    let result = myCart.reduce((acc, obj) => {
      return acc + obj.total;
    }, 0);

    let resultFormated = formatedPrice(result);

    setTotal(resultFormated);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        cartAmount: cart.length,
        addItemCart,
        removeItemCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
