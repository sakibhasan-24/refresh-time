import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import AddCoffee from "./AddCoffee";
import AllCoffee from "./AllCoffee";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <AddCoffee />
      <AllCoffee />
    </>
  );
}
