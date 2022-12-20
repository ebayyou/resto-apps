import Home from '../view/page/Home';
import Favorites from '../view/page/Favorites';
import DetailRestaurant from '../view/page/DetailRestaurant';

const routes = {
  '/': Home,
  '/home': Home,
  '/favorites': Favorites,
  '/detail/:id': DetailRestaurant,
};

export default routes;
