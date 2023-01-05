const assert = require('assert');

Feature('Customer Review restaurant');

Before(({ I }) => {
  I.amOnPage('/#/home');
});

Scenario('Close the modal review for the restaurant', ({ I }) => {
  I.seeElement('.resto__button');
  I.click(locate('.resto__button').first());

  I.seeElement('.review__template');
  I.seeElement('#open__button');
  I.click('#open__button');

  I.seeElement('.review__modal');
  I.seeElement('.review__button-close');
  I.click('.review__button-close');
});

Scenario('Added a review for the restaurant', async ({ I }) => {
  I.seeElement('.resto__button');
  I.click(locate('.resto__button').first());

  I.seeElement('.review__template');
  I.seeElement('#open__button');
  I.click('#open__button');

  I.seeElement('.review__modal');

  const experienceReview = 'this place is hidden gems';
  I.fillField('#name', 'ebayyou');
  I.fillField('#review', experienceReview);
  I.click('#add__button');

  I.see('Successfully added to review restaurant', '.swal2-title')
});