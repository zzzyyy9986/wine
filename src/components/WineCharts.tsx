import React from "react";
import { Chart } from "react-charts";

export const WineCharts = () => {
  const data = React.useMemo(
    () => [
      {
        label: "Series 1",
        data: [
          [0, 1],
          [1, 2],
          [2, 4],
          [3, 2],
          [4, 7],
        ],
      },
      {
        label: "Series 2",
        data: [
          [0, 3],
          [1, 1],
          [2, 5],
          [3, 6],
          [4, 4],
        ],
      },
    ],
    []
  );
    const getLabel = React.useCallback(series => series.specialLabel + 'fff', [])


    const getDatums = React.useCallback(series => series.data, [])

    // Use the original data object and the datum index to reference the datum's primary value.

    // Use data.lines[n].data[n].value as each datums secondary value
    const getSecondary = React.useCallback(datum => datum.value, [])

  const axes = React.useMemo(
    () => [
      { primary: true, type: "linear", position: "bottom",options: {
              scales: {
                  xAxes: [{
                      type: 'time',
                  }]
              },
              options: {
                  scales: {
                      y: {
                          ticks: {
                              // Include a dollar sign in the ticks
                              callback: function(value, index, ticks) {
                                  return '$' + value;
                              }
                          }
                      }
                  }
              }} },
      { type: "linear", position: "left", options: {
              scales: {
                  y: {
                      ticks: {
                          // Include a dollar sign in the ticks
                          callback: function(value, index, ticks) {
                              return '$' + value;
                          }
                      }
                  }
              }
          }},
    ],
    []
  );


  const lineChart = (
    // A react-chart hyper-responsively and continuously fills the available
    // space of its parent element automatically
    <div
      style={{
        width: "100%",
        height: "300px",
      }}
    >
      <Chart  ticks={[10,20,50,200,500,1000]}   data={data} axes={axes}     />
    </div>
  );
  return lineChart;
};
