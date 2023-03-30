import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Blogs = () => {
    const [blogs,setBlogs] = useState([]);
    useEffect(()=>{
        const loadBLogs = async() => {
            const res = await axios.get('data.json');
            setBlogs(res.data);
        }
        loadBLogs();
    },[])
    return (
        <div>
            <h1>blogs</h1>
        </div>
    );
};

export default Blogs;