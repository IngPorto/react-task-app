import React, {Component} from 'react';

class FormAddTask extends Component{
    constructor(){
        super()
        this.state ={
            title: "",
            priority: "",
            description: "",
            responsibe: ""
        }
    }
    handleInput = (e) =>{
        const {value, name} = e.target
        this.setState({
            [name]: value
        })
        console.log(this.state)
    }

    handleSubmit = (e) =>{
        // evitar refrescar la pantalla
        e.preventDefault()
        this.props.onAddTask(this.state)
    }

    render(){
        return(
            <div className="card">
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input 
                            type="text"
                            name="title"
                            onChange={ this.handleInput }
                            className="form-control"
                            placeholder="Título"
                        />
                    </div>
                    <div className="form-group">
                        <select 
                            className="form-control" 
                            name="priority" 
                            onChange={ this.handleInput }
                        >
                            <option value="low">low</option>
                            <option value="medium">medium</option>
                            <option value="high">high</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input 
                            type="text"
                            name="description"
                            className="form-control"
                            placeholder="Descripción"
                            onChange={ this.handleInput }
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="text"
                            name="responsible"
                            className="form-control"
                            placeholder="Responsable"
                            onChange={ this.handleInput }
                        />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary btn-sm btn-block">Agregar</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default FormAddTask;