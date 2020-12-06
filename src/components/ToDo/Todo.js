import React, { Component } from 'react';
import './Todo.css';
import { DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';

class Todo extends Component{
    state={
        input: '',
        list: []
    }

    textChanger = (e) => {
        this.setState({input: e.target.value})
    }

    submitHandler = (event) => {
        event.preventDefault();

        const newItem = {
            id: Math.random().toString(),
            value: this.state.input.slice()
        };
        const list = [...this.state.list];

        list.push(newItem);
        console.log(list)
        this.setState({
            list,
            input:''
        })
    }

    deleteHandler = (id) => {
        const list = [...this.state.list];
        const updatedList = list.filter( item => item.id !== id);
        this.setState({
            list: updatedList
        })
    }
   
    render(){
        return( 
            <div className="Body">
                <header className="Header">
                    <h1>Drag and Drop Todo List</h1>
                </header>

                <form className="Form" style={{padding:'20px'}}
                         onSubmit={(e) => this.submitHandler(e, this.state.input)} >
                    <input 
                    style={{width:'50%', display:'inline', marginLeft:'15%'}} 
                    type="text" placeholder="Enter Something..."
                    value={this.state.input} onChange={this.textChanger}  />
                    <button className="submit1"  >Add Item</button>
                    <div className="List">
                        <DragDropContext 
                            onDragEnd={(param) => {
                                const srcI = param.source.index;
                                const desI = param.destination?.index;
                                // console.log(param);  //-----> to get the values of src and des indices
                                
                                    this.state.list.splice(desI,0,this.state.list.splice(srcI,1)[0]);
                                
                            }}
                        >
                            <ul>
                                <Droppable droppableId="droppable-1">
                                    {(provided, _) => (
                                        <div ref={provided.innerRef} {...provided.droppableProps}>
                                            {this.state.list.map( (item, i) => {
                                                return (
                                                <Draggable 
                                                    key={item.id} 
                                                    draggableId={"draggable-"+item.id} 
                                                    index={i} 
                                                >
                                                    {(provided, snapshot) => (
                                                        <li ref={provided.innerRef} {...provided.draggableProps}
                                                            key={item.id}
                                                            value={item.value}
                                                            style={{ 
                                                                    ...provided.draggableProps.style,
                                                                    boxShadow: snapshot.isDragging? "0 0 .4rem #666" : "none"
                                                                    }}>
                                                                <span class="grippy" {...provided.dragHandleProps}></span>
                                                                {item.value} 
                                                                <button onClick={() => this.deleteHandler(item.id)}
                                                                className="btn">✖</button>
                                                        </li>
                                                    )}
                                                </Draggable>
                                            )})}
                                            {provided.placeholder}
                                        </div>
                                    )}
                                    
                                </Droppable>
                            </ul>
                        </DragDropContext>
                    </div>
                    
                </form>

                
                
            </div>
        );
    }
}

export default Todo;