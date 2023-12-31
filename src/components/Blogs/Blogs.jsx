import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Blog from "../Blog/Blog";
import BookMarked from "../BookMarked/BookMarked";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [marked, setMarked] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  let markedBlogs = [];
  const handleMarkedBlogs = (id) => {
    const markedItem = blogs.find((blog) => blog.id === id);
    const isExits = marked.find((blog) => blog === markedItem);
    if (!isExits) {
      markedBlogs = [...marked, markedItem];
      setMarked(markedBlogs);
    } else {
      toast("You Have Already Bookmarked This Blog");
    }
  };

  const handleReadingTime = (id) => {
    const readBlog = blogs.find((blog) => blog.id === id);
    setReadingTime(readingTime + readBlog.readTime);
  };

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
              handleReadingTime={handleReadingTime}
            ></Blog>
          ))}
        </div>
      </div>
      <div className='md:col-span-2 px-5 -order-1 md:order-1'>
        <div className='sticky top-0'>
          <div className='bg-purple-100 border border-purple-500 p-6 rounded-lg my-4 text-2xl text-center text-primary font-bold'>
            <h1>Spent time on read : {readingTime} Minute</h1>
          </div>
          <BookMarked marked={marked}></BookMarked>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
