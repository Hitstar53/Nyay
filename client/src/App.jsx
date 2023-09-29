import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Dashboard from './components/lawyer/Dashboard/Dashboard';
import ResearchAid from './components/lawyer/Research/ResearchAid';
import Probono from './components/lawyer/Probono/Probono';
import FindLawyer from './components/user/findLawyer/FindLawyer';
import './App.css'
import Profile from './components/lawyer/Profile/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <RootLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "home", element: <Home /> },
      { index: true, element: <Home /> },
      {
        path: "user",
        children: [
          { path: "home", element: <Home /> },
          { path: "find lawyers", element: <FindLawyer /> },
        ],
      },
      {
        path: "lawyer",
        children: [
          { path: "dashboard", element: <Dashboard /> },
          { path: "research", element: <ResearchAid /> },
          { path: "probono", element: <Probono /> },
          { path: "profile", element: <Profile /> },
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
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App