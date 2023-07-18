import { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../../contexts/CartContext";

import { formatedPrice } from "../../services/formatedPrice";

const Cart = () => {
  const { cart, total, addItemCart, removeItemCart } = useContext(CartContext);

  return (
    <div className="w-full max-w-7xl mx-auto">
      <h1 className="font-medium text-2xl text-center my-4">Meu Carrinho</h1>

      {cart.length === 0 && (
        <div className="flex flex-col items-center justify-center">
          <p className="font-medium"> SEU CARRINHO ESTÁ VAZIO! </p>
          <Link
            to="/"
            className="bg-slate-600 my-3 p-2 px-3 text-white font-medium rounded"
          >
            Ver Produtos
          </Link>
        </div>
      )}

      {cart.map((item) => {
        return (
          <section
            key={item.id}
            className="flex items-center justify-between border-b-2 border-gray-300"
          >
            <img className="w-28" src={item.cover} />

            <strong>{formatedPrice(item.price)}</strong>

            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => removeItemCart(item)}
                className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center"
              >
                -
              </button>
              {item.amount}
              <button
                onClick={() => addItemCart(item)}
                className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center"
              >
                +
              </button>
            </div>

            <strong className="float-right">
              SubTotal: {formatedPrice(item.total)}
            </strong>
          </section>
        );
      })}

      {cart.length > 0 && <p className="font-bold mt-4">Total: {total}</p>}
    </div>
  );
};

export default Cart;
