import { areActsAsFavoriteRestaurantModel } from "./contract/FavoriteRestaurantContract";

let favoriteRestaurant = [];

const FavoriteRestaurantArray = {
  getRestaurant(id) {
    if (!id) {
      return
    }
  
    return favoriteRestaurant.find((resto) => resto.id == id)
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

  deleteRestaurant(id) {
    favoriteRestaurant = favoriteRestaurant.filter((resto) => resto.id != id)
  },
};

describe('Favorite Restaurant contract test implementation', () => {
  afterEach(() => favoriteRestaurant = []);

  areActsAsFavoriteRestaurantModel(FavoriteRestaurantArray);
});