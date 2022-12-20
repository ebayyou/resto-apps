/* eslint-disable no-alert */
/* eslint-disable object-curly-newline */

import restaurantDBSource from '../data/restaurantdb-source';
import { createNewUpdateReviewTemplate } from '../view/template/templateCreator';

const ModalInitiator = {
  init({ openButton, closeButton, formAction, modal, idResto, reviewTemplate }) {
    openButton.addEventListener('click', (event) => {
      this._openModal(event, modal);
    });

    closeButton.addEventListener('click', (event) => {
      this._closeModal(event, modal);
    });

    formAction.addEventListener('submit', (event) => {
      const data = {
        id: idResto,
        name: document.querySelector('#name').value,
        review: document.querySelector('#review').value,
      };

      this._sendReview(data, modal, reviewTemplate);
      event.preventDefault();
    });
  },

  _openModal(event, modal) {
    event.stopPropagation();

    modal.classList.remove('invisible');
  },

  _closeModal(event, modal) {
    event.stopPropagation();

    modal.classList.add('invisible');
  },

  async _sendReview(data, modal, reviewTemplate) {
    try {
      const postReview = await restaurantDBSource.reviewRestaurant(data);
      // eslint-disable-next-line no-param-reassign
      reviewTemplate.innerHTML += createNewUpdateReviewTemplate(postReview.customerReviews);
      window.alert('Successfully added to review page');
    } catch (error) {
      window.alert(`${error} : something went wrong!!!`);
    } finally {
      modal.classList.add('invisible');
    }
  },
};

export default ModalInitiator;
