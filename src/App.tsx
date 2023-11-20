
import {Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import RecoverPassword from './pages/RecoverPassword'
import CreateAccount from './pages/CreateAccount'
import Home from './pages/Home'
import Header from './components/Header'



function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/recoverpass" element={ <RecoverPassword /> } />
      <Route path="/create-account" element={ <CreateAccount /> } />
      <Route path="/home" element={ <Home /> } />
    </Routes>
      
     
    </>
  )
}

export default App
