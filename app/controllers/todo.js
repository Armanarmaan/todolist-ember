import Controller from '@ember/controller';

export default class TodoController extends Controller {
    actions={
        submitAction: function(){

            var newTask = this.get('task');

            alert('New Task : '+ newTask);
            
            const data = { task: this.get('task') };

            

            let url = 'http://localhost:3000/todos';

            fetch(url, {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

            window.location.reload(true);
        }
    }
}