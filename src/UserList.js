import React from "react";


// 컴포넌트를 하나 더 생성
function User({ user, onRemove, onToggle }) {
    const { username, email, id, active } = user;

    return (
        <div>
            <b
                style={{
                    color: active ? 'green' : 'black',
                    cursor: 'pointer'
                }}
                onClick={() => onToggle(id)}  // don't call a function, make a function 
            >
                {username}
            </b>
            <span>({email})</span>
            <button onClick={() => onRemove(id)}>삭제</button>  {/* 함수를 호출하는 것을 넣으면 안되고 함수 자체를 넣어야함 */}
        </div>
    );
}

function UserList({ users, onRemove, onToggle }) {
    return (
        <div>
            {
                users.map(
                    // 키를 지정해놔야 효율적으로 렌더링을 할 수 있다
                    user => (
                        <User
                            user={user}
                            key={user.id}
                            onRemove={onRemove}
                            onToggle={onToggle}
                        />
                    )  // 각자의 고유한 키가 필요하므로 key 값을 id 로 지정
                )
            }
        </div>
    );
}

export default UserList;