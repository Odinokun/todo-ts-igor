import React from 'react';
import './App.css';
import {Todolist} from './components/Todolist';

function App() {

    const arrForTodolist1 = [
        {id: 1, title: 'HTML&Css', isDone: true},
        {id: 2, title: 'JavaScript', isDone: true},
        {id: 3, title: 'React', isDone: false},
        {id: 3, title: 'Redax', isDone: false},
        {id: 3, title: 'Saga', isDone: false},
    ]

    const arrForTodolist2 = [
        {id: 1, title: 'Milk', isDone: true},
        {id: 2, title: 'Bread', isDone: false},
        {id: 3, title: 'Coffee', isDone: false},
        {id: 3, title: 'Wine', isDone: true},
    ]

    return (
        <div className="App">
            <Todolist title="What to learn 1" arrForTodolist1={arrForTodolist1}/>
            <Todolist title="What to learn 2" arrForTodolist1={arrForTodolist2}/>
        </div>
    );
}

export default App;
