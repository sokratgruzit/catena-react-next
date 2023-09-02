import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

import styles from './InfoCharts.module.css';
const data = Array(1000).fill({ name: 'B', value: 20 },);

// const data = [
//   { name: 'Category A', value: 10 },
//   { name: 'Category B', value: 20 },
//   { name: 'Category C', value: 30 },
// ];

const InfoCharts = () => {
  return (
    <>
      <h2 className='ttl font-40'>CATENA Network Info & Analytics</h2>
      <div className={styles.Container}>
        <div className={styles.Chart}>
          <div style={{ width: '100%', height: '100%' }}>
            <BarChart width={400} height={300} data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </div>
        </div>
        <div className={styles.Chart}>
          <BarChart width={100} height={100} data={data}>
            <XAxis dataKey="name" tick={{ fill: 'balck' }} />
            {/* <YAxis /> */}
            <Tooltip contentStyle={{ backgroundColor: 'lightgray', color: 'black' }} />
            {/* <Legend iconType="circle" iconSize={10} /> */}
            <Bar dataKey="value" fill="gray" />
          </BarChart>
        </div>
      </div>
    </>
  );
};

export default InfoCharts;
