import { createBrowserRouter } from "react-router-dom";

import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

import StudentProfile from "../Components/StudentProfile/StudentProfile";
import DashboardLayout from "../Layout/DashboardLayout";
import StudentRef from "../Components/StudeRef/StudentRef";
import StudentMyPass from "../Components/StudMyPass/StudentMyPass";
import Withdrawals from "../Components/WithDrawals/Withdrawals";
import Address from "../Components/Address/Address";
import ChangPass from "../Components/ChangPass/ChangPass";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/profile",
        element: <StudentProfile></StudentProfile>,
      },
      {
        path: "/reference",
        element: <StudentRef></StudentRef>,
      },
      {
        path: "/passbook",
        element: <StudentMyPass></StudentMyPass>,
      },
      {
        path: "/withdrawals",
        element: <Withdrawals></Withdrawals>,
      },
      {
        path: "/address&location",
        element: <Address></Address>,
      },
      {
        path: "changepass",
        element: <ChangPass></ChangPass>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },

  {
    path: "/register",
    element: <Register></Register>,
  },
]);
