import AuthNavbar from '../../components/navbars/AuthNavbar'
import AuthorizedNavbar from '../../components/navbars/AuthorizedNavbar'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div>
        <AuthNavbar />
        <Outlet />
    </div>
  )
}

export default AuthLayout