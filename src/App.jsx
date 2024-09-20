import { Children, useState } from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import {Home} from './pages/Home'
import { Country } from './pages/Country';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import './App.css';
import { AppLayout } from './components/AppLayout'
import { ErrorPage } from './pages/ErrorPage';

const router= createBrowserRouter([

  {
    path: '/',
    element : <AppLayout/>,
    errorElement : <ErrorPage/>,
  children :[ 

    {
      path:'/',
      element : <Home/> 
    },
    {
      path:'country',
      element : <Country/>
      
    },
    {
      path:'about',
      element : <About/> 
    },
    {
      path:'contact',
      element : <Contact/> 
    },
  ] 
  }])

const App = ()=> {
  


  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
