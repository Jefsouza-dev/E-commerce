import { useContext } from "react";
import { BsCartPlus } from "react-icons/bs";

import { Link } from "react-router-dom";

import { IProduct } from "../../interfaces/products";
import { CartContext } from "../../contexts/CartContext";
import { formatedPrice } from "../../services/formatedPrice";
import products from "../../services/products";

import toast from "react-hot-toast";

const Home = () => {

  const { addItemCart } = useContext(CartContext);


  const handleAddCartItem = (product: IProduct) => {
    toast.success("Produto adicionado no carrinho", {
      style: {
        borderRadius: 10,
        backgroundColor: "black",
        color: "White",
      },
    });
    addItemCart(product);
  };

  return (
    <div>
      <main className="w-full max-w-7xl px-4 mx-auto ">
        <h1 className="font-bold text-2xl mb-4 mt-10 text-center">
          Produtos em alta
        </h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {products.map((product:IProduct) => {
            return (
              <section className="w-full mb-16" key={product.id}>
                <Link to={`/produto/${product.id}`}>
                  <img
                    className="w-full rounded-lg max-h-70 mb-2"
                    src={product.cover}
                  />
                  <p className="font-medium mt-1 mb-2">{product.title}</p>
                </Link>

                <div className="flex gap-3 items-center">
                  <strong className="text-zinc-700/90">
                    {formatedPrice(product.price)}
                  </strong>
                  <button
                    className="bg-zinc-900 p-1 rounded"
                    onClick={() => handleAddCartItem(product)}
                  >
                    <BsCartPlus size={20} color="#FFF" />
                  </button>
                </div>
              </section>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Home;
