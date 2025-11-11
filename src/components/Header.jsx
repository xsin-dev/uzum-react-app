import { Link, NavLink } from "react-router-dom";
import {
  AiFillShopping,
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineUser,
} from "react-icons/ai";
import { FaAngleDown, FaLocationDot } from "react-icons/fa6";
import { IoAlbumsOutline } from "react-icons/io5";

import Logo from "../assets/images/svg/logo-uzum.svg";
import CategoryImage1 from "../assets/images/png/category-img1.png";
import CategoryImage2 from "../assets/images/png/category-img2.png";
import CategoryImage3 from "../assets/images/png/category-img3.png";
import CategoryImage4 from "../assets/images/png/category-img4.png";
import UzFlagIcon from "../assets/images/png/uz-flag.jpg";
import useAppContext from "../hooks/useAppContext";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();

  const { cart } = useAppContext();

  function handleSelect(e) {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  }
  return (
    <header className="header">
      <div className="top-header">
        <div className="container">
          <div className="top-header__wrapper">
            <div className="top-header__left">
              <div className="top-header__location">
                <FaLocationDot size={14} />
                <p className="top-header__location-text">
                  {t("header.location")}
                </p>
                <FaAngleDown size={14} />
              </div>
              <p className="top-header__delevery-point top-header__text">
                {t("header.punkt")}
              </p>
            </div>
            <div className="top-header__right">
              <p className="top-header__seller top-header__text">
                {t("header.seles")}
              </p>
              <p className="top-header__delevery top-header__text">
                {t("header.point")}
              </p>
              <p className="top-header__ans-ques top-header__text">
                {t("header.ans")}
              </p>
              <p className="top-header__my-order top-header__text">
                {t("header.order")}
              </p>
              <div className="top-header__lang">
                <img src={UzFlagIcon} alt="uz flag" />
                <select value={i18n.language} onChange={handleSelect}>
                  <option value="uz">uz</option>
                  <option value="ru">ru</option>
                  <option value="en">en</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="middle-header">
        <div className="container">
          <div className="middle-header__wrapper">
            <Link className="logo" to="/">
              <img src={Logo} alt="" />
            </Link>
            <div className="middle-header__catalog">
              <IoAlbumsOutline size={16} />
              <p className="middle-header__catalog-text">
                {t("header.catalog")}
              </p>
            </div>
            <form className="middle-header__form">
              <input
                className="middle-header__form-input"
                type="text"
                placeholder={t("header.search")}
              />
              <button className="middle-header__form-btn">
                <AiOutlineSearch size={20} />
              </button>
            </form>
            <div className="middle-header__action-btn">
              <AiOutlineUser size={22} />
              <p className="middle-header__action-btn-label">
                {t("header.auth")}
              </p>
            </div>
            <div className="middle-header__action-btn">
              <AiOutlineHeart size={22} />
              <p className="middle-header__action-btn-label">
                {t("header.sorted")}
              </p>
            </div>
            <NavLink to="/cart" className="middle-header__action-btn">
              <AiFillShopping size={22} />
              <p className="middle-header__action-btn-label">
                {t("header.cart")}{" "}
                <span className="middle-header__cart-count">{cart.length}</span>
              </p>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="bottom-header">
        <div className="container">
          <nav className="bottom-header__nav">
            <Link
              to="/weekly-products"
              className="bottom-header__promo-category"
            >
              <img src={CategoryImage1} alt="Hafta tovarlari" />
              <p className="bottom-header__promo-category-text">
                {t("header.weekly")}
              </p>
            </Link>

            <Link
              to="/winter-collection"
              className="bottom-header__promo-category"
            >
              <img src={CategoryImage2} alt="Qishki kolleksiya" />
              <p className="bottom-header__promo-category-text">
                {t("header.winter")}
              </p>
            </Link>

            <Link
              to="/hobby-and-creativity"
              className="bottom-header__promo-category"
            >
              <img src={CategoryImage3} alt="Xobbi va ijod" />
              <p className="bottom-header__promo-category-text">
                {t("header.hobby")}
              </p>
            </Link>

            <Link to="/smartphones" className="bottom-header__promo-category">
              <img src={CategoryImage4} alt="Smartfonlar" />
              <p className="bottom-header__promo-category-text">
                {t("header.telefon")}
              </p>
            </Link>

            <NavLink to="/tourism-hunting" className="bottom-header__category">
              {t("header.turizm")}
            </NavLink>

            <NavLink to="/electronics" className="bottom-header__category">
              {t("header.elektronika")}
            </NavLink>

            <NavLink to="/home-appliances" className="bottom-header__category">
              {t("header.texnika")}
            </NavLink>

            <NavLink to="/clothing" className="bottom-header__category">
              {t("header.clother")}
            </NavLink>

            <NavLink to="/shoes" className="bottom-header__category">
              {t("header.shoes")}
            </NavLink>

            <NavLink to="/accessories" className="bottom-header__category">
              {t("header.aksessuarlar")}
            </NavLink>

            <NavLink to="/more" className="bottom-header__category-more">
              {t("header.more")} <FaAngleDown />
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
