
import { createBrowserRouter, RouterProvider, useParams } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Quizs from './components/Quizs/Quizs';
import Statistics from './components/Statistics/Statistics';
import Topics from './components/Topics/Topics';
import Main from './layouts/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path:'/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path:'/home',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        
        {
          path:'/topics',
          loader: async() => fetch(' https://openapi.programming-hero.com/api/quiz'),
          element: <Topics></Topics>
        },
        // {
        //   path:'quizData/:id',
        //   loader: async ({params}) => fetch(` https://openapi.programming-hero.com/api/quiz/${params.id}`),
        //   element: <Quizs></Quizs>
        // },
        {
          path : '/statistics',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Statistics></Statistics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
       
      ]
    },
    {
      path: '*',
      element: <ErrorPage></ErrorPage>
    }
    
  ])
  return (
    <div >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
