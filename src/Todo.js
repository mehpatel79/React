import React from 'react';
import './App.css';
import './strike.css';

let id =0;

class Todo extends React.Component {
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
     this.updval = this.updval.bind(this);
     this.delval = this.delval.bind(this);
  }

  

  handleChange(e) {
    this.setState({inputValue: e.target.value});
    }

  submitVal(){
    let arr = this.state.inputValue;
    if (arr === ""){
      alert("Please Enter Task")
    }
    else {
      this.state.arlist.push(arr);
      this.setState({inputValue: ""});
      }
    }

  resetVal(){
    this.setState({inputValue : "", arlist : [], arlist2:[]});
  }

  chxCheck(e){
    console.log(e);
    let arr1 = e.target.value;
    let check = e.target.checked;
    if (check===true){
      this.state.arlist2.push(arr1);
    
    }
    this.setState({inputValue: ""});

  }

  updval(e){
    console.log(e);
    let arr2 = e.target.value;
    console.log(arr2);
    console.log(e.target.value);
    //this.setState({inputValue: arr2});
  }

  delval(e){
    console.log(e);
    let arr3 = e.target.value
    console.log(arr3);
  }


  render() {
    return (
      <>
        <input type="text" onChange={this.handleChange} value={this.state.inputValue}/>
        <button onClick={this.submitVal}>Add Task</button>
        <button onClick={this.resetVal}>Reset</button>
        {(this.state.arlist.length !==0)?<h3>To Do List</h3>:<h3></h3>}
        <ul>
              {this.state.arlist.map((name, index) => {
          
                  return (<div key={name}>
                  <li> {name} <input type="checkbox" onClick={this.chxCheck} value={name}></input></li>
                  </div>);
                  })}

        </ul>
        <hr />
        {(this.state.arlist2.length !==0)?<h3>Completed Task</h3>:<h3></h3>}
        <ul>
              {this.state.arlist2.map((name) => {
                  return (<div key={name}>
                  <li> {name} <button onClick={this.updval}>Update</button><button onClick={this.delval}>Delete</button></li>
                  </div>);
                  })}

        </ul>
        
         </>);
  }
}


  

export default Todo;
