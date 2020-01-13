import React from 'react';

// 컴포넌트 선언 - 함수
function Hello({ color, name, isSpecial }) {
    return (
        <div style={{ color }}>
            {/* {isSpecial ? <b>*</b> : null} */}
            {isSpecial && <b>*</b>}
            안녕하세요 {name}
        </div>
    );
}

// 기본값 지정
Hello.defaultProps = {
    name: "javascript"
}

export default Hello;  // Hello 컴포넌트를 내보낸다