import FavoriteRestaurantDb from "../src/scripts/data/favorite-restorant-idb";
import FavoriteRestaurantShowPresenter from "../src/scripts/view/liked-restaurant/FavoriteRestaurantShowPresenter";
import FavoriteSearchRestaurantView from "../src/scripts/view/liked-restaurant/FavoriteSearchRestaurantView";

describe('Showing all favorite restaurants', () => {
  let view;

  const renderTemplate = () => {
    view = new FavoriteSearchRestaurantView();
    document.body.innerHTML = view.getTemplate();
  };

  beforeEach(() => {
    renderTemplate();
  });

  describe('when no restaurants have been liked', () => {
    it('should ask for the favorite restaurants', () => {
      const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantDb);

      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants
      });

      expect(favoriteRestaurants.getAllRestaurant).toHaveBeenCalledTimes(1);
    });

    it('should show the information that no restaurant have been liked', (done) => {
      document.querySelector('#restaurants').addEventListener('restaurants:updated', () => {
        expect(document.querySelectorAll('.restaurant-item__not__found').length).toEqual(1);

        done();
      });

      const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantDb);
      favoriteRestaurants.getAllRestaurant.and.returnValue([]);

      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants
      });
    });
  }); 

  describe('when favorite restaurant exist', () => {
    it('should show the restaurants', (done) => {
      document.querySelector('#restaurants').addEventListener('restaurants:updated', () => {
        expect(document.querySelectorAll('#restaurant__item').length).toEqual(2);
        
        done();
      });


      const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantDb, false);
      favoriteRestaurants.getAllRestaurant.and.returnValues([
        {
          id: 11, 
          name: 'A', 
          vote_average: 3, 
          overview: 'tempat Restorant A',
        },
        {
          id: 22, 
          name: 'B', 
          vote_average: 4, 
          overview: 'tempat Restorant B',
        }
      ]);

      new FavoriteRestaurantShowPresenter({
        favoriteRestaurants, 
        view
      })
    });
  });
});