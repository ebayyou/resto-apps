const assert = require('assert');

Feature('Customer Review restaurant');

Before(({ I }) => {
  I.amOnPage('/#/home');

  I.see('.resto__item');
  I.seeElement('.resto__button');
  I.click(locate('.resto__button').first());

  I.see('.detail__review');
  I.seeElement('#open__button');
  I.click('#open__button');
});

Scenario('Close the modal review for the restaurant', ({ I }) => {
  I.see('.review__modal');
  I.seeElement('.review__button-close');
  I.click('.review__button-close');
});

Scenario('Added a review for the restaurant', async ({ I }) => {
  I.see('.review__modal');
  I.seeElement('.form__Review');

  const experienceReview = 'this place is hidden gems';
  I.fillField('#name', 'ebayyou');
  I.fillField('#review', experienceReview);

  I.click('#add__button');
  I.acceptPopup();

  const reviewResult = await I.grabTextFromAll('.review__result');
  const filterReview = reviewResult.filter(review => review === experienceReview);
  assert.strictEqual(experienceReview, filterReview[0]);
});