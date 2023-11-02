import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import { useGlobalStore } from '../store/globalStore'
// import { useEffect } from 'react'

interface Props {
  isAllowed: boolean
  children?: React.ReactNode
}

export const ProtectedRoute = ({ isAllowed, children }: Props) => {
  const logout = useGlobalStore(state => state.logout)
  const navigate = useNavigate()

  if (!Cookies.get('token')) {
    logout()
    navigate('/login')
  }

  if (!isAllowed) return <Navigate to='/login'></Navigate>

  return children ? <>children</> : <Outlet />
}
