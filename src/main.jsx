import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './pages/App.jsx'
import AboutPage from './pages/about.jsx';
import InfraTechPage from './pages/InfraTech.jsx';
import CurriculumPage from './pages/Curriculum.jsx';
import StudentPage from './pages/Student.jsx';
import AdmissionPage from './pages/Admission.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element = {<App />} />
        <Route path='aboutPage' element = {<AboutPage />} />
        <Route path='infraTechPage' element={<InfraTechPage/>}/>
        <Route path='curriculumPage' element={<CurriculumPage/>}></Route>
        <Route path='studentLifePage' element={<StudentPage/>}></Route>
        <Route path='admissionPage' element={<AdmissionPage/>}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
