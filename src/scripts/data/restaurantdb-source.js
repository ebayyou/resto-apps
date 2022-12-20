import API_ENDPOINT from '../global/api-endpoint';

class restaurantDBSource {
  static async listRestaurant() {
    const request = await fetch(`${API_ENDPOINT.LIST_RESTAURANT}`);
    const response = await request.json();

    return response;
  }

  static async detailRestaurant(id) {
    const request = await fetch(`${API_ENDPOINT.DETAIL_RESTAURANT(id)}`);
    const response = await request.json();

    return response;
  }

  static async reviewRestaurant(data) {
    const request = await fetch(`${API_ENDPOINT.REVIEW_RESTAURANT}`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const response = await request.json();
    return response;
  }
}

export default restaurantDBSource;
