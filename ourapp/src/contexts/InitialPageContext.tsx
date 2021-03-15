import { createContext, ReactNode } from "react";

interface InitalPageContextData {
  user: User,
  handleInput: (event) => void,
  login: () => void,
  createUser: () => void,
}

interface InitalPageContextProps {
  children: ReactNode;
}

interface User {
  email: String,
  login: String,
  senha: String,
}

export const InitalPageContext = createContext({} as InitalPageContextData)

export function InitialPageProvider({children} : InitalPageContextProps) {
  let user = {} as User;

  function handleInput(event) {
    user = {...user, [event.target.name]: event.target.value}
  }

  function login() {
    fetch('http://localhost:3300/api/login',
      {
        method: "POST",
        mode: "cors",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user)
      }
    ).then(async res => {  
      let verify = 'true' == await res.json();
      verify && (window.location.href='http://'+window.location.host+'/Home')
    });
  }

  function createUser() {
    fetch('http://localhost:3300/api/users',
     {
       method:'POST',
       mode: 'cors',
       headers: {'Content-Type': 'application/json'},
       body: JSON.stringify(user)
     }).then(res => {
       this.login();
     })
  }

  return (
    <InitalPageContext.Provider 
      value={{
        user,
        handleInput,
        login,
        createUser
      }}
    >
      {children}
    </InitalPageContext.Provider>
  )
}