const currentConsumption = document
  .getElementById("currentConsumption")
  .getContext("2d");

let currentConsumptionChart = new Chart(currentConsumption, {
  type: "line",
  data: {
    labels: ["9am", "1pm", "5pm", "9pm", "1am", "5am"],
    datasets: [
      {
        label: "Current Consumption",
        data: [28, 28, 60, 49, 70, 27],
        tension: 0.4,
        borderColor: "blue",
        backgroundColor: "blue",
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
      title: {
        display: true,
        text: "Current Consumption",
        font: {
            size: 22
        }
      },
    },
    scales: {
       x: {
        grid: {
            display: false,
          },
        },
        y: {
            min: 25,
            max: 75,
            ticks: {
              callback: function(value, index, values) {
                  return value +' A';
              },},
          grid: {
            display: false,
          },
        },
      },
    },
});

const temperatureTrend = document
  .getElementById("temperatureTrend")
  .getContext("2d");
let temperatureTrendChart = new Chart(temperatureTrend, {
  type: "line",
  data: {
    labels: ["9am", "1pm", "5pm", "9pm", "1am", "5am"],
    datasets: [
      {
        label: "Temperature Trend",
        data: [48, 48, 85, 59, 95, 40],
        tension: 0.4,
        borderColor: "blue",
        backgroundColor: "blue",
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
      title: {
        display: true,
        text: "Temperature Trend",
        font: {
            size: 22
        }
      },
    },
    scales: {
        x: {
         grid: {
             display: false,
           },
         },
         y: {
             min: 40,
             max: 100,
             ticks: {
              callback: function(value, index, values) {
                  return value +' C';
              },},
           grid: {
             display: false,
           },
         },
       },
     },
});

const avgTemperature = document
  .getElementById("avgTemperature")
  .getContext("2d");

let avgTemperatureChart = new Chart(avgTemperature, {
  type: "bar",
  data: {
    labels: ["9am", "1pm", "5pm", "9pm", "1am", "5am"],
    datasets: [
      {
        label: "Avg. current",
        data: [28, 28, 60, 49, 70, 27],
        tension: 0.4,
        borderColor: "blue",
        backgroundColor: "blue",
      },
      {
        label: "Temperature",
        data: [48, 48, 85, 59, 95, 40],
        borderColor: "red",
        backgroundColor: "red",
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      title: {
        display: true,
        text: "Avg. Temperature vs Current",
        font: {
            size: 22
        }
      },
    },
    scales: {
      y: {
        min: 10,
        max: 100,
      },
    },
  },
});


const temperature = document
  .getElementById("temperature")
  .getContext("2d");

  const temperatureChart= new Chart(temperature, {
    type: "doughnut",
    data: {
      labels: [ 't1',
      't2'],
      datasets: [
        {
          label: "temperature",
          data: [70,30],
         
           backgroundColor:["red","grey"],
        },
      ],
    },
    options: {
      circumference: 300,
      rotation: 210,
      responsive: true,
      plugins: {
        legend: {
          display: false,
          position: "top",
        },
        title: {
          display: false,
          text: "temperature",
          font: {
              size: 12
          }
        },
      }
       },
  })

  


  const current = document
  .getElementById("current")
  .getContext("2d");

  let currentChart = new Chart(current, {
    type: "doughnut",
    data: {
      labels: [ 'c1',
      'c2'],
      datasets: [
        {
          label: "Current",
          data: [70,30],
          backgroundColor:["aqua","grey"],
        
        },
      ],
    },
    options: {
      circumference: 300,
      rotation: 210,
      responsive: true,
      plugins: {
        legend: {
          display: false,
          position: "top",
        },
        title: {
          display: false,
          text: "Current",
          font: {
              size: 12
          }
        },
      }
       },
  })

  