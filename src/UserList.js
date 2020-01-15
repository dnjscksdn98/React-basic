import React, { useContext } from "react";
import { UserDispatch } from "./App";

// 컴포넌트를 하나 더 생성
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
        // 키를 지정해놔야 효율적으로 렌더링을 할 수 있다
        user => (
          <User user={user} key={user.id} />
        ) // 각자의 고유한 키가 필요하므로 key 값을 id 로 지정
      )}
    </div>
  );
}

export default React.memo(
  UserList
  // (prevProps, nextProps => nextProps.users === prevProps.users)
);
