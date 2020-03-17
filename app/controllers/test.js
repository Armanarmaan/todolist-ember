import Controller from '@ember/controller';


export default class TestController extends Controller {
  actions = {
    submitAction(event) {
      event.preventDefault();
      let task = document.getElementById('inputTodo').value;
      let url = 'http://localhost:3000/todos';
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          task
        })
      })
    }
  }
}
