const headers = {
    'Content-Type': 'application/json'
}
const send = (url, method = 'GET', data = null) => {

    let config = {
        'method': method,
        'headers': headers
    }

    if (data) {
        config = {...config, 'body': JSON.stringify(data)}
    }

    return fetch(url, config)
        .then((response) => {
        return response.json();
    }).then((data) => {
        if (data && data.error) {
            throw data.error;
        }
        return data;
    });
}

export class Api {

    static getTodos = () => {
        return send('https://rn-todo-app-c4323-default-rtdb.firebaseio.com/todos.json')
    }

    static addTodo = (data) => {
        return send('https://rn-todo-app-c4323-default-rtdb.firebaseio.com/todos.json', 'POST', data);
    }

    static updateTodo = (id, data) => {
        return send(`https://rn-todo-app-c4323-default-rtdb.firebaseio.com/todos/${id}.json`, 'PATCH', data);
    }

    static removeTodo = id => {
        return send(`https://rn-todo-app-c4323-default-rtdb.firebaseio.com/todos/${id}.json`, 'DELETE');
    }
}
