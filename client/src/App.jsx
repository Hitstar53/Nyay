import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Dashboard from './components/lawyer/Dashboard/Dashboard';
import './App.css'

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <RootLayout />,
    children: [
      { index: true, element: <Login /> },
      {
        path: "user",
        children: [
          { path: "home", element: <Home /> },
        ],
      },
      {
        path: "lawyer",
        children: [
          { path: "dashboard", element: <Dashboard /> },
        ],
      },
    ],
  },
]);

const App = () => {
  const theme = createTheme({
    // typography: {
    //   fontFamily: ["Poppins", "sans-serif"].join(","),
    // },
  });
  return (
    // <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    // </ThemeProvider>
  );
}

export default App