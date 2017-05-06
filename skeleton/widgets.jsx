import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './frontend/clock';

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(<Clock />, document.getElementById('main'));
});
