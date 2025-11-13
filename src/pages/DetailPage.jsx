import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import StarRating from "../components/StarRating";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/navigation";
import { HiHeart } from "react-icons/hi";
import { FaComment, FaUser } from "react-icons/fa";
import Timer from "../components/ui/DetailTimer";
import { BiCheckShield, BiHeart } from "react-icons/bi";
import InCart from "../components/ui/InCart";
import { GiCheckMark } from "react-icons/gi";

import Humo from "../assets/images/png/humo.png";
import Visa from "../assets/images/png/visa.png";
import Uzcard from "../assets/images/png/uzcard.png";
import UzumCard from "../assets/images/png/uzumcard.webp";
import { BsClockHistory } from "react-icons/bs";
import ProductCard from "../components/ProductCard";

const DetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    data: detailProduct,
    isLoading,
    error,
  } = useFetch(`https://dummyjson.com/products/${id}`);

  const category = detailProduct?.category;

  const [relatedProducts, setRelatedProducts] = useState([]);
  const [relatedLoading, setRelatedLoading] = useState(false);

  // ✅ Fetch related products when category is available
  useEffect(() => {
    if (!category) return;

    setRelatedLoading(true);

    fetch(`https://dummyjson.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setRelatedProducts(data.products || []);
        setRelatedLoading(false);
      })
      .catch(() => setRelatedLoading(false));
  }, [category]);

  const {
    data: commentData,
    isLoading: commentIsLoading,
    error: commentError,
  } = useFetch("https://dummyjson.com/comments");

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const handleClickToDetail = (id) => {
    navigate(`/${id}`);
  };

  // Loading va error tekshirish
  if (isLoading) return <p>Loading....</p>;
  if (error) return <p>Error loading product!</p>;
  if (commentIsLoading) return <p>Loading comments...</p>;
  if (commentError) return <p>Error loading comments!</p>;
  return (
    <div className="product-detail">
      <div className="container">
        <div className="product-detail__wrapper">
          <div className="product-detail__content">
            {/* Header */}
            <header className="product-detail__header">
              <h1 className="product-detail__header-title">
                {detailProduct?.title}
              </h1>
              <div className="product-detail__header-rating">
                {detailProduct?.rating && (
                  <StarRating rating={detailProduct.rating} />
                )}
                <p>{detailProduct?.rating}</p>
                {detailProduct?.reviews && (
                  <p>({detailProduct.reviews.length || 0} sharh)</p>
                )}
              </div>
              <div className="product-detail__header-badges">
                <p className="product-detail__header-discount">
                  -{detailProduct?.discountPercentage} %
                </p>
                <p className="product-detail__header-badge-text">Supernarx</p>
              </div>
            </header>

            {/* Swipers */}
            {detailProduct?.images?.length > 0 && (
              <div
                className="product-detail__sliders"
                style={{ display: "flex", gap: "20px", padding: "30px 0" }}
              >
                <Swiper
                  direction="vertical"
                  onSwiper={setThumbsSwiper}
                  spaceBetween={10}
                  slidesPerView={Math.min(4, detailProduct.images.length)}
                  watchSlidesProgress
                  modules={[Thumbs]}
                  style={{ width: "100px", height: "400px" }}
                  className="thumbs-swiper"
                >
                  {detailProduct.images.map((img, idx) => (
                    <SwiperSlide key={idx}>
                      <img
                        src={img}
                        alt={`Thumb ${idx}`}
                        style={{
                          width: "100%",
                          height: "100px",
                          objectFit: "cover",
                          cursor: "pointer",
                          borderRadius: "10px",
                        }}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>

                <Swiper
                  spaceBetween={10}
                  slidesPerView={Math.min(2, detailProduct.images.length)}
                  thumbs={{
                    swiper:
                      thumbsSwiper && !thumbsSwiper.destroyed
                        ? thumbsSwiper
                        : null,
                  }}
                  modules={[Thumbs, Navigation]}
                  navigation={detailProduct.images.length > 1}
                  loop={detailProduct.images.length > 2}
                  style={{ flex: 1, height: "400px" }}
                  className="main-swiper"
                >
                  {detailProduct.images.map((img, idx) => (
                    <SwiperSlide key={idx}>
                      <img
                        src={img}
                        alt={`Main ${idx}`}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                          border: "1px solid #686869",
                          borderRadius: "20px",
                        }}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            )}

            <div
              className="product-detail__feedback"
              style={{ marginTop: "20px" }}
            >
              <div className="product-detail__feedback-rating">
                <p>{detailProduct?.rating}</p>
                {detailProduct?.rating && (
                  <StarRating rating={detailProduct.rating} />
                )}
                {detailProduct?.reviews && (
                  <p>{detailProduct.reviews.length || 0} sharh</p>
                )}
              </div>
              <div
                className="product-detail__foto-gallery"
                style={{
                  display: "flex",
                  gap: "10px",
                  flexWrap: "wrap",
                  marginTop: "10px",
                }}
              >
                {detailProduct?.images &&
                  detailProduct.images.map((item, idx) => (
                    <img
                      src={item}
                      alt=""
                      key={idx}
                      style={{
                        width: "80px",
                        height: "80px",
                        objectFit: "cover",
                      }}
                    />
                  ))}
              </div>
            </div>

            <div className="product-detail__testimonials">
              {commentIsLoading && <p>Loading comments...</p>}
              {commentError && <p>Error loading comments!</p>}
              <Swiper
                spaceBetween={10}
                slidesPerView={2}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[Thumbs, Navigation, Autoplay]}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                loop={true}
                style={{ flex: 1, minHeight: "150px" }}
                className="testimonial-swiper"
              >
                {commentData?.comments?.map((comment, idx) => (
                  <SwiperSlide
                    key={idx}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      textAlign: "center",
                    }}
                    className="product-detail__testimonials-card"
                  >
                    <p className="product-detail__testimonials-username">
                      <FaUser
                        size={30}
                        style={{ color: "#7f4dff", marginRight: "10px" }}
                      />
                      {comment.user.fullName}
                    </p>
                    <p className="product-detail__testimonials-like">
                      <HiHeart size={30} style={{ color: "red" }} />
                      {comment.likes}
                    </p>

                    <p className="product-detail__testimonials-text">
                      {comment.body}{" "}
                      <FaComment
                        size={18}
                        style={{ color: "#7f4dff", marginRight: "10px" }}
                      />
                    </p>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="product-detail__info">
              <p className="product-detail__info-title">Mahsulot tavsifi</p>
              <ul
                className="product-detail__info-list"
                style={{ listStyleType: "disc" }}
              >
                <li className="product-detail__info-item">
                  Brand: <p>{detailProduct?.brand}</p>
                </li>
                <li className="product-detail__info-item">
                  Kafolat muddati: <p>{detailProduct?.warrantyInformation}</p>
                </li>
                <li className="product-detail__info-item">
                  Yetkazib berish muddati:{" "}
                  <p> {detailProduct?.shippingInformation}</p>
                </li>
                <li className="product-detail__info-item">
                  Mahsulot kodi: <p>{detailProduct?.sku}</p>
                </li>
              </ul>

              <p className="product-detail__info-text">
                {detailProduct?.description}: Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Saepe iusto sunt, maxime
                repellendus veniam fuga quidem vitae nemo atque ratione officia
                magnam. Necessitatibus, maiores tempora rerum earum debitis
                quia? Cumque praesentium, voluptate accusantium eaque debitis
                illum quas corporis magnam, vero sunt id hic vel odit natus ad,
                vitae labore. Nisi quisquam, ducimus impedit nesciunt sequi
                placeat maxime inventore perferendis ipsa, doloremque aut labore
                eveniet facilis quo esse maiores omnis aperiam nihil provident
                dolorem unde obcaecati, voluptate itaque magni. Corrupti aperiam
                quam earum error, voluptatem amet iusto dicta totam odio
                aspernatur quibusdam sunt, voluptatum qui consequatur maiores,
                magnam similique reprehenderit tenetur est vel nostrum. Eum cum
                ut perferendis praesentium sed est maxime debitis porro
                consequuntur nisi, officiis, dolores dolorum. Voluptas, non quos
                hic earum aliquid labore quas ea. Enim, magnam dolorem odit quas
                ab molestias cupiditate unde aspernatur amet odio voluptas omnis
                accusantium, maxime repudiandae consectetur illo quaerat
                laboriosam corporis perferendis dicta perspiciatis. Vero non
                aspernatur enim, ipsum itaque facere quo sequi quod veritatis
                natus dignissimos dolorum veniam consectetur eaque porro quia
                dicta soluta odit a, qui est molestias aliquid iure. Nam animi
                excepturi expedita officiis laboriosam voluptate nihil tempora
                sunt id recusandae est quod itaque incidunt perspiciatis
                aspernatur, repellat sint.
              </p>
              <img
                className="product-detail__info-image"
                src={detailProduct?.thumbnail}
                alt={detailProduct?.title}
              />
            </div>
          </div>
          <div className="product-detail__summary">
            <div className="product-detail__total product-detail__summary-border">
              <div className="product-detail__total-header">
                <p className="product-detail__total-header-text">
                  11.11 Top-tovarlari 🔥
                </p>
                <div className="product-detail__total-header-timer">
                  <BsClockHistory size={20} />
                  <Timer />
                </div>
              </div>
              <p className="product-detail__total-badge">
                Arzon narx kafolati {">"}
              </p>
              <p className="product-detail__total-price">
                {Math.round(
                  (detailProduct?.price -
                    (detailProduct?.price * detailProduct?.discountPercentage) /
                      100) *
                    12000
                ).toLocaleString("uz-UZ")}{" "}
                so'm
              </p>
              <h2 className="product-detail__total-old-price">
                Uzum kartasiz{" "}
                {Math.round(detailProduct?.price * 12000).toLocaleString(
                  "uz-UZ"
                )}{" "}
                so'm
              </h2>
              <div className="product-detail__total-buttons">
                <button className="product-detail__total-seil-btn">
                  1 klikda xarid qilish
                </button>
                <div className="product-detail__total-like-btn">
                  <BiHeart size={26} />
                </div>
              </div>
              <InCart product={detailProduct} buttonText={"Savatga qo'shish"} />
              <div className="product-detail__stats">
                <div className="product-detail__stats-stock">
                  <div className="product-detail__stats-stock-first-icon">
                    <GiCheckMark size={14} />
                  </div>
                  <p className="product-detail__stats-stock-text">
                    {detailProduct?.stock} dona xarid qilish mumkin
                  </p>
                </div>
                <div className="product-detail__stats-stock">
                  <div className="product-detail__stats-stock-second-icon">
                    <BiCheckShield size={14} />
                  </div>
                  <p className="product-detail__stats-stock-text">
                    Bu haftada {detailProduct?.minimumOrderQuantity} kishi sotib
                    oldi
                  </p>
                </div>
              </div>
            </div>
            <div className="product-detail__shipping-note product-detail__summary-border">
              <p className="product-detail__shipping-note-title">
                Ertaga yetkazib beramiz
              </p>
              <p className="product-detail__shipping-note-text">
                В пункт выдачи или курьером
              </p>
            </div>
            <div className="product-detail__payment product-detail__summary-border">
              <p className="product-detail__payment-title">
                Qulay usulda xavfsiz to'lov
              </p>
              <p className="product-detail__payment-text">
                Karta orqali, naqd pulda yoki boʻlib toʻlang
              </p>
              <div className="product-detail__payment-box">
                <img src={UzumCard} alt="" />
                <img src={Humo} alt="" />
                <img src={Visa} alt="" />
                <img src={Uzcard} alt="" />
              </div>
              <div className="product-detail__payment-line"></div>
              <p className="product-detail__payment-title">
                Qaytarish oson va tez
              </p>
              <p className="product-detail__payment-text">
                Tovarlarni 10 kun ichida qabul qilamiz va darhol pulini
                qaytaramiz. <span>Batafsil</span>
              </p>
            </div>
          </div>
        </div>

        <div className="product-detail__related">
          <h3 className="product-detail__related-title">
            O'xshash mahsulotlar
          </h3>
          {relatedLoading ? (
            <p>Loading...</p>
          ) : relatedProducts.length > 0 ? (
            <div className="product-detail__cards">
              {relatedProducts
                .filter((p) => p.id !== detailProduct.id)
                .map((p) => (
                  <ProductCard
                    key={p.id}
                    product={p}
                    onClick={() => handleClickToDetail(p.id)}
                  />
                ))}
            </div>
          ) : (
            <p>Hech qanday mahsulot topilmadi</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
