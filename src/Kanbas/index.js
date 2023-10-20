import KanbasNavigation from "./KanbasNavigation";
import Dashboard from "./Dashboard";
import { Routes, Route, Navigate } from "react-router-dom";
import Courses from "./Courses";

function Kanbas() {
   return (
     <div className="d-flex">
       <div>
         <KanbasNavigation/>
       </div>
       <div>
       <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/*" element={<Courses/>} />
        </Routes>
       </div>
     </div>
   );
 }
 export default Kanbas;