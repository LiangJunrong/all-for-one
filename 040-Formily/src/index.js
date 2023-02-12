import React from 'react';
import ReactDOM from 'react-dom/client';
import Formily from './Formily';

const App = () => {
  return (
    <div className="App">
      <Formily />
    </div>
  );
};

// 最终渲染节点
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
