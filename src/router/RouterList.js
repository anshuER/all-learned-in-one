import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../page/cart";
import FetchinApi from "../page/fatching api";
import Home from "../page/home";
import Products from "../page/products";
import ToDoList from "../page/To-Do-list";

const RouterList = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/to-do-list" element={<ToDoList />} />
      <Route path="/fetching" element={<FetchinApi />} />
    </Routes>
  );
};

export default RouterList;
