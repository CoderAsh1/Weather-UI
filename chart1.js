const ctx = document.querySelector("#myChart").getContext("2d");
const labels = ["10%", "32", "45", "16", "20", "12"];

const data = {
  labels,
  datasets: [
    {
      data: [211, 326, 165, 350, 420, 370, 500, 375, 415],
      label: "erater",
      fill: true,
      backgroundColor: "skyBlue",
    },
  ],
};

let delayed;
const config = {
  type: "line",
  data: data,
  options: {
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
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  },
};

const myChart = new Chart(ctx, config);
