import React, { useContext } from 'react';
import { InitalPageContext } from '../../contexts/InitialPageContext';

export function LoginPage() {
  const { handleInput, login } = useContext(InitalPageContext)
 
  return ( 
    <div>
      <label htmlFor="input">Login</label>
      <input name='login' type="text" placeholder='Nome de usuário' onChange={(event) => handleInput(event)} />
      <label htmlFor="input">Senha</label>
      <input name='senha' type="password" placeholder='Senha' onChange={(event) => handleInput(event)} />
      <button type='button' onClick={() => login()}>Fazer Login</button>
      <button type='button' >Ainda não tem cadastro?</button>
    </div>
  )
}