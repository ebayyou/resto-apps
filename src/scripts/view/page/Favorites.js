import favoriteRestaurantDb from '../../utils/favorite-restorant-idb';
import { createRestaurantTemplate } from '../template/templateCreator';
import '../../components/Loading';

const Favorites = {
  async render() {
    return `
      <section>
        <h1 class="head__section">Your Favorite Restaurant</h1>
        <p class="head__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure, repellat quod ratione possimus a.</p>

        <loading-loader></loading-loader>
        <div id="restaurants" class="list__restaurant"></div>
      </section>
    `;
  },

  async afterRender() {
    const loading = document.querySelector('.loading');

    try {
      const restaurant = await favoriteRestaurantDb.getAllRestaurant();
      const restoContainer = document.querySelector('#restaurants');

      restaurant.forEach((resto) => {
        restoContainer.innerHTML += createRestaurantTemplate(resto);
      });
    } catch (error) {
      console.log(error.message);
    } finally {
      loading.classList.add('invisible');
    }
  },
};

export default Favorites;
