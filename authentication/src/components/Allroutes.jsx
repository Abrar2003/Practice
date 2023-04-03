import React from 'react'
import Registration from '../Pages/Registration'
import Login from '../Pages/Login'
import { Routes, Route } from "react-router-dom";

export default function Allroutes() {
  return (
    <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/login" element={<Login />} />
    </Routes>
  )
}
