import React from 'react';
import './App.css';
import strike from './strike.css';


let togglebtn = true;
let updid = 0;

class Todo2 extends React.Component {
  constructor(props) {
    super(props);    
     this.state = { 
      inputValue: "",
      arlist: [],
      arlist2: [],
      
     }

     this.handleChange = this.handleChange.bind(this);
     this.submitVal = this.submitVal.bind(this);
     this.resetVal = this.resetVal.bind(this);
     this.chxCheck = this.chxCheck.bind(this);
     this.chxCheck2 = this.chxCheck2.bind(this);
     this.updval = this.updval.bind(this);
     this.updval2 = this.updval2.bind(this);
     this.delval = this.delval.bind(this);
     this.cancel = this.cancel.bind(this);
     this.done = this.done.bind(this);
  }

  

  handleChange(e) {
    this.setState({inputValue: e.target.value});
    }

  submitVal(){
    let num = this.state.arlist.length + 1;
    let task = this.state.inputValue;
    if (task === ""){
      alert("Please Enter Task")
    }
    else {
        let newEntry = {id:num, title: task, status:false }
        // this.state.arlist = [...this.state.arlist, newEntry]
        this.setState({inputValue: "", arlist : [...this.state.arlist, newEntry]});
      }
    }

  resetVal(){
    this.setState({inputValue : "", arlist : [], arlist2: []});
  }

  chxCheck(id){
    let checkEntry = this.state.arlist.filter(task => task.id !== id);
    let checkEntry2 = this.state.arlist.filter(task => task.id === id);
    //this.state.arlist = [...checkEntry];
    //this.state.arlist2 = [...this.state.arlist2, ...checkEntry2];
    this.setState({inputValue: "", arlist: [...checkEntry], arlist2 : [...this.state.arlist2, ...checkEntry2]});   
  }

  chxCheck2(id){
    let checkEntry21 = this.state.arlist2.filter(task => task.id === id);
    //this.state.arlist = [...this.state.arlist, ...checkEntry21];
    let checkEntry22 = this.state.arlist2.filter(task => task.id !== id);
    //this.state.arlist2 = [...checkEntry22];
  
    this.setState({inputValue: "", arlist:[...this.state.arlist, ...checkEntry21], arlist2:[...checkEntry22]});
      
  }


cancel(){
    togglebtn = true;
    this.setState({inputValue: ""});
}

  updval2(id,title){
    togglebtn = false;
    updid = id;
    this.setState({inputValue: title});
  }


  updval(id){
    let updtask = this.state.inputValue;
    let updEntry = this.state.arlist2.map(task => {
      if(task.id === updid){
        return ({id:task.id, title:updtask})
      }
      return task
    });
    togglebtn = true;
    this.setState({inputValue: "", arlist2 : updEntry});
      
  
  }
  



  delval(id){
    let delEntry = this.state.arlist2.filter(task => task.id !== id);
    this.state.arlist2 = [...delEntry]
    this.setState({inputValue: ""});
    
  }

  done(id){
    let donetask = this.state.arlist2.map(task => {
      if(task.id === id){
        return ({id:task.id, title:task.title, status : !task.status})
      }
      return task
    })
    this.setState({inputValue: "", arlist2: donetask});
  }

  render() {
    return (
            <>
              <input type="text" onChange={this.handleChange} value={this.state.inputValue}/>
              {(togglebtn)?
                  <>
                    <button onClick={this.submitVal}>Add Task</button>
                    <button onClick={this.resetVal}>Reset</button>
                  </>
                :
                  <>
                    <button onClick={this.updval}>Update Task</button>
                    <button onClick={this.cancel}>Cancel</button>
                  </>
              }
        {(this.state.arlist.length !==0)?<h3>To Do List</h3>:<h3></h3>}
        <ul>
              {this.state.arlist.map((task,index) => {
                  return (<div key={task.id}>
                  <li> {task.title} <input type="checkbox" onClick={(e)=>{this.chxCheck(task.id)}} value={task.title}></input></li>
                  </div>);
                  })}

        </ul>
        <hr />
        {(this.state.arlist2.length !==0)?<h3>Completed Task</h3>:<h3></h3>}
        <ul>
              {this.state.arlist2.map((task) => {
                  return (<div key={task.id}>
                  <li className={(task.status)?'strike':''}> {task.title}
                  <input type="checkbox" onClick={(e)=>{this.chxCheck2(task.id)}} value={task.title} disabled={(task.status)}></input> 
                  <button onClick={(e)=>{this.updval2(task.id, task.title)}}>Update</button>
                  <button onClick={(e) => {this.delval(task.id)}}>Delete</button>
                  <button onClick={(e) => {this.done(task.id)}}>Done</button>
                  </li>
                  </div>);
                  })}

        </ul>
         </>);
  }
}


  

export default Todo2;
