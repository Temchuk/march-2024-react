import React, {FC, useEffect, useState} from 'react';
import './App.css';


const App: FC = () => {


    const [skipValue, setSkipValue] = useState<number>(0)

    const [todos, setTodos] = useState<any[]>([])

useEffect(() =>{
    fetch('https://dummyjson.com/todo?skip=' + skipValue)
        .then(value => value.json())
        .then(todosResponse => {

            setTodos(todosResponse.todos)
        });
    }, [skipValue]);


    return (
        <div>

            {todos.map( value => <li>{value.todo}</li>)}

            <button onClick={() => {
               setSkipValue(skipValue - 30);
            }}>prev
            </button>

            <button onClick={() => {
                setSkipValue(skipValue + 30);
            }}>next
            </button>
        </div>
    );
}

export default App;