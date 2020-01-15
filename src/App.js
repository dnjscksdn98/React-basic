import React, {
  useRef,
  useCallback,
  useMemo,
  useReducer,
  createContext
} from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

// useReducer
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
        inputs: initialState.inputs,
        users: state.users.concat(action.user)
      };
    case "TOGGLE_USER":
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.id ? { ...user, active: !user.active } : user
        )
      };
    case "REMOVE_USER":
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id)
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
// default value is null
// export: you can use it anywhere if import
// it is easier using context if useReducer
export const UserDispatch = createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const nextId = useRef(4);
  const { users } = state;
  const { username, email } = state.inputs;

  const onChange = useCallback(e => {
    const { name, value } = e.target;
    dispatch({
      type: "CHANGE_INPUT",
      name,
      value
    });
  }, []);

  const onCreate = useCallback(() => {
    dispatch({
      type: "CREATE_USER",
      user: {
        id: nextId.current,
        username,
        email
      }
    });
    nextId.current += 1;
  }, [username, email]);

  // we send onToggle and onRemove to UserList because we need to send it to User
  // so use ContextAPI
  // const onToggle = useCallback(id => {
  //   dispatch({
  //     type: "TOGGLE_USER",
  //     id
  //   });
  // }, []);

  // const onRemove = useCallback(id => {
  //   dispatch({
  //     type: "REMOVE_USER",
  //     id
  //   });
  // }, []);

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    // set the context as dispatch
    <UserDispatch.Provider value={dispatch}>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} />
      <div>활성 사용자 수: {count}</div>
    </UserDispatch.Provider>
  );
}

export default App;
