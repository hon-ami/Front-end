import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configure } from './redux/store';
import App from './components/App/App';
import './index.scss';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<Provider store={configure()}>
  <App />
</Provider>,
document.getElementById('root'));

serviceWorker.unregister();
