import Start from './Authorization/Starting'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Authorization/Login'
import Game from './Game'
import SignUp from './Authorization/SignUp'
import { AuthContext, AuthContextType, useAuthContext } from './context'
import { useState } from 'react'

  export type loginReq = {
      Email: string,
      Password: string
  };

function App() {

  const [credentials, setCredentials] = useState<loginReq>({
    Email: '',
    Password: ''
  })
  const contextValue: AuthContextType = { credentials, setCredentials };


  return (
    <AuthContext.Provider value={contextValue}>
      <Router>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  )
}

export default App
