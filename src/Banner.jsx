import React, { useState } from "react";

function Banner() {
  const [isShow, setShow] = useState(false);
  const [count, setCount] = useState(0);

  const increasehandeler = () => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };

  const showHandeler = () => setShow(true);
  const hideHandeler = () => setShow(false);

  return (
    <>
      {isShow && (
        <div>
          <p>Login</p>
        </div>
      )}
      <button onClick={showHandeler}>Show</button>
      <button onClick={hideHandeler}>Hide</button>
      <button onClick={increasehandeler}>Increase-3</button>
      {count}
    </>
  );
}

export default Banner;
