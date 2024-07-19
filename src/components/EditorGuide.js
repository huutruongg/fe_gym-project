import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const API_ENDPOINT = "http://localhost:5000/guides"

function EditorGuide(props) {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [url, setUrl] = useState('');
    const { id } = useParams();
    const navigate = useNavigate()

    function handleURL(url) {
        if (url.includes('/view?usp=drive_link')) {
            url = url.replace('/view?usp=drive_link', '');
        }
        return url
    }

    useEffect(() => {
        // Chỉ gọi API khi props.act là "Cập nhật" và có id
        if (props.act === "Cập nhật" || id) {
            axios.get(`${API_ENDPOINT}/${id}`)
                .then((response) => {
                    setTitle(response.data.title);
                    setAuthor(response.data.author);
                    setUrl(response.data.url_video);
                })
                .catch((e) => console.log(e));
        }
    }, [props.act, id]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            let response;
            if (props.act === "Tạo mới") {
                response = await axios.post(API_ENDPOINT, {
                    author: author,
                    title: title,
                    url_video: handleURL(url),
                }).then(() => {
                    alert("Tạo mới thành công!")
                    navigate('/admin/guides_management')
                }).catch(() => {
                    alert("Tạo mới thất bại!")
                })
            } else if (props.act === "Cập nhật") {
                response = await axios.put(`${API_ENDPOINT}/${id}`, {
                    author: author,
                    title: title,
                    url_video: handleURL(url),
                }).then(() => {
                    alert("Cập nhật thành công!")
                    navigate('/admin/guides_management')
                }).catch(() => {
                    alert("Cập nhật thất bại!")
                })
            }
        } catch (error) {
            console.error('Error sending request:', error);
        }
    };
    return (
        <div className="guide-form-container">
            <h2>{props.act} Guide</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Tiêu đề:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder='...'
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="author">Tác giả:</label>
                    <input
                        type="text"
                        id="author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        placeholder='...'
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="url">URL:</label>
                    <input
                        type="url"
                        id="url"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder='https://google.com'
                        required
                    />
                </div>
                <button type="submit">{props.act}</button>

            </form>
            <div className="back-button">
                <Link to="/admin/guides_management">Quay lại</Link>
            </div>
        </div>
    )
}

export default EditorGuide
