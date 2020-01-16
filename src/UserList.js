import React, { useContext } from "react";

import { UserDispatch } from "./App";

// create another component for each user
// it will not be exported so declare like below
const User = React.memo(function User({ user }) {
  const { username, email, id, active } = user;

  // use the context
  const dispatch = useContext(UserDispatch);

  return (
    <div>
      <b
        style={{
          color: active ? "green" : "black",
          cursor: "pointer"
        }}
        onClick={() =>
          dispatch({
            type: "TOGGLE_USER",
            id
          })
        }
      >
        {username}
      </b>
      <span>({email})</span>
      <button
        onClick={() =>
          dispatch({
            type: "REMOVE_USER",
            id
          })
        }
      >
        삭제
      </button>{" "}
    </div>
  );
});

function UserList({ users }) {
  return (
    <div>
      {users.map(
        // map: there must have a key value for efficiency
        // if no such key, send index to params and use it instead
        user => (
          <User user={user} key={user.id} />
        )
      )}
    </div>
  );
}

// React.memo: it only re-render when the props has changed
export default React.memo(UserList);
