import React, { useState } from "react";

function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: '',
    });
    const { name, nickname } = inputs;

    const onChange = (e) => {
        const { name, value } = e.target;  // name 과 value 를 추출

        // 불변성을 지킨다
        // 객체 상태를 업데이트 할 때
        // 기존의 객체를 복사
        // const nextInputs = {
        //     ...inputs,
        //     [name]: value,  // if name="name" change name, if name="nickname" change nickname
        // };
        // 그 후에 덮어 쓴다
        // setInputs(nextInputs);
        setInputs({
            ...inputs,  // spread 로 복사
            [name]: value,
        });
    };
    const onReset = () => {
        setInputs({
            name: '',
            nickname: '',
        });
    };

    return (
        <div>
            <input
                name="name"
                placeholder="이름"
                onChange={onChange}
                value={name}
            />
            <input
                name="nickname"
                placeholder="닉네임"
                onChange={onChange}
                value={nickname}
            />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name}({nickname})
            </div>
        </div>
    );
}

export default InputSample;