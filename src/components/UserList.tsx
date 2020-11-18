import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import UserListActions from '../action/UserListActions';
import { User } from '../models/User';
import UserCard from './UserCard';

 const StyledTextBox = styled.input`
  outline: 0;
  border-width: 0 0 2px;
  border-color: #B1B1B1;
  height: 50px;
  width: 320px;
  margin-bottom: 10px;
  font-size: 20px;

  &:focus {
    border-color: #2ECFBF;
  }
`;

const FillerDiv = styled.div`
  height: 50px;
  width: 100%;
  background: white;
  z-index: 1;
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const SearchButton = styled.button`
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 17px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  top: 0px;
  right: 0px;
  cursor: pointer;
  width: 80px;
`

const SearchContainer = styled.div`
  width: 100%;
  height: 50px;
  z-index: 2;
  display: inline-block;
  text-align: center;
`;

const UserList: React.FunctionComponent = props => {
  const dispatch = useDispatch();
  const userListActions = new UserListActions(dispatch);
  const userListState: User[] = useSelector(state => state as User[]);
  const textBoxRef = useRef(null);
  
  useEffect(() => {
    if (userListState.length === 0 && !(textBoxRef.current as any).value) userListActions.getUsers();
  });

  const onSearchButtonClick = () => {
    if(textBoxRef && textBoxRef.current && (textBoxRef.current as any).value) {
      userListActions.getUsers((textBoxRef.current as any).value.toLowerCase());
    } else {
      userListActions.getUsers();
    }
  }

  const onKeyDown = (e: any) => {
    if (e.key === 'Enter') onSearchButtonClick();
  }

  return <StyledContainer>
    <SearchContainer>
      <StyledTextBox placeholder="Search" ref={textBoxRef} onKeyDown={onKeyDown}/>
      <SearchButton onClick={() => onSearchButtonClick()}>Search</SearchButton>
    </SearchContainer>
    <FillerDiv/>
    {userListState.map((user : User) => <UserCard key={user.id} {...user}></UserCard>)}
  </StyledContainer>
}

export default UserList;