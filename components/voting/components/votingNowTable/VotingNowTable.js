import React, { useState } from 'react';
import styles from './VotingNowTable.module.css';
import { Button } from '@catena-network/catena-ui-module';

function VotingNowTable() {
  const initialDisplayCount = 7;
  const additionalItemsCount = 2;

  const [displayCount, setDisplayCount] = useState(initialDisplayCount);
  const [isLoadMore, setIsLoadMore] = useState(true);
  const votingNowTableData = [
    {
      teaser: 'Stop Minting more $CORE',
      date: 'Ends Mar 6th, 2022 11:15',
      vote: 'Vote Now',
      svg: (
        <svg width='10' height='11' viewBox='0 0 10 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M3.51297 0.509766C2.20551 0.509766 1.14258 1.5727 1.14258 2.88015C1.14258 4.16266 2.14563 5.20064 3.45308 5.24555C3.49301 5.24056 3.53293 5.24056 3.56287 5.24555H3.5978C4.21129 5.22508 4.79277 4.96683 5.21929 4.52541C5.64582 4.08398 5.88396 3.49398 5.88336 2.88015C5.88336 1.5727 4.82042 0.509766 3.51297 0.509766Z'
            fill='#E91E63'
          />
          <path
            d='M6.04823 6.5731C4.65594 5.6449 2.38536 5.6449 0.983088 6.5731C0.34932 6.99727 0 7.57116 0 8.18496C0 8.79877 0.34932 9.36766 0.978097 9.78685C1.67674 10.2559 2.59495 10.4905 3.51317 10.4905C4.43138 10.4905 5.34959 10.2559 6.04823 9.78685C6.67701 9.36267 7.02633 8.79378 7.02633 8.17498C7.02134 7.56118 6.67701 6.99228 6.04823 6.5731Z'
            fill='#E91E63'
          />
          <path
            d='M8.99777 3.17295C9.07761 4.14107 8.38895 4.98942 7.43581 5.10419H7.41086C7.38091 5.10419 7.35097 5.10419 7.32602 5.11417C6.84196 5.13913 6.39783 4.98443 6.06348 4.69998C6.57748 4.24087 6.8719 3.55221 6.81202 2.80367C6.77778 2.41443 6.64559 2.04018 6.42777 1.71579C6.68925 1.58857 6.97776 1.52689 7.26841 1.53605C7.55905 1.54521 7.8431 1.62494 8.09606 1.76836C8.34901 1.91178 8.56328 2.1146 8.72037 2.3593C8.87747 2.604 8.97267 2.88325 8.99777 3.17295Z'
            fill='#E91E63'
          />
          <path
            d='M9.99516 7.79123C9.95524 8.27529 9.64584 8.69447 9.12685 8.97892C8.62782 9.25338 7.99905 9.38313 7.37526 9.36816C7.73456 9.04379 7.94415 8.63958 7.98408 8.21041C8.03398 7.59162 7.73955 6.99777 7.1507 6.52369C6.81635 6.25921 6.4271 6.04962 6.00293 5.89492C7.10578 5.57554 8.49309 5.79012 9.34643 6.47878C9.80553 6.84806 10.0401 7.31216 9.99516 7.79123Z'
            fill='#E91E63'
          />
        </svg>
      ),
      variation: 'Community',
    },
    {
      teaser: 'Stop Minting more $CORE',
      date: 'Ends Mar 6th, 2022 11:15',
      vote: 'Vote Now',
      svg: (
        <svg width='10' height='11' viewBox='0 0 10 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M3.51297 0.509766C2.20551 0.509766 1.14258 1.5727 1.14258 2.88015C1.14258 4.16266 2.14563 5.20064 3.45308 5.24555C3.49301 5.24056 3.53293 5.24056 3.56287 5.24555H3.5978C4.21129 5.22508 4.79277 4.96683 5.21929 4.52541C5.64582 4.08398 5.88396 3.49398 5.88336 2.88015C5.88336 1.5727 4.82042 0.509766 3.51297 0.509766Z'
            fill='#E91E63'
          />
          <path
            d='M6.04823 6.5731C4.65594 5.6449 2.38536 5.6449 0.983088 6.5731C0.34932 6.99727 0 7.57116 0 8.18496C0 8.79877 0.34932 9.36766 0.978097 9.78685C1.67674 10.2559 2.59495 10.4905 3.51317 10.4905C4.43138 10.4905 5.34959 10.2559 6.04823 9.78685C6.67701 9.36267 7.02633 8.79378 7.02633 8.17498C7.02134 7.56118 6.67701 6.99228 6.04823 6.5731Z'
            fill='#E91E63'
          />
          <path
            d='M8.99777 3.17295C9.07761 4.14107 8.38895 4.98942 7.43581 5.10419H7.41086C7.38091 5.10419 7.35097 5.10419 7.32602 5.11417C6.84196 5.13913 6.39783 4.98443 6.06348 4.69998C6.57748 4.24087 6.8719 3.55221 6.81202 2.80367C6.77778 2.41443 6.64559 2.04018 6.42777 1.71579C6.68925 1.58857 6.97776 1.52689 7.26841 1.53605C7.55905 1.54521 7.8431 1.62494 8.09606 1.76836C8.34901 1.91178 8.56328 2.1146 8.72037 2.3593C8.87747 2.604 8.97267 2.88325 8.99777 3.17295Z'
            fill='#E91E63'
          />
          <path
            d='M9.99516 7.79123C9.95524 8.27529 9.64584 8.69447 9.12685 8.97892C8.62782 9.25338 7.99905 9.38313 7.37526 9.36816C7.73456 9.04379 7.94415 8.63958 7.98408 8.21041C8.03398 7.59162 7.73955 6.99777 7.1507 6.52369C6.81635 6.25921 6.4271 6.04962 6.00293 5.89492C7.10578 5.57554 8.49309 5.79012 9.34643 6.47878C9.80553 6.84806 10.0401 7.31216 9.99516 7.79123Z'
            fill='#E91E63'
          />
        </svg>
      ),
      variation: 'Community',
    },
    {
      teaser: 'Stop Minting more $CORE',
      date: 'Ends Mar 6th, 2022 11:15',
      vote: 'Vote Now',
      svg: (
        <svg width='10' height='11' viewBox='0 0 10 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M3.51297 0.509766C2.20551 0.509766 1.14258 1.5727 1.14258 2.88015C1.14258 4.16266 2.14563 5.20064 3.45308 5.24555C3.49301 5.24056 3.53293 5.24056 3.56287 5.24555H3.5978C4.21129 5.22508 4.79277 4.96683 5.21929 4.52541C5.64582 4.08398 5.88396 3.49398 5.88336 2.88015C5.88336 1.5727 4.82042 0.509766 3.51297 0.509766Z'
            fill='#E91E63'
          />
          <path
            d='M6.04823 6.5731C4.65594 5.6449 2.38536 5.6449 0.983088 6.5731C0.34932 6.99727 0 7.57116 0 8.18496C0 8.79877 0.34932 9.36766 0.978097 9.78685C1.67674 10.2559 2.59495 10.4905 3.51317 10.4905C4.43138 10.4905 5.34959 10.2559 6.04823 9.78685C6.67701 9.36267 7.02633 8.79378 7.02633 8.17498C7.02134 7.56118 6.67701 6.99228 6.04823 6.5731Z'
            fill='#E91E63'
          />
          <path
            d='M8.99777 3.17295C9.07761 4.14107 8.38895 4.98942 7.43581 5.10419H7.41086C7.38091 5.10419 7.35097 5.10419 7.32602 5.11417C6.84196 5.13913 6.39783 4.98443 6.06348 4.69998C6.57748 4.24087 6.8719 3.55221 6.81202 2.80367C6.77778 2.41443 6.64559 2.04018 6.42777 1.71579C6.68925 1.58857 6.97776 1.52689 7.26841 1.53605C7.55905 1.54521 7.8431 1.62494 8.09606 1.76836C8.34901 1.91178 8.56328 2.1146 8.72037 2.3593C8.87747 2.604 8.97267 2.88325 8.99777 3.17295Z'
            fill='#E91E63'
          />
          <path
            d='M9.99516 7.79123C9.95524 8.27529 9.64584 8.69447 9.12685 8.97892C8.62782 9.25338 7.99905 9.38313 7.37526 9.36816C7.73456 9.04379 7.94415 8.63958 7.98408 8.21041C8.03398 7.59162 7.73955 6.99777 7.1507 6.52369C6.81635 6.25921 6.4271 6.04962 6.00293 5.89492C7.10578 5.57554 8.49309 5.79012 9.34643 6.47878C9.80553 6.84806 10.0401 7.31216 9.99516 7.79123Z'
            fill='#E91E63'
          />
        </svg>
      ),
      variation: 'Community',
    },
    {
      teaser: 'Stop Minting more $CORE',
      date: 'Ends Mar 6th, 2022 11:15',
      vote: 'Vote Now',
      svg: (
        <svg width='10' height='11' viewBox='0 0 10 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M3.51297 0.509766C2.20551 0.509766 1.14258 1.5727 1.14258 2.88015C1.14258 4.16266 2.14563 5.20064 3.45308 5.24555C3.49301 5.24056 3.53293 5.24056 3.56287 5.24555H3.5978C4.21129 5.22508 4.79277 4.96683 5.21929 4.52541C5.64582 4.08398 5.88396 3.49398 5.88336 2.88015C5.88336 1.5727 4.82042 0.509766 3.51297 0.509766Z'
            fill='#E91E63'
          />
          <path
            d='M6.04823 6.5731C4.65594 5.6449 2.38536 5.6449 0.983088 6.5731C0.34932 6.99727 0 7.57116 0 8.18496C0 8.79877 0.34932 9.36766 0.978097 9.78685C1.67674 10.2559 2.59495 10.4905 3.51317 10.4905C4.43138 10.4905 5.34959 10.2559 6.04823 9.78685C6.67701 9.36267 7.02633 8.79378 7.02633 8.17498C7.02134 7.56118 6.67701 6.99228 6.04823 6.5731Z'
            fill='#E91E63'
          />
          <path
            d='M8.99777 3.17295C9.07761 4.14107 8.38895 4.98942 7.43581 5.10419H7.41086C7.38091 5.10419 7.35097 5.10419 7.32602 5.11417C6.84196 5.13913 6.39783 4.98443 6.06348 4.69998C6.57748 4.24087 6.8719 3.55221 6.81202 2.80367C6.77778 2.41443 6.64559 2.04018 6.42777 1.71579C6.68925 1.58857 6.97776 1.52689 7.26841 1.53605C7.55905 1.54521 7.8431 1.62494 8.09606 1.76836C8.34901 1.91178 8.56328 2.1146 8.72037 2.3593C8.87747 2.604 8.97267 2.88325 8.99777 3.17295Z'
            fill='#E91E63'
          />
          <path
            d='M9.99516 7.79123C9.95524 8.27529 9.64584 8.69447 9.12685 8.97892C8.62782 9.25338 7.99905 9.38313 7.37526 9.36816C7.73456 9.04379 7.94415 8.63958 7.98408 8.21041C8.03398 7.59162 7.73955 6.99777 7.1507 6.52369C6.81635 6.25921 6.4271 6.04962 6.00293 5.89492C7.10578 5.57554 8.49309 5.79012 9.34643 6.47878C9.80553 6.84806 10.0401 7.31216 9.99516 7.79123Z'
            fill='#E91E63'
          />
        </svg>
      ),
      variation: 'Community',
    },
    {
      teaser: 'Stop Minting more $CORE',
      date: 'Ends Mar 6th, 2022 11:15',
      vote: 'Vote Now',
      svg: (
        <svg width='10' height='11' viewBox='0 0 10 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M3.51297 0.509766C2.20551 0.509766 1.14258 1.5727 1.14258 2.88015C1.14258 4.16266 2.14563 5.20064 3.45308 5.24555C3.49301 5.24056 3.53293 5.24056 3.56287 5.24555H3.5978C4.21129 5.22508 4.79277 4.96683 5.21929 4.52541C5.64582 4.08398 5.88396 3.49398 5.88336 2.88015C5.88336 1.5727 4.82042 0.509766 3.51297 0.509766Z'
            fill='#E91E63'
          />
          <path
            d='M6.04823 6.5731C4.65594 5.6449 2.38536 5.6449 0.983088 6.5731C0.34932 6.99727 0 7.57116 0 8.18496C0 8.79877 0.34932 9.36766 0.978097 9.78685C1.67674 10.2559 2.59495 10.4905 3.51317 10.4905C4.43138 10.4905 5.34959 10.2559 6.04823 9.78685C6.67701 9.36267 7.02633 8.79378 7.02633 8.17498C7.02134 7.56118 6.67701 6.99228 6.04823 6.5731Z'
            fill='#E91E63'
          />
          <path
            d='M8.99777 3.17295C9.07761 4.14107 8.38895 4.98942 7.43581 5.10419H7.41086C7.38091 5.10419 7.35097 5.10419 7.32602 5.11417C6.84196 5.13913 6.39783 4.98443 6.06348 4.69998C6.57748 4.24087 6.8719 3.55221 6.81202 2.80367C6.77778 2.41443 6.64559 2.04018 6.42777 1.71579C6.68925 1.58857 6.97776 1.52689 7.26841 1.53605C7.55905 1.54521 7.8431 1.62494 8.09606 1.76836C8.34901 1.91178 8.56328 2.1146 8.72037 2.3593C8.87747 2.604 8.97267 2.88325 8.99777 3.17295Z'
            fill='#E91E63'
          />
          <path
            d='M9.99516 7.79123C9.95524 8.27529 9.64584 8.69447 9.12685 8.97892C8.62782 9.25338 7.99905 9.38313 7.37526 9.36816C7.73456 9.04379 7.94415 8.63958 7.98408 8.21041C8.03398 7.59162 7.73955 6.99777 7.1507 6.52369C6.81635 6.25921 6.4271 6.04962 6.00293 5.89492C7.10578 5.57554 8.49309 5.79012 9.34643 6.47878C9.80553 6.84806 10.0401 7.31216 9.99516 7.79123Z'
            fill='#E91E63'
          />
        </svg>
      ),
      variation: 'Community',
    },
    {
      teaser: 'Stop Minting more $CORE',
      date: 'Ends Mar 6th, 2022 11:15',
      vote: 'Vote Now',
      svg: (
        <svg width='10' height='11' viewBox='0 0 10 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M3.51297 0.509766C2.20551 0.509766 1.14258 1.5727 1.14258 2.88015C1.14258 4.16266 2.14563 5.20064 3.45308 5.24555C3.49301 5.24056 3.53293 5.24056 3.56287 5.24555H3.5978C4.21129 5.22508 4.79277 4.96683 5.21929 4.52541C5.64582 4.08398 5.88396 3.49398 5.88336 2.88015C5.88336 1.5727 4.82042 0.509766 3.51297 0.509766Z'
            fill='#E91E63'
          />
          <path
            d='M6.04823 6.5731C4.65594 5.6449 2.38536 5.6449 0.983088 6.5731C0.34932 6.99727 0 7.57116 0 8.18496C0 8.79877 0.34932 9.36766 0.978097 9.78685C1.67674 10.2559 2.59495 10.4905 3.51317 10.4905C4.43138 10.4905 5.34959 10.2559 6.04823 9.78685C6.67701 9.36267 7.02633 8.79378 7.02633 8.17498C7.02134 7.56118 6.67701 6.99228 6.04823 6.5731Z'
            fill='#E91E63'
          />
          <path
            d='M8.99777 3.17295C9.07761 4.14107 8.38895 4.98942 7.43581 5.10419H7.41086C7.38091 5.10419 7.35097 5.10419 7.32602 5.11417C6.84196 5.13913 6.39783 4.98443 6.06348 4.69998C6.57748 4.24087 6.8719 3.55221 6.81202 2.80367C6.77778 2.41443 6.64559 2.04018 6.42777 1.71579C6.68925 1.58857 6.97776 1.52689 7.26841 1.53605C7.55905 1.54521 7.8431 1.62494 8.09606 1.76836C8.34901 1.91178 8.56328 2.1146 8.72037 2.3593C8.87747 2.604 8.97267 2.88325 8.99777 3.17295Z'
            fill='#E91E63'
          />
          <path
            d='M9.99516 7.79123C9.95524 8.27529 9.64584 8.69447 9.12685 8.97892C8.62782 9.25338 7.99905 9.38313 7.37526 9.36816C7.73456 9.04379 7.94415 8.63958 7.98408 8.21041C8.03398 7.59162 7.73955 6.99777 7.1507 6.52369C6.81635 6.25921 6.4271 6.04962 6.00293 5.89492C7.10578 5.57554 8.49309 5.79012 9.34643 6.47878C9.80553 6.84806 10.0401 7.31216 9.99516 7.79123Z'
            fill='#E91E63'
          />
        </svg>
      ),
      variation: 'Community',
    },
    {
      teaser: 'Stop Minting more $CORE',
      date: 'Ends Mar 6th, 2022 11:15',
      vote: 'Vote Now',
      svg: (
        <svg width='10' height='11' viewBox='0 0 10 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M3.51297 0.509766C2.20551 0.509766 1.14258 1.5727 1.14258 2.88015C1.14258 4.16266 2.14563 5.20064 3.45308 5.24555C3.49301 5.24056 3.53293 5.24056 3.56287 5.24555H3.5978C4.21129 5.22508 4.79277 4.96683 5.21929 4.52541C5.64582 4.08398 5.88396 3.49398 5.88336 2.88015C5.88336 1.5727 4.82042 0.509766 3.51297 0.509766Z'
            fill='#E91E63'
          />
          <path
            d='M6.04823 6.5731C4.65594 5.6449 2.38536 5.6449 0.983088 6.5731C0.34932 6.99727 0 7.57116 0 8.18496C0 8.79877 0.34932 9.36766 0.978097 9.78685C1.67674 10.2559 2.59495 10.4905 3.51317 10.4905C4.43138 10.4905 5.34959 10.2559 6.04823 9.78685C6.67701 9.36267 7.02633 8.79378 7.02633 8.17498C7.02134 7.56118 6.67701 6.99228 6.04823 6.5731Z'
            fill='#E91E63'
          />
          <path
            d='M8.99777 3.17295C9.07761 4.14107 8.38895 4.98942 7.43581 5.10419H7.41086C7.38091 5.10419 7.35097 5.10419 7.32602 5.11417C6.84196 5.13913 6.39783 4.98443 6.06348 4.69998C6.57748 4.24087 6.8719 3.55221 6.81202 2.80367C6.77778 2.41443 6.64559 2.04018 6.42777 1.71579C6.68925 1.58857 6.97776 1.52689 7.26841 1.53605C7.55905 1.54521 7.8431 1.62494 8.09606 1.76836C8.34901 1.91178 8.56328 2.1146 8.72037 2.3593C8.87747 2.604 8.97267 2.88325 8.99777 3.17295Z'
            fill='#E91E63'
          />
          <path
            d='M9.99516 7.79123C9.95524 8.27529 9.64584 8.69447 9.12685 8.97892C8.62782 9.25338 7.99905 9.38313 7.37526 9.36816C7.73456 9.04379 7.94415 8.63958 7.98408 8.21041C8.03398 7.59162 7.73955 6.99777 7.1507 6.52369C6.81635 6.25921 6.4271 6.04962 6.00293 5.89492C7.10578 5.57554 8.49309 5.79012 9.34643 6.47878C9.80553 6.84806 10.0401 7.31216 9.99516 7.79123Z'
            fill='#E91E63'
          />
        </svg>
      ),
      variation: 'Community',
    },
    {
      teaser: 'Stop Minting more $CORE',
      date: 'Ends Mar 6th, 2022 11:15',
      vote: 'Vote Now',
      svg: (
        <svg width='10' height='11' viewBox='0 0 10 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M3.51297 0.509766C2.20551 0.509766 1.14258 1.5727 1.14258 2.88015C1.14258 4.16266 2.14563 5.20064 3.45308 5.24555C3.49301 5.24056 3.53293 5.24056 3.56287 5.24555H3.5978C4.21129 5.22508 4.79277 4.96683 5.21929 4.52541C5.64582 4.08398 5.88396 3.49398 5.88336 2.88015C5.88336 1.5727 4.82042 0.509766 3.51297 0.509766Z'
            fill='#E91E63'
          />
          <path
            d='M6.04823 6.5731C4.65594 5.6449 2.38536 5.6449 0.983088 6.5731C0.34932 6.99727 0 7.57116 0 8.18496C0 8.79877 0.34932 9.36766 0.978097 9.78685C1.67674 10.2559 2.59495 10.4905 3.51317 10.4905C4.43138 10.4905 5.34959 10.2559 6.04823 9.78685C6.67701 9.36267 7.02633 8.79378 7.02633 8.17498C7.02134 7.56118 6.67701 6.99228 6.04823 6.5731Z'
            fill='#E91E63'
          />
          <path
            d='M8.99777 3.17295C9.07761 4.14107 8.38895 4.98942 7.43581 5.10419H7.41086C7.38091 5.10419 7.35097 5.10419 7.32602 5.11417C6.84196 5.13913 6.39783 4.98443 6.06348 4.69998C6.57748 4.24087 6.8719 3.55221 6.81202 2.80367C6.77778 2.41443 6.64559 2.04018 6.42777 1.71579C6.68925 1.58857 6.97776 1.52689 7.26841 1.53605C7.55905 1.54521 7.8431 1.62494 8.09606 1.76836C8.34901 1.91178 8.56328 2.1146 8.72037 2.3593C8.87747 2.604 8.97267 2.88325 8.99777 3.17295Z'
            fill='#E91E63'
          />
          <path
            d='M9.99516 7.79123C9.95524 8.27529 9.64584 8.69447 9.12685 8.97892C8.62782 9.25338 7.99905 9.38313 7.37526 9.36816C7.73456 9.04379 7.94415 8.63958 7.98408 8.21041C8.03398 7.59162 7.73955 6.99777 7.1507 6.52369C6.81635 6.25921 6.4271 6.04962 6.00293 5.89492C7.10578 5.57554 8.49309 5.79012 9.34643 6.47878C9.80553 6.84806 10.0401 7.31216 9.99516 7.79123Z'
            fill='#E91E63'
          />
        </svg>
      ),
      variation: 'Community',
    },
    {
      teaser: 'Stop Minting more $CORE',
      date: 'Ends Mar 6th, 2022 11:15',
      vote: 'Vote Now',
      svg: (
        <svg width='10' height='11' viewBox='0 0 10 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M3.51297 0.509766C2.20551 0.509766 1.14258 1.5727 1.14258 2.88015C1.14258 4.16266 2.14563 5.20064 3.45308 5.24555C3.49301 5.24056 3.53293 5.24056 3.56287 5.24555H3.5978C4.21129 5.22508 4.79277 4.96683 5.21929 4.52541C5.64582 4.08398 5.88396 3.49398 5.88336 2.88015C5.88336 1.5727 4.82042 0.509766 3.51297 0.509766Z'
            fill='#E91E63'
          />
          <path
            d='M6.04823 6.5731C4.65594 5.6449 2.38536 5.6449 0.983088 6.5731C0.34932 6.99727 0 7.57116 0 8.18496C0 8.79877 0.34932 9.36766 0.978097 9.78685C1.67674 10.2559 2.59495 10.4905 3.51317 10.4905C4.43138 10.4905 5.34959 10.2559 6.04823 9.78685C6.67701 9.36267 7.02633 8.79378 7.02633 8.17498C7.02134 7.56118 6.67701 6.99228 6.04823 6.5731Z'
            fill='#E91E63'
          />
          <path
            d='M8.99777 3.17295C9.07761 4.14107 8.38895 4.98942 7.43581 5.10419H7.41086C7.38091 5.10419 7.35097 5.10419 7.32602 5.11417C6.84196 5.13913 6.39783 4.98443 6.06348 4.69998C6.57748 4.24087 6.8719 3.55221 6.81202 2.80367C6.77778 2.41443 6.64559 2.04018 6.42777 1.71579C6.68925 1.58857 6.97776 1.52689 7.26841 1.53605C7.55905 1.54521 7.8431 1.62494 8.09606 1.76836C8.34901 1.91178 8.56328 2.1146 8.72037 2.3593C8.87747 2.604 8.97267 2.88325 8.99777 3.17295Z'
            fill='#E91E63'
          />
          <path
            d='M9.99516 7.79123C9.95524 8.27529 9.64584 8.69447 9.12685 8.97892C8.62782 9.25338 7.99905 9.38313 7.37526 9.36816C7.73456 9.04379 7.94415 8.63958 7.98408 8.21041C8.03398 7.59162 7.73955 6.99777 7.1507 6.52369C6.81635 6.25921 6.4271 6.04962 6.00293 5.89492C7.10578 5.57554 8.49309 5.79012 9.34643 6.47878C9.80553 6.84806 10.0401 7.31216 9.99516 7.79123Z'
            fill='#E91E63'
          />
        </svg>
      ),
      variation: 'Community',
    },
    {
      teaser: 'Stop Minting more $CORE',
      date: 'Ends Mar 6th, 2022 11:15',
      vote: 'Vote Now',
      svg: (
        <svg width='10' height='11' viewBox='0 0 10 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M3.51297 0.509766C2.20551 0.509766 1.14258 1.5727 1.14258 2.88015C1.14258 4.16266 2.14563 5.20064 3.45308 5.24555C3.49301 5.24056 3.53293 5.24056 3.56287 5.24555H3.5978C4.21129 5.22508 4.79277 4.96683 5.21929 4.52541C5.64582 4.08398 5.88396 3.49398 5.88336 2.88015C5.88336 1.5727 4.82042 0.509766 3.51297 0.509766Z'
            fill='#E91E63'
          />
          <path
            d='M6.04823 6.5731C4.65594 5.6449 2.38536 5.6449 0.983088 6.5731C0.34932 6.99727 0 7.57116 0 8.18496C0 8.79877 0.34932 9.36766 0.978097 9.78685C1.67674 10.2559 2.59495 10.4905 3.51317 10.4905C4.43138 10.4905 5.34959 10.2559 6.04823 9.78685C6.67701 9.36267 7.02633 8.79378 7.02633 8.17498C7.02134 7.56118 6.67701 6.99228 6.04823 6.5731Z'
            fill='#E91E63'
          />
          <path
            d='M8.99777 3.17295C9.07761 4.14107 8.38895 4.98942 7.43581 5.10419H7.41086C7.38091 5.10419 7.35097 5.10419 7.32602 5.11417C6.84196 5.13913 6.39783 4.98443 6.06348 4.69998C6.57748 4.24087 6.8719 3.55221 6.81202 2.80367C6.77778 2.41443 6.64559 2.04018 6.42777 1.71579C6.68925 1.58857 6.97776 1.52689 7.26841 1.53605C7.55905 1.54521 7.8431 1.62494 8.09606 1.76836C8.34901 1.91178 8.56328 2.1146 8.72037 2.3593C8.87747 2.604 8.97267 2.88325 8.99777 3.17295Z'
            fill='#E91E63'
          />
          <path
            d='M9.99516 7.79123C9.95524 8.27529 9.64584 8.69447 9.12685 8.97892C8.62782 9.25338 7.99905 9.38313 7.37526 9.36816C7.73456 9.04379 7.94415 8.63958 7.98408 8.21041C8.03398 7.59162 7.73955 6.99777 7.1507 6.52369C6.81635 6.25921 6.4271 6.04962 6.00293 5.89492C7.10578 5.57554 8.49309 5.79012 9.34643 6.47878C9.80553 6.84806 10.0401 7.31216 9.99516 7.79123Z'
            fill='#E91E63'
          />
        </svg>
      ),
      variation: 'Community',
    },
    {
      teaser: 'Stop Minting more $CORE',
      date: 'Ends Mar 6th, 2022 11:15',
      vote: 'Vote Now',
      svg: (
        <svg width='10' height='11' viewBox='0 0 10 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M3.51297 0.509766C2.20551 0.509766 1.14258 1.5727 1.14258 2.88015C1.14258 4.16266 2.14563 5.20064 3.45308 5.24555C3.49301 5.24056 3.53293 5.24056 3.56287 5.24555H3.5978C4.21129 5.22508 4.79277 4.96683 5.21929 4.52541C5.64582 4.08398 5.88396 3.49398 5.88336 2.88015C5.88336 1.5727 4.82042 0.509766 3.51297 0.509766Z'
            fill='#E91E63'
          />
          <path
            d='M6.04823 6.5731C4.65594 5.6449 2.38536 5.6449 0.983088 6.5731C0.34932 6.99727 0 7.57116 0 8.18496C0 8.79877 0.34932 9.36766 0.978097 9.78685C1.67674 10.2559 2.59495 10.4905 3.51317 10.4905C4.43138 10.4905 5.34959 10.2559 6.04823 9.78685C6.67701 9.36267 7.02633 8.79378 7.02633 8.17498C7.02134 7.56118 6.67701 6.99228 6.04823 6.5731Z'
            fill='#E91E63'
          />
          <path
            d='M8.99777 3.17295C9.07761 4.14107 8.38895 4.98942 7.43581 5.10419H7.41086C7.38091 5.10419 7.35097 5.10419 7.32602 5.11417C6.84196 5.13913 6.39783 4.98443 6.06348 4.69998C6.57748 4.24087 6.8719 3.55221 6.81202 2.80367C6.77778 2.41443 6.64559 2.04018 6.42777 1.71579C6.68925 1.58857 6.97776 1.52689 7.26841 1.53605C7.55905 1.54521 7.8431 1.62494 8.09606 1.76836C8.34901 1.91178 8.56328 2.1146 8.72037 2.3593C8.87747 2.604 8.97267 2.88325 8.99777 3.17295Z'
            fill='#E91E63'
          />
          <path
            d='M9.99516 7.79123C9.95524 8.27529 9.64584 8.69447 9.12685 8.97892C8.62782 9.25338 7.99905 9.38313 7.37526 9.36816C7.73456 9.04379 7.94415 8.63958 7.98408 8.21041C8.03398 7.59162 7.73955 6.99777 7.1507 6.52369C6.81635 6.25921 6.4271 6.04962 6.00293 5.89492C7.10578 5.57554 8.49309 5.79012 9.34643 6.47878C9.80553 6.84806 10.0401 7.31216 9.99516 7.79123Z'
            fill='#E91E63'
          />
        </svg>
      ),
      variation: 'Community',
    },
    {
      teaser: 'Stop Minting more $CORE',
      date: 'Ends Mar 6th, 2022 11:15',
      vote: 'Vote Now',
      svg: (
        <svg width='10' height='11' viewBox='0 0 10 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M3.51297 0.509766C2.20551 0.509766 1.14258 1.5727 1.14258 2.88015C1.14258 4.16266 2.14563 5.20064 3.45308 5.24555C3.49301 5.24056 3.53293 5.24056 3.56287 5.24555H3.5978C4.21129 5.22508 4.79277 4.96683 5.21929 4.52541C5.64582 4.08398 5.88396 3.49398 5.88336 2.88015C5.88336 1.5727 4.82042 0.509766 3.51297 0.509766Z'
            fill='#E91E63'
          />
          <path
            d='M6.04823 6.5731C4.65594 5.6449 2.38536 5.6449 0.983088 6.5731C0.34932 6.99727 0 7.57116 0 8.18496C0 8.79877 0.34932 9.36766 0.978097 9.78685C1.67674 10.2559 2.59495 10.4905 3.51317 10.4905C4.43138 10.4905 5.34959 10.2559 6.04823 9.78685C6.67701 9.36267 7.02633 8.79378 7.02633 8.17498C7.02134 7.56118 6.67701 6.99228 6.04823 6.5731Z'
            fill='#E91E63'
          />
          <path
            d='M8.99777 3.17295C9.07761 4.14107 8.38895 4.98942 7.43581 5.10419H7.41086C7.38091 5.10419 7.35097 5.10419 7.32602 5.11417C6.84196 5.13913 6.39783 4.98443 6.06348 4.69998C6.57748 4.24087 6.8719 3.55221 6.81202 2.80367C6.77778 2.41443 6.64559 2.04018 6.42777 1.71579C6.68925 1.58857 6.97776 1.52689 7.26841 1.53605C7.55905 1.54521 7.8431 1.62494 8.09606 1.76836C8.34901 1.91178 8.56328 2.1146 8.72037 2.3593C8.87747 2.604 8.97267 2.88325 8.99777 3.17295Z'
            fill='#E91E63'
          />
          <path
            d='M9.99516 7.79123C9.95524 8.27529 9.64584 8.69447 9.12685 8.97892C8.62782 9.25338 7.99905 9.38313 7.37526 9.36816C7.73456 9.04379 7.94415 8.63958 7.98408 8.21041C8.03398 7.59162 7.73955 6.99777 7.1507 6.52369C6.81635 6.25921 6.4271 6.04962 6.00293 5.89492C7.10578 5.57554 8.49309 5.79012 9.34643 6.47878C9.80553 6.84806 10.0401 7.31216 9.99516 7.79123Z'
            fill='#E91E63'
          />
        </svg>
      ),
      variation: 'Community',
    },
  ];

  const toggleLoadMore = () => {
    if (isLoadMore) {
      setDisplayCount(displayCount + additionalItemsCount);
      if (displayCount + additionalItemsCount >= votingNowTableData.length) {
        setIsLoadMore(false);
      }
    } else {
      setDisplayCount(initialDisplayCount);
      setIsLoadMore(true);
    }
  };
  return (
    <div className={styles.table}>
      {votingNowTableData.slice(0, displayCount).map((item, index) => (
        <div key={index} className={styles.row}>
          <div>
            <div className={styles.leftColumn}>
              <h3 className='font-20 ttl'>{item.teaser}</h3>
              <p>{item.date}</p>
            </div>
            <div className={styles.btns}>
              <div className={styles.voteNow}>{item.vote}</div>
              <div className={styles.variations}>
                {item.svg}
                <p>{item.variation}</p>
              </div>
            </div>
          </div>
          <p className={styles.arrowBtn}>
            Read More
            <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M14.4302 18.8211C14.6202 18.8211 14.8102 18.7511 14.9602 18.6011L21.0302 12.5311C21.1697 12.39 21.2479 12.1995 21.2479 12.0011C21.2479 11.8027 21.1697 11.6122 21.0302 11.4711L14.9602 5.40109C14.6702 5.11109 14.1902 5.11109 13.9002 5.40109C13.6102 5.69109 13.6102 6.17109 13.9002 6.46109L19.4402 12.0011L13.9002 17.5411C13.6102 17.8311 13.6102 18.3111 13.9002 18.6011C14.0402 18.7511 14.2402 18.8211 14.4302 18.8211Z'
                fill='#212121'
              />
              <path
                d='M3.50081 12.75L20.3308 12.75C20.7408 12.75 21.0808 12.41 21.0808 12C21.0808 11.59 20.7408 11.25 20.3308 11.25L3.50081 11.25C3.09081 11.25 2.75081 11.59 2.75081 12C2.75081 12.41 3.09081 12.75 3.50081 12.75Z'
                fill='#212121'
              />
            </svg>
          </p>
        </div>
      ))}
      <Button
        onClick={toggleLoadMore}
        label={isLoadMore ? 'Load More' : 'Load Less'}
        className={isLoadMore ? styles.btn : styles.undoBtn}
        element={'button'}
        customStyles={{ width: '154px', border: '1px solid #162029', margin: ' 34px auto 20px auto' }}
      />
    </div>
  );
}

export default VotingNowTable;
