import FavoriteRestaurantDb from '../src/scripts/utils/favorite-restorant-idb';
import FavoriteSearchRestaurantPresenter from '../src/scripts/view/liked-restaurant/FavoriteSearchRestaurantPresenter'

describe('Search Favorite Restaurants', () => {
  let presenter;
  let FavoriteRestaurants;

  const searchRestaurants = (query) => {
    const queryElement = document.querySelector('#query');
    queryElement.value = query;
    queryElement.dispatchEvent(new Event('change'));
  }

  const setRestaurantSearchContainer = () => {
    document.body.innerHTML = `
      <div id="restaurant__search-container">
        <input id="query" type="text">
        <div class="restaurant__result-container">
          <ul class="restaurants">
          </ul>
        </div>
      </div>
    `;
  }
  const constructPresent = () => {
    FavoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantDb)
    presenter = new FavoriteSearchRestaurantPresenter({ 
      favoriteRestaurants: FavoriteRestaurants 
    });
  }

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
  
    it('should show the found restaurants', () => {
      presenter._showFoundRestaurants([{ id: 1 }]);
      expect(document.querySelectorAll('.resto').length).toEqual(1);
  
      presenter._showFoundRestaurants([{ id: 1, title: 'rumah senja' }, { id: 1, title: 'kafe kita' }]);
      expect(document.querySelectorAll('.resto').length).toEqual(2);
    });
  
    it('should show the title of the found restaurants', () => {
      presenter._showFoundRestaurants([{ id: 1, title: 'rumah senja' }]);
      expect(document.querySelectorAll('.resto__title').item(0).textContent).toEqual('rumah senja');
  
      presenter._showFoundRestaurants([
        { id: 1, title: 'rumah senja' },
        { id: 2, title: 'kafe kita' },
      ])
  
      const restoTitles = document.querySelectorAll('.resto__title');
      expect(restoTitles.item(0).textContent).toEqual('rumah senja')
      expect(restoTitles.item(1).textContent).toEqual('kafe kita')
    });
  
    it('should show - for found restaurant without title', () => {
      presenter._showFoundRestaurants([{ id: 1 }]);
  
      expect(document.querySelectorAll('.resto__title').item(0).textContent).toEqual('-');
    });
  
    it('should show the restaurant found by Favorite Restaurants', (done) => {
      document.querySelector('#restaurant__search-container')
        .addEventListener('restaurants:searched:updated', () => {
          expect(document.querySelectorAll('.resto').length).toEqual(3);
          done();
        });
  
      FavoriteRestaurants.searchRestaurants.withArgs('restaurant a').and.returnValues([
        { id: 111, title: 'restaurant abc' },
        { id: 222, title: 'ada juga restaurant abcde' },
        { id: 333, title: 'ini juga bagus restaurant a' },
      ]);
  
      searchRestaurants('restaurant a');
    });
  
    it('should show the name of the restaurants found by Favorite restaurants', (done) => {
      document.querySelector('#restaurant__search-container').addEventListener('restaurants:searched:updated', () => {
        const restoTitles = document.querySelectorAll('.resto__title');
  
        expect(restoTitles.item(0).textContent).toEqual('restaurant abc');
        expect(restoTitles.item(1).textContent).toEqual('ada juga restaurant abcde');
        expect(restoTitles.item(2).textContent).toEqual('ini juga bagus restaurant a');
  
        done();
      });
  
      FavoriteRestaurants.searchRestaurants.withArgs('restaurant a').and.returnValues([
        { id: 111, title: 'restaurant abc' },
        { id: 222, title: 'ada juga restaurant abcde' },
        { id: 333, title: 'ini juga bagus restaurant a' },
      ]);
  
      searchRestaurants('restaurant a');
    });
  });

  describe('when the query search is empty', () => {
    it('should capture the query as empty', () => {
      searchRestaurants(' ');
      expect(presenter.latestQuery.length).toEqual(0);
      
      searchRestaurants('    ');
      expect(presenter.latestQuery.length).toEqual(0);
      
      searchRestaurants('');
      expect(presenter.latestQuery.length).toEqual(0);
      
      searchRestaurants('\t');
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
      document.querySelector('#restaurant__search-container').addEventListener('restaurants:searched:updated', () => {
        expect(document.querySelectorAll('.restaurant__not__found').length).toEqual(1)
        done();
      })

      FavoriteRestaurants.searchRestaurants.withArgs('rumah senja').and.returnValues([]);

      searchRestaurants('rumah senja');
    });

    it('should not show any restorants', (done) => {
      document.querySelector('#restaurant__search-container').addEventListener('restaurants:searched:updated', () => {
        expect(document.querySelectorAll('.resto').length).toEqual(0);
        done();
      })

      FavoriteRestaurants.searchRestaurants.withArgs('rumah senja').and.returnValues([]);

      searchRestaurants('rumah senja');
    });
  });
});