import Route from '@ember/routing/route';

export default class FavoritePostsRoute extends Route {
  model() {
    return [
        { title: 'Ember Roadmap' },
        { title: 'Accessibility in Ember' },
        { title: 'EmberConf Recap' }
      ];
  }
}