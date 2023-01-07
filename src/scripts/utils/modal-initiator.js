/* eslint-disable object-curly-newline */
/* eslint-disable no-param-reassign */
import Swal from 'sweetalert2';
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
      if (!window.navigator.onLine) {
        this._triggerAlert();
        return;
      }

      const data = {
        id: idResto,
        name: document.querySelector('#name').value,
        review: document.querySelector('#review').value,
      };

      this._sendReview(data, modal, reviewTemplate);
      event.preventDefault();
    });
  },

  _triggerToast(icon, message) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon,
      title: message,
    });
  },

  _triggerAlert() {
    Swal.fire(
      'The Internet?',
      "You can't post the review, because you are offline!",
      'question',
    );
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
      reviewTemplate.innerHTML = '';
      reviewTemplate.innerHTML += createNewUpdateReviewTemplate(postReview.customerReviews);

      this._triggerToast('success', 'Successfully added to review restaurant');
    } catch (error) {
      this._triggerToast('error', 'Sorry : something went wrong!!!');
    } finally {
      modal.classList.add('invisible');
    }
  },
};

export default ModalInitiator;
