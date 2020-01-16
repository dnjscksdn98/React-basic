import React, { useRef, useContext } from "react";
import useInputs from "./hooks/useInputs";
import { UserDispatch } from "./App"; // import the context api

function CreateUser() {
  // use the inputs custom hook
  const [{ username, email }, onChange, reset] = useInputs({
    username: "",
    email: ""
  });

  const nextId = useRef(4); // the id for the created user
  const dispatch = useContext(UserDispatch); // useContext: use the context that was imported

  const onCreate = () => {
    dispatch({
      type: "CREATE_USER",
      user: {
        id: nextId.current, // current: returns the current value
        username,
        email
      }
    });
    reset();
    nextId.current += 1;
  };

  return (
    <div>
      <input
        name="username"
        placeholder="계정명"
        onChange={onChange}
        value={username}
      />
      <input
        name="email"
        placeholder="이메일"
        onChange={onChange}
        value={email}
      />
      <button onClick={onCreate}>등록</button>
    </div>
  );
}

export default CreateUser;
