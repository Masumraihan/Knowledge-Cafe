import React from "react";

const SingleBookMarked = ({ blog }) => {
  const { title } = blog;
  return (
    <div className='bg-white p-6 rounded-lg mt-4'>
      <h1 className='text-lg font-bold'>{title}</h1>
    </div>
  );
};

export default SingleBookMarked;
