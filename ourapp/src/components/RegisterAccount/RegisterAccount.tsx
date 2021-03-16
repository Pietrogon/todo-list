import React, { useContext } from 'react';
import { InitalPageContext } from '../../contexts/InitialPageContext';

export function RegisterAccount() {
  const { handleInput , createUser } = useContext(InitalPageContext)

  return ( 
    <div>
      <label htmlFor="email">Email</label>
      <input name='email' type="text" placeholder='E-mail' onChange={(event) => handleInput(event)} />
      <label htmlFor="input">Login</label>
      <input name='login' type="text" placeholder='Nome de usuário' onChange={(event) => handleInput(event)} />
      <label htmlFor="input">Senha</label>
      <input name='senha' type="password" placeholder='Senha' onChange={(event) => handleInput(event)} />
      <button type='button' onClick={() => createUser()}>Confirmar Cadastro</button>
    </div>
  )
}