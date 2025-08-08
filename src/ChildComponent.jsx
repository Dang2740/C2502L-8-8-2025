import React from 'react';
function ChildComponent ({count, userName}) {
    return (
        <>
            <div>
                <h2>Component Con: </h2>
                <p>Count từ Cha: {count}</p>
                <p>Tên người dùng từ cha: {userName}</p>
            </div>
        </>
    )
}

export default ChildComponent;