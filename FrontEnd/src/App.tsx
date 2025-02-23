import './App.css'
import { Singup } from './pages/signup'
import { SignIn } from './pages/signin'
import { RecoilRoot } from 'recoil'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return <div>
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Singup />}></Route>
          <Route path='/signin' element={<SignIn />}></Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  </div>
}

export default App
