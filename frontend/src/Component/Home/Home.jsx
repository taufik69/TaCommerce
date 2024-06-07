import React from "react";
import { useGetAllProductQuery } from "../Features/Api/ProductApi.js";
import LoadingPlaceholder from "./LoadingPlaceholder.jsx";
import Error from "../Error/Error.jsx";
import Product from "./Product.jsx";
const Home = () => {
  const { data, error, isLoading } = useGetAllProductQuery();

  let content = null;
  let totalProducts = 0;
  if (isLoading) {
    totalProducts = data?.products || 10;

    content = Array.from({ length: totalProducts }).map((_, index) => (
      <LoadingPlaceholder />
    ));
  } else if (error) {
    content = <Error />;
  } else if (data) {
    content = data?.products.map((item) => <Product ProductItem={item} />);
  }

  return (
    <div className="bg-blue-100">
      <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-32">
        {content}
      </div>
    </div>
  );
};

export default Home;
