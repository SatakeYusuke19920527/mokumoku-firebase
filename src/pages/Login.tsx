import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';

import { login, createUser, googleLogin, userNameUpdate } from '../lib/firebase';

// components
import CnTextField from '../components/CnTextField'
import CnButton from '../components/CnButton';

const Login: React.FC<{}> = () => {
  const history = useHistory()
  const [name,setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const handleEmailChange = (value: string) => {
    setEmail(value)
  }

  const handlePasswordChange = (value: string) => {
    setPassword(value)
  }

  const handleNameChange = (value: string) => {
    setName(value)
  }

  const fbLogin = async () => {
    console.log("this is invoked")
    await userNameUpdate(name)
    const result = await login(email, password)
    if (result === 'success') {
      history.push('/main')
    } else {
      console.log('error')
    }
  }

  const fbCreateUser = async () => {
    console.log('this is invoked')
    const result = await createUser(email, password)
    if (result === 'success') {
      history.push('/main')
    } else {
      console.log('error')
    }
  }

  const fbGoogleLogin = async () => {
    const result = await googleLogin()
    console.log('this is invoked', result)
    history.push('/main')
  }

  return (
    <div>
      <h1>NewOne Login</h1>
      <CnTextField label="name" onChange={e => handleNameChange(e.target.value)} />
      <CnTextField label="email" onChange={e => handleEmailChange(e.target.value)} />
      <CnTextField label="password" onChange={e => handlePasswordChange(e.target.value)} />
      <CnButton buttonName="login" onClick={fbLogin} />
      <CnButton buttonName="createUser" onClick={fbCreateUser} />
      <CnButton buttonName="googleLogin" onClick={fbGoogleLogin} />
    </div>
  )
}

export default Login
