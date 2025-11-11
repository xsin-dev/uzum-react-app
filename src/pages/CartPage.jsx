import { useNavigate } from "react-router-dom";
import useAppContext from "../hooks/useAppContext";
import { BsTrash } from "react-icons/bs";

const CartPage = () => {
  const navigate = useNavigate();
  const { cart, setCart } = useAppContext();

  const totalPrice = cart.reduce(
    (acc, item) =>
      acc +
      (item.price - (item.price * item.discountPercentage) / 100) * item.count,
    0
  );

  const handleRemove = (id) => {
    const newCart = cart.filter((p) => p.id !== id);
    setCart(newCart);
  };

  const handleClickToHome = () => {
    navigate("/");
  };

  return (
    <div className="cart">
      <div className="container">
        <div className="cart__wrapper">
          <h2 className="cart__title">
            Savatingiz, <span>{cart.length} mahsulot</span>
          </h2>

          <div className="cart__content">
            <div className="cart__items">
              {cart.length > 0 ? (
                cart.map((item) => (
                  <div className="cart__item" key={item.id}>
                    <div className="cart__item-left">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="cart__item-img"
                      />
                      <div className="cart__item-info">
                        <h3 className="cart__item-title">{item.title}</h3>
                        <p className="cart__item-desc">{item.description}</p>
                        <p className="cart__item-brand">
                          Sotuvchi: <span>{item.brand}</span>
                        </p>
                      </div>
                    </div>

                    <div className="cart__item-right">
                      <p className="cart__item-price">
                        {(
                          item.price -
                          (item.price * item.discountPercentage) / 100
                        ).toFixed(2)}{" "}
                        so‘m
                      </p>
                      <div className="cart__item-counter">
                        <button
                          className="cart__item-counter-btn"
                          onClick={() => {
                            if (item.count > 1) {
                              setCart(
                                cart.map((p) =>
                                  p.id === item.id
                                    ? { ...p, count: p.count - 1 }
                                    : p
                                )
                              );
                            }
                          }}
                        >
                          −
                        </button>
                        <p>{item.count}</p>
                        <button
                          className="cart__item-counter-btn"
                          onClick={() => {
                            setCart(
                              cart.map((p) =>
                                p.id === item.id
                                  ? { ...p, count: p.count + 1 }
                                  : p
                              )
                            );
                          }}
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => handleRemove(item.id)}
                        className="cart__item-remove"
                      >
                        <BsTrash size={18} /> Yo‘q qilish
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="cart__item-empty">
                  <p className="cart__item-empty-text">
                    Savatingiz hozircha bo‘sh
                  </p>
                  <p className="cart__item-empty-subtext">
                    Bosh sahifadan boshlang — kerakli tovarni qidiruv orqali
                    topishingiz yoki to‘plamlarni ko‘rishingiz mumkin
                  </p>
                  <button
                    onClick={handleClickToHome}
                    className="cart__item-empty-btn"
                  >
                    Bosh sahifa
                  </button>
                </div>
              )}
            </div>

            <div className="cart__summary">
              <h3 className="cart__summary-title">Buyurtmangiz</h3>
              <div className="cart__summary-info">
                <p>Mahsulotlar ({cart.length}):</p>
                <p>{totalPrice.toLocaleString()} so‘m</p>
              </div>
              <div className="cart__summary-total">
                <p>Jami:</p>
                <p className="cart__summary-total-price">
                  {totalPrice.toLocaleString()} so‘m
                </p>
              </div>
              <button className="cart__summary-btn">
                Rasmiylashtirishga o‘tish
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
