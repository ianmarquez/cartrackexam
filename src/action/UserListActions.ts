import { Dispatch } from "react";
import axios from 'axios';

export default class UserListActions {
  public static GET_USERS = 'GET_USERS';
  public static SEARCH_USERS = 'SEARCH_USERS';
  private _dispatch : Dispatch<any>;

  constructor(dispatch: Dispatch<any>) {
    this._dispatch = dispatch;
  }

  public async getUsers(filter? : string) {
    const { data : users } = await axios.get('https://jsonplaceholder.typicode.com/users');
    this._dispatch({
      type: UserListActions.GET_USERS,
      payload: {
        users,
        filter
      }
    })
  }
}