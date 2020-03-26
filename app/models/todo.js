import Model from '@ember-data/model';
import DS from 'ember-data';

export default class TodoModel extends Model {
    task = DS.attr('string');
}
