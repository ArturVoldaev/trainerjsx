import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      max: 60,
      min: 50,
      colorMin: 0,
      colorMax: 255,
      rgb: '',
      elemArry: 100,
      bigArray: [],
    }
  }

  getRandomIntInclusive = (min=this.state.min, max=this.state.max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getRandomColor = (min=this.state.colorMin, max=this.state.colorMax) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.floor(Math.random() * (max - min + 1)) + min);
    
  }

  createArray = () => {
    for( let i=1; i <= this.state.elemArry; i++) {
      this.state.bigArray.push(i)
    }
  }
  
  render() {
    return (
      <div className="App">
        <div className="task">
          <p>{`Task 1`}</p>
          <p>{`Произвольное число от 50 до 60:`}</p>
          <p>{this.getRandomIntInclusive()}</p>
        </div>
        <div className="task">
          <p>{`Task 2`}</p>
          <div className="size" style={{backgroundColor: "rgb(" + this.getRandomColor() + ","+ this.getRandomColor()+ "," + this.getRandomColor() + ")"}}></div>
        </div>
        <div className="task">
          {`Task 3`}
          <ul className="list">
            {this.props.arrTask3.map(elem => <li key={elem}>{elem}</li>)}
          </ul>
        </div>
        <div className="task">
          {`Task 4`}
          {this.props.arrTask4.map((elem,index) => {
            if(elem === 1) {
              return <div className="white" key={index}>{elem}</div>
            } else {
              return <div className="black" key={index}>{elem}</div>
            }
          })}
        </div>
        <div className="task">
          {`Task 5`}
          {this.createArray()}
          <ul className="list">
            {this.state.bigArray.map(elem => <li key={elem}>{elem}</li>)} 
          </ul>
        </div>
      </div>
    );
  }
}
export default App;
