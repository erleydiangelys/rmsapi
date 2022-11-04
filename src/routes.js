import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import Character from './Character';
import Location from './Location';
import Locations from './Locations';
import Episodes from './Episodes';

export const Router = () => {
  // console.log(login);

  return(
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/character/:id" element={<Character />} />
          <Route path="/location" element={<Locations />} /> 
          <Route path="/episode" element={<Episodes />} /> 
          <Route path="/location/:idLoc" element={<Location />} /> 
          <Route path="/character/:id/location/:idLoc" element={<Location />} /> 
        </Routes>
  )
}

export default Router;
