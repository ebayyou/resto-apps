/* eslint-disable class-methods-use-this */

const DrawerInitiator = {
  init({ button, drawer }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();

    if (drawer.classList.contains('invisible')) drawer.classList.remove('invisible');
    else drawer.classList.add('invisible');
  },
};

export default DrawerInitiator;
