import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../assets/css/GuidesManagement.css'

const GuideList = () => {
  //   const [guides, setGuides] = useState([
  //     { id: 1, title: 'Hướng dẫn sử dụng React', author: 'John Doe', url: 'https://example.com/react-guide' },
  //     { id: 2, title: 'Lập trình Node.js cơ bản', author: 'Jane Doe', url: 'https://example.com/nodejs-guide' },
  //     // ... thêm dữ liệu cho Guides ở đây
  //   ]);

  const [guides, setGuides] = useState([])

  useEffect(() => {
    document.title = "Guide Management";
    axios.get('http://localhost:5000/guides')
      .then((response) => setGuides(response.data))
      .catch((e) => console.log(e))
  }, [])

  const handleDelete = (id) => {
    let idDelete = window.confirm("Bạn chắc chắn muốn xóa guide này???");

    if (idDelete) {
      axios.delete(`http://localhost:5000/guides/${id}`)
        .then(() => {
          setGuides(guides.filter(guide => guide.id !== id))
          alert("Xóa guide thành công!")
        }).catch(error => {
          console.error("Lỗi khi xóa guide:", error);
          alert('Có lỗi xảy ra khi xóa guide!');
        });
    }
  };

  return (
    <div className="guide-management">
      <h2 className="title">QUẢN LÝ GUIDES</h2>
      <Link to="/admin/create_guide" className="add-new-button">
        Tạo mới Guide
      </Link>

      <h3 className="list-title">Danh sách Guides</h3>
      <table className="guide-table">
        <thead>
          <tr>
            <th>STT</th>
            <th>Tiêu đề</th>
            <th>Tác giả</th>
            <th>URL</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {guides.map((guide, index) => (
            <tr key={guide.id}>
              <td>{index + 1}</td>
              <td>{guide.title}</td>
              <td>{guide.author}</td>
              <td>
                <a href={guide.url} target="_blank" rel="noopener noreferrer">
                  {guide.url_video}
                </a>
              </td>
              <td className="actions-cell">
                <Link to={`/admin/update_guide/${guide.id}`} className="edit-button">
                  Edit
                </Link>
                <button onClick={() => handleDelete(guide.id)} className="delete-button">
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

export default GuideList;