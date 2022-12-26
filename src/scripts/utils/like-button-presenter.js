import { createLikeRestaurantButtonTemplate, createUnlikeRestaurantButtonTemplate } from '../view/template/templateCreator';
import favoriteRestaurantDb from './favorite-restorant-idb';

const LikeButtonPresenter = {
  async init({ likeButtonContainer, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;

    await this._renderingButton();
  },

  async _renderingButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await favoriteRestaurantDb.getRestaurant(id);
    return !!restaurant;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeRestaurantButtonTemplate();
    const likeButton = document.querySelector('#likeButton');

    likeButton.addEventListener('click', async () => {
      await favoriteRestaurantDb.putRestaurant(this._restaurant);
      this._renderingButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createUnlikeRestaurantButtonTemplate();
    const likeButton = document.querySelector('#likeButton');

    likeButton.addEventListener('click', async () => {
      await favoriteRestaurantDb.deleteRestaurant(this._restaurant.id);
      this._renderingButton();
    });
  },
};

export default LikeButtonPresenter;