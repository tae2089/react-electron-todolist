import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { useTodoState } from '@/TodoContext';
const TodoHeadBlock = styled.div`
    padding-top: 48px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 24px;
    border-bottom: 1px solid #e9ecef;
    h1 {
        margin: 0;
        font-size: 36px;
        color: #343a40;
    }
    .day {
        margin-top: 4px;
        color: #868e96;
        font-size: 21px;
    }
    .tasks-left {
        color: #20c997;
        font-size: 18px;
        margin-top: 40px;
        font-weight: bold;
    }
`;

function DayOfWeek(){
        const week = ['일','월',"화","수","목","금","토"]
        const day = week[moment().day()]
        return (
            <div className="day">{day}요일</div>
        )
}

function TodoHead(){
    const today = moment().format("YYYY년 MM월 DD일")
    const todos = useTodoState();
    const undoneTasks = todos.filter(todo => todo.done === false)
    return(
        <TodoHeadBlock>
            <h1>{today}</h1>
            <DayOfWeek />
            <div className="tasks-left">할 일 {undoneTasks.length}개 남음</div>
        </TodoHeadBlock>
    )
}

export default TodoHead;