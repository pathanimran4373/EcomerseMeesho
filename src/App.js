
import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PageNotFound from "./modules/dashbord/component/PageNotFound";
import HomeContent from "./modules/dashbord/component/HomeContent";
import Header from "./modules/common/component/header";

// Lazy-loaded components
const SignUp = lazy(() => import("./modules/auth/component/signup"));
const LogIn = lazy(() => import("./modules/auth/component/login"));
const Product = lazy(() => import("./modules/dashbord/component/Product"));
const ProductDescription = lazy(() => import("./modules/dashbord/component/productDetail"));
const CartPage = lazy(() => import("./modules/dashbord/component/Cart"));

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
              <Suspense fallback={<span>Loading.......</span>}>
                <SignUp />
              </Suspense>
            }
          />
          <Route
            path="/login"
            element={
              <Suspense fallback={<span>Loading...........</span>}>
                <LogIn />
              </Suspense>
            }
          />
          <Route
            path="/product"
            element={
              <Suspense fallback={<span>Loading..........</span>}>
                <Product />
              </Suspense>
            }
          />
          <Route
            path="/productdetail/:id"
            element={
              <Suspense fallback={<span>Loading..........</span>}>
                <ProductDescription />
              </Suspense>
            }
          />
          <Route
            path="/cart"
            element={
              <Suspense fallback={<span>Loading..........</span>}>
                <CartPage />
              </Suspense>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

