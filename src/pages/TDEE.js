import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../assets/css/Tdee.css'
import ModalResult from '../components/ModalResult';
import { CircularProgress } from '@mui/material';

function TDEE() {
  useEffect(() => {
    document.title = "Tính TDEE";
  }, []);

  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({});

  const [results, setResults] = useState({
    bmr: '',
    tdee: '',
    calories: '',
    meal_plan: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleReset = () => {
    setFormData({
      gender: '',
      age: 0,
      height: 0,
      weight: 0,
      intensity: '',
      goal: '',
      level: '',
      expected: ''
    })
  }


  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (
      !formData.gender ||
      !formData.age ||
      !formData.height ||
      !formData.weight ||
      !formData.intensity ||
      !formData.goal ||
      !formData.level ||
      (formData.goal === "giảm cân" && !formData.expected)
    ) {
      alert('Vui lòng nhập đầy đủ thông tin!');
      return; 
    }

    setIsLoading(true); 

    axios.post('http://localhost:5000/get_diet_plan', formData)
      .then(response => {
        setResults(response.data);
        setShowModal(true);
      })
      .catch(error => {
        console.error('Có lỗi xảy ra!', error);
      })
      .finally(() => {
        setIsLoading(false); 
      });
  };
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="tdee-section">
      <div className='container'>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <label>
              Giới tính:
              <select name="gender" value={formData.gender} onChange={handleChange} required>
                <option value="">...</option>
                <option value="nam">Nam</option>
                <option value="nữ">Nữ</option>
              </select>
            </label>
            <br />
            <label>
              Tuổi:
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="năm"
                required
              />
            </label>
            <br />
            <label>
              Chiều cao:
              <input
                type="number"
                name="height"
                value={formData.height}
                onChange={handleChange}
                placeholder="cm"
                required
              />
            </label>
            <br />
            <label>
              Cân nặng:
              <input
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                placeholder="kg"
                required
              />
            </label>
            <br />
            <label>
              Cường độ tập luyện:
              <select name="intensity" value={formData.intensity} onChange={handleChange} required>
                <option value="">...</option>
                <option value="ít vận động">Ít vận động</option>
                <option value="vận động nhẹ">Vận động nhẹ</option>
                <option value="vận động vừa">Vận động vừa</option>
                <option value="vận động nặng">Vận động nặng</option>
                <option value="vận động rất nặng">Vận động rất nặng</option>
              </select>
            </label>
            <br />
            <label>
              Mục tiêu của bạn:
              <select name="goal" value={formData.goal} onChange={handleChange} required>
                <option value="">...</option>
                <option value="giảm cân">Giảm cân</option>
                <option value="duy trì">Duy trì</option>
                <option value="tăng cân">Tăng cân</option>
              </select>
            </label>
            <br />
            {formData.goal === "giảm cân" && (
              <>
                <label>
                  Cân nặng mong đợi:
                  <input
                    type="number"
                    name="expected"
                    value={formData.expected}
                    onChange={handleChange}
                    placeholder="kg"
                  />
                </label>
                <br />
                <label>
                  Bạn muốn tăng cân thế nào?:
                  <select name="level" value={formData.level} onChange={handleChange} required>
                    <option value="">...</option>
                    <option value="chậm">Chậm</option>
                    <option value="bình thường">Bình thường</option>
                    <option value="nhanh">Nhanh</option>
                    <option value="cấp tốc">Cấp tốc</option> {/* Option mới */}
                  </select>
                </label>
              </>
            )}
            {formData.goal !== "giảm cân" && (
              <label>
                Bạn muốn tăng cân thế nào?:
                <select name="level" value={formData.level} onChange={handleChange} required>
                  <option value="">...</option>
                  <option value="chậm">Chậm</option>
                  <option value="bình thường">Bình thường</option>
                  <option value="nhanh">Nhanh</option>
                </select>
              </label>
            )}
            <br />
            <button type="submit">Tính TDEE</button>
          </form>
          <div className='reset'>
            <span onClick={handleReset}>Làm mới</span>
          </div>
          {isLoading && (
            <div className="loading-overlay">
              <CircularProgress className="loading-spinner" />
            </div>
          )}
          <ModalResult show={showModal} handleClose={handleCloseModal} results={results} />
        </div>
        <div className="description">
          <img src='http://cdn.thehinh.com/2016/12/logo-the-hinh.png' alt=''></img>
          <h2>TDEE là gì ?</h2>
          <p>TDEE (Total Daily Energy Expenditure) nghĩa là lượng calo bạn sẽ đốt cháy trong 1 ngày, bao gồm cả ăn chơi ngủ nghỉ và tập luyện.</p>
          <p>TDEE rất quan trọng trong việc giảm cân hay tăng cân hay tăng cơ vì nó giúp ta biết nên tiêu thụ bao nhiêu calo là đủ.</p>
          <p>Công thức tính rất đơn giản và phù hợp với mọi đối tượng.</p>
          <h3>Và đây là công cụ sẽ giúp bạn tính toán tự động</h3>
          <p>Công việc của bạn chỉ là nhập số liệu vào và bấm Tính TDEE mà thôi!</p>
        </div>
      </div>
    </div>
  );

}

export default TDEE;
