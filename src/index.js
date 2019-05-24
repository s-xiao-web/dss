import React from 'react';
import ReactDOM from 'react-dom';
import Route from './router'

import 'antd/dist/antd.css'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Route />, document.getElementById('root'));

serviceWorker.unregister();