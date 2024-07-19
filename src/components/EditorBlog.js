import React, { useEffect, useState, useRef } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import axios from 'axios';
import '../assets/css/BlogEditor.css'

const API_ENDPOINT = 'http://127.0.0.1:5000/blogs';

function EditorBlog(props) {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [imageURL, setImageURL] = useState('');
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();
    const isMounted = useRef(true);
    console.log(id, props.act)

    useEffect(() => {
        if (props.act === "Cập nhật" || id) {
            const fetchBlogData = async () => {
                try {
                    const response = await axios.get(`${API_ENDPOINT}/${id}`);
                    const { imageURL, author, title, content } = response.data;

                    if (isMounted.current) {
                        setImageURL(imageURL);
                        setAuthor(author);
                        setTitle(title);
                        const blocksFromHtml = htmlToDraft(content);
                        const { contentBlocks, entityMap } = blocksFromHtml;
                        const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
                        setEditorState(EditorState.createWithContent(contentState));
                    }
                } catch (error) {
                    console.error('Error fetching blog data:', error);
                }
            };

            fetchBlogData();
        }
    }, [props.act, id]);

    const handleSubmit = async () => {
        const content = draftToHtml(convertToRaw(editorState.getCurrentContent()));

        try {
            if (props.act == "Tạo mới") {
                await axios.post(API_ENDPOINT, {
                    imageURL,
                    author,
                    title,
                    content,
                });
                alert("Tạo mới thành công!");
            } else if (props.act == "Cập nhật") {
                await axios.put(`${API_ENDPOINT}/${id}`, {
                    imageURL,
                    author,
                    title,
                    content,
                });
                alert("Cập nhật thành công!");
            }
            navigate('/admin/blogs_management');
        } catch (error) {
            console.error('Error sending request:', error);
            alert("Thao tác thất bại!");
            // Handle error, e.g., show error message to user
        }
    };

    return (
        <div className='editor-section'>
            <div className='container re-container'>
                <div className='blog-input'>
                    <h3>{props.act} blog</h3>
                    <div>
                        <label htmlFor="imageURL">Image URL:</label>
                        <input
                            type="text"
                            id="imageURL"
                            value={imageURL}
                            onChange={(e) => setImageURL(e.target.value)}
                            placeholder='...'
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="author">Author:</label>
                        <input
                            type="text"
                            id="author"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            placeholder='...'
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="title">Title:</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder='...'
                            required
                        />
                    </div>
                </div>
                <div>
                    <Editor
                        editorState={editorState}
                        wrapperClassName="editor-wrapper"
                        editorClassName="editor"
                        onEditorStateChange={setEditorState} // Correctly update editor state
                    />
                </div>
            </div>
            <div className='submit-blog'>
                <button onClick={handleSubmit}>{ props.act}</button>
            </div>
            <div className="back-button">
                <Link to="/admin/blogs_management">Quay lại</Link>
            </div>
        </div>
    );
}

export default EditorBlog;
