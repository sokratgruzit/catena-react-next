import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, Line, CartesianGrid, LineChart } from 'recharts';
import { useMobileWidth } from '../../../../hooks/useMobileWidth';
import { Button } from '@catena-network/catena-ui-module';

import styles from './InfoCharts.module.css';
// const data = Array(1000).fill({ name: 'B', value: 20 },);

const data = [
  { name: 'Category A', value: 10 },
  { name: 'Category B', value: 20 },
  { name: 'Category C', value: 30 },
];

const btns = [
  { title: 'day' },
  { title: 'week' },
  { title: 'month' },
]

const InfoCharts = () => {
  const { width } = useMobileWidth();
  return (
    <>
      <h2 className='ttl font-40'>CATENA Network Info & Analytics</h2>
      <div className={styles.Container}>
        <div className={styles.Chart} >
          <div className={styles.ChartPanel}>
            <div className={styles.ChartData}>
              <span className={styles.Title}>Liquidity</span>
              <span className={styles.Price}>$4.18B</span>
              <div className={styles.Date}> may 20, 2022 </div>
            </div>
          </div>
          <LineChart width={width / 2.2} height={300} data={data}>
            <XAxis dataKey="value" tick={{ fill: 'balck' }} />
            <Tooltip contentStyle={{ backgroundColor: 'white', color: 'black' }} />
            <Line type="monotone" dataKey="value" stroke="#162029" />
          </LineChart>
        </div>
        <div className={styles.Chart}>
          <div className={styles.ChartPanel}>
            <div className={styles.ChartData}>
              <span className={styles.Title}>Liquidity</span>
              <span className={styles.Price}>$4.18B</span>
              <div className={styles.Date}> may 20, 2022 </div>
            </div>
            <div className={styles.ChartDateControle}>
              {btns.map(item => {
                return <Button
                  label={item.title}
                  size={"btn-lg"}
                  type={"btn-primary"}
                  element={"button"}
                  disabled={false}
                  customStyles={{ border: "1px solid black", margin: "0" }}
                  onClick={() => setToggle((prevState) => !prevState)}
                />
              })}
            </div>
          </div>
          <BarChart width={width / 2.2} height={300} data={data}>
            <XAxis dataKey="value" tick={{ fill: 'balck' }} />
            <Tooltip contentStyle={{ backgroundColor: 'white', color: 'black' }} />
            <Bar type="monotone" dataKey="value" fill="#162029" />
          </BarChart>
        </div>
      </div>
    </>
  );
};

export default InfoCharts;
