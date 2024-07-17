import React from 'react';
import {withLayout} from "./layout/Layout";
import './styles/globals.css'
import AppRouter from "./router/AppRouter";
import {BrowserRouter} from "react-router-dom";
import {Header} from "./layout/Header/Header";
function App() {
  return (
      <BrowserRouter>
        <AppRouter></AppRouter>
      </BrowserRouter>
  );
}

export default withLayout(App);
