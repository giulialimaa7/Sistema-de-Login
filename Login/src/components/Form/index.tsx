import { CreateAccountContainer, Form } from "./styles"
import { Input } from "./Input"
import { useNavigate } from 'react-router-dom'
import { useState, ChangeEvent } from 'react'
import { useAuth } from "../../context/Auth/AuthProvider"

export function LoginForm() {
  const navigate = useNavigate()
  const { handleLogin } = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const handleSubmit = async () => {

    if( !email || !password ){
      return alert("Preencha os campos");
    }

    const token = await handleLogin(email, password);
    
    if (token) {
      navigate('/private');
    }
    else {
      navigate('/')
    }
  }
  
  return (
    <Form>
      <Input
        label="E-mail"
        placeholder="Digite seu e-mail"
        type="email"
        value={ email }
        onChange={ (event:ChangeEvent<HTMLInputElement>)=> setEmail(event.target.value) }
      />

      <Input
        label="Senha"
        placeholder="Digite sua senha"
        type="password"
        value={ password }
        onChange={ (event:ChangeEvent<HTMLInputElement>) => setPassword(event.target.value) }
      />

      <button onClick={ handleSubmit }> Entrar </button>

      <CreateAccountContainer>
        Ainda não tem uma conta?
        <a href="#"> Inscreva-se </a>
      </CreateAccountContainer>
    </Form>
  )
}