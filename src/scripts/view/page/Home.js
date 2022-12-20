import '../../components/HeroElement';
import '../../components/ReviewElement';
import '../../components/Loading';
import restaurantDBSource from '../../data/restaurantdb-source';
import { createRestaurantTemplate } from '../template/templateCreator';

const Home = {
  async render() {
    return `
      <hero-element></hero-element>
      <section id="restaurant_section">
        <h1 class="head__section">Restaurant List</h1>
        <p class="head__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure, repellat quod ratione possimus a.</p>

        <loading-loader></loading-loader>
        <div id="restaurants" class="list__restaurant"></div>
      </section>
      <review-element></review-element>
    `;
  },

  async afterRender() {
    const loading = document.querySelector('.loading');

    try {
      const response = await restaurantDBSource.listRestaurant();
      const restoContainer = document.querySelector('#restaurants');

      response.restaurants.forEach((restaurant) => {
        restoContainer.innerHTML += createRestaurantTemplate(restaurant);
      });
    } catch (error) {
      console.log(error.message);
    } finally {
      loading.classList.add('invisible');
    }
  },
};

export default Home;
