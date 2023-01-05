import '../../components/Loading';
import FavoriteSearchRestaurantView from '../liked-restaurant/FavoriteSearchRestaurantView';
import FavoriteRestaurantShowPresenter from '../liked-restaurant/FavoriteRestaurantShowPresenter';
import FavoriteRestaurantDb from '../../data/favorite-restorant-idb';
import FavoriteSearchRestaurantPresenter from '../liked-restaurant/FavoriteSearchRestaurantPresenter';
import { createRestaurantTemplateSkeleton } from '../template/templateCreator';

const view = new FavoriteSearchRestaurantView();

const Favorites = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    const loading = document.querySelector('.loading');
    const restoContainer = document.querySelector('#restaurants');
    for (let i = 0; i < 20; i++) {
      restoContainer.innerHTML += createRestaurantTemplateSkeleton();
    }

    try {
      new FavoriteRestaurantShowPresenter({view, favoriteRestaurants: FavoriteRestaurantDb})
      new FavoriteSearchRestaurantPresenter({view, favoriteRestaurants: FavoriteRestaurantDb})
      restoContainer.innerHTML = '';
    } catch (error) {
      console.log(error.message);
    } finally {
      loading.classList.add('invisible');
    }
  },
};

export default Favorites;
