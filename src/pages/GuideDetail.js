import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../assets/css/GuideDetail.css'

function Guide() {
  const { id } = useParams()
  const [data, setData] = useState({
    title: '',
    author: '',
    url_video: '',
    createdAt: ''
  });

  useEffect(() => {
    document.title = "Detail Guide";
    axios.get(`http://localhost:5000/guides/${id}`)
      .then((response) => setData(response.data))
      .catch((e) => console.log(e))
  }, [id])

  return (
    <>
      <div className='container'>
        <div className='video-frame'>
          <iframe src={data.url_video + "/preview"} width="1290" height="726" allow="autoplay"></iframe>
          <div className='p-desc'>
            <p >Description</p>
            <p>Tác giả: {data.author}</p>
            <p>Chuyên mục: {data.title}</p>
            <p>Ngày đăng: {data.createdAt}</p>
          </div>
        </div>
      </div>
        <div className="back-button">
          <Link to="/guides">Quay lại</Link>
        </div>
    </>
  )
}

export default Guide
