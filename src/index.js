import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './containers/App';
import { AppContainer } from 'react-hot-loader';

ReactDOM.render(
    <TodoList />,
    document.getElementById('app')
);
if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NextApp = require('./containers/App').default;
    ReactDOM.render(
            <AppContainer>
                <NextApp />
            </AppContainer>,
      document.getElementById('app')
    );
  });
}