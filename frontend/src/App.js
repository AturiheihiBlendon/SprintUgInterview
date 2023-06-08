import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Restaurant from "./components/restaurant";
import ViewRestaurant from "./components/ViewRestaurants";
import AddRestaurant from "./components/AddRestaurant";
import EditRestaurant from "./components/EditRestaurant";
import ListRestaurants from "./components/ListRestaurants";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListRestaurants />} />
          <Route path="/restaurant/:id" element={<ViewRestaurant />} />
          <Route path="/add" element={<AddRestaurant />} />
          <Route path="/edit/:id" element={<EditRestaurant />} />
        </Routes>
      </BrowserRouter>
    </>
  )

}

export default App;
