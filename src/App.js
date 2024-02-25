import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "./modules/common/component/loadingPage/Loading";
import HomeContent from "./modules/dashbord/component/HomeContent";
import Header from "./modules/common/component/header";

// Lazy-loaded components
const SignUp = lazy(() => import("./modules/auth/component/signup"));
const LogIn = lazy(() => import("./modules/auth/component/login"));
const Product = lazy(() => import("./modules/dashbord/component/Product"));
const ProductDescription = lazy(() =>
  import("./modules/dashbord/component/productDetail")
);
const CartPage = lazy(() => import("./modules/dashbord/component/Cart"));
const PageNotFound = lazy(() => import("./modules/dashbord/component/PageNotFound"));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route
            path="/signup"
            element={
              <Suspense fallback={<Loading />}>
                <SignUp />
              </Suspense>
            }
          />
          <Route
            path="/login"
            element={
              <Suspense fallback={<Loading />}>
                <LogIn />
              </Suspense>
            }
          />
          <Route
            path="/product"
            element={
              <Suspense fallback={<Loading />}>
                <Product />
              </Suspense>
            }
          />
          <Route
            path="/productdetail/:id"
            element={
              <Suspense fallback={<Loading />}>
                <ProductDescription />
              </Suspense>
            }
          />
          <Route
            path="/cart"
            element={
              <Suspense fallback={<Loading />}>
                <CartPage />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<Loading />}>
                <PageNotFound />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
