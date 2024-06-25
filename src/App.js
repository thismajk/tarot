
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home'
import Admin from './pages/admin'
import NotFound from './pages/notFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/mg-admin" element={<Admin/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
