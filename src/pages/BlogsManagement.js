import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/BlogsManagement.css'

const BlogList = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        document.title = "Blog Management";
        axios.get('http://localhost:5000/blogs')
            .then((response) => setBlogs(response.data))
            .catch((e) => console.log(e));
    }, []);

    const handleDelete = (id) => {
        let idDelete = window.confirm("Bạn chắc chắn muốn xóa blog này???");
        if (idDelete) {
            axios.delete(`http://localhost:5000/blogs/${id}`)
                .then(() => {
                    setBlogs(blogs.filter(blog => blog.id !== id))
                    alert("Xóa blog thành công!")
                }).catch(error => {
                    console.error("Lỗi khi xóa blog:", error);
                    alert('Có lỗi xảy ra khi xóa blog!');
                });
        }
    };

    const truncateContent = (content, maxLength) => {
        return content.length > maxLength ? content.substring(0, maxLength) + '...' : content;
    };

    const extractContentText = (htmlString) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlString, 'text/html');
        return doc.body.textContent;
    };

    return (
        <div className="blog-management">
            <h2 className="title">QUẢN LÝ BLOGS</h2>
            <Link to="/admin/create_blog" className="add-new-button">
                Tạo mới Blog
            </Link>

            <h3 className="list-title">Danh sách Blogs</h3>
            <table className="blog-table">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tiêu đề</th>
                        <th>Tác giả</th>
                        <th>Nội dung</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {blogs.map((blog, index) => (
                        <tr key={blog.id}>
                            <td>{index + 1}</td>
                            <td>{blog.title}</td>
                            <td>{blog.author}</td>
                            <td>{truncateContent(extractContentText(blog.content), 50)}</td>
                            <td className="actions-cell">
                                <Link to={`/admin/update_blog/${blog.id}`} className="edit-button">
                                    Edit
                                </Link>
                                <button onClick={() => handleDelete(blog.id)} className="delete-button">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="back-button">
                <Link to="/admin">Quay lại</Link>
            </div>
        </div>
    );
};

export default BlogList;