import Route from '@ember/routing/route';
import fetch from 'fetch';

export default class PhotosRoute extends Route {
  async model() {
    const response = await fetch('http://localhost:3000/users');
    const photos = await response.json();

    return photos;
  }
}