import { areActsAsFavoriteRestaurantModel } from './contract/FavoriteRestaurantContract';
import FavoriteRestaurantDb from '../src/scripts/data/favorite-restorant-idb';

describe('Favorite Restaurant Idb contract test implementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurantDb.getAllRestaurant()).forEach(async (resto) => {
      await FavoriteRestaurantDb.deleteRestaurant(resto.id);
    });
  });

  areActsAsFavoriteRestaurantModel(FavoriteRestaurantDb);
});