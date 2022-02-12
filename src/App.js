import React from 'react';
import Navibar from './components/navbar.js';
import { ChakraProvider } from '@chakra-ui/react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/home.js';
import Contact from './pages/contact.js';
import LoginForm from './pages/pricing.js';
import AdminLogin from './pages/admin/adminlogin.js';
import AdminDashboard from './pages/admin/admindashboard.js';
import FormList from './pages/FAQ.js';

function App() {
    return ( 
      <ChakraProvider>
      <div >
          <Navibar />
            <Routes>
            <Route exact path="/" element={<Home />}>
            </Route>
            <Route path="/admin" element={<AdminLogin />}>
            </Route>
            <Route path="/contact" element={<Contact />}>
            </Route>
            <Route path="/admindashboard/*" element={<AdminDashboard />}>
            </Route>
            <Route path="/pricing" element={<LoginForm />}>
            </Route>
            <Route path="/FAQ" element={<FormList />}>
            </Route>
            </Routes>
        </div>
    </ChakraProvider> 
    )
}

export default App;
