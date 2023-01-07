const areActsAsFavoriteRestaurantModel = (favoriteRestaurant) => {
  it('should return the restaurant that has been added', async () => {
    favoriteRestaurant.putRestaurant({ id: 1 });
    favoriteRestaurant.putRestaurant({ id: 2 });

    expect(await favoriteRestaurant.getRestaurant(1)).toEqual({ id: 1 });
    expect(await favoriteRestaurant.getRestaurant(2)).toEqual({ id: 2 });
    expect(await favoriteRestaurant.getRestaurant(3)).toEqual(undefined);
  });

  it('should refuse a movie from being added if it does not have the correct property', async () => {
    favoriteRestaurant.putRestaurant({ notRestaurant: 'warung' });

    expect(await favoriteRestaurant.getAllRestaurant()).toEqual([]);
  });

  it('can return all of the restaurants that have been added', async () => {
    favoriteRestaurant.putRestaurant({ id: 1 });
    favoriteRestaurant.putRestaurant({ id: 2 });

    expect(await favoriteRestaurant.getAllRestaurant()).toEqual([
      { id: 1 },
      { id: 2 },
    ]);
  });

  it('should remove favorite restaurant', async () => {
    favoriteRestaurant.putRestaurant({ id: 1 });
    favoriteRestaurant.putRestaurant({ id: 2 });
    favoriteRestaurant.putRestaurant({ id: 3 });

    await favoriteRestaurant.deleteRestaurant(1);

    expect(await favoriteRestaurant.getAllRestaurant()).toEqual([
      { id: 2 },
      { id: 3 },
    ]);
  });

  it('should handle requests  to remove a restaurant even though the restaurant has not been added', async () => {
    favoriteRestaurant.putRestaurant({ id: 1 });
    favoriteRestaurant.putRestaurant({ id: 2 });
    favoriteRestaurant.putRestaurant({ id: 3 });

    await favoriteRestaurant.deleteRestaurant(4);

    expect(await favoriteRestaurant.getAllRestaurant()).toEqual([
      { id: 1 },
      { id: 2 },
      { id: 3 },
    ]);
  });

  it('should be able to search for restaurants', async () => {
    favoriteRestaurant.putRestaurant({ id: 1, name: 'kafe kita' });
    favoriteRestaurant.putRestaurant({ id: 2, name: 'warung tegal' });
    favoriteRestaurant.putRestaurant({ id: 3, name: 'kafe kopi kane' });
    favoriteRestaurant.putRestaurant({ id: 4, name: 'kafe ka sendayu' });

    expect(await favoriteRestaurant.searchRestaurants('kafe k')).toEqual([
      { id: 1, name: 'kafe kita' },
      { id: 3, name: 'kafe kopi kane' },
      { id: 4, name: 'kafe ka sendayu' },
    ]);
  });
};

export { areActsAsFavoriteRestaurantModel };
