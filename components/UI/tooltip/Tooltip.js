import React, { useState } from 'react'

import styles from './Tooltip.module.css'

const Tooltip = props => {
  let color = styles[props.type]
  const [activeTooltip, setActiveTooltip] = useState(false)

  let openTooltip = state => {
    if (activeTooltip) {
      setActiveTooltip(false)
    } else {
      setActiveTooltip(true)
    }
  }

  let tooltip

  if (props.type === 'dashboard') {
    tooltip = (
      <div
        className={`${styles.dashboardTooltipContainer} ${styles.tooltipContainer} ${
          activeTooltip ? styles.activeTooltip : ''
        }`}
      >
        <div
          className={styles.tooltipBtn}
          onMouseEnter={() => {
            openTooltip(true)
          }}
        >
          <svg
            style={{ marginRight: '5px' }}
            width='15'
            height='15'
            viewBox='0 0 15 15'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M7.78125 14.0439C3.91985 14.0439 0.78125 10.9053 0.78125 7.04395C0.78125 3.18255 3.91985 0.0439453 7.78125 0.0439453C11.6426 0.0439453 14.7812 3.18255 14.7812 7.04395C14.7812 10.9053 11.6426 14.0439 7.78125 14.0439ZM7.78125 1.02069C4.46032 1.02069 1.75799 3.72302 1.75799 7.04395C1.75799 10.3649 4.46032 13.0672 7.78125 13.0672C11.1022 13.0672 13.8045 10.3649 13.8045 7.04395C13.8045 3.72302 11.1022 1.02069 7.78125 1.02069Z'
              fill='white'
            />
            <path
              d='M7.78134 8.18373C7.51436 8.18373 7.29297 7.96233 7.29297 7.69536V4.43954C7.29297 4.17257 7.51436 3.95117 7.78134 3.95117C8.04832 3.95117 8.26971 4.17257 8.26971 4.43954V7.69536C8.26971 7.96233 8.04832 8.18373 7.78134 8.18373Z'
              fill='white'
            />
            <path
              d='M7.78398 10.2991C7.69932 10.2991 7.61467 10.2795 7.53653 10.247C7.45839 10.2144 7.38677 10.1688 7.32165 10.1102C7.26305 10.0451 7.21746 9.98001 7.18491 9.89536C7.15146 9.8171 7.13376 9.73302 7.13281 9.64792C7.13281 9.56326 7.15235 9.47861 7.18491 9.40047C7.21746 9.32233 7.26305 9.25071 7.32165 9.18559C7.38677 9.12699 7.45839 9.0814 7.53653 9.04885C7.69507 8.98372 7.87288 8.98372 8.03142 9.04885C8.10956 9.0814 8.18118 9.12699 8.2463 9.18559C8.30491 9.25071 8.35049 9.32233 8.38305 9.40047C8.4156 9.47861 8.43514 9.56326 8.43514 9.64792C8.43514 9.73257 8.4156 9.81722 8.38305 9.89536C8.35049 9.98001 8.30491 10.0451 8.2463 10.1102C8.18118 10.1688 8.10956 10.2144 8.03142 10.247C7.95328 10.2795 7.86863 10.2991 7.78398 10.2991Z'
              fill='white'
            />
          </svg>
          <div className={`${styles.tooltipContainerTitle}`}>
            <span>{props.title}</span>
          </div>
        </div>
        <div
          className={`${styles.tooltip}`}
          onMouseLeave={() => {
            openTooltip(false)
          }}
        >
          <i></i>
          <span>{props.text}</span>
        </div>
      </div>
    )
  }
  if (props.type === 'settings') {
    tooltip = (
      <div
        className={`${styles.settingsTooltipContainer} ${styles.tooltipContainer} ${
          activeTooltip ? styles.activeTooltip : ''
        }`}
      >
        <div className={styles.tooltipBtn}>
          <div className={`${styles.tooltipContainerTitle}`}>
            <span>{props.title}</span>
          </div>
          <svg
            onMouseEnter={() => {
              openTooltip(true)
            }}
            style={{ marginLeft: '5px' }}
            width='17'
            height='17'
            viewBox='0 0 17 17'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M7.61266 10.29H8.69266V9.5C9.36266 9.14 9.82266 8.44 9.82266 7.64C9.82266 6.47 8.83266 5.51 7.61266 5.51V6.54C8.24266 6.54 8.71266 7.03 8.71266 7.64C8.71266 8.25 8.24266 8.74 7.61266 8.74V10.29ZM8.12266 12.57C8.56266 12.57 8.92266 12.23 8.92266 11.77C8.92266 11.33 8.56266 10.97 8.12266 10.97C7.66266 10.97 7.32266 11.33 7.32266 11.77C7.32266 12.23 7.66266 12.57 8.12266 12.57Z'
              fill='white'
            />
            <rect x='1' y='1' width='15' height='15' rx='7.5' stroke='white' />
          </svg>
        </div>
        <div
          className={`${styles.tooltip}`}
          onMouseLeave={() => {
            openTooltip(false)
          }}
        >
          <i></i>
          <span>{props.text}</span>
        </div>
      </div>
    )
  }

  return <div>{tooltip}</div>
}

export default Tooltip
