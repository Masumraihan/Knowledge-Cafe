import React from "react";
import ReadingTime from "./ReadingTime";
import SingleBookMarked from "./SingleBookMarked";

const BookMarked = ({ markedBlogs }) => {
  return (
    <div className="sticky top-0">
        <div>
            <ReadingTime markedBlogs={markedBlogs}></ReadingTime>
        </div>
      <div className='bg-[RGBA(17,17,0,0.27)] p-8 rounded-md'>
        <h1 className='text-2xl font-bold text-center'>
          Bookmarked Blogs :{markedBlogs.length}
        </h1>
        {markedBlogs.map((blog) => (
          <SingleBookMarked blog={blog}></SingleBookMarked>
        ))}
      </div>
    </div>
  );
};

export default BookMarked;
