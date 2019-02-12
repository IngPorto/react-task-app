import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import {tasks} from './json/tasks.json';
import FormAddTask from './components/FormAddTask'

class App extends Component {
  constructor(){
    super()
    this.state = {
      title: "Tareas activas",
      tasks
    }
  }

  handleAddTask = (newTask) =>{
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  removeTask = (index) =>{
    if(window.confirm("¿Realmente desea eliminar este elemento?")){
      const taskWillRemove = this.state.tasks
      taskWillRemove.splice(index,1)
      this.setState({
        tasks: taskWillRemove
      })
    }
    /*  Otra forma de remover
    this.setState({
      tasks: this.state.tasks.filter((e, i)=>{
        return e !== index
      })
    })
    */
  }

  render() {
    const tasks = this.state.tasks.map((task, index)=>{
      return(
        <div className="col-md-4">
          <div className="card mt-4">
            <div className="card-header">
              <h3>{task.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {task.priority}
              </span>
            </div>
            <div className="card-body">
              <p>
                {task.description}
              </p>
              <p>
                <mark>
                  {task.responsible}
                </mark>
              </p>
            </div>
            <div className="card-footer">
              <button 
                className="btn btn-danger btn-sm"
                onClick={this.removeTask.bind(null ,index)}
              >
                Borrar
              </button>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div className="App">
        <Navigation title={this.state.title} ntasks={this.state.tasks.length}/>
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container">
          <div className="row mt-4">
            <FormAddTask onAddTask={this.handleAddTask}/>
            {tasks}
          </div>
        </div>

      </div>
    );
  }
}

export default App;
