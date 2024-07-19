import React from 'react'
import { Routes, Route } from "react-router-dom";
import TDEE from './pages/TDEE';
import Guides from './pages/Guides';
import Guide from './pages/GuideDetail';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import BlogDetail from './pages/BlogDetail';
import MealPlan from './pages/MealPlan';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import GuideList from './pages/GuidesManagement';
import BlogList from './pages/BlogsManagement';
import CreateGuide from './pages/CreateGuide';
import UpdateGuide from './pages/UpdateGuide';
import CreateBlog from './pages/CreateBlog';
import UpdateBlog from './pages/UpdateBlog';

function App() {
  return (
    <div>
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
        <Route path='/contact' element={<Contact />} />
        {/* Admin routes */}
        <Route path='/admin' element={<Admin />} />
        <Route path='/admin/guides_management' element={<GuideList />} />
        <Route path='/admin/blogs_management' element={<BlogList />} />
        <Route path='/admin/create_guide' element={<CreateGuide />} />
        <Route path='/admin/update_guide/:id' element={<UpdateGuide />} />
        <Route path='/admin/create_blog' element={<CreateBlog />} />
        <Route path='/admin/update_blog/:id' element={<UpdateBlog />} />
      </Routes>
    </div>
  )
}

export default App