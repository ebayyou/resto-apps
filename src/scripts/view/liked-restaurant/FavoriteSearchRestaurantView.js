import { createRestaurantTemplate } from "../template/templateCreator";

class FavoriteSearchRestaurantView {
  getTemplate() {
    return `
      <section id="favorite">
        <h1 class="head__section">Your Favorite Restaurant</h1>
        <p class="head__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure, repellat quod ratione possimus a.</p>

        <div class="search__element">
          <div class="search__group">
            <label for="query" class="search__heading">Search Your Favorite Restaurant</label>
            <div class="input__group">
              <input type="search" name="search" id="query" class="search__resto" />     
              <i class="ri-search-eye-line icon__search"></i>
            </div>
          </div>
        </div>

        <loading-loader></loading-loader>

        <div id="restaurants" class="list__restaurant">    
        </div>

        <div id="empty__container" class="container"></div>
      </section>  
    `;
  };

  runWhenUserIsSearching(callback) {
    document.querySelector('#query').addEventListener('change', () => {
      callback(event.target.value);
    });
  };

  showFavoriteRestaurant(restaurants = []) {
    let restoElement;
    
    if (restaurants.length) {
      restoElement = restaurants.reduce((carry, resto) => carry.concat(createRestaurantTemplate(resto)), '');
    } else {
      restoElement = this._getEmptyRestaurantTemplate();
    }

    document.querySelector('#restaurants').innerHTML = restoElement;
    document.querySelector('#restaurants').dispatchEvent(new Event('restaurants:updated'));
  };

  _getEmptyRestaurantTemplate() {
    return `<div class="restaurant-item__not__found">
        <div class="empty">
          <div class="empty__group">
            <h3 class="empty__text">There is no restaurant that you like<h3>
            <p class="empty__desc">
              You can go to the <a href="#/home">home</a> page to find your favorite restaurant.
            </p>
          </div>
        </div>
      </div>`;
  };
};

export default FavoriteSearchRestaurantView;