import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';

const CreateLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#like-button-container'),
    restaurant,
  });
};

export { CreateLikeButtonPresenterWithRestaurant };
