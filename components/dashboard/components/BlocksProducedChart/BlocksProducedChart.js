import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

import styles from "./BlocksProducedChart.module.css";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

const BlocksProducedChart = () => {
  const options = {
    chart: {
      width: "100%",
      height: "100%",
      sparkline: {
        enabled: true,
      },
      toolbar: {
        show: false,
      },
      margin: {
        top: 20,
        right: 20,
        bottom: 30,
        left: 20,
      },
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        columnWidth: "50%",
        borderRadius: 4,
        borderRadiusApplication: "end",
        fill: {
          type: "gradient",
          gradient: {
            type: "vertical",
            shadeIntensity: 0.5,
            colorStops: [
              {
                offset: 0,
                color: "#0500FF",
                opacity: 1,
              },
              {
                offset: 100,
                color: "#0500FF",
                opacity: 0.3,
              },
            ],
          },
        },
      },
    },
    stroke: {
      // width: 2,
      // curve: "smooth",
      // colors: ["#0500FF"],
    },
    fill: {
      type: "gradient",
      gradient: {
        type: "vertical",
        shadeIntensity: 0.5,
        colorStops: [
          {
            offset: 0,
            color: "#0500FF",
            opacity: 1,
          },
          {
            offset: 100,
            color: "#0500FF",
            opacity: 0.3,
          },
        ],
      },
    },
    grid: {
      show: true,
      borderColor: "rgba(255,255,255,0.05)",
      position: "back",
    },
    markers: {
      show: false,
    },
    tooltip: {
      enabled: true,
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        const value = series[0][dataPointIndex];
        return `<div class="currentVotes-tooltip">
                    <span>Votes ${value}</span>
                </div>`;
      },
    },
    xaxis: {
      labels: {
        show: true,
      },
      crosshairs: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: true,
        align: "left",
        minWidth: 0,
        maxWidth: 160,
        style: {
          colors: [],
          fontSize: "12px",
          fontFamily: "Helvetica, Arial, sans-serif",
          fontWeight: 400,
          cssClass: "apexcharts-yaxis-label",
        },
        offsetX: 0,
        offsetY: 0,
        rotate: 0,
      },
    },
    legend: {
      show: false,
    },
    stroke: {
      width: 0,
    },
  };

  const [chartSeries, setChartSeries] = useState([
    {
      name: "TEAM A",
      type: "column",
      data: [
        19, 7, 18, 23, 9, 18, 33, 17, 40, 18, 12, 40, 18, 26, 40, 18, 26, 40,
        18, 26, 40, 18, 26,
      ].map((item) => (item - 5 < 0 ? 0 : item - 5)),
    },
    // {
    //   name: "TEAM B",
    //   type: "area",
    //   data: [
    //     19, 7, 18, 23, 9, 18, 33, 17, 40, 18, 12, 40, 18, 26, 40, 18, 26, 40, 18, 26, 40,
    //     18, 26,
    //   ],
    // },
  ]);

  return (
    <div className={styles.blocksProducedWrap}>
      <header className={styles.header}>
        <h2>
          Block produced<span>(1 per Hour)</span>
        </h2>
        <span className={styles.chartDataType}>Last 24H</span>
      </header>
      <div className={`${styles.blocksProducedChart} blocks-produced-chart`}>
        <ReactApexChart
          options={options}
          series={chartSeries}
          type='line'
          height={"100%"}
        />
        <div className={styles.chartGrad}></div>
      </div>
    </div>
  );
};

export default BlocksProducedChart;
