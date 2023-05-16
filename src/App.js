import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './components/default'

export default function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}
