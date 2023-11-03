import Assignment3 from "./a3";
import Assignment4 from "./a4";
import { Route, Routes, Navigate } from "react-router";
import JavaScript from "./a3/JavaScript";
import Nav from "../Nav";
import Classes from "./a3/Classes";
import Styles from "./a3/Styles";
import ConditionalOutput from "./a3/ConditionalOutput";
import TodoList from "./a3/todos/TodoList";
import store from "./store";
import { Provider } from "react-redux";

function Labs() {
    return (
      <Provider store={store}>
      <div className="container">
        <Nav/>
        <Routes>
       <Route path="/"
        element={<Navigate
                  to="a3"/>}/>
       <Route path="a3"
        element={<Assignment3/>}/>
       <Route path="a4"
        element={<Assignment4/>}/>
     </Routes>
      </div>
      </Provider>
    );
   }
   
 export default Labs;