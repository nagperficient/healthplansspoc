import React, { Children } from 'react'
import AuthorizedNavbar from '../../components/navbars/AuthorizedNavbar'
import { Outlet } from 'react-router-dom'

const HealthLayout = () => {
  return (
    <div>
        <AuthorizedNavbar />
        <Outlet />
    </div>
  )
}

export default HealthLayout