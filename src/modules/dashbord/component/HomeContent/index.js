import React, { Suspense, lazy } from "react";
import HomePage from "../HomePage/HomePage";
import LoadingCircle from "../../../common/component/loadingPage/Loading";

// lazy loading component
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
      <Suspense fallback={<LoadingCircle/>}>
        <Carosal />
      </Suspense>
      <Suspense fallback={<LoadingCircle/>}>
        <Banner />
      </Suspense>
      <Suspense fallback={<LoadingCircle/>}>
        <Product />
      </Suspense>
      <Suspense fallback={<LoadingCircle/>}>
        <Footer />
      </Suspense>
    </>
  );
};

export default HomeContent;

