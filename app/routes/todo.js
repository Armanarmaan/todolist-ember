import Route from '@ember/routing/route';

export default class TodoRoute extends Route {
    model() {
        /*const response = await fetch('http://localhost:3000/users');
        const todos = await response.json();
    
        return todos;*/

        let url = 'http://localhost:3000/todos';
        return fetch(url).then(function (response) {
            //console.log(response)
            return response.json();
        });
    }
}