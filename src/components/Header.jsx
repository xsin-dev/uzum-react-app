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
import UzFlagIcon from "../assets/images/png/uz-flag.jpg"

const Header = () => {
  return (
    <header className="header">
      <div className="top-header">
        <div className="container">
          <div className="top-header__wrapper">
            <div className="top-header__left">
              <div className="top-header__location">
                <FaLocationDot size={14} />
                <p className="top-header__location-text">Toshkent</p>
                <FaAngleDown size={14} />
              </div>
              <p className="top-header__delevery-point top-header__text">
                Topshirish punktlari
              </p>
            </div>
            <div className="top-header__right">
              <p className="top-header__seller top-header__text">
                Sotuvchi bo'lish
              </p>
              <p className="top-header__delevery top-header__text">
                Topshirish punktini ochish
              </p>
              <p className="top-header__ans-ques top-header__text">
                Savol-javob
              </p>
              <p className="top-header__my-order top-header__text">
                Buyurtmarim
              </p>
              <div className="top-header__lang">
                <img src={UzFlagIcon} alt="uz flag" />
                <p className="top-header__lang-text">O'zbekcha</p>
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
              <p className="middle-header__catalog-text">Katalog</p>
            </div>
            <form className="middle-header__form">
              <input
                className="middle-header__form-input"
                type="text"
                placeholder="Mahsulot va turkumlarni izlash"
              />
              <button className="middle-header__form-btn">
                <AiOutlineSearch size={20} />
              </button>
            </form>
            <div className="middle-header__action-btn">
              <AiOutlineUser size={22} />
              <p className="middle-header__action-btn-label">Kirish</p>
            </div>
            <div className="middle-header__action-btn">
              <AiOutlineHeart size={22} />
              <p className="middle-header__action-btn-label">saralangan</p>
            </div>
            <div className="middle-header__action-btn">
              <AiFillShopping size={22} />
              <p className="middle-header__action-btn-label">
                Savat <span className="middle-header__cart-count">1</span>
              </p>
            </div>
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
                Hafta tovarlari
              </p>
            </Link>

            <Link
              to="/winter-collection"
              className="bottom-header__promo-category"
            >
              <img src={CategoryImage2} alt="Qishki kolleksiya" />
              <p className="bottom-header__promo-category-text">
                Qishki kolleksiya
              </p>
            </Link>

            <Link
              to="/hobby-and-creativity"
              className="bottom-header__promo-category"
            >
              <img src={CategoryImage3} alt="Xobbi va ijod" />
              <p className="bottom-header__promo-category-text">
                Xobbi va ijod
              </p>
            </Link>

            <Link to="/smartphones" className="bottom-header__promo-category">
              <img src={CategoryImage4} alt="Smartfonlar" />
              <p className="bottom-header__promo-category-text">Smartfonlar</p>
            </Link>

            <NavLink to="/tourism-hunting" className="bottom-header__category">
              Turizm, baliq ovi va ovchilik
            </NavLink>

            <NavLink to="/electronics" className="bottom-header__category">
              Elektronika
            </NavLink>

            <NavLink to="/home-appliances" className="bottom-header__category">
              Maishiy texnika
            </NavLink>

            <NavLink to="/clothing" className="bottom-header__category">
              Kiyim
            </NavLink>

            <NavLink to="/shoes" className="bottom-header__category">
              Poyabzallar
            </NavLink>

            <NavLink to="/accessories" className="bottom-header__category">
              Aksessuarlar
            </NavLink>

            <NavLink to="/more" className="bottom-header__category-more">
              Yana <FaAngleDown />
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
