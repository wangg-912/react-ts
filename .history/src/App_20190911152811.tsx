import React from 'react';
/* import logo from './logo.svg'; */
import './App.css';
import SiderDemo from "./layout/Layout"
/* import HooksDemo from "./components/HooksDemo" */

const App : React.FC = () => {
  return (
    <div className="App">
      <div className="App-header">
        <SiderDemo/>
      </div>

    </div>
  );
}

export default App;
