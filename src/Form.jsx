import { useState } from "react";
import styles from "./button.module.css";

function Form() {
  const [color, setColor] = useState(false);

  const [form, setForm] = useState({
    text: "",
    password: "",
    select: "user",
    gender: "male",
    check: false,
  });

  const submitHandeler = () => {
    setColor((color) => !color);
    console.log(form);
  };

  const changeHandeler = (e) => {
    const myName = e.target.name;
    const myValue = e.target.value;

    if (myName === form.check) {
      setForm((form) => !form.check);
    } else {
      setForm((form) => ({ ...form, [myName]: myValue }));
    }
  };

  return (
    <>
      <div>
        <input
          type="text"
          name="text"
          placeholder="Please enter your text"
          value={form.text}
          onChange={changeHandeler}
        />
        <input
          type="password"
          name="password"
          placeholder="Please enter your password"
          value={form.password}
          onChange={changeHandeler}
        />
        <select name="role" onChange={changeHandeler} value={form.select}>
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
          checked={form.gender === "male"}
          onChange={changeHandeler}
        />
        <label htmlFor="female">Female</label>
        <input
          id="female"
          type="radio"
          name="gender"
          value="female"
          onChange={changeHandeler}
          checked={form.gender === "female"}
        />
        <label htmlFor="other">Other</label>
        <input
          id="other"
          type="radio"
          name="gender"
          value="other"
          checked={form.gender === "other"}
          onChange={changeHandeler}
        />
        <input
          type="checkbox"
          name="check"
          onChange={changeHandeler}
          checked={form.check}
        />
        <button
          className={color ? styles.buttonform : styles.buttonmyform}
          onClick={submitHandeler}
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default Form;
