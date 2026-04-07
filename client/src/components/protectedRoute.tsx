import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

interface ProtectedRouteProps {
  adminOnly?: boolean
}

const ProtectedRoute = ({ adminOnly = false }: ProtectedRouteProps) => {
  const { user, loading } = useAuth()

  if (loading) return <div>Loading...</div> // Wait for the "Global Brain" to wake up

  if (!user) {
    return <Navigate to="/login" replace /> // Not logged in? Kick them to Login.
  }

  if (adminOnly && user.role !== 'admin') {
    return <Navigate to="/" replace /> // Not an admin? Kick them to Home.
  }

  return <Outlet /> // If they pass the test, let them through!
}

export default ProtectedRoute