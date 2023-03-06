import React from "react";
import HeaderComp from "../comp/HeaderComp";
import CoverComp from "../comp/CoverComp";
import BlogComp from "../comp/BlogComp";
import ProductComp from "../comp/ProductComp";
import FaqComp from "../comp/FaqComp";
import FooterComp from "../comp/FooterComp";

function Home(logged) {
  return (
    <>
      <HeaderComp logged={logged}/>
      <CoverComp />
      <BlogComp />
      <ProductComp />
      <FaqComp />
      <FooterComp />
    </>
  );
}

export default Home;
