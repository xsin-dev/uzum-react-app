import { BsCash, BsHeartFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa6";

import useAppContext from "../hooks/useAppContext";

const ProductCard = ({ product }) => {
  const { setCart, cart } = useAppContext();

  const inCart = cart.find((p) => p.id === product.id);

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
    <div className="products__card">
      <div className="products__card-image">
        <img className="products__card-img" src={product.thumbnail} alt="" />
        <BsHeartFill size={24} className="products__card-like" />
      </div>
      <div className="products__card-info">
        <p className="products__card-old-price">
          {product.price} <BsCash />
        </p>
        <p className="products__card-price">
          {(
            product.price -
            (product.price * product.discountPercentage) / 100
          ).toFixed(2)}
        </p>
        <p className="products__card-monthly-price">
          {(product.discountPercentage / 12).toFixed(2)} $/oyiga
        </p>
        <p className="products__card-description">{product.description}</p>
        <div className="products__card-rating">
          <FaStar size={12} className="products__card-rating-star" />
          <p className="products__card-rating-text">{product.rating}</p>
          <p className="products__card-rating-text">
            ({product.reviews.length} sharhlar){" "}
          </p>
        </div>
        {!inCart && (
          <button
            onClick={handleAddToCart}
            className="products__card-to-cart-btn"
          >
            Savatga
          </button>
        )}
        {inCart && (
          <div className="in-cart">
            <button className="products__card-counter-btn" onClick={handleDecrement}>-</button>
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
    </div>
  );
};

export default ProductCard;
