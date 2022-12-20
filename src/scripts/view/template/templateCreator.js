/* eslint-disable comma-dangle */
/* eslint-disable indent */
import CONFIG from '../../global/config';

const createRestaurantTemplate = (restaurant) => `
  <div class="card">
    <div class="card__wraper-img">
      <img src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" alt="${restaurant.name}" class="card__img" />
    </div>
    <h3 class="card__title">${restaurant.name}</h3>
    <p class="card__desc">${restaurant.description}</p>

    <div class="card__group">
      <span class="star">
        <i class="star_icon ri-star-fill"></i>
        <i class="star_icon ri-star-fill"></i>
        <i class="star_icon ri-star-fill"></i>
        <i class="star_icon ri-star-fill"></i>
        <i class="star_icon ri-star-half-line"></i>
        <span>${restaurant.rating}</span>
      </span>

      <p class="card__city">${restaurant.city}</p>
    </div>
    <a href="/#/detail/${restaurant.id}" class="card__button">More Detail</a>
  </div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="detail__container">
    <img src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" alt="${restaurant.name}" class="detail__img" />

    <div class="detail__wrapper">
      <div class="detail__restaurant">
        <h3 class="detail__title">${restaurant.name}</h3>
        <p class="detail__desc">${restaurant.description}</p>
        <div class="detail__group">
          <span class="star">
            <i class="star_icon ri-star-fill"></i>
            <i class="star_icon ri-star-fill"></i>
            <i class="star_icon ri-star-fill"></i>
            <i class="star_icon ri-star-fill"></i>
            <i class="star_icon ri-star-half-line"></i>
            <span>${restaurant.rating}</span>
          </span>

          <p class="detail__text">${restaurant.categories[0].name}</p>
        </div>

        <div>
          <h4>Address :</h4>

          <div class="detail__address">
            <p class="">${restaurant.address}</p>
            <p class="">${restaurant.city}</p>
          </div>
        </div>
      </div>
      
      <div class="detail__menu">
        <h4>Menu Favorites</h4>

        <div class="detail__menu-flex">
          <div class="menu__item">
            <h5 class="menu__head">Foods</h5>

            <table class="menu__table">
              ${restaurant.menus.foods.map(
                (food) => `
                <tr>
                  <td>${food.name}<td>
                  <td>${food.name}<td>
                </tr>
              `
              )}
            </table>
          </div>

          <div class="menu__item">
            <h5 class="menu__head">Drinks</h5>

            <table class="menu__table">
              ${restaurant.menus.drinks.map(
                (drink) => `
                <tr>
                  <td>${drink.name}<td>
                  <td>${drink.name}<td>
                </tr>
              `
              )}
            </table>
          </div>
        </div>
      </div>
      
      <div class="detail__review">
        <h4>Review</h4>

        <div id="review__template" class="review__template">
          ${restaurant.customerReviews.map(
            (review) => `
              <div class="review">
                <h5 class="review__name">Name : ${review.name}</h5>
                <p class="review__text">Review : ${review.review}</p>
                <p class="review__date">Date : ${review.date}</p>
              </div>
            `
          )};
        </div>

        <button id="open__button" class="review__button">
          Add Review
          <i class="ri-add-circle-line icon"></i>
        </button>
      </div>
    </div>
  </div>
`;

const createNewUpdateReviewTemplate = (reviews) => `
  <h4>Review</h4>
  ${reviews.map(
    (review) => `
      <div class="review">
        <h5 class="review__name">Name : ${review.name}</h5>
        <p class="review__text">Review : ${review.review}</p>
        <p class="review__date">Date : ${review.date}</p>
      </div>
    `
  )}
`;

const createButtonLikeTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="ri-heart-line" aria-hidden="true"></i>
  </button>
`;

const createButtonLikedTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="ri-heart-fill" ria-hidden="true"></i>
  </button>
`;

const createReviewModalTemplate = () => `
  <div class="review__modal">
    <h2>Review this place</h2>

    <button id="close__button" class="review__button-close">
      <i class="ri-close-line"></i>
    </button>

    <form id="form__Review">
      <div class="input__group">
        <label for="name">Name :</label>
        <input type="text" name="name" id="name" placeholder="Input your name" required/>
      </div>
      <div class="input__group">
        <label for="review">Share more about your experience :</label>
        <textarea name="review" id="review" cols="30" rows="10" placeholder="Share detail of your own experience at his place" required></textarea>
      </div>

      <button id="add__button" class="review__button">
        Add Review
        <i class="ri-add-circle-line icon"></i>
      </button>
    </form>
  </div>
`;

// eslint-disable-next-line max-len, object-curly-newline
export { createRestaurantTemplate, createRestaurantDetailTemplate, createNewUpdateReviewTemplate, createButtonLikeTemplate, createButtonLikedTemplate, createReviewModalTemplate };
