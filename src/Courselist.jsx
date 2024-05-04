import { useState } from "react";
import Coursecard from "./Coursecard.jsx";
import styled from "styled-components";

const Title = styled.h2`
  color: ${(props) => (props.data ? "red" : "green")};
  font-size: 2rem;
`;

function Courselist() {
  const [css, setCss] = useState(true);

  const courses = [
    { id: "1", title: "html" },
    { id: "2", title: "css" },
    { id: "3", title: "sass" },
    { id: "4", title: "javascript" },
    { id: "5", title: "ract" },
  ];

  return (
    <>
      <Title data={css}>salam man erfan hastam :)</Title>
      <br />
      <button onClick={() => setCss((css) => !css)}>Change</button>
      <br />
      <br />
      <ul>
        {courses.map((course) => (
          <Coursecard key={course.id} title={course.title} />
        ))}
      </ul>
    </>
  );
}

export default Courselist;
