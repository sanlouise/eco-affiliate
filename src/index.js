// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

// Components
import App from './containers/App';
import BaseLayout from './components/BaseLayout';
import NavBar from './containers/NavBar';
import Footer from './components/Footer';

// Styles
import './globalStyles.css';

ReactDOM.render((
  <BrowserRouter>
    <BaseLayout>
      <NavBar>
        <Switch>
          <Route path="/" component={App}/>
        </Switch>
      </NavBar>
      <Footer />
    </BaseLayout>
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
