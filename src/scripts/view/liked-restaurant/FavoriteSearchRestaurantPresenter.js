class FavoriteSearchRestaurantPresenter {
  constructor({ favoriteRestaurants, view }) {
    this._view = view;
    this._favoriteRestaurants = favoriteRestaurants;

    this._listenToSearchRequestByUser();
  }

  _listenToSearchRequestByUser() {
    this._view.runWhenUserIsSearching((latestQuery) => {
      this._searchRestaurants(latestQuery);
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
    this._view.showFavoriteRestaurant(restaurants);
  }

  get latestQuery() {
    return this._latestQuery;
  }
}

export default FavoriteSearchRestaurantPresenter;
