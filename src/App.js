import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
const root = ReactDOM.createRoot(document.getElementById('root'));

const list1 = ["Mehul","Parth","Jay","Ajay","Raj"]
const list2 = ["Ruchi", "Sneha", "Anjali", "Vibhuti", "Jyot"]
const list3 = ["Sharan", "Vasava", "Parul","ABC","XYZ"]

class App extends React.Component {
  constructor(props) {
    super(props);    
     this.state = {                           
      candidateName : list1,
      id:1
     }
     this.changeList = this.changeList.bind(this);
  }


changeList = () => {
  let num = this.state.id;
  if(num==1) {
    return (this.setState({candidateName : list2, id:2}));
  }
  else if (num==2) {
      return (this.setState({candidateName : list3, id:3}));    
    }
  else if (num==3){
      return (this.setState({candidateName : list1, id:1}));  
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
