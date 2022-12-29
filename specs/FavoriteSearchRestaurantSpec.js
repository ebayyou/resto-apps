import FavoriteRestaurantDb from '../src/scripts/data/favorite-restorant-idb';
import FavoriteSearchRestaurantPresenter from '../src/scripts/view/liked-restaurant/FavoriteSearchRestaurantPresenter'
import FavoriteSearchRestaurantView from '../src/scripts/view/liked-restaurant/FavoriteSearchRestaurantView';

describe('Search Favorite Restaurants', () => {
  let presenter;
  let FavoriteRestaurants;
  let view;

  const searchRestaurants = (query) => {
    const queryElement = document.querySelector('#query');
    queryElement.value = query;
    queryElement.dispatchEvent(new Event('change'));
  };

  const setRestaurantSearchContainer = () => {
    view = new FavoriteSearchRestaurantView();
    document.body.innerHTML = view.getTemplate();
  };

  const constructPresent = () => {
    FavoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantDb)
    presenter = new FavoriteSearchRestaurantPresenter({ 
      favoriteRestaurants: FavoriteRestaurants,
      view
    });
  };

  beforeEach(() => {
    setRestaurantSearchContainer();
    constructPresent();
  });

  describe('when the query search is not empty', () => {
    it('should be able to capture the query typed by the user', () => {
      searchRestaurants('rumah senja')
    
      expect(presenter.latestQuery).toEqual('rumah senja');
    });
  
    it('should ask the model to search for liked restaurants', () => {
      searchRestaurants('rumah senja')
  
      expect(FavoriteRestaurants.searchRestaurants)
        .toHaveBeenCalledWith('rumah senja');
    });
  
    it('should show the restaurant found by Favorite Restaurants', (done) => {
      document.querySelector('#restaurants')
        .addEventListener('restaurants:updated', () => {
          expect(document.querySelectorAll('.resto__item').length).toEqual(3);
          done();
        });
  
      FavoriteRestaurants.searchRestaurants.withArgs('restaurant a').and.returnValues([
        { id: 111, name: 'restaurant abc' },
        { id: 222, name: 'ada juga restaurant abcde' },
        { id: 333, name: 'ini juga bagus restaurant a' },
      ]);
  
      searchRestaurants('restaurant a');
    });
  
    it('should show the name of the restaurants found by Favorite restaurants', (done) => {
      document.querySelector('#restaurants').addEventListener('restaurants:updated', () => {
        const restoTitles = document.querySelectorAll('.resto__title');
  
        expect(restoTitles.item(0).textContent).toEqual('restaurant abc');
        expect(restoTitles.item(1).textContent).toEqual('ada juga restaurant abcde');
        expect(restoTitles.item(2).textContent).toEqual('ini juga bagus restaurant a');
  
        done();
      });
  
      FavoriteRestaurants.searchRestaurants.withArgs('restaurant a').and.returnValues([
        { id: 111, name: 'restaurant abc' },
        { id: 222, name: 'ada juga restaurant abcde' },
        { id: 333, name: 'ini juga bagus restaurant a' },
      ]);
  
      searchRestaurants('restaurant a');
    });

    it('should show - when the restaurant returned does not contain a title', (done) => {
      document.querySelector('#restaurants').addEventListener('restaurants:updated', () => {
        const restoTitles = document.querySelectorAll('.resto__title');
        expect(restoTitles.item(0).textContent).toEqual('-');

        done();
      });

      FavoriteRestaurants.searchRestaurants.withArgs('restaurant a').and.returnValues([
        { id: 444 },
      ]);
      
      searchRestaurants('restaurant a');
    });
  });

  describe('when the query search is empty', () => {
    it('should capture the query as empty', () => {
      searchRestaurants('');
      expect(presenter.latestQuery.length).toEqual(0);
    });

    it('should show all favorite restaurants', () => {
      searchRestaurants('  ');

      expect(FavoriteRestaurants.getAllRestaurant)
        .toHaveBeenCalled();
    });
  });

  describe('When no favorite movies could be found', () => {
    it('should show the empty message', (done) => {
      document.querySelector('#restaurants').addEventListener('restaurants:updated', () => {
        expect(document.querySelectorAll('.restaurant-item__not__found').length).toEqual(1);
        done();
      });

      FavoriteRestaurants.searchRestaurants.withArgs('rumah senja').and.returnValues([]);

      searchRestaurants('rumah senja');
    });

    it('should not show any restorants', (done) => {
      document.querySelector('#restaurants').addEventListener('restaurants:updated', () => {
        expect(document.querySelectorAll('.resto__item').length).toEqual(0);
        done();
      });

      FavoriteRestaurants.searchRestaurants.withArgs('rumah senja').and.returnValues([]);

      searchRestaurants('rumah senja');
    });
  });
});