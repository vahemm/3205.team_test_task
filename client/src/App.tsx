import React from 'react';
import './App.css';

import Form from './components/Form';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  return (
    <div className="app">
      <Form />
      <Dashboard />
    </div>
  );
};

export default App;
