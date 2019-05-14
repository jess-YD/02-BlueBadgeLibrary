import React from 'react';
const Pie = (props) => {
  return(
    <tr>
      <td>{props.pie.nameOfPie}</td>
      <td>{props.pie.baseOfPie}</td>
      <td>{props.pie.crust}</td>
      <td>{props.pie.timeToBake}</td>
      <td>{props.pie.servings}</td>
      <td>{props.pie.rating}</td>
    </tr>
  )
}
export default Pie;
//discuss our use of props--the prop comes from the JSX attributes in the component call, hence, key & pie are props
//we know each pie prop is a pie object with nameOfPie, baseOfPie, etc. keys, so we can write props.pie.whatev in Pie.js
//and get a data value back
//draw their attention to the fact that we're really just outputting rows in a table with this Pie.js component
//this can be demonstrated with the React extension