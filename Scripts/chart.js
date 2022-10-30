const ctx = document.querySelector("#myChart").getContext("2d");
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

const myChart = new Chart(ctx, config);

//2nd chart
const ctxx = document.querySelector("#myWindChart").getContext("2d");
const dataa = {
  datasets: [
    {
      label: "My First Dataset",
      data: [100, 100, 100, 100, 100],
      backgroundColor: [
        "rgb(92, 156, 228)",
        "rgb(92, 156, 228)",
        "rgb(220, 220, 220)",
        "rgb(220, 220, 220)",
        "rgb(220, 220, 220)",
      ],
      cutout: "80%",
      borderRadius: 20,
      offset: 10,
    },
  ],
};

const configg = {
  type: "doughnut",
  data: dataa,
  options: {
    maintainAspectRatio: false,
    events: [],
    circumference: 180,
    rotation: 270,
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};
const myChart2 = new Chart(ctxx, configg);
