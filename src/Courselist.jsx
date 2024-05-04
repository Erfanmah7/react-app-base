import Coursecard from "./Coursecard.jsx";
import styled from "styled-components";

function Courselist() {
  const courses = [
    { id: "1", title: "html" },
    { id: "2", title: "css" },
    { id: "3", title: "sass" },
    { id: "4", title: "javascript" },
    { id: "5", title: "ract" },
  ];

  const Title = styled.h2`
    color: red;
    font-size: 2rem;
  `;

  return (
    <>
      <Title>salam man erfan hastam :)</Title>
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
