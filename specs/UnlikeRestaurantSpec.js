import FavoriteRestaurantDb from '../src/scripts/data/favorite-restorant-idb';
import * as TestFactories from './helper/testFactories';

describe('Unliking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="like-button-container"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestaurantDb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurantDb.deleteRestaurant(1);
  });

  it('should display unlike widget when the restaurant has been liked', async () => {
    await TestFactories.CreateLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeTruthy();
  });

  it('should not display like when restaurant has been liked', async () => {
    await TestFactories.CreateLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeFalsy();
  });

  it('should be able to remove the restaurants from the list', async () => {
    await TestFactories.CreateLikeButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantDb.getAllRestaurant()).toEqual([]);
  });

  it('should not throw an error if the unliked restaurant is not on the list', async () => {
    await TestFactories.CreateLikeButtonPresenterWithRestaurant({ id: 1 });

    await FavoriteRestaurantDb.deleteRestaurant(1);

    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantDb.getAllRestaurant()).toEqual([]);
  });
});
