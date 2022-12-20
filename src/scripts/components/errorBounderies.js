import icon from '../../public/images/favicon.png';

class ErrorBounderies extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
      <div class="error__list">
        <div class="error__notFound">
          <div class="error__group">
            <h1 class="error__head">404 : Ooops Error!</h1>
            <p class="error__desc">Im sorry, the restaurant <span class="error__keyword">error</span> you're looking for not found.</p>
          </div>
          <img class="error__img" src="${icon}" alt="diamond-heart">
        <div>
      <div>
    `;
  }
}

customElements.define('error-bounderies', ErrorBounderies);
