import React, { useEffect, useState } from 'react';
import '../assets/css/Contact.css'

function Contact() {
    useEffect(() => {
        document.title = "Liên hệ"; 
      }, []); 
    const [formData, setFormData] = useState({
        hoTen: '',
        soDienThoai: '',
        email: '',
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Xử lý dữ liệu form ở đây
        console.log(formData);
    };

    return (
        <div className='contact-section'>
            <div className='container'>
                <div className='main-contact'>
                    <div className='img-contact'>
                        <img src='https://s3.ap-northeast-1.amazonaws.com/h.files/images/1721319999842_srh42U4mzm.jpg' alt='hero'></img>
                    </div>
                    <div className="form-container">
                        <h2>Liên hệ</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="hoTen">Họ tên</label>
                                <input
                                    type="text"
                                    id="hoTen"
                                    name="hoTen"
                                    value={formData.hoTen}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="soDienThoai">Số điện thoại</label>
                                <input
                                    type="tel"
                                    id="soDienThoai"
                                    name="soDienThoai"
                                    value={formData.soDienThoai}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <button type="submit">Đăng ký</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;