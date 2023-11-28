import React from 'react';
import styled from 'styled-components';

function TodoList() {
  return (
    <Wrapper>
      <Title>To Do List</Title>
      <Box>
        <TodoWrapper>
          <CheckBtn>완료</CheckBtn>
          <Todo>할 일</Todo>
          <div>
            <EditBtn>수정</EditBtn>
            <RemoveBtn>삭제</RemoveBtn>
          </div>
        </TodoWrapper>
        <InputWrapper>
          <Input placeholder='할 일을 입력해주세요'></Input>
          <AddBtn>등록하기</AddBtn>
        </InputWrapper>
      </Box>
    </Wrapper>
  );
}

const Box = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AddBtn = styled.button`
  background-color: black;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #4f4f4f;
    transition: 0.2s;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
`;

const Input = styled.input`
  width: 300px;
  height: 25px;
  padding-left: 10px;
`;

const RemoveBtn = styled.button`
  background-color: white;
  width: 50px;
  height: 30px;
  border-radius: 30px;
  margin-right: 7px;
  &:hover{
    background-color: #e1e1e1;
    cursor: pointer;
    transition: 0.2s;
  }
`;

const EditBtn = styled.button`
  background-color: white;
  width: 50px;
  height: 30px;
  border-radius: 30px;
  margin-right: 7px;
  &:hover{
    background-color: #e1e1e1;
    cursor: pointer;
    transition: 0.2s;
  }
`;

const Todo = styled.div``;

const CheckBtn = styled.button`
  background-color: black;
  color: white;
  width: 50px;
  height: 30px;
  border-radius: 30px;
  border: none;
  &:hover {
    background-color: #4f4f4f;
    cursor: pointer;
    transition: 0.2s;
  }
`;

const TodoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 500px;
  margin-top: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 50px;
  font-weight: bold;
`;

export default TodoList;
