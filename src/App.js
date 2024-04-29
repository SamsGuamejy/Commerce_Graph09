import React from "react";

import Chart from "react-apexcharts";

const ApexChart = () => {
  const options = {
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
      toolbar: {
        show: true,
      },
      zoom: {
        enabled: true,
      },
    },
    colors: ["#008E5D", "#5B97D5", "#ED7D31", "#A074A6", "#FFC000"],
    xaxis: {
      categories: [
        "Avril 2024",
        "Mai 2024",
        "Juin 2024",
        "Juillet 2024",
        "Août 2024",
        "Septembre 2024",
        "Octobre 2024",
        "Novembre 2024",
        "Decembre 2024",
        "Javier 2025",
        "Fevrier 2025",
      ],
    },
  };
  const series = [
    {
      name: "50%",
      type: "column",
      data: [0, 40, 25, 50, 49, 21, 70, 51],
    },
    {
      name: "80%",
      type: "column",
      data: [0, 12, 54, 61, 32, 56, 81, 19],
    },
    {
      name: "90%",
      type: "column",
      data: [0, 20, 5, 75, 42, 79, 72, 35],
    },
    {
      name: "100%",
      type: "column",
      data: [24, 20, 5, 75, 42, 79, 72, 35],
    },
    {
      name: "Charge Max",
      type: "line",
      data: [24, 20, 5, 75, 42, 79, 72, 35],
    },
  ];

  return <Chart options={options} series={series} type="bar" />;
};
export default ApexChart;
