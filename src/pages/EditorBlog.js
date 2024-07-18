import React, { useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../assets/css/BlogEditor.css'

const API_ENDPOINT = 'http://127.0.0.1:5000/blogs';

function EditorPage() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [imageURL, setImageURL] = useState('');
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const navigate = useNavigate();

  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  const handleSubmit = async () => {
    const content = draftToHtml(convertToRaw(editorState.getCurrentContent()));

    try {
      const response = await axios.post(API_ENDPOINT, {
        imageURL,
        author,
        title,
        content,
      });

      if (response.status === 201) {
        console.log('Blog created successfully!');
        navigate('/blogs');
      } else {
        console.error('Error creating blog:', response.status);
      }
    } catch (error) {
      console.error('Error sending request:', error);
    }
  };

  return (
    <div className='editor-section'>
      <div className='container re-container'>
        <div className='blog-input'>
          <h3>Tạo bài viết mới</h3>
          <div>
            <label htmlFor="imageURL">Image URL:</label>
            <input
              type="text"
              id="imageURL"
              value={imageURL}
              onChange={(e) => setImageURL(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="author">Author:</label>
            <input
              type="text"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
        <div>
          <Editor
            editorState={editorState}
            wrapperClassName="editor-wrapper"
            editorClassName="editor"
            onEditorStateChange={onEditorStateChange}
          />
        </div>
      </div>
      <div className='submit-blog'>
        <button onClick={handleSubmit}>Đăng bài</button>
      </div>
    </div>
  );
}

export default EditorPage;