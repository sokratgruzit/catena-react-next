import dynamic from 'next/dynamic';
import { useState } from 'react';

import { useMobileWidth } from '../../../../hooks/useMobileWidth';
import { Circle3MoreDetails } from '../../../svg';

import styles from './CurrentVotes.module.css';

const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

let isMorethan0 = false;

const data = [0, 0, 0].map(i => {
  if (i > 0) isMorethan0 = true;
  return i + 10;
});

const CurrentVotes = () => {
  const { width } = useMobileWidth();
  const options = {
    chart: {
      height: '100%',
      width: '100%',
      sparkline: {
        enabled: true,
      },
      toolbar: {
        show: false, // show the chart toolbar
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 2,
      curve: 'smooth',
      colors: ['#0500FF'],
    },
    fill: {
      type: 'solid',
      colors: ['#050d59'],
      fillToZero: true,
    },
    grid: {
      show: false,
    },
    markers: {
      show: false,
    },
    tooltip: {
      enabled: true,

      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        const value = series[0][dataPointIndex];
        return `<div class="currentVotes-tooltip">
                    <span>Votes ${value - 10 > 0 ? value - 10 : 0}</span>
                </div>`;
      },
    },
    xaxis: {
      labels: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
      min: 0,
    },
    legend: {
      show: false,
    },
  };
  const [chartSeries, setChartSeries] = useState([
    {
      name: 'Price',
      data: data,
    },
  ]);
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.votingPowerTitle}>
          <h3>VOTING POWER</h3>
          <Circle3MoreDetails />
        </div>
        <h2 className={styles.votingPowerNumber}>-</h2>
      </header>
      <div className={styles.body}>
        <h3>CURRENT VOTES</h3>
        <h2>-</h2>
        {/* <div
          className={styles.chartWrap}
          style={{ height: isMorethan0 ? "40px" : "20px" }}
        >
          <ReactApexChart
            options={options}
            series={chartSeries}
            type="area"
            height={"100%"}
          />
        </div> */}
        {width < 1300 && (
          <div className={styles.chartWrap} style={{ height: isMorethan0 ? '40px' : '20px' }}>
            <ReactApexChart options={options} series={chartSeries} type='area' height={'100%'} />
          </div>
        )}
      </div>
      {width >= 1300 && (
        <div className={styles.chartWrap} style={{ height: isMorethan0 ? '40px' : '20px' }}>
          <ReactApexChart options={options} series={chartSeries} type='area' height={'100%'} />
        </div>
      )}
      <div className={styles.topCorner}></div>
    </div>
  );
};

export default CurrentVotes;
