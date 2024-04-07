import React from "react";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RecipeDetail from './pages/RecipeDetail';
import Error from "./pages/Error";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="recipes/:id" element={<RecipeDetail />} />
          <Route path="/*" element={<Error />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
