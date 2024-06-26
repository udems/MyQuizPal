import '../src/index.css'
import HomePage from './views/HomePage';
import { CodePage } from './views/CodePage';
import SignupPage from './views/SignUp';
import CodeVerificationPage from './views/CodeVerificationPage';
import SignInPage from './views/SignIn';
import ForgotPasswordPage from './views/ForgotPassword';
import ResetPasswordPage from './views/ResetPassword';
import VerificationCompletePage from './views/VerificationDone';
import QuizApp from './views/QuizApp';
import PracticeQuizApp from './views/PracticeQuizApp';
import QuizCompletionPage from './views/QuizCompletion'; // Import the new component
import CheckCorrectionsPage from './views/CorrectionPage';
import HomePage1 from './views/HomePage-1';
import SignUp_Extra from './views/SignUpExtra';


import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import { ProcedeTestPage } from './views/ProcedeTestPage';
// import PracticeQuizApp from './views/PracticeQuizApp';


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
      path: "/practice-quiz",
      element: <PracticeQuizApp/>
    },
  {
    path: "/quiz",
    element: <QuizApp />, // Route for QuizApp component
  },

  {
    path: "/quiz-completion", // Add the new route
    element: <QuizCompletionPage />,
  },


  {
    path: "/check-correction", // Add the new route
    element: <CheckCorrectionsPage />,
  },
  {
    path: "/signup", // Add the signup path
    element: <SignupPage />,
  },

    {
      path: "/code-verification",
      element: <CodeVerificationPage/>,
    },

  {
  path: "/signin", // Add the signup path
  element: <SignInPage />,
},

{ 
  path: "/forgot-password", 
  element: <ForgotPasswordPage /> ,
},

{
  path: "/reset-password",
  element: <ResetPasswordPage/>,
},

{
  path: "/verification-complete", // Add the new route
  element: <VerificationCompletePage />,
},
  {
  path:"/welcome",
  element: <HomePage1 />,
},
{
  path:'/signup-addition',
  element: <SignUp_Extra/>
},

  // put other pages here
]);

function App () {
 
  return(
    <RouterProvider router={router}/>
  )
}

export default App