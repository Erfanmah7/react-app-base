import React, { useState } from "react";

function Form() {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");
  const [select, setSelect] = useState("user");
  const [gender, setGender] = useState("male");
  const [check, setCheck] = useState(false);

  const submitHandeler = (e) => {
    console.log({ text, password, select, gender, check });
  };

  const textHandeler = (e) => {
    setText(e.target.value);
  };

  const passwordHandeler = (e) => {
    setPassword(e.target.value);
  };

  const selectHandeler = (e) => {
    setSelect(e.target.value);
  };

  const radioHaneler = (e) => {
    setGender(e.target.value);
  };

  const checkHandeler = () => {
    setCheck((check) => !check);
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Please enter your text"
          value={text}
          onChange={textHandeler}
        />
        <input
          type="password"
          placeholder="Please enter your password"
          value={password}
          onChange={passwordHandeler}
        />
        <select onChange={selectHandeler} value={select}>
          <option value="admin">Admin</option>
          <option value="user">User</option>
          <option value="writer">Writer</option>
        </select>
        <label htmlFor="male">Male</label>
        <input
          id="male"
          type="radio"
          name="gender"
          value="male"
          checked={gender === "male"}
          onChange={radioHaneler}
        />
        <label htmlFor="female">Female</label>
        <input
          id="female"
          type="radio"
          name="gender"
          value="female"
          onChange={radioHaneler}
          checked={gender === "female"}
        />
        <label htmlFor="other">Other</label>
        <input
          id="other"
          type="radio"
          name="gender"
          value="other"
          checked={gender === "other"}
          onChange={radioHaneler}
        />
        <input type="checkbox" onChange={checkHandeler} checked={check} />
        <button onClick={submitHandeler}>Submit</button>
      </div>
    </>
  );
}

export default Form;
