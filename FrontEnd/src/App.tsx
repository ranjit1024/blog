import './App.css'
import { Singup } from './pages/signup'
import { SignIn } from './pages/signin'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Blog } from './pages/blog'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AddBlog } from './pages/addblog'
import { YourBlogs } from './pages/yourBlogs'

const client = new QueryClient();

function App() {
  return <div>
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Singup />}></Route>
          <Route path='/signin' element={<SignIn />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
          <Route path='/add' element={<AddBlog />}></Route>
          <Route path='/yourblogs' element={<YourBlogs />}></Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>

  </div >
}

export default App
