import Coursecard from "./Coursecard.jsx";

function Courselist() {

const courses = [
    {id:"1",title:"html"},
    {id:"2",title:"css"},
    {id:"3",title:"sass"},
    {id:"4",title:"javascript"},
    {id:"5",title:"ract"},
]


  return (
    <>
    <ul>{courses.map(course=>
    <Coursecard key={course.id} title={course.title}/>
)}

</ul>
    </>
  )
}

export default Courselist