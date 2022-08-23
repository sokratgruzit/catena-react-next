import { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import CornerDecor from '../../UI/cornerDecor/CornerDecor';
import EarnRoutes from '../components/earnRoutes/EarnRoutes';
import TableFilter from '../components/tableFilter/TableFilter';
import FarmsTableRow from '../components/farmsTableRow/FarmsTableRow';
import FarmsTableComponent from '../components/farmsTableComponent/FarmsTableComponent';
import background from '../../../public/images/earn/background.png';

import {
  VectorSvg,
  ArrowSvg,
  TableViewSvg,
  ComponentViewSvg,
  InfoIcon,
} from '../../svg';

import styles from './Farms.module.css';

const farmsData = [
  {
    token: (
      <svg
        width='51'
        height='31'
        viewBox='0 0 51 31'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g clipPath='url(#clip0_2_977)'>
          <path
            d='M29.5352 15.9958C29.5352 24.004 23.0433 30.4958 15.0352 30.4958C7.02703 30.4958 0.535156 24.004 0.535156 15.9958C0.535156 7.98772 7.02703 1.49585 15.0352 1.49585C23.0433 1.49585 29.5352 7.98772 29.5352 15.9958Z'
            fill='#627EEA'
            stroke='white'
          />
          <path
            d='M15.502 4.74585V13.0615L22.5304 16.2021L15.502 4.74585Z'
            fill='white'
            fillOpacity='0.602'
          />
          <path
            d='M15.502 4.74585L8.47266 16.2021L15.502 13.0615V4.74585Z'
            fill='white'
          />
          <path
            d='M15.502 21.5907V27.2411L22.5351 17.5107L15.502 21.5907Z'
            fill='white'
            fillOpacity='0.602'
          />
          <path
            d='M15.502 27.2411V21.5898L8.47266 17.5107L15.502 27.2411Z'
            fill='white'
          />
          <path
            d='M15.502 20.2832L22.5304 16.2022L15.502 13.0635V20.2832Z'
            fill='white'
            fillOpacity='0.2'
          />
          <path
            d='M8.47266 16.2022L15.502 20.2832V13.0635L8.47266 16.2022Z'
            fill='white'
            fillOpacity='0.602'
          />
        </g>
        <path
          d='M49.5352 15.9958C49.5352 24.004 43.0433 30.4958 35.0352 30.4958C27.027 30.4958 20.5352 24.004 20.5352 15.9958C20.5352 7.98772 27.027 1.49585 35.0352 1.49585C43.0433 1.49585 49.5352 7.98772 49.5352 15.9958Z'
          fill='#131313'
          stroke='white'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M28.4936 11.0531C29.3047 9.98194 30.3673 9.12622 31.5879 8.56128C32.8084 7.99633 34.1495 7.7395 35.4929 7.81339C36.8364 7.88729 38.141 8.28964 39.2919 8.98502C40.4428 9.6804 41.4048 10.6475 42.093 11.8011L42.6874 11.4716L43.6781 10.8916C42.7893 9.39958 41.527 8.16376 40.015 7.30545C38.503 6.44715 36.7934 5.99585 35.0539 5.99585C33.3143 5.99585 31.6047 6.44715 30.0927 7.30545C28.5807 8.16376 27.3184 9.39958 26.4296 10.8916L25.9375 11.6627L26.7235 12.1273L29.765 13.9298C29.2675 15.1782 29.2329 16.5628 29.6673 17.8344C30.1018 19.1061 30.9768 20.1813 32.135 20.8665C33.2931 21.5518 34.6583 21.8021 35.985 21.5725C37.3116 21.3429 38.5126 20.6484 39.3718 19.614L41.5877 20.932C40.7764 22.0041 39.7131 22.8605 38.4916 23.4255C37.2702 23.9906 35.9281 24.247 34.5838 24.1721C33.2396 24.0972 31.9344 23.6933 30.7836 22.9961C29.6328 22.2988 28.6717 21.3297 27.985 20.1741L26.4164 21.1001C27.3052 22.5921 28.5675 23.8279 30.0795 24.6862C31.5915 25.5445 33.3011 25.9958 35.0406 25.9958C36.7802 25.9958 38.4898 25.5445 40.0018 24.6862C41.5138 23.8279 42.7761 22.5921 43.6649 21.1001L44.1339 20.3158L43.3479 19.8512L40.8513 18.3717L38.6981 17.1327C38.436 17.9653 37.8962 18.6833 37.1685 19.1674C36.4409 19.6515 35.5691 19.8726 34.698 19.794C33.827 19.7153 33.0091 19.3416 32.3804 18.735C31.7517 18.1283 31.3499 17.3253 31.2419 16.4593C31.1338 15.5933 31.326 14.7165 31.7865 13.9745C32.247 13.2326 32.9481 12.6703 33.7732 12.3809C34.5984 12.0916 35.4979 12.0927 36.3223 12.384C37.1467 12.6754 37.8464 13.2395 38.3051 13.9825L39.887 13.073C39.4222 12.304 38.7802 11.6567 38.0143 11.1851C37.2484 10.7135 36.3807 10.4311 35.4834 10.3615C34.5861 10.2919 33.6852 10.437 32.8554 10.7849C32.0256 11.1327 31.2911 11.6731 30.7128 12.3613L28.4936 11.0531Z'
          fill='#FF7152'
        />
        <defs>
          <clipPath id='clip0_2_977'>
            <rect
              width='30'
              height='30'
              fill='white'
              transform='translate(0.0351562 0.99585)'
            />
          </clipPath>
        </defs>
      </svg>
    ),
    title: 'CMCX-ETH',
    earned: 0,
    apr: '45.05%',
    liquidity: '$235.684.158',
    multiplier: '10x',
    id: 0,
  },
  {
    token: (
      <svg
        width='51'
        height='31'
        viewBox='0 0 51 31'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g clipPath='url(#clip0_2_977)'>
          <path
            d='M29.5352 15.9958C29.5352 24.004 23.0433 30.4958 15.0352 30.4958C7.02703 30.4958 0.535156 24.004 0.535156 15.9958C0.535156 7.98772 7.02703 1.49585 15.0352 1.49585C23.0433 1.49585 29.5352 7.98772 29.5352 15.9958Z'
            fill='#627EEA'
            stroke='white'
          />
          <path
            d='M15.502 4.74585V13.0615L22.5304 16.2021L15.502 4.74585Z'
            fill='white'
            fillOpacity='0.602'
          />
          <path
            d='M15.502 4.74585L8.47266 16.2021L15.502 13.0615V4.74585Z'
            fill='white'
          />
          <path
            d='M15.502 21.5907V27.2411L22.5351 17.5107L15.502 21.5907Z'
            fill='white'
            fillOpacity='0.602'
          />
          <path
            d='M15.502 27.2411V21.5898L8.47266 17.5107L15.502 27.2411Z'
            fill='white'
          />
          <path
            d='M15.502 20.2832L22.5304 16.2022L15.502 13.0635V20.2832Z'
            fill='white'
            fillOpacity='0.2'
          />
          <path
            d='M8.47266 16.2022L15.502 20.2832V13.0635L8.47266 16.2022Z'
            fill='white'
            fillOpacity='0.602'
          />
        </g>
        <path
          d='M49.5352 15.9958C49.5352 24.004 43.0433 30.4958 35.0352 30.4958C27.027 30.4958 20.5352 24.004 20.5352 15.9958C20.5352 7.98772 27.027 1.49585 35.0352 1.49585C43.0433 1.49585 49.5352 7.98772 49.5352 15.9958Z'
          fill='#131313'
          stroke='white'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M28.4936 11.0531C29.3047 9.98194 30.3673 9.12622 31.5879 8.56128C32.8084 7.99633 34.1495 7.7395 35.4929 7.81339C36.8364 7.88729 38.141 8.28964 39.2919 8.98502C40.4428 9.6804 41.4048 10.6475 42.093 11.8011L42.6874 11.4716L43.6781 10.8916C42.7893 9.39958 41.527 8.16376 40.015 7.30545C38.503 6.44715 36.7934 5.99585 35.0539 5.99585C33.3143 5.99585 31.6047 6.44715 30.0927 7.30545C28.5807 8.16376 27.3184 9.39958 26.4296 10.8916L25.9375 11.6627L26.7235 12.1273L29.765 13.9298C29.2675 15.1782 29.2329 16.5628 29.6673 17.8344C30.1018 19.1061 30.9768 20.1813 32.135 20.8665C33.2931 21.5518 34.6583 21.8021 35.985 21.5725C37.3116 21.3429 38.5126 20.6484 39.3718 19.614L41.5877 20.932C40.7764 22.0041 39.7131 22.8605 38.4916 23.4255C37.2702 23.9906 35.9281 24.247 34.5838 24.1721C33.2396 24.0972 31.9344 23.6933 30.7836 22.9961C29.6328 22.2988 28.6717 21.3297 27.985 20.1741L26.4164 21.1001C27.3052 22.5921 28.5675 23.8279 30.0795 24.6862C31.5915 25.5445 33.3011 25.9958 35.0406 25.9958C36.7802 25.9958 38.4898 25.5445 40.0018 24.6862C41.5138 23.8279 42.7761 22.5921 43.6649 21.1001L44.1339 20.3158L43.3479 19.8512L40.8513 18.3717L38.6981 17.1327C38.436 17.9653 37.8962 18.6833 37.1685 19.1674C36.4409 19.6515 35.5691 19.8726 34.698 19.794C33.827 19.7153 33.0091 19.3416 32.3804 18.735C31.7517 18.1283 31.3499 17.3253 31.2419 16.4593C31.1338 15.5933 31.326 14.7165 31.7865 13.9745C32.247 13.2326 32.9481 12.6703 33.7732 12.3809C34.5984 12.0916 35.4979 12.0927 36.3223 12.384C37.1467 12.6754 37.8464 13.2395 38.3051 13.9825L39.887 13.073C39.4222 12.304 38.7802 11.6567 38.0143 11.1851C37.2484 10.7135 36.3807 10.4311 35.4834 10.3615C34.5861 10.2919 33.6852 10.437 32.8554 10.7849C32.0256 11.1327 31.2911 11.6731 30.7128 12.3613L28.4936 11.0531Z'
          fill='#FF7152'
        />
        <defs>
          <clipPath id='clip0_2_977'>
            <rect
              width='30'
              height='30'
              fill='white'
              transform='translate(0.0351562 0.99585)'
            />
          </clipPath>
        </defs>
      </svg>
    ),
    title: 'HOTCROSS-BNB',
    earned: 0,
    apr: '45.05%',
    liquidity: '$235.684.158',
    multiplier: '10x',
    id: 1,
  },
  {
    token: (
      <svg
        width='51'
        height='31'
        viewBox='0 0 51 31'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g clipPath='url(#clip0_2_977)'>
          <path
            d='M29.5352 15.9958C29.5352 24.004 23.0433 30.4958 15.0352 30.4958C7.02703 30.4958 0.535156 24.004 0.535156 15.9958C0.535156 7.98772 7.02703 1.49585 15.0352 1.49585C23.0433 1.49585 29.5352 7.98772 29.5352 15.9958Z'
            fill='#627EEA'
            stroke='white'
          />
          <path
            d='M15.502 4.74585V13.0615L22.5304 16.2021L15.502 4.74585Z'
            fill='white'
            fillOpacity='0.602'
          />
          <path
            d='M15.502 4.74585L8.47266 16.2021L15.502 13.0615V4.74585Z'
            fill='white'
          />
          <path
            d='M15.502 21.5907V27.2411L22.5351 17.5107L15.502 21.5907Z'
            fill='white'
            fillOpacity='0.602'
          />
          <path
            d='M15.502 27.2411V21.5898L8.47266 17.5107L15.502 27.2411Z'
            fill='white'
          />
          <path
            d='M15.502 20.2832L22.5304 16.2022L15.502 13.0635V20.2832Z'
            fill='white'
            fillOpacity='0.2'
          />
          <path
            d='M8.47266 16.2022L15.502 20.2832V13.0635L8.47266 16.2022Z'
            fill='white'
            fillOpacity='0.602'
          />
        </g>
        <path
          d='M49.5352 15.9958C49.5352 24.004 43.0433 30.4958 35.0352 30.4958C27.027 30.4958 20.5352 24.004 20.5352 15.9958C20.5352 7.98772 27.027 1.49585 35.0352 1.49585C43.0433 1.49585 49.5352 7.98772 49.5352 15.9958Z'
          fill='#131313'
          stroke='white'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M28.4936 11.0531C29.3047 9.98194 30.3673 9.12622 31.5879 8.56128C32.8084 7.99633 34.1495 7.7395 35.4929 7.81339C36.8364 7.88729 38.141 8.28964 39.2919 8.98502C40.4428 9.6804 41.4048 10.6475 42.093 11.8011L42.6874 11.4716L43.6781 10.8916C42.7893 9.39958 41.527 8.16376 40.015 7.30545C38.503 6.44715 36.7934 5.99585 35.0539 5.99585C33.3143 5.99585 31.6047 6.44715 30.0927 7.30545C28.5807 8.16376 27.3184 9.39958 26.4296 10.8916L25.9375 11.6627L26.7235 12.1273L29.765 13.9298C29.2675 15.1782 29.2329 16.5628 29.6673 17.8344C30.1018 19.1061 30.9768 20.1813 32.135 20.8665C33.2931 21.5518 34.6583 21.8021 35.985 21.5725C37.3116 21.3429 38.5126 20.6484 39.3718 19.614L41.5877 20.932C40.7764 22.0041 39.7131 22.8605 38.4916 23.4255C37.2702 23.9906 35.9281 24.247 34.5838 24.1721C33.2396 24.0972 31.9344 23.6933 30.7836 22.9961C29.6328 22.2988 28.6717 21.3297 27.985 20.1741L26.4164 21.1001C27.3052 22.5921 28.5675 23.8279 30.0795 24.6862C31.5915 25.5445 33.3011 25.9958 35.0406 25.9958C36.7802 25.9958 38.4898 25.5445 40.0018 24.6862C41.5138 23.8279 42.7761 22.5921 43.6649 21.1001L44.1339 20.3158L43.3479 19.8512L40.8513 18.3717L38.6981 17.1327C38.436 17.9653 37.8962 18.6833 37.1685 19.1674C36.4409 19.6515 35.5691 19.8726 34.698 19.794C33.827 19.7153 33.0091 19.3416 32.3804 18.735C31.7517 18.1283 31.3499 17.3253 31.2419 16.4593C31.1338 15.5933 31.326 14.7165 31.7865 13.9745C32.247 13.2326 32.9481 12.6703 33.7732 12.3809C34.5984 12.0916 35.4979 12.0927 36.3223 12.384C37.1467 12.6754 37.8464 13.2395 38.3051 13.9825L39.887 13.073C39.4222 12.304 38.7802 11.6567 38.0143 11.1851C37.2484 10.7135 36.3807 10.4311 35.4834 10.3615C34.5861 10.2919 33.6852 10.437 32.8554 10.7849C32.0256 11.1327 31.2911 11.6731 30.7128 12.3613L28.4936 11.0531Z'
          fill='#FF7152'
        />
        <defs>
          <clipPath id='clip0_2_977'>
            <rect
              width='30'
              height='30'
              fill='white'
              transform='translate(0.0351562 0.99585)'
            />
          </clipPath>
        </defs>
      </svg>
    ),
    title: 'DUET-CMCX',
    earned: 0,
    apr: '45.05%',
    liquidity: '$235.684.158',
    multiplier: '10x',
    id: 2,
  },
  {
    token: (
      <svg
        width='51'
        height='31'
        viewBox='0 0 51 31'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g clipPath='url(#clip0_2_977)'>
          <path
            d='M29.5352 15.9958C29.5352 24.004 23.0433 30.4958 15.0352 30.4958C7.02703 30.4958 0.535156 24.004 0.535156 15.9958C0.535156 7.98772 7.02703 1.49585 15.0352 1.49585C23.0433 1.49585 29.5352 7.98772 29.5352 15.9958Z'
            fill='#627EEA'
            stroke='white'
          />
          <path
            d='M15.502 4.74585V13.0615L22.5304 16.2021L15.502 4.74585Z'
            fill='white'
            fillOpacity='0.602'
          />
          <path
            d='M15.502 4.74585L8.47266 16.2021L15.502 13.0615V4.74585Z'
            fill='white'
          />
          <path
            d='M15.502 21.5907V27.2411L22.5351 17.5107L15.502 21.5907Z'
            fill='white'
            fillOpacity='0.602'
          />
          <path
            d='M15.502 27.2411V21.5898L8.47266 17.5107L15.502 27.2411Z'
            fill='white'
          />
          <path
            d='M15.502 20.2832L22.5304 16.2022L15.502 13.0635V20.2832Z'
            fill='white'
            fillOpacity='0.2'
          />
          <path
            d='M8.47266 16.2022L15.502 20.2832V13.0635L8.47266 16.2022Z'
            fill='white'
            fillOpacity='0.602'
          />
        </g>
        <path
          d='M49.5352 15.9958C49.5352 24.004 43.0433 30.4958 35.0352 30.4958C27.027 30.4958 20.5352 24.004 20.5352 15.9958C20.5352 7.98772 27.027 1.49585 35.0352 1.49585C43.0433 1.49585 49.5352 7.98772 49.5352 15.9958Z'
          fill='#131313'
          stroke='white'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M28.4936 11.0531C29.3047 9.98194 30.3673 9.12622 31.5879 8.56128C32.8084 7.99633 34.1495 7.7395 35.4929 7.81339C36.8364 7.88729 38.141 8.28964 39.2919 8.98502C40.4428 9.6804 41.4048 10.6475 42.093 11.8011L42.6874 11.4716L43.6781 10.8916C42.7893 9.39958 41.527 8.16376 40.015 7.30545C38.503 6.44715 36.7934 5.99585 35.0539 5.99585C33.3143 5.99585 31.6047 6.44715 30.0927 7.30545C28.5807 8.16376 27.3184 9.39958 26.4296 10.8916L25.9375 11.6627L26.7235 12.1273L29.765 13.9298C29.2675 15.1782 29.2329 16.5628 29.6673 17.8344C30.1018 19.1061 30.9768 20.1813 32.135 20.8665C33.2931 21.5518 34.6583 21.8021 35.985 21.5725C37.3116 21.3429 38.5126 20.6484 39.3718 19.614L41.5877 20.932C40.7764 22.0041 39.7131 22.8605 38.4916 23.4255C37.2702 23.9906 35.9281 24.247 34.5838 24.1721C33.2396 24.0972 31.9344 23.6933 30.7836 22.9961C29.6328 22.2988 28.6717 21.3297 27.985 20.1741L26.4164 21.1001C27.3052 22.5921 28.5675 23.8279 30.0795 24.6862C31.5915 25.5445 33.3011 25.9958 35.0406 25.9958C36.7802 25.9958 38.4898 25.5445 40.0018 24.6862C41.5138 23.8279 42.7761 22.5921 43.6649 21.1001L44.1339 20.3158L43.3479 19.8512L40.8513 18.3717L38.6981 17.1327C38.436 17.9653 37.8962 18.6833 37.1685 19.1674C36.4409 19.6515 35.5691 19.8726 34.698 19.794C33.827 19.7153 33.0091 19.3416 32.3804 18.735C31.7517 18.1283 31.3499 17.3253 31.2419 16.4593C31.1338 15.5933 31.326 14.7165 31.7865 13.9745C32.247 13.2326 32.9481 12.6703 33.7732 12.3809C34.5984 12.0916 35.4979 12.0927 36.3223 12.384C37.1467 12.6754 37.8464 13.2395 38.3051 13.9825L39.887 13.073C39.4222 12.304 38.7802 11.6567 38.0143 11.1851C37.2484 10.7135 36.3807 10.4311 35.4834 10.3615C34.5861 10.2919 33.6852 10.437 32.8554 10.7849C32.0256 11.1327 31.2911 11.6731 30.7128 12.3613L28.4936 11.0531Z'
          fill='#FF7152'
        />
        <defs>
          <clipPath id='clip0_2_977'>
            <rect
              width='30'
              height='30'
              fill='white'
              transform='translate(0.0351562 0.99585)'
            />
          </clipPath>
        </defs>
      </svg>
    ),
    title: 'CMCX-ETH',
    earned: 0,
    apr: '45.05%',
    liquidity: '$235.684.158',
    multiplier: '10x',
    id: 3,
  },
  {
    token: (
      <svg
        width='51'
        height='31'
        viewBox='0 0 51 31'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g clipPath='url(#clip0_2_977)'>
          <path
            d='M29.5352 15.9958C29.5352 24.004 23.0433 30.4958 15.0352 30.4958C7.02703 30.4958 0.535156 24.004 0.535156 15.9958C0.535156 7.98772 7.02703 1.49585 15.0352 1.49585C23.0433 1.49585 29.5352 7.98772 29.5352 15.9958Z'
            fill='#627EEA'
            stroke='white'
          />
          <path
            d='M15.502 4.74585V13.0615L22.5304 16.2021L15.502 4.74585Z'
            fill='white'
            fillOpacity='0.602'
          />
          <path
            d='M15.502 4.74585L8.47266 16.2021L15.502 13.0615V4.74585Z'
            fill='white'
          />
          <path
            d='M15.502 21.5907V27.2411L22.5351 17.5107L15.502 21.5907Z'
            fill='white'
            fillOpacity='0.602'
          />
          <path
            d='M15.502 27.2411V21.5898L8.47266 17.5107L15.502 27.2411Z'
            fill='white'
          />
          <path
            d='M15.502 20.2832L22.5304 16.2022L15.502 13.0635V20.2832Z'
            fill='white'
            fillOpacity='0.2'
          />
          <path
            d='M8.47266 16.2022L15.502 20.2832V13.0635L8.47266 16.2022Z'
            fill='white'
            fillOpacity='0.602'
          />
        </g>
        <path
          d='M49.5352 15.9958C49.5352 24.004 43.0433 30.4958 35.0352 30.4958C27.027 30.4958 20.5352 24.004 20.5352 15.9958C20.5352 7.98772 27.027 1.49585 35.0352 1.49585C43.0433 1.49585 49.5352 7.98772 49.5352 15.9958Z'
          fill='#131313'
          stroke='white'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M28.4936 11.0531C29.3047 9.98194 30.3673 9.12622 31.5879 8.56128C32.8084 7.99633 34.1495 7.7395 35.4929 7.81339C36.8364 7.88729 38.141 8.28964 39.2919 8.98502C40.4428 9.6804 41.4048 10.6475 42.093 11.8011L42.6874 11.4716L43.6781 10.8916C42.7893 9.39958 41.527 8.16376 40.015 7.30545C38.503 6.44715 36.7934 5.99585 35.0539 5.99585C33.3143 5.99585 31.6047 6.44715 30.0927 7.30545C28.5807 8.16376 27.3184 9.39958 26.4296 10.8916L25.9375 11.6627L26.7235 12.1273L29.765 13.9298C29.2675 15.1782 29.2329 16.5628 29.6673 17.8344C30.1018 19.1061 30.9768 20.1813 32.135 20.8665C33.2931 21.5518 34.6583 21.8021 35.985 21.5725C37.3116 21.3429 38.5126 20.6484 39.3718 19.614L41.5877 20.932C40.7764 22.0041 39.7131 22.8605 38.4916 23.4255C37.2702 23.9906 35.9281 24.247 34.5838 24.1721C33.2396 24.0972 31.9344 23.6933 30.7836 22.9961C29.6328 22.2988 28.6717 21.3297 27.985 20.1741L26.4164 21.1001C27.3052 22.5921 28.5675 23.8279 30.0795 24.6862C31.5915 25.5445 33.3011 25.9958 35.0406 25.9958C36.7802 25.9958 38.4898 25.5445 40.0018 24.6862C41.5138 23.8279 42.7761 22.5921 43.6649 21.1001L44.1339 20.3158L43.3479 19.8512L40.8513 18.3717L38.6981 17.1327C38.436 17.9653 37.8962 18.6833 37.1685 19.1674C36.4409 19.6515 35.5691 19.8726 34.698 19.794C33.827 19.7153 33.0091 19.3416 32.3804 18.735C31.7517 18.1283 31.3499 17.3253 31.2419 16.4593C31.1338 15.5933 31.326 14.7165 31.7865 13.9745C32.247 13.2326 32.9481 12.6703 33.7732 12.3809C34.5984 12.0916 35.4979 12.0927 36.3223 12.384C37.1467 12.6754 37.8464 13.2395 38.3051 13.9825L39.887 13.073C39.4222 12.304 38.7802 11.6567 38.0143 11.1851C37.2484 10.7135 36.3807 10.4311 35.4834 10.3615C34.5861 10.2919 33.6852 10.437 32.8554 10.7849C32.0256 11.1327 31.2911 11.6731 30.7128 12.3613L28.4936 11.0531Z'
          fill='#FF7152'
        />
        <defs>
          <clipPath id='clip0_2_977'>
            <rect
              width='30'
              height='30'
              fill='white'
              transform='translate(0.0351562 0.99585)'
            />
          </clipPath>
        </defs>
      </svg>
    ),
    title: 'CMCX-ETH',
    earned: 0,
    apr: '45.05%',
    liquidity: '$235.684.158',
    multiplier: '10x',
    id: 4,
  },
  {
    token: (
      <svg
        width='51'
        height='31'
        viewBox='0 0 51 31'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g clipPath='url(#clip0_2_977)'>
          <path
            d='M29.5352 15.9958C29.5352 24.004 23.0433 30.4958 15.0352 30.4958C7.02703 30.4958 0.535156 24.004 0.535156 15.9958C0.535156 7.98772 7.02703 1.49585 15.0352 1.49585C23.0433 1.49585 29.5352 7.98772 29.5352 15.9958Z'
            fill='#627EEA'
            stroke='white'
          />
          <path
            d='M15.502 4.74585V13.0615L22.5304 16.2021L15.502 4.74585Z'
            fill='white'
            fillOpacity='0.602'
          />
          <path
            d='M15.502 4.74585L8.47266 16.2021L15.502 13.0615V4.74585Z'
            fill='white'
          />
          <path
            d='M15.502 21.5907V27.2411L22.5351 17.5107L15.502 21.5907Z'
            fill='white'
            fillOpacity='0.602'
          />
          <path
            d='M15.502 27.2411V21.5898L8.47266 17.5107L15.502 27.2411Z'
            fill='white'
          />
          <path
            d='M15.502 20.2832L22.5304 16.2022L15.502 13.0635V20.2832Z'
            fill='white'
            fillOpacity='0.2'
          />
          <path
            d='M8.47266 16.2022L15.502 20.2832V13.0635L8.47266 16.2022Z'
            fill='white'
            fillOpacity='0.602'
          />
        </g>
        <path
          d='M49.5352 15.9958C49.5352 24.004 43.0433 30.4958 35.0352 30.4958C27.027 30.4958 20.5352 24.004 20.5352 15.9958C20.5352 7.98772 27.027 1.49585 35.0352 1.49585C43.0433 1.49585 49.5352 7.98772 49.5352 15.9958Z'
          fill='#131313'
          stroke='white'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M28.4936 11.0531C29.3047 9.98194 30.3673 9.12622 31.5879 8.56128C32.8084 7.99633 34.1495 7.7395 35.4929 7.81339C36.8364 7.88729 38.141 8.28964 39.2919 8.98502C40.4428 9.6804 41.4048 10.6475 42.093 11.8011L42.6874 11.4716L43.6781 10.8916C42.7893 9.39958 41.527 8.16376 40.015 7.30545C38.503 6.44715 36.7934 5.99585 35.0539 5.99585C33.3143 5.99585 31.6047 6.44715 30.0927 7.30545C28.5807 8.16376 27.3184 9.39958 26.4296 10.8916L25.9375 11.6627L26.7235 12.1273L29.765 13.9298C29.2675 15.1782 29.2329 16.5628 29.6673 17.8344C30.1018 19.1061 30.9768 20.1813 32.135 20.8665C33.2931 21.5518 34.6583 21.8021 35.985 21.5725C37.3116 21.3429 38.5126 20.6484 39.3718 19.614L41.5877 20.932C40.7764 22.0041 39.7131 22.8605 38.4916 23.4255C37.2702 23.9906 35.9281 24.247 34.5838 24.1721C33.2396 24.0972 31.9344 23.6933 30.7836 22.9961C29.6328 22.2988 28.6717 21.3297 27.985 20.1741L26.4164 21.1001C27.3052 22.5921 28.5675 23.8279 30.0795 24.6862C31.5915 25.5445 33.3011 25.9958 35.0406 25.9958C36.7802 25.9958 38.4898 25.5445 40.0018 24.6862C41.5138 23.8279 42.7761 22.5921 43.6649 21.1001L44.1339 20.3158L43.3479 19.8512L40.8513 18.3717L38.6981 17.1327C38.436 17.9653 37.8962 18.6833 37.1685 19.1674C36.4409 19.6515 35.5691 19.8726 34.698 19.794C33.827 19.7153 33.0091 19.3416 32.3804 18.735C31.7517 18.1283 31.3499 17.3253 31.2419 16.4593C31.1338 15.5933 31.326 14.7165 31.7865 13.9745C32.247 13.2326 32.9481 12.6703 33.7732 12.3809C34.5984 12.0916 35.4979 12.0927 36.3223 12.384C37.1467 12.6754 37.8464 13.2395 38.3051 13.9825L39.887 13.073C39.4222 12.304 38.7802 11.6567 38.0143 11.1851C37.2484 10.7135 36.3807 10.4311 35.4834 10.3615C34.5861 10.2919 33.6852 10.437 32.8554 10.7849C32.0256 11.1327 31.2911 11.6731 30.7128 12.3613L28.4936 11.0531Z'
          fill='#FF7152'
        />
        <defs>
          <clipPath id='clip0_2_977'>
            <rect
              width='30'
              height='30'
              fill='white'
              transform='translate(0.0351562 0.99585)'
            />
          </clipPath>
        </defs>
      </svg>
    ),
    title: 'CMCX-ETH',
    earned: 0,
    apr: '45.05%',
    liquidity: '$235.684.158',
    multiplier: '10x',
    id: 5,
  },
];
const FilterData = ['hot', 'apr', 'multiplier', 'earned', 'liquidity'];

const Farms = () => {
  const [filter, setFilter] = useState({
    open: false,
    selected: FilterData[0],
  });
  const [search, setSearch] = useState('');
  const [dataViewType, setDataViewType] = useState('table');

  const router = useRouter();
  const selectRef = useRef();

  return (
    <>
      <div className={styles.background}>
        <Image src={background} alt='' />
      </div>
      <div className={`container ${styles.farms__container}`}>
        <div className={styles.routesWrapper}>
          <EarnRoutes />
        </div>
        <h1 className='font_30'>Stake LP tokens to earn.</h1>
        <div
          onClick={() => router.push('/earn/farms/auction')}
          className={styles.communityAuctions}
        >
          <p className={`${styles.blueHover}`}>Community Auctions</p>
          <ArrowSvg className={styles.svgHoverBlue} />
        </div>
        <div className={`${styles.farms__filter} `}>
          <CornerDecor />
          <div className={styles.farms__filterInner}>
            <div className={styles.Farms__filterLeftPanel}>
              <TableViewSvg
                onClick={() => setDataViewType('table')}
                className={`${
                  dataViewType === 'components' && styles.tableView
                }`}
              />
              <ComponentViewSvg
                onClick={() => setDataViewType('components')}
                className={`${
                  dataViewType === 'components' && styles.componentsView
                }`}
              />
              <div className={styles.farms__radioBtn}>
                <div className='radio-btn'>
                  <input type='checkbox' />
                  <div className='radio-btn__inner'>
                    <div className='radio-btn__icon'></div>
                  </div>
                  Staked only
                </div>
              </div>
              <TableFilter />
            </div>
            <div className={styles.Farms__filterRightPanel}>
              <div className={styles.filterWrapper}>
                <div
                  ref={selectRef}
                  className={styles.filters}
                  onClick={() =>
                    setFilter(prevState => ({
                      ...prevState,
                      open: !prevState.open,
                    }))
                  }
                >
                  <p className={styles.filterName}>
                    {filter.selected}{' '}
                    <VectorSvg
                      className={`${styles.vectorSvg} ${
                        filter.open && styles.rotate
                      }`}
                    />
                  </p>
                  {filter.open && (
                    <>
                      {FilterData.map((FilterName, index) => {
                        if (FilterName === filter.selected) return false;
                        return (
                          <p
                            key={FilterName}
                            className={styles.FilterName}
                            onClick={() => {
                              setFilter({
                                open: 'false',
                                selected: FilterName,
                              });
                            }}
                          >
                            {FilterName}
                          </p>
                        );
                      })}
                    </>
                  )}
                </div>
              </div>
              <input
                onChange={e => setSearch(e.target.value)}
                className={styles.searchInput}
                type='search'
                placeholder='Search Farms'
              ></input>
            </div>
          </div>
        </div>
        {dataViewType === 'table' && (
          <div className={`${styles.farms__tableContainer}`}>
            <CornerDecor />
            <div className={styles.farms__tableInner}>
              <div className={styles.farms__tableHeader}>
                <div className={styles.earned}>Earned</div>
                <div className={styles.apr}>APR</div>
                <div className={styles.liquidity}>
                  Liquidity
                  <InfoIcon className={styles.infoIcon} />
                </div>
                <div className={styles.multiplier}>
                  Multiplier
                  <InfoIcon className={styles.infoIcon} />
                </div>
              </div>
              {farmsData
                .filter(item => {
                  return search.toLowerCase() === ''
                    ? item
                    : item.title.toLowerCase().includes(search);
                })
                .map((item, index) => {
                  return <FarmsTableRow item={item} key={index} />;
                })}
            </div>
          </div>
        )}
        {dataViewType === 'components' && (
          <div className={styles.componentsViewSection}>
            {farmsData
              .filter(item => {
                return search.toLowerCase() === ''
                  ? item
                  : item.title.toLowerCase().includes(search);
              })
              .map((item, index) => {
                return <FarmsTableComponent item={item} key={index} />;
              })}
          </div>
        )}
      </div>
    </>
  );
};

export default Farms;