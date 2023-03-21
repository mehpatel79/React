import React from 'react';
//import ReactDOM from 'react-dom/client';
import './App.css';
//const root = ReactDOM.createRoot(document.getElementById('root'));

const list1 = ["Mehul","Parth","Jay","Ajay","Raj"]
const list2 = ["Ruchi", "Sneha", "Anjali", "Vibhuti"]
class App extends React.Component {
  constructor(props) {
    super(props);    
     this.state = {                           
      candidateName : list1
     }
     //this.candidateName = this.candidateName.bind(this);
  }

changeList = () => {
 this.setState({candidateName : list2})
 console.log(this.state.candidateName);
 
}

render(){
  return CandidateList(this.state.candidateName);
}
}

function CandidateList(candidateName) {
    const listItems = candidateName.map((candidate) =>
      <li key={candidate}>{candidate}</li>
    );
    return (<>
      <ul>{listItems}</ul>
      </>
    );
  }

export default App;
