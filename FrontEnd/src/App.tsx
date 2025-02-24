import './App.css'
import { Singup } from './pages/signup'
import { SignIn } from './pages/signin'
import { RecoilRoot } from 'recoil'
import { Blog } from './pages/blog'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AddBlog } from './pages/addblog'

function App() {
  return <div>

    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Singup />}></Route>
          <Route path='/signin' element={<SignIn />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
          <Route path='/add' element={<AddBlog />}></Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  </div >
}

export default App
