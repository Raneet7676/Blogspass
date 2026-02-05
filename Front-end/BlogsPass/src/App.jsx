import React from 'react';
import './App.css';
import PreviewPage from './pages/preview-page/PreviewPage';
import { Route , Routes } from 'react-router-dom';
import Home from './pages/home-page/Home';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<PreviewPage/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
