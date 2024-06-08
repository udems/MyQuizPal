import HomePage from './views/HomePage'
import { CodePage } from './views/CodePage';

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
//Changed the path to code so as to view the new page.
  {
    path: "/code",
    element: <CodePage/>,
  },
  // put other pages here
]);

function App () {
 
  return(
    <RouterProvider router={router}/>
  )
}

export default App