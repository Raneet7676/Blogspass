import React from 'react';
import './App.css';
import PreviewPage from './pages/preview-page/PreviewPage';
import { Route , Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<PreviewPage/>}/>
      </Routes>
    </>
  )
}

export default App
