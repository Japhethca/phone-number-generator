import React from 'react';
import ReactDOM from 'react-dom';
import { css } from 'glamor';

import App from './App';

css.global('html,body', {
  padding: 0,
  margin: 0,
  backgroundColor: '#ffe4c4',
  fontFamily: 'ubuntu, serif',
});

ReactDOM.render(<App />, document.getElementById('root'));
