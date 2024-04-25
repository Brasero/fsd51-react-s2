// path: toolkit/src/component/PrivateRoute/index.jsx
import {useEffect, useState} from "react";
import api, {get} from '../../utils/axios.js'
import {Navigate, useNavigate} from "react-router-dom";

const PrivateRoute = ({id, children}) => {
    
    const navigate = useNavigate()
    
    console.log(id)
    const isConnected = () => {
        const token = localStorage.getItem('jwtToken')
        if (!token) {
            return false
        }
        return get('/isConnected', token).then(res => {
            if(res.status !== 200 || res.data === 'Unauthorized') {
                return false
            }
            if(res.data === true) {
                return true
            }
            return false
        })
    }
    
   
    
    
  return (
    <>
        {
            isConnected() ? children : <Navigate to={'/'} />
        }
    </>
  )
}

export default PrivateRoute