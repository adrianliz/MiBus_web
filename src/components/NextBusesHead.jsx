import React from 'react';
import { NEXT_BUSES_COLS } from './../common/constants';

const NextBusesHead = () => (
  <thead>
    <tr> 
      {NEXT_BUSES_COLS.map((colName, index) => 
        <th key={index}>{colName}</th>)}
    </tr>
  </thead>
);

export default NextBusesHead;