import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TDEE from './pages/TDEE';
import Guides from './pages/Guides';
import Guide from './pages/GuideDetail';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import EditorPage from './pages/EditorBlog';
import BlogDetail from './pages/BlogDetail';
import MealPlan from './pages/MealPlan';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* User routes */}
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/tdee' element={<TDEE />} />
          <Route path='/guides' element={<Guides />} />
          <Route path='/guides/:id' element={<Guide />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/blogs/:id' element={<BlogDetail />} />
          <Route path='meal_plan' element={<MealPlan />} />
          {/* Admin routes */}
          <Route path='/blog_editor' element={<EditorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
