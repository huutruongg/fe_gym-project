import React, { useEffect } from 'react'
import ReactMarkdown from 'react-markdown';
import { Link, useLocation } from 'react-router-dom';
import '../assets/css/MealPlan.css'

function MealPlan() {
    const location = useLocation();
    const mealPlan = location.state?.mealPlan || '';
    useEffect(() => {
        document.title = "Thực đơn gợi ý";
    }, []);
    return (
        <div className='meal-plan_container'>
            <h2 className='meal-plan_title'>MỘT SỐ GỢI Ý VỀ DINH DƯỠNG</h2>
            <ReactMarkdown>{mealPlan}</ReactMarkdown>
            <div className="back-button">
                <Link to="/tdee">Quay lại</Link>
            </div>
        </div>
    )
}

export default MealPlan
