import React from 'react';
import { createGlobalStyle } from 'styled-components'
import TodoTemplate from 'components/TodoTemplate'
import TodoHeadBlock from 'components/TodoHead'
import TodoList from 'components/TodoList'
import TodoCreate from 'components/TodoCreate'
import { TodoProvider } from '@/TodoContext';
const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef
  }
`;


function TodoApp() {

    return (
        < >
            <TodoProvider>
                <GlobalStyle />
                <TodoTemplate>
                    <TodoHeadBlock />
                    <TodoList />
                    <TodoCreate />
                </TodoTemplate>
            </TodoProvider>
        </>
    );
}

export default TodoApp;
