const ctxy = document.querySelector("#myWindChart").getContext("2d");
const labels = ["10%", "32%", "45%", "16%", "20%", "12%", "60%", "44%"];

const data = {
  labels,
  datasets: [
    {
      data: [211, 326, 165, 350, 420, 370, 500, 375, 415],
      label: "Weather",
      fill: true,
      backgroundColor: "rgb(92, 156, 228)",
    },
  ],
};

let delayed;
const config = {
  type: "line",
  data: data,
  options: {
    maintainAspectRatio: false,
    scales: {
      y: {
        display: false,
        ticks: {
          stepSize: 200,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true,
    animation: {
      onComplete: () => {
        delayed = true;
      },
      delay: (context) => {
        let delay = 0;
        if (context.type === "data" && context.mode === "default" && !delayed) {
          delay = context.dataIndex * 300 + context.datasetIndex * 100;
        }
        return delay;
      },
    },
  },
};

const myChart = new Chart(ctxy, config);
