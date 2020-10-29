import React from 'react';
import { Provider } from 'react-redux';
import MainContent from './containers';
import store from './store';
import './app.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <MainContent />
      </Provider>
    </div>
  );
}

export default App;
