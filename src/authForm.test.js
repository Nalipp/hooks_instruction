import React from 'react';
import ReactDOM from 'react-dom';
import AuthenticationForm from './AuthenticationForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AuthenticationForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
