import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, Line, CartesianGrid, LineChart } from 'recharts';
import { useMobileWidth } from '../../../../hooks/useMobileWidth';

import styles from './InfoCharts.module.css';
// const data = Array(1000).fill({ name: 'B', value: 20 },);

const data = [
  { name: 'Category A', value: 10 },
  { name: 'Category B', value: 20 },
  { name: 'Category C', value: 30 },
];

const InfoCharts = () => {
  const { width } = useMobileWidth();
  return (
    <>
      <h2 className='ttl font-40'>CATENA Network Info & Analytics</h2>
      <div className={styles.Container}>
        <div className={styles.Chart} style={{padding: '10px'}}>
          <LineChart width={width / 2.3} height={511} data={data}>
            <XAxis dataKey="value" tick={{ fill: 'balck' }} />
            <Tooltip contentStyle={{ backgroundColor: 'white', color: 'black' }} />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </div>
        <div className={styles.Chart} style={{padding: '10px'}}>
          <BarChart width={width / 2.2} height={511} data={data}>
            <XAxis dataKey="value" tick={{ fill: 'balck' }} />
            <Tooltip contentStyle={{ backgroundColor: 'white', color: 'black' }} />
            <Bar type="monotone" dataKey="value" fill="gray" />
          </BarChart>
        </div>
      </div>
    </>
  );
};

export default InfoCharts;
