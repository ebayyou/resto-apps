import { areActsAsFavoriteRestaurantModel } from "./contract/FavoriteRestaurantContract";

let favoriteRestaurant = [];

const FavoriteRestaurantArray = {
  getRestaurant(id) {
    if (!id) {
      return
    }
  
    return favoriteRestaurant.find((resto) => resto.id == id);
  },

  getAllRestaurant() {
    return favoriteRestaurant;
  },

  putRestaurant(restaurant) {
    if(!restaurant.hasOwnProperty('id')) {
      return
    }

    if (this.getRestaurant(restaurant.id)) {
      return
    }
    
    favoriteRestaurant.push(restaurant);
  },

  searchRestaurants(query) {
    return this.getAllRestaurant()
      .filter((resto) => {
        const loweredCaseRestaurantTitle = (resto.title || '-').toLowerCase();
        const jammedRestorantTitle = loweredCaseRestaurantTitle.replace(/\s/g, '');

        const loweredCaseQuery = query.toLowerCase();
        const jammedQuery = loweredCaseQuery.replace(/\s/g, '');

        return jammedRestorantTitle.indexOf(jammedQuery) !== -1;
      });
  },

  deleteRestaurant(id) {
    favoriteRestaurant = favoriteRestaurant.filter((resto) => resto.id != id);
  },
};

describe('Favorite Restaurant array contract test implementation', () => {
  afterEach(() => favoriteRestaurant = []);

  areActsAsFavoriteRestaurantModel(FavoriteRestaurantArray);
});