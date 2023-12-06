import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { RiDashboard3Line } from "react-icons/ri";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { BsCalendar2Week } from "react-icons/bs";
import { FaInbox } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { FaQuestion } from "react-icons/fa6";

function KanbasNavigation() {
  const links = 
  ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Help"];
  const linksToIconsMap = {
    Account: <MdOutlineAccountCircle className="fs-1 text" />,
    Dashboard: <RiDashboard3Line className="fs-1 text" />,
    Courses: <FaBook className="fs-1 text" />,
    Calendar: <BsCalendar2Week className="fs-1 text" />,
    Inbox: <FaInbox className="fs-1 text" />,
    History: <FaClock className="fs-1 text" />,
    Studio: <FaComputer className="fs-1 text" />,
    Help: <FaQuestion className="fs-1 text" />,
  };

  const { pathname } = useLocation();
  return (
    <div className="wd-kanbas-navigation list-group" style={{ width: 130 }}>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item text-center p-4 ${
            pathname.includes(link) && "active"
          }`}
        >
          {linksToIconsMap[link]}
          <br />
          {link}
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;