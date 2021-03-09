// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const tesla = cars[0];
tesla.TopSpeed = tesla.speedStats.topSpeed;
tesla.TopColour = tesla.coloursByPopularity[0];

const honda = cars[1];
honda.TopSpeed = honda.speedStats.topSpeed;
honda.TopColour = honda.coloursByPopularity[0];

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Colour</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{tesla.TopSpeed}</td>
      <td>{tesla.TopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{honda.TopSpeed}</td>
      <td>{honda.TopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
