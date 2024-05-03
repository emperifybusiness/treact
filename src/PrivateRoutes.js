import {Outlet, Navigate} from 'react-router-dom'
import React , {useState} from 'react'
import Login from './pages/Login'
export const PrivateRoutes = () => {
  const userinfo = true
  return userinfo ? <Navigate to="/admin" /> : <Navigate to="/login" />
}


