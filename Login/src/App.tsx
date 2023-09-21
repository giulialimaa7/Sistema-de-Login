import { GlobalStyles } from "./styles/global"
import { Login } from "./pages/login"
import { Route, Routes } from "react-router-dom"
import { Private } from "./pages/private"
import { useAuth } from "./context/Auth/AuthProvider"

export function App() {
  const { IsAuthenticated, IsLogged } = useAuth()

  return (
    <>
     <GlobalStyles/>
      <Routes>
        <Route path='/' element={ <IsLogged><Login/></IsLogged> } />
        <Route path='/private' element={ <IsAuthenticated><Private/></IsAuthenticated> } />
      </Routes>
    </>
  )   
}