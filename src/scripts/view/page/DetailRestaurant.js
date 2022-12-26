import restaurantDBSource from '../../data/restaurantdb-source';
import urlParser from '../../routes/url-parser';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import ModalInitiator from '../../utils/modal-initiator';
import { createRestaurantDetailTemplate, createReviewModalTemplate } from '../template/templateCreator';
import '../../components/Loading';

const DetailRestaurant = {
  async render() {
    return `
      <section id="detail-content">
        <h1 class="head__section">Your Detail Restaurant</h1>
        <p class="head__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure, repellat quod ratione possimus a.</p>
        
        <div class="container">
          <loading-loader></loading-loader>
          <div id="detail-restaurant"></div>
          <div id="like-button-container"></div>
        </div>

        <div class="review__wrapper invisible"></div>
      </section>
    `;
  },

  async afterRender() {
    const loading = document.querySelector('.loading');

    try {
      const url = urlParser.parseActiveWithoutCombiner();
      const { restaurant } = await restaurantDBSource.detailRestaurant(url.id);
      const detailContainer = document.querySelector('#detail-restaurant');
      const reviewrapper = document.querySelector('.review__wrapper');

      detailContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
      LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('#like-button-container'),
        restaurant: {
          id: restaurant.id,
          name: restaurant.name,
          description: restaurant.description,
          pictureId: restaurant.pictureId,
          rating: restaurant.rating,
          city: restaurant.city,
        },
      });

      reviewrapper.innerHTML = createReviewModalTemplate();
      ModalInitiator.init({
        openButton: document.querySelector('#open__button'),
        closeButton: document.querySelector('#close__button'),
        formAction: document.querySelector('#form__Review'),
        modal: reviewrapper,
        idResto: url.id,
        reviewTemplate: document.querySelector('#review__template'),
      });
    } catch (err) {
      console.log(err.message);
    } finally {
      loading.classList.add('invisible');
    }
  },
};

export default DetailRestaurant;
