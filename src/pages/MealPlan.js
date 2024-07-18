import React from 'react'
import ReactMarkdown from 'react-markdown';
import { useLocation } from 'react-router-dom';
import '../assets/css/MealPlan.css'

function MealPlan() {
    const location = useLocation(); 
    const mealPlan = location.state?.mealPlan || '';
    return (
        <div className='meal-plan_container'>
            <h2 className='meal-plan_title'>MỘT SỐ GỢI Ý VỀ DINH DƯỠNG</h2>
            <ReactMarkdown>{mealPlan}</ReactMarkdown>
        </div>
    )
}

export default MealPlan
