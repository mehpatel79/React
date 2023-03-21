import React from 'react';
//import ReactDOM from 'react-dom/client';
import './App.css';
//const root = ReactDOM.createRoot(document.getElementById('root'));

const list1 = ["Mehul","Parth","Jay","Ajay","Raj"]
const list2 = ["Ruchi", "Sneha", "Anjali", "Vibhuti", "Jyot"]
const list3 = ["Sharan", "Vasava", "Parul","ABC","XYZ"]
var num = 1;

class App extends React.Component {
  constructor(props) {
    super(props);    
     this.state = {                           
      candidateName : list1
     }
     //this.candidateName = this.candidateName.bind(this);
  }


changeList = () => {
  if(num==1) {
    return (num = 2, this.setState({candidateName : list2}));
  }
  else if (num==2) {
      return (num = 3, this.setState({candidateName : list3}));    
    }
  else if (num==3){
      return (num = 1, this.setState({candidateName : list1}));  
    }
  }



  render() {
    return (
      <div>
        <ol>
          {this.state.candidateName.map((candidate) => {
            return <li key={candidate}> {candidate}</li>
          })}
        </ol>
        <button onClick={this.changeList}>Change List</button>
      </div>
    );
  }
}



export default App;
