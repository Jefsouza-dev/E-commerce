import { useContext } from "react";
import { useParams } from "react-router-dom";
import { IProduct } from "../../interfaces/products";
import { formatedPrice } from "../../services/formatedPrice";
import { BsCartPlus } from "react-icons/bs";
import { CartContext } from "../../contexts/CartContext";
import { toast } from "react-hot-toast";
import products from "../../services/products";

const Details = () => {
const { addItemCart } = useContext(CartContext);
const { id } = useParams();
const productId = id? parseInt(id): ''

const product = products.find((product: IProduct) => product.id === productId);

function handleAddItem(product: IProduct) {
    addItemCart(product);

    toast.success("Produto adicionado no carrinho", {
      style: {
        borderRadius: 10,
        backgroundColor: "black",
        color: "White",
      },
    });
  }

  return (
    <div>
      <main className="w-full max-w-7xl px-4 mx-auto mt-28">
        {product && (
          <section className="w-full">
            <div className="flex flex-col lg:flex-row">
              <img
                className="flex-1 w-full max-h-72 object-contain"
                src={product.cover}
              />

              <div className="flex-1">
                <h2 className="font-bold text-2xl mt-4 mb-2">
                  {product?.title}
                </h2>
                <p className="my-4">{product.description}</p>
                <strong className="text-zinc-700/90 text-x1">
                  {formatedPrice(product.price)}
                </strong>
                <button
                  onClick={() => handleAddItem(product)}
                  className="bg-zinc-900 p-1 rounded ml-3"
                >
                  <BsCartPlus size={20} color="#FFF" />
                </button>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default Details;
