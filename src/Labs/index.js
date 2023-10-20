import Assignment3 from "./a3";
import JavaScript from "./a3/JavaScript";
import Nav from "../Nav";
import Classes from "./a3/Classes";
import Styles from "./a3/Styles";
import ConditionalOutput from "./a3/ConditionalOutput";
import TodoList from "./a3/todos/TodoList";

function Labs() {
    return (
      <div className="container">
        <Nav/>
        <Assignment3/>
        <JavaScript/>
        <ConditionalOutput/>
        <Classes/>
        <Styles/>
        <TodoList/>
      </div>
    );
   }
   
 export default Labs;