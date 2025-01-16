import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} /> */}
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default AppRoutes;
