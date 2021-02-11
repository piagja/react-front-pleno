import React from 'react';
import ToUpperCaseComponent from '../components/ToUpperCase';
import ToLowerCaseComponent from './../components/ToLowerCaseComponent';

const App = () => {
  return (
    <div>
      <ToLowerCaseComponent>
        HELLO WORLD
      </ToLowerCaseComponent>

      <ToUpperCaseComponent>
        hello world
      </ToUpperCaseComponent>
    </div>
  )
}

export default App