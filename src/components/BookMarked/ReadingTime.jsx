import React from 'react';

const ReadingTime = ({markedBlogs}) => {
    const totalReadingTime = markedBlogs.reduce(((previousTime,currentTime)  => previousTime + currentTime.readTime),0);
    return (
        <div className='bg-purple-100 border border-purple-500 p-6 rounded-lg my-4 text-2xl text-center text-primary font-bold'>
            <h1>Spent time on read : {totalReadingTime} Minute</h1>
        </div>
    );
};

export default ReadingTime;