import HomePage from './views/HomePage'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  // put other pages here
]);

function App () {
  return(
    <RouterProvider router={router}/>
  )
}

export default App
