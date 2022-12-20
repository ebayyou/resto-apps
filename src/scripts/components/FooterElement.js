class FooterElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer class="footer">
        <div class="custom-shape-divider-top-1669142963">
          <div class="custom-shape-divider-top-1669143354">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
            </svg>
        </div>

        <div class="container">
          <div class="foo__flex">
            <div class="foo__col1">
              <div class="foo__brand">
                <img src="./images/restaurant.png" alt="Logo RestoApps" class="logo__foo" />
                <h3 class="heading__foo">RestoApps</h3>
              </div>

              <p class="foo__desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil earum cumque neque ipsa est doloribus!</p>

              <ul class="social__group">
                <li>
                  <a class="social__icons" href="https://www.instagram.com/byanggoro_/" target="_blank" rel="noreferrer"><i class="ri-instagram-line"></i></a>
                </li>
                <li>
                  <a class="social__icons" href="https://id-id.facebook.com/" target="_blank" rel="noreferrer"><i class="ri-facebook-fill"></i></a>
                </li>
                <li>
                  <a class="social__icons"  href="https://twitter.com/i/flow/login" target="_blank" rel="noreferrer"><i class="ri-twitter-fill"></i></a>
                </li>
                <li>
                  <a class="social__icons" href="https://www.linkedin.com/in/bayu-anggoro-53204b250/" target="_blank" rel="noreferrer"><i class="ri-linkedin-box-fill"></i></a>
                </li>
              </ul>
            </div>

            <div class="foo__col2">
              <ul class="foo__listgroup">
                <li class="foo__list">Information</li>
                <li class="foo__list"><a href="#">About us</a></li>
                <li class="foo__list"><a href="#">Most Search</a></li>
                <li class="foo__list"><a href="#">Testimonials</a></li>
                <li class="foo__list"><a href="#">Events</a></li>
              </ul>
            </div>

            <div class="foo__col3">
              <ul class="foo__listgroup">
                <li class="foo__list">Help links</li>
                <li class="foo__list"><a href="#">Service</a></li>
                <li class="foo__list"><a href="#">Support</a></li>
                <li class="foo__list"><a href="#">Term & Condition</a></li>
                <li class="foo__list"><a href="#">Privacy</a></li>
              </ul>
            </div>

            <div class="foo__col4">
              <ul class="foo__listgroup">
                <li class="foo__list">Our Home</li>
                <li class="foo__list"><a href="#">Special</a></li>
                <li class="foo__list"><a href="#">Categories</a></li>
                <li class="foo__list"><a href="#">Popular</a></li>
              </ul>
            </div>
          </div>

          <hr class="foo__line" />
          <p class="foo__copy">Dicoding Submission : Expert Frontend Web Developer 2022 - Katalog restoran</p>
        </div>
      </footer>
    `;
  }
}

customElements.define('footer-element', FooterElement);
