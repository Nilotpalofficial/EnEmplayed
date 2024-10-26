
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './tailwind.css';
import Home from './components/Home'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup';
import Jobs from './components/Jobs';
import Browser from './components/Browser';
import AboutUs from './components/AboutUs';
import Profile from './components/ui/Profile';

function App() {
  const appRouter =createBrowserRouter([
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/signup',
      element:<Signup/>
    },
    {
      path:'/jobs',
      element:<Jobs/>
    },
    {
      path:"/Description/:id",
      element:<Description/>
    },
    {
      path:'browser',
      element:<Browser/>
    },
    {
      path:'aboutUs',
      element:<AboutUs/>
    },
    {
      path:'profile',
      element:<Profile/>
    },
    
  ])

  return (
    <>
      <RouterProvider router={appRouter}/>
    </>
  )
}

export default App
