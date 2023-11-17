
import {Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import RecoverPassword from './pages/RecoverPassword'
import CreateAccount from './pages/CreateAccount'



function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/recoverpass" element={ <RecoverPassword /> } />
      <Route path="/create-account" element={ <CreateAccount /> } />
    </Routes>
      
     
    </>
  )
}

export default App
