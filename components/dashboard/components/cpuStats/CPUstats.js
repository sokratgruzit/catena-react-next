import dynamic from 'next/dynamic';
import React from 'react';

import styles from './CPUstats.module.css';

const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

const CPUstats = ({ label }) => {
  const options = {
    chart: {
      type: 'radialBar',
      height: '100%',
      width: '100%',
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 15,
          size: '70%',
        },
        track: {
          background: 'rgba(255, 255, 255, 0.02)',
          margin: -5,
          // width: 28,
        },
        dataLabels: {
          show: true,
          name: {
            offsetY: 20,
            show: true,
            color: 'rgba(255, 255, 255, 0.6)',
            fontSize: '24px',
          },
          value: {
            color: '#0500FF',
            fontSize: '24px',
            show: true,
            offsetY: -20,
          },
        },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        colorStops: [
          {
            offset: 0,
            color: '#0500FF',
            opacity: 1,
          },
          {
            offset: 100,
            color: '#FF7152',
            opacity: 1,
          },
        ],
      },
    },
    stroke: {
      width: 1,
      dashArray: 4,
    },
    labels: [label],
  };

  return (
    <div className={`${styles.CPUStats} cpu-chart`}>
      <ReactApexChart options={options} series={[60]} type='radialBar' height={'100%'} />
      <div className={styles.borderRound}></div>
    </div>
  );
};

export default CPUstats;
