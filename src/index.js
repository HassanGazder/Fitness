import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Aboutus from './components/Aboutus';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Services from './components/Services';
import Blog from './components/Blog';
import Blogdetails from './components/Blog-details';
import Bmicalculator from './components/Bmi-calculator';
import Team from './components/Team';
import Errorpage from './components/404';
import Classdetails from './components/Classdetails';
import Classtimetable from './components/Class-timetable'
import Layout from './components/Layout'

// Create the router using createBrowserRouter
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Aboutus />
      </Layout>
    ),
  },
  {
    path: '/About',
    element: (
      <Layout>
        <Aboutus />
      </Layout>
    ),
  },
  {
    path: '/Gallery',
    element: (
      <Layout>
        <Gallery />
      </Layout>
    ),
  },
  {
    path: '/Contact',
    element: (
      <Layout>
        <Contact />
      </Layout>
    ),
  },
  {
    path: '/Service',
    element: (
      <Layout>
        <Services />
      </Layout>
    ),
  },
  {
    path: '/Classdetail',
    element: (
      <Layout>
        <Classdetails />
      </Layout>
    ),
  },
  {
    path: '/Classtimetable',
    element: (
      <Layout>
        <Classtimetable />
      </Layout>
    ),
  },
  {
    path: '/Blog',
    element: (
      <Layout>
        <Blog />
      </Layout>
    ),
  },
  {
    path: '/Blog-details',
    element: (
      <Layout>
        <Blogdetails />
      </Layout>
    ),
  },
  {
    path: '/Bmi-Calculator',
    element: (
      <Layout>
        <Bmicalculator />
      </Layout>
    ),
  },
  {
    path: '/Team',
    element: (
      <Layout>
        <Team />
      </Layout>
    ),
  },
  {
    path: '*',
    element: <Errorpage />, // Error page without header and footer
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Use RouterProvider and pass the created router */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
