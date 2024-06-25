import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Dashboard, {loader as DashboardLoader} from './components/lawyer/Dashboard/Dashboard';
import ResearchAid from './components/lawyer/Research/ResearchAid';
import Probono from './components/lawyer/Probono/Probono';
import FindLawyer from './components/user/findLawyer/FindLawyer';
import ProBono from './components/user/proBono/ProBono';
import Profile, {loader as ProfileLoader} from './components/lawyer/Profile/Profile';
import PostBooking from './components/user/postBooking/PostBooking';
import DocTrans from './components/user/DocTrans';
import Call from './components/VidConf/Call';
import MyAppointments from './components/user/MyAppointments';
import { SocketProvider } from './context/SocketProvider'
import './App.css'

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <RootLayout />,
    children: [
      { path: "login", element: <Login /> },
      { index: true, element: <Home /> },
      { path: "chat", element: <Call /> },
      {
        path: "user",
        children: [
          { path: "home", element: <Home /> },
          { path: "find lawyers", element: <FindLawyer /> },
          { path: "probono", element: <ProBono /> },
          { path: "book", element: <PostBooking /> },
          { path: "upload", element: <DocTrans /> },
          { path: "myappointments", element: <MyAppointments /> },
        ],
      },
      {
        path: "lawyer",
        children: [
          { path: "dashboard", element: <Dashboard />, loader: DashboardLoader },
          { path: "research", element: <ResearchAid /> },
          { path: "probono", element: <Probono /> },
          { path: "profile/:id", element: <Profile />, loader: ProfileLoader },
        ],
      },
    ],
  },
]);

const App = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
    },
  });
  return (
    <SocketProvider>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </SocketProvider>
  );
}

export default App