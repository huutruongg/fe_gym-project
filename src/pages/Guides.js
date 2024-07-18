import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../assets/css/Guides.css'
import { formatDistanceToNow, parseISO } from 'date-fns';

function Guides() {
    const [guides, setGuides] = useState([{
        id: 0,
        author: '',
        title: '',
        url_video: '',
        createdAt: ''
    }])

    useEffect(() => {
        axios.get('http://localhost:5000/guides')
            .then((response) => setGuides(response.data))
            .catch((e) => console.log(e))
    }, [])

    return (
        <div className='guides-section'>
            <div className='container'>
            <div className='main-guides'>
                <h2 className='guides-title'>CÁC VIDEO HƯỚNG DẪN LUYỆN TẬP</h2>
                <div className='video-list'>
                    {guides.map((item) => {
                        const timeAgo = item.createdAt ? formatDistanceToNow(parseISO(item.createdAt)) : '';
                        return (
                            <a className='video-item' href={"/guides/" + item.id} key={item.id}>
                                <div className='video-thumbnail'>
                                    <iframe src={item.url_video + "/preview"} width="640" height="360" allow="autoplay"></iframe>
                                </div>
                                <div className='video-details'>
                                    <p className='video-title'>{item.title}</p>
                                    <p className='video-author'>{item.author}</p>
                                    <p className='video-date'>{item.createdAt} ({timeAgo} ago)</p>
                                </div>
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>
        </div>
    );
}

export default Guides
