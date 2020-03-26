import Route from '@ember/routing/route';

export default class TodoRoute extends Route {
    model() {
        let url = 'http://localhost:3000/todos';
        return fetch(url).then(function (response) {
            //console.log(response)
            let todo = response.json();
            return todo;
        });
    }
    actions = {
        refresh(){
            this.refresh()
        }
    }
}