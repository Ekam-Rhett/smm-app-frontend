import SideBar from './sidebard.js'
import { Routes, Route } from "react-router-dom";
import CategoriesAll from './categoriesall.js'
import AddEdit from './video/AddEdit.js'
import View from './video/View.js'
import About from './video/About.js'
import Home from './video/home.js'
import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../../CSS/admindashboard.css'

const AdminDashboard = () => {
  
    return (
      <div>
     <SideBar />
        <Routes>
            <Route exact path="/" element={<Home />}>
            </Route>
            <Route path="/add" element={<AddEdit />}>
            </Route>
            <Route path="/update:id" element={<AddEdit />}>
            </Route>
            <Route path="/view:id" element={<View />}>
            </Route>
            <Route path="/about" element={<About />}>
            </Route> 
      </Routes>
 </div>
    )
};
  
  export default AdminDashboard;