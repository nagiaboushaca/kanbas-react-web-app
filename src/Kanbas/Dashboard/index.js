import { Link, Route, Routes } from "react-router-dom";
import db from "../Database";
import "./index.css";
import Courses from "../Courses";

function Dashboard() {
  const courses = db.courses;
  const colorPaths = ["images/green.png", "images/neu-logo.png", "images/orange.png",
  "images/red.png", "images/turqoise.png", "images/pink.png"];

  return (
    <div className = "wd-dashboard-content">
      <h1>Dashboard</h1>
      <hr />
      <h2>Published Courses ({courses.length})</h2>
      <div className="wd-dashboard-grid d-flex flex-wrap flex-row ">
        <div className="wd-card-dimensions row rows-col-4">
          
        {courses.map((course) => (
          <div className="col">
          <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">
             <div className="card h-100">
                  <img src={colorPaths[Math.floor(Math.random() * 5)]} className="card-img-top" width="260px" height="150px" />
                  <h5 className="card-title">{course.name}</h5>
                  <p className="card-text">{course.number}, {course.startDate} to {course.endDate}</p>
                </div>
          </Link>
          </div>
          
        ))}
        </div>
        
      </div>
    </div>
  );
}
export default Dashboard;