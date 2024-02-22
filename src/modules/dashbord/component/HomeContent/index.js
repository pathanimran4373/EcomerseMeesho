import React, { Suspense, lazy } from "react";
import HomePage from "../HomePage/HomePage";
const Carosal = lazy(() => import("../carousel/Carousal"));
const Banner = lazy(()=> import("../suppliarBanner"))
const Product = lazy(() => fakeDelay(import("../Product")));
const Footer = lazy(() => import("../../../common/component/Footer"));

const fakeDelay = (promise)=>{
  return new Promise((resolve)=>{
    setTimeout(resolve,3000)
  }).then(()=>promise)
}
const HomeContent = () => {
  return (
    <>
      <HomePage />
      <Suspense fallback={<h1>Loading..................</h1>}>
        <Carosal />
      </Suspense>
      <Suspense fallback={<h1>Loading..................</h1>}>
        <Banner />
      </Suspense>
      <Suspense fallback={<h1>Loading..................</h1>}>
        <Product />
      </Suspense>
      <Suspense fallback={<h1>Loading..................</h1>}>
        <Footer />
      </Suspense>
    </>
  );
};

export default HomeContent;

