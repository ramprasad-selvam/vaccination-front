import { BrowserRouter, useRoutes } from 'react-router-dom'
import './App.css'
import { Suspense } from 'react'
import { ToastContainer } from 'react-toastify'
import { routes } from './routes'
import Loader from './components/presentational/Loader'

const AppRoutes = () => useRoutes(routes)

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />} >
          <AppRoutes />
          <ToastContainer style={{color : "black"}} autoClose={1000} />
      </Suspense>
    </BrowserRouter>
  )
}

export default App
