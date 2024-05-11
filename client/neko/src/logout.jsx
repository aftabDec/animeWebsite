import {useEffect} from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from './store/store'
const logout = () => {
    const {logOutUser} = useAuth()
    useEffect(() => {
      logOutUser()
     
    }, [logOutUser],)
    return <Navigate to="/login"/>
  }
  
  export default logout
  

