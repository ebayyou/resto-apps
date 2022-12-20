import * as WorkboxWindow from 'workbox-window';

const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('Service worker not supported in browser');
    // eslint-disable-next-line no-useless-return
    return;
  }

  const wb = new WorkboxWindow.Workbox('./sw.bundle.js');

  try {
    wb.register();
    console.log('Service worker registered');
  } catch (err) {
    console.log('Failed to register service worker', err);
  }
};

export default swRegister;
