import React from "react";
import SingleBookMarked from "./SingleBookMarked";

const BookMarked = ({ marked }) => {
  return (
    <div>
      <div className='bg-[RGBA(17,17,0,0.27)] p-8 rounded-md'>
        <h1 className='text-2xl font-bold text-center'>
          Bookmarked Blogs :{marked.length}
        </h1>
        {marked.map((blog) => (
          <SingleBookMarked blog={blog}></SingleBookMarked>
        ))}
      </div>
    </div>
  );
};

export default BookMarked;
