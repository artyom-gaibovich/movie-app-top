import React from 'react';
import {withLayout} from "./layout/Layout";
import './styles/globals.css'
function App() {
  return (
      <h1>Привет мир!</h1>
  );
}

export default withLayout(App);
