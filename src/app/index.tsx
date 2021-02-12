import React, { useState } from 'react';
import ToggleCaseComponent from '../components/ToggleCaseComponent';

const App = () => {
  const [ show, setShow ] = useState(false)
  const [mode, setMode] = useState<'lower' | 'upper'>('lower')
  return (
    <div>
      <button onClick={() => setShow(show => !show)}>
        { show ? 'Remover' : 'Inserir' }
      </button>
      <p><button onClick={() => setMode(mode => mode === 'lower' ? 'upper' : 'lower')}>
        { mode === 'lower' ? 'Converter para UpperCase' : 'Converter para LowerCase' }
      </button></p>
      { show && (
      <ToggleCaseComponent initialMode={mode}>
        Clique Aqui
      </ToggleCaseComponent> )}
    </div>
  )
}

export default App