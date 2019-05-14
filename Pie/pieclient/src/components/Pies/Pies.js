import React, {Component} from 'react';
import Pie from './Pie/Pie';
import './Pies.css';
class Pies extends Component {
  state = {
    pies: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/pies', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(json => this.setState({pies: json}))
  }
  // testData = [
    // {
  //     nameOfPie: 'Name of Pie',
  //     baseOfPie: 'Base of Pie',
  //     crust: 'Crust',
  //     timeToBake: 'Time to Bake',
  //     servings: 'Servings',
  //     rating: 'Rating'
  //   },
  //   {
  //     nameOfPie: 'Cherry',
  //     baseOfPie: 'Fruit Filling',
  //     crust: 'Pastry',
  //     timeToBake: '30 mins',
  //     servings: 97,
  //     rating: '5 stars'
  //   }, 
  //   {
  //     nameOfPie: 'Pecan',
  //     baseOfPie: 'Sugary Goodness',
  //     crust: 'Graham Cracker',
  //     timeToBake: '40 mins',
  //     servings: 2,
  //     rating: '3 stars'
  //   }
  // ]
render(){
  let pieRows = this.state.pies.map(pie => {
    return (
      <Pie pie={pie} />
    )
  })
  return(
    <table>
      <tbody>
        {pieRows}
      </tbody>
    </table>
  )
}
}
export default Pies;
//reiterate what React, {Component} imports are doing at top of file
//observe that we're pulling in another component, Pie, and a CSS file
//draw their attention to the fact that we're using a class component rather than a function component ->
//we will eventually have this component changing information internally (fetch through componentDidMount)
//explain use of dummy data
//explain pieRows use of .map() inside render method--take every el from the array, output value to new array
//explain how React needs a key to correctly update components
//discuss how {} allow React to read any JavaScript expression as long as it is output as JSX