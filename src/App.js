import React, { useMemo, useReducer, createContext } from "react";
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

// reducer
function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state, // 불변성을 지키기 위해, 먼저 복사를 한다
        inputs: {
          ...state.inputs,
          [action.name]: action.value
        }
      };
    case "CREATE_USER":
      return {
        inputs: initialState.inputs, // clear the username and email
        users: state.users.concat(action.user) // add a new user
      };
    case "TOGGLE_USER":
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.id ? { ...user, active: !user.active } : user
        ) // if it's the clicked id, then switch active
      };
    case "REMOVE_USER":
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id) // if it's the deleted id, then don't add to users
      };
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
