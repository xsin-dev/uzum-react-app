import { AiFillApple } from "react-icons/ai";
import { FaFacebook, FaYoutube } from "react-icons/fa6";
import { IoLogoGooglePlaystore, IoLogoInstagram } from "react-icons/io5";
import { SiTelegram } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__nav">
            <div className="footer__nav-row">
              <p className="footer__nav-title">Biz haqimizda</p>
              <p className="footer__nav-text">Topshirish punktlari</p>
              <p className="footer__nav-text">Vakansiyalar</p>
            </div>
            <div className="footer__nav-row">
              <p className="footer__nav-title">Foydalanuvchilarga</p>
              <p className="footer__nav-text">Biz bilan bog'lanish</p>
              <p className="footer__nav-text">Savol-javob</p>
            </div>
            <div className="footer__nav-row">
              <p className="footer__nav-title">Tadbirkorlarga</p>
              <p className="footer__nav-text">Uzumda soting</p>
              <p className="footer__nav-text">Sotuvchi kabinetiga kirish</p>
              <p className="footer__nav-text">Topshirish punktini ochish</p>
            </div>
            <div className="footer__nav-row">
              <p className="footer__nav-title">Ilovani yuklab olish</p>
              <div className="footer__nav-download">
                <div className="footer__nav-download-app">
                  <AiFillApple size={28} />
                  <p className="footer__nav-download-app-text">Apple Store</p>
                </div>
                <div className="footer__nav-download-app">
                  <IoLogoGooglePlaystore size={24} />
                  <p className="footer__nav-download-app-text">Google Play</p>
                </div>
              </div>
              <p className="footer__nav-title">Ijtimoiy tarmoqlarda</p>
              <div className="footer__nav-networks">
                <IoLogoInstagram size={34} />
                <SiTelegram size={34} />
                <FaFacebook size={34} />
                <FaYoutube size={34} />
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <div className="footer__bottom-nav">
              <p className="footer__bottom-nav-text">Maxfiylik kelishuvi</p>
              <p className="footer__bottom-nav-text">Foydalanuvchi kelishuvi</p>
            </div>
            <p className="footer__bottom-year">«2025© XK MCHJ «UZUM MARKET». STIR 309376127. Barcha huquqlar himoyalangan»</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
