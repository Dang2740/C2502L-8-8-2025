import { useState } from 'react'
import ChildComponent from './ChildComponent.jsx'

function App() {
  const [count, setCount] = useState(0);
  const [userName, setUserName] = useState("Nguyễn Văn A");

  return (
    <>
      <h1>Component Cha:</h1>
      <p>Count: {count}</p>
      <p>User Name: {userName}</p>
      <button onClick={() => setCount(count + 1)}>Tăng Count</button>
      <button onClick={() => setUserName("Người dùng mới")}>Đổi tên người dùng</button><hr/>
      <ChildComponent count={count} userName={userName} />
    </>
  );
}

export default App
