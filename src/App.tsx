import React from 'react';
import './App.css';
import {withLayout} from "./layout/Layout";

function App() {
  return (
      <h1>Привет мир!</h1>
  );
}

export default withLayout(App);
