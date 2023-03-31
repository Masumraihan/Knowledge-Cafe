import React from "react";
import { ToastContainer } from "react-toastify";
import Blogs from "./components/Blogs/Blogs";
import Header from "./components/Header/Header";
import "react-toastify/dist/ReactToastify.css";
import QuestionAns from "./components/QuestionAns/QuestionAns";

const App = () => {
  return (
    <div className='container mx-auto'>
      <Header />
      <Blogs />
      <QuestionAns/>
      <ToastContainer />
    </div>
  );
};

export default App;
