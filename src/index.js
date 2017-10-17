// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

// Components
import About from './components/About';
import App from './containers/App';
import BaseLayout from './components/BaseLayout';
import Footer from './components/Footer';
import NavBar from './containers/NavBar';

// Styles
import './globalStyles.css';

ReactDOM.render((
  <BrowserRouter>
    <BaseLayout>
      <NavBar>
        <Switch>
          <Route exact path="/" component={App}/>
          <Route path="/about" component={About}/>
        </Switch>
      </NavBar>
      <Footer />
    </BaseLayout>
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
