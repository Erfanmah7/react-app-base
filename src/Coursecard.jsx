import { useState } from "react";

// eslint-disable-next-line react/prop-types
function Coursecard({ title }) {
  const [mystyle, setStyle] = useState(false);

  const colorHandeler = () => {
    setStyle((mystyle) => !mystyle);
  };

  const cssStyles = {
    color: "azure",
    backgroundColor: "cadetblue",
    padding: "5px 10px",
    border: "none",
    borderRadius: "10px",
    margin: "20px",
  };

  return (
    <>
      <li style={{ color: mystyle ? "red" : "blue" }}>{title}</li>
      <button style={cssStyles} onClick={colorHandeler}>
        ChangeColor
      </button>
    </>
  );
}

export default Coursecard;
