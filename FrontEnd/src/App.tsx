import './App.css'
import { Singup } from './pages/signup'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Singup />}></Route>
      </Routes>
    </BrowserRouter>
  </div>
}

export default App
