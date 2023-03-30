import React from 'react';

const BookMarked = ({markedBlogs}) => {
    console.log("compo",markedBlogs);
    return (
        <div className='bg-[RGBA(17,17,0,0.27)] sticky top-0 p-8 rounded-md'>
            <h1 className='text-2xl font-bold text-center'>Bookmarked Blogs :{markedBlogs.length}</h1>
            {
                markedBlogs.map(blog => <li>{blog.name}</li>)
            }
        </div>
    );
};

export default BookMarked;