
import React, { useState } from 'react';

function App() {
  const [title, setTitle] = useState("React Title");
  const [updateCount, setUpdateCount] = useState(0);

  const handleChangeTitle = () => {
    setTitle(`React Title Updated ${updateCount + 1}`);
    setUpdateCount(updateCount + 1);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>{title}</h1>
      <button onClick={handleChangeTitle}>Change Title (React)</button>
      <p>React DOM updates: {updateCount}</p>
    </div>
  );
}

export default App;
