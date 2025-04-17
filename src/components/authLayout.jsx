import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthLayout = ({ children }) => {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  useEffect(() => {
    if (!token) {
      navigate('/login', { replace: true })
    }
  }, [token, navigate])

  return token ? children : null
};

export default AuthLayout