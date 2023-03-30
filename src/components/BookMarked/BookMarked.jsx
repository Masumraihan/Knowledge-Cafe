import React from 'react';

const BookMarked = ({markedBlogs}) => {
    console.log("compo",markedBlogs);
    return (
        <div className='bg-[RGBA(17,17,0,0.27)] sticky top-0'>
            <h1>{markedBlogs.length}</h1>
            {
                markedBlogs.map(blog => <li>{blog.name}</li>)
            }
        </div>
    );
};

export default BookMarked;