import React, { useMemo, useReducer, createContext } from "react";
import produce from "immer";

import UserList from "./UserList";
import CreateUser from "./CreateUser";

const initialState = {
  inputs: {
    username: "",
    email: ""
  },
  users: [
    {
      id: 1,
      username: "alex",
      email: "alex@gmail.com",
      active: true
    },
    {
      id: 2,
      username: "park",
      email: "park@naver.com",
      active: false
    },
    {
      id: 3,
      username: "kim",
      email: "kim@gmail.com",
      active: false
    }
  ]
};

// 불변성 지키기
// objects : ...spread
// arrays : concat, filter, map

// immer(library) : 불변성을 해치는 코드를 작성해도 대신 불변성 유지를 해준다
// produce(state, draft => {})
// produce(draft => {}) : it will be a updator function

// reducer
function reducer(state, action) {
  switch (action.type) {
    case "CREATE_USER":
      return produce(state, draft => {
        draft.users.push(action.user);
      });

    // return {
    //   users: state.users.concat(action.user) // add a new user
    // };
    case "TOGGLE_USER":
      return produce(state, draft => {
        const user = draft.users.find(user => user.id === action.id);
        user.active = !user.active;
      });

    // return {
    //   users: state.users.map(user =>
    //     user.id === action.id ? { ...user, active: !user.active } : user
    //   ) // if it's the clicked id, then switch active
    // };
    case "REMOVE_USER":
      return produce(state, draft => {
        const index = draft.users.findIndex(user => user.id === action.id);
        draft.users.splice(index, 1); // delete one element from the index
      });

    // return {
    //   users: state.users.filter(user => user.id !== action.id) // if it's the deleted id, then don't add to users
    // };
    default:
      throw new Error("Unhandled action");
  }
}

function countActiveUsers(users) {
  console.log("활성 사용자 수를 세는중...");
  return users.filter(user => user.active).length;
}

// create a context
// param: default value
// export: it is usable anywhere if import
// it is easier using context api when using useReducer
export const UserDispatch = createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users } = state;

  // useMemo: reuse the memoized value when no deps has changed
  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    // Provider: sets the context value = dispatch
    <UserDispatch.Provider value={dispatch}>
      <CreateUser />
      <UserList users={users} />
      <div>활성 사용자 수: {count}</div>
    </UserDispatch.Provider>
  );
}

export default App;
