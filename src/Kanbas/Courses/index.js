import db from "../../Kanbas/Database";
import { Route, Routes, useParams } from "react-router-dom";

function Courses() {
  const { courseId } = useParams();
  console.log(courseId);


  const course = db.courses.find((course) => course._id === courseId);
  return (
    <div>
      <h1>Course {course.name}</h1>
    </div>
  );
}
export default Courses;