class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <header class="app__bar">
        <div class="container flex-container">
          <a tabindex="0" class="skip-to-content">Skip To Content</a>
          
          <a href="#/home" class="app__group">
            <img src="./images/restaurant.png" alt="Logo RestoApps" class="logo__bar" />
            <h1 class="heading__bar">RestoApps</h1>
          </a>
          
          <button type="button" id="menu-navbar" aria-controls="menu-navbar" aria-expanded="false" aria-label="Toggle navigation">
            <i class="ri-menu-3-line"></i>
          </button>

          <nav class="navbar invisible">
            <ul>
              <li><a href="#/home">Home</a></li>
              <li><a href="#/favorites">Favorites</a></li>
              <li><a href="https://www.linkedin.com/in/bayu-anggoro-ditya-53204b250/" target="_blank" rel="noreferrer">About US</a></li>
              <li>
                <button class="button" type="button">Order Now <i class="icon__button ri-arrow-right-circle-fill"></i></button>
              </li>
            </ul>
          </nav>

          <div class="navbar__info">
            <ul>
              <li><a href="#/home">Home</a></li>
              <li><a href="#/favorites">Favorites</a></li>
              <li><a href="https://www.linkedin.com/in/bayu-anggoro-ditya-53204b250/" target="_blank" rel="noreferrer">About US</a></li>
              <li>
                <button class="button" type="button">Order Now <i class="icon__button ri-arrow-right-circle-fill"></i></button>
              </li>
            </ul>
          </div>
        </div>
      </header>
    `;
  }
}

customElements.define('app-bar', AppBar);
