import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import axios from 'axios'
import '../assets/css/BlogDetail.css'

function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:5000/blogs/${id}`)
      .then((response) => setBlog(response.data))
      .catch((e) => console.log(e));
  }, []);

  if (!blog) {
    return <div>Bài viết không tồn tại.</div>;
  }

  // Lọc HTML bằng DOMPurify trước khi hiển thị
  const sanitizedContent = DOMPurify.sanitize(blog.content);

  return (
    <div className='blog-section'>
      <div class='container'>
        <div className='blog-content'>
          <h1 className='blog-detail-title'>{blog.title}</h1>
          <h4 className='blog-author'><span style={{ fontWeight: 'normal'}}>Được đăng bởi: </span>{blog.author}</h4>
          <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;