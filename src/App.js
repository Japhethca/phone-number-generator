import React from 'react';
import {css} from 'glamor';

import { StoreProvider } from './store/Provider';

import Generator from './components/Generator';


const headerStyles = css({
  textAlign: 'center',
  fontFamily: 'Vesper Libre, serif',
  fontSize: 40,
  color: 'gray'
});

function App() {
  return (
    <StoreProvider>
      <header {...headerStyles}>
        <h2>Phone Number Generator</h2>
      </header>
      <Generator />
    </StoreProvider>
  );
}

export default App;
