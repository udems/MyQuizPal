import HomePage from './views/HomePage'
import { CodePage } from './views/CodePage';
import SignupPage from './views/SignUp';
import CodeVerificationPage from './views/CodeVerificationPage';
import SignInPage from './views/SignIn'
import ForgotPasswordPage from './views/ForgotPassword';
import HomePage1 from './views/HomePage-1';

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import { ProcedeTestPage } from './views/ProcedeTestPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/code",
    element: <CodePage/>,
  },

  {
    path: "/procede",
    element: <ProcedeTestPage/>,
  },

  {
    path: "/signup", // Add the signup path
    element: <SignupPage />,
  },

    {
      path: "/code-verification",
      element: <CodeVerificationPage/>
    },

  {
  path: "/signin", // Add the signup path
  element: <SignInPage />,
},

{ 
  path: "/forgot-password", 
  element: <ForgotPasswordPage /> 
},

{
  path:"/HomePage-1",
  element:<HomePage1/>

},

  // put other pages here
]);

function App () {
 
  return(
    <RouterProvider router={router}/>
  )
}

export default App