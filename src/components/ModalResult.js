import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

function ModalResult({ show, handleClose, results }) { 
  const navigate = useNavigate();
  const handleDisplayMealPlan = () => {
    navigate('/meal_plan', { state: { mealPlan: results.meal_plan } }); 
  }

  return (
    // Loại bỏ button "Tính TDEE" khỏi ModalResult
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Kết quả TDEE</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Hiển thị kết quả từ props */}
        {results && (
          <>
            <p>BMR của bạn là: {results.bmr}</p>
            <p>TDEE của bạn là: {results.tdee}</p>
            <p>Lượng calo cần thiết cho bạn: {results.calories}</p>
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleDisplayMealPlan}>
          Tham khảo thực đơn mẫu cho bạn!
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalResult;