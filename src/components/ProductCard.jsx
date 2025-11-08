import { BiHeart } from "react-icons/bi";
import { BsCash, BsHeartFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa6";

const ProductCard = ({ product }) => {
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
      </div>
    </div>
  );
};

export default ProductCard;
