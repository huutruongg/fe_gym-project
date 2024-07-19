import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../assets/css/Blogs.css';
import { formatDistanceToNow, parseISO } from 'date-fns';

function Blogs() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        document.title = "Blogs";
        axios.get('http://localhost:5000/blogs')
            .then((response) => setBlogs(response.data))
            .catch((e) => console.log(e));
    }, []);

    // Hàm rút gọn nội dung, hiển thị tối đa 3 dòng và thêm "..."
    const truncateContent = (htmlContent) => {
        const temp = document.createElement('div');
        temp.innerHTML = htmlContent;
        const textContent = temp.textContent || temp.innerText || '';
        const lines = textContent.split('\n').filter(line => line.trim() !== '');
        const truncatedText = lines.slice(0, 2).join(' ') + (lines.length > 2 ? '...' : '');
        return truncatedText;
    };
    return (
        <section className="blog-section">
            <div className="container">
                <div>
                    {blogs.map((blog, index) => {
                        const timeAgo = blog.createdAt ? formatDistanceToNow(parseISO(blog.createdAt)) : '';
                        return (
                            <a href={"/blogs/" + blog.id} className="blog-card" key={index}>
                                <div className='left-blog'>
                                    <img src={blog.imageURL} alt={blog.title} className="blog-image" />
                                    {console.log('Image URL:', blog.imageURL)}
                                </div>
                                <div className='right-blog'>
                                    <h2 className="blog-title">{blog.title}</h2>
                                    <p className="blog-content">{truncateContent(blog.content)}</p>
                                    <span className='blog-date'>({timeAgo} ago)</span>
                                </div>
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Blogs;