import Route from '@ember/routing/route';
import fetch from 'fetch';

export default class TestRoute extends Route {
  model() {
    let url = 'http://localhost:3000/users';
    return fetch(url).then(function (response) {
      console.log(response)
      return response.json();
    });
  }
}
