import React from 'react';
//import ReactDOM from 'react-dom/client';
import './App.css';
//const root = ReactDOM.createRoot(document.getElementById('root'));

const list1 = ["Mehul","Parth","Jay","Ajay","Raj"]
const list2 = ["Ruchi", "Sneha", "Anjali", "Vibhuti", "Jyot"]
const list3 = ["Sharan", "Vasava", "Parul","ABC","XYZ"]

class App extends React.Component {
  constructor(props) {
    super(props);    
     this.state = {                           
      candidateName : list1
     }
     //this.candidateName = this.candidateName.bind(this);
  }

changeList2 = () => {
 this.setState({candidateName : list2})
}

changeList3 = () => {
  this.setState({candidateName : list3})
 }
  render() {
    return (
      <div>
        <ol>
          {this.state.candidateName.map((candidate) => {
            return <li key={candidate}> {candidate}</li>
          })}
        </ol>
        <button onClick={this.changeList2}>Change List</button>
        <button onClick={this.changeList3}>Other List</button>
      </div>
    );
  }
}



export default App;
