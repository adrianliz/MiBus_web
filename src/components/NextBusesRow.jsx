import React from 'react';

const NextBusesRow = (props) => (
  <tr> 
    {props.colNames.map((colName, index) => 
      <td key={index}>{props.bus[colName]}</td>)
    }
  </tr>
);

export default NextBusesRow;