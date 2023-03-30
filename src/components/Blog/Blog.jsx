import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Blog = ({ blog,handleMarkedBlogs }) => {
  const { coverImg, name, date, readTime, authorImg,title,id } = blog;
  return (
    <>
      <div className='card card-compact w-full bg-base-100 shadow-xl'>
        <figure>
          <img src={coverImg} alt={name} />
        </figure>
        <div className='card-body'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-6'>
              <div className='avatar'>
                <div className='w-16 rounded-full'>
                  <img src={authorImg} />
                </div>
              </div>
              <div>
                <h2 className='text-2xl font-bold'>{name}</h2>
                <p>{date}</p>
              </div>
            </div>
            <div className='flex gap-2 text-xl'>
              <p>{readTime} min Read</p>
              <a onClick={() => handleMarkedBlogs(id)} className="cursor-pointer">
                <FontAwesomeIcon icon={faBookmark} />
              </a>
            </div>
          </div>
        </div>
        <h2 className="text-4xl font-bold px-4 pb-8">{title}</h2>
      </div>
    </>
  );
};

export default Blog;
