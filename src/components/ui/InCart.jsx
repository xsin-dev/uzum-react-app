import useAppContext from "../../hooks/useAppContext";
import { AiFillShopping } from "react-icons/ai";

const InCart = ({product, buttonText="Savatchaga"}) => {
  const { setCart, cart } = useAppContext();

  const inCart = cart?.find((p) => p.id === product.id);

  const handleAddToCart = () => {
    if (inCart) {
      const newCartData = cart.map((p) => {
        if (p.id === product.id) {
          return {
            ...p,
            count: p.count + 1,
          };
        } else return p;
      });
      setCart(newCartData);
    } else {
      setCart([...cart, { ...product, count: 1 }]);
    }
  };

  const handleDecrement = () => {
    if (inCart.count === 1) {
      const newData = cart.filter((p) => p.id !== product.id);
      setCart(newData);
    } else {
      const newCartData = cart.map((p) => {
        if (p.id === product.id) {
          return {
            ...p,
            count: p.count - 1,
          };
        } else return p;
      });
      setCart(newCartData);
    }
  };
  return (
    <div className="in-cart__wrapper">
      {!inCart && (
        <button
          onClick={handleAddToCart}
          className="products__card-to-cart-btn"
        >
          <AiFillShopping size={22} />
          {buttonText}
        </button>
      )}
      {inCart && (
        <div className="in-cart">
          <button
            className="products__card-counter-btn"
            onClick={handleDecrement}
          >
            -
          </button>
          <p className="products__card-count">{inCart.count}</p>
          <button
            className="products__card-counter-btn"
            onClick={handleAddToCart}
          >
            +
          </button>
        </div>
      )}
    </div>
  );
};

export default InCart;
