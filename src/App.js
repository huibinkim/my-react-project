import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
//Route는 기본 url 뒤 /url Url을 의미한다.

const App = createBrowserRouter([
  {
    path: `${process.env.PUBLIC_URL}/`,
    element: <Home />,
  },
  {
    path: `${process.env.PUBLIC_URL}/movie/:id`,
    element: <Detail />,
  },
  {
    path: "/hello",
    element: <h1>hi</h1>,
  },
]);

export default App;
