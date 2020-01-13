import React, { useState } from "react";

function Counter() {
    // 배열 비구조화 할당
    // 첫번째 원소=number, 두번쨰 원소(첫번째 원소를 바꾸는 함수)=setNumber 로 할당
    // useState 의 파라미터는 number 의 기본값으로 설정
    const [number, setNumber] = useState(0);

    // add events
    const onIncrease = () => {
        // or use update function
        // setNumber(prevNumber => prevNumber + 1);
        setNumber(number + 1);
    }

    const onDecrease = () => {
        setNumber(number - 1);
    }

    return (
        <div>
            <h1>{number}</h1>
            {/* 이벤트 추가 */}
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}

export default Counter;