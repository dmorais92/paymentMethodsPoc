import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import PaymentMethods from './Components/PaymentMethods';
import StyledComponents from './Components/Components.styled';
import { ReactComponent as Logo } from './Components/Icons/logo.svg';
import Store from './Store';

const { AppBar } = StyledComponents;

function App({ className }) {
  return (
    <Provider store={Store}>
      <div className={`App ${className}`}>
        <AppBar>
          <span>Payments</span>
          <div>
            <span>
              Made with React
              {' '}
              <Logo />
            </span>
            <span>by</span>
            <span>
              <a href="https://github.com/dmorais92/"> David Morais</a>
            </span>
          </div>
        </AppBar>
        <PaymentMethods />
      </div>
    </Provider>
  );
}

App.propTypes = {
  className: PropTypes.string,
};
App.defaultProps = {
  className: '',
};

export default App;
