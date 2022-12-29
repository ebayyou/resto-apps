class FavoriteRestaurantShowPresenter {
  constructor({ view, favoriteRestaurants }) {
    this._view = view;
    this._favoriteRestaurants = favoriteRestaurants;

    this._showFavoriteRestaurants();
  };

  async _showFavoriteRestaurants() {
    const restaurants = await this._favoriteRestaurants.getAllRestaurant();
    this._displayRestaurant(restaurants);
  }

  _displayRestaurant(restaurant) {
    this._view.showFavoriteRestaurant(restaurant);
  };
};

export default FavoriteRestaurantShowPresenter;