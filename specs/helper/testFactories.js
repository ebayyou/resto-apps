import FavoriteRestaurantDb from '../../src/scripts/utils/favorite-restorant-idb';
import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';

const CreateLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#like-button-container'),
    favoriteRestaurants: FavoriteRestaurantDb,
    restaurant,
  });
};

export { CreateLikeButtonPresenterWithRestaurant };
