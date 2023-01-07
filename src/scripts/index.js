import 'regenerator-runtime';
import '../styles/main.scss';
import './components/AppBar';
import './components/FooterElement';
import swRegister from './utils/sw-register';
import App from './view/app';

const app = new App({
  button: document.querySelector('#menu-navbar'),
  drawer: document.querySelector('.navbar'),
  content: document.querySelector('#main-content'),
});

window.addEventListener('load', async () => {
  app.renderPage();
  await swRegister();
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

document.querySelector('.skip-to-content')
  .addEventListener('keypress', (event) => {
    if (event.keyCode === 13) {
      document.querySelector('#main-content').focus();
    }
  });
