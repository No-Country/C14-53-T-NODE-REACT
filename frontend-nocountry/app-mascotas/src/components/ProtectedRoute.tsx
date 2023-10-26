import { Navigate, Outlet } from 'react-router-dom'

interface Props {
  isAllowed: boolean
  children?: React.ReactNode
}

export const ProtectedRoute = ({ isAllowed, children }: Props) => {
  if (!isAllowed) return <Navigate to='/login'></Navigate>

  return children ? <>children</> : <Outlet />
}
