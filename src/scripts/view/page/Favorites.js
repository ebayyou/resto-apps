import favoriteRestaurantDb from '../../utils/favorite-restorant-idb';
import { createRestaurantTemplate } from '../template/templateCreator';
import '../../components/Loading';
import love from '../../../public/images/diamond-heart.png';

const Favorites = {
  async render() {
    return `
      <section id="favorite">
        <h1 class="head__section">Your Favorite Restaurant</h1>
        <p class="head__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure, repellat quod ratione possimus a.</p>

        <loading-loader></loading-loader>
        <div id="restaurants" class="list__restaurant"></div>
        <div id="empty__container" class="container"></div>
      </section>
    `;
  },

  async afterRender() {
    const loading = document.querySelector('.loading');

    try {
      const restaurant = await favoriteRestaurantDb.getAllRestaurant();
      const restoContainer = document.querySelector('#restaurants');
      const emptyContainer = document.querySelector('#empty__container');

      if (restaurant.length === 0) {
        emptyContainer.style.display = 'flex';
        emptyContainer.innerHTML += `
          <div class="empty">
            <div class="empty__group">
              <h3 class="empty__text">There is no restaurant that you like<h3>
              <p class="empty__desc">
                You can go to the <a href="#/home">home</a> page to find your favorite restaurant.
              </p>
            </div>
            <img class="empty__img" src="${love}" alt="diamond-heart" />
          <div>
        `;
      }

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
