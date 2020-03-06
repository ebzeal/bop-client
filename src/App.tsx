import React from 'react';
// import Routes from './routes/index';

const App = (): JSX.Element => {
  const sum = (a:number, b:number):number => a+b
  
  return (
    <div data-test="appComponent">
      {/* <Routes /> */}
      <h1>Welcome to React with Webpack!! {sum(20,20)} </h1>
    </div>
  );
};

export default App;
