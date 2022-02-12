import React from "react";
import "./App.css";
import { Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  }
})



function Todo({ todo, index, markTodo, removeTodo,submission }) {
  return (
    <div
      className="todo"
      
    >
      <Button  id="xyz"  variant="contained" style={{ textDecoration: todo.isDone ? "line-through" : "",
      color: todo.isDone ? "red" : "black" 

    
    }}onClick={() => submission(index)}>{todo.text}
      </Button>

     
    </div>
  );
}
function DoneLists({ done, index, markTodo, removeTodo,submission }) {
  return (
    <div
      className="done"
      
    >
    <Button   id="xyz1" variant="contained"  color="secondary">{done}
    </Button>

     
    </div>
  );
}

function FormTodo({ addTodo }) {
  const classes = useStyles()

  const [value, setValue] = React.useState("");
  const [clas, setClas] = React.useState("input")

  const handleSubmit = e => {
    e.preventDefault();
    if (!value ||value.length<5) {
      setClas('error')
      console.log(clas);
      // return ;
    }
    else{
      setClas('input')
      console.log(clas);
      addTodo(value);
     setValue("");
    }
    
  };
  const check = e=>{
    
  }

  return (
    <Form onSubmit={handleSubmit}>
    <Form.Group>
      <Form.Label><b>Add Todo</b></Form.Label>
      <Form.Control type="text" value={value} onChange={e => {
        setValue(e.target.value)
        if(value.length>=4){
          setClas("input");
        }
        
      }} placeholder="Add new todo" />
      <span className={clas}>more than 5 letters required</span>

    </Form.Group> 
    
     
     

    <Button id="submit" variant="contained" type="submit" color="primary">
      Submit
    </Button>
   
  </Form>
  
  
  
  );
}

function App() {
  const [todos, setTodos] = React.useState([
    // {
    //   text: "Have a goodDay ",
    //   isDone: false
    // }
  ]);
  const [done, setDone] = React.useState([
    
      
      
    
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = !(newTodos[index].isDone);
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    // cons newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  const submission = (index) => {
    console.log(index);
    const newTodos = [...todos];
    newTodos[index].isDone = !(newTodos[index].isDone);
    setTodos(newTodos);

    console.log(newTodos[index].isDone);

  };
  const rmvtask = ()=>{
    const newDone = [...done];
    const newTodos = [];
    for(let i=0;i<todos.length;i++){
      console.log(todos[i].isDone,todos[i].text);
      if(todos[i].isDone){
        newDone.push(todos[i].text);
      }
      else{
        newTodos.push(todos[i]);
      }
    }
    setTodos(newTodos);
    setDone(newDone);



  }
 

  return (
    <div className="app">
   
      <div className="container">
      
        <h1 className="text-center mb-4">Todo List</h1>
        <FormTodo addTodo={addTodo} />
        <Button id='rmv' onClick={() => rmvtask()} variant="outlined" type="submit">
        Remove Completed Tasks
      </Button>

        <div id="todoList">
        <span className="tsk">ToDo Tasks</span>

        
          {todos.map((todo, index) => (
         
            

           
                <Todo
                key={index}
                index={index}
                todo={todo}
                markTodo={markTodo}
                removeTodo={removeTodo}
                submission={submission}
                />
           
            
          ))}
        </div>
        
        
      </div>
        <div id="DoneList">
        <span className="tsk">Completed Tasks</span>

          {done.map((done, index) => (
            // alert("dskfb");
         
            

           
                <DoneLists
                key={index}
                index={index}
                done={done}
                // markTodo={markTodo}
                // removeTodo={removeTodo}
                // submission={submission}
                />
           
            
          ))}
        </div>
        
       
      </div>
    
  );
}

export default App;