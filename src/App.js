import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import Main from "./Layouts/Main";
import Home from "./Components/Home/Home";
import Statistics from "./Components/Statistics/Statistics";
import Blogs from "./Components/Blogs/Blogs";
import ExamDetails from "./Components/Home/ExamDetails/ExamDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        loader: async () => {
          return fetch("https://openapi.programming-hero.com/api/quiz");
        },
        element: <Home></Home>,
      },

      {
        path: "api/online-exam/:topicID",
        loader: async ({ params }) => {
          return fetch(
            `https://openapi.programming-hero.com/api/quiz/${params.topicID}`
          );
        },
        element: <ExamDetails></ExamDetails>,
      },

      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App container">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
