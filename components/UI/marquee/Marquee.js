import React from 'react';

import { ProposalsText } from '../../svg';

import styles from './Marquee.module.css';

const Marquee = props => {
  let svgArray = '';

  let custumClass = '';
  let custumClass2 = '';

  if (props.direction === 'forward') {
    if (props.speed === 0) {
      custumClass = styles.default__forward__first;
      custumClass2 = styles.default__forward__second;
    } else {
      custumClass = styles.speed__forward__first;
      custumClass2 = styles.speed__forward__second;
    }
  } else {
    if (props.speed === 0) {
      custumClass = styles.default__forward__reverse__first;
      custumClass2 = styles.default__forward__reverse__second;
    } else {
      custumClass = styles.speed__forward__reverse__first;
      custumClass2 = styles.speed__forward__reverse__second;
    }
  }

  if (props.label === 'overview') {
    svgArray = [
      <svg key={0} width='100%' height='49' viewBox='188 0 150 49' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M186.129 48.3952V48.6452H186.379H193.939H194.189V48.3952V12.5857L219.073 48.5375L219.148 48.6452H219.279H227.749H227.999V48.3952V0.865234V0.615234H227.749H220.189H219.939V0.865234V36.0489L195.334 0.722351L195.259 0.615234H195.129H186.379H186.129V0.865234V48.3952ZM275.103 8.25523H275.353V8.00523V0.865234V0.615234H275.103H240.383H240.133V0.865234V48.3952V48.6452H240.383H248.013H248.263V48.3952V26.8752H269.573H269.823V26.6252V19.4852V19.2352H269.573H248.263V8.25523H275.103ZM296.974 48.3952V48.6452H297.224H304.784H305.034V48.3952V8.25523H321.444H321.694V8.00523V0.865234V0.615234H321.444H280.564H280.314V0.865234V8.00523V8.25523H280.564H296.974V48.3952Z'
          stroke='white'
          strokeWidth='0.5'
        />
      </svg>,
      <svg key={1} width='100%' height='49' viewBox='0 0 150 49' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          opacity='0.7'
          d='M1.06445 48.3952V48.6452H1.31445H8.87445H9.12445V48.3952V12.5857L34.0089 48.5375L34.0835 48.6452H34.2145H42.6845H42.9345V48.3952V0.865234V0.615234H42.6845H35.1245H34.8745V0.865234V36.0489L10.2696 0.722351L10.195 0.615234H10.0645H1.31445H1.06445V0.865234V48.3952ZM90.0384 8.25523H90.2884V8.00523V0.865234V0.615234H90.0384H55.3184H55.0684V0.865234V48.3952V48.6452H55.3184H62.9484H63.1984V48.3952V26.8752H84.5084H84.7584V26.6252V19.4852V19.2352H84.5084H63.1984V8.25523H90.0384ZM111.91 48.3952V48.6452H112.16H119.72H119.97V48.3952V8.25523H136.38H136.63V8.00523V0.865234V0.615234H136.38H95.5H95.25V0.865234V8.00523V8.25523H95.5H111.91V48.3952Z'
          stroke='white'
          strokeWidth='0.5'
        />
      </svg>,
      <svg key={2} width='100%' height='49' viewBox='188 0 150 49' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M186.129 48.3952V48.6452H186.379H193.939H194.189V48.3952V12.5857L219.073 48.5375L219.148 48.6452H219.279H227.749H227.999V48.3952V0.865234V0.615234H227.749H220.189H219.939V0.865234V36.0489L195.334 0.722351L195.259 0.615234H195.129H186.379H186.129V0.865234V48.3952ZM275.103 8.25523H275.353V8.00523V0.865234V0.615234H275.103H240.383H240.133V0.865234V48.3952V48.6452H240.383H248.013H248.263V48.3952V26.8752H269.573H269.823V26.6252V19.4852V19.2352H269.573H248.263V8.25523H275.103ZM296.974 48.3952V48.6452H297.224H304.784H305.034V48.3952V8.25523H321.444H321.694V8.00523V0.865234V0.615234H321.444H280.564H280.314V0.865234V8.00523V8.25523H280.564H296.974V48.3952Z'
          stroke='white'
          strokeWidth='0.5'
        />
      </svg>,
      <svg key={3} width='100%' height='49' viewBox='0 0 150 49' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          opacity='0.7'
          d='M1.06445 48.3952V48.6452H1.31445H8.87445H9.12445V48.3952V12.5857L34.0089 48.5375L34.0835 48.6452H34.2145H42.6845H42.9345V48.3952V0.865234V0.615234H42.6845H35.1245H34.8745V0.865234V36.0489L10.2696 0.722351L10.195 0.615234H10.0645H1.31445H1.06445V0.865234V48.3952ZM90.0384 8.25523H90.2884V8.00523V0.865234V0.615234H90.0384H55.3184H55.0684V0.865234V48.3952V48.6452H55.3184H62.9484H63.1984V48.3952V26.8752H84.5084H84.7584V26.6252V19.4852V19.2352H84.5084H63.1984V8.25523H90.0384ZM111.91 48.3952V48.6452H112.16H119.72H119.97V48.3952V8.25523H136.38H136.63V8.00523V0.865234V0.615234H136.38H95.5H95.25V0.865234V8.00523V8.25523H95.5H111.91V48.3952Z'
          stroke='white'
          strokeWidth='0.5'
        />
      </svg>,
      <svg key={4} width='100%' height='49' viewBox='188 0 150 49' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M186.129 48.3952V48.6452H186.379H193.939H194.189V48.3952V12.5857L219.073 48.5375L219.148 48.6452H219.279H227.749H227.999V48.3952V0.865234V0.615234H227.749H220.189H219.939V0.865234V36.0489L195.334 0.722351L195.259 0.615234H195.129H186.379H186.129V0.865234V48.3952ZM275.103 8.25523H275.353V8.00523V0.865234V0.615234H275.103H240.383H240.133V0.865234V48.3952V48.6452H240.383H248.013H248.263V48.3952V26.8752H269.573H269.823V26.6252V19.4852V19.2352H269.573H248.263V8.25523H275.103ZM296.974 48.3952V48.6452H297.224H304.784H305.034V48.3952V8.25523H321.444H321.694V8.00523V0.865234V0.615234H321.444H280.564H280.314V0.865234V8.00523V8.25523H280.564H296.974V48.3952Z'
          stroke='white'
          strokeWidth='0.5'
        />
      </svg>,
      <svg key={5} width='100%' height='49' viewBox='0 0 150 49' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          opacity='0.7'
          d='M1.06445 48.3952V48.6452H1.31445H8.87445H9.12445V48.3952V12.5857L34.0089 48.5375L34.0835 48.6452H34.2145H42.6845H42.9345V48.3952V0.865234V0.615234H42.6845H35.1245H34.8745V0.865234V36.0489L10.2696 0.722351L10.195 0.615234H10.0645H1.31445H1.06445V0.865234V48.3952ZM90.0384 8.25523H90.2884V8.00523V0.865234V0.615234H90.0384H55.3184H55.0684V0.865234V48.3952V48.6452H55.3184H62.9484H63.1984V48.3952V26.8752H84.5084H84.7584V26.6252V19.4852V19.2352H84.5084H63.1984V8.25523H90.0384ZM111.91 48.3952V48.6452H112.16H119.72H119.97V48.3952V8.25523H136.38H136.63V8.00523V0.865234V0.615234H136.38H95.5H95.25V0.865234V8.00523V8.25523H95.5H111.91V48.3952Z'
          stroke='white'
          strokeWidth='0.5'
        />
      </svg>,
      <svg key={6} width='100%' height='49' viewBox='188 0 150 49' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M186.129 48.3952V48.6452H186.379H193.939H194.189V48.3952V12.5857L219.073 48.5375L219.148 48.6452H219.279H227.749H227.999V48.3952V0.865234V0.615234H227.749H220.189H219.939V0.865234V36.0489L195.334 0.722351L195.259 0.615234H195.129H186.379H186.129V0.865234V48.3952ZM275.103 8.25523H275.353V8.00523V0.865234V0.615234H275.103H240.383H240.133V0.865234V48.3952V48.6452H240.383H248.013H248.263V48.3952V26.8752H269.573H269.823V26.6252V19.4852V19.2352H269.573H248.263V8.25523H275.103ZM296.974 48.3952V48.6452H297.224H304.784H305.034V48.3952V8.25523H321.444H321.694V8.00523V0.865234V0.615234H321.444H280.564H280.314V0.865234V8.00523V8.25523H280.564H296.974V48.3952Z'
          stroke='white'
          strokeWidth='0.5'
        />
      </svg>,
      <svg key={7} width='100%' height='49' viewBox='0 0 150 49' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          opacity='0.7'
          d='M1.06445 48.3952V48.6452H1.31445H8.87445H9.12445V48.3952V12.5857L34.0089 48.5375L34.0835 48.6452H34.2145H42.6845H42.9345V48.3952V0.865234V0.615234H42.6845H35.1245H34.8745V0.865234V36.0489L10.2696 0.722351L10.195 0.615234H10.0645H1.31445H1.06445V0.865234V48.3952ZM90.0384 8.25523H90.2884V8.00523V0.865234V0.615234H90.0384H55.3184H55.0684V0.865234V48.3952V48.6452H55.3184H62.9484H63.1984V48.3952V26.8752H84.5084H84.7584V26.6252V19.4852V19.2352H84.5084H63.1984V8.25523H90.0384ZM111.91 48.3952V48.6452H112.16H119.72H119.97V48.3952V8.25523H136.38H136.63V8.00523V0.865234V0.615234H136.38H95.5H95.25V0.865234V8.00523V8.25523H95.5H111.91V48.3952Z'
          stroke='white'
          strokeWidth='0.5'
        />
      </svg>,
    ];
  }
  if (props.label === 'propsal') {
    svgArray = [<p key={'1'}>hi</p>];
  }
  if (props.label === 'propsal') {
    svgArray = [<p key={'1'}>hi</p>];
  }
  if (props.label === 'voting') {
    svgArray = [
      <ProposalsText key={'1'} />,
      <ProposalsText key={'2'} />,
      <ProposalsText key={'3'} />,
      <ProposalsText key={'4'} />,
      <ProposalsText key={'5'} />,
    ];
  }

  return (
    <div className={styles.Running__text}>
      <div className={styles.Running__text__row}>
        <div className={`${styles.Running__text__first} ${custumClass}`}>
          {svgArray.map(item => {
            return item;
          })}
        </div>
        <div className={`${styles.Running__text__second} ${custumClass2}`}>
          {svgArray.map(item => {
            return item;
          })}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
