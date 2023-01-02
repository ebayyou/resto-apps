/* eslint-disable comma-dangle */
/* eslint-disable indent */
import CONFIG from '../../global/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createRestaurantTemplateSkeleton = () => `
  <div class="card">
    <div class="card__wraper-img skeleton">
      <img class="lazyload card__img" src="" alt="" />
    </div>

    <div class="skeleton-body skeleton">
      <h3 class="card__title"></h3>
    </div>
    <div class="skeleton-body skeleton">
      <p class="card__desc"></p>
    </div>
    <div class="skeleton-body skeleton"></div>
    <div class="skeleton-body skeleton"></div>

    <div class="card__group">
      <span class="skeleton-body skeleton"></span>

      <div class="skeleton-body skeleton">
        <p class="card__city"></p>
      </div>
    </div>
    <a href="#" class="card__button-skeleton skeleton"></a>
  </div>
`;

const createRestaurantTemplate = (restaurant) => `
  <div id="restaurant__item" class="resto__item">
    <div class="resto__wraper-img">
      <img class="lazyload resto__img" src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" alt="${restaurant.name || '-'}" />
    </div>
    <h3 class="resto__title">${restaurant.name || '-'}</h3>
    <p class="resto__desc">${restaurant.description || '-'}</p>

    <div class="resto__group">
      <span class="star">
        <i class="star_icon ri-star-fill"></i>
        <i class="star_icon ri-star-fill"></i>
        <i class="star_icon ri-star-fill"></i>
        <i class="star_icon ri-star-fill"></i>
        <i class="star_icon ri-star-half-line"></i>
        <span>${restaurant.rating || '-'}</span>
      </span>

      <p class="resto__city">${restaurant.city || '-'}</p>
    </div>
    <a href="/#/detail/${restaurant.id}" class="resto__button">More Detail</a>
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

            <ul class="menu__table">
              ${restaurant.menus.foods.map(
                (food) => `
                  <li>${food.name}</li>
                `
                ).join("")
              }
            </ul>
          </div>

          <div class="menu__item">
            <h5 class="menu__head">Drinks</h5>

            <ul class="menu__table">
              ${restaurant.menus.drinks.map(
                (drink) => `
                  <li>${drink.name}</li>
                `
                ).join("")
              }
            </ul>
          </div>
        </div>
      </div>
      
      <div class="detail__review">
        <h4>Review</h4>

        <div id="review__template" class="review__template">
          ${restaurant.customerReviews.map(
            (review) => `
              <div class="review">
                <h5 class="review__name">Name : <span class="name__result">${review.name}</span></h5>
                <p class="review__text">Review : <span class="review__result">${review.review}</span></p>
                <p class="review__date">Date : <span class="date__result">${review.date}</span></p>
              </div>
            `
          ).join("")
          }
        </div>

        <button type="button" id="open__button" class="review__button">
          Add Review
          <i class="ri-add-circle-line icon"></i>
        </button>
      </div>
    </div>
  </div>
`;

const createNewUpdateReviewTemplate = (reviews) => `
  ${reviews.map(
    (review) => `
      <div class="review">
        <h5 class="review__name">Name : <span class="name__result">${review.name}</span></h5>
        <p class="review__text">Review : <span class="review__result">${review.review}</span></p>
        <p class="review__date">Date : <span class="date__result">${review.date}</span></p>
      </div>
    `
  ).join("")
  }
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="ri-heart-line" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="ri-heart-fill" aria-hidden="true"></i>
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

      <button type="submit" id="add__button" class="review__button">
        Add Review
        <i class="ri-add-circle-line icon"></i>
      </button>
    </form>
  </div>
`;

// eslint-disable-next-line max-len, object-curly-newline
export { createRestaurantTemplate, createRestaurantTemplateSkeleton, createRestaurantDetailTemplate, createNewUpdateReviewTemplate, createLikeRestaurantButtonTemplate, createUnlikeRestaurantButtonTemplate, createReviewModalTemplate };
