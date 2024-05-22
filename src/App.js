import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainOut from './components/MainOut';
import ConoceMedicar from "./components/ConoceMedicar";
import AcuerdoUsuario from "./components/AcuerdoUsuario";
import PoliticaPrivacidad from "./components/PoliticaPrivacidad";
import CodigoConducta from "./components/CodigoConducta";
import IniciarSesion from "./components/IniciarSesion";
import Registrarse from "./components/Registrarse";
import InicioUsuario from "./components/InicioUsuario";
import InicioProfesional from "./components/InicioProfesional";
import PerfilProfesional from "./components/PerfilProfesional";
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    const userType = localStorage.getItem('userType');
    if (token) {
      const redirectUrl = userType === 'nRadio' ? "/inicio" : "/inicio-profesional";
      window.location.href = redirectUrl;
    }
  }, []);

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainOut />} />
        <Route path="/conoce-medicar" element={<ConoceMedicar />} />
        <Route path="/acuerdo-con-el-usuario" element={<AcuerdoUsuario />} />
        <Route path="/politica-de-privacidad" element={<PoliticaPrivacidad />} />
        <Route path="/codigo-de-conducta" element={<CodigoConducta />} />
        <Route path="/iniciar-sesion" element={<IniciarSesion />} />
        <Route path="/registrarse" element={<Registrarse />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/inicio" element={<InicioUsuario />} />
          <Route path="/inicio-profesional" element={<InicioProfesional />} />
          <Route path="/perfil-profesional" element={<PerfilProfesional />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;

