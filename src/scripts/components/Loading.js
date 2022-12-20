class Loading extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
      <div class="loading">
        <div id="loading__loader">
          <div class="loading__loader"></div>
        </div>
        <h1 class="loading__text">Loading<span>.</span><span>.</span><span>.</span></h1>
      </div>
    `;
  }
}

customElements.define('loading-loader', Loading);
