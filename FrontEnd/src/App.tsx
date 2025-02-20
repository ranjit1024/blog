import './App.css'
import { Singup } from './pages/signup'
import { SignIn } from './pages/signin'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Singup />}></Route>
        <Route path='/signin' element={<SignIn />}></Route>
      </Routes>
    </BrowserRouter>
  </div>
}

export default App
