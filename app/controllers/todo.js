import Controller from '@ember/controller';

export default class TodoController extends Controller {
    actions={
        submitAction: function(){
            alert('New Task : '+this.get('task'))
        }
    }
    todo= [
        {
            id : 1,
            task : 'API bugs',
            status : 'done'
        },
        {
            id : 2,
            task : 'Button bugs',
            status : 'not done'
        },
        {
            id : 3,
            task : 'CSS bugs',
            status : 'done'
        }
    ]

    //todoz = Ember.$.getJSON('localhost:3000');
}