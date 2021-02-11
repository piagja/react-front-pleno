import React from 'react';
import ToUpperCaseComponent from '../components/ToUpperCaseComponent';
import ToLowerCaseComponent from './../components/ToLowerCaseComponent';
import ToggleCaseComponent from '../components/ToggleCaseComponent';

const App = () => {
  return (
    <div>
      <ToLowerCaseComponent>
        HELLO WORLD
      </ToLowerCaseComponent>

      <ToUpperCaseComponent>
        hello world
      </ToUpperCaseComponent>

      <ToggleCaseComponent initialMode='upper'>
        Clique Aqui
      </ToggleCaseComponent>
    </div>
  )
}

export default App