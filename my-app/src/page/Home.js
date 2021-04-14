import React from "react";

//components
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Content from "../components/Content";
import Sub from "../components/Sub";
import Featured from "../components/Featured";
import Collections from "../components/Collections";
import Footer from "../components/Footer";
import BottomNav from "../components/BottomNav";

const Home = () => {
  return (
    <>
      <Navigation />
      <Header />
      <Content />
      <Sub />
      <Featured />
      <Collections />
      <Footer />
      <BottomNav />
    </>
  );
};

export default Home;
