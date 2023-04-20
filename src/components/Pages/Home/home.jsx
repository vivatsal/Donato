import React from "react";
import Navbar from "../../Navbar/navbar";
import Banner from "../../Banner/banner";
import Categories from "../../Category/categories";
import NewFooter from "../../New Footer/newFooter";
import Blogs from "../../Blog/blog";

function Home() {
  return (
    <div className="home h-screen w-full">
      <Navbar />
      <Banner />
      <Categories />
      <Blogs />
      <NewFooter />
    </div>
  );
}

export default Home;
