import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const navigate = useNavigate();
  const { data, error, isLoading } = useFetch("https://dummyjson.com/products");

  const handleClickToDetail = (id) => {
    navigate(`/${id}`);
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>Errror...</p>;
  return (
    <>
      <section className="hero"></section>
      <section className="products">
        <div className="container">
          <div className="products__wrapper">
            <div className="products__cards">
              {data?.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={() => handleClickToDetail(product.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
