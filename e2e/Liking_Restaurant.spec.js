const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorites');
});


Scenario('Showing message empty liked a restaurant', async ({ I }) => {
  I.seeElement('#query');
  I.see('There is no restaurant that you like', '.empty__text');
});

Scenario('Liking one resto', async ({ I }) => {
  I.see('There is no restaurant that you like', '.empty__text');
  I.amOnPage('/');

  I.seeElement('.resto__button');

  const firstResto = locate('.resto__title').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(locate('.resto__button').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorites');
  I.seeElement('.resto__item');
  const likedRestoTitle = await I.grabTextFrom('.resto__title');

  assert.strictEqual(firstRestoTitle, likedRestoTitle)
});

Scenario('Searching restaurants', async ({ I }) => {
  I.see('There is no restaurant that you like', '.empty__text');
  I.amOnPage('/');

  I.seeElement('.resto__button');

  const titleResto = [];

  for (let i = 0; i < 3; i++) {
    I.click(locate('.resto__button').at(i));
    I.seeElement('#likeButton');
    I.click('#likeButton');
    titleResto.push(await I.grabTextFrom('.resto__title'));
    I.amOnPage('/');
  }

  I.amOnPage('/#/favorites');
  I.seeElement('#query');

  const searchQuery = titleResto[1].substring(1, 3);
  const matchingResto = titleResto.filter(title => title.indexOf(searchQuery) !== -1);

  I.fillField('#query', searchQuery);
  I.pressKey('Enter');

  const visibleLikedResto = await I.grabNumberOfVisibleElements('.resto__item');
  assert.strictEqual(matchingResto.length, visibleLikedResto);

  matchingResto.forEach(async (title, index) => {
    const visibleTitle = await I.grabTextFrom(locate('.resto__title').at(index + 1));
    assert.strictEqual(title, visibleTitle);
  });
});
