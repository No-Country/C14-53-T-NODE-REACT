import { Navigate, Outlet } from 'react-router-dom'

interface Props {
  isAllowed: boolean
  children?: React.ReactNode
}

export const ProtectedRouteAfterLogin = ({ isAllowed, children }: Props) => {
  if (isAllowed) return <Navigate to='/dashboard'></Navigate>

  return children ? <>children</> : <Outlet />
}
