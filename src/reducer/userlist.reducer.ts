import { User } from '../models/User';

export interface Action {
  type: string;
  payload?: any;
}


const initialState: User[] = [];

const filterUsers = (users: User[], keyword: string) => {
  if (!keyword) return users;
  return users.filter((user) => {
    return user.name.toLowerCase().indexOf(keyword) > -1 || user.email.toLowerCase().indexOf(keyword) > -1
  })
}


const userlistReducer = (state: User[] = initialState, action: Action) => {
  const { type, payload } = action;
  let currentState = [...state]
  switch(type) {
    case 'GET_USERS':
      currentState = filterUsers([...payload.users], payload.filter);
      break;
  }
  return currentState;
}

export default userlistReducer;