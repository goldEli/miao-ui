import React from 'react';
import Button from "./components/Button/button";

function App() {
  return (
    <>
      <Button onClick={() => {alert(123)}}>normal</Button>
      <Button onClick={() => {alert(123)}} btnType="primary">primary</Button>
      <Button onClick={() => {alert(123)}} btnType="danger">danger</Button>
      <Button onClick={() => {alert(123)}} disabled>disabled</Button>
      <Button btnType="link" target="blank" href="https://www.baidu.com">link</Button>
    </>
  );
}

export default App;
