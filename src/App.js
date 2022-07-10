import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Feed from './Components/Feed/Feed';
import Widget from './Components/Widget/Widget'

const App = () => {
  return (
    <div className="app">
      {/* Sidebar */}
      <Sidebar />

      {/* Feed */}
      <Feed />

      {/* Widget */}
      <Widget />
    </div>
  );
}

export default App;
