import React from "react";
import Add from "./Add";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariables";
import ArrayStateVariable from "./ArrayStateVariables";
import ParentStateComponent from "./ParentStateComponent";
import ReduxExamples from "./ReduxExamples";
import { useSelector } from "react-redux";

const Assignment4 = () => {
    function sayHello() {
        alert("Hello");
      }
      const { todos } = useSelector((state) => state.todosReducer);
    
 return(
   <>
     <h1>Assignment 4</h1>
     <Add a={1} b={2} />
     <ClickEvent/>
     <PassingDataOnEvent/>
     <PassingFunctions theFunction={sayHello} />
     <EventObject/>
     <Counter/>
     <BooleanStateVariables/>
     <StringStateVariables/>
     <DateStateVariable/>
     <ObjectStateVariable/>
     <ArrayStateVariable/>
     <ParentStateComponent/>
     <ReduxExamples/>
     <ul className="list-group">
        {todos.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
   </>
 );
};
export default Assignment4;