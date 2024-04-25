// path : toolkit/src/page/Login/index.page.jsx
import api, {get} from '../../utils/axios.js'
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
  
  const navigate = useNavigate()
  
  const [user, setUser] = useState({
    email: '',
    mdp: ''
  })
  
  const handleChange = (e) => {
    const {name, value} = e.target
    setUser({
      ...user,
      [name]: value
    })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    api.post('/', user).then((res) => {
      if(res.data.token) {
        localStorage.setItem('jwtToken', res.data.token)
        navigate('/logged')
      }
    }).catch((err) => {
      console.error(err)
    })
  }
  
  return <form onSubmit={handleSubmit}>
    <input type={"email"} value={user.email} onChange={handleChange} name={"email"}/>
    <input type={"text"} value={user.mdp} onChange={handleChange} name={'mdp'}/>
    <input type={"submit"} value={'Login'}/>
  </form>
}

export default LoginPage