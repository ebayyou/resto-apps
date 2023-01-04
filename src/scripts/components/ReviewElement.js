class ReviewElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section id="review" class="review__page">
        <img src="./images/delicious-images.jpg" alt="review delicious image" class="review__img" loading="lazy" />

        <div class="review__group">
          <h3 class="review__heading">Customer say about us</h3>
          <div class="review__info">
            <img src="./images/man.png" alt="people" class="info__image" />
            <span>
              <p>Ebayyou Anggoro</p>
              <p>Food Connoisseur</p>
            </span>
          </div>
          <p class="review__desc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos hic sunt aut repudiandae consequuntur architecto consectetur maxime. Reiciendis ex facere similique provident alias et? Error labore nihil delectus sit a.
          </p>
          <span class="star">
            <i class="star_icon ri-star-fill"></i>
            <i class="star_icon ri-star-fill"></i>
            <i class="star_icon ri-star-fill"></i>
            <i class="star_icon ri-star-fill"></i>
            <i class="star_icon ri-star-half-line"></i>
            <span>(4.5)</span>
          </span>
          <div class="arrow">
            <span class="arrow_icon"><i class="ri-arrow-left-fill"></i></span>
            <span class="arrow_icon"><i class="ri-arrow-right-fill"></i></span>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('review-element', ReviewElement);
