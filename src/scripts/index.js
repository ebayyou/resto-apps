/* eslint-disable import/first */
require('./vendor');

import '../styles/main.scss';
import './components/FooterElement';
import './components/AppBar';
// import swRegister from './utils/sw-register';
import App from './view/app';

const app = new App({
  button: document.querySelector('#menu-navbar'),
  drawer: document.querySelector('.navbar'),
  content: document.querySelector('#main-content'),
});

window.addEventListener('load', async () => {
  app.renderPage();
  // await swRegister();
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

const skipToContent = document.querySelector('.skip-to-content');
skipToContent.addEventListener('keypress', (event) => {
  if (event.keyCode === 13) {
    document.querySelector('#main-content').focus();
  }
});
