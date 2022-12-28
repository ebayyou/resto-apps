class FavoriteSearchRestaurantPresenter {
  constructor({ favoriteRestaurants }) {
    this._listenToSearchRequestByUser();
    this._favoriteRestaurants = favoriteRestaurants;
  };

  _listenToSearchRequestByUser() {
    this._queryElement = document.querySelector('#query');
    this._queryElement.addEventListener('change', (event) => {
      this._searchRestaurants(event.target.value);  
    });
  } 

  async _searchRestaurants(latestQuery) {
    this._latestQuery = latestQuery.trim();

    let foundRestaurants;
    if (this.latestQuery.length > 0) {
      foundRestaurants = await this._favoriteRestaurants.searchRestaurants(this._latestQuery);
    } else {
      foundRestaurants = await this._favoriteRestaurants.getAllRestaurant();
    }

    this._showFoundRestaurants(foundRestaurants);
  }

  _showFoundRestaurants(restaurants) {
    let restoElement;

    if (restaurants.length > 0 ) {
      restoElement = restaurants.reduce((carry, resto) => carry.concat(`
          <li class="resto">
            <span class="resto__title">${resto.title || '-'}</span>
          </li>
        `),
        '',
      );
    } else {
      restoElement = `<div class="restaurant__not__found">Restaurant not found</div>`
    }

    document.querySelector('.restaurants').innerHTML = restoElement;

    document.querySelector('#restaurant__search-container')
      .dispatchEvent(new Event('restaurants:searched:updated'));
  }

  get latestQuery() {
    return this._latestQuery;
  }
}


export default FavoriteSearchRestaurantPresenter;