import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav';

import Footer from './components/footer/Footer';
import { useState } from 'react';
import Home from './components/Home/Home';
import Quote from './components/Quote/Quote';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Resturant from './components/Resturant/Resturant';
import Layout from './components/Layout';
import Food from './components/Food/Food';
import Contact from './components/Contact/Contact';


function App() {
  const [mode, setMode] = useState('dark');

  const toggle = () => {
    setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
  };
  // console.log(mode);

  const route = createBrowserRouter([
    {
      path: "/",
      element: <Layout mode={mode} toggle={toggle}/>,
      children: [
        {
          path: "/",
          element: <Home mode={mode}></Home>
        },
        {
          path: '/home',
          element: <Home mode={mode}></Home>
        },
        {
          path: '/quotas',
          element: <Quote mode={mode}></Quote>
        },
        {
          path:'/resturant',
          element:<Resturant mode={mode}/>
        },
        {
          path:"/food",
          element:<Food></Food>
        },
        {
          path :"/contact",
          element:<Contact mode={mode}></Contact>
        },
        // {
        //   path:'*',
        //   element: <Home mode={mode}></Home>
        // }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;