import axios from "axios";
import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import BookMarked from "../BookMarked/BookMarked";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [marked, setMarked] = useState([]);
  let markedBlogs = [];
  const handleMarkedBlogs = (id) => {
    
  };
  console.log(markedBlogs);
  useEffect(() => {
    const loadBLogs = async () => {
      const res = await axios.get("data.json");
      setBlogs(res.data);
    };
    loadBLogs();
  }, []);
  return (
    <div className='grid grid-cols-1 md:grid-cols-5 gap-6 py-8'>
      <div className='md:col-span-3'>
        <div className='flex flex-col gap-6 px-5'>
          {blogs.map((blog) => (
            <Blog
              key={blog.id}
              blog={blog}
              handleMarkedBlogs={handleMarkedBlogs}
            ></Blog>
          ))}
        </div>
      </div>
      <div className='md:col-span-2 px-5 -order-1 md:order-1'>
        <BookMarked></BookMarked>
      </div>
    </div>
  );
};

export default Blogs;
