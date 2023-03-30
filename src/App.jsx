import React from "react";
import { ToastContainer } from "react-toastify";
import Blogs from "./components/Blogs/Blogs";
import Header from "./components/Header/Header";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className='container mx-auto'>
      <Header />
      <Blogs />
      <ToastContainer />
    </div>
  );
};

export default App;
