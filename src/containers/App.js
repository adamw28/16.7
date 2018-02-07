import React from 'react';
import style from './App.css';
import uuid from 'uuid';

const Todo = props => ( <
    li > { props.todo.text } <
        button type = "button"
    onClick = {
            () => { props.removeTodo (props.todo.id) }
        } > Usuń < /button>  <
        /li>
);
const TodoList = props => ( <
        ul > {
            props.todos.map((todo) => {
                    return ( < Todo key = { todo.id } removeTodo = { props.remove } todo = { todo }
                        /> );
                    })
            } < /ul>
        );
        const Form = props => ( <
            form className = { style.TodoApp } onSubmit = {
                    (event) => { props.onSubmit }
                } >
                <
                h1 > Lista rzeczy do zrobienia < /h1> <
            input type = "text"
            id = "title"
            onChange = { props.onChange }
            /> <
            button type = "button"
            onClick = { props.onClick } > Add title < /button> < /
            form >
        )
        class App extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                    todos: [{
                        id: 1,
                        text: 'clean room'
                    }, {
                        id: 2,
                        text: 'wash the dishes'
                    }, {
                        id: 3,
                        text: 'feed my cat'
                    }],
                    currentText: ''
                };
            }
            addTodo() {console.log(this.state.currentText);
                const todo = {
                    text: this.state.currentText,
                    id: uuid.v4()
                }

                this.setState({
                    todos: [...this.state.todos, todo]
                });
            }
            removeTodo(id) {
                const reminder = this.state.todos.filter(todo => { return todo.id !== id });

                this.setState({
                    todos: reminder
                });
            }

            handlePress(ev) {
                this.setState({
                    currentText: ev.target.value
                });
                console.log(this.state.currentText);

            }

            render() {
                return ( <
                    div >
                    <
                    Form className = { style.TodoApp } 
                        onSubmit = { this.addTodo.bind(this) } onChange = { this.handlePress.bind(this) } onClick = { this.addTodo.bind(this) }
                    /> <
                    h1 > Liczba zadań: { this.state.todos.length } < /h1> <
                    TodoList todos = { this.state.todos } remove = { this.removeTodo.bind(this) }
                    /> <
                    /
                    div >

                );
            }
        }

        export default App;