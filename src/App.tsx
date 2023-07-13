import React from 'react';
import UserList from './comonents/UserList';
import TodoList from './comonents/TodoList';

const App = () => {
    return (
        <div>
            <UserList/>
            <hr/>
            <TodoList/>
        </div>
    );
};

export default App;