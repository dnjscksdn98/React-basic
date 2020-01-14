import React, { useState, useRef } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser'


function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "alex",
      email: "alex@gmail.com",
      active: true,
    },
    {
      id: 2,
      username: "park",
      email: "park@naver.com",
      active: false,
    },
    {
      id: 3,
      username: "kim",
      email: "kim@gmail.com",
      active: false,
    }
  ]);

  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });
  const { username, email } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const nextId = useRef(4);  // 초기값을 4로 지정
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    // setUsers(users.concat(user));
    setUsers([...users, user])

    setInputs({
      username: '',
      email: '',
    });

    nextId.current += 1;
  };

  const onRemove = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const onToggle = (id) => {
    setUsers(users.map(
      user => user.id === id
        ? { ...user, active: !user.active }
        : user
    ));
  };

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    </>
  );
}

export default App;
