import dynamic from 'next/dynamic'
import React, { useState } from 'react'

import styles from './BlockchainProvingTimeChart.module.css'

const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
})

const BlockchainProvingTimeChart = () => {
  const options = {
    chart: {
      width: '100%',
      height: '100%',
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
        columnWidth: '50%',
        borderRadius: 4,
        borderRadiusApplication: 'end',
        fill: {
          type: 'gradient',
          gradient: {
            type: 'vertical',
            shadeIntensity: 0.5,
            colorStops: [
              {
                offset: 0,
                color: '#0500FF',
                opacity: 1,
              },
              {
                offset: 100,
                color: '#0500FF',
                opacity: 0.3,
              },
            ],
          },
        },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        type: 'vertical',
        shadeIntensity: 0.5,
        colorStops: [
          {
            offset: 0,
            color: '#0500FF',
            opacity: 1,
          },
          {
            offset: 100,
            color: '#0500FF',
            opacity: 0.3,
          },
        ],
      },
    },
    grid: {
      show: true,
      borderColor: 'rgba(255,255,255,0.05)',
      position: 'back',
    },
    markers: {
      show: false,
    },
    tooltip: {
      enabled: true,
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        const value = series[0][dataPointIndex]
        return `<div class="currentVotes-tooltip">
                    <span>Votes ${value}</span>
                </div>`
      },
    },
    xaxis: {
      labels: {
        show: true,
      },
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      crosshairs: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: true,
        align: 'left',
        minWidth: 0,
        maxWidth: 160,
        style: {
          colors: [],
          fontSize: '12px',
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: 400,
          cssClass: 'apexcharts-yaxis-label',
        },
        offsetY: 0,
        rotate: 0,
      },
    },
    legend: {
      show: false,
    },

    stroke: {
      show: true,
      width: 5,
      colors: ['transparent'],
    },
  }

  const [chartSeries, setChartSeries] = useState([
    {
      name: 'Net Profit',
      data: [44, 55, 57, 56, 61, 58],
    },
    {
      name: 'Revenue',
      data: [76, 85, 101, 98, 87, 105],
    },
  ])

  return (
    <div className={styles.blocksProducedWrap}>
      <header className={styles.header}>
        <h2>
          Blockchain proving time<span>(1 per Hour)</span>
        </h2>
        <span className={styles.chartDataType}>Last 24H</span>
      </header>
      <div className={`${styles.BlockchainProvingTimeChart} blocks-produced-chart`}>
        <ReactApexChart options={options} series={chartSeries} type='bar' height={'100%'} />
        <div className={styles.chartGrad}></div>
      </div>
    </div>
  )
}

export default BlockchainProvingTimeChart
