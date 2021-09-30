import React, { useEffect, useRef, useState } from "react";
import Chartjs from "chart.js";

const randomInt = () => Math.floor(Math.random() * (10 - 1 + 1)) + 1;



const Chart = (props) => {
  console.log(props)
  const chartConfig = {
    type: "pie",
    data: {
      labels: ["Admitted", "Free"],
      datasets: [
        {
          label: "Hospital Beds",
          data: [Number(10-props.val), props.val],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)"
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)"
          ],
          borderWidth: 1
        }
      ]
    },
    // options: {
    //   scales: {
    //     yAxes: [
    //       {
    //         ticks: {
    //           beginAtZero: true
    //         }
    //       }
    //     ]
    //   }
    // }
  };

  const chartContainer = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);
  

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chartjs(chartContainer.current, chartConfig);
      setChartInstance(newChartInstance);
    }
  }, [chartContainer]);

  const updateDataset = (datasetIndex, newData) => {
    chartInstance.data.datasets[datasetIndex].data = newData;
    chartInstance.update();
  };

//   const onButtonClick = () => {
    const data = [
      randomInt(),
      randomInt(),
     
    ];
// updateDataset(0, data);
//   };
// const data = [props.vals]

  return (
    <div>
      <canvas ref={chartContainer} />
      {}
    </div>
  );
};

export default Chart;
