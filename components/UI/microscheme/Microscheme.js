import styles from './Microscheme.module.css';
import { useSelector } from 'react-redux';
import { React, useEffect } from 'react';
import { gsap, Linear } from 'gsap';

const Microscheme = props => {
  let lvl = useSelector(state => state.settings.microschemeArray);
  console.log(lvl);
  let animateLines = array => {
    let stringIn = '';
    let stringOut = '';
    let stringInDots = '';
    let stringOutDots = '';
    let fullRange = false;
    let outElementsArray = [];

    if (array.length !== 0) {
      for (let i = 1; i < array.length; i++) {
        stringIn = stringIn + '.line' + array[i].toString() + (i !== array.length - 1 ? ',' : '');
        stringInDots = stringInDots + '.circle' + array[i].toString() + (i !== array.length - 1 ? ',' : '');
      }
      gsap.to(stringInDots, {
        opacity: 1,
        // strokeDasharray: 900,
        duration: 4, // Adjust the duration as needed
        ease: Linear.easeNone,
      });
      gsap.to(stringIn, {
        strokeDashoffset: 0,
        // strokeDasharray: 900,
        duration: 5, // Adjust the duration as needed
        ease: Linear.easeNone,
      });
    }
    if (array.length !== 0) {
      fullRange = Array.from({ length: 24 }, (_, i) => i + 1);
      outElementsArray = fullRange.filter(number => !array.includes(number));
    }
    if (outElementsArray.length !== 0) {
      for (let i = 0; i < outElementsArray.length; i++) {
        stringOut =
          stringOut + '.line' + outElementsArray[i].toString() + (i !== outElementsArray.length - 1 ? ',' : '');
        stringOutDots =
          stringOutDots + '.circle' + outElementsArray[i].toString() + (i !== outElementsArray.length - 1 ? ',' : '');
      }
      gsap.to(stringOut, {
        strokeDashoffset: 900,
        // strokeDasharray: 900,
        duration: 3, // Adjust the duration as needed
        ease: Linear.easeNone,
      });
      gsap.to(stringOutDots, {
        opacity: 0,
        // strokeDasharray: 900,
        duration: 4, // Adjust the duration as needed
        ease: Linear.easeNone,
      });
    }

    console.log(stringIn);
    console.log(stringOut);
    console.log(stringOutDots);
  };
  useEffect(() => {
    animateLines(lvl);
  }, [lvl]);
  return (
    <div className={`${styles.mircroscheme}`}>
      <svg width='1440' height='1024' viewBox='0 0 1440 1024' fill='none'>
        <g clipPath='url(#clip0_110_2)'>
          <rect width='1440' height='1024' fill='url(#pattern0)' fillOpacity='0.1' />
          <path
            className={`${styles.delay5} ${styles.line}  line1`}
            d='M147.5 493.5H85L37 445.5V428'
            stroke='url(#paint0_linear_110_2)'
          />
          <circle
            className={`${styles.delay4} ${styles.opacity} circle1`}
            cx='37'
            cy='426'
            r='2.25'
            transform='rotate(180 37 426)'
            stroke='#9B9793'
            strokeWidth='1.5'
          />
          <circle
            className={`${styles.delay3} ${styles.opacity} circle1`}
            cx='150'
            cy='493.5'
            r='2.25'
            transform='rotate(180 150 493.5)'
            stroke='#A5CFDC'
            strokeWidth='1.5'
          />
          <g opacity='0.3'>
            <path className={`${styles.delay3} ${styles.line}  line3`} d='M492.5 454L581 454L596 469' stroke='black' />
            <path
              className={`${styles.delay2} ${styles.opacity} circle3`}
              d='M599 466.91C597.843 466.91 596.722 467.311 595.827 468.045C594.933 468.779 594.321 469.801 594.095 470.935C593.869 472.07 594.044 473.248 594.59 474.269C595.136 475.289 596.019 476.088 597.088 476.531C598.157 476.973 599.347 477.03 600.454 476.694C601.561 476.357 602.517 475.647 603.159 474.684C603.801 473.722 604.089 472.566 603.974 471.415C603.86 470.263 603.349 469.187 602.53 468.37C601.593 467.435 600.324 466.91 599 466.91ZM599 473.91C598.605 473.91 598.219 473.794 597.89 473.575C597.561 473.355 597.304 473.044 597.152 472.679C597 472.314 596.96 471.913 597.036 471.525C597.112 471.137 597.302 470.78 597.58 470.5C597.766 470.314 597.986 470.167 598.229 470.066C598.472 469.965 598.732 469.914 598.995 469.914C599.258 469.914 599.518 469.965 599.761 470.066C600.004 470.167 600.224 470.314 600.41 470.5C600.783 470.875 600.992 471.382 600.992 471.91C600.992 472.439 600.783 472.945 600.41 473.32C600.037 473.696 599.53 473.908 599 473.91Z'
              fill='black'
            />
          </g>
          <path className={`${styles.delay3} ${styles.line}  line3`} d='M493 455H582L597 470' stroke='white' />
          <path
            className={`${styles.delay2} ${styles.opacity} circle3`}
            d='M600 467.91C598.843 467.91 597.722 468.311 596.827 469.045C595.933 469.779 595.321 470.801 595.095 471.935C594.869 473.07 595.044 474.248 595.59 475.269C596.136 476.289 597.019 477.088 598.088 477.531C599.157 477.973 600.347 478.03 601.454 477.694C602.561 477.357 603.517 476.647 604.159 475.684C604.801 474.722 605.089 473.566 604.974 472.415C604.86 471.263 604.349 470.187 603.53 469.37C602.593 468.435 601.324 467.91 600 467.91ZM600 474.91C599.605 474.91 599.219 474.794 598.89 474.575C598.561 474.355 598.304 474.044 598.152 473.679C598 473.314 597.96 472.913 598.036 472.525C598.112 472.137 598.302 471.78 598.58 471.5C598.766 471.314 598.986 471.167 599.229 471.066C599.472 470.965 599.732 470.914 599.995 470.914C600.258 470.914 600.518 470.965 600.761 471.066C601.004 471.167 601.224 471.314 601.41 471.5C601.783 471.875 601.992 472.382 601.992 472.91C601.992 473.439 601.783 473.945 601.41 474.32C601.037 474.696 600.53 474.908 600 474.91Z'
            fill='white'
          />
          <g opacity='0.4'>
            <path
              className={`${styles.delay2} ${styles.opacity} circle13`}
              d='M228.012 535C227.418 534.998 226.837 535.172 226.342 535.5C225.847 535.828 225.461 536.296 225.232 536.844C225.003 537.392 224.942 537.995 225.056 538.578C225.171 539.161 225.455 539.696 225.875 540.117C226.294 540.538 226.828 540.825 227.41 540.941C227.993 541.058 228.596 540.999 229.145 540.773C229.694 540.546 230.163 540.162 230.494 539.668C230.824 539.174 231 538.594 231 538C231 537.206 230.686 536.445 230.125 535.883C229.565 535.321 228.805 535.003 228.012 535ZM228.012 539.706C227.671 539.708 227.337 539.609 227.053 539.421C226.769 539.233 226.547 538.965 226.415 538.651C226.284 538.337 226.249 537.99 226.315 537.656C226.381 537.322 226.545 537.015 226.785 536.774C227.026 536.533 227.334 536.369 227.668 536.303C228.002 536.237 228.348 536.272 228.663 536.404C228.977 536.535 229.245 536.757 229.433 537.041C229.621 537.326 229.72 537.659 229.718 538C229.718 538.452 229.538 538.886 229.218 539.206C228.898 539.526 228.464 539.706 228.012 539.706Z'
              fill='#162029'
            />
            <path
              className={`${styles.delay3} ${styles.line}  line13`}
              d='M89 555.49L117 555.49L134.5 537.99L226 537.99'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay1} ${styles.opacity} circle2`}
              d='M238 247.988C237.998 248.582 238.172 249.163 238.5 249.658C238.828 250.153 239.296 250.539 239.844 250.768C240.392 250.997 240.995 251.058 241.578 250.944C242.161 250.829 242.696 250.545 243.117 250.125C243.538 249.706 243.825 249.172 243.941 248.59C244.058 248.007 243.999 247.404 243.773 246.855C243.546 246.306 243.162 245.837 242.668 245.506C242.174 245.176 241.594 245 241 245C240.206 245 239.445 245.314 238.883 245.875C238.321 246.435 238.003 247.195 238 247.988ZM242.706 247.988C242.708 248.329 242.609 248.663 242.421 248.947C242.233 249.231 241.965 249.453 241.651 249.585C241.337 249.716 240.99 249.751 240.656 249.685C240.322 249.619 240.015 249.455 239.774 249.215C239.533 248.974 239.369 248.666 239.303 248.332C239.237 247.998 239.272 247.652 239.404 247.337C239.535 247.023 239.757 246.755 240.041 246.567C240.326 246.379 240.659 246.28 241 246.282C241.452 246.282 241.886 246.462 242.206 246.782C242.526 247.102 242.706 247.536 242.706 247.988Z'
              fill='#162029'
            />
            <path
              className={`${styles.delay2} ${styles.line}  line2`}
              d='M255.49 407.5L255.49 356.5L240.99 342V250'
              stroke='#162029'
            />
          </g>
          <g opacity='0.3'>
            <path
              className={`${styles.delay3} ${styles.opacity} circle14`}
              d='M187.988 555.49C188.582 555.492 189.163 555.318 189.658 554.99C190.153 554.662 190.539 554.194 190.768 553.646C190.997 553.098 191.058 552.495 190.944 551.912C190.829 551.329 190.545 550.794 190.125 550.373C189.706 549.952 189.172 549.665 188.59 549.549C188.007 549.432 187.404 549.491 186.855 549.717C186.306 549.944 185.837 550.328 185.506 550.822C185.176 551.316 185 551.896 185 552.49C185 553.284 185.314 554.045 185.875 554.607C186.435 555.169 187.195 555.487 187.988 555.49ZM187.988 550.784C188.329 550.782 188.663 550.881 188.947 551.069C189.231 551.256 189.453 551.525 189.585 551.839C189.716 552.153 189.751 552.5 189.685 552.834C189.619 553.168 189.455 553.475 189.215 553.716C188.974 553.957 188.666 554.121 188.332 554.187C187.998 554.253 187.652 554.218 187.337 554.086C187.023 553.955 186.755 553.733 186.567 553.449C186.379 553.164 186.28 552.831 186.282 552.49C186.282 552.038 186.462 551.604 186.782 551.284C187.102 550.964 187.536 550.784 187.988 550.784Z'
              fill='#162029'
            />
            <path
              className={`${styles.delay4} ${styles.opacity} circle14`}
              d='M353.988 541C354.582 541.002 355.163 540.828 355.658 540.5C356.153 540.172 356.539 539.704 356.768 539.156C356.997 538.608 357.058 538.005 356.944 537.422C356.829 536.839 356.545 536.304 356.125 535.883C355.706 535.462 355.172 535.175 354.59 535.059C354.007 534.942 353.404 535.001 352.855 535.227C352.306 535.454 351.837 535.838 351.506 536.332C351.176 536.826 351 537.406 351 538C351 538.794 351.314 539.555 351.875 540.117C352.435 540.679 353.195 540.997 353.988 541ZM353.988 536.294C354.329 536.292 354.663 536.391 354.947 536.579C355.231 536.767 355.453 537.035 355.585 537.349C355.716 537.663 355.751 538.01 355.685 538.344C355.619 538.678 355.455 538.985 355.215 539.226C354.974 539.467 354.666 539.631 354.332 539.697C353.998 539.763 353.652 539.728 353.337 539.596C353.023 539.465 352.755 539.243 352.567 538.959C352.379 538.674 352.28 538.341 352.282 538C352.282 537.548 352.462 537.114 352.782 536.794C353.102 536.474 353.536 536.294 353.988 536.294Z'
              fill='#162029'
            />
            <path
              className={`${styles.delay5} ${styles.line}  line14`}
              d='M351 538L296.5 538L282 552.5L190 552.5'
              stroke='#162029'
            />
          </g>
          <path
            className={`${styles.delay2} ${styles.line}  line3`}
            d='M450 433.5L540.5 433.5L555.5 421L590 421'
            stroke='url(#paint1_linear_110_2)'
          />
          <path
            className={`${styles.delay1} ${styles.opacity} circle3`}
            d='M592.012 418C591.418 417.998 590.837 418.172 590.342 418.5C589.847 418.828 589.461 419.296 589.232 419.844C589.003 420.392 588.942 420.995 589.056 421.578C589.171 422.161 589.455 422.696 589.875 423.117C590.294 423.538 590.828 423.825 591.41 423.941C591.993 424.058 592.597 423.999 593.145 423.773C593.694 423.546 594.163 423.162 594.494 422.668C594.824 422.174 595 421.594 595 421C595 420.206 594.686 419.445 594.126 418.883C593.565 418.321 592.805 418.003 592.012 418ZM592.012 422.706C591.671 422.708 591.337 422.609 591.053 422.421C590.769 422.233 590.547 421.965 590.415 421.651C590.284 421.337 590.249 420.99 590.315 420.656C590.381 420.322 590.545 420.015 590.786 419.774C591.026 419.533 591.334 419.369 591.668 419.303C592.002 419.237 592.348 419.272 592.663 419.404C592.977 419.535 593.245 419.757 593.433 420.041C593.621 420.326 593.72 420.659 593.718 421C593.718 421.452 593.538 421.886 593.218 422.206C592.898 422.526 592.464 422.706 592.012 422.706Z'
            fill='#D6C3BA'
          />
          <path
            className={`${styles.delay1} ${styles.opacity} circle3`}
            d='M448.012 430C447.418 429.998 446.837 430.172 446.342 430.5C445.847 430.828 445.461 431.296 445.232 431.844C445.003 432.392 444.942 432.995 445.056 433.578C445.171 434.161 445.455 434.696 445.875 435.117C446.294 435.538 446.828 435.825 447.41 435.941C447.993 436.058 448.597 435.999 449.145 435.773C449.694 435.546 450.163 435.162 450.494 434.668C450.824 434.174 451 433.594 451 433C451 432.206 450.686 431.445 450.126 430.883C449.565 430.321 448.805 430.003 448.012 430ZM448.012 434.706C447.671 434.708 447.337 434.609 447.053 434.421C446.769 434.233 446.547 433.965 446.415 433.651C446.284 433.337 446.249 432.99 446.315 432.656C446.381 432.322 446.545 432.015 446.786 431.774C447.026 431.533 447.334 431.369 447.668 431.303C448.002 431.237 448.348 431.272 448.663 431.404C448.977 431.535 449.245 431.757 449.433 432.041C449.621 432.326 449.72 432.659 449.718 433C449.718 433.452 449.538 433.886 449.218 434.206C448.898 434.526 448.464 434.706 448.012 434.706Z'
            fill='#CBC3BA'
          />
          <path
            className={`${styles.delay4} ${styles.line}  line2`}
            d='M239.5 196.5L239.5 227.5L252 242.5L252 277'
            stroke='#A6D0DD'
          />
          <path
            className={`${styles.delay3} ${styles.opacity} circle2`}
            d='M255 279.012C255.002 278.418 254.828 277.837 254.5 277.342C254.172 276.847 253.704 276.461 253.156 276.232C252.608 276.003 252.005 275.942 251.422 276.056C250.839 276.171 250.304 276.455 249.883 276.875C249.462 277.294 249.175 277.828 249.059 278.41C248.942 278.993 249.001 279.596 249.227 280.145C249.454 280.694 249.838 281.163 250.332 281.494C250.826 281.824 251.406 282 252 282C252.794 282 253.555 281.686 254.117 281.125C254.679 280.565 254.997 279.805 255 279.012ZM250.294 279.012C250.292 278.671 250.391 278.337 250.579 278.053C250.767 277.769 251.035 277.547 251.349 277.415C251.663 277.284 252.01 277.249 252.344 277.315C252.678 277.381 252.985 277.545 253.226 277.785C253.467 278.026 253.631 278.334 253.697 278.668C253.763 279.002 253.728 279.348 253.596 279.663C253.465 279.977 253.243 280.245 252.959 280.433C252.674 280.621 252.341 280.72 252 280.718C251.548 280.718 251.114 280.538 250.794 280.218C250.474 279.898 250.294 279.464 250.294 279.012Z'
            fill='#A6D0DD'
          />
          <path
            className={`${styles.delay2} ${styles.opacity} circle2`}
            d='M243 194.012C243.002 193.418 242.828 192.837 242.5 192.342C242.172 191.847 241.704 191.461 241.156 191.232C240.608 191.003 240.005 190.942 239.422 191.056C238.839 191.171 238.304 191.455 237.883 191.875C237.462 192.294 237.175 192.828 237.059 193.41C236.942 193.993 237.001 194.596 237.227 195.145C237.454 195.694 237.838 196.163 238.332 196.494C238.826 196.824 239.406 197 240 197C240.794 197 241.555 196.686 242.117 196.125C242.679 195.565 242.997 194.805 243 194.012ZM238.294 194.012C238.292 193.671 238.391 193.337 238.579 193.053C238.767 192.769 239.035 192.547 239.349 192.415C239.663 192.284 240.01 192.249 240.344 192.315C240.678 192.381 240.985 192.545 241.226 192.785C241.467 193.026 241.631 193.334 241.697 193.668C241.763 194.002 241.728 194.348 241.596 194.663C241.465 194.977 241.243 195.245 240.959 195.433C240.674 195.621 240.341 195.72 240 195.718C239.548 195.718 239.114 195.538 238.794 195.218C238.474 194.898 238.294 194.464 238.294 194.012Z'
            fill='#A6D0DD'
          />
          <g opacity='0.4'>
            <path className={`${styles.delay5} ${styles.line}  line13`} d='M112 716L287 716' stroke='#162029' />
            <path
              className={`${styles.delay4} ${styles.opacity} circle13`}
              d='M289.012 713C288.418 712.998 287.837 713.172 287.342 713.5C286.847 713.828 286.461 714.296 286.232 714.844C286.003 715.392 285.942 715.995 286.056 716.578C286.171 717.161 286.455 717.696 286.875 718.117C287.294 718.538 287.828 718.825 288.41 718.941C288.993 719.058 289.596 718.999 290.145 718.773C290.694 718.546 291.163 718.162 291.494 717.668C291.824 717.174 292 716.594 292 716C292 715.206 291.686 714.445 291.125 713.883C290.565 713.321 289.805 713.003 289.012 713ZM289.012 717.706C288.671 717.708 288.337 717.609 288.053 717.421C287.769 717.233 287.547 716.965 287.415 716.651C287.284 716.337 287.249 715.99 287.315 715.656C287.381 715.322 287.545 715.015 287.785 714.774C288.026 714.533 288.334 714.369 288.668 714.303C289.002 714.237 289.348 714.272 289.663 714.404C289.977 714.535 290.245 714.757 290.433 715.041C290.621 715.326 290.72 715.659 290.718 716C290.718 716.452 290.538 716.886 290.218 717.206C289.898 717.526 289.464 717.706 289.012 717.706Z'
              fill='#162029'
            />
            <path
              className={`${styles.delay3} ${styles.opacity} circle13`}
              d='M109.012 713C108.418 712.998 107.837 713.172 107.342 713.5C106.847 713.828 106.461 714.296 106.232 714.844C106.003 715.392 105.942 715.995 106.056 716.578C106.171 717.161 106.455 717.696 106.875 718.117C107.294 718.538 107.828 718.825 108.41 718.941C108.993 719.058 109.596 718.999 110.145 718.773C110.694 718.546 111.163 718.162 111.494 717.668C111.824 717.174 112 716.594 112 716C112 715.206 111.686 714.445 111.125 713.883C110.565 713.321 109.805 713.003 109.012 713ZM109.012 717.706C108.671 717.708 108.337 717.609 108.053 717.421C107.769 717.233 107.547 716.965 107.415 716.651C107.284 716.337 107.249 715.99 107.315 715.656C107.381 715.322 107.545 715.015 107.785 714.774C108.026 714.533 108.334 714.369 108.668 714.303C109.002 714.237 109.348 714.272 109.663 714.404C109.977 714.535 110.245 714.757 110.433 715.041C110.621 715.326 110.72 715.659 110.718 716C110.718 716.452 110.538 716.886 110.218 717.206C109.898 717.526 109.464 717.706 109.012 717.706Z'
              fill='#162029'
            />
          </g>
          <path
            className={`${styles.delay1} ${styles.opacity} circle1`}
            d='M110.012 427C109.418 426.998 108.837 427.172 108.342 427.5C107.847 427.828 107.461 428.296 107.232 428.844C107.003 429.392 106.942 429.995 107.056 430.578C107.171 431.161 107.455 431.696 107.875 432.117C108.294 432.538 108.828 432.825 109.41 432.941C109.993 433.058 110.596 432.999 111.145 432.773C111.694 432.546 112.163 432.162 112.494 431.668C112.824 431.174 113 430.594 113 430C113 429.206 112.686 428.445 112.125 427.883C111.565 427.321 110.805 427.003 110.012 427ZM110.012 431.706C109.671 431.708 109.337 431.609 109.053 431.421C108.769 431.233 108.547 430.965 108.415 430.651C108.284 430.337 108.249 429.99 108.315 429.656C108.381 429.322 108.545 429.015 108.785 428.774C109.026 428.533 109.334 428.369 109.668 428.303C110.002 428.237 110.348 428.272 110.663 428.404C110.977 428.535 111.245 428.757 111.433 429.041C111.621 429.326 111.72 429.659 111.718 430C111.718 430.452 111.538 430.886 111.218 431.206C110.898 431.526 110.464 431.706 110.012 431.706Z'
            fill='#A6D0DD'
          />
          <path
            className={`${styles.delay2} ${styles.line}  line1`}
            d='M112 430L177 430L190 442L250.5 442'
            stroke='url(#paint2_linear_110_2)'
          />
          <path
            className={`${styles.delay1} ${styles.opacity} circle1`}
            d='M252.512 439.01C251.918 439.008 251.337 439.182 250.842 439.51C250.347 439.838 249.961 440.306 249.732 440.854C249.503 441.402 249.442 442.005 249.556 442.588C249.671 443.171 249.956 443.706 250.375 444.127C250.794 444.548 251.328 444.835 251.911 444.951C252.493 445.068 253.097 445.009 253.645 444.783C254.194 444.556 254.664 444.172 254.994 443.678C255.324 443.184 255.5 442.604 255.5 442.01C255.5 441.216 255.186 440.455 254.626 439.893C254.066 439.331 253.306 439.013 252.512 439.01ZM252.512 443.716C252.171 443.718 251.837 443.619 251.553 443.431C251.269 443.244 251.047 442.975 250.916 442.661C250.784 442.347 250.749 442 250.815 441.666C250.881 441.332 251.045 441.025 251.286 440.784C251.527 440.543 251.834 440.379 252.168 440.313C252.502 440.247 252.849 440.282 253.163 440.414C253.477 440.545 253.745 440.767 253.933 441.051C254.121 441.336 254.22 441.669 254.218 442.01C254.218 442.462 254.038 442.896 253.718 443.216C253.398 443.536 252.964 443.716 252.512 443.716Z'
            fill='#9D9A96'
          />
          <g opacity='0.2'>
            <path
              className={`${styles.delay3} ${styles.opacity} circle3`}
              d='M644.512 454.51C643.918 454.508 643.337 454.682 642.842 455.01C642.347 455.338 641.961 455.806 641.732 456.354C641.503 456.902 641.442 457.505 641.556 458.088C641.671 458.671 641.955 459.206 642.375 459.627C642.794 460.048 643.328 460.335 643.91 460.451C644.493 460.568 645.097 460.509 645.645 460.283C646.194 460.056 646.663 459.672 646.994 459.178C647.324 458.684 647.5 458.104 647.5 457.51C647.5 456.716 647.186 455.955 646.626 455.393C646.065 454.831 645.305 454.513 644.512 454.51ZM644.512 459.216C644.171 459.218 643.837 459.119 643.553 458.931C643.269 458.744 643.047 458.475 642.915 458.161C642.784 457.847 642.749 457.5 642.815 457.166C642.881 456.832 643.045 456.525 643.286 456.284C643.526 456.043 643.834 455.879 644.168 455.813C644.502 455.747 644.848 455.782 645.163 455.914C645.477 456.045 645.745 456.267 645.933 456.551C646.121 456.836 646.22 457.169 646.218 457.51C646.218 457.962 646.038 458.396 645.718 458.716C645.398 459.036 644.964 459.216 644.512 459.216Z'
              fill='black'
            />
            <path
              className={`${styles.delay4} ${styles.opacity} circle3`}
              d='M368.012 439C367.418 438.998 366.837 439.172 366.342 439.5C365.847 439.828 365.461 440.296 365.232 440.844C365.003 441.392 364.942 441.995 365.056 442.578C365.171 443.161 365.455 443.696 365.875 444.117C366.294 444.538 366.828 444.825 367.41 444.941C367.993 445.058 368.597 444.999 369.145 444.773C369.694 444.546 370.163 444.162 370.494 443.668C370.824 443.174 371 442.594 371 442C371 441.206 370.686 440.445 370.126 439.883C369.565 439.321 368.805 439.003 368.012 439ZM368.012 443.706C367.671 443.708 367.337 443.609 367.053 443.421C366.769 443.233 366.547 442.965 366.415 442.651C366.284 442.337 366.249 441.99 366.315 441.656C366.381 441.322 366.545 441.015 366.786 440.774C367.026 440.533 367.334 440.369 367.668 440.303C368.002 440.237 368.348 440.272 368.663 440.404C368.977 440.535 369.245 440.757 369.433 441.041C369.621 441.326 369.72 441.659 369.718 442C369.718 442.452 369.538 442.886 369.218 443.206C368.898 443.526 368.464 443.706 368.012 443.706Z'
              fill='black'
            />
            <path
              className={`${styles.delay5} ${styles.line}  line3`}
              d='M370.5 442L586 442L602 457.5L643 457.5'
              stroke='black'
            />
          </g>
          <path
            className={`${styles.delay4} ${styles.line}  line15`}
            d='M536 532H624.5L655.5 563V584'
            stroke='url(#paint3_linear_110_2)'
          />
          <path
            className={`${styles.delay3} ${styles.line}  line5`}
            d='M974 490H1058.5L1089.5 521'
            stroke='url(#paint4_linear_110_2)'
          />
          <path
            className={`${styles.delay2} ${styles.line}  line1`}
            opacity='0.4'
            d='M-4 361.5H132.5L164.5 393.5V409.5'
            stroke='url(#paint5_linear_110_2)'
          />
          <path
            className={`${styles.delay5} ${styles.line}  line15`}
            d='M539.5 519H630L670.5 562V582.5'
            stroke='url(#paint6_linear_110_2)'
          />
          <path
            className={`${styles.delay4} ${styles.line}  line5`}
            d='M973.5 478H1064L1104.5 521'
            stroke='url(#paint7_linear_110_2)'
          />
          <path
            className={`${styles.delay3} ${styles.line}  line1`}
            opacity='0.4'
            d='M-13 351H135.5L172.5 389V418'
            stroke='url(#paint8_linear_110_2)'
          />
          <path
            className={`${styles.delay4} ${styles.line}  line1`}
            d='M-4 341.5L141.5 341.5L180 383.5V432'
            stroke='url(#paint9_linear_110_2)'
          />
          <path
            className={`${styles.delay3} ${styles.line}  line2`}
            d='M208 429H276.5L312 464V472'
            stroke='url(#paint10_linear_110_2)'
          />
          <circle
            className={`${styles.delay2} ${styles.opacity} circle2`}
            cx='312'
            cy='475'
            r='2.25'
            stroke='#A7D1DE'
            strokeWidth='1.5'
          />
          <circle
            className={`${styles.delay1} ${styles.opacity} circle2`}
            cx='206'
            cy='429'
            r='2.25'
            stroke='#9E9C97'
            strokeWidth='1.5'
          />
          <g opacity='0.4'>
            <path
              className={`${styles.delay5} ${styles.line}  line15`}
              d='M475.5 545.5H620.5L641 565.5V572'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay4} ${styles.opacity} circle15`}
              cx='641'
              cy='574'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle15`}
              cx='473'
              cy='545'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <path
            className={`${styles.delay3} ${styles.line}  line13`}
            d='M17.5 604L17.5 684.5L37.5 705L44 705'
            stroke='url(#paint11_linear_110_2)'
          />
          <circle
            className={`${styles.delay1} ${styles.opacity} circle13`}
            cx='3'
            cy='3'
            r='2.25'
            transform='matrix(-4.37114e-08 1 1 4.37114e-08 43 702)'
            stroke='#A19D99'
            strokeWidth='1.5'
          />
          <circle
            className={`${styles.delay2} ${styles.opacity} circle13`}
            cx='3'
            cy='3'
            r='2.25'
            transform='matrix(-4.37114e-08 1 1 4.37114e-08 15 599)'
            stroke='#A6D0DD'
            strokeWidth='1.5'
          />
          <path
            className={`${styles.delay3} ${styles.line}  line16`}
            d='M710 995.5L790.5 995.5L811 975.5L811 969'
            stroke='#A6D0DD'
          />
          <circle
            className={`${styles.delay2} ${styles.opacity} circle16`}
            cx='3'
            cy='3'
            r='2.25'
            transform='matrix(1 -8.74228e-08 -8.74228e-08 -1 808 970)'
            stroke='#A6D0DD'
            strokeWidth='1.5'
          />
          <circle
            className={`${styles.delay1} ${styles.opacity} circle16`}
            cx='3'
            cy='3'
            r='2.25'
            transform='matrix(1 -8.74228e-08 -8.74228e-08 -1 705 998)'
            stroke='#A6D0DD'
            strokeWidth='1.5'
          />
          <path
            className={`${styles.delay2} ${styles.line}  line4`}
            d='M743 107.5L823.5 107.5L844 127.5L844 134'
            stroke='#A6D0DD'
          />
          <circle
            className={`${styles.delay1} ${styles.opacity} circle4`}
            cx='844'
            cy='136'
            r='2.25'
            stroke='#A6D0DD'
            strokeWidth='1.5'
          />
          <circle
            className={`${styles.delay1} ${styles.opacity} circle4`}
            cx='741'
            cy='108'
            r='2.25'
            stroke='#A6D0DD'
            strokeWidth='1.5'
          />
          <path
            className={`${styles.delay5} ${styles.line}  line14`}
            d='M222 740H304.5L349.5 696V680'
            stroke='url(#paint12_linear_110_2)'
          />
          <circle
            className={`${styles.delay4} ${styles.opacity} circle14`}
            cx='3'
            cy='3'
            r='2.25'
            transform='matrix(1 0 0 -1 347 681)'
            stroke='#A6D0DD'
            strokeWidth='1.5'
          />
          <g opacity='0.4'>
            <circle className={`${styles.delay1} ${styles.opacity} circle2`} cx='329' cy='423' r='4' fill='#162029' />
            <circle className={`${styles.delay2} ${styles.opacity} circle2`} cx='341' cy='423' r='4' fill='#162029' />
            <circle className={`${styles.delay3} ${styles.opacity} circle2`} cx='353' cy='423' r='4' fill='#162029' />
            <circle className={`${styles.delay4} ${styles.opacity} circle2`} cx='365' cy='423' r='4' fill='#162029' />
            <circle className={`${styles.delay5} ${styles.opacity} circle2`} cx='377' cy='423' r='4' fill='#162029' />
          </g>
          <g opacity='0.4'>
            <circle className={`${styles.delay1} ${styles.opacity} circle4`} cx='694' cy='265' r='4' fill='#162029' />
            <circle className={`${styles.delay2} ${styles.opacity} circle4`} cx='706' cy='265' r='4' fill='#162029' />
            <circle className={`${styles.delay3} ${styles.opacity} circle4`} cx='718' cy='265' r='4' fill='#162029' />
            <circle className={`${styles.delay4} ${styles.opacity} circle4`} cx='730' cy='265' r='4' fill='#162029' />
            <circle className={`${styles.delay5} ${styles.opacity} circle4`} cx='742' cy='265' r='4' fill='#162029' />
          </g>
          <g opacity='0.4'>
            <circle className={`${styles.delay1} ${styles.opacity} circle4`} cx='694' cy='278' r='4' fill='#162029' />
            <circle className={`${styles.delay2} ${styles.opacity} circle4`} cx='706' cy='278' r='4' fill='#162029' />
            <circle className={`${styles.delay3} ${styles.opacity} circle4`} cx='718' cy='278' r='4' fill='#162029' />
            <circle className={`${styles.delay4} ${styles.opacity} circle4`} cx='730' cy='278' r='4' fill='#FF6969' />
            <circle className={`${styles.delay5} ${styles.opacity} circle4`} cx='742' cy='278' r='4' fill='#162029' />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay1} ${styles.opacity} circle15`}
              cx='568'
              cy='780'
              r='4'
              transform='rotate(-90 568 780)'
              fill='#162029'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle15`}
              cx='568'
              cy='768'
              r='4'
              transform='rotate(-90 568 768)'
              fill='#162029'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle15`}
              cx='568'
              cy='756'
              r='4'
              transform='rotate(-90 568 756)'
              fill='#162029'
            />
            <circle
              className={`${styles.delay4} ${styles.opacity} circle15`}
              cx='568'
              cy='744'
              r='4'
              transform='rotate(-90 568 744)'
              fill='#162029'
            />
            <circle
              className={`${styles.delay5} ${styles.opacity} circle15`}
              cx='568'
              cy='732'
              r='4'
              transform='rotate(-90 568 732)'
              fill='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay5} ${styles.opacity} circle13`}
              cx='41'
              cy='930'
              r='4'
              transform='rotate(-90 41 930)'
              fill='#162029'
            />
            <circle
              className={`${styles.delay4} ${styles.opacity} circle13`}
              cx='41'
              cy='918'
              r='4'
              transform='rotate(-90 41 918)'
              fill='#162029'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle13`}
              cx='41'
              cy='906'
              r='4'
              transform='rotate(-90 41 906)'
              fill='#162029'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle13`}
              cx='41'
              cy='894'
              r='4'
              transform='rotate(-90 41 894)'
              fill='#162029'
            />
            <circle
              className={`${styles.delay1} ${styles.opacityH} circle13`}
              cx='41'
              cy='882'
              r='4'
              transform='rotate(-90 41 882)'
              fill='#162029'
            />
          </g>
          <circle
            className={`${styles.delay1} ${styles.opacityH} circle13`}
            opacity='0.3'
            cx='54'
            cy='930'
            r='4'
            transform='rotate(-90 54 930)'
            fill='#162029'
          />
          <circle
            className={`${styles.delay2} ${styles.opacityH} circle13`}
            opacity='0.3'
            cx='54'
            cy='918'
            r='4'
            transform='rotate(-90 54 918)'
            fill='#162029'
          />
          <circle
            className={`${styles.delay3} ${styles.opacityH} circle13`}
            cx='54'
            cy='906'
            r='4'
            transform='rotate(-90 54 906)'
            fill='#A6D0DD'
          />
          <circle
            className={`${styles.delay4} ${styles.opacityH} circle13`}
            opacity='0.3'
            cx='54'
            cy='894'
            r='4'
            transform='rotate(-90 54 894)'
            fill='#162029'
          />
          <circle
            className={`${styles.delay5} ${styles.opacityH} circle13`}
            opacity='0.3'
            cx='54'
            cy='882'
            r='4'
            transform='rotate(-90 54 882)'
            fill='#162029'
          />
          <circle
            className={`${styles.delay4} ${styles.opacityH} circle14`}
            opacity='0.3'
            cx='143'
            cy='439'
            r='3'
            fill='#162029'
          />
          <circle
            className={`${styles.delay3} ${styles.opacityH} circle14`}
            opacity='0.4'
            cx='153'
            cy='439'
            r='3'
            fill='#162029'
          />
          <circle
            className={`${styles.delay2} ${styles.opacityH} circle14`}
            opacity='0.3'
            cx='163'
            cy='439'
            r='3'
            fill='#162029'
          />
          <circle
            className={`${styles.delay1} ${styles.opacityH} circle14`}
            opacity='0.3'
            cx='173'
            cy='439'
            r='3'
            fill='#162029'
          />
          <circle
            className={`${styles.delay1} ${styles.opacityH} circle14`}
            opacity='0.3'
            cx='428'
            cy='691'
            r='3'
            fill='#162029'
          />
          <circle
            className={`${styles.delay2} ${styles.opacityH} circle14`}
            opacity='0.4'
            cx='438'
            cy='691'
            r='3'
            fill='#162029'
          />
          <circle
            className={`${styles.delay3} ${styles.opacityH} circle14`}
            opacity='0.3'
            cx='448'
            cy='691'
            r='3'
            fill='#162029'
          />
          <circle className={`${styles.delay4} ${styles.opacity} circle14`} cx='458' cy='691' r='3' fill='#A6D0DD' />
          <circle
            className={`${styles.delay4} ${styles.opacityH} circle1`}
            opacity='0.3'
            cx='220'
            cy='284'
            r='3'
            transform='rotate(-90 220 284)'
            fill='#162029'
          />
          <circle
            className={`${styles.delay3} ${styles.opacityH} circle1`}
            opacity='0.4'
            cx='220'
            cy='274'
            r='3'
            transform='rotate(-90 220 274)'
            fill='#162029'
          />
          <circle
            className={`${styles.delay2} ${styles.opacityH} circle1`}
            opacity='0.3'
            cx='220'
            cy='264'
            r='3'
            transform='rotate(-90 220 264)'
            fill='#162029'
          />
          <circle
            className={`${styles.delay1} ${styles.opacityH} circle1`}
            cx='220'
            cy='254'
            r='3'
            transform='rotate(-90 220 254)'
            fill='#A6D0DD'
          />
          <circle
            className={`${styles.delay1} ${styles.opacity} circle4`}
            opacity='0.3'
            cx='936'
            cy='457'
            r='3'
            transform='rotate(90 936 457)'
            fill='#162029'
          />
          <circle
            className={`${styles.delay2} ${styles.opacity} circle4`}
            opacity='0.4'
            cx='936'
            cy='467'
            r='3'
            transform='rotate(90 936 467)'
            fill='#162029'
          />
          <circle
            className={`${styles.delay3} ${styles.opacity} circle4`}
            opacity='0.3'
            cx='936'
            cy='477'
            r='3'
            transform='rotate(90 936 477)'
            fill='#162029'
          />
          <circle
            className={`${styles.delay4} ${styles.opacity} circle4`}
            cx='936'
            cy='487'
            r='3'
            transform='rotate(90 936 487)'
            fill='#A6D0DD'
          />
          <circle
            className={`${styles.delay1} ${styles.opacityH} circle13`}
            opacity='0.3'
            cx='83'
            cy='782'
            r='3'
            fill='#162029'
          />
          <circle
            className={`${styles.delay2} ${styles.opacityH} circle13`}
            opacity='0.4'
            cx='93'
            cy='782'
            r='3'
            fill='#162029'
          />
          <circle
            className={`${styles.delay3} ${styles.opacityH} circle13`}
            opacity='0.3'
            cx='103'
            cy='782'
            r='3'
            fill='#162029'
          />
          <circle
            className={`${styles.delay4} ${styles.opacityH} circle13`}
            opacity='0.3'
            cx='113'
            cy='782'
            r='3'
            fill='#162029'
          />
          <circle
            className={`${styles.delay5} ${styles.opacityH} circle13`}
            opacity='0.3'
            cx='309'
            cy='549'
            r='3'
            fill='#162029'
          />
          <circle
            className={`${styles.delay3} ${styles.opacityH} circle14`}
            opacity='0.4'
            cx='319'
            cy='549'
            r='3'
            fill='#162029'
          />
          <circle
            className={`${styles.delay2} ${styles.opacityH} circle14`}
            opacity='0.3'
            cx='329'
            cy='549'
            r='3'
            fill='#162029'
          />
          <circle
            className={`${styles.delay1} ${styles.opacityH} circle14`}
            opacity='0.3'
            cx='339'
            cy='549'
            r='3'
            fill='#162029'
          />
          <circle
            className={`${styles.delay4} ${styles.opacityH} circle14`}
            opacity='0.3'
            cx='309'
            cy='557'
            r='3'
            fill='#162029'
          />
          <circle
            className={`${styles.delay3} ${styles.opacityH} circle14`}
            opacity='0.4'
            cx='319'
            cy='557'
            r='3'
            fill='#162029'
          />
          <circle
            className={`${styles.delay2} ${styles.opacityH} circle14`}
            opacity='0.3'
            cx='329'
            cy='557'
            r='3'
            fill='#162029'
          />
          <circle
            className={`${styles.delay1} ${styles.opacityH} circle14`}
            opacity='0.3'
            cx='339'
            cy='557'
            r='3'
            fill='#162029'
          />
          <circle
            className={`${styles.delay3} ${styles.opacityH} circle13`}
            opacity='0.3'
            cx='83'
            cy='791'
            r='3'
            fill='#162029'
          />
          <circle
            className={`${styles.delay4} ${styles.opacityH} circle13`}
            opacity='0.2'
            cx='93'
            cy='791'
            r='3'
            fill='#162029'
          />
          <circle
            className={`${styles.delay5} ${styles.opacityH} circle13`}
            opacity='0.3'
            cx='103'
            cy='791'
            r='3'
            fill='#162029'
          />
          <circle
            className={`${styles.delay1} ${styles.opacityH} circle17`}
            opacity='0.3'
            cx='1086'
            cy='784'
            r='3'
            transform='rotate(-90 1086 784)'
            fill='#162029'
          />
          <circle
            className={`${styles.delay2} ${styles.opacityH} circle17`}
            opacity='0.4'
            cx='1086'
            cy='774'
            r='3'
            transform='rotate(-90 1086 774)'
            fill='#162029'
          />
          <circle
            className={`${styles.delay3} ${styles.opacityH} circle17`}
            opacity='0.3'
            cx='1086'
            cy='764'
            r='3'
            transform='rotate(-90 1086 764)'
            fill='#162029'
          />
          <circle
            className={`${styles.delay4} ${styles.opacityH} circle17`}
            opacity='0.3'
            cx='1086'
            cy='754'
            r='3'
            transform='rotate(-90 1086 754)'
            fill='#162029'
          />
          <g opacity='0.4'>
            <circle
              className={`${styles.delay3} ${styles.opacity} circle2`}
              cx='372'
              cy='368'
              r='2.25'
              stroke='#FF6969'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay4} ${styles.opacity} circle2`}
              cx='372'
              cy='404'
              r='2.25'
              stroke='#FF6969'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay5} ${styles.line}  line2`}
              d='M372 370.5C372 396.1 372 402.5 372 402.5'
              stroke='#FF6969'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay1} ${styles.opacity} circle13`}
              cx='151'
              cy='557'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle13`}
              cx='151'
              cy='574'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay3} ${styles.line}  line13`}
              d='M151 560C151 569.6 151 572 151 572'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay3} ${styles.opacity} circle13`}
              cx='160'
              cy='544'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay4} ${styles.opacity} circle13`}
              cx='160'
              cy='561'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay5} ${styles.line}  line13`}
              d='M160 547C160 556.6 160 559 160 559'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay2} ${styles.opacity} circle1`}
              cx='98'
              cy='429'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle1`}
              cx='98'
              cy='465'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay4} ${styles.line}  line1`}
              d='M98 431.5C98 457.1 98 463.5 98 463.5'
              stroke='black'
            />
          </g>
          <circle
            className={`${styles.delay3} ${styles.opacity} circle13`}
            cx='55'
            cy='725'
            r='2.25'
            stroke='#A6D0DD'
            strokeWidth='1.5'
          />
          <circle
            className={`${styles.delay4} ${styles.opacity} circle13`}
            cx='55'
            cy='761'
            r='2.25'
            stroke='#A6D0DD'
            strokeWidth='1.5'
          />
          <path
            className={`${styles.delay5} ${styles.line}  line13`}
            d='M55 727.5C55 753.1 55 759.5 55 759.5'
            stroke='#A6D0DD'
          />
          <g opacity='0.4'>
            <circle
              className={`${styles.delay2} ${styles.opacity} circle1`}
              cx='110'
              cy='442'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay1} ${styles.opacity} circle1`}
              cx='110'
              cy='465'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay2} ${styles.line}  line1`}
              d='M110 445C110 459.4 110 463 110 463'
              stroke='black'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay3} ${styles.opacity} circle1`}
              cx='85'
              cy='429'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay4} ${styles.opacity} circle1`}
              cx='85'
              cy='445'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay5} ${styles.line}  line1`}
              d='M85 432C85 440.8 85 443 85 443'
              stroke='black'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay3} ${styles.opacity} circle13`}
              cx='46'
              cy='716'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle13`}
              cx='46'
              cy='732'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay5} ${styles.line}  line13`}
              d='M46 719C46 727.8 46 730 46 730'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay4} ${styles.opacity} circle16`}
              cx='885'
              cy='684'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle16`}
              cx='885'
              cy='720'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay5} ${styles.line}  line16`}
              d='M885 686.5C885 712.1 885 718.5 885 718.5'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay1} ${styles.opacity} circle16`}
              cx='876'
              cy='675'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle16`}
              cx='876'
              cy='691'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay3} ${styles.line}  line16`}
              d='M876 678C876 686.8 876 689 876 689'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay4} ${styles.opacity} circle15`}
              cx='717'
              cy='742'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle15`}
              cx='717'
              cy='778'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay5} ${styles.line}  line15`}
              d='M717 744.5C717 770.1 717 776.5 717 776.5'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay1} ${styles.opacity} circle15`}
              cx='646'
              cy='912'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle15`}
              cx='646'
              cy='934'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay3} ${styles.line}  line15`}
              d='M646 915C646 928.6 646 932 646 932'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay2} ${styles.opacity} circle15`}
              cx='637'
              cy='928'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle15`}
              cx='637'
              cy='944'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay4} ${styles.line}  line15`}
              d='M637 931C637 939.8 637 942 637 942'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay2} ${styles.opacity} circle2`}
              cx='360'
              cy='376'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle2`}
              cx='360'
              cy='412'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay4} ${styles.line}  line2`}
              d='M360 378.5C360 404.1 360 410.5 360 410.5'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay1} ${styles.opacity} circle1`}
              cx='49'
              cy='312'
              r='2.25'
              transform='rotate(180 49 312)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle1`}
              cx='49'
              cy='295'
              r='2.25'
              transform='rotate(180 49 295)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay3} ${styles.line}  line1`}
              d='M49 309C49 299.4 49 297 49 297'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay3} ${styles.opacity} circle1`}
              cx='49'
              cy='287'
              r='2.25'
              transform='rotate(180 49 287)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay4} ${styles.opacity} circle1`}
              cx='49'
              cy='251'
              r='2.25'
              transform='rotate(180 49 251)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay5} ${styles.line}  line1`}
              d='M49 284.5C49 258.9 49 252.5 49 252.5'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay2} ${styles.opacity} circle1`}
              cx='31'
              cy='306'
              r='2.25'
              transform='rotate(180 31 306)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle1`}
              cx='31'
              cy='270'
              r='2.25'
              transform='rotate(180 31 270)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay4} ${styles.line}  line1`}
              d='M31 303.5C31 277.9 31 271.5 31 271.5'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay2} ${styles.opacity} circle1`}
              cx='40'
              cy='316'
              r='2.25'
              transform='rotate(180 40 316)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle1`}
              cx='40'
              cy='254'
              r='2.25'
              transform='rotate(180 40 254)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay4} ${styles.line}  line1`}
              d='M40 314C40 267.6 40 256 40 256'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay1} ${styles.opacity} circle4`}
              cx='827'
              cy='363'
              r='2.25'
              transform='rotate(180 827 363)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay1} ${styles.opacity} circle4`}
              cx='827'
              cy='346'
              r='2.25'
              transform='rotate(180 827 346)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay1} ${styles.line}  line4`}
              d='M827 360C827 350.4 827 348 827 348'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay1} ${styles.opacity} circle4`}
              cx='827'
              cy='338'
              r='2.25'
              transform='rotate(180 827 338)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay1} ${styles.opacity} circle4`}
              cx='827'
              cy='302'
              r='2.25'
              transform='rotate(180 827 302)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay1} ${styles.line}  line4`}
              d='M827 335.5C827 309.9 827 303.5 827 303.5'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay1} ${styles.opacity} circle4`}
              cx='809'
              cy='357'
              r='2.25'
              transform='rotate(180 809 357)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle4`}
              cx='809'
              cy='321'
              r='2.25'
              transform='rotate(180 809 321)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay3} ${styles.line}  line4`}
              d='M809 354.5C809 328.9 809 322.5 809 322.5'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay1} ${styles.opacity} circle4`}
              cx='818'
              cy='367'
              r='2.25'
              transform='rotate(180 818 367)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay1} ${styles.opacity} circle4`}
              cx='818'
              cy='305'
              r='2.25'
              transform='rotate(180 818 305)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay2} ${styles.line}  line4`}
              d='M818 365C818 318.6 818 307 818 307'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay1} ${styles.opacity} circle15`}
              cx='668'
              cy='767'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle15`}
              cx='668'
              cy='784'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay3} ${styles.line}  line15`}
              d='M668 770C668 779.6 668 782 668 782'
              stroke='#162029'
            />
          </g>
          <path
            className={`${styles.delay5} ${styles.line}  line15`}
            d='M668 794.5C668 820.1 668 826.5 668 826.5'
            stroke='url(#paint13_linear_110_2)'
          />
          <circle
            className={`${styles.delay4} ${styles.opacity} circle15`}
            cx='668'
            cy='792'
            r='2.25'
            stroke='#A5CEDB'
            strokeWidth='1.5'
          />
          <circle
            className={`${styles.delay3} ${styles.opacity} circle15`}
            cx='668'
            cy='828'
            r='2.25'
            stroke='#9C9B97'
            strokeWidth='1.5'
          />
          <path
            className={`${styles.delay4} ${styles.line}  line15`}
            d='M677 765C677 811.4 677 823 677 823'
            stroke='url(#paint14_linear_110_2)'
          />
          <circle
            className={`${styles.delay3} ${styles.opacity} circle15`}
            cx='677'
            cy='763'
            r='2.25'
            stroke='#A19D99'
            strokeWidth='1.5'
          />
          <circle
            className={`${styles.delay2} ${styles.opacity} circle15`}
            cx='677'
            cy='825'
            r='2.25'
            stroke='#F96969'
            strokeWidth='1.5'
          />
          <g opacity='0.4'>
            <circle
              className={`${styles.delay1} ${styles.opacity} circle2`}
              cx='348'
              cy='368'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle2`}
              cx='348'
              cy='412'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay3} ${styles.line}  line2`}
              d='M348 371C348 403 348 411 348 411'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay3} ${styles.opacity} circle14`}
              cx='419'
              cy='553'
              r='2.25'
              transform='rotate(-90 419 553)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay4} ${styles.opacity} circle14`}
              cx='463'
              cy='553'
              r='2.25'
              transform='rotate(-90 463 553)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay5} ${styles.line}  line14`}
              d='M422 553C453.2 553 461 553 461 553'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay2} ${styles.opacity} circle1`}
              cx='61.2426'
              cy='106.243'
              r='2.25'
              transform='rotate(-45 61.2426 106.243)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle1`}
              cx='93.2426'
              cy='138.243'
              r='2.25'
              transform='rotate(-45 93.2426 138.243)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay4} ${styles.line}  line1`}
              d='M63.364 108.364C85.9914 130.991 91.6482 136.648 91.6482 136.648'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay1} ${styles.line}  line1`}
              cx='70.2426'
              cy='145.243'
              r='2.25'
              transform='rotate(-45 70.2426 145.243)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay1} ${styles.line}  line1`}
              cx='95.2426'
              cy='170.243'
              r='2.25'
              transform='rotate(-45 95.2426 170.243)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay2} ${styles.line}  line1`}
              d='M72.364 147.364C89.164 164.164 93.364 168.364 93.364 168.364'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay1} ${styles.opacity} circle1`}
              cx='42.2426'
              cy='103.243'
              r='2.25'
              transform='rotate(-45 42.2426 103.243)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle1`}
              cx='90.2426'
              cy='151.243'
              r='2.25'
              transform='rotate(-45 90.2426 151.243)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay3} ${styles.line}  line1`}
              d='M44.364 105.364C79.564 140.564 88.364 149.364 88.364 149.364'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay1} ${styles.opacity} circle13`}
              cx='179'
              cy='758'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle13`}
              cx='179'
              cy='794'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay5} ${styles.line}  line13`}
              d='M179 760.5C179 786.1 179 792.5 179 792.5'
              stroke='#162029'
            />
          </g>
          <g opacity='0.34'>
            <circle
              className={`${styles.delay1} ${styles.opacity} circle13`}
              cx='167'
              cy='766'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle13`}
              cx='167'
              cy='802'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay3} ${styles.line}  line13`}
              d='M167 768.5C167 794.1 167 800.5 167 800.5'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay3} ${styles.opacity} circle13`}
              cx='155'
              cy='758'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay4} ${styles.opacity} circle13`}
              cx='155'
              cy='802'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay5} ${styles.line}  line13`}
              d='M155 761C155 793 155 801 155 801'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay3} ${styles.opacity} circle5`}
              cx='1164'
              cy='426'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay4} ${styles.opacity} circle5`}
              cx='1164'
              cy='462'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay5} ${styles.line}  line5`}
              d='M1164 428.5C1164 454.1 1164 460.5 1164 460.5'
              stroke='#162029'
            />
          </g>
          <g opacity='0.34'>
            <circle
              className={`${styles.delay2} ${styles.opacity} circle5`}
              cx='1152'
              cy='434'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle5`}
              cx='1152'
              cy='470'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay4} ${styles.line}  line5`}
              d='M1152 436.5C1152 462.1 1152 468.5 1152 468.5'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay1} ${styles.opacity} circle5`}
              cx='1140'
              cy='426'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle5`}
              cx='1140'
              cy='470'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay3} ${styles.line}  line5`}
              d='M1140 429C1140 461 1140 469 1140 469'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay1} ${styles.opacity} circle2`}
              cx='251'
              cy='292'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle2`}
              cx='251'
              cy='336'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay3} ${styles.line}  line2`}
              d='M251 295C251 327 251 335 251 335'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay1} ${styles.opacity} circle14`}
              d='M476 845.512C476.002 844.918 475.828 844.337 475.5 843.842C475.172 843.347 474.704 842.96 474.156 842.732C473.608 842.503 473.005 842.442 472.422 842.556C471.839 842.67 471.303 842.955 470.883 843.374C470.462 843.793 470.175 844.328 470.058 844.91C469.942 845.492 470 846.096 470.227 846.645C470.454 847.194 470.838 847.663 471.332 847.993C471.826 848.324 472.406 848.5 473 848.5C473.794 848.5 474.555 848.185 475.117 847.625C475.679 847.065 475.997 846.305 476 845.512ZM471.294 845.512C471.292 845.171 471.391 844.837 471.579 844.553C471.766 844.269 472.035 844.047 472.349 843.915C472.663 843.784 473.01 843.749 473.344 843.815C473.678 843.88 473.985 844.044 474.226 844.285C474.467 844.526 474.631 844.833 474.697 845.168C474.763 845.502 474.728 845.848 474.596 846.163C474.465 846.477 474.243 846.745 473.959 846.933C473.674 847.121 473.341 847.22 473 847.217C472.547 847.217 472.114 847.038 471.794 846.718C471.474 846.398 471.294 845.964 471.294 845.512Z'
              fill='#162029'
            />
            <path
              className={`${styles.delay2} ${styles.opacity} circle14`}
              d='M462 701.012C462.002 700.418 461.828 699.837 461.5 699.342C461.172 698.847 460.704 698.46 460.156 698.232C459.608 698.003 459.005 697.942 458.422 698.056C457.839 698.17 457.304 698.455 456.883 698.874C456.462 699.293 456.175 699.828 456.058 700.41C455.942 700.992 456.001 701.596 456.227 702.145C456.454 702.694 456.838 703.163 457.332 703.493C457.826 703.824 458.406 704 459 704C459.794 704 460.555 703.685 461.117 703.125C461.679 702.565 461.997 701.805 462 701.012ZM457.294 701.012C457.292 700.671 457.391 700.337 457.579 700.053C457.766 699.769 458.035 699.547 458.349 699.415C458.663 699.284 459.01 699.249 459.344 699.315C459.678 699.38 459.985 699.544 460.226 699.785C460.467 700.026 460.631 700.333 460.697 700.668C460.763 701.002 460.728 701.348 460.596 701.663C460.465 701.977 460.243 702.245 459.959 702.433C459.674 702.621 459.341 702.72 459 702.717C458.548 702.717 458.114 702.538 457.794 702.218C457.474 701.898 457.294 701.464 457.294 701.012Z'
              fill='#162029'
            />
            <path
              className={`${styles.delay3} ${styles.line}  line14`}
              d='M458.51 703L458.51 737L473.01 751.5L473.01 843.5'
              stroke='#162029'
            />
          </g>
          <path
            className={`${styles.delay1} ${styles.opacity} circle14`}
            d='M458 813.488C457.998 814.082 458.172 814.663 458.5 815.158C458.828 815.653 459.296 816.039 459.844 816.268C460.392 816.497 460.995 816.558 461.578 816.444C462.161 816.329 462.696 816.045 463.117 815.625C463.538 815.206 463.825 814.672 463.941 814.09C464.058 813.507 463.999 812.904 463.773 812.355C463.546 811.806 463.161 811.337 462.668 811.006C462.174 810.676 461.594 810.5 461 810.5C460.206 810.5 459.445 810.814 458.883 811.375C458.321 811.935 458.003 812.695 458 813.488ZM462.706 813.488C462.708 813.829 462.609 814.163 462.421 814.447C462.233 814.731 461.965 814.953 461.651 815.085C461.337 815.216 460.99 815.251 460.656 815.185C460.322 815.119 460.015 814.955 459.774 814.715C459.533 814.474 459.369 814.166 459.303 813.832C459.237 813.498 459.272 813.152 459.404 812.837C459.535 812.523 459.757 812.255 460.041 812.067C460.326 811.879 460.659 811.78 461 811.782C461.452 811.782 461.886 811.962 462.206 812.282C462.526 812.602 462.706 813.036 462.706 813.488Z'
            fill='#FF6969'
          />
          <path
            className={`${styles.delay2} ${styles.opacity} circle14`}
            d='M470 898.488C469.998 899.082 470.172 899.663 470.5 900.158C470.828 900.653 471.296 901.039 471.844 901.268C472.392 901.497 472.995 901.558 473.578 901.444C474.161 901.329 474.696 901.045 475.117 900.625C475.538 900.206 475.825 899.672 475.941 899.09C476.058 898.507 475.999 897.904 475.773 897.355C475.546 896.806 475.161 896.337 474.668 896.006C474.174 895.676 473.594 895.5 473 895.5C472.206 895.5 471.445 895.814 470.883 896.375C470.321 896.935 470.003 897.695 470 898.488ZM474.706 898.488C474.708 898.829 474.609 899.163 474.421 899.447C474.233 899.731 473.965 899.953 473.651 900.085C473.337 900.216 472.99 900.251 472.656 900.185C472.322 900.119 472.015 899.955 471.774 899.715C471.533 899.474 471.369 899.166 471.303 898.832C471.237 898.498 471.272 898.152 471.404 897.837C471.535 897.523 471.757 897.255 472.041 897.067C472.326 896.879 472.659 896.78 473 896.782C473.452 896.782 473.886 896.962 474.206 897.282C474.526 897.602 474.706 898.036 474.706 898.488Z'
            fill='#FF6969'
          />
          <path
            className={`${styles.delay3} ${styles.line}  line14`}
            d='M473.5 896L473.5 865L461 850V815.5'
            stroke='#FF6969'
          />
          <g opacity='0.4'>
            <circle
              className={`${styles.delay3} ${styles.opacity} circle14`}
              cx='462'
              cy='798.5'
              r='2.25'
              transform='rotate(180 462 798.5)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay4} ${styles.opacity} circle14`}
              cx='462'
              cy='753.5'
              r='2.25'
              transform='rotate(180 462 753.5)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay5} ${styles.line}  line14`}
              d='M462 795.5C462 763.5 462 755.5 462 755.5'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay1} ${styles.opacity} circle15`}
              d='M712 896.512C711.998 895.918 712.172 895.337 712.5 894.842C712.828 894.347 713.296 893.961 713.844 893.732C714.392 893.503 714.995 893.442 715.578 893.556C716.161 893.671 716.696 893.955 717.117 894.375C717.538 894.794 717.825 895.328 717.942 895.91C718.058 896.493 718 897.096 717.773 897.645C717.546 898.194 717.162 898.663 716.668 898.994C716.174 899.324 715.594 899.5 715 899.5C714.206 899.5 713.445 899.186 712.883 898.625C712.321 898.065 712.003 897.305 712 896.512ZM716.706 896.512C716.708 896.171 716.609 895.837 716.421 895.553C716.234 895.269 715.965 895.047 715.651 894.915C715.337 894.784 714.99 894.749 714.656 894.815C714.322 894.881 714.015 895.045 713.774 895.285C713.533 895.526 713.369 895.834 713.303 896.168C713.237 896.502 713.272 896.848 713.404 897.163C713.535 897.477 713.757 897.745 714.041 897.933C714.326 898.121 714.659 898.22 715 898.218C715.453 898.218 715.886 898.038 716.206 897.718C716.526 897.398 716.706 896.964 716.706 896.512Z'
              fill='#162029'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle15`}
              cx='729'
              cy='752'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay3} ${styles.line}  line15`}
              d='M729.49 754L729.49 788L714.99 802.5L714.99 894.5'
              stroke='#162029'
            />
          </g>
          <path
            className={`${styles.delay1} ${styles.opacity} circle3`}
            d='M53 426L53 451'
            stroke='url(#paint15_linear_110_2)'
          />
          <path
            className={`${styles.delay2} ${styles.opacity} circle3`}
            d='M68 426L68 445'
            stroke='url(#paint16_linear_110_2)'
          />
          <path
            className={`${styles.delay3} ${styles.opacityH} circle3`}
            opacity='0.4'
            d='M48 426L48 453'
            stroke='#162029'
          />
          <path
            className={`${styles.delay3} ${styles.opacity} circle3`}
            opacity='0.4'
            d='M670 320L670 347'
            stroke='#162029'
          />
          <path
            className={`${styles.delay2} ${styles.opacity} circle3`}
            opacity='0.4'
            d='M685 335L685 362'
            stroke='#162029'
          />
          <path
            className={`${styles.delay1} ${styles.opacity} circle3`}
            opacity='0.4'
            d='M679 320L679 368'
            stroke='#162029'
          />
          <path
            className={`${styles.delay3} ${styles.opacity} circle1`}
            d='M170 155L170 212'
            stroke='url(#paint17_linear_110_2)'
          />
          <path
            className={`${styles.delay2} ${styles.opacityH} circle1`}
            opacity='0.4'
            d='M184 200L184 227'
            stroke='#162029'
          />
          <path
            className={`${styles.delay1} ${styles.opacity} circle1`}
            d='M177 185L177 233'
            stroke='url(#paint18_linear_110_2)'
          />
          <path
            className={`${styles.delay5} ${styles.opacityH} circle6`}
            opacity='0.4'
            d='M1270 173L1270 230'
            stroke='#162029'
          />
          <path
            className={`${styles.delay4} ${styles.opacityH} circle6`}
            opacity='0.4'
            d='M1285 218L1285 245'
            stroke='#162029'
          />
          <path
            className={`${styles.delay3} ${styles.opacityH} circle6`}
            opacity='0.4'
            d='M1279 203L1279 251'
            stroke='#162029'
          />
          <path
            className={`${styles.delay3} ${styles.opacityH} circle2`}
            opacity='0.4'
            d='M329 293H435'
            stroke='url(#paint19_linear_110_2)'
          />
          <path
            className={`${styles.delay2} ${styles.opacity} circle2`}
            d='M353 285L402 285'
            stroke='url(#paint20_linear_110_2)'
          />
          <path
            className={`${styles.delay1} ${styles.opacity} circle2`}
            d='M340 301H446'
            stroke='url(#paint21_linear_110_2)'
          />
          <path
            className={`${styles.delay3} ${styles.opacity} circle4`}
            opacity='0.4'
            d='M862 418H968'
            stroke='#162029'
          />
          <path
            className={`${styles.delay2} ${styles.opacity} circle4`}
            opacity='0.4'
            d='M886 410L935 410'
            stroke='#162029'
          />
          <path
            className={`${styles.delay1} ${styles.opacity} circle4`}
            d='M873 426H979'
            stroke='url(#paint22_linear_110_2)'
          />
          <path
            className={`${styles.delay5} ${styles.line}  line13`}
            opacity='0.4'
            d='M292 908L149 908'
            stroke='url(#paint23_linear_110_2)'
          />
          <path
            className={`${styles.delay4} ${styles.line}  line13`}
            opacity='0.4'
            d='M231 916L182 916'
            stroke='#162029'
          />
          <path className={`${styles.delay3} ${styles.line}  line13`} d='M244 900L138 900' stroke='#FF6969' />
          <path
            className={`${styles.delay3} ${styles.opacityH} circle3`}
            opacity='0.4'
            d='M643 102L500 102'
            stroke='url(#paint24_linear_110_2)'
          />
          <path
            className={`${styles.delay2} ${styles.opacityH} circle3`}
            opacity='0.4'
            d='M582 110L533 110'
            stroke='#162029'
          />
          <path className={`${styles.delay1} ${styles.opacityH} circle3`} d='M595 94L489 94' stroke='#FF6969' />
          <path
            className={`${styles.delay3} ${styles.opacityH} circle18`}
            opacity='0.4'
            d='M1319 581L1176 581'
            stroke='url(#paint25_linear_110_2)'
          />
          <path
            className={`${styles.delay2} ${styles.opacityH} circle18`}
            opacity='0.4'
            d='M1258 589L1209 589'
            stroke='#162029'
          />
          <path className={`${styles.delay1} ${styles.opacityH} circle18`} d='M1271 573L1165 573' stroke='#FF6969' />
          <path
            className={`${styles.delay2} ${styles.opacityH} circle18`}
            opacity='0.4'
            d='M63 426L63 450'
            stroke='#162029'
          />
          <path
            className={`${styles.delay1} ${styles.opacityH} circle18`}
            opacity='0.4'
            d='M58 426L58 448'
            stroke='#162029'
          />
          <path
            className={`${styles.delay3} ${styles.line}  line15`}
            d='M625 750L625 806'
            stroke='url(#paint26_linear_110_2)'
          />
          <path
            className={`${styles.delay2} ${styles.line}  line15`}
            opacity='0.4'
            d='M621 750L621 797'
            stroke='url(#paint27_linear_110_2)'
          />
          <path
            className={`${styles.delay1} ${styles.line}  line15`}
            opacity='0.4'
            d='M629 750L629 808'
            stroke='url(#paint28_linear_110_2)'
          />
          <path
            className={`${styles.delay1} ${styles.line}  line13`}
            opacity='0.4'
            d='M72 682L72 716'
            stroke='url(#paint29_linear_110_2)'
          />
          <path
            className={`${styles.delay2} ${styles.line}  line13`}
            opacity='0.4'
            d='M68 682L68 716'
            stroke='url(#paint30_linear_110_2)'
          />
          <path
            className={`${styles.delay3} ${styles.line}  line13`}
            opacity='0.4'
            d='M76 682L76 717'
            stroke='url(#paint31_linear_110_2)'
          />
          <path
            className={`${styles.delay3} ${styles.opacityH} circle15`}
            opacity='0.4'
            d='M488 521L488 536'
            stroke='url(#paint32_linear_110_2)'
          />
          <path
            className={`${styles.delay2} ${styles.opacityH} circle15`}
            opacity='0.4'
            d='M484 521L484 541'
            stroke='url(#paint33_linear_110_2)'
          />
          <path
            className={`${styles.delay1} ${styles.opacityH} circle15`}
            opacity='0.4'
            d='M492 521L492 532'
            stroke='url(#paint34_linear_110_2)'
          />
          <path
            className={`${styles.delay4} ${styles.opacityH} circle1`}
            opacity='0.4'
            d='M73 426L73 449'
            stroke='#162029'
          />
          <g opacity='0.4'>
            <path
              className={`${styles.delay2} ${styles.line}  line1`}
              d='M25.5 399.5L12.5 421.5V519.5L37 544V609.5'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay1} ${styles.opacity} circle1`}
              cx='27'
              cy='397'
              r='3'
              transform='rotate(180 27 397)'
              stroke='#162029'
              strokeWidth='2'
            />
            <circle
              className={`${styles.delay1} ${styles.opacity} circle1`}
              cx='37'
              cy='613'
              r='3'
              transform='rotate(180 37 613)'
              stroke='#162029'
              strokeWidth='2'
            />
          </g>
          <path
            className={`${styles.delay5} ${styles.line}  line13`}
            d='M103.5 543H55L25 513V471L47.5 493.5'
            stroke='url(#paint35_linear_110_2)'
          />
          <path
            className={`${styles.delay4} ${styles.opacity} circle13`}
            d='M106.012 546C105.418 546.002 104.837 545.828 104.342 545.5C103.847 545.172 103.461 544.704 103.232 544.156C103.003 543.608 102.942 543.005 103.056 542.422C103.171 541.839 103.455 541.304 103.875 540.883C104.294 540.462 104.828 540.175 105.41 540.059C105.993 539.942 106.596 540.001 107.145 540.227C107.694 540.454 108.163 540.838 108.494 541.332C108.824 541.826 109 542.406 109 543C109 543.794 108.686 544.555 108.125 545.117C107.565 545.679 106.805 545.997 106.012 546ZM106.012 541.294C105.671 541.292 105.337 541.391 105.053 541.579C104.769 541.767 104.547 542.035 104.415 542.349C104.284 542.663 104.249 543.01 104.315 543.344C104.381 543.678 104.545 543.985 104.785 544.226C105.026 544.467 105.334 544.631 105.668 544.697C106.002 544.763 106.348 544.728 106.663 544.596C106.977 544.465 107.245 544.243 107.433 543.959C107.621 543.674 107.72 543.341 107.718 543C107.718 542.548 107.538 542.114 107.218 541.794C106.898 541.474 106.464 541.294 106.012 541.294Z'
            fill='#9B9B97'
          />
          <path
            className={`${styles.delay3} ${styles.opacity} circle13`}
            d='M49.0118 498C48.4179 498.002 47.8368 497.828 47.3419 497.5C46.847 497.172 46.4606 496.704 46.2317 496.156C46.0029 495.608 45.9418 495.005 46.0562 494.422C46.1706 493.839 46.4554 493.304 46.8745 492.883C47.2936 492.462 47.8281 492.175 48.4104 492.059C48.9927 491.942 49.5965 492.001 50.1453 492.227C50.6942 492.454 51.1634 492.838 51.4936 493.332C51.8238 493.826 52 494.406 52 495C52 495.794 51.6856 496.555 51.1255 497.117C50.5654 497.679 49.8054 497.997 49.0118 498ZM49.0118 493.294C48.6711 493.292 48.3374 493.391 48.0531 493.579C47.7688 493.767 47.5469 494.035 47.4154 494.349C47.2839 494.663 47.2489 495.01 47.3148 495.344C47.3807 495.678 47.5446 495.985 47.7855 496.226C48.0264 496.467 48.3335 496.631 48.6678 496.697C49.0021 496.763 49.3484 496.728 49.6628 496.596C49.9771 496.465 50.2452 496.243 50.4331 495.959C50.6209 495.674 50.72 495.341 50.7177 495C50.7177 494.548 50.5379 494.114 50.218 493.794C49.8981 493.474 49.4642 493.294 49.0118 493.294Z'
            fill='#A5CEDA'
          />
          <g opacity='0.4'>
            <path
              className={`${styles.delay3} ${styles.line}  line15`}
              d='M637.5 675H686L716 645L716 630H697.5'
              stroke='#162029'
            />
            <path
              className={`${styles.delay2} ${styles.opacity} circle15`}
              d='M634.988 678C635.582 678.002 636.163 677.828 636.658 677.5C637.153 677.172 637.539 676.704 637.768 676.156C637.997 675.608 638.058 675.005 637.944 674.422C637.829 673.839 637.545 673.304 637.126 672.883C636.706 672.462 636.172 672.175 635.59 672.059C635.007 671.942 634.404 672.001 633.855 672.227C633.306 672.454 632.837 672.838 632.506 673.332C632.176 673.826 632 674.406 632 675C632 675.794 632.315 676.555 632.875 677.117C633.435 677.679 634.195 677.997 634.988 678ZM634.988 673.294C635.329 673.292 635.663 673.391 635.947 673.579C636.231 673.767 636.453 674.035 636.585 674.349C636.716 674.663 636.751 675.01 636.685 675.344C636.619 675.678 636.455 675.985 636.215 676.226C635.974 676.467 635.667 676.631 635.332 676.697C634.998 676.763 634.652 676.728 634.337 676.596C634.023 676.465 633.755 676.243 633.567 675.959C633.379 675.674 633.28 675.341 633.282 675C633.282 674.548 633.462 674.114 633.782 673.794C634.102 673.474 634.536 673.294 634.988 673.294Z'
              fill='#162029'
            />
            <path
              className={`${styles.delay1} ${styles.opacity} circle15`}
              d='M695.988 633C696.582 633.002 697.163 632.828 697.658 632.5C698.153 632.172 698.539 631.704 698.768 631.156C698.997 630.608 699.058 630.005 698.944 629.422C698.829 628.839 698.545 628.304 698.126 627.883C697.706 627.462 697.172 627.175 696.59 627.059C696.007 626.942 695.404 627.001 694.855 627.227C694.306 627.454 693.837 627.838 693.506 628.332C693.176 628.826 693 629.406 693 630C693 630.794 693.315 631.555 693.875 632.117C694.435 632.679 695.195 632.997 695.988 633ZM695.988 628.294C696.329 628.292 696.663 628.391 696.947 628.579C697.231 628.767 697.453 629.035 697.585 629.349C697.716 629.663 697.751 630.01 697.685 630.344C697.619 630.678 697.455 630.985 697.215 631.226C696.974 631.467 696.667 631.631 696.332 631.697C695.998 631.763 695.652 631.728 695.337 631.596C695.023 631.465 694.755 631.243 694.567 630.959C694.379 630.674 694.28 630.341 694.282 630C694.282 629.548 694.462 629.114 694.782 628.794C695.102 628.474 695.536 628.294 695.988 628.294Z'
              fill='#162029'
            />
          </g>
          <path
            className={`${styles.delay5} ${styles.line}  line1`}
            d='M-1 333H146.5L189 377.5V465.5'
            stroke='#A6D0DD'
          />
          <path
            className={`${styles.delay4} ${styles.opacityH} circle14`}
            opacity='0.4'
            d='M399.5 735L399.501 971.5L431.501 1003.5L447.501 1003.5'
            stroke='url(#paint36_linear_110_2)'
          />
          <path
            className={`${styles.delay3} ${styles.opacityH} circle14`}
            opacity='0.4'
            d='M389.001 735L389.001 974.5L427.001 1011.5L456.001 1011.5'
            stroke='url(#paint37_linear_110_2)'
          />
          <path
            className={`${styles.delay2} ${styles.opacityH} circle14`}
            opacity='0.4'
            d='M379.5 735L379.501 980.5L421.501 1019L470.001 1019'
            stroke='url(#paint38_linear_110_2)'
          />
          <path
            className={`${styles.delay1} ${styles.opacityH} circle14`}
            opacity='0.4'
            d='M371 735L371 985.5L415.5 1028L503.5 1028'
            stroke='url(#paint39_linear_110_2)'
          />
          <circle
            className={`${styles.delay1} ${styles.opacity} circle14`}
            cx='371'
            cy='733'
            r='2.25'
            transform='rotate(180 371 733)'
            stroke='#989591'
            strokeWidth='1.5'
          />
          <circle
            className={`${styles.delay2} ${styles.opacity} circle14`}
            cx='380'
            cy='733'
            r='2.25'
            transform='rotate(180 380 733)'
            stroke='#989591'
            strokeWidth='1.5'
          />
          <circle
            className={`${styles.delay3} ${styles.opacity} circle14`}
            cx='389'
            cy='733'
            r='2.25'
            transform='rotate(180 389 733)'
            stroke='#989591'
            strokeWidth='1.5'
          />
          <circle
            className={`${styles.delay4} ${styles.opacity} circle14`}
            cx='399'
            cy='733'
            r='2.25'
            transform='rotate(180 399 733)'
            stroke='#989591'
            strokeWidth='1.5'
          />
          <path
            className={`${styles.delay4} ${styles.line}  line3`}
            d='M544.5 364L544.5 283.5L564.5 263L571 263'
            stroke='url(#paint40_linear_110_2)'
          />
          <circle
            className={`${styles.delay3} ${styles.opacity} circle3`}
            cx='573'
            cy='263'
            r='2.25'
            transform='rotate(-90 573 263)'
            stroke='#ACCAD6'
            strokeWidth='1.5'
          />
          <circle
            className={`${styles.delay2} ${styles.opacity} circle3`}
            cx='545'
            cy='366'
            r='2.25'
            transform='rotate(-90 545 366)'
            stroke='#FD6C6D'
            strokeWidth='1.5'
          />
          <g opacity='0.4'>
            <circle
              className={`${styles.delay3} ${styles.opacity} circle3`}
              cx='516'
              cy='309'
              r='2.25'
              transform='rotate(-90 516 309)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay4} ${styles.opacity} circle3`}
              cx='533'
              cy='309'
              r='2.25'
              transform='rotate(-90 533 309)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay5} ${styles.line}  line3`}
              d='M519 309C528.6 309 531 309 531 309'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay3} ${styles.line}  line3`}
              d='M535.5 384.5L535.5 335L522 324L503 324'
              stroke='#162029'
            />
            <path
              className={`${styles.delay2} ${styles.opacity} circle3`}
              d='M498 324.012C497.998 323.418 498.172 322.837 498.5 322.342C498.828 321.847 499.296 321.461 499.844 321.232C500.392 321.003 500.995 320.942 501.578 321.056C502.161 321.171 502.696 321.455 503.117 321.875C503.538 322.294 503.825 322.828 503.941 323.41C504.058 323.993 503.999 324.596 503.773 325.145C503.546 325.694 503.162 326.163 502.668 326.494C502.174 326.824 501.594 327 501 327C500.206 327 499.445 326.686 498.883 326.125C498.321 325.565 498.003 324.805 498 324.012ZM502.706 324.012C502.708 323.671 502.609 323.337 502.421 323.053C502.233 322.769 501.965 322.547 501.651 322.415C501.337 322.284 500.99 322.249 500.656 322.315C500.322 322.381 500.015 322.545 499.774 322.785C499.533 323.026 499.369 323.334 499.303 323.668C499.237 324.002 499.272 324.348 499.404 324.663C499.535 324.977 499.757 325.245 500.041 325.433C500.326 325.621 500.659 325.72 501 325.718C501.452 325.718 501.886 325.538 502.206 325.218C502.526 324.898 502.706 324.464 502.706 324.012Z'
              fill='#162029'
            />
            <path
              className={`${styles.delay1} ${styles.opacity} circle3`}
              d='M533 387.012C532.998 386.418 533.172 385.837 533.5 385.342C533.828 384.847 534.296 384.461 534.844 384.232C535.392 384.003 535.995 383.942 536.578 384.056C537.161 384.171 537.696 384.455 538.117 384.875C538.538 385.294 538.825 385.828 538.941 386.41C539.058 386.993 538.999 387.596 538.773 388.145C538.546 388.694 538.162 389.163 537.668 389.494C537.174 389.824 536.594 390 536 390C535.206 390 534.445 389.686 533.883 389.125C533.321 388.565 533.003 387.805 533 387.012ZM537.706 387.012C537.708 386.671 537.609 386.337 537.421 386.053C537.234 385.769 536.965 385.547 536.651 385.415C536.337 385.284 535.99 385.249 535.656 385.315C535.322 385.381 535.015 385.545 534.774 385.785C534.533 386.026 534.369 386.334 534.303 386.668C534.237 387.002 534.272 387.348 534.404 387.663C534.535 387.977 534.757 388.245 535.041 388.433C535.326 388.621 535.659 388.72 536 388.718C536.452 388.718 536.886 388.538 537.206 388.218C537.526 387.898 537.706 387.464 537.706 387.012Z'
              fill='#162029'
            />
          </g>
          <path
            className={`${styles.delay5} ${styles.line}  line16`}
            d='M795.5 804L795.5 723.5L815.5 703L822 703'
            stroke='url(#paint41_linear_110_2)'
          />
          <circle
            className={`${styles.delay4} ${styles.opacity} circle16`}
            cx='824'
            cy='703'
            r='2.25'
            transform='rotate(-90 824 703)'
            stroke='#ACCAD6'
            strokeWidth='1.5'
          />
          <circle
            className={`${styles.delay3} ${styles.opacity} circle16`}
            cx='796'
            cy='806'
            r='2.25'
            transform='rotate(-90 796 806)'
            stroke='#FD6C6D'
            strokeWidth='1.5'
          />
          <g opacity='0.4'>
            <circle
              className={`${styles.delay1} ${styles.opacity} circle16`}
              cx='767'
              cy='749'
              r='2.25'
              transform='rotate(-90 767 749)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle16`}
              cx='784'
              cy='749'
              r='2.25'
              transform='rotate(-90 784 749)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay3} ${styles.line}  line16`}
              d='M770 749C779.6 749 782 749 782 749'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay5} ${styles.line}  line16`}
              d='M786.5 824.5L786.5 775L773 764L754 764'
              stroke='#162029'
            />
            <path
              className={`${styles.delay4} ${styles.opacity} circle16`}
              d='M749 764.012C748.998 763.418 749.172 762.837 749.5 762.342C749.828 761.847 750.296 761.461 750.844 761.232C751.392 761.003 751.995 760.942 752.578 761.056C753.161 761.171 753.696 761.455 754.117 761.875C754.538 762.294 754.825 762.828 754.941 763.41C755.058 763.993 754.999 764.596 754.773 765.145C754.546 765.694 754.162 766.163 753.668 766.494C753.174 766.824 752.594 767 752 767C751.206 767 750.445 766.686 749.883 766.125C749.321 765.565 749.003 764.805 749 764.012ZM753.706 764.012C753.708 763.671 753.609 763.337 753.421 763.053C753.233 762.769 752.965 762.547 752.651 762.415C752.337 762.284 751.99 762.249 751.656 762.315C751.322 762.381 751.015 762.545 750.774 762.785C750.533 763.026 750.369 763.334 750.303 763.668C750.237 764.002 750.272 764.348 750.404 764.663C750.535 764.977 750.757 765.245 751.041 765.433C751.326 765.621 751.659 765.72 752 765.718C752.452 765.718 752.886 765.538 753.206 765.218C753.526 764.898 753.706 764.464 753.706 764.012Z'
              fill='#162029'
            />
            <path
              className={`${styles.delay3} ${styles.opacity} circle16`}
              d='M784 827.012C783.998 826.418 784.172 825.837 784.5 825.342C784.828 824.847 785.296 824.461 785.844 824.232C786.392 824.003 786.995 823.942 787.578 824.056C788.161 824.171 788.696 824.455 789.117 824.875C789.538 825.294 789.825 825.828 789.942 826.41C790.058 826.993 789.999 827.596 789.773 828.145C789.546 828.694 789.162 829.163 788.668 829.494C788.174 829.824 787.594 830 787 830C786.206 830 785.445 829.686 784.883 829.125C784.321 828.565 784.003 827.805 784 827.012ZM788.706 827.012C788.708 826.671 788.609 826.337 788.421 826.053C788.234 825.769 787.965 825.547 787.651 825.415C787.337 825.284 786.99 825.249 786.656 825.315C786.322 825.381 786.015 825.545 785.774 825.785C785.533 826.026 785.369 826.334 785.303 826.668C785.237 827.002 785.272 827.348 785.404 827.663C785.535 827.977 785.757 828.245 786.041 828.433C786.326 828.621 786.659 828.72 787 828.718C787.452 828.718 787.886 828.538 788.206 828.218C788.526 827.898 788.706 827.464 788.706 827.012Z'
              fill='#162029'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay5} ${styles.line}  line14`}
              d='M494.5 561L394 561L382 552L382 540.5'
              stroke='#162029'
            />
            <path
              className={`${styles.delay3} ${styles.opacity} circle14`}
              d='M382.012 535C381.418 534.998 380.837 535.172 380.342 535.5C379.847 535.828 379.461 536.296 379.232 536.844C379.003 537.392 378.942 537.995 379.056 538.578C379.171 539.161 379.455 539.696 379.875 540.117C380.294 540.538 380.828 540.825 381.41 540.941C381.993 541.058 382.596 540.999 383.145 540.773C383.694 540.546 384.163 540.162 384.494 539.668C384.824 539.174 385 538.594 385 538C385 537.206 384.686 536.445 384.125 535.883C383.565 535.321 382.805 535.003 382.012 535ZM382.012 539.706C381.671 539.708 381.337 539.609 381.053 539.421C380.769 539.233 380.547 538.965 380.415 538.651C380.284 538.337 380.249 537.99 380.315 537.656C380.381 537.322 380.545 537.015 380.785 536.774C381.026 536.533 381.334 536.369 381.668 536.303C382.002 536.237 382.348 536.272 382.663 536.404C382.977 536.535 383.245 536.757 383.433 537.041C383.621 537.326 383.72 537.659 383.718 538C383.718 538.452 383.538 538.886 383.218 539.206C382.898 539.526 382.464 539.706 382.012 539.706Z'
              fill='#162029'
            />
            <path
              className={`${styles.delay4} ${styles.opacity} circle14`}
              d='M497.012 558C496.418 557.998 495.837 558.172 495.342 558.5C494.847 558.828 494.461 559.296 494.232 559.844C494.003 560.392 493.942 560.995 494.056 561.578C494.171 562.161 494.455 562.696 494.875 563.117C495.294 563.538 495.828 563.825 496.41 563.941C496.993 564.058 497.596 563.999 498.145 563.773C498.694 563.546 499.163 563.162 499.494 562.668C499.824 562.174 500 561.594 500 561C500 560.206 499.686 559.445 499.125 558.883C498.565 558.321 497.805 558.003 497.012 558ZM497.012 562.706C496.671 562.708 496.337 562.609 496.053 562.421C495.769 562.233 495.547 561.965 495.415 561.651C495.284 561.337 495.249 560.99 495.315 560.656C495.381 560.322 495.545 560.015 495.785 559.774C496.026 559.533 496.334 559.369 496.668 559.303C497.002 559.237 497.348 559.272 497.663 559.404C497.977 559.535 498.245 559.757 498.433 560.041C498.621 560.326 498.72 560.659 498.718 561C498.718 561.452 498.538 561.886 498.218 562.206C497.898 562.526 497.464 562.706 497.012 562.706Z'
              fill='#162029'
            />
          </g>
          <path
            className={`${styles.delay3} ${styles.line}  line13`}
            d='M18 831.5L18 766.5L37.5 746L44 746'
            stroke='url(#paint42_linear_110_2)'
          />
          <circle
            className={`${styles.delay2} ${styles.opacity} circle13`}
            cx='46'
            cy='746'
            r='2.25'
            transform='rotate(-90 46 746)'
            stroke='#ACCAD6'
            strokeWidth='1.5'
          />
          <circle
            className={`${styles.delay1} ${styles.opacity} circle13`}
            cx='18'
            cy='834'
            r='2.25'
            transform='rotate(-90 18 834)'
            stroke='#FD6C6D'
            strokeWidth='1.5'
          />
          <g opacity='0.4'>
            <circle
              className={`${styles.delay3} ${styles.opacity} circle16`}
              cx='759'
              cy='580'
              r='2.25'
              transform='rotate(-90 759 580)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay4} ${styles.opacity} circle16`}
              cx='800'
              cy='580'
              r='2.25'
              transform='rotate(-90 800 580)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay5} ${styles.line}  line16`}
              d='M762 580C790.8 580 798 580 798 580'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay1} ${styles.opacity} circle2`}
              cx='457'
              cy='394'
              r='2.25'
              transform='rotate(180 457 394)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle2`}
              cx='457'
              cy='377'
              r='2.25'
              transform='rotate(180 457 377)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay3} ${styles.line}  line2`}
              d='M457 391C457 381.4 457 379 457 379'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay1} ${styles.opacity} circle15`}
              cx='552'
              cy='950'
              r='2.25'
              transform='rotate(180 552 950)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle15`}
              cx='552'
              cy='933'
              r='2.25'
              transform='rotate(180 552 933)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay3} ${styles.line}  line15`}
              d='M552 947C552 937.4 552 935 552 935'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay3} ${styles.line}  line13`}
              d='M-1.4186 856.886L4.16755 851.3H12.0589L19.9572 851.307L27.8485 851.307L35.7469 851.3L43.6453 851.307L51.5366 851.307L59.4279 851.307L67.3263 851.3L75.2247 851.307L83.116 851.307L88.6951 845.728L94.2812 840.142L102.173 840.142L110.071 840.135L117.969 840.142L125.861 840.142L133.752 840.142L141.657 840.142L149.549 840.142L157.44 840.142L165.331 840.142L173.223 840.142L181.121 840.135L189.019 840.142L194.606 834.556L200.185 828.977L208.076 828.977L215.967 828.977L223.866 828.97L231.764 828.977L239.655 828.977L247.547 828.977L255.438 828.977'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay2} ${styles.opacity} circle13`}
              d='M259.495 830.667C259.125 830.914 258.691 831.047 258.246 831.047C257.95 831.048 257.657 830.99 257.383 830.877C257.11 830.764 256.861 830.598 256.652 830.388C256.442 830.179 256.276 829.93 256.163 829.657C256.05 829.383 255.992 829.09 255.993 828.794C255.993 828.349 256.126 827.915 256.373 827.545C256.621 827.176 256.972 826.888 257.383 826.718C257.794 826.548 258.246 826.504 258.682 826.591C259.119 826.678 259.519 826.892 259.834 827.206C260.148 827.521 260.362 827.921 260.449 828.358C260.536 828.794 260.492 829.246 260.322 829.657C260.152 830.068 259.864 830.419 259.495 830.667Z'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay5} ${styles.line}  line15`}
              d='M702.42 856.73L702.42 848.84L702.42 840.95L702.42 833.05L702.42 825.15L702.42 817.26L702.42 809.36L702.42 801.47L702.42 793.58L702.42 785.68L702.42 777.79L702.42 769.89L702.42 762L702.42 754.1L702.42 746.21L702.42 738.31L702.42 730.42L702.42 722.53L696.83 716.94L691.25 711.36L685.67 705.78L677.78 705.78L669.88 705.78L661.99 705.78'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay4} ${styles.opacity} circle15`}
              d='M657.75 710.25C656.86 710.25 655.99 709.986 655.25 709.492C654.51 708.997 653.933 708.294 653.593 707.472C653.252 706.65 653.163 705.745 653.336 704.872C653.51 703.999 653.939 703.197 654.568 702.568C655.197 701.939 655.999 701.51 656.872 701.336C657.745 701.163 658.65 701.252 659.472 701.593C660.294 701.933 660.997 702.51 661.492 703.25C661.986 703.99 662.25 704.86 662.25 705.75C662.25 706.943 661.776 708.088 660.932 708.932C660.088 709.776 658.943 710.25 657.75 710.25Z'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay2} ${styles.line}  line4`}
              d='M755.54 280.576L761.119 286.155V294.046L761.126 301.945L761.119 309.843V317.735L761.126 325.633L761.119 333.531V341.423V349.314L761.126 357.212L761.126 365.104V372.995L766.705 378.574L772.292 384.16L777.878 389.746L783.457 395.325L789.036 400.904L789.036 408.81L789.036 416.701L789.036 424.593L789.029 432.491L789.029 440.382L789.036 448.281V456.172L789.036 464.063L789.036 471.969L789.036 479.86L789.036 487.751L789.036 495.643L789.029 503.541L789.036 511.439L783.457 517.018L777.871 522.605L772.292 528.184L766.705 533.77L761.126 539.349L755.54 533.763'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay1} ${styles.opacity} circle4`}
              d='M754.961 529.887C755.397 529.974 755.798 530.188 756.113 530.503C756.535 530.925 756.772 531.497 756.772 532.094C756.772 532.691 756.535 533.263 756.113 533.685C755.798 534 755.397 534.214 754.961 534.301C754.524 534.388 754.072 534.343 753.661 534.173C753.25 534.002 752.898 533.714 752.651 533.344C752.404 532.974 752.272 532.539 752.272 532.094C752.272 531.649 752.404 531.214 752.651 530.844C752.898 530.474 753.25 530.186 753.661 530.015L753.374 529.322L753.661 530.015C754.072 529.845 754.524 529.8 754.961 529.887Z'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay1} ${styles.opacity} circle4`}
              d='M754.254 276.036C754.69 276.123 755.091 276.337 755.406 276.652C755.828 277.074 756.065 277.646 756.065 278.243C756.065 278.839 755.828 279.412 755.406 279.834C755.091 280.148 754.69 280.363 754.254 280.449C753.817 280.536 753.365 280.492 752.954 280.321C752.543 280.151 752.191 279.863 751.944 279.493C751.697 279.123 751.565 278.688 751.565 278.243C751.565 277.798 751.697 277.363 751.944 276.993C752.191 276.623 752.543 276.334 752.954 276.164L752.667 275.471L752.954 276.164C753.365 275.994 753.817 275.949 754.254 276.036Z'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <path
            className={`${styles.delay3} ${styles.line}  line3`}
            d='M566 190C585.2 190 590 190 590 190'
            stroke='url(#paint43_linear_110_2)'
          />
          <circle
            className={`${styles.delay2} ${styles.opacity} circle3`}
            cx='3'
            cy='3'
            r='2.25'
            transform='matrix(4.37114e-08 1 1 -4.37114e-08 561 187)'
            stroke='#A5CEDB'
            strokeWidth='1.5'
          />
          <circle
            className={`${styles.delay1} ${styles.opacity} circle3`}
            cx='3'
            cy='3'
            r='2.25'
            transform='matrix(4.37114e-08 1 1 -4.37114e-08 589 187)'
            stroke='#9C9B97'
            strokeWidth='1.5'
          />
          <g opacity='0.4'>
            <path
              className={`${styles.delay3} ${styles.line}  line2`}
              d='M396 240C442.4 240 454 240 454 240'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle2`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(4.37114e-08 1 1 -4.37114e-08 391 237)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay1} ${styles.opacity} circle2`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(4.37114e-08 1 1 -4.37114e-08 453 237)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay3} ${styles.line}  line3`}
              d='M380 253.72L385.59 248.14L393.48 248.14L401.38 248.14L409.27 248.14L417.17 248.14L425.06 248.14L432.96 248.14L440.85 248.14L448.75 248.14L456.64 248.14L464.54 248.14L472.43 248.14L480.32 248.14L488.22 248.14L493.8 242.56L499.38 236.98L504.97 231.39L510.55 225.81L516.13 220.23L521.71 214.65L527.3 209.06L532.88 203.48L538.46 197.9L544.04 192.32L549.62 186.74L555.21 181.16L563.1 181.16L571 181.16L578.89 181.16L586.79 181.16L594.68 181.16L602.57 181.16L608.16 175.57'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay2} ${styles.opacity} circle3`}
              d='M611.453 174.406C611.374 174.84 611.168 175.241 610.863 175.559C610.653 175.777 610.401 175.951 610.122 176.07C609.843 176.189 609.543 176.25 609.24 176.25C608.937 176.25 608.637 176.189 608.358 176.07C608.079 175.951 607.827 175.777 607.617 175.559C607.312 175.241 607.106 174.84 607.027 174.406C606.947 173.972 606.997 173.524 607.17 173.118C607.343 172.712 607.631 172.366 607.999 172.123C608.367 171.88 608.799 171.75 609.24 171.75C609.681 171.75 610.113 171.88 610.481 172.123C610.849 172.366 611.137 172.712 611.31 173.118C611.483 173.524 611.533 173.972 611.453 174.406Z'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay1} ${styles.opacity} circle3`}
              d='M380.213 256.405C380.134 256.839 379.928 257.24 379.623 257.558C379.413 257.777 379.161 257.951 378.882 258.07C378.603 258.189 378.303 258.25 378 258.25C377.697 258.25 377.397 258.189 377.118 258.07C376.839 257.951 376.587 257.777 376.377 257.558C376.072 257.24 375.866 256.839 375.787 256.405C375.707 255.972 375.757 255.524 375.93 255.118C376.103 254.712 376.391 254.366 376.759 254.123C377.127 253.879 377.559 253.75 378 253.75C378.441 253.75 378.873 253.879 379.241 254.123C379.609 254.366 379.897 254.712 380.07 255.118C380.243 255.524 380.293 255.972 380.213 256.405Z'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay4} ${styles.line}  line2`}
              d='M467 392C467 345.6 467 334 467 334'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle2`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(1 0 0 -1 464 397)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle2`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(1 0 0 -1 464 335)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay3} ${styles.line}  line15`}
              d='M502.657 1001.67C535.467 968.859 543.669 960.657 543.669 960.657'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle15`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(0.707107 0.707107 0.707107 -0.707107 497 1003.08)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay1} ${styles.opacity} circle15`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(0.707107 0.707107 0.707107 -0.707107 540.841 959.243)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay2} ${styles.line}  line2`}
              d='M457 363C457 316.6 457 305 457 305'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle2`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(1 0 0 -1 454 368)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay1} ${styles.opacity} circle2`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(1 0 0 -1 454 306)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay5} ${styles.line}  line15`}
              d='M545 941C545 894.6 545 883 545 883'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle15`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(1 0 0 -1 542 946)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay4} ${styles.opacity} circle15`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(1 0 0 -1 542 884)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.3'>
            <path
              className={`${styles.delay4} ${styles.line}  line1`}
              d='M160.657 310.657C106.257 256.257 92.6569 242.657 92.6569 242.657'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle1`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(0.707107 -0.707107 -0.707107 -0.707107 162.243 316.485)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle1`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(0.707107 -0.707107 -0.707107 -0.707107 91.2426 245.485)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.3'>
            <path className={`${styles.delay4} ${styles.line}  line2`} d='M445 135.5H379L317 197.5' stroke='black' />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle2`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(4.37114e-08 1 1 -4.37114e-08 312 196)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle2`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(4.37114e-08 1 1 -4.37114e-08 444 133)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.3'>
            <path
              className={`${styles.delay3} ${styles.line}  line3`}
              d='M586.558 270.303L633.227 316.972L633.227 404.653'
              stroke='black'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle3`}
              cx='633.581'
              cy='407.128'
              r='2.25'
              transform='rotate(135 633.581 407.128)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay1} ${styles.opacity} circle3`}
              cx='584.79'
              cy='269.242'
              r='2.25'
              transform='rotate(135 584.79 269.242)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path className={`${styles.delay3} ${styles.line}  line2`} d='M451 143.5H385L323 205.5' stroke='black' />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle2`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(4.37114e-08 1 1 -4.37114e-08 318 204)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay1} ${styles.opacity} circle2`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(4.37114e-08 1 1 -4.37114e-08 450 141)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay3} ${styles.line}  line2`}
              d='M270.749 133.657C294.749 109.657 300.749 103.657 300.749 103.657'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle2`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(0.707107 0.707107 0.707107 -0.707107 265.08 135.242)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle2`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(0.707107 0.707107 0.707107 -0.707107 297.92 102.243)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay4} ${styles.line}  line2`}
              d='M267.749 122.657C284.549 105.857 288.749 101.657 288.749 101.657'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle2`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(0.707107 0.707107 0.707107 -0.707107 262.08 124.242)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle2`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(0.707107 0.707107 0.707107 -0.707107 285.92 100.242)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay3} ${styles.line}  line2`}
              d='M396.13 153C419.889 153 425.828 153 425.828 153'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle2`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(-4.37114e-08 1 1 4.37114e-08 391 150.113)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay1} ${styles.opacity} circle2`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(-4.37114e-08 1 1 4.37114e-08 424.828 150)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay2} ${styles.line}  line1`}
              d='M170.828 321.749C181.228 332.149 183.828 334.749 183.828 334.749'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay1} ${styles.opacity} circle1`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(-0.707107 0.707107 0.707107 0.707107 169.243 316.08)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle1`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(-0.707107 0.707107 0.707107 0.707107 185.243 332)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay5} ${styles.line}  line14`}
              d='M433 545C447.4 545 451 545 451 545'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay4} ${styles.opacity} circle14`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(-4.37114e-08 1 1 4.37114e-08 428 542.056)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle14`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(-4.37114e-08 1 1 4.37114e-08 449.571 542)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay5} ${styles.line}  line1`}
              d='M96.8284 263.689C125.628 292.489 132.828 299.689 132.828 299.689'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay4} ${styles.opacity} circle1`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(-0.707107 0.707107 0.707107 0.707107 95.2426 258.02)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle1`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(-0.707107 0.707107 0.707107 0.707107 134.243 296.98)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.3'>
            <path
              className={`${styles.delay5} ${styles.line}  line2`}
              d='M245.657 131.669C278.467 98.8592 286.669 90.6568 286.669 90.6568'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay4} ${styles.opacity} circle2`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(0.707107 0.707107 0.707107 -0.707107 240 133.083)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay4} ${styles.opacity} circle2`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(0.707107 0.707107 0.707107 -0.707107 283.841 89.2427)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.3'>
            <path
              className={`${styles.delay3} ${styles.line}  line2`}
              d='M342.657 202.669C375.467 169.859 383.669 161.657 383.669 161.657'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle2`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(0.707107 0.707107 0.707107 -0.707107 337 204.083)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay1} ${styles.opacity} circle2`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(0.707107 0.707107 0.707107 -0.707107 380.841 160.243)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.3'>
            <path
              className={`${styles.delay5} ${styles.line}  line14`}
              d='M524.72 720.09V727.99V735.88V743.78V751.67V759.57V767.46V775.35V783.25V791.14V799.04V806.93V814.83V822.72L530.3 828.31V836.2V844.09V851.99V859.88V867.78V875.68V883.57V891.46V899.36V907.25V915.15V923.04V930.94V938.83V946.73V954.62L524.72 960.2L519.14 965.78L513.56 971.37L507.97 976.95L502.39 982.53L496.81 988.12L491.22 993.7L485.64 999.28L480.06 1004.86H472.16H464.27H456.38H448.48H440.59L435 1010.44V1002.55V994.66V986.76V978.86V970.97V963.07V955.18V947.29V939.39V931.5V923.6V915.71V907.81V899.92V892.02V884.13H427.11H419.21V876.24V868.34'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay4} ${styles.opacity} circle14`}
              d='M416 868.34C415.998 867.702 416.185 867.078 416.539 866.547C416.892 866.016 417.394 865.602 417.983 865.357C418.572 865.112 419.22 865.047 419.846 865.171C420.471 865.295 421.046 865.602 421.497 866.053C421.948 866.504 422.255 867.079 422.379 867.704C422.503 868.33 422.438 868.978 422.193 869.567C421.948 870.155 421.534 870.658 421.003 871.011C420.472 871.364 419.848 871.552 419.21 871.55C418.359 871.547 417.545 871.208 416.943 870.607C416.342 870.005 416.003 869.19 416 868.34Z'
              fill='#162029'
            />
            <path
              className={`${styles.delay3} ${styles.opacity} circle14`}
              d='M522 720.009C521.998 719.415 522.173 718.834 522.502 718.339C522.831 717.844 523.299 717.458 523.848 717.23C524.396 717.002 525 716.942 525.583 717.057C526.166 717.173 526.701 717.459 527.121 717.879C527.541 718.299 527.827 718.834 527.943 719.417C528.058 720 527.998 720.604 527.77 721.152C527.542 721.701 527.156 722.169 526.661 722.498C526.166 722.827 525.585 723.002 524.991 723C524.198 722.998 523.439 722.682 522.879 722.121C522.318 721.561 522.002 720.802 522 720.009Z'
              fill='#162029'
            />
          </g>
          <g opacity='0.3'>
            <path
              className={`${styles.delay3} ${styles.line}  line1`}
              d='M-56 178L-50.42 183.58L-44.84 189.16L-39.25 194.75L-33.67 200.33L-28.09 205.91L-22.51 211.49L-16.93 217.07L-11.34 222.66L-5.76 228.24L2.13 228.24L10.03 228.24L17.92 228.24L25.82 228.24L33.71 228.24L41.61 228.24L49.5 228.24L57.4 228.24L65.29 228.24L73.19 228.24L81.08 228.24L88.98 228.24L96.87 228.24L104.76 228.24L112.66 228.24L120.55 228.24L128.45 228.24L134.03 233.82L139.61 239.4L145.2 244.99L150.78 250.57L156.36 256.15L161.94 261.73L167.52 267.31L173.11 272.9L178.69 278.48L184.27 284.06L189.86 289.65L195.44 295.23L201.02 300.81L206.6 306.39L212.19 311.98L217.77 317.56L223.35 323.14L223.35 331.03L223.35 338.93L223.35 352.5'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay2} ${styles.opacity} circle1`}
              d='M225.255 356.267C224.906 356.617 224.462 356.855 223.979 356.952C223.495 357.048 222.994 356.999 222.539 356.81C222.083 356.621 221.694 356.3 221.42 355.889C221.146 355.478 221 354.995 221 354.5C221 354.005 221.146 353.522 221.42 353.111C221.694 352.7 222.083 352.379 222.539 352.19C222.994 352.001 223.495 351.952 223.979 352.048C224.462 352.145 224.906 352.383 225.255 352.733C225.491 352.962 225.678 353.237 225.806 353.541C225.934 353.844 226 354.17 226 354.5C226 354.83 225.934 355.156 225.806 355.459C225.678 355.763 225.491 356.038 225.255 356.267Z'
              fill='#162029'
            />
          </g>
          <g opacity='0.3'>
            <path
              className={`${styles.delay3} ${styles.line}  line3`}
              d='M446 497.39L451.59 502.97L459.48 502.97L467.38 502.97L475.27 502.97L483.17 502.97L491.06 502.97L498.96 502.97L506.85 502.97L514.74 502.97L522.64 502.97L530.53 502.97L538.43 502.97L546.32 502.97L554.22 502.97L562.11 502.97L570.01 502.97L577.9 502.97L585.8 502.97L593.69 502.97L601.59 502.97L609.48 502.97L617.38 502.97L622.96 497.39L630.85 497.39L638.74 497.39L646.64 497.39L654.54 497.39L662.43 497.39L670.33 497.39L678.22 497.39L686.11 497.39L694.01 497.39L701.9 497.39L709.8 497.39L717.69 497.39L725.59 497.39L733.48 497.39L741.38 497.39L749.27 497.39L754.85 491.8L754.85 483.91L749.27 478.32L743.69 472.74L738.11 467.16L738.11 459.27L738.11 451.37L738.11 443.48L738.11 435.58L732.53 430L724.63 430L716.74 430L708.84 430L700.95 430L700.95 437.9L706.53 443.48L712.11 449.06L717.69 454.64L723.28 460.22L728.86 465.81L734.44 471.39L740.02 476.97L745.6 482.55L751.19 488.13'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay2} ${styles.opacity} circle3`}
              d='M749.79 489.53C750.067 489.815 750.424 490.011 750.813 490.093C751.203 490.174 751.607 490.138 751.976 489.988C752.345 489.838 752.66 489.582 752.882 489.252C753.104 488.922 753.223 488.533 753.223 488.135C753.223 487.737 753.104 487.348 752.882 487.018C752.66 486.688 752.345 486.432 751.976 486.282C751.607 486.132 751.203 486.096 750.813 486.177C750.424 486.259 750.067 486.455 749.79 486.74C749.426 487.113 749.223 487.614 749.223 488.135C749.223 488.656 749.426 489.157 749.79 489.53Z'
              fill='#162029'
            />
          </g>
          <g opacity='0.2'>
            <path
              className={`${styles.delay2} ${styles.line}  line14`}
              d='M344.6 1024.11L344.6 1016.21L344.6 1008.32L344.6 1000.42L344.6 992.53L344.6 984.63L344.6 976.74L344.6 968.84L344.6 960.95L344.6 953.06L344.6 945.16L344.6 937.27L344.6 929.37L344.6 921.48L344.6 913.58L344.6 905.69L344.6 897.79L344.6 889.9L344.6 882L344.6 874.11L344.6 866.21L344.6 858.32L339.02 852.74L339.02 844.84L339.02 836.95L339.02 829.05L339.02 821.16L339.02 813.26L339.02 805.37L339.02 797.47L339.02 789.58L339.02 781.69L339.02 773.79L339.02 765.9L339.02 758'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay1} ${styles.opacity} circle14`}
              d='M342 758C342 757.407 341.824 756.827 341.494 756.333C341.165 755.84 340.696 755.455 340.148 755.228C339.6 755.001 338.997 754.942 338.415 755.058C337.833 755.173 337.298 755.459 336.879 755.879C336.459 756.298 336.173 756.833 336.058 757.415C335.942 757.997 336.001 758.6 336.228 759.148C336.455 759.696 336.84 760.165 337.333 760.494C337.827 760.824 338.407 761 339 761C339.796 761 340.559 760.684 341.121 760.121C341.684 759.559 342 758.796 342 758Z'
              fill='#162029'
            />
          </g>
          <g opacity='0.3'>
            <path
              className={`${styles.delay2} ${styles.line}  line2`}
              d='M315.588 -4.99991L315.588 2.89141L315.588 10.7827L315.588 18.674L315.595 26.5724L315.588 34.4708V42.3621L315.588 50.2534L315.588 58.1447L315.588 66.0502L315.588 73.9415L315.588 81.8328L315.595 89.7312L315.588 97.6296L315.588 105.521L310.009 111.1L304.423 116.686L298.843 122.265L293.257 127.851L287.678 133.43L282.092 139.016L276.513 144.596V152.487L282.099 158.073L287.678 163.652L293.257 169.231L293.264 177.13L293.257 185.028L293.257 192.919L293.264 200.818L298.843 206.397L304.43 211.983L310.009 217.562L315.588 223.141L321.174 228.727L321.167 301.428L321.167 309.319L321.174 317.217L321.174 325.109L321.174 333'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay1} ${styles.opacity} circle2`}
              d='M318.657 334.567C318.656 335.066 318.804 335.553 319.08 335.968C319.357 336.383 319.75 336.706 320.211 336.898C320.672 337.089 321.179 337.139 321.668 337.042C322.157 336.944 322.606 336.704 322.959 336.352C323.311 335.999 323.551 335.55 323.648 335.061C323.745 334.572 323.695 334.065 323.504 333.604C323.313 333.144 322.99 332.75 322.575 332.473C322.16 332.197 321.673 332.049 321.174 332.05C320.843 332.048 320.514 332.111 320.208 332.237C319.901 332.363 319.623 332.548 319.389 332.782C319.155 333.016 318.969 333.295 318.844 333.601C318.718 333.908 318.654 334.236 318.657 334.567Z'
              fill='#162029'
            />
          </g>
          <g opacity='0.3'>
            <path
              className={`${styles.delay5} ${styles.line}  line2`}
              d='M216.16 493.265L221.75 487.685L227.33 482.105L232.91 476.525L238.49 470.945L244.07 465.355L249.66 459.775L255.24 454.195L260.82 448.615L266.41 443.025L271.99 437.445L277.57 431.865L283.15 426.285L288.73 420.695L294.31 415.115L294.31 407.225L294.31 399.325L294.31 391.435L294.31 383.535L294.31 375.645L288.73 370.065L288.73 362.165L288.73 354.275L288.73 346.375L288.73 338.485L288.73 330.585L288.73 322.695L288.73 314.795L288.73 306.905L288.73 299.005L288.73 291.115L283.15 285.535L277.57 279.945L271.99 274.365L271.99 266.475L271.99 258.575L271.99 250.685L271.99 242.785L271.99 234.895L271.99 226.995L277.57 221.415L283.15 215.835L288.73 210.255L294.31 204.665L299.9 199.085L305.48 193.505L311.06 187.925L316.64 182.345L322.23 176.755L327.81 171.175L333.39 165.595L338.98 160.015L344.56 154.425L350.14 148.845L355.72 143.265L361.3 137.685L366.89 132.105L372.47 126.515L380.37 126.515L388.26 126.515L396.15 126.515L404.05 126.515L411.94 126.515L419.84 126.515L427.73 126.515L435.63 126.515L443.52 126.515L451.42 126.515L459.31 126.515L464.89 120.935'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay4} ${styles.opacity} circle2`}
              d='M466.26 122.295C466.622 121.933 466.825 121.442 466.825 120.93C466.825 120.418 466.622 119.927 466.26 119.565C465.898 119.203 465.407 119 464.895 119C464.383 119 463.892 119.203 463.53 119.565C463.168 119.927 462.965 120.418 462.965 120.93C462.965 121.442 463.168 121.933 463.53 122.295C463.892 122.657 464.383 122.861 464.895 122.861C465.407 122.861 465.898 122.657 466.26 122.295Z'
              fill='#162029'
            />
          </g>
          <g opacity='0.3'>
            <path
              className={`${styles.delay3} ${styles.line}  line13`}
              d='M320.9 781L315.32 786.58L309.74 792.17L304.16 797.75H296.26H288.37H280.47H272.58H264.68H256.79H248.89H241H233.11H225.21H217.32L211.73 803.33L206.15 808.91L200.57 814.49L194.99 820.08L189.4 825.66L183.82 831.24L178.24 836.82L172.66 842.41L167.07 847.99L161.49 853.57L155.91 859.15L150.33 864.74L144.74 870.32L139.16 875.9L133.58 881.48L128 887.07V894.96L133.58 900.54L139.16 906.13L144.74 911.71L150.33 917.29L155.91 922.87V914.98V907.08V899.19V891.29V883.4V875.5V867.61'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay2} ${styles.opacity} circle13`}
              d='M155.91 869.33C156.86 869.33 157.63 868.56 157.63 867.61C157.63 866.66 156.86 865.89 155.91 865.89C154.96 865.89 154.19 866.66 154.19 867.61C154.19 868.56 154.96 869.33 155.91 869.33Z'
              fill='#162029'
            />
            <path
              className={`${styles.delay1} ${styles.opacity} circle13`}
              d='M321.72 781.44C322.67 781.44 323.44 780.67 323.44 779.72C323.44 778.77 322.67 778 321.72 778C320.77 778 320 778.77 320 779.72C320 780.67 320.77 781.44 321.72 781.44Z'
              fill='#162029'
            />
          </g>
          <g opacity='0.3'>
            <path
              className={`${styles.delay3} ${styles.line}  line18`}
              d='M1105.54 488L1111.12 493.58L1116.7 499.17L1122.28 504.75H1130.18H1138.07H1145.97H1153.86H1161.76H1169.65H1177.55H1185.44H1193.33H1201.23H1209.12L1214.71 510.33L1220.29 515.91L1225.87 521.49L1231.45 527.08L1237.04 532.66L1242.62 538.24L1248.2 543.82L1253.78 549.41L1259.37 554.99L1264.95 560.57L1270.53 566.15L1276.11 571.74L1281.7 577.32L1287.28 582.9L1292.86 588.48L1298.44 594.07V601.96L1292.86 607.54L1287.28 613.13L1281.7 618.71L1276.11 624.29L1270.53 629.87V621.98V614.08V606.19V598.29V590.4V582.5V574.61'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay2} ${styles.opacity} circle18`}
              d='M1270.53 576.33C1269.58 576.33 1268.81 575.56 1268.81 574.61C1268.81 573.66 1269.58 572.89 1270.53 572.89C1271.48 572.89 1272.25 573.66 1272.25 574.61C1272.25 575.56 1271.48 576.33 1270.53 576.33Z'
              fill='#162029'
            />
            <path
              className={`${styles.delay1} ${styles.opacity} circle18`}
              d='M1104.72 488.44C1103.77 488.44 1103 487.67 1103 486.72C1103 485.77 1103.77 485 1104.72 485C1105.67 485 1106.44 485.77 1106.44 486.72C1106.44 487.67 1105.67 488.44 1104.72 488.44Z'
              fill='#162029'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay1} ${styles.line}  line1`}
              d='M201.226 417.57L201.226 409.68L201.226 401.79L201.226 393.89L201.226 386L201.226 378.1L201.226 370.2L201.226 362.31L201.226 354.42L201.226 346.52L201.226 338.63L201.226 330.73L195.636 325.15L190.056 319.57L184.476 313.98L178.886 308.4L173.306 302.82L167.726 297.24L162.146 291.66L156.566 286.08L150.976 280.49L145.396 274.91L139.816 269.33L134.236 263.74L128.646 258.16L123.066 252.58L117.486 247L111.906 241.41L106.316 235.83L100.736 230.25L100.736 222.36L100.736 214.46L100.736 206.57L100.736 198.67L100.736 190.78L95.1561 185.19L89.5761 179.61L83.9961 174.03L78.4061 168.45L72.8261 162.87L67.2461 157.28L61.6561 151.7L56.0761 146.12L50.4961 140.54L44.9161 134.95'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay1} ${styles.opacity} circle1`}
              d='M47.1368 132.881C46.7164 132.461 46.1805 132.174 45.5969 132.058C45.0133 131.942 44.4082 132.001 43.8582 132.228C43.3082 132.455 42.8381 132.839 42.5073 133.333C42.1766 133.826 42 134.406 42 135C42 135.594 42.1766 136.174 42.5073 136.667C42.8381 137.161 43.3082 137.545 43.8582 137.772C44.4082 137.999 45.0133 138.058 45.5969 137.942C46.1805 137.826 46.7164 137.539 47.1368 137.119C47.6903 136.552 48 135.792 48 135C48 134.208 47.6903 133.448 47.1368 132.881Z'
              fill='#162029'
            />
          </g>
          <g opacity='0.3'>
            <path
              className={`${styles.delay5} ${styles.line}  line1`}
              d='M79.0001 103.5L149.5 174V224.5L218 293.5'
              stroke='black'
            />
            <path
              className={`${styles.delay4} ${styles.opacity} circle1`}
              d='M78.4504 99.7937C78.8873 99.8807 79.2884 100.095 79.6033 100.408C80.0183 100.835 80.2501 101.406 80.2501 102C80.2501 102.594 80.0183 103.165 79.6033 103.592C79.2884 103.905 78.8873 104.119 78.4504 104.206C78.0119 104.294 77.5573 104.249 77.1443 104.079C76.7312 103.909 76.3785 103.62 76.1304 103.25C75.8823 102.88 75.7501 102.445 75.7501 102C75.7501 101.555 75.8823 101.12 76.1304 100.75C76.3785 100.38 76.7312 100.091 77.1443 99.9211C77.5573 99.7507 78.0119 99.7063 78.4504 99.7937Z'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay3} ${styles.opacity} circle1`}
              d='M220.45 292.794C220.887 292.881 221.288 293.095 221.603 293.408C222.018 293.835 222.25 294.406 222.25 295C222.25 295.594 222.018 296.165 221.603 296.592C221.288 296.905 220.887 297.119 220.45 297.206C220.012 297.294 219.557 297.249 219.144 297.079C218.731 296.909 218.378 296.62 218.13 296.25C217.882 295.88 217.75 295.445 217.75 295C217.75 294.555 217.882 294.12 218.13 293.75C218.378 293.38 218.731 293.091 219.144 292.921C219.557 292.751 220.012 292.706 220.45 292.794Z'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.3'>
            <path
              className={`${styles.delay3} ${styles.line}  line4`}
              d='M874.361 265.01L874.361 364.713L838.652 400.421L838.298 497.649'
              stroke='black'
            />
            <path
              className={`${styles.delay2} ${styles.opacity} circle4`}
              d='M876.593 262.001C876.84 262.372 876.973 262.806 876.974 263.251C876.965 263.846 876.725 264.414 876.305 264.834C875.885 265.254 875.318 265.493 874.722 265.502C874.278 265.501 873.843 265.369 873.473 265.121C873.101 264.873 872.811 264.52 872.639 264.108C872.468 263.695 872.422 263.241 872.508 262.804C872.595 262.367 872.809 261.966 873.123 261.652C873.438 261.337 873.839 261.123 874.276 261.037C874.713 260.951 875.167 260.996 875.579 261.168C875.992 261.339 876.345 261.629 876.593 262.001Z'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay2} ${styles.opacity} circle4`}
              d='M840.53 498.882C840.778 499.252 840.91 499.687 840.911 500.132C840.903 500.727 840.663 501.295 840.243 501.715C839.823 502.135 839.255 502.374 838.66 502.383C838.215 502.382 837.781 502.249 837.41 502.002C837.038 501.754 836.748 501.401 836.577 500.988C836.405 500.576 836.36 500.122 836.446 499.685C836.532 499.248 836.746 498.847 837.061 498.533C837.375 498.218 837.776 498.004 838.213 497.918C838.651 497.831 839.104 497.877 839.517 498.048C839.929 498.22 840.282 498.51 840.53 498.882Z'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path
              id='myLine2'
              className={`${styles.delay5} ${styles.line}  line3`}
              d='M645.588 449L645.588 414.873L645.588 406.982L645.588 399.091L645.595 391.192L645.588 383.294L645.588 375.402L645.588 367.511L645.588 359.62L645.588 351.714L645.588 343.823L645.588 335.932L645.595 328.033L645.588 320.135L645.588 312.244L640.009 306.665L634.422 301.078L628.843 295.499L623.257 289.913L617.678 284.334L612.092 278.748L606.513 273.169L606.513 265.278L612.099 259.692L617.678 254.112L623.257 248.533L623.264 240.635L623.257 232.737L623.257 224.845L623.264 216.947L628.843 211.368L634.43 205.782L640.009 200.203L645.588 194.624L651.174 189.037L651.167 181.139L651.167 173.248L651.174 165.349L651.174 157.458L651.174 149.567'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay4} ${styles.opacity} circle3`}
              d='M648.656 149.567C648.656 149.068 648.803 148.58 649.08 148.166C649.357 147.751 649.75 147.427 650.211 147.236C650.671 147.045 651.178 146.995 651.667 147.092C652.157 147.189 652.606 147.429 652.958 147.782C653.311 148.135 653.551 148.584 653.648 149.073C653.745 149.562 653.695 150.069 653.504 150.53C653.313 150.99 652.99 151.384 652.575 151.66C652.16 151.937 651.672 152.084 651.174 152.084C650.843 152.086 650.514 152.023 650.208 151.897C649.901 151.771 649.623 151.586 649.389 151.352C649.154 151.118 648.969 150.839 648.843 150.533C648.718 150.226 648.654 149.898 648.656 149.567Z'
              fill='#162029'
            />
          </g>
          <g opacity='0.15'>
            <path
              className={`${styles.delay3} ${styles.line}  line15`}
              d='M363 414L368.58 419.58L374.17 425.16L379.75 430.75L385.33 436.33L390.91 441.91L396.49 447.49L402.07 453.07L407.66 458.66L413.24 464.24L418.82 469.82L424.41 475.41L429.99 480.99H437.88H445.78H453.67H461.57H469.46H477.36H485.25H493.15H501.04H508.93H516.83L522.41 486.57H530.31H538.2H546.1H553.99H561.88H569.78H577.67H585.57H593.46H601.36H609.25H617.15H625.04H632.93H640.83L646.41 492.15L652 497.73L657.58 503.32L663.16 508.9L668.74 514.48L674.33 520.06L679.91 525.65L685.49 531.23L691.07 536.81L696.65 542.39L702.24 547.97L707.82 553.56L713.4 559.14L718.98 564.72L724.57 570.31L730.15 575.89L735.73 581.47L741.31 587.05L746.9 592.64H754.79H762.68H770.58H778.48H786.37H794.26H802.16H810.05L815.64 587.05L821.22 581.47L826.8 575.89L832.38 570.31L837.97 564.72L843.55 559.14L849.13 553.56L854.71 547.97L860.29 542.39L865.88 536.81L871.46 531.23L877.04 525.65L882.63 520.06L888.21 514.48L893.79 508.9L899.37 503.32H907.27H915.16H923.05H930.95H938.84H946.74H954.64H962.53H970.42H978.32H986.21H994.11H1002H1009.9H1017.79H1025.69H1033.58H1041.48H1049.37L1054.95 508.9L1060.54 514.48L1066.12 520.06L1071.7 525.65L1077.28 531.23L1082.87 536.81L1088.45 542.39V550.29'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              d='M1085.91 550.29C1085.91 550.792 1086.06 551.283 1086.34 551.701C1086.62 552.119 1087.01 552.444 1087.48 552.637C1087.94 552.829 1088.45 552.879 1088.95 552.781C1089.44 552.683 1089.89 552.441 1090.25 552.086C1090.6 551.731 1090.84 551.278 1090.94 550.786C1091.04 550.293 1090.99 549.782 1090.8 549.318C1090.6 548.854 1090.28 548.457 1089.86 548.178C1089.44 547.899 1088.95 547.75 1088.45 547.75C1087.78 547.75 1087.13 548.018 1086.65 548.494C1086.18 548.97 1085.91 549.616 1085.91 550.29Z'
              fill='#162029'
            />
          </g>
          <g opacity='0.2'>
            <path
              className={`${styles.delay2} ${styles.line}  line15`}
              d='M589 979.49H596.9H604.79H612.69H620.58H628.48H636.37H644.26H652.16H660.05H667.95H675.85H683.74H691.63H699.53H707.42H715.32H723.21H731.11H739H746.9H754.79H762.68H770.58H778.47L784.06 973.91L789.64 968.33L795.22 962.74L800.8 957.16V949.27V941.37V933.479V925.59V917.69V909.79L806.39 904.21'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay1} ${styles.opacity} circle15`}
              d='M807.96 905.79C808.27 905.479 808.482 905.084 808.567 904.653C808.653 904.222 808.609 903.776 808.441 903.37C808.273 902.965 807.988 902.618 807.623 902.374C807.258 902.13 806.829 902 806.39 902C805.951 902 805.522 902.13 805.157 902.374C804.792 902.618 804.507 902.965 804.339 903.37C804.171 903.776 804.127 904.222 804.213 904.653C804.298 905.084 804.51 905.479 804.82 905.79C805.238 906.204 805.802 906.436 806.39 906.436C806.978 906.436 807.542 906.204 807.96 905.79Z'
              fill='#162029'
            />
          </g>
          <g opacity='0.2'>
            <path
              className={`${styles.delay2} ${styles.line}  line4`}
              d='M622 123.51H629.9H637.79H645.69H653.58H661.48H669.37H677.26H685.16H693.05H700.95H708.85H716.74H724.63H732.53H740.42H748.32H756.21H764.11H772H779.9H787.79H795.68H803.58H811.47L817.06 129.09L822.64 134.67L828.22 140.26L833.8 145.84V153.73V161.63V169.521V177.41V185.31V193.21L839.39 198.79'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay4} ${styles.opacity} circle4`}
              d='M840.96 197.21C841.27 197.521 841.482 197.916 841.567 198.347C841.653 198.778 841.609 199.224 841.441 199.63C841.273 200.035 840.988 200.382 840.623 200.626C840.258 200.87 839.829 201 839.39 201C838.951 201 838.522 200.87 838.157 200.626C837.792 200.382 837.507 200.035 837.339 199.63C837.171 199.224 837.127 198.778 837.213 198.347C837.298 197.916 837.51 197.521 837.82 197.21C838.238 196.796 838.802 196.564 839.39 196.564C839.978 196.564 840.542 196.796 840.96 197.21Z'
              fill='#162029'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay2} ${styles.line}  line13`}
              d='M20.8644 1025.96L26.4434 1020.38L32.0296 1014.79L37.6157 1009.2L43.1948 1003.63L48.7739 998.047L54.36 992.46L62.2584 992.468L70.1497 992.468L78.0481 992.46L85.9394 992.461L93.8307 992.46L101.729 992.468L109.627 992.461L117.519 992.46L125.41 992.461L133.308 992.468L141.2 992.468L146.786 986.881L152.365 981.302L157.951 975.716L163.53 970.137L169.116 964.551L177.008 964.551L184.906 964.558L192.797 964.558L200.696 964.551H208.587L216.478 964.551L224.377 964.544L232.275 964.551L240.166 964.551L248.058 964.551H255.949L263.847 964.558L271.746 964.551H279.637L285.223 970.137L290.802 975.716H298.694H306.599H314.49H322.382H330.273H338.179H346.07H353.961L361.852 975.716H369.744L377.649 975.716L385.541 975.716H393.432L401.33 975.723L406.916 970.137L414.808 970.137L422.699 970.137H430.59L438.489 970.13L446.387 970.137L454.278 970.137L462.177 970.13L467.756 964.551L473.342 958.965L478.921 953.386L484.5 947.807L490.086 942.221L490.086 934.329L490.086 926.438L490.079 918.54L490.086 910.641L490.086 902.75L495.672 897.164L501.252 891.585L506.831 886.006L512.417 880.419'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay1} ${styles.opacity} circle13`}
              d='M513.937 881.94C514.238 881.639 514.442 881.256 514.525 880.839C514.608 880.422 514.566 879.99 514.403 879.597C514.24 879.204 513.965 878.868 513.611 878.632C513.258 878.396 512.842 878.269 512.417 878.269C511.991 878.269 511.576 878.396 511.222 878.632C510.869 878.868 510.593 879.204 510.43 879.597C510.268 879.99 510.225 880.422 510.308 880.839C510.391 881.256 510.596 881.639 510.896 881.94C511.3 882.343 511.846 882.569 512.417 882.569C512.987 882.569 513.534 882.343 513.937 881.94Z'
              fill='#162029'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay3} ${styles.line}  line3`}
              d='M828.808 -14.2567L823.229 -8.67762L817.643 -3.09148L812.057 2.49466L806.478 8.07374L800.898 13.6528L795.312 19.239L787.414 19.2319L779.523 19.2319L771.624 19.239L763.733 19.239L755.842 19.239L747.943 19.2319L740.045 19.239L732.154 19.239L724.262 19.239L716.364 19.2319L708.473 19.2319L702.886 24.818L697.307 30.3971L691.721 35.9833L686.142 41.5623L680.556 47.1485L672.665 47.1485L664.766 47.1414L656.875 47.1414L648.977 47.1485H641.085L633.194 47.1485L625.296 47.1555L617.397 47.1485L609.506 47.1485L601.615 47.1485H593.723L585.825 47.1414L577.927 47.1485H570.035L564.449 41.5623L558.87 35.9832H550.979H543.073H535.182H527.291H519.399H511.494H503.603H495.711L487.82 35.9832H479.929L472.023 35.9832L464.132 35.9832H456.241L448.342 35.9762L442.756 41.5623L434.865 41.5623L426.973 41.5623H419.082L411.184 41.5694L403.285 41.5623L395.394 41.5623L387.496 41.5694L381.917 47.1485L376.33 52.7346L370.751 58.3137L365.172 63.8928L359.586 69.4789L359.586 77.3702L359.586 85.2615L359.593 93.1599L359.586 101.058L359.586 108.95L354 114.536L348.421 120.115L342.842 125.694L337.256 131.28'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay2} ${styles.opacity} circle3`}
              d='M335.735 129.76C335.435 130.06 335.23 130.443 335.147 130.861C335.064 131.278 335.107 131.71 335.269 132.103C335.432 132.496 335.708 132.831 336.061 133.068C336.415 133.304 336.83 133.43 337.256 133.43C337.681 133.43 338.097 133.304 338.45 133.068C338.804 132.831 339.079 132.496 339.242 132.103C339.405 131.71 339.447 131.278 339.364 130.861C339.281 130.443 339.077 130.06 338.776 129.76C338.373 129.357 337.826 129.13 337.256 129.13C336.685 129.13 336.139 129.357 335.735 129.76Z'
              fill='#162029'
            />
          </g>
          <g opacity='0.3'>
            <path
              className={`${styles.delay5} ${styles.line}  line13`}
              d='M45.7086 756.898L45.7086 764.789L45.7157 772.688L45.7086 780.586L45.7086 788.478L45.7086 796.369L45.7157 804.267L45.7157 812.159L45.7157 820.05L51.2947 825.629L56.8809 831.215L62.467 836.801L68.0461 842.38L73.6252 847.959L73.6252 855.865L73.6252 863.756L73.6252 871.647L73.6181 879.546L73.6181 887.437L73.6252 895.336L73.6252 903.227L73.6252 911.118L73.6252 919.024L73.6252 926.915L73.6251 934.806L73.6251 942.698L73.6181 950.596L73.6251 958.494L68.0461 964.073L62.4599 969.66L56.8809 975.239L51.2947 980.825L45.7156 986.404L40.1295 980.818'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay3} ${styles.opacity} circle13`}
              d='M42.143 978.804C41.7448 978.406 41.2374 978.135 40.685 978.025C40.1326 977.915 39.5601 977.972 39.0397 978.187C38.5194 978.403 38.0747 978.768 37.7618 979.236C37.4489 979.704 37.2819 980.255 37.2819 980.818C37.2819 981.381 37.4489 981.932 37.7618 982.4C38.0747 982.868 38.5194 983.233 39.0397 983.449C39.5601 983.664 40.1326 983.721 40.685 983.611C41.2374 983.501 41.7448 983.23 42.143 982.831C42.677 982.297 42.977 981.573 42.977 980.818C42.977 980.063 42.677 979.338 42.143 978.804Z'
              fill='#162029'
            />
          </g>
          <g opacity='0.2'>
            <path
              className={`${styles.delay3} ${styles.line}  line16`}
              d='M677 690.484L684.9 690.484L692.79 690.484L700.68 690.484L706.26 684.904L711.85 679.324L717.43 673.734L723.01 668.154L728.6 662.574L736.49 662.574L744.39 662.574L752.28 662.574L760.17 662.574L768.07 662.574L775.96 662.574L783.86 662.574L791.76 662.574L799.65 662.574L807.54 662.574L815.44 662.574L823.33 662.574L831.23 662.574L836.81 656.984L842.39 651.404L847.98 645.824L853.56 640.244L859.14 634.664L864.72 629.074L870.3 623.494L875.88 617.914L881.47 612.334L887.05 606.744L894.95 606.744L902.84 606.744L910.74 606.744L918.63 606.744L926.52 606.744L934.42 606.744L942.31 606.744L950.21 606.744L958.1 606.744L966 606.744L973.89 606.744L981.79 606.744L987.37 612.334L992.95 617.914L998.53 623.494L1004.12 629.074L1009.7 623.494L1015.28 617.914L1020.86 612.334L1026.45 606.744'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay2} ${styles.opacity} circle16`}
              d='M1030.25 605.006C1030.27 605.591 1030.06 606.159 1029.67 606.599C1029.24 607.016 1028.66 607.25 1028.05 607.25C1027.44 607.25 1026.85 607.012 1026.41 606.587C1025.99 606.149 1025.75 605.562 1025.75 604.951C1025.75 604.345 1025.98 603.763 1026.4 603.325C1026.84 602.94 1027.41 602.735 1027.99 602.751C1028.59 602.767 1029.15 603.01 1029.57 603.429C1029.99 603.849 1030.23 604.413 1030.25 605.006Z'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay1} ${styles.opacity} circle16`}
              d='M676.249 690.006C676.265 690.591 676.06 691.159 675.675 691.599C675.237 692.016 674.655 692.25 674.049 692.25C673.438 692.25 672.851 692.012 672.413 691.587C671.988 691.149 671.75 690.562 671.75 689.951C671.75 689.345 671.984 688.763 672.401 688.325C672.841 687.94 673.409 687.735 673.994 687.751C674.587 687.767 675.151 688.01 675.571 688.429C675.99 688.849 676.233 689.413 676.249 690.006Z'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.2'>
            <path
              className={`${styles.delay3} ${styles.line}  line4`}
              d='M801.485 221L801.485 228.9L801.485 236.79L801.485 244.68L795.905 250.26L790.325 255.85L784.735 261.43L779.155 267.01L773.575 272.6L773.575 280.49L773.575 288.39L773.575 296.28L773.575 304.17L773.575 312.07L773.575 319.96L773.575 327.86L773.575 335.76L773.575 343.65L773.575 351.54'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay2} ${styles.opacity} circle4`}
              d='M774.006 356.249C774.591 356.265 775.159 356.06 775.599 355.675C776.017 355.237 776.25 354.655 776.25 354.049C776.25 353.438 776.012 352.851 775.588 352.413C775.149 351.988 774.562 351.75 773.951 351.75C773.345 351.75 772.763 351.984 772.325 352.401C771.94 352.841 771.735 353.409 771.751 353.994C771.767 354.587 772.01 355.151 772.429 355.571C772.849 355.99 773.413 356.233 774.006 356.249Z'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay1} ${styles.opacity} circle4`}
              d='M801.006 220.249C801.591 220.265 802.159 220.06 802.599 219.675C803.017 219.237 803.25 218.655 803.25 218.049C803.25 217.438 803.012 216.851 802.588 216.413C802.149 215.988 801.562 215.75 800.951 215.75C800.345 215.75 799.763 215.984 799.325 216.401C798.94 216.841 798.735 217.409 798.751 217.994C798.767 218.587 799.01 219.151 799.429 219.571C799.849 219.99 800.413 220.233 801.006 220.249Z'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay5} ${styles.line}  line2`}
              d='M471 217V224.9V232.79V240.69V248.58V256.48V264.37V272.27V280.16V288.06V295.95V303.85V311.74L476.58 317.32V325.22V333.11V341.01V348.9V356.8V364.69V372.59V380.48V388.37V396.27V404.16V412.06'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay4} ${styles.opacity} circle2`}
              d='M473.6 412.06C473.6 412.653 473.776 413.233 474.106 413.727C474.435 414.22 474.904 414.605 475.452 414.832C476 415.059 476.603 415.118 477.185 415.002C477.767 414.887 478.302 414.601 478.721 414.181C479.141 413.762 479.427 413.227 479.542 412.645C479.658 412.063 479.599 411.46 479.372 410.912C479.145 410.364 478.76 409.895 478.267 409.566C477.773 409.236 477.193 409.06 476.6 409.06C475.804 409.06 475.041 409.376 474.479 409.939C473.916 410.501 473.6 411.264 473.6 412.06Z'
              fill='#162029'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay3} ${styles.line}  line15`}
              d='M644.669 900.669C586.269 842.269 571.669 827.669 571.669 827.669'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle15`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(0.707107 -0.707107 -0.707107 -0.707107 646.083 906.326)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay1} ${styles.opacity} circle15`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(0.707107 -0.707107 -0.707107 -0.707107 570.243 830.485)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.6'>
            <path
              className={`${styles.delay3} ${styles.line}  line15`}
              d='M654 970.5H771L792 950.5V925.5'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle15`}
              cx='792'
              cy='923'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.3'>
            <path
              className={`${styles.delay3} ${styles.line}  line4`}
              d='M687 132.5H804L825 152.5V177.5'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle4`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(1 0 0 -1 822 183)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.3'>
            <path
              className={`${styles.delay5} ${styles.line}  line17`}
              d='M1142.5 969L1054 969L1039 984'
              stroke='black'
            />
            <path
              className={`${styles.delay2} ${styles.opacity} circle17`}
              d='M1036 981.91C1037.16 981.91 1038.28 982.311 1039.17 983.045C1040.07 983.779 1040.68 984.801 1040.91 985.935C1041.13 987.07 1040.96 988.248 1040.41 989.269C1039.86 990.289 1038.98 991.088 1037.91 991.531C1036.84 991.973 1035.65 992.03 1034.55 991.694C1033.44 991.357 1032.48 990.647 1031.84 989.684C1031.2 988.722 1030.91 987.566 1031.03 986.415C1031.14 985.263 1031.65 984.187 1032.47 983.37C1033.41 982.435 1034.68 981.91 1036 981.91ZM1036 988.91C1036.4 988.91 1036.78 988.794 1037.11 988.575C1037.44 988.355 1037.7 988.044 1037.85 987.679C1038 987.314 1038.04 986.913 1037.96 986.525C1037.89 986.137 1037.7 985.78 1037.42 985.5C1037.23 985.314 1037.01 985.167 1036.77 985.066C1036.53 984.965 1036.27 984.914 1036 984.914C1035.74 984.914 1035.48 984.965 1035.24 985.066C1035 985.167 1034.78 985.314 1034.59 985.5C1034.22 985.875 1034.01 986.382 1034.01 986.91C1034.01 987.439 1034.22 987.945 1034.59 988.32C1034.96 988.696 1035.47 988.908 1036 988.91Z'
              fill='black'
            />
          </g>
          <path className={`${styles.delay3} ${styles.line}  line17`} d='M1142 970H1053L1038 985' stroke='white' />
          <path
            className={`${styles.delay2} ${styles.opacity} circle17`}
            d='M1035 982.91C1036.16 982.91 1037.28 983.311 1038.17 984.045C1039.07 984.779 1039.68 985.801 1039.91 986.935C1040.13 988.07 1039.96 989.248 1039.41 990.269C1038.86 991.289 1037.98 992.088 1036.91 992.531C1035.84 992.973 1034.65 993.03 1033.55 992.694C1032.44 992.357 1031.48 991.647 1030.84 990.684C1030.2 989.722 1029.91 988.566 1030.03 987.415C1030.14 986.263 1030.65 985.187 1031.47 984.37C1032.41 983.435 1033.68 982.91 1035 982.91ZM1035 989.91C1035.4 989.91 1035.78 989.794 1036.11 989.575C1036.44 989.355 1036.7 989.044 1036.85 988.679C1037 988.314 1037.04 987.913 1036.96 987.525C1036.89 987.137 1036.7 986.78 1036.42 986.5C1036.23 986.314 1036.01 986.167 1035.77 986.066C1035.53 985.965 1035.27 985.914 1035 985.914C1034.74 985.914 1034.48 985.965 1034.24 986.066C1034 986.167 1033.78 986.314 1033.59 986.5C1033.22 986.875 1033.01 987.382 1033.01 987.91C1033.01 988.439 1033.22 988.945 1033.59 989.32C1033.96 989.696 1034.47 989.908 1035 989.91Z'
            fill='white'
          />
          <g opacity='0.4'>
            <path
              className={`${styles.delay4} ${styles.opacity} circle18`}
              d='M1397 762.988C1397 763.582 1396.83 764.163 1396.5 764.658C1396.17 765.153 1395.7 765.539 1395.16 765.768C1394.61 765.997 1394 766.058 1393.42 765.944C1392.84 765.829 1392.3 765.545 1391.88 765.125C1391.46 764.706 1391.18 764.172 1391.06 763.59C1390.94 763.007 1391 762.404 1391.23 761.855C1391.45 761.306 1391.84 760.837 1392.33 760.506C1392.83 760.176 1393.41 760 1394 760C1394.79 760 1395.55 760.314 1396.12 760.875C1396.68 761.435 1397 762.195 1397 762.988ZM1392.29 762.988C1392.29 763.329 1392.39 763.663 1392.58 763.947C1392.77 764.231 1393.03 764.453 1393.35 764.585C1393.66 764.716 1394.01 764.751 1394.34 764.685C1394.68 764.619 1394.99 764.455 1395.23 764.215C1395.47 763.974 1395.63 763.666 1395.7 763.332C1395.76 762.998 1395.73 762.652 1395.6 762.337C1395.46 762.023 1395.24 761.755 1394.96 761.567C1394.67 761.379 1394.34 761.28 1394 761.282C1393.55 761.282 1393.11 761.462 1392.79 761.782C1392.47 762.102 1392.29 762.536 1392.29 762.988Z'
              fill='#162029'
            />
            <path
              className={`${styles.delay5} ${styles.line}  line18`}
              d='M1379.51 922.5V871.5L1394.01 857V765'
              stroke='#162029'
            />
          </g>
          <path
            className={`${styles.delay3} ${styles.line}  line17`}
            d='M1185 948.5L1094.5 948.5L1079.5 936L1045 936'
            stroke='url(#paint44_linear_110_2)'
          />
          <path
            className={`${styles.delay2} ${styles.opacity} circle17`}
            d='M1042.99 933C1043.58 932.998 1044.16 933.172 1044.66 933.5C1045.15 933.828 1045.54 934.296 1045.77 934.844C1046 935.392 1046.06 935.995 1045.94 936.578C1045.83 937.161 1045.54 937.696 1045.13 938.117C1044.71 938.538 1044.17 938.825 1043.59 938.941C1043.01 939.058 1042.4 938.999 1041.85 938.773C1041.31 938.546 1040.84 938.162 1040.51 937.668C1040.18 937.174 1040 936.594 1040 936C1040 935.206 1040.31 934.445 1040.87 933.883C1041.43 933.321 1042.19 933.003 1042.99 933ZM1042.99 937.706C1043.33 937.708 1043.66 937.609 1043.95 937.421C1044.23 937.233 1044.45 936.965 1044.58 936.651C1044.72 936.337 1044.75 935.99 1044.69 935.656C1044.62 935.322 1044.46 935.015 1044.21 934.774C1043.97 934.533 1043.67 934.369 1043.33 934.303C1043 934.237 1042.65 934.272 1042.34 934.404C1042.02 934.535 1041.75 934.757 1041.57 935.041C1041.38 935.326 1041.28 935.659 1041.28 936C1041.28 936.452 1041.46 936.886 1041.78 937.206C1042.1 937.526 1042.54 937.706 1042.99 937.706Z'
            fill='#D6C3BA'
          />
          <path
            className={`${styles.delay1} ${styles.opacity} circle17`}
            d='M1186.99 945C1187.58 944.998 1188.16 945.172 1188.66 945.5C1189.15 945.828 1189.54 946.296 1189.77 946.844C1190 947.392 1190.06 947.995 1189.94 948.578C1189.83 949.161 1189.54 949.696 1189.13 950.117C1188.71 950.538 1188.17 950.825 1187.59 950.941C1187.01 951.058 1186.4 950.999 1185.85 950.773C1185.31 950.546 1184.84 950.162 1184.51 949.668C1184.18 949.174 1184 948.594 1184 948C1184 947.206 1184.31 946.445 1184.87 945.883C1185.43 945.321 1186.19 945.003 1186.99 945ZM1186.99 949.706C1187.33 949.708 1187.66 949.609 1187.95 949.421C1188.23 949.233 1188.45 948.965 1188.58 948.651C1188.72 948.337 1188.75 947.99 1188.69 947.656C1188.62 947.322 1188.46 947.015 1188.21 946.774C1187.97 946.533 1187.67 946.369 1187.33 946.303C1187 946.237 1186.65 946.272 1186.34 946.404C1186.02 946.535 1185.75 946.757 1185.57 947.041C1185.38 947.326 1185.28 947.659 1185.28 948C1185.28 948.452 1185.46 948.886 1185.78 949.206C1186.1 949.526 1186.54 949.706 1186.99 949.706Z'
            fill='#CBC3BA'
          />
          <path
            className={`${styles.delay5} ${styles.line}  line17`}
            d='M1138.5 716L1138.5 625.5L1151 610.5L1151 576'
            stroke='url(#paint45_linear_110_2)'
          />
          <path
            className={`${styles.delay4} ${styles.opacity} circle17`}
            d='M1154 573.988C1154 574.582 1153.83 575.163 1153.5 575.658C1153.17 576.153 1152.7 576.539 1152.16 576.768C1151.61 576.997 1151 577.058 1150.42 576.944C1149.84 576.829 1149.3 576.545 1148.88 576.125C1148.46 575.706 1148.18 575.172 1148.06 574.59C1147.94 574.007 1148 573.404 1148.23 572.855C1148.45 572.306 1148.84 571.837 1149.33 571.506C1149.83 571.176 1150.41 571 1151 571C1151.79 571 1152.55 571.314 1153.12 571.875C1153.68 572.435 1154 573.195 1154 573.988ZM1149.29 573.988C1149.29 574.329 1149.39 574.663 1149.58 574.947C1149.77 575.231 1150.03 575.453 1150.35 575.585C1150.66 575.716 1151.01 575.751 1151.34 575.685C1151.68 575.619 1151.99 575.455 1152.23 575.215C1152.47 574.974 1152.63 574.666 1152.7 574.332C1152.76 573.998 1152.73 573.652 1152.6 573.337C1152.46 573.023 1152.24 572.755 1151.96 572.567C1151.67 572.379 1151.34 572.28 1151 572.282C1150.55 572.282 1150.11 572.462 1149.79 572.782C1149.47 573.102 1149.29 573.536 1149.29 573.988Z'
            fill='#D6C3BA'
          />
          <path
            className={`${styles.delay3} ${styles.opacity} circle17`}
            d='M1142 717.988C1142 718.582 1141.83 719.163 1141.5 719.658C1141.17 720.153 1140.7 720.539 1140.16 720.768C1139.61 720.997 1139 721.058 1138.42 720.944C1137.84 720.829 1137.3 720.545 1136.88 720.125C1136.46 719.706 1136.18 719.172 1136.06 718.59C1135.94 718.007 1136 717.404 1136.23 716.855C1136.45 716.306 1136.84 715.837 1137.33 715.506C1137.83 715.176 1138.41 715 1139 715C1139.79 715 1140.55 715.314 1141.12 715.875C1141.68 716.435 1142 717.195 1142 717.988ZM1137.29 717.988C1137.29 718.329 1137.39 718.663 1137.58 718.947C1137.77 719.231 1138.03 719.453 1138.35 719.585C1138.66 719.716 1139.01 719.751 1139.34 719.685C1139.68 719.619 1139.99 719.455 1140.23 719.215C1140.47 718.974 1140.63 718.666 1140.7 718.332C1140.76 717.998 1140.73 717.652 1140.6 717.337C1140.46 717.023 1140.24 716.755 1139.96 716.567C1139.67 716.379 1139.34 716.28 1139 716.282C1138.55 716.282 1138.11 716.462 1137.79 716.782C1137.47 717.102 1137.29 717.536 1137.29 717.988Z'
            fill='#CBC3BA'
          />
          <path
            className={`${styles.delay3} ${styles.line}  line18`}
            d='M1395.5 711.5L1395.5 742.5L1383 757.5L1383 792'
            stroke='#A6D0DD'
          />
          <path
            className={`${styles.delay2} ${styles.opacity} circle18`}
            d='M1380 794.012C1380 793.418 1380.17 792.837 1380.5 792.342C1380.83 791.847 1381.3 791.461 1381.84 791.232C1382.39 791.003 1383 790.942 1383.58 791.056C1384.16 791.171 1384.7 791.455 1385.12 791.875C1385.54 792.294 1385.82 792.828 1385.94 793.41C1386.06 793.993 1386 794.596 1385.77 795.145C1385.55 795.694 1385.16 796.163 1384.67 796.494C1384.17 796.824 1383.59 797 1383 797C1382.21 797 1381.45 796.686 1380.88 796.125C1380.32 795.565 1380 794.805 1380 794.012ZM1384.71 794.012C1384.71 793.671 1384.61 793.337 1384.42 793.053C1384.23 792.769 1383.97 792.547 1383.65 792.415C1383.34 792.284 1382.99 792.249 1382.66 792.315C1382.32 792.381 1382.01 792.545 1381.77 792.785C1381.53 793.026 1381.37 793.334 1381.3 793.668C1381.24 794.002 1381.27 794.348 1381.4 794.663C1381.54 794.977 1381.76 795.245 1382.04 795.433C1382.33 795.621 1382.66 795.72 1383 795.718C1383.45 795.718 1383.89 795.538 1384.21 795.218C1384.53 794.898 1384.71 794.464 1384.71 794.012Z'
            fill='#A6D0DD'
          />
          <path
            className={`${styles.delay1} ${styles.opacity} circle18`}
            d='M1392 709.012C1392 708.418 1392.17 707.837 1392.5 707.342C1392.83 706.847 1393.3 706.461 1393.84 706.232C1394.39 706.003 1395 705.942 1395.58 706.056C1396.16 706.171 1396.7 706.455 1397.12 706.875C1397.54 707.294 1397.82 707.828 1397.94 708.41C1398.06 708.993 1398 709.596 1397.77 710.145C1397.55 710.694 1397.16 711.163 1396.67 711.494C1396.17 711.824 1395.59 712 1395 712C1394.21 712 1393.45 711.686 1392.88 711.125C1392.32 710.565 1392 709.805 1392 709.012ZM1396.71 709.012C1396.71 708.671 1396.61 708.337 1396.42 708.053C1396.23 707.769 1395.97 707.547 1395.65 707.415C1395.34 707.284 1394.99 707.249 1394.66 707.315C1394.32 707.381 1394.01 707.545 1393.77 707.785C1393.53 708.026 1393.37 708.334 1393.3 708.668C1393.24 709.002 1393.27 709.348 1393.4 709.663C1393.54 709.977 1393.76 710.245 1394.04 710.433C1394.33 710.621 1394.66 710.72 1395 710.718C1395.45 710.718 1395.89 710.538 1396.21 710.218C1396.53 709.898 1396.71 709.464 1396.71 709.012Z'
            fill='#A6D0DD'
          />
          <path
            className={`${styles.delay3} ${styles.line}  line17`}
            d='M1141.5 576.5L1141.5 607.5L1129 622.5L1129 657'
            stroke='#A6D0DD'
          />
          <path
            className={`${styles.delay2} ${styles.opacity} circle17`}
            d='M1126 659.012C1126 658.418 1126.17 657.837 1126.5 657.342C1126.83 656.847 1127.3 656.461 1127.84 656.232C1128.39 656.003 1129 655.942 1129.58 656.056C1130.16 656.171 1130.7 656.455 1131.12 656.875C1131.54 657.294 1131.82 657.828 1131.94 658.41C1132.06 658.993 1132 659.596 1131.77 660.145C1131.55 660.694 1131.16 661.163 1130.67 661.494C1130.17 661.824 1129.59 662 1129 662C1128.21 662 1127.45 661.686 1126.88 661.125C1126.32 660.565 1126 659.805 1126 659.012ZM1130.71 659.012C1130.71 658.671 1130.61 658.337 1130.42 658.053C1130.23 657.769 1129.97 657.547 1129.65 657.415C1129.34 657.284 1128.99 657.249 1128.66 657.315C1128.32 657.381 1128.01 657.545 1127.77 657.785C1127.53 658.026 1127.37 658.334 1127.3 658.668C1127.24 659.002 1127.27 659.348 1127.4 659.663C1127.54 659.977 1127.76 660.245 1128.04 660.433C1128.33 660.621 1128.66 660.72 1129 660.718C1129.45 660.718 1129.89 660.538 1130.21 660.218C1130.53 659.898 1130.71 659.464 1130.71 659.012Z'
            fill='#A6D0DD'
          />
          <path
            className={`${styles.delay1} ${styles.opacity} circle17`}
            d='M1138 574.012C1138 573.418 1138.17 572.837 1138.5 572.342C1138.83 571.847 1139.3 571.461 1139.84 571.232C1140.39 571.003 1141 570.942 1141.58 571.056C1142.16 571.171 1142.7 571.455 1143.12 571.875C1143.54 572.294 1143.82 572.828 1143.94 573.41C1144.06 573.993 1144 574.596 1143.77 575.145C1143.55 575.694 1143.16 576.163 1142.67 576.494C1142.17 576.824 1141.59 577 1141 577C1140.21 577 1139.45 576.686 1138.88 576.125C1138.32 575.565 1138 574.805 1138 574.012ZM1142.71 574.012C1142.71 573.671 1142.61 573.337 1142.42 573.053C1142.23 572.769 1141.97 572.547 1141.65 572.415C1141.34 572.284 1140.99 572.249 1140.66 572.315C1140.32 572.381 1140.01 572.545 1139.77 572.785C1139.53 573.026 1139.37 573.334 1139.3 573.668C1139.24 574.002 1139.27 574.348 1139.4 574.663C1139.54 574.977 1139.76 575.245 1140.04 575.433C1140.33 575.621 1140.66 575.72 1141 575.718C1141.45 575.718 1141.89 575.538 1142.21 575.218C1142.53 574.898 1142.71 574.464 1142.71 574.012Z'
            fill='#A6D0DD'
          />
          <path
            className={`${styles.delay5} ${styles.line}  line18`}
            d='M1523 945L1458 945L1445 957L1384.5 957'
            stroke='url(#paint46_linear_110_2)'
          />
          <path
            className={`${styles.delay4} ${styles.opacity} circle18`}
            d='M1382.49 954.01C1383.08 954.008 1383.66 954.182 1384.16 954.51C1384.65 954.838 1385.04 955.306 1385.27 955.854C1385.5 956.402 1385.56 957.005 1385.44 957.588C1385.33 958.171 1385.04 958.706 1384.63 959.127C1384.21 959.548 1383.67 959.835 1383.09 959.951C1382.51 960.068 1381.9 960.009 1381.35 959.783C1380.81 959.556 1380.34 959.172 1380.01 958.678C1379.68 958.184 1379.5 957.604 1379.5 957.01C1379.5 956.216 1379.81 955.455 1380.37 954.893C1380.93 954.331 1381.69 954.013 1382.49 954.01ZM1382.49 958.716C1382.83 958.718 1383.16 958.619 1383.45 958.431C1383.73 958.244 1383.95 957.975 1384.08 957.661C1384.22 957.347 1384.25 957 1384.19 956.666C1384.12 956.332 1383.96 956.025 1383.71 955.784C1383.47 955.543 1383.17 955.379 1382.83 955.313C1382.5 955.247 1382.15 955.282 1381.84 955.414C1381.52 955.545 1381.25 955.767 1381.07 956.051C1380.88 956.336 1380.78 956.669 1380.78 957.01C1380.78 957.462 1380.96 957.896 1381.28 958.216C1381.6 958.536 1382.04 958.716 1382.49 958.716Z'
            fill='#9D9A96'
          />
          <g opacity='0.2'>
            <path
              className={`${styles.delay2} ${styles.opacity} circle17`}
              d='M990.488 969.51C991.082 969.508 991.663 969.682 992.158 970.01C992.653 970.338 993.039 970.806 993.268 971.354C993.497 971.902 993.558 972.505 993.444 973.088C993.329 973.671 993.045 974.206 992.625 974.627C992.206 975.048 991.672 975.335 991.09 975.451C990.507 975.568 989.903 975.509 989.355 975.283C988.806 975.056 988.337 974.672 988.006 974.178C987.676 973.684 987.5 973.104 987.5 972.51C987.5 971.716 987.814 970.955 988.374 970.393C988.935 969.831 989.695 969.513 990.488 969.51ZM990.488 974.216C990.829 974.218 991.163 974.119 991.447 973.931C991.731 973.744 991.953 973.475 992.085 973.161C992.216 972.847 992.251 972.5 992.185 972.166C992.119 971.832 991.955 971.525 991.714 971.284C991.474 971.043 991.166 970.879 990.832 970.813C990.498 970.747 990.152 970.782 989.837 970.914C989.523 971.045 989.255 971.267 989.067 971.551C988.879 971.836 988.78 972.169 988.782 972.51C988.782 972.962 988.962 973.396 989.282 973.716C989.602 974.036 990.036 974.216 990.488 974.216Z'
              fill='black'
            />
            <path
              className={`${styles.delay3} ${styles.opacity} circle17`}
              d='M1266.99 954C1267.58 953.998 1268.16 954.172 1268.66 954.5C1269.15 954.828 1269.54 955.296 1269.77 955.844C1270 956.392 1270.06 956.995 1269.94 957.578C1269.83 958.161 1269.54 958.696 1269.13 959.117C1268.71 959.538 1268.17 959.825 1267.59 959.941C1267.01 960.058 1266.4 959.999 1265.85 959.773C1265.31 959.546 1264.84 959.162 1264.51 958.668C1264.18 958.174 1264 957.594 1264 957C1264 956.206 1264.31 955.445 1264.87 954.883C1265.43 954.321 1266.19 954.003 1266.99 954ZM1266.99 958.706C1267.33 958.708 1267.66 958.609 1267.95 958.421C1268.23 958.233 1268.45 957.965 1268.58 957.651C1268.72 957.337 1268.75 956.99 1268.69 956.656C1268.62 956.322 1268.46 956.015 1268.21 955.774C1267.97 955.533 1267.67 955.369 1267.33 955.303C1267 955.237 1266.65 955.272 1266.34 955.404C1266.02 955.535 1265.75 955.757 1265.57 956.041C1265.38 956.326 1265.28 956.659 1265.28 957C1265.28 957.452 1265.46 957.886 1265.78 958.206C1266.1 958.526 1266.54 958.706 1266.99 958.706Z'
              fill='black'
            />
            <path
              className={`${styles.delay4} ${styles.line}  line17`}
              d='M1264.5 957L1049 957L1033 972.5L992 972.5'
              stroke='black'
            />
          </g>
          <path
            className={`${styles.delay3} ${styles.line}  line18`}
            d='M1427 944H1358.5L1323 979V987'
            stroke='url(#paint47_linear_110_2)'
          />
          <circle
            className={`${styles.delay2} ${styles.opacity} circle18`}
            cx='3'
            cy='3'
            r='2.25'
            transform='matrix(-1 0 0 1 1326 987)'
            stroke='#A7D1DE'
            strokeWidth='1.5'
          />
          <circle
            className={`${styles.delay1} ${styles.opacity} circle18`}
            cx='3'
            cy='3'
            r='2.25'
            transform='matrix(-1 0 0 1 1432 941)'
            stroke='#9E9C97'
            strokeWidth='1.5'
          />
          <g opacity='0.4'>
            <circle
              className={`${styles.delay1} ${styles.opacity} circle18`}
              cx='4'
              cy='4'
              r='4'
              transform='matrix(-1 0 0 1 1310 934)'
              fill='#162029'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle18`}
              cx='4'
              cy='4'
              r='4'
              transform='matrix(-1 0 0 1 1298 934)'
              fill='#162029'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle18`}
              cx='4'
              cy='4'
              r='4'
              transform='matrix(-1 0 0 1 1286 934)'
              fill='#162029'
            />
            <circle
              className={`${styles.delay4} ${styles.opacity} circle18`}
              cx='4'
              cy='4'
              r='4'
              transform='matrix(-1 0 0 1 1274 934)'
              fill='#162029'
            />
            <circle
              className={`${styles.delay5} ${styles.opacity} circle18`}
              cx='4'
              cy='4'
              r='4'
              transform='matrix(-1 0 0 1 1262 934)'
              fill='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay5} ${styles.opacity} circle16`}
              cx='4'
              cy='4'
              r='4'
              transform='matrix(-1 0 0 1 945 776)'
              fill='#162029'
            />
            <circle
              className={`${styles.delay4} ${styles.opacity} circle16`}
              cx='4'
              cy='4'
              r='4'
              transform='matrix(-1 0 0 1 933 776)'
              fill='#162029'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle16`}
              cx='4'
              cy='4'
              r='4'
              transform='matrix(-1 0 0 1 921 776)'
              fill='#162029'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle16`}
              cx='4'
              cy='4'
              r='4'
              transform='matrix(-1 0 0 1 909 776)'
              fill='#162029'
            />
            <circle
              className={`${styles.delay1} ${styles.opacity} circle16`}
              cx='4'
              cy='4'
              r='4'
              transform='matrix(-1 0 0 1 897 776)'
              fill='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay5} ${styles.opacity} circle16`}
              cx='4'
              cy='4'
              r='4'
              transform='matrix(-1 0 0 1 945 789)'
              fill='#162029'
            />
            <circle
              className={`${styles.delay4} ${styles.opacity} circle16`}
              cx='4'
              cy='4'
              r='4'
              transform='matrix(-1 0 0 1 933 789)'
              fill='#162029'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle16`}
              cx='4'
              cy='4'
              r='4'
              transform='matrix(-1 0 0 1 921 789)'
              fill='#162029'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle16`}
              cx='4'
              cy='4'
              r='4'
              transform='matrix(-1 0 0 1 909 789)'
              fill='#FF6969'
            />
            <circle
              className={`${styles.delay1} ${styles.opacity} circle16`}
              cx='4'
              cy='4'
              r='4'
              transform='matrix(-1 0 0 1 897 789)'
              fill='#162029'
            />
          </g>
          <circle
            className={`${styles.delay4} ${styles.opacityH} circle18`}
            opacity='0.3'
            cx='3'
            cy='3'
            r='3'
            transform='matrix(4.37114e-08 -1 -1 -4.37114e-08 1418 802)'
            fill='#162029'
          />
          <circle
            className={`${styles.delay3} ${styles.opacityH} circle18`}
            opacity='0.4'
            cx='3'
            cy='3'
            r='3'
            transform='matrix(4.37114e-08 -1 -1 -4.37114e-08 1418 792)'
            fill='#162029'
          />
          <circle
            className={`${styles.delay2} ${styles.opacityH} circle18`}
            opacity='0.3'
            cx='3'
            cy='3'
            r='3'
            transform='matrix(4.37114e-08 -1 -1 -4.37114e-08 1418 782)'
            fill='#162029'
          />
          <circle
            className={`${styles.delay1} ${styles.opacityH} circle18`}
            cx='3'
            cy='3'
            r='3'
            transform='matrix(4.37114e-08 -1 -1 -4.37114e-08 1418 772)'
            fill='#A6D0DD'
          />
          <g opacity='0.4'>
            <circle
              className={`${styles.delay3} ${styles.opacity} circle18`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(-1 0 0 1 1266 880)'
              stroke='#FF6969'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay4} ${styles.opacity} circle18`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(-1 0 0 1 1266 916)'
              stroke='#FF6969'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay5} ${styles.line}  line18`}
              d='M1263 885.5C1263 911.1 1263 917.5 1263 917.5'
              stroke='#FF6969'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay2} ${styles.opacity} circle18`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(-1 0 0 1 1278 888)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle18`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(-1 0 0 1 1278 924)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay4} ${styles.line}  line18`}
              d='M1275 893.5C1275 919.1 1275 925.5 1275 925.5'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay1} ${styles.opacity} circle18`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(-1 0 0 1 1290 880)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle18`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(-1 0 0 1 1290 924)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay3} ${styles.line}  line18`}
              d='M1287 886C1287 918 1287 926 1287 926'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay2} ${styles.opacity} circle18`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(-1 0 0 1 1387 804)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle18`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(-1 0 0 1 1387 848)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay4} ${styles.line}  line18`}
              d='M1384 810C1384 842 1384 850 1384 850'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay2} ${styles.opacity} circle17`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(-1 0 0 1 1132 671)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle17`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(-1 0 0 1 1132 715)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay4} ${styles.line}  line17`}
              d='M1129 677C1129 709 1129 717 1129 717'
              stroke='#162029'
            />
          </g>
          <path
            className={`${styles.delay1} ${styles.opacityH} circle17`}
            opacity='0.4'
            d='M965 835L965 862'
            stroke='#162029'
          />
          <path
            className={`${styles.delay2} ${styles.opacityH} circle17`}
            opacity='0.4'
            d='M950 850L950 877'
            stroke='#162029'
          />
          <path
            className={`${styles.delay3} ${styles.opacityH} circle17`}
            opacity='0.4'
            d='M956 835L956 883'
            stroke='#162029'
          />
          <path
            className={`${styles.delay1} ${styles.line}  line14`}
            opacity='0.4'
            d='M365 688L365 745'
            stroke='#162029'
          />
          <path
            className={`${styles.delay3} ${styles.line}  line14`}
            opacity='0.4'
            d='M350 733L350 760'
            stroke='#162029'
          />
          <path
            className={`${styles.delay2} ${styles.line}  line14`}
            opacity='0.4'
            d='M356 718L356 766'
            stroke='#162029'
          />
          <path
            className={`${styles.delay1} ${styles.line}  line18`}
            opacity='0.4'
            d='M1308 845H1202'
            stroke='url(#paint48_linear_110_2)'
          />
          <path
            className={`${styles.delay2} ${styles.line}  line18`}
            d='M1284 837L1235 837'
            stroke='url(#paint49_linear_110_2)'
          />
          <path
            className={`${styles.delay3} ${styles.line}  line18`}
            d='M1297 853H1191'
            stroke='url(#paint50_linear_110_2)'
          />
          <path
            className={`${styles.delay3} ${styles.opacityH} circle15`}
            opacity='0.4'
            d='M773 933H667'
            stroke='#162029'
          />
          <path
            className={`${styles.delay2} ${styles.opacityH} circle15`}
            opacity='0.4'
            d='M749 925L700 925'
            stroke='#162029'
          />
          <path
            className={`${styles.delay1} ${styles.opacityH} circle15`}
            d='M762 941H656'
            stroke='url(#paint51_linear_110_2)'
          />
          <path
            className={`${styles.delay3} ${styles.line}  line17`}
            d='M1090.5 879L1090.5 798.5L1070.5 778L1064 778'
            stroke='url(#paint52_linear_110_2)'
          />
          <circle
            className={`${styles.delay2} ${styles.opacity} circle17`}
            cx='3'
            cy='3'
            r='2.25'
            transform='matrix(4.37114e-08 -1 -1 -4.37114e-08 1065 781)'
            stroke='#ACCAD6'
            strokeWidth='1.5'
          />
          <circle
            className={`${styles.delay1} ${styles.opacity} circle17`}
            cx='3'
            cy='3'
            r='2.25'
            transform='matrix(4.37114e-08 -1 -1 -4.37114e-08 1093 884)'
            stroke='#FD6C6D'
            strokeWidth='1.5'
          />
          <g opacity='0.4'>
            <circle
              className={`${styles.delay1} ${styles.opacity} circle17`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(4.37114e-08 -1 -1 -4.37114e-08 1122 827)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle17`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(4.37114e-08 -1 -1 -4.37114e-08 1105 827)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay3} ${styles.line}  line17`}
              d='M1116 824C1106.4 824 1104 824 1104 824'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay4} ${styles.line}  line17`}
              d='M1099.5 899.5L1099.5 850L1113 839L1132 839'
              stroke='#162029'
            />
            <path
              className={`${styles.delay3} ${styles.opacity} circle17`}
              d='M1137 839.012C1137 838.418 1136.83 837.837 1136.5 837.342C1136.17 836.847 1135.7 836.461 1135.16 836.232C1134.61 836.003 1134 835.942 1133.42 836.056C1132.84 836.171 1132.3 836.455 1131.88 836.875C1131.46 837.294 1131.18 837.828 1131.06 838.41C1130.94 838.993 1131 839.596 1131.23 840.145C1131.45 840.694 1131.84 841.163 1132.33 841.494C1132.83 841.824 1133.41 842 1134 842C1134.79 842 1135.55 841.686 1136.12 841.125C1136.68 840.565 1137 839.805 1137 839.012ZM1132.29 839.012C1132.29 838.671 1132.39 838.337 1132.58 838.053C1132.77 837.769 1133.03 837.547 1133.35 837.415C1133.66 837.284 1134.01 837.249 1134.34 837.315C1134.68 837.381 1134.99 837.545 1135.23 837.785C1135.47 838.026 1135.63 838.334 1135.7 838.668C1135.76 839.002 1135.73 839.348 1135.6 839.663C1135.46 839.977 1135.24 840.245 1134.96 840.433C1134.67 840.621 1134.34 840.72 1134 840.718C1133.55 840.718 1133.11 840.538 1132.79 840.218C1132.47 839.898 1132.29 839.464 1132.29 839.012Z'
              fill='#162029'
            />
            <path
              className={`${styles.delay2} ${styles.opacity} circle17`}
              d='M1102 902.012C1102 901.418 1101.83 900.837 1101.5 900.342C1101.17 899.847 1100.7 899.461 1100.16 899.232C1099.61 899.003 1099 898.942 1098.42 899.056C1097.84 899.171 1097.3 899.455 1096.88 899.875C1096.46 900.294 1096.18 900.828 1096.06 901.41C1095.94 901.993 1096 902.596 1096.23 903.145C1096.45 903.694 1096.84 904.163 1097.33 904.494C1097.83 904.824 1098.41 905 1099 905C1099.79 905 1100.55 904.686 1101.12 904.125C1101.68 903.565 1102 902.805 1102 902.012ZM1097.29 902.012C1097.29 901.671 1097.39 901.337 1097.58 901.053C1097.77 900.769 1098.03 900.547 1098.35 900.415C1098.66 900.284 1099.01 900.249 1099.34 900.315C1099.68 900.381 1099.99 900.545 1100.23 900.785C1100.47 901.026 1100.63 901.334 1100.7 901.668C1100.76 902.002 1100.73 902.348 1100.6 902.663C1100.46 902.977 1100.24 903.245 1099.96 903.433C1099.67 903.621 1099.34 903.72 1099 903.718C1098.55 903.718 1098.11 903.538 1097.79 903.218C1097.47 902.898 1097.29 902.464 1097.29 902.012Z'
              fill='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay1} ${styles.opacity} circle17`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(1 8.74228e-08 8.74228e-08 -1 1175 912)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle17`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(1 8.74228e-08 8.74228e-08 -1 1175 895)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay3} ${styles.line}  line17`}
              d='M1178 906C1178 896.4 1178 894 1178 894'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay3} ${styles.line}  line16`}
              d='M879.46 795.576L873.881 801.155V809.046L873.874 816.945L873.881 824.843V832.735L873.874 840.633L873.881 848.531V856.423V864.314L873.874 872.212L873.874 880.104V887.995L868.295 893.574L862.708 899.16L857.122 904.746L851.543 910.325L845.964 915.904L845.964 923.81L845.964 931.701L845.964 939.593L845.971 947.491L845.971 955.382L845.964 963.281V971.172L845.964 979.063L845.964 986.969L845.964 994.86L845.964 1002.75L845.964 1010.64L845.971 1018.54L845.964 1026.44L851.543 1032.02L857.129 1037.6L862.708 1043.18L868.295 1048.77L873.874 1054.35L879.46 1048.76'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay2} ${styles.opacity} circle16`}
              d='M880.746 791.036C880.31 791.123 879.909 791.337 879.594 791.652C879.172 792.074 878.935 792.646 878.935 793.243C878.935 793.839 879.172 794.412 879.594 794.834C879.909 795.148 880.31 795.363 880.746 795.449C881.183 795.536 881.635 795.492 882.046 795.321C882.457 795.151 882.809 794.863 883.056 794.493C883.303 794.123 883.435 793.688 883.435 793.243C883.435 792.798 883.303 792.363 883.056 791.993C882.809 791.623 882.457 791.334 882.046 791.164L882.333 790.471L882.046 791.164C881.635 790.994 881.183 790.949 880.746 791.036Z'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <path
            className={`${styles.delay3} ${styles.line}  line17`}
            d='M1069 705C1049.8 705 1045 705 1045 705'
            stroke='url(#paint53_linear_110_2)'
          />
          <circle
            className={`${styles.delay2} ${styles.opacity} circle17`}
            cx='1071'
            cy='705'
            r='2.25'
            transform='rotate(90 1071 705)'
            stroke='#A5CEDB'
            strokeWidth='1.5'
          />
          <circle
            className={`${styles.delay1} ${styles.opacity} circle17`}
            cx='1043'
            cy='705'
            r='2.25'
            transform='rotate(90 1043 705)'
            stroke='#9C9B97'
            strokeWidth='1.5'
          />
          <g opacity='0.4'>
            <path
              className={`${styles.delay3} ${styles.line}  line18`}
              d='M1239 755C1192.6 755 1181 755 1181 755'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle18`}
              cx='1241'
              cy='755'
              r='2.25'
              transform='rotate(90 1241 755)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay1} ${styles.opacity} circle18`}
              cx='1179'
              cy='755'
              r='2.25'
              transform='rotate(90 1179 755)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay5} ${styles.line}  line17`}
              d='M1255 768.72L1249.41 763.14L1241.52 763.14L1233.62 763.14L1225.73 763.14L1217.83 763.14L1209.94 763.14L1202.04 763.14L1194.15 763.14L1186.25 763.14L1178.36 763.14L1170.46 763.14L1162.57 763.14L1154.68 763.14L1146.78 763.14L1141.2 757.56L1135.62 751.98L1130.03 746.39L1124.45 740.81L1118.87 735.23L1113.29 729.65L1107.7 724.06L1102.12 718.48L1096.54 712.9L1090.96 707.32L1085.38 701.74L1079.79 696.16L1071.9 696.16L1064 696.16L1056.11 696.16L1048.21 696.16L1040.32 696.16L1032.43 696.16L1026.84 690.57'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay4} ${styles.opacity} circle17`}
              d='M1023.55 689.406C1023.63 689.84 1023.83 690.241 1024.14 690.559C1024.35 690.777 1024.6 690.951 1024.88 691.07C1025.16 691.189 1025.46 691.25 1025.76 691.25C1026.06 691.25 1026.36 691.189 1026.64 691.07C1026.92 690.951 1027.17 690.777 1027.38 690.559C1027.69 690.241 1027.89 689.84 1027.97 689.406C1028.05 688.972 1028 688.524 1027.83 688.118C1027.66 687.712 1027.37 687.366 1027 687.123C1026.63 686.88 1026.2 686.75 1025.76 686.75C1025.32 686.75 1024.89 686.88 1024.52 687.123C1024.15 687.366 1023.86 687.712 1023.69 688.118C1023.52 688.524 1023.47 688.972 1023.55 689.406Z'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay3} ${styles.opacity} circle17`}
              d='M1254.79 771.405C1254.87 771.839 1255.07 772.24 1255.38 772.558C1255.59 772.777 1255.84 772.951 1256.12 773.07C1256.4 773.189 1256.7 773.25 1257 773.25C1257.3 773.25 1257.6 773.189 1257.88 773.07C1258.16 772.951 1258.41 772.777 1258.62 772.558C1258.93 772.24 1259.13 771.839 1259.21 771.405C1259.29 770.972 1259.24 770.524 1259.07 770.118C1258.9 769.712 1258.61 769.366 1258.24 769.123C1257.87 768.879 1257.44 768.75 1257 768.75C1256.56 768.75 1256.13 768.879 1255.76 769.123C1255.39 769.366 1255.1 769.712 1254.93 770.118C1254.76 770.524 1254.71 770.972 1254.79 771.405Z'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay3} ${styles.line}  line17`}
              d='M1168 907C1168 860.6 1168 849 1168 849'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle17`}
              cx='1168'
              cy='909'
              r='2.25'
              transform='rotate(180 1168 909)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay1} ${styles.opacity} circle17`}
              cx='1168'
              cy='847'
              r='2.25'
              transform='rotate(180 1168 847)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay4} ${styles.line}  line17`}
              d='M1178 878C1178 831.6 1178 820 1178 820'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle17`}
              cx='1178'
              cy='880'
              r='2.25'
              transform='rotate(180 1178 880)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle17`}
              cx='1178'
              cy='818'
              r='2.25'
              transform='rotate(180 1178 818)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.3'>
            <path
              className={`${styles.delay4} ${styles.line}  line18`}
              d='M1190 650.5H1256L1318 712.5'
              stroke='black'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle18`}
              cx='1320'
              cy='714'
              r='2.25'
              transform='rotate(90 1320 714)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle18`}
              cx='1188'
              cy='651'
              r='2.25'
              transform='rotate(90 1188 651)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.3'>
            <path
              className={`${styles.delay3} ${styles.line}  line17`}
              d='M1048.44 785.303L1001.77 831.972L1001.77 919.653'
              stroke='black'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle17`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(0.707107 0.707107 0.707107 -0.707107 997.177 922.128)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay1} ${styles.opacity} circle17`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(0.707107 0.707107 0.707107 -0.707107 1045.97 784.242)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay3} ${styles.line}  line18`}
              d='M1184 658.5H1250L1312 720.5'
              stroke='black'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle18`}
              cx='1314'
              cy='722'
              r='2.25'
              transform='rotate(90 1314 722)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay1} ${styles.opacity} circle18`}
              cx='1182'
              cy='659'
              r='2.25'
              transform='rotate(90 1182 659)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay3} ${styles.line}  line18`}
              d='M1364.25 648.657C1340.25 624.657 1334.25 618.657 1334.25 618.657'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle18`}
              cx='1365.68'
              cy='650.242'
              r='2.25'
              transform='rotate(135 1365.68 650.242)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay1} ${styles.opacity} circle18`}
              cx='1332.84'
              cy='617.243'
              r='2.25'
              transform='rotate(135 1332.84 617.243)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay3} ${styles.line}  line16`}
              d='M826.828 635.737C850.828 611.737 856.828 605.737 856.828 605.737'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle16`}
              cx='825.243'
              cy='637.163'
              r='2.25'
              transform='rotate(-135 825.243 637.163)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay1} ${styles.opacity} circle16`}
              cx='858.243'
              cy='604.323'
              r='2.25'
              transform='rotate(-135 858.243 604.323)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay4} ${styles.line}  line18`}
              d='M1367.25 637.657C1350.45 620.857 1346.25 616.657 1346.25 616.657'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle18`}
              cx='1368.68'
              cy='639.242'
              r='2.25'
              transform='rotate(135 1368.68 639.242)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle18`}
              cx='1344.84'
              cy='615.242'
              r='2.25'
              transform='rotate(135 1344.84 615.242)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay5} ${styles.line}  line16`}
              d='M837.828 638.737C854.628 621.937 858.828 617.737 858.828 617.737'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay4} ${styles.opacity} circle16`}
              cx='836.243'
              cy='640.163'
              r='2.25'
              transform='rotate(-135 836.243 640.163)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle16`}
              cx='860.243'
              cy='616.322'
              r='2.25'
              transform='rotate(-135 860.243 616.322)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay2} ${styles.line}  line18`}
              d='M1238.87 668C1215.11 668 1209.17 668 1209.17 668'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay1} ${styles.opacity} circle18`}
              cx='1241'
              cy='668.113'
              r='2.25'
              transform='rotate(90 1241 668.113)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle18`}
              cx='1207.17'
              cy='668'
              r='2.25'
              transform='rotate(90 1207.17 668)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.3'>
            <path
              className={`${styles.delay5} ${styles.line}  line18`}
              d='M1389.34 646.669C1356.53 613.859 1348.33 605.657 1348.33 605.657'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay4} ${styles.opacity} circle18`}
              cx='1390.76'
              cy='648.083'
              r='2.25'
              transform='rotate(135 1390.76 648.083)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle18`}
              cx='1346.92'
              cy='604.243'
              r='2.25'
              transform='rotate(135 1346.92 604.243)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.3'>
            <path
              className={`${styles.delay3} ${styles.line}  line18`}
              d='M1292.34 717.669C1259.53 684.859 1251.33 676.657 1251.33 676.657'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle18`}
              cx='1293.76'
              cy='719.083'
              r='2.25'
              transform='rotate(135 1293.76 719.083)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay1} ${styles.opacity} circle18`}
              cx='1249.92'
              cy='675.243'
              r='2.25'
              transform='rotate(135 1249.92 675.243)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.3'>
            <path
              className={`${styles.delay4} ${styles.line}  line18`}
              d='M1691 693L1685.42 698.58L1679.84 704.16L1674.25 709.75L1668.67 715.33L1663.09 720.91L1657.51 726.49L1651.93 732.07L1646.34 737.66L1640.76 743.24L1632.87 743.24L1624.97 743.24L1617.08 743.24L1609.18 743.24L1601.29 743.24L1593.39 743.24L1585.5 743.24L1577.6 743.24L1569.71 743.24L1561.81 743.24L1553.92 743.24L1546.02 743.24L1538.13 743.24L1530.24 743.24L1522.34 743.24L1514.45 743.24L1506.55 743.24L1500.97 748.82L1495.39 754.4L1489.8 759.99L1484.22 765.57L1478.64 771.15L1473.06 776.73L1467.48 782.31L1461.89 787.9L1456.31 793.48L1450.73 799.06L1445.14 804.65L1439.56 810.23L1433.98 815.81L1428.4 821.39L1422.81 826.98L1417.23 832.56L1411.65 838.14L1411.65 846.03L1411.65 853.93L1411.65 867.5'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay3} ${styles.opacity} circle18`}
              d='M1409.75 871.267C1410.09 871.617 1410.54 871.855 1411.02 871.952C1411.5 872.048 1412.01 871.999 1412.46 871.81C1412.92 871.621 1413.31 871.3 1413.58 870.889C1413.85 870.478 1414 869.995 1414 869.5C1414 869.005 1413.85 868.522 1413.58 868.111C1413.31 867.7 1412.92 867.379 1412.46 867.19C1412.01 867.001 1411.5 866.952 1411.02 867.048C1410.54 867.145 1410.09 867.383 1409.75 867.733C1409.51 867.962 1409.32 868.237 1409.19 868.541C1409.07 868.844 1409 869.17 1409 869.5C1409 869.83 1409.07 870.156 1409.19 870.459C1409.32 870.763 1409.51 871.038 1409.75 871.267Z'
              fill='#162029'
            />
          </g>
          <g opacity='0.3'>
            <path
              className={`${styles.delay5} ${styles.line}  line16`}
              d='M1189 1012.39L1183.41 1017.97L1175.52 1017.97L1167.62 1017.97L1159.73 1017.97L1151.83 1017.97L1143.94 1017.97L1136.04 1017.97L1128.15 1017.97L1120.26 1017.97L1112.36 1017.97L1104.47 1017.97L1096.57 1017.97L1088.68 1017.97L1080.78 1017.97L1072.89 1017.97L1064.99 1017.97L1057.1 1017.97L1049.2 1017.97L1041.31 1017.97L1033.41 1017.97L1025.52 1017.97L1017.62 1017.97L1012.04 1012.39L1004.15 1012.39L996.26 1012.39L988.36 1012.39L980.46 1012.39L972.57 1012.39L964.67 1012.39L956.78 1012.39L948.89 1012.39L940.99 1012.39L933.1 1012.39L925.2 1012.39L917.31 1012.39L909.41 1012.39L901.52 1012.39L893.62 1012.39L885.73 1012.39L880.15 1006.8L880.15 998.91L885.73 993.32L891.31 987.74L896.89 982.16L896.89 974.27L896.89 966.37L896.89 958.48L896.89 950.58L902.47 945L910.37 945L918.26 945L926.16 945L934.05 945L934.05 952.9L928.47 958.48L922.89 964.06L917.31 969.64L911.72 975.22L906.14 980.81L900.56 986.39L894.98 991.97L889.4 997.55L883.81 1003.13'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay4} ${styles.opacity} circle16`}
              d='M885.21 1004.53C884.933 1004.82 884.576 1005.01 884.187 1005.09C883.797 1005.17 883.393 1005.14 883.024 1004.99C882.655 1004.84 882.34 1004.58 882.118 1004.25C881.896 1003.92 881.777 1003.53 881.777 1003.14C881.777 1002.74 881.896 1002.35 882.118 1002.02C882.34 1001.69 882.655 1001.43 883.024 1001.28C883.393 1001.13 883.797 1001.1 884.187 1001.18C884.576 1001.26 884.933 1001.45 885.21 1001.74C885.574 1002.11 885.777 1002.61 885.777 1003.14C885.777 1003.66 885.574 1004.16 885.21 1004.53Z'
              fill='#162029'
            />
          </g>
          <g opacity='0.3'>
            <path
              className={`${styles.delay5} ${styles.line}  line18`}
              d='M1319.41 510L1319.41 517.891L1319.41 525.783L1319.41 533.674L1319.41 541.572L1319.41 549.471V557.362L1319.41 565.253L1319.41 573.145L1319.41 581.05L1319.41 588.941L1319.41 596.833L1319.41 604.731L1319.41 612.63L1319.41 620.521L1324.99 626.1L1330.58 631.686L1336.16 637.265L1341.74 642.851L1347.32 648.43L1352.91 654.016L1358.49 659.596V667.487L1352.9 673.073L1347.32 678.652L1341.74 684.231L1341.74 692.13L1341.74 700.028L1341.74 707.919L1341.74 715.818L1336.16 721.397L1330.57 726.983L1324.99 732.562L1319.41 738.141L1313.83 743.727L1313.83 816.428L1313.83 824.319L1313.83 832.217L1313.83 840.109L1313.83 848'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay4} ${styles.line}  line18`}
              d='M1316.34 849.567C1316.34 850.066 1316.2 850.553 1315.92 850.968C1315.64 851.383 1315.25 851.706 1314.79 851.898C1314.33 852.089 1313.82 852.139 1313.33 852.042C1312.84 851.944 1312.39 851.704 1312.04 851.352C1311.69 850.999 1311.45 850.55 1311.35 850.061C1311.25 849.572 1311.3 849.065 1311.5 848.604C1311.69 848.144 1312.01 847.75 1312.42 847.473C1312.84 847.197 1313.33 847.049 1313.83 847.05C1314.16 847.048 1314.49 847.111 1314.79 847.237C1315.1 847.363 1315.38 847.548 1315.61 847.782C1315.85 848.016 1316.03 848.295 1316.16 848.601C1316.28 848.908 1316.35 849.236 1316.34 849.567Z'
              fill='#162029'
            />
          </g>
          <g opacity='0.3'>
            <path
              className={`${styles.delay5} ${styles.line}  line18`}
              d='M1418.84 1008.27L1413.25 1002.69L1407.67 997.105L1402.09 991.525L1396.51 985.945L1390.93 980.355L1385.34 974.775L1379.76 969.195L1374.18 963.615L1368.59 958.025L1363.01 952.445L1357.43 946.865L1351.85 941.285L1346.27 935.695L1340.69 930.115L1340.69 922.225L1340.69 914.325L1340.69 906.435L1340.69 898.535L1340.69 890.645L1346.27 885.065L1346.27 877.165L1346.27 869.275L1346.27 861.375L1346.27 853.485L1346.27 845.585L1346.27 837.695L1346.27 829.795L1346.27 821.905L1346.27 814.005L1346.27 806.115L1351.85 800.535L1357.43 794.945L1363.01 789.365L1363.01 781.475L1363.01 773.575L1363.01 765.685L1363.01 757.785L1363.01 749.895L1363.01 741.995L1357.43 736.415L1351.85 730.835L1346.27 725.255L1340.69 719.665L1335.1 714.085L1329.52 708.505L1323.94 702.925L1318.36 697.345L1312.77 691.755L1307.19 686.175L1301.61 680.595L1296.02 675.015L1290.44 669.425L1284.86 663.845L1279.28 658.265L1273.7 652.685L1268.11 647.105L1262.53 641.515L1254.63 641.515L1246.74 641.515L1238.85 641.515L1230.95 641.515L1223.06 641.515L1215.16 641.515L1207.27 641.515L1199.37 641.515L1191.48 641.515L1183.58 641.515L1175.69 641.515L1170.11 635.935'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay4} ${styles.opacity} circle18`}
              d='M1168.74 637.295C1168.38 636.933 1168.17 636.442 1168.17 635.93C1168.17 635.418 1168.38 634.927 1168.74 634.565C1169.1 634.203 1169.59 634 1170.1 634C1170.62 634 1171.11 634.203 1171.47 634.565C1171.83 634.927 1172.04 635.418 1172.04 635.93C1172.04 636.442 1171.83 636.933 1171.47 637.295C1171.11 637.657 1170.62 637.861 1170.1 637.861C1169.59 637.861 1169.1 637.657 1168.74 637.295Z'
              fill='#162029'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay3} ${styles.line}  line18`}
              d='M1433.77 932.57L1433.77 924.68L1433.77 916.79L1433.77 908.89L1433.77 901L1433.77 893.1L1433.77 885.2L1433.77 877.31L1433.77 869.42L1433.77 861.52L1433.77 853.63L1433.77 845.73L1439.36 840.15L1444.94 834.57L1450.52 828.98L1456.11 823.4L1461.69 817.82L1467.27 812.24L1472.85 806.66L1478.43 801.08L1484.02 795.49L1489.6 789.91L1495.18 784.33L1500.76 778.74L1506.35 773.16L1511.93 767.58L1517.51 762L1523.09 756.41L1528.68 750.83L1534.26 745.25L1534.26 737.36L1534.26 729.46L1534.26 721.57L1534.26 713.67L1534.26 705.78L1539.84 700.19L1545.42 694.61L1551 689.03L1556.59 683.45L1562.17 677.87L1567.75 672.28L1573.34 666.7L1578.92 661.12L1584.5 655.54L1590.08 649.95'
              stroke='#162029'
              strokeLinejoin='round'
            />
          </g>
          <g opacity='0.3'>
            <path
              className={`${styles.delay5} ${styles.line}  line18`}
              d='M1556 618.5L1485.5 689V739.5L1417 808.5'
              stroke='black'
            />
            <path
              className={`${styles.delay4} ${styles.opacity} circle18`}
              d='M1414.55 807.794C1414.11 807.881 1413.71 808.095 1413.4 808.408C1412.98 808.835 1412.75 809.406 1412.75 810C1412.75 810.594 1412.98 811.165 1413.4 811.592C1413.71 811.905 1414.11 812.119 1414.55 812.206C1414.99 812.294 1415.44 812.249 1415.86 812.079C1416.27 811.909 1416.62 811.62 1416.87 811.25C1417.12 810.88 1417.25 810.445 1417.25 810C1417.25 809.555 1417.12 809.12 1416.87 808.75C1416.62 808.38 1416.27 808.091 1415.86 807.921C1415.44 807.751 1414.99 807.706 1414.55 807.794Z'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay5} ${styles.line}  line17`}
              d='M989.412 964L989.412 929.873L989.412 921.982L989.412 914.091L989.405 906.192L989.412 898.294L989.412 890.402L989.412 882.511L989.412 874.62L989.412 866.714L989.412 858.823L989.412 850.932L989.405 843.033L989.412 835.135L989.412 827.244L994.991 821.665L1000.58 816.078L1006.16 810.499L1011.74 804.913L1017.32 799.334L1022.91 793.748L1028.49 788.169L1028.49 780.278L1022.9 774.692L1017.32 769.112L1011.74 763.533L1011.74 755.635L1011.74 747.737L1011.74 739.845L1011.74 731.947L1006.16 726.368L1000.57 720.782L994.991 715.203L989.412 709.624L983.826 704.037L983.833 696.139L983.833 688.248L983.826 680.349L983.826 672.458L983.826 664.567'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay4} ${styles.opacity} circle17`}
              d='M986.344 664.567C986.344 664.068 986.197 663.58 985.92 663.166C985.643 662.751 985.25 662.427 984.789 662.236C984.329 662.045 983.822 661.995 983.333 662.092C982.843 662.189 982.394 662.429 982.042 662.782C981.689 663.135 981.449 663.584 981.352 664.073C981.255 664.562 981.305 665.069 981.496 665.53C981.687 665.99 982.01 666.384 982.425 666.66C982.84 666.937 983.328 667.084 983.826 667.084C984.157 667.086 984.486 667.023 984.792 666.897C985.099 666.771 985.377 666.586 985.611 666.352C985.846 666.118 986.031 665.839 986.157 665.533C986.282 665.226 986.346 664.898 986.344 664.567Z'
              fill='#162029'
            />
          </g>
          <g opacity='0.15'>
            <path
              className={`${styles.delay1} ${styles.line}  line15`}
              d='M1272 929L1266.42 934.58L1260.83 940.16L1255.25 945.75L1249.67 951.33L1244.09 956.91L1238.51 962.49L1232.93 968.07L1227.34 973.66L1221.76 979.24L1216.18 984.82L1210.59 990.41L1205.01 995.99H1197.12H1189.22H1181.33H1173.43H1165.54H1157.64H1149.75H1141.85H1133.96H1126.07H1118.17L1112.59 1001.57H1104.69H1096.8H1088.9H1081.01H1073.12H1065.22H1057.33H1049.43H1041.54H1033.64H1025.75H1017.85H1009.96H1002.07H994.17L988.59 1007.15L983 1012.73L977.42 1018.32L971.84 1023.9L966.26 1029.48L960.67 1035.06L955.09 1040.65L949.51 1046.23L943.93 1051.81L938.35 1057.39L932.76 1062.97L927.18 1068.56L921.6 1074.14L916.02 1079.72L910.43 1085.31L904.85 1090.89L899.27 1096.47L893.69 1102.05L888.1 1107.64H880.21H872.32H864.42H856.52H848.63H840.74H832.84H824.95L819.36 1102.05L813.78 1096.47L808.2 1090.89L802.62 1085.31L797.03 1079.72L791.45 1074.14L785.87 1068.56L780.29 1062.97L774.71 1057.39L769.12 1051.81L763.54 1046.23L757.96 1040.65L752.37 1035.06L746.79 1029.48L741.21 1023.9L735.63 1018.32H727.73H719.84H711.95H704.05H696.16H688.26H680.36H672.47H664.58H656.68H648.79H640.89H633H625.1H617.21H609.31H601.42H593.52H585.63L580.05 1023.9L574.46 1029.48L568.88 1035.06L563.3 1040.65L557.72 1046.23L552.13 1051.81L546.55 1057.39V1065.29'
              stroke='#162029'
              strokeLinejoin='round'
            />
          </g>
          <g opacity='0.2'>
            <path
              className={`${styles.delay3} ${styles.line}  line16`}
              d='M833.515 736L833.515 743.9L833.515 751.79L833.515 759.68L839.095 765.26L844.675 770.85L850.265 776.43L855.845 782.01L861.425 787.6L861.425 795.49L861.425 803.39L861.425 811.28L861.425 819.17L861.425 827.07L861.425 834.96L861.425 842.86L861.425 850.76L861.425 858.65L861.425 866.54'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay2} ${styles.opacity} circle16`}
              d='M860.994 871.249C860.409 871.265 859.841 871.06 859.401 870.675C858.983 870.237 858.75 869.655 858.75 869.049C858.75 868.438 858.988 867.851 859.412 867.413C859.851 866.988 860.438 866.75 861.049 866.75C861.655 866.75 862.237 866.984 862.675 867.401C863.06 867.841 863.265 868.409 863.249 868.994C863.233 869.587 862.99 870.151 862.571 870.571C862.151 870.99 861.587 871.233 860.994 871.249Z'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay1} ${styles.opacity} circle16`}
              d='M833.994 735.249C833.409 735.265 832.841 735.06 832.401 734.675C831.983 734.237 831.75 733.655 831.75 733.049C831.75 732.438 831.988 731.851 832.412 731.413C832.851 730.988 833.438 730.75 834.049 730.75C834.655 730.75 835.237 730.984 835.675 731.401C836.06 731.841 836.265 732.409 836.249 732.994C836.233 733.587 835.99 734.151 835.571 734.571C835.151 734.99 834.587 735.233 833.994 735.249Z'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay5} ${styles.line}  line17`}
              d='M1164 732V739.9V747.79V755.69V763.58V771.48V779.37V787.27V795.16V803.06V810.95V818.85V826.74L1158.42 832.32V840.22V848.11V856.01V863.9V871.8V879.69V887.59V895.48V903.37V911.27V919.16V927.06'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay4} ${styles.opacity} circle17`}
              d='M1161.4 927.06C1161.4 927.653 1161.22 928.233 1160.89 928.727C1160.56 929.22 1160.1 929.605 1159.55 929.832C1159 930.059 1158.4 930.118 1157.81 930.002C1157.23 929.887 1156.7 929.601 1156.28 929.181C1155.86 928.762 1155.57 928.227 1155.46 927.645C1155.34 927.063 1155.4 926.46 1155.63 925.912C1155.86 925.364 1156.24 924.895 1156.73 924.566C1157.23 924.236 1157.81 924.06 1158.4 924.06C1159.2 924.06 1159.96 924.376 1160.52 924.939C1161.08 925.501 1161.4 926.264 1161.4 927.06Z'
              fill='#162029'
            />
          </g>
          <g opacity='0.3'>
            <path
              className={`${styles.delay3} ${styles.line}  line5`}
              d='M1185.5 124.699L1097 124.699L1082 109.699'
              stroke='black'
            />
            <path
              className={`${styles.delay2} ${styles.opacity} circle5`}
              d='M1079 111.789C1080.16 111.789 1081.28 111.388 1082.17 110.654C1083.07 109.92 1083.68 108.899 1083.91 107.764C1084.13 106.629 1083.96 105.451 1083.41 104.431C1082.86 103.41 1081.98 102.611 1080.91 102.169C1079.84 101.726 1078.65 101.669 1077.55 102.005C1076.44 102.342 1075.48 103.052 1074.84 104.015C1074.2 104.978 1073.91 106.133 1074.03 107.285C1074.14 108.436 1074.65 109.512 1075.47 110.329C1076.41 111.264 1077.68 111.789 1079 111.789ZM1079 104.789C1079.4 104.789 1079.78 104.906 1080.11 105.125C1080.44 105.344 1080.7 105.655 1080.85 106.02C1081 106.385 1081.04 106.787 1080.96 107.174C1080.89 107.562 1080.7 107.919 1080.42 108.199C1080.23 108.385 1080.01 108.533 1079.77 108.633C1079.53 108.734 1079.27 108.786 1079 108.786C1078.74 108.786 1078.48 108.734 1078.24 108.633C1078 108.533 1077.78 108.385 1077.59 108.199C1077.22 107.824 1077.01 107.317 1077.01 106.789C1077.01 106.261 1077.22 105.754 1077.59 105.379C1077.96 105.003 1078.47 104.791 1079 104.789Z'
              fill='black'
            />
          </g>
          <path
            className={`${styles.delay2} ${styles.line}  line5`}
            d='M1185 123.699H1096L1081 108.699'
            stroke='white'
          />
          <path
            className={`${styles.delay1} ${styles.opacity} circle5`}
            d='M1078 110.789C1079.16 110.789 1080.28 110.388 1081.17 109.654C1082.07 108.92 1082.68 107.899 1082.91 106.764C1083.13 105.629 1082.96 104.451 1082.41 103.431C1081.86 102.41 1080.98 101.611 1079.91 101.169C1078.84 100.726 1077.65 100.669 1076.55 101.005C1075.44 101.342 1074.48 102.052 1073.84 103.015C1073.2 103.978 1072.91 105.133 1073.03 106.285C1073.14 107.436 1073.65 108.512 1074.47 109.329C1075.41 110.264 1076.68 110.789 1078 110.789ZM1078 103.789C1078.4 103.789 1078.78 103.906 1079.11 104.125C1079.44 104.344 1079.7 104.655 1079.85 105.02C1080 105.385 1080.04 105.787 1079.96 106.174C1079.89 106.562 1079.7 106.919 1079.42 107.199C1079.23 107.385 1079.01 107.533 1078.77 107.633C1078.53 107.734 1078.27 107.786 1078 107.786C1077.74 107.786 1077.48 107.734 1077.24 107.633C1077 107.533 1076.78 107.385 1076.59 107.199C1076.22 106.824 1076.01 106.317 1076.01 105.789C1076.01 105.261 1076.22 104.754 1076.59 104.379C1076.96 104.003 1077.47 103.791 1078 103.789Z'
            fill='white'
          />
          <g opacity='0.4'>
            <path
              className={`${styles.delay2} ${styles.opacity} circle6`}
              d='M1440 330.711C1440 330.117 1439.83 329.536 1439.5 329.041C1439.17 328.546 1438.7 328.16 1438.16 327.931C1437.61 327.702 1437 327.641 1436.42 327.755C1435.84 327.87 1435.3 328.155 1434.88 328.574C1434.46 328.993 1434.18 329.527 1434.06 330.11C1433.94 330.692 1434 331.296 1434.23 331.845C1434.45 332.393 1434.84 332.863 1435.33 333.193C1435.83 333.523 1436.41 333.699 1437 333.699C1437.79 333.699 1438.55 333.385 1439.12 332.825C1439.68 332.265 1440 331.505 1440 330.711ZM1435.29 330.711C1435.29 330.37 1435.39 330.037 1435.58 329.752C1435.77 329.468 1436.03 329.246 1436.35 329.115C1436.66 328.983 1437.01 328.948 1437.34 329.014C1437.68 329.08 1437.99 329.244 1438.23 329.485C1438.47 329.726 1438.63 330.033 1438.7 330.367C1438.76 330.701 1438.73 331.048 1438.6 331.362C1438.46 331.676 1438.24 331.944 1437.96 332.132C1437.67 332.32 1437.34 332.419 1437 332.417C1436.55 332.417 1436.11 332.237 1435.79 331.917C1435.47 331.597 1435.29 331.163 1435.29 330.711Z'
              fill='#162029'
            />
            <path
              className={`${styles.delay3} ${styles.line}  line6`}
              d='M1422.51 171.199V222.199L1437.01 236.699V328.699'
              stroke='#162029'
            />
          </g>
          <g opacity='0.3'>
            <path
              className={`${styles.delay4} ${styles.opacity} circle6`}
              d='M1324.01 37.6992C1323.42 37.6969 1322.84 37.8709 1322.34 38.1991C1321.85 38.5273 1321.46 38.995 1321.23 39.543C1321 40.091 1320.94 40.6945 1321.06 41.2773C1321.17 41.86 1321.46 42.3956 1321.87 42.8164C1322.29 43.2371 1322.83 43.524 1323.41 43.6407C1323.99 43.7574 1324.6 43.6987 1325.15 43.472C1325.69 43.2453 1326.16 42.8608 1326.49 42.3672C1326.82 41.8736 1327 41.2931 1327 40.6992C1327 39.9056 1326.69 39.1443 1326.13 38.5821C1325.57 38.0198 1324.81 37.7024 1324.01 37.6992ZM1324.01 42.4051C1323.67 42.4074 1323.34 42.3084 1323.05 42.1206C1322.77 41.9327 1322.55 41.6646 1322.42 41.3502C1322.28 41.0359 1322.25 40.6896 1322.31 40.3553C1322.38 40.021 1322.54 39.7139 1322.79 39.473C1323.03 39.232 1323.33 39.0682 1323.67 39.0023C1324 38.9364 1324.35 38.9714 1324.66 39.1029C1324.98 39.2343 1325.25 39.4563 1325.43 39.7406C1325.62 40.0248 1325.72 40.3585 1325.72 40.6992C1325.72 41.1517 1325.54 41.5856 1325.22 41.9055C1324.9 42.2254 1324.46 42.4051 1324.01 42.4051Z'
              fill='#162029'
            />
            <path
              className={`${styles.delay5} ${styles.line}  line6`}
              d='M1327 40.6992L1381.5 40.6992L1396 26.1992L1488 26.1992'
              stroke='#162029'
            />
          </g>
          <path
            className={`${styles.delay3} ${styles.line}  line6`}
            d='M1228 145.199L1137.5 145.199L1122.5 157.699L1088 157.699'
            stroke='url(#paint54_linear_110_2)'
          />
          <path
            className={`${styles.delay2} ${styles.opacity} circle6`}
            d='M1085.99 160.699C1086.58 160.702 1087.16 160.528 1087.66 160.199C1088.15 159.871 1088.54 159.403 1088.77 158.855C1089 158.307 1089.06 157.704 1088.94 157.121C1088.83 156.538 1088.54 156.003 1088.13 155.582C1087.71 155.161 1087.17 154.874 1086.59 154.758C1086.01 154.641 1085.4 154.7 1084.85 154.926C1084.31 155.153 1083.84 155.538 1083.51 156.031C1083.18 156.525 1083 157.105 1083 157.699C1083 158.493 1083.31 159.254 1083.87 159.816C1084.43 160.379 1085.19 160.696 1085.99 160.699ZM1085.99 155.993C1086.33 155.991 1086.66 156.09 1086.95 156.278C1087.23 156.466 1087.45 156.734 1087.58 157.048C1087.72 157.363 1087.75 157.709 1087.69 158.043C1087.62 158.377 1087.46 158.685 1087.21 158.925C1086.97 159.166 1086.67 159.33 1086.33 159.396C1086 159.462 1085.65 159.427 1085.34 159.296C1085.02 159.164 1084.75 158.942 1084.57 158.658C1084.38 158.374 1084.28 158.04 1084.28 157.699C1084.28 157.247 1084.46 156.813 1084.78 156.493C1085.1 156.173 1085.54 155.993 1085.99 155.993Z'
            fill='#D6C3BA'
          />
          <path
            className={`${styles.delay1} ${styles.opacity} circle6`}
            d='M1229.99 148.699C1230.58 148.702 1231.16 148.528 1231.66 148.199C1232.15 147.871 1232.54 147.403 1232.77 146.855C1233 146.307 1233.06 145.704 1232.94 145.121C1232.83 144.538 1232.54 144.003 1232.13 143.582C1231.71 143.161 1231.17 142.874 1230.59 142.758C1230.01 142.641 1229.4 142.7 1228.85 142.926C1228.31 143.153 1227.84 143.538 1227.51 144.031C1227.18 144.525 1227 145.105 1227 145.699C1227 146.493 1227.31 147.254 1227.87 147.816C1228.43 148.379 1229.19 148.696 1229.99 148.699ZM1229.99 143.993C1230.33 143.991 1230.66 144.09 1230.95 144.278C1231.23 144.466 1231.45 144.734 1231.58 145.048C1231.72 145.363 1231.75 145.709 1231.69 146.043C1231.62 146.377 1231.46 146.685 1231.21 146.925C1230.97 147.166 1230.67 147.33 1230.33 147.396C1230 147.462 1229.65 147.427 1229.34 147.296C1229.02 147.164 1228.75 146.942 1228.57 146.658C1228.38 146.374 1228.28 146.04 1228.28 145.699C1228.28 145.247 1228.46 144.813 1228.78 144.493C1229.1 144.173 1229.54 143.993 1229.99 143.993Z'
            fill='#CBC3BA'
          />
          <path
            className={`${styles.delay5} ${styles.line}  line6`}
            d='M1438.5 382.199L1438.5 351.199L1426 336.199L1426 301.699'
            stroke='#A6D0DD'
          />
          <path
            className={`${styles.delay4} ${styles.opacity} circle6`}
            d='M1423 299.687C1423 300.281 1423.17 300.862 1423.5 301.357C1423.83 301.852 1424.3 302.239 1424.84 302.467C1425.39 302.696 1426 302.757 1426.58 302.643C1427.16 302.529 1427.7 302.244 1428.12 301.825C1428.54 301.406 1428.82 300.871 1428.94 300.289C1429.06 299.707 1429 299.103 1428.77 298.554C1428.55 298.005 1428.16 297.536 1427.67 297.206C1427.17 296.875 1426.59 296.699 1426 296.699C1425.21 296.699 1424.45 297.014 1423.88 297.574C1423.32 298.134 1423 298.894 1423 299.687ZM1427.71 299.687C1427.71 300.028 1427.61 300.362 1427.42 300.646C1427.23 300.93 1426.97 301.152 1426.65 301.284C1426.34 301.415 1425.99 301.45 1425.66 301.384C1425.32 301.318 1425.01 301.155 1424.77 300.914C1424.53 300.673 1424.37 300.366 1424.3 300.031C1424.24 299.697 1424.27 299.351 1424.4 299.036C1424.54 298.722 1424.76 298.454 1425.04 298.266C1425.33 298.078 1425.66 297.979 1426 297.982C1426.45 297.982 1426.89 298.161 1427.21 298.481C1427.53 298.801 1427.71 299.235 1427.71 299.687Z'
            fill='#A6D0DD'
          />
          <path
            className={`${styles.delay3} ${styles.opacity} circle6`}
            d='M1435 384.687C1435 385.281 1435.17 385.862 1435.5 386.357C1435.83 386.852 1436.3 387.239 1436.84 387.467C1437.39 387.696 1438 387.757 1438.58 387.643C1439.16 387.529 1439.7 387.244 1440.12 386.825C1440.54 386.406 1440.82 385.871 1440.94 385.289C1441.06 384.707 1441 384.103 1440.77 383.554C1440.55 383.005 1440.16 382.536 1439.67 382.206C1439.17 381.875 1438.59 381.699 1438 381.699C1437.21 381.699 1436.45 382.014 1435.88 382.574C1435.32 383.134 1435 383.894 1435 384.687ZM1439.71 384.687C1439.71 385.028 1439.61 385.362 1439.42 385.646C1439.23 385.93 1438.97 386.152 1438.65 386.284C1438.34 386.415 1437.99 386.45 1437.66 386.384C1437.32 386.318 1437.01 386.155 1436.77 385.914C1436.53 385.673 1436.37 385.366 1436.3 385.031C1436.24 384.697 1436.27 384.351 1436.4 384.036C1436.54 383.722 1436.76 383.454 1437.04 383.266C1437.33 383.078 1437.66 382.979 1438 382.982C1438.45 382.982 1438.89 383.161 1439.21 383.481C1439.53 383.801 1439.71 384.235 1439.71 384.687Z'
            fill='#A6D0DD'
          />
          <path
            className={`${styles.delay3} ${styles.line}  line6`}
            d='M1566 148.699L1501 148.699L1488 136.699L1427.5 136.699'
            stroke='url(#paint55_linear_110_2)'
          />
          <path
            className={`${styles.delay2} ${styles.opacity} circle6`}
            d='M1425.49 139.689C1426.08 139.692 1426.66 139.518 1427.16 139.189C1427.65 138.861 1428.04 138.393 1428.27 137.845C1428.5 137.297 1428.56 136.694 1428.44 136.111C1428.33 135.528 1428.04 134.993 1427.63 134.572C1427.21 134.151 1426.67 133.864 1426.09 133.748C1425.51 133.631 1424.9 133.69 1424.35 133.916C1423.81 134.143 1423.34 134.528 1423.01 135.021C1422.68 135.515 1422.5 136.095 1422.5 136.689C1422.5 137.483 1422.81 138.244 1423.37 138.806C1423.93 139.369 1424.69 139.686 1425.49 139.689ZM1425.49 134.983C1425.83 134.981 1426.16 135.08 1426.45 135.268C1426.73 135.456 1426.95 135.724 1427.08 136.038C1427.22 136.353 1427.25 136.699 1427.19 137.033C1427.12 137.367 1426.96 137.675 1426.71 137.915C1426.47 138.156 1426.17 138.32 1425.83 138.386C1425.5 138.452 1425.15 138.417 1424.84 138.286C1424.52 138.154 1424.25 137.932 1424.07 137.648C1423.88 137.364 1423.78 137.03 1423.78 136.689C1423.78 136.237 1423.96 135.803 1424.28 135.483C1424.6 135.163 1425.04 134.983 1425.49 134.983Z'
            fill='#9D9A96'
          />
          <g opacity='0.2'>
            <path
              className={`${styles.delay1} ${styles.opacity} circle6`}
              d='M1033.49 124.189C1034.08 124.192 1034.66 124.018 1035.16 123.689C1035.65 123.361 1036.04 122.893 1036.27 122.345C1036.5 121.797 1036.56 121.194 1036.44 120.611C1036.33 120.028 1036.04 119.493 1035.63 119.072C1035.21 118.651 1034.67 118.364 1034.09 118.248C1033.51 118.131 1032.9 118.19 1032.35 118.416C1031.81 118.643 1031.34 119.028 1031.01 119.521C1030.68 120.015 1030.5 120.595 1030.5 121.189C1030.5 121.983 1030.81 122.744 1031.37 123.306C1031.93 123.869 1032.69 124.186 1033.49 124.189ZM1033.49 119.483C1033.83 119.481 1034.16 119.58 1034.45 119.768C1034.73 119.956 1034.95 120.224 1035.08 120.538C1035.22 120.853 1035.25 121.199 1035.19 121.533C1035.12 121.867 1034.96 122.175 1034.71 122.415C1034.47 122.656 1034.17 122.82 1033.83 122.886C1033.5 122.952 1033.15 122.917 1032.84 122.786C1032.52 122.654 1032.25 122.432 1032.07 122.148C1031.88 121.864 1031.78 121.53 1031.78 121.189C1031.78 120.737 1031.96 120.303 1032.28 119.983C1032.6 119.663 1033.04 119.483 1033.49 119.483Z'
              fill='black'
            />
            <path
              className={`${styles.delay2} ${styles.opacity} circle6`}
              d='M1309.99 139.699C1310.58 139.702 1311.16 139.528 1311.66 139.199C1312.15 138.871 1312.54 138.403 1312.77 137.855C1313 137.307 1313.06 136.704 1312.94 136.121C1312.83 135.538 1312.54 135.003 1312.13 134.582C1311.71 134.161 1311.17 133.874 1310.59 133.758C1310.01 133.641 1309.4 133.7 1308.85 133.926C1308.31 134.153 1307.84 134.538 1307.51 135.031C1307.18 135.525 1307 136.105 1307 136.699C1307 137.493 1307.31 138.254 1307.87 138.816C1308.43 139.379 1309.19 139.696 1309.99 139.699ZM1309.99 134.993C1310.33 134.991 1310.66 135.09 1310.95 135.278C1311.23 135.466 1311.45 135.734 1311.58 136.048C1311.72 136.363 1311.75 136.709 1311.69 137.043C1311.62 137.377 1311.46 137.685 1311.21 137.925C1310.97 138.166 1310.67 138.33 1310.33 138.396C1310 138.462 1309.65 138.427 1309.34 138.296C1309.02 138.164 1308.75 137.942 1308.57 137.658C1308.38 137.374 1308.28 137.04 1308.28 136.699C1308.28 136.247 1308.46 135.813 1308.78 135.493C1309.1 135.173 1309.54 134.993 1309.99 134.993Z'
              fill='black'
            />
            <path
              className={`${styles.delay3} ${styles.line}  line6`}
              d='M1307.5 136.699L1092 136.699L1076 121.199L1035 121.199'
              stroke='black'
            />
          </g>
          <path
            className={`${styles.delay1} ${styles.line}  line5`}
            d='M1142 46.6992H1053.5L1022.5 15.6992V-5.30078'
            stroke='url(#paint56_linear_110_2)'
          />
          <path
            className={`${styles.delay2} ${styles.line}  line5`}
            d='M1138.5 59.6992L1048 59.6992L1007.5 16.6992V-3.80078'
            stroke='url(#paint57_linear_110_2)'
          />
          <path
            className={`${styles.delay2} ${styles.line}  line6`}
            d='M1470 149.699H1401.5L1366 114.699V106.699'
            stroke='url(#paint58_linear_110_2)'
          />
          <circle
            className={`${styles.delay1} ${styles.opacity} circle6`}
            cx='1366'
            cy='103.699'
            r='2.25'
            transform='rotate(180 1366 103.699)'
            stroke='#A7D1DE'
            strokeWidth='1.5'
          />
          <g opacity='0.4'>
            <path
              className={`${styles.delay3} ${styles.line}  line5`}
              d='M1202.5 33.1992L1057.5 33.1992L1037 13.1992V6.69922'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle5`}
              cx='1037'
              cy='4.69922'
              r='2.25'
              transform='rotate(180 1037 4.69922)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay1} ${styles.opacity} circle5`}
              cx='1205'
              cy='33.6992'
              r='2.25'
              transform='rotate(180 1205 33.6992)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay1} ${styles.opacity} circle6`}
              cx='1349'
              cy='155.699'
              r='4'
              transform='rotate(180 1349 155.699)'
              fill='#162029'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle6`}
              cx='1337'
              cy='155.699'
              r='4'
              transform='rotate(180 1337 155.699)'
              fill='#162029'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle6`}
              cx='1325'
              cy='155.699'
              r='4'
              transform='rotate(180 1325 155.699)'
              fill='#162029'
            />
            <circle
              className={`${styles.delay4} ${styles.opacity} circle6`}
              cx='1313'
              cy='155.699'
              r='4'
              transform='rotate(180 1313 155.699)'
              fill='#162029'
            />
            <circle
              className={`${styles.delay5} ${styles.opacity} circle6`}
              cx='1301'
              cy='155.699'
              r='4'
              transform='rotate(180 1301 155.699)'
              fill='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay5} ${styles.opacity} circle18`}
              cx='1296'
              cy='501'
              r='4'
              transform='rotate(90 1296 501)'
              fill='#162029'
            />
            <circle
              className={`${styles.delay4} ${styles.opacity} circle18`}
              cx='1296'
              cy='513'
              r='4'
              transform='rotate(90 1296 513)'
              fill='#162029'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle18`}
              cx='1296'
              cy='525'
              r='4'
              transform='rotate(90 1296 525)'
              fill='#162029'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle18`}
              cx='1296'
              cy='537'
              r='4'
              transform='rotate(90 1296 537)'
              fill='#162029'
            />
            <circle
              className={`${styles.delay1} ${styles.opacity} circle18`}
              cx='1296'
              cy='549'
              r='4'
              transform='rotate(90 1296 549)'
              fill='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay1} ${styles.opacity} circle18`}
              cx='1283'
              cy='501'
              r='4'
              transform='rotate(90 1283 501)'
              fill='#162029'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle18`}
              cx='1283'
              cy='513'
              r='4'
              transform='rotate(90 1283 513)'
              fill='#162029'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle18`}
              cx='1283'
              cy='525'
              r='4'
              transform='rotate(90 1283 525)'
              fill='#162029'
            />
            <circle
              className={`${styles.delay4} ${styles.opacity} circle18`}
              cx='1283'
              cy='537'
              r='4'
              transform='rotate(90 1283 537)'
              fill='#FF6969'
            />
            <circle
              className={`${styles.delay5} ${styles.opacity} circle18`}
              cx='1283'
              cy='549'
              r='4'
              transform='rotate(90 1283 549)'
              fill='#162029'
            />
          </g>
          <circle
            className={`${styles.delay1} ${styles.opacityH} circle6`}
            opacity='0.3'
            cx='1369'
            cy='29.6992'
            r='3'
            transform='rotate(180 1369 29.6992)'
            fill='#162029'
          />
          <circle
            className={`${styles.delay2} ${styles.opacityH} circle6`}
            opacity='0.4'
            cx='1359'
            cy='29.6992'
            r='3'
            transform='rotate(180 1359 29.6992)'
            fill='#162029'
          />
          <circle
            className={`${styles.delay3} ${styles.opacityH} circle6`}
            opacity='0.3'
            cx='1349'
            cy='29.6992'
            r='3'
            transform='rotate(180 1349 29.6992)'
            fill='#162029'
          />
          <circle
            className={`${styles.delay4} ${styles.opacityH} circle6`}
            opacity='0.3'
            cx='1339'
            cy='29.6992'
            r='3'
            transform='rotate(180 1339 29.6992)'
            fill='#162029'
          />
          <circle
            className={`${styles.delay1} ${styles.opacityH} circle6`}
            opacity='0.3'
            cx='1369'
            cy='21.6992'
            r='3'
            transform='rotate(180 1369 21.6992)'
            fill='#162029'
          />
          <circle
            className={`${styles.delay2} ${styles.opacityH} circle6`}
            opacity='0.4'
            cx='1359'
            cy='21.6992'
            r='3'
            transform='rotate(180 1359 21.6992)'
            fill='#162029'
          />
          <circle
            className={`${styles.delay3} ${styles.opacityH} circle6`}
            opacity='0.3'
            cx='1349'
            cy='21.6992'
            r='3'
            transform='rotate(180 1349 21.6992)'
            fill='#162029'
          />
          <circle
            className={`${styles.delay4} ${styles.opacityH} circle6`}
            opacity='0.3'
            cx='1339'
            cy='21.6992'
            r='3'
            transform='rotate(180 1339 21.6992)'
            fill='#162029'
          />
          <g opacity='0.4'>
            <circle
              className={`${styles.delay1} ${styles.opacity} circle6`}
              cx='1306'
              cy='210.699'
              r='2.25'
              transform='rotate(180 1306 210.699)'
              stroke='#FF6969'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle6`}
              cx='1306'
              cy='174.699'
              r='2.25'
              transform='rotate(180 1306 174.699)'
              stroke='#FF6969'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay3} ${styles.line}  line6`}
              d='M1306 208.199C1306 182.599 1306 176.199 1306 176.199'
              stroke='#FF6969'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay2} ${styles.opacity} circle6`}
              cx='1318'
              cy='202.699'
              r='2.25'
              transform='rotate(180 1318 202.699)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle6`}
              cx='1318'
              cy='166.699'
              r='2.25'
              transform='rotate(180 1318 166.699)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay4} ${styles.line}  line6`}
              d='M1318 200.199C1318 174.599 1318 168.199 1318 168.199'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay1} ${styles.opacity} circle6`}
              cx='1330'
              cy='210.699'
              r='2.25'
              transform='rotate(180 1330 210.699)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle6`}
              cx='1330'
              cy='166.699'
              r='2.25'
              transform='rotate(180 1330 166.699)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay3} ${styles.line}  line6`}
              d='M1330 207.699C1330 175.699 1330 167.699 1330 167.699'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay2} ${styles.opacity} circle6`}
              cx='1259'
              cy='25.6992'
              r='2.25'
              transform='rotate(90 1259 25.6992)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle6`}
              cx='1215'
              cy='25.6992'
              r='2.25'
              transform='rotate(90 1215 25.6992)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay4} ${styles.line}  line6`}
              d='M1256 25.6992C1224.8 25.6992 1217 25.6992 1217 25.6992'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay1} ${styles.opacity} circle17`}
              cx='1017'
              cy='560'
              r='2.25'
              transform='rotate(90 1017 560)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle17`}
              cx='973'
              cy='560'
              r='2.25'
              transform='rotate(90 973 560)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay3} ${styles.line}  line17`}
              d='M1014 560C982.8 560 975 560 975 560'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay2} ${styles.opacity} circle6`}
              cx='1427'
              cy='286.699'
              r='2.25'
              transform='rotate(180 1427 286.699)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle6`}
              cx='1427'
              cy='242.699'
              r='2.25'
              transform='rotate(180 1427 242.699)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay4} ${styles.line}  line6`}
              d='M1427 283.699C1427 251.699 1427 243.699 1427 243.699'
              stroke='#162029'
            />
          </g>
          <path
            className={`${styles.delay3} ${styles.opacityH} circle5`}
            opacity='0.4'
            d='M1008 258.699L1008 231.699'
            stroke='#162029'
          />
          <path
            className={`${styles.delay2} ${styles.opacityH} circle5`}
            opacity='0.4'
            d='M993 243.699L993 216.699'
            stroke='#162029'
          />
          <path
            className={`${styles.delay1} ${styles.opacityH} circle5`}
            opacity='0.4'
            d='M999 258.699L999 210.699'
            stroke='#162029'
          />
          <path
            className={`${styles.delay3} ${styles.opacityH} circle2`}
            opacity='0.4'
            d='M408 405.699L408 348.699'
            stroke='#162029'
          />
          <path
            className={`${styles.delay2} ${styles.opacityH} circle2`}
            opacity='0.4'
            d='M393 360.699L393 333.699'
            stroke='#162029'
          />
          <path
            className={`${styles.delay1} ${styles.opacityH} circle2`}
            opacity='0.4'
            d='M399 375.699L399 327.699'
            stroke='#162029'
          />
          <path
            className={`${styles.delay3} ${styles.opacityH} circle6`}
            opacity='0.4'
            d='M1351 276H1245'
            stroke='url(#paint59_linear_110_2)'
          />
          <path
            className={`${styles.delay2} ${styles.opacity} circle6`}
            d='M1327 284L1278 284'
            stroke='url(#paint60_linear_110_2)'
          />
          <path
            className={`${styles.delay1} ${styles.opacity} circle6`}
            d='M1340 268H1234'
            stroke='url(#paint61_linear_110_2)'
          />
          <path
            className={`${styles.delay3} ${styles.opacityH} circle5`}
            opacity='0.4'
            d='M1190 57.6992L1190 42.6992'
            stroke='url(#paint62_linear_110_2)'
          />
          <path
            className={`${styles.delay2} ${styles.opacityH} circle5`}
            opacity='0.4'
            d='M1194 57.6992L1194 37.6992'
            stroke='url(#paint63_linear_110_2)'
          />
          <path
            className={`${styles.delay1} ${styles.opacityH} circle5`}
            opacity='0.4'
            d='M1186 57.6992L1186 46.6992'
            stroke='url(#paint64_linear_110_2)'
          />
          <path
            className={`${styles.delay3} ${styles.line}  line5`}
            d='M1133.5 235L1133.5 315.5L1113.5 336L1107 336'
            stroke='url(#paint65_linear_110_2)'
          />
          <circle
            className={`${styles.delay2} ${styles.opacity} circle5`}
            cx='1105'
            cy='336'
            r='2.25'
            transform='rotate(90 1105 336)'
            stroke='#ACCAD6'
            strokeWidth='1.5'
          />
          <circle
            className={`${styles.delay1} ${styles.opacity} circle5`}
            cx='1133'
            cy='233'
            r='2.25'
            transform='rotate(90 1133 233)'
            stroke='#FD6C6D'
            strokeWidth='1.5'
          />
          <g opacity='0.4'>
            <circle
              className={`${styles.delay3} ${styles.opacity} circle5`}
              cx='1162'
              cy='290'
              r='2.25'
              transform='rotate(90 1162 290)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay4} ${styles.opacity} circle5`}
              cx='1145'
              cy='290'
              r='2.25'
              transform='rotate(90 1145 290)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay5} ${styles.line}  line5`}
              d='M1159 290C1149.4 290 1147 290 1147 290'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay4} ${styles.line}  line5`}
              d='M1142.5 214.5L1142.5 264L1156 275L1175 275'
              stroke='#162029'
            />
            <path
              className={`${styles.delay3} ${styles.opacity} circle5`}
              d='M1180 274.988C1180 275.582 1179.83 276.163 1179.5 276.658C1179.17 277.153 1178.7 277.539 1178.16 277.768C1177.61 277.997 1177 278.058 1176.42 277.944C1175.84 277.829 1175.3 277.545 1174.88 277.125C1174.46 276.706 1174.18 276.172 1174.06 275.59C1173.94 275.007 1174 274.404 1174.23 273.855C1174.45 273.306 1174.84 272.837 1175.33 272.506C1175.83 272.176 1176.41 272 1177 272C1177.79 272 1178.55 272.314 1179.12 272.875C1179.68 273.435 1180 274.195 1180 274.988ZM1175.29 274.988C1175.29 275.329 1175.39 275.663 1175.58 275.947C1175.77 276.231 1176.03 276.453 1176.35 276.585C1176.66 276.716 1177.01 276.751 1177.34 276.685C1177.68 276.619 1177.99 276.455 1178.23 276.215C1178.47 275.974 1178.63 275.666 1178.7 275.332C1178.76 274.998 1178.73 274.652 1178.6 274.337C1178.46 274.023 1178.24 273.755 1177.96 273.567C1177.67 273.379 1177.34 273.28 1177 273.282C1176.55 273.282 1176.11 273.462 1175.79 273.782C1175.47 274.102 1175.29 274.536 1175.29 274.988Z'
              fill='#162029'
            />
            <path
              className={`${styles.delay2} ${styles.opacity} circle5`}
              d='M1145 211.988C1145 212.582 1144.83 213.163 1144.5 213.658C1144.17 214.153 1143.7 214.539 1143.16 214.768C1142.61 214.997 1142 215.058 1141.42 214.944C1140.84 214.829 1140.3 214.545 1139.88 214.125C1139.46 213.706 1139.18 213.172 1139.06 212.59C1138.94 212.007 1139 211.404 1139.23 210.855C1139.45 210.306 1139.84 209.837 1140.33 209.506C1140.83 209.176 1141.41 209 1142 209C1142.79 209 1143.55 209.314 1144.12 209.875C1144.68 210.435 1145 211.195 1145 211.988ZM1140.29 211.988C1140.29 212.329 1140.39 212.663 1140.58 212.947C1140.77 213.231 1141.03 213.453 1141.35 213.585C1141.66 213.716 1142.01 213.751 1142.34 213.685C1142.68 213.619 1142.99 213.455 1143.23 213.215C1143.47 212.974 1143.63 212.666 1143.7 212.332C1143.76 211.998 1143.73 211.652 1143.6 211.337C1143.46 211.023 1143.24 210.755 1142.96 210.567C1142.67 210.379 1142.34 210.28 1142 210.282C1141.55 210.282 1141.11 210.462 1140.79 210.782C1140.47 211.102 1140.29 211.536 1140.29 211.988Z'
              fill='#162029'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay5} ${styles.line}  line6`}
              d='M1183.5 17.6992L1284 17.6992L1296 26.6992L1296 38.1992'
              stroke='#162029'
            />
            <path
              className={`${styles.delay4} ${styles.opacity} circle6`}
              d='M1295.99 43.6992C1296.58 43.7015 1297.16 43.5276 1297.66 43.1993C1298.15 42.8711 1298.54 42.4034 1298.77 41.8554C1299 41.3075 1299.06 40.7039 1298.94 40.1212C1298.83 39.5385 1298.54 39.0028 1298.13 38.5821C1297.71 38.1613 1297.17 37.8744 1296.59 37.7577C1296.01 37.641 1295.4 37.6997 1294.85 37.9265C1294.31 38.1532 1293.84 38.5377 1293.51 39.0313C1293.18 39.5249 1293 40.1054 1293 40.6992C1293 41.4928 1293.31 42.2541 1293.87 42.8164C1294.43 43.3786 1295.19 43.6961 1295.99 43.6992ZM1295.99 38.9933C1296.33 38.991 1296.66 39.09 1296.95 39.2779C1297.23 39.4657 1297.45 39.7339 1297.58 40.0482C1297.72 40.3625 1297.75 40.7089 1297.69 41.0431C1297.62 41.3774 1297.46 41.6846 1297.21 41.9255C1296.97 42.1664 1296.67 42.3302 1296.33 42.3961C1296 42.462 1295.65 42.427 1295.34 42.2956C1295.02 42.1641 1294.75 41.9421 1294.57 41.6579C1294.38 41.3736 1294.28 41.0399 1294.28 40.6992C1294.28 40.2468 1294.46 39.8129 1294.78 39.493C1295.1 39.173 1295.54 38.9933 1295.99 38.9933Z'
              fill='#162029'
            />
            <path
              className={`${styles.delay3} ${styles.opacity} circle6`}
              d='M1180.99 20.6992C1181.58 20.7015 1182.16 20.5276 1182.66 20.1993C1183.15 19.8711 1183.54 19.4034 1183.77 18.8554C1184 18.3075 1184.06 17.7039 1183.94 17.1212C1183.83 16.5385 1183.54 16.0028 1183.13 15.5821C1182.71 15.1613 1182.17 14.8744 1181.59 14.7577C1181.01 14.641 1180.4 14.6997 1179.85 14.9265C1179.31 15.1532 1178.84 15.5377 1178.51 16.0313C1178.18 16.5249 1178 17.1054 1178 17.6992C1178 18.4928 1178.31 19.2541 1178.87 19.8164C1179.43 20.3786 1180.19 20.6961 1180.99 20.6992ZM1180.99 15.9933C1181.33 15.991 1181.66 16.09 1181.95 16.2779C1182.23 16.4657 1182.45 16.7339 1182.58 17.0482C1182.72 17.3625 1182.75 17.7089 1182.69 18.0431C1182.62 18.3774 1182.46 18.6846 1182.21 18.9255C1181.97 19.1664 1181.67 19.3302 1181.33 19.3961C1181 19.462 1180.65 19.427 1180.34 19.2956C1180.02 19.1641 1179.75 18.9421 1179.57 18.6579C1179.38 18.3736 1179.28 18.0399 1179.28 17.6992C1179.28 17.2468 1179.46 16.8129 1179.78 16.493C1180.1 16.173 1180.54 15.9933 1180.99 15.9933Z'
              fill='#162029'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay3} ${styles.line}  line16`}
              d='M941.5 552L1042 552L1054 561L1054 572.5'
              stroke='#162029'
            />
            <path
              className={`${styles.delay2} ${styles.opacity} circle16`}
              d='M1053.99 578C1054.58 578.002 1055.16 577.828 1055.66 577.5C1056.15 577.172 1056.54 576.704 1056.77 576.156C1057 575.608 1057.06 575.005 1056.94 574.422C1056.83 573.839 1056.54 573.304 1056.13 572.883C1055.71 572.462 1055.17 572.175 1054.59 572.059C1054.01 571.942 1053.4 572.001 1052.85 572.227C1052.31 572.454 1051.84 572.838 1051.51 573.332C1051.18 573.826 1051 574.406 1051 575C1051 575.794 1051.31 576.555 1051.87 577.117C1052.43 577.679 1053.19 577.997 1053.99 578ZM1053.99 573.294C1054.33 573.292 1054.66 573.391 1054.95 573.579C1055.23 573.767 1055.45 574.035 1055.58 574.349C1055.72 574.663 1055.75 575.01 1055.69 575.344C1055.62 575.678 1055.46 575.985 1055.21 576.226C1054.97 576.467 1054.67 576.631 1054.33 576.697C1054 576.763 1053.65 576.728 1053.34 576.596C1053.02 576.465 1052.75 576.243 1052.57 575.959C1052.38 575.674 1052.28 575.341 1052.28 575C1052.28 574.548 1052.46 574.114 1052.78 573.794C1053.1 573.474 1053.54 573.294 1053.99 573.294Z'
              fill='#162029'
            />
            <path
              className={`${styles.delay1} ${styles.opacity} circle16`}
              d='M938.988 555C939.582 555.002 940.163 554.828 940.658 554.5C941.153 554.172 941.539 553.704 941.768 553.156C941.997 552.608 942.058 552.005 941.944 551.422C941.829 550.839 941.545 550.304 941.125 549.883C940.706 549.462 940.172 549.175 939.59 549.059C939.007 548.942 938.404 549.001 937.855 549.227C937.306 549.454 936.837 549.838 936.506 550.332C936.176 550.826 936 551.406 936 552C936 552.794 936.314 553.555 936.875 554.117C937.435 554.679 938.195 554.997 938.988 555ZM938.988 550.294C939.329 550.292 939.663 550.391 939.947 550.579C940.231 550.767 940.453 551.035 940.585 551.349C940.716 551.663 940.751 552.01 940.685 552.344C940.619 552.678 940.455 552.985 940.215 553.226C939.974 553.467 939.666 553.631 939.332 553.697C938.998 553.763 938.652 553.728 938.337 553.596C938.023 553.465 937.755 553.243 937.567 552.959C937.379 552.674 937.28 552.341 937.282 552C937.282 551.548 937.462 551.114 937.782 550.794C938.102 550.474 938.536 550.294 938.988 550.294Z'
              fill='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              cx='919'
              cy='-1.30078'
              r='2.25'
              transform='rotate(90 919 -1.30078)'
              stroke='#162029'
              strokeWidth='1.5'
              className={`${styles.delay3} ${styles.opacity} circle4`}
            />
            <circle
              cx='878'
              cy='-1.30078'
              r='2.25'
              transform='rotate(90 878 -1.30078)'
              stroke='#162029'
              strokeWidth='1.5'
              className={`${styles.delay2} ${styles.opacity} circle4`}
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay2} ${styles.opacity} circle6`}
              cx='1221'
              cy='184.699'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle6`}
              cx='1221'
              cy='201.699'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay4} ${styles.line}  line6`}
              d='M1221 187.699C1221 197.299 1221 199.699 1221 199.699'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay3} ${styles.line}  line4`}
              d='M922.46 298.123L916.881 292.544V284.653L916.874 276.754L916.881 268.856V260.965L916.874 253.066L916.881 245.168V237.277V229.385L916.874 221.487L916.874 213.596V205.704L911.295 200.125L905.708 194.539L900.122 188.953L894.543 183.374L888.964 177.795L888.964 169.889L888.964 161.998L888.964 154.107L888.971 146.208L888.971 138.317L888.964 130.419V122.527L888.964 114.636L888.964 106.731L888.964 98.8392L888.964 90.9479L888.964 83.0566L888.971 75.1582L888.964 67.2598L894.543 61.6808L900.129 56.0946L905.708 50.5156L911.295 44.9294L916.874 39.3503L922.46 44.9365'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay2} ${styles.opacity} circle4`}
              d='M923.039 48.812C922.603 48.7251 922.202 48.5108 921.887 48.1962C921.465 47.7742 921.228 47.2019 921.228 46.6052C921.228 46.0085 921.465 45.4362 921.887 45.0142C922.202 44.6995 922.603 44.4852 923.039 44.3984C923.476 44.3116 923.928 44.3562 924.339 44.5265C924.75 44.6968 925.102 44.9851 925.349 45.3552C925.596 45.7252 925.728 46.1602 925.728 46.6052C925.728 47.0502 925.596 47.4852 925.349 47.8552C925.102 48.2252 924.75 48.5136 924.339 48.6839L924.626 49.3768L924.339 48.6839C923.928 48.8542 923.476 48.8988 923.039 48.812Z'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay1} ${styles.opacity} circle4`}
              d='M923.746 302.663C923.31 302.576 922.909 302.362 922.594 302.047C922.172 301.626 921.935 301.053 921.935 300.457C921.935 299.86 922.172 299.287 922.594 298.866C922.909 298.551 923.31 298.337 923.746 298.25C924.183 298.163 924.635 298.207 925.046 298.378C925.457 298.548 925.809 298.836 926.056 299.206C926.303 299.576 926.435 300.012 926.435 300.457C926.435 300.902 926.303 301.337 926.056 301.707C925.809 302.077 925.457 302.365 925.046 302.535L925.333 303.228L925.046 302.535C924.635 302.706 924.183 302.75 923.746 302.663Z'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <path
            className={`${styles.delay2} ${styles.line}  line5`}
            d='M1112 388.699C1092.8 388.699 1088 388.699 1088 388.699'
            stroke='url(#paint66_linear_110_2)'
          />
          <circle
            className={`${styles.delay1} ${styles.opacity} circle5`}
            cx='3'
            cy='3'
            r='2.25'
            transform='matrix(-4.37114e-08 -1 -1 4.37114e-08 1117 391.699)'
            stroke='#A5CEDB'
            strokeWidth='1.5'
          />
          <circle
            className={`${styles.delay1} ${styles.opacity} circle5`}
            cx='3'
            cy='3'
            r='2.25'
            transform='matrix(-4.37114e-08 -1 -1 4.37114e-08 1089 391.699)'
            stroke='#9C9B97'
            strokeWidth='1.5'
          />
          <g opacity='0.4'>
            <path
              className={`${styles.delay4} ${styles.line}  line6`}
              d='M1282 338.699C1235.6 338.699 1224 338.699 1224 338.699'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle6`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(-4.37114e-08 -1 -1 4.37114e-08 1287 341.699)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle6`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(-4.37114e-08 -1 -1 4.37114e-08 1225 341.699)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay5} ${styles.line}  line6`}
              d='M1298 324.979L1292.41 330.559L1284.52 330.559L1276.62 330.559L1268.73 330.559L1260.83 330.559L1252.94 330.559L1245.04 330.559L1237.15 330.559L1229.25 330.559L1221.36 330.559L1213.46 330.559L1205.57 330.559L1197.68 330.559L1189.78 330.559L1184.2 336.139L1178.62 341.719L1173.03 347.309L1167.45 352.889L1161.87 358.469L1156.29 364.049L1150.7 369.639L1145.12 375.219L1139.54 380.799L1133.96 386.379L1128.38 391.959L1122.79 397.539L1114.9 397.539L1107 397.539L1099.11 397.539L1091.21 397.539L1083.32 397.539L1075.43 397.539L1069.84 403.129'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay4} ${styles.opacity} circle6`}
              d='M1066.55 404.294C1066.63 403.86 1066.83 403.459 1067.14 403.14C1067.35 402.922 1067.6 402.748 1067.88 402.629C1068.16 402.51 1068.46 402.449 1068.76 402.449C1069.06 402.449 1069.36 402.51 1069.64 402.629C1069.92 402.748 1070.17 402.922 1070.38 403.14C1070.69 403.459 1070.89 403.86 1070.97 404.294C1071.05 404.727 1071 405.175 1070.83 405.581C1070.66 405.987 1070.37 406.333 1070 406.576C1069.63 406.82 1069.2 406.949 1068.76 406.949C1068.32 406.949 1067.89 406.82 1067.52 406.576C1067.15 406.333 1066.86 405.987 1066.69 405.581C1066.52 405.175 1066.47 404.727 1066.55 404.294Z'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay3} ${styles.opacity} circle6`}
              d='M1297.79 322.294C1297.87 321.86 1298.07 321.459 1298.38 321.141C1298.59 320.922 1298.84 320.748 1299.12 320.629C1299.4 320.511 1299.7 320.449 1300 320.449C1300.3 320.449 1300.6 320.511 1300.88 320.629C1301.16 320.748 1301.41 320.922 1301.62 321.141C1301.93 321.459 1302.13 321.86 1302.21 322.294C1302.29 322.728 1302.24 323.175 1302.07 323.581C1301.9 323.987 1301.61 324.333 1301.24 324.577C1300.87 324.82 1300.44 324.949 1300 324.949C1299.56 324.949 1299.13 324.82 1298.76 324.577C1298.39 324.333 1298.1 323.987 1297.93 323.581C1297.76 323.175 1297.71 322.728 1297.79 322.294Z'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay5} ${styles.line}  line6`}
              d='M1211 186.699C1211 233.099 1211 244.699 1211 244.699'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay4} ${styles.opacity} circle6`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(-1 0 0 1 1214 181.699)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle6`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(-1 0 0 1 1214 243.699)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay3} ${styles.line}  line6`}
              d='M1221 215.699C1221 262.099 1221 273.699 1221 273.699'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle6`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(-1 0 0 1 1224 210.699)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay1} ${styles.opacity} circle6`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(-1 0 0 1 1224 272.699)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.3'>
            <path
              className={`${styles.delay4} ${styles.line}  line6`}
              d='M1233 443.199H1299L1361 381.199'
              stroke='black'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle6`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(-4.37114e-08 -1 -1 4.37114e-08 1366 382.699)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle6`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(-4.37114e-08 -1 -1 4.37114e-08 1234 445.699)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.3'>
            <path
              className={`${styles.delay3} ${styles.line}  line5`}
              d='M1091.44 308.396L1044.77 261.727L1044.77 174.046'
              stroke='black'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle5`}
              cx='1044.42'
              cy='171.571'
              r='2.25'
              transform='rotate(-45 1044.42 171.571)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle5`}
              cx='1093.21'
              cy='309.457'
              r='2.25'
              transform='rotate(-45 1093.21 309.457)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay3} ${styles.line}  line6`}
              d='M1227 435.199H1293L1355 373.199'
              stroke='black'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle6`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(-4.37114e-08 -1 -1 4.37114e-08 1360 374.699)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay1} ${styles.opacity} circle6`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(-4.37114e-08 -1 -1 4.37114e-08 1228 437.699)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay3} ${styles.line}  line6`}
              d='M1407.25 445.043C1383.25 469.043 1377.25 475.043 1377.25 475.043'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle6`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(-0.707107 -0.707107 -0.707107 0.707107 1412.92 443.457)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay1} ${styles.opacity} circle6`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(-0.707107 -0.707107 -0.707107 0.707107 1380.08 476.457)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay4} ${styles.line}  line6`}
              d='M1410.25 456.043C1393.45 472.843 1389.25 477.043 1389.25 477.043'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle6`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(-0.707107 -0.707107 -0.707107 0.707107 1415.92 454.457)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle6`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(-0.707107 -0.707107 -0.707107 0.707107 1392.08 478.457)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay5} ${styles.line}  line6`}
              d='M1281.87 425.699C1258.11 425.699 1252.17 425.699 1252.17 425.699'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay4} ${styles.opacity} circle6`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(4.37114e-08 -1 -1 -4.37114e-08 1287 428.586)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle6`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(4.37114e-08 -1 -1 -4.37114e-08 1253.17 428.699)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay3} ${styles.line}  line6`}
              d='M1245 33.6992C1230.6 33.6992 1227 33.6992 1227 33.6992'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle6`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(4.37114e-08 -1 -1 -4.37114e-08 1250 36.6428)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay1} ${styles.opacity} circle6`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(4.37114e-08 -1 -1 -4.37114e-08 1228.43 36.6992)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay4} ${styles.line}  line17`}
              d='M1003 568C988.6 568 985 568 985 568'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle17`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(4.37114e-08 -1 -1 -4.37114e-08 1008 570.944)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle17`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(4.37114e-08 -1 -1 -4.37114e-08 986.429 571)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.3'>
            <path
              className={`${styles.delay5} ${styles.line}  line6`}
              d='M1432.34 447.031C1399.53 479.84 1391.33 488.043 1391.33 488.043'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay4} ${styles.opacity} circle6`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(-0.707107 -0.707107 -0.707107 0.707107 1438 445.616)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle6`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(-0.707107 -0.707107 -0.707107 0.707107 1394.16 489.457)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.3'>
            <path
              className={`${styles.delay5} ${styles.line}  line6`}
              d='M1335.34 376.031C1302.53 408.84 1294.33 417.043 1294.33 417.043'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay4} ${styles.opacity} circle6`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(-0.707107 -0.707107 -0.707107 0.707107 1341 374.616)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle6`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(-0.707107 -0.707107 -0.707107 0.707107 1297.16 418.457)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.3'>
            <path
              className={`${styles.delay3} ${styles.line}  line5`}
              d='M1232 81.3092L1226.41 75.7292L1218.52 75.7292L1210.62 75.7292L1202.73 75.7292L1194.83 75.7292L1186.94 75.7293L1179.04 75.7293L1171.15 75.7293L1163.26 75.7293L1155.36 75.7293L1147.47 75.7293L1139.57 75.7293L1131.68 75.7293L1123.78 75.7293L1115.89 75.7293L1107.99 75.7293L1100.1 75.7293L1092.2 75.7293L1084.31 75.7293L1076.41 75.7293L1068.52 75.7293L1060.62 75.7293L1055.04 81.3093L1047.15 81.3093L1039.26 81.3093L1031.36 81.3093L1023.46 81.3093L1015.57 81.3093L1007.67 81.3093L999.78 81.3093L991.89 81.3093L983.99 81.3093L976.1 81.3093L968.2 81.3093L960.31 81.3093L952.41 81.3093L944.52 81.3093L936.62 81.3093L928.73 81.3093L923.15 86.8993L923.15 94.7893L928.73 100.379L934.31 105.959L939.89 111.539L939.89 119.429L939.89 127.329L939.89 135.219L939.89 143.119L945.47 148.699L953.37 148.699L961.26 148.699L969.16 148.699L977.05 148.699L977.05 140.799L971.47 135.219L965.89 129.639L960.31 124.059L954.72 118.479L949.14 112.889L943.56 107.309L937.98 101.729L932.4 96.1493L926.81 90.5693'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay2} ${styles.opacity} circle5`}
              d='M928.21 89.1692C927.933 88.8841 927.576 88.6883 927.187 88.6067C926.797 88.5251 926.393 88.5616 926.024 88.7113C925.655 88.8611 925.34 89.1174 925.118 89.4475C924.896 89.7775 924.777 90.1663 924.777 90.5642C924.777 90.9621 924.896 91.3509 925.118 91.681C925.34 92.011 925.655 92.2673 926.024 92.4171C926.393 92.5669 926.797 92.6033 927.187 92.5217C927.576 92.4402 927.933 92.2443 928.21 91.9592C928.574 91.5858 928.777 91.0853 928.777 90.5642C928.777 90.0431 928.574 89.5426 928.21 89.1692Z'
              fill='#162029'
            />
          </g>
          <g opacity='0.3'>
            <path
              className={`${styles.delay3} ${styles.line}  line6`}
              d='M1362.41 583.699L1362.41 575.808L1362.41 567.916L1362.41 560.025L1362.41 552.127L1362.41 544.228V536.337L1362.41 528.446L1362.41 520.554L1362.41 512.649L1362.41 504.758L1362.41 496.866L1362.41 488.968L1362.41 481.07L1362.41 473.178L1367.99 467.599L1373.58 462.013L1379.16 456.434L1384.74 450.848L1390.32 445.269L1395.91 439.683L1401.49 434.104V426.212L1395.9 420.626L1390.32 415.047L1384.74 409.468L1384.74 401.57L1384.74 393.671L1384.74 385.78L1384.74 377.882L1379.16 372.303L1373.57 366.716L1367.99 361.137L1362.41 355.558L1356.83 349.972L1356.83 277.271L1356.83 269.38L1356.83 261.482L1356.83 253.59L1356.83 245.699'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay2} ${styles.opacity} circle6`}
              d='M1359.34 244.132C1359.34 243.633 1359.2 243.146 1358.92 242.731C1358.64 242.316 1358.25 241.993 1357.79 241.802C1357.33 241.611 1356.82 241.56 1356.33 241.658C1355.84 241.755 1355.39 241.995 1355.04 242.347C1354.69 242.7 1354.45 243.149 1354.35 243.638C1354.25 244.127 1354.3 244.634 1354.5 245.095C1354.69 245.556 1355.01 245.949 1355.42 246.226C1355.84 246.502 1356.33 246.65 1356.83 246.649C1357.16 246.652 1357.49 246.588 1357.79 246.462C1358.1 246.337 1358.38 246.151 1358.61 245.917C1358.85 245.683 1359.03 245.405 1359.16 245.098C1359.28 244.792 1359.35 244.463 1359.34 244.132Z'
              fill='#162029'
            />
          </g>
          <g opacity='0.3'>
            <path
              className={`${styles.delay5} ${styles.line}  line6`}
              d='M1461.84 85.4339L1456.25 91.0139L1450.67 96.5939L1445.09 102.174L1439.51 107.754L1433.93 113.344L1428.34 118.924L1422.76 124.504L1417.18 130.084L1411.59 135.674L1406.01 141.254L1400.43 146.834L1394.85 152.414L1389.27 158.004L1383.69 163.584L1383.69 171.474L1383.69 179.374L1383.69 187.264L1383.69 195.164L1383.69 203.054L1389.27 208.634L1389.27 216.534L1389.27 224.424L1389.27 232.324L1389.27 240.214L1389.27 248.114L1389.27 256.004L1389.27 263.904L1389.27 271.794L1389.27 279.694L1389.27 287.584L1394.85 293.164L1400.43 298.754L1406.01 304.334L1406.01 312.224L1406.01 320.124L1406.01 328.014L1406.01 335.914L1406.01 343.804L1406.01 351.704L1400.43 357.284L1394.85 362.864L1389.27 368.444L1383.69 374.034L1378.1 379.614L1372.52 385.194L1366.94 390.774L1361.36 396.354L1355.77 401.944L1350.19 407.524L1344.61 413.104L1339.02 418.684L1333.44 424.274L1327.86 429.854L1322.28 435.434L1316.7 441.014L1311.11 446.594L1305.53 452.184L1297.63 452.184L1289.74 452.184L1281.85 452.184L1273.95 452.184L1266.06 452.184L1258.16 452.184L1250.27 452.184L1242.37 452.184L1234.48 452.184L1226.58 452.184L1218.69 452.184L1213.11 457.764'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay4} ${styles.opacity} circle6`}
              d='M1211.74 456.404C1211.38 456.766 1211.17 457.257 1211.17 457.769C1211.17 458.281 1211.38 458.772 1211.74 459.134C1212.1 459.496 1212.59 459.699 1213.1 459.699C1213.62 459.699 1214.11 459.496 1214.47 459.134C1214.83 458.772 1215.04 458.281 1215.04 457.769C1215.04 457.257 1214.83 456.766 1214.47 456.404C1214.11 456.042 1213.62 455.838 1213.1 455.838C1212.59 455.838 1212.1 456.042 1211.74 456.404Z'
              fill='#162029'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay3} ${styles.line}  line5`}
              d='M1032.41 129.699L1032.41 163.826L1032.41 171.717L1032.41 179.609L1032.41 187.507L1032.41 195.405L1032.41 203.297L1032.41 211.188L1032.41 219.079L1032.41 226.985L1032.41 234.876L1032.41 242.767L1032.41 250.666L1032.41 258.564L1032.41 266.456L1037.99 272.035L1043.58 277.621L1049.16 283.2L1054.74 288.786L1060.32 294.365L1065.91 299.951L1071.49 305.53L1071.49 313.422L1065.9 319.008L1060.32 324.587L1054.74 330.166L1054.74 338.064L1054.74 345.963L1054.74 353.854L1054.74 361.752L1049.16 367.331L1043.57 372.918L1037.99 378.497L1032.41 384.076L1026.83 389.662L1026.83 397.56L1026.83 405.451L1026.83 413.35L1026.83 421.241L1026.83 429.133'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay2} ${styles.opacity} circle5`}
              d='M1029.34 429.133C1029.34 429.631 1029.2 430.119 1028.92 430.534C1028.64 430.948 1028.25 431.272 1027.79 431.463C1027.33 431.654 1026.82 431.704 1026.33 431.607C1025.84 431.51 1025.39 431.27 1025.04 430.917C1024.69 430.565 1024.45 430.115 1024.35 429.626C1024.25 429.137 1024.3 428.63 1024.5 428.17C1024.69 427.709 1025.01 427.316 1025.43 427.039C1025.84 426.762 1026.33 426.615 1026.83 426.615C1027.16 426.613 1027.49 426.677 1027.79 426.802C1028.1 426.928 1028.38 427.113 1028.61 427.347C1028.85 427.582 1029.03 427.86 1029.16 428.167C1029.28 428.473 1029.35 428.801 1029.34 429.133Z'
              fill='#162029'
            />
          </g>
          <g opacity='0.15'>
            <path
              className={`${styles.delay4} ${styles.line}  line5`}
              d='M1314.99 165.64L1309.41 160.06L1303.82 154.48L1298.24 148.89L1292.66 143.31L1287.08 137.73L1281.5 132.15L1275.92 126.57L1270.33 120.98L1264.75 115.4L1259.17 109.82L1253.58 104.23L1248 98.6499H1240.11H1232.21H1224.32H1216.42H1208.53H1200.63H1192.74H1184.84H1176.95H1169.06H1161.16L1155.58 93.0699H1147.68H1139.79H1131.89H1124H1116.11H1108.21H1100.32H1092.42H1084.53H1076.63H1068.74H1060.84H1052.95H1045.06H1037.16L1031.58 87.4899L1025.99 81.9099L1020.41 76.3199L1014.83 70.7399L1009.25 65.1599L1003.66 59.5799L998.08 53.9899L992.5 48.4099L986.92 42.8299L981.34 37.2499L975.75 31.6699L970.17 26.0799L964.59 20.4999L959.01 14.9199L953.42 9.3299L947.84 3.74989L942.26 -1.83011L936.68 -7.41011L931.09 -13.0001H923.2H915.31H907.41H899.51H891.62H883.73H875.83H867.94L862.35 -7.41011L856.77 -1.83011L851.19 3.74989L845.61 9.3299L840.02 14.9199L834.44 20.4999L828.86 26.0799L823.28 31.6699L817.7 37.2499L812.11 42.8299L806.53 48.4099L800.95 53.9899L795.36 59.5799L789.78 65.1599L784.2 70.7399L778.62 76.3199H770.72H762.83H754.94H747.04H739.15H731.25H723.35H715.46H707.57H699.67H691.78H683.88H675.99H668.09H660.2H652.3H644.41H636.51H628.62L623.04 70.7399L617.45 65.1599L611.87 59.5799L606.29 53.9899L600.71 48.4099L595.12 42.8299L589.54 37.2499V29.3499'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay3} ${styles.opacity} circle5`}
              d='M592.08 29.3499C592.08 28.8475 591.931 28.3564 591.652 27.9387C591.373 27.521 590.976 27.1955 590.512 27.0032C590.048 26.811 589.537 26.7607 589.044 26.8587C588.552 26.9567 588.099 27.1986 587.744 27.5538C587.389 27.9091 587.147 28.3616 587.049 28.8544C586.951 29.3471 587.001 29.8578 587.193 30.3219C587.386 30.786 587.711 31.1827 588.129 31.4618C588.547 31.7409 589.038 31.8899 589.54 31.8899C590.214 31.8899 590.86 31.6223 591.336 31.1459C591.812 30.6696 592.08 30.0235 592.08 29.3499Z'
              fill='#162029'
            />
          </g>
          <g opacity='0.2'>
            <path
              className={`${styles.delay2} ${styles.line}  line4`}
              d='M972.484 364L972.484 356.1L972.484 348.21L972.484 340.32L966.904 334.74L961.324 329.15L955.734 323.57L950.154 317.99L944.574 312.4L944.574 304.51L944.574 296.61L944.574 288.72L944.574 280.83L944.574 272.93L944.574 265.04L944.574 257.14L944.574 249.24L944.574 241.35L944.574 233.46'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay1} ${styles.opacity} circle4`}
              d='M945.006 228.751C945.591 228.735 946.159 228.94 946.599 229.325C947.016 229.763 947.25 230.345 947.25 230.951C947.25 231.562 947.012 232.149 946.587 232.587C946.149 233.012 945.562 233.25 944.951 233.25C944.345 233.25 943.763 233.016 943.325 232.599C942.94 232.159 942.735 231.591 942.751 231.006C942.767 230.413 943.01 229.849 943.429 229.429C943.849 229.01 944.413 228.767 945.006 228.751Z'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay1} ${styles.opacity} circle4`}
              d='M972.006 364.751C972.591 364.735 973.159 364.94 973.599 365.325C974.016 365.763 974.25 366.345 974.25 366.951C974.25 367.562 974.012 368.149 973.587 368.587C973.149 369.012 972.562 369.25 971.951 369.25C971.345 369.25 970.763 369.016 970.325 368.599C969.94 368.159 969.735 367.591 969.751 367.006C969.767 366.413 970.01 365.849 970.429 365.429C970.849 365.01 971.413 364.767 972.006 364.751Z'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay3} ${styles.line}  line6`}
              d='M1207 361.699V353.799V345.909V338.009V330.119V322.219V314.329V306.429V298.539V290.639V282.749V274.849V266.959L1201.42 261.379V253.479V245.589V237.689V229.799V221.899V214.009V206.109V198.219V190.329V182.429V174.539V166.639'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay3} ${styles.line}  line6`}
              d='M1204.4 166.639C1204.4 166.046 1204.22 165.466 1203.89 164.972C1203.56 164.479 1203.1 164.095 1202.55 163.868C1202 163.64 1201.4 163.581 1200.81 163.697C1200.23 163.813 1199.7 164.098 1199.28 164.518C1198.86 164.937 1198.57 165.472 1198.46 166.054C1198.34 166.636 1198.4 167.239 1198.63 167.787C1198.86 168.335 1199.24 168.804 1199.73 169.134C1200.23 169.463 1200.81 169.639 1201.4 169.639C1202.2 169.639 1202.96 169.323 1203.52 168.76C1204.08 168.198 1204.4 167.435 1204.4 166.639Z'
              fill='#162029'
            />
          </g>
        </g>
        <defs>
          {/*<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1.42222" height="2">*/}
          {/*    <use xlink:href="#image0_110_2" transform="scale(0.000694444 0.000976562)"/>*/}
          {/*</pattern>*/}
          <linearGradient
            id='paint0_linear_110_2'
            x1='147'
            y1='428.001'
            x2='37'
            y2='428.001'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#A6D0DD' />
            <stop offset='1' stopColor='#162029' stopOpacity='0.4' />
          </linearGradient>
          <linearGradient
            id='paint1_linear_110_2'
            x1='615'
            y1='433.166'
            x2='450'
            y2='433.166'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#162029' stopOpacity='0.2' />
            <stop offset='0.469695' stopColor='#FF6969' stopOpacity='0.44' />
            <stop offset='1' stopColor='#162029' stopOpacity='0.2' />
          </linearGradient>
          <linearGradient id='paint2_linear_110_2' x1='250.5' y1='436' x2='112' y2='436' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#162029' stopOpacity='0.4' />
            <stop offset='1' stopColor='#A6D0DD' />
          </linearGradient>
          <linearGradient
            id='paint3_linear_110_2'
            x1='539.191'
            y1='532'
            x2='655'
            y2='532'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#162029' stopOpacity='0.4' />
            <stop offset='1' stopColor='#A6D0DD' />
          </linearGradient>
          <linearGradient
            id='paint4_linear_110_2'
            x1='973.191'
            y1='490'
            x2='1089'
            y2='490'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#162029' stopOpacity='0.4' />
            <stop offset='1' stopColor='#A6D0DD' />
          </linearGradient>
          <linearGradient
            id='paint5_linear_110_2'
            x1='105.5'
            y1='362'
            x2='238.868'
            y2='451.768'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#162029' />
            <stop offset='1' stopColor='#162029' stopOpacity='0' />
          </linearGradient>
          <linearGradient
            id='paint6_linear_110_2'
            x1='542.999'
            y1='519'
            x2='669.952'
            y2='519'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#162029' stopOpacity='0.4' />
            <stop offset='1' stopColor='#A6D0DD' />
          </linearGradient>
          <linearGradient
            id='paint7_linear_110_2'
            x1='976.999'
            y1='478'
            x2='1103.95'
            y2='478'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#162029' stopOpacity='0.4' />
            <stop offset='1' stopColor='#A6D0DD' />
          </linearGradient>
          <linearGradient
            id='paint8_linear_110_2'
            x1='108.5'
            y1='351'
            x2='198.5'
            y2='413.5'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#162029' />
            <stop offset='1' stopColor='#162029' stopOpacity='0' />
          </linearGradient>
          <linearGradient
            id='paint9_linear_110_2'
            x1='0.913946'
            y1='341.5'
            x2='308.5'
            y2='341.5'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#A6D0DD' stopOpacity='0' />
            <stop offset='0.469695' stopColor='#A6D0DD' />
            <stop offset='1' stopColor='#A6D0DD' stopOpacity='0' />
          </linearGradient>
          <linearGradient id='paint10_linear_110_2' x1='208' y1='429' x2='312' y2='429' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#162029' stopOpacity='0.4' />
            <stop offset='1' stopColor='#A6D0DD' />
          </linearGradient>
          <linearGradient
            id='paint11_linear_110_2'
            x1='17.5'
            y1='604'
            x2='17.4998'
            y2='705'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#A6D0DD' />
            <stop offset='1' stopColor='#162029' stopOpacity='0.4' />
          </linearGradient>
          <linearGradient
            id='paint12_linear_110_2'
            x1='222'
            y1='750.719'
            x2='349'
            y2='750.719'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#FF6969' />
            <stop offset='1' stopColor='#A6D0DD' />
          </linearGradient>
          <linearGradient
            id='paint13_linear_110_2'
            x1='669.455'
            y1='826.5'
            x2='669.455'
            y2='795'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#162029' stopOpacity='0.4' />
            <stop offset='1' stopColor='#A6D0DD' />
          </linearGradient>
          <linearGradient
            id='paint14_linear_110_2'
            x1='678.455'
            y1='823'
            x2='678.455'
            y2='765.5'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#FF6969' />
            <stop offset='0.9999' stopColor='#162029' stopOpacity='0.4' />
            <stop offset='1' stopColor='#162029' stopOpacity='0.2' />
          </linearGradient>
          <linearGradient id='paint15_linear_110_2' x1='52' y1='426' x2='52' y2='451' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#A6D0DD' />
            <stop offset='1' stopColor='#A6D0DD' stopOpacity='0' />
          </linearGradient>
          <linearGradient id='paint16_linear_110_2' x1='67' y1='426' x2='67' y2='445' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#A6D0DD' />
            <stop offset='1' stopColor='#A6D0DD' stopOpacity='0' />
          </linearGradient>
          <linearGradient
            id='paint17_linear_110_2'
            x1='170.178'
            y1='154.153'
            x2='170.18'
            y2='215.95'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#FF6969' stopOpacity='0' />
            <stop offset='1' stopColor='#FF6969' />
          </linearGradient>
          <linearGradient id='paint18_linear_110_2' x1='176' y1='185' x2='176' y2='233' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#A6D0DD' />
            <stop offset='1' stopColor='#A6D0DD' stopOpacity='0' />
          </linearGradient>
          <linearGradient id='paint19_linear_110_2' x1='329' y1='294' x2='435' y2='294' gradientUnits='userSpaceOnUse'>
            <stop stopOpacity='0' />
            <stop offset='0.494792' />
            <stop offset='1' stopOpacity='0' />
          </linearGradient>
          <linearGradient id='paint20_linear_110_2' x1='402' y1='286' x2='353' y2='286' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#A6D0DD' />
            <stop offset='1' stopColor='#A6D0DD' stopOpacity='0' />
          </linearGradient>
          <linearGradient id='paint21_linear_110_2' x1='446' y1='302' x2='340' y2='302' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#A6D0DD' stopOpacity='0' />
            <stop offset='1' stopColor='#A6D0DD' />
          </linearGradient>
          <linearGradient id='paint22_linear_110_2' x1='979' y1='427' x2='873' y2='427' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#FF6969' stopOpacity='0' />
            <stop offset='1' stopColor='#FF6969' />
          </linearGradient>
          <linearGradient id='paint23_linear_110_2' x1='292' y1='907' x2='149' y2='907' gradientUnits='userSpaceOnUse'>
            <stop stopOpacity='0' />
            <stop offset='0.494792' />
            <stop offset='1' stopOpacity='0' />
          </linearGradient>
          <linearGradient id='paint24_linear_110_2' x1='643' y1='101' x2='500' y2='101' gradientUnits='userSpaceOnUse'>
            <stop stopOpacity='0' />
            <stop offset='0.494792' />
            <stop offset='1' stopOpacity='0' />
          </linearGradient>
          <linearGradient
            id='paint25_linear_110_2'
            x1='1319'
            y1='580'
            x2='1176'
            y2='580'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopOpacity='0' />
            <stop offset='0.494792' />
            <stop offset='1' stopOpacity='0' />
          </linearGradient>
          <linearGradient
            id='paint26_linear_110_2'
            x1='625.179'
            y1='749.168'
            x2='625.18'
            y2='809.881'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#FF6969' />
            <stop offset='1' stopColor='#FF6969' stopOpacity='0' />
          </linearGradient>
          <linearGradient id='paint27_linear_110_2' x1='620' y1='750' x2='620' y2='797' gradientUnits='userSpaceOnUse'>
            <stop stopOpacity='0' />
            <stop offset='0.494792' />
            <stop offset='1' stopOpacity='0' />
          </linearGradient>
          <linearGradient id='paint28_linear_110_2' x1='628' y1='750' x2='628' y2='808' gradientUnits='userSpaceOnUse'>
            <stop stopOpacity='0' />
            <stop offset='0.494792' />
            <stop offset='1' stopOpacity='0' />
          </linearGradient>
          <linearGradient id='paint29_linear_110_2' x1='71' y1='682' x2='71' y2='716' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#162029' />
            <stop offset='1' stopColor='#162029' stopOpacity='0' />
          </linearGradient>
          <linearGradient id='paint30_linear_110_2' x1='67' y1='682' x2='67' y2='716' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#162029' />
            <stop offset='1' stopColor='#162029' stopOpacity='0' />
          </linearGradient>
          <linearGradient id='paint31_linear_110_2' x1='75' y1='682' x2='75' y2='717' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#162029' />
            <stop offset='1' stopColor='#162029' stopOpacity='0' />
          </linearGradient>
          <linearGradient id='paint32_linear_110_2' x1='487' y1='521' x2='487' y2='536' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#162029' />
            <stop offset='1' stopColor='#162029' stopOpacity='0' />
          </linearGradient>
          <linearGradient id='paint33_linear_110_2' x1='483' y1='521' x2='483' y2='541' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#162029' />
            <stop offset='1' stopColor='#162029' stopOpacity='0' />
          </linearGradient>
          <linearGradient id='paint34_linear_110_2' x1='491' y1='521' x2='491' y2='532' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#162029' />
            <stop offset='1' stopColor='#162029' stopOpacity='0' />
          </linearGradient>
          <linearGradient
            id='paint35_linear_110_2'
            x1='28.3421'
            y1='465.019'
            x2='105.373'
            y2='542.049'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#162029' stopOpacity='0.4' />
            <stop offset='0.301897' stopColor='#A6D0DD' />
            <stop offset='0.810486' stopColor='#A6D0DD' />
            <stop offset='1' stopColor='#162029' stopOpacity='0.4' />
          </linearGradient>
          <linearGradient
            id='paint36_linear_110_2'
            x1='447.5'
            y1='835'
            x2='447.501'
            y2='1003.5'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#162029' />
            <stop offset='1' stopColor='#162029' stopOpacity='0' />
          </linearGradient>
          <linearGradient
            id='paint37_linear_110_2'
            x1='456.001'
            y1='826'
            x2='456.001'
            y2='1011.5'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#162029' />
            <stop offset='1' stopColor='#162029' stopOpacity='0' />
          </linearGradient>
          <linearGradient
            id='paint38_linear_110_2'
            x1='470'
            y1='835'
            x2='470.001'
            y2='1019'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#162029' />
            <stop offset='1' stopColor='#162029' stopOpacity='0' />
          </linearGradient>
          <linearGradient
            id='paint39_linear_110_2'
            x1='503.5'
            y1='838'
            x2='503.5'
            y2='1028'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#162029' />
            <stop offset='1' stopColor='#162029' stopOpacity='0' />
          </linearGradient>
          <linearGradient
            id='paint40_linear_110_2'
            x1='539.77'
            y1='365.5'
            x2='539.77'
            y2='256'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#FF6969' />
            <stop offset='1' stopColor='#A6D0DD' />
          </linearGradient>
          <linearGradient
            id='paint41_linear_110_2'
            x1='790.77'
            y1='805.5'
            x2='790.77'
            y2='696'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#FF6969' />
            <stop offset='1' stopColor='#A6D0DD' />
          </linearGradient>
          <linearGradient
            id='paint42_linear_110_2'
            x1='12.7705'
            y1='848.5'
            x2='12.7703'
            y2='739'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#FF6969' />
            <stop offset='1' stopColor='#A6D0DD' />
          </linearGradient>
          <linearGradient
            id='paint43_linear_110_2'
            x1='590'
            y1='191.454'
            x2='566.375'
            y2='191.454'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#162029' stopOpacity='0.4' />
            <stop offset='1' stopColor='#A6D0DD' />
          </linearGradient>
          <linearGradient
            id='paint44_linear_110_2'
            x1='1020'
            y1='948.166'
            x2='1185'
            y2='948.166'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#162029' stopOpacity='0.2' />
            <stop offset='0.469695' stopColor='#FF6969' stopOpacity='0.44' />
            <stop offset='1' stopColor='#162029' stopOpacity='0.2' />
          </linearGradient>
          <linearGradient
            id='paint45_linear_110_2'
            x1='1138.83'
            y1='551'
            x2='1138.83'
            y2='716'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#162029' stopOpacity='0.2' />
            <stop offset='0.469695' stopColor='#FF6969' stopOpacity='0.44' />
            <stop offset='1' stopColor='#162029' stopOpacity='0.2' />
          </linearGradient>
          <linearGradient
            id='paint46_linear_110_2'
            x1='1384.5'
            y1='951'
            x2='1523'
            y2='951'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#162029' stopOpacity='0.4' />
            <stop offset='1' stopColor='#A6D0DD' />
          </linearGradient>
          <linearGradient
            id='paint47_linear_110_2'
            x1='1427'
            y1='944'
            x2='1323'
            y2='944'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#162029' stopOpacity='0.4' />
            <stop offset='1' stopColor='#A6D0DD' />
          </linearGradient>
          <linearGradient
            id='paint48_linear_110_2'
            x1='1308'
            y1='846'
            x2='1202'
            y2='846'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopOpacity='0' />
            <stop offset='0.494792' />
            <stop offset='1' stopOpacity='0' />
          </linearGradient>
          <linearGradient
            id='paint49_linear_110_2'
            x1='1235'
            y1='838'
            x2='1284'
            y2='838'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#A6D0DD' />
            <stop offset='1' stopColor='#A6D0DD' stopOpacity='0' />
          </linearGradient>
          <linearGradient
            id='paint50_linear_110_2'
            x1='1191'
            y1='854'
            x2='1297'
            y2='854'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#A6D0DD' stopOpacity='0' />
            <stop offset='1' stopColor='#A6D0DD' />
          </linearGradient>
          <linearGradient id='paint51_linear_110_2' x1='656' y1='942' x2='762' y2='942' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#FF6969' stopOpacity='0' />
            <stop offset='1' stopColor='#FF6969' />
          </linearGradient>
          <linearGradient
            id='paint52_linear_110_2'
            x1='1095.23'
            y1='880.5'
            x2='1095.23'
            y2='771'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#FF6969' />
            <stop offset='1' stopColor='#A6D0DD' />
          </linearGradient>
          <linearGradient
            id='paint53_linear_110_2'
            x1='1045'
            y1='706.454'
            x2='1068.62'
            y2='706.454'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#162029' stopOpacity='0.4' />
            <stop offset='1' stopColor='#A6D0DD' />
          </linearGradient>
          <linearGradient
            id='paint54_linear_110_2'
            x1='1063'
            y1='145.533'
            x2='1228'
            y2='145.533'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#162029' stopOpacity='0.2' />
            <stop offset='0.469695' stopColor='#FF6969' stopOpacity='0.44' />
            <stop offset='1' stopColor='#162029' stopOpacity='0.2' />
          </linearGradient>
          <linearGradient
            id='paint55_linear_110_2'
            x1='1427.5'
            y1='142.699'
            x2='1566'
            y2='142.699'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#162029' stopOpacity='0.4' />
            <stop offset='1' stopColor='#A6D0DD' />
          </linearGradient>
          <linearGradient
            id='paint56_linear_110_2'
            x1='1138.81'
            y1='46.6992'
            x2='1023'
            y2='46.6992'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#162029' stopOpacity='0.4' />
            <stop offset='1' stopColor='#A6D0DD' />
          </linearGradient>
          <linearGradient
            id='paint57_linear_110_2'
            x1='1135'
            y1='59.6992'
            x2='1008.05'
            y2='59.6992'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#162029' stopOpacity='0.4' />
            <stop offset='1' stopColor='#A6D0DD' />
          </linearGradient>
          <linearGradient
            id='paint58_linear_110_2'
            x1='1470'
            y1='149.699'
            x2='1366'
            y2='149.699'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#162029' stopOpacity='0.4' />
            <stop offset='1' stopColor='#A6D0DD' />
          </linearGradient>
          <linearGradient
            id='paint59_linear_110_2'
            x1='1351'
            y1='275'
            x2='1245'
            y2='275'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopOpacity='0' />
            <stop offset='0.494792' />
            <stop offset='1' stopOpacity='0' />
          </linearGradient>
          <linearGradient
            id='paint60_linear_110_2'
            x1='1278'
            y1='283'
            x2='1327'
            y2='283'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#A6D0DD' />
            <stop offset='1' stopColor='#A6D0DD' stopOpacity='0' />
          </linearGradient>
          <linearGradient
            id='paint61_linear_110_2'
            x1='1234'
            y1='267'
            x2='1340'
            y2='267'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#A6D0DD' stopOpacity='0' />
            <stop offset='1' stopColor='#A6D0DD' />
          </linearGradient>
          <linearGradient
            id='paint62_linear_110_2'
            x1='1191'
            y1='57.6992'
            x2='1191'
            y2='42.6992'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#162029' />
            <stop offset='1' stopColor='#162029' stopOpacity='0' />
          </linearGradient>
          <linearGradient
            id='paint63_linear_110_2'
            x1='1195'
            y1='57.6992'
            x2='1195'
            y2='37.6992'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#162029' />
            <stop offset='1' stopColor='#162029' stopOpacity='0' />
          </linearGradient>
          <linearGradient
            id='paint64_linear_110_2'
            x1='1187'
            y1='57.6992'
            x2='1187'
            y2='46.6992'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#162029' />
            <stop offset='1' stopColor='#162029' stopOpacity='0' />
          </linearGradient>
          <linearGradient
            id='paint65_linear_110_2'
            x1='1138.23'
            y1='233.5'
            x2='1138.23'
            y2='343'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#FF6969' />
            <stop offset='1' stopColor='#A6D0DD' />
          </linearGradient>
          <linearGradient
            id='paint66_linear_110_2'
            x1='1088'
            y1='387.245'
            x2='1111.62'
            y2='387.245'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#162029' stopOpacity='0.4' />
            <stop offset='1' stopColor='#A6D0DD' />
          </linearGradient>
          <clipPath id='clip0_110_2'>
            <rect width='1440' height='1024' fill='white' />
          </clipPath>
        </defs>
      </svg>
      <svg width='1440' height='1024' viewBox='0 0 1440 1024' fill='none'>
        <g clipPath='url(#clip0_110_2)'>
          <rect width='1440' height='1024' fill='url(#pattern0)' fillOpacity='0.1' />
          <path
            className={`${styles.delay5} ${styles.line}  line7`}
            d='M147.5 493.5H85L37 445.5V428'
            stroke='url(#paint0_linear_110_2)'
          />
          <circle
            className={`${styles.delay4} ${styles.opacity} circle7`}
            cx='37'
            cy='426'
            r='2.25'
            transform='rotate(180 37 426)'
            stroke='#9B9793'
            strokeWidth='1.5'
          />
          <circle
            className={`${styles.delay3} ${styles.opacity} circle7`}
            cx='150'
            cy='493.5'
            r='2.25'
            transform='rotate(180 150 493.5)'
            stroke='#A5CFDC'
            strokeWidth='1.5'
          />
          <g opacity='0.3'>
            <path className={`${styles.delay3} ${styles.line}  line9`} d='M492.5 454L581 454L596 469' stroke='black' />
            <path
              className={`${styles.delay2} ${styles.opacity} circle9`}
              d='M599 466.91C597.843 466.91 596.722 467.311 595.827 468.045C594.933 468.779 594.321 469.801 594.095 470.935C593.869 472.07 594.044 473.248 594.59 474.269C595.136 475.289 596.019 476.088 597.088 476.531C598.157 476.973 599.347 477.03 600.454 476.694C601.561 476.357 602.517 475.647 603.159 474.684C603.801 473.722 604.089 472.566 603.974 471.415C603.86 470.263 603.349 469.187 602.53 468.37C601.593 467.435 600.324 466.91 599 466.91ZM599 473.91C598.605 473.91 598.219 473.794 597.89 473.575C597.561 473.355 597.304 473.044 597.152 472.679C597 472.314 596.96 471.913 597.036 471.525C597.112 471.137 597.302 470.78 597.58 470.5C597.766 470.314 597.986 470.167 598.229 470.066C598.472 469.965 598.732 469.914 598.995 469.914C599.258 469.914 599.518 469.965 599.761 470.066C600.004 470.167 600.224 470.314 600.41 470.5C600.783 470.875 600.992 471.382 600.992 471.91C600.992 472.439 600.783 472.945 600.41 473.32C600.037 473.696 599.53 473.908 599 473.91Z'
              fill='black'
            />
          </g>
          <path className={`${styles.delay3} ${styles.line}  line9`} d='M493 455H582L597 470' stroke='white' />
          <path
            className={`${styles.delay2} ${styles.opacity} circle9`}
            d='M600 467.91C598.843 467.91 597.722 468.311 596.827 469.045C595.933 469.779 595.321 470.801 595.095 471.935C594.869 473.07 595.044 474.248 595.59 475.269C596.136 476.289 597.019 477.088 598.088 477.531C599.157 477.973 600.347 478.03 601.454 477.694C602.561 477.357 603.517 476.647 604.159 475.684C604.801 474.722 605.089 473.566 604.974 472.415C604.86 471.263 604.349 470.187 603.53 469.37C602.593 468.435 601.324 467.91 600 467.91ZM600 474.91C599.605 474.91 599.219 474.794 598.89 474.575C598.561 474.355 598.304 474.044 598.152 473.679C598 473.314 597.96 472.913 598.036 472.525C598.112 472.137 598.302 471.78 598.58 471.5C598.766 471.314 598.986 471.167 599.229 471.066C599.472 470.965 599.732 470.914 599.995 470.914C600.258 470.914 600.518 470.965 600.761 471.066C601.004 471.167 601.224 471.314 601.41 471.5C601.783 471.875 601.992 472.382 601.992 472.91C601.992 473.439 601.783 473.945 601.41 474.32C601.037 474.696 600.53 474.908 600 474.91Z'
            fill='white'
          />
          <g opacity='0.4'>
            <path
              className={`${styles.delay2} ${styles.opacity} circle19`}
              d='M228.012 535C227.418 534.998 226.837 535.172 226.342 535.5C225.847 535.828 225.461 536.296 225.232 536.844C225.003 537.392 224.942 537.995 225.056 538.578C225.171 539.161 225.455 539.696 225.875 540.117C226.294 540.538 226.828 540.825 227.41 540.941C227.993 541.058 228.596 540.999 229.145 540.773C229.694 540.546 230.163 540.162 230.494 539.668C230.824 539.174 231 538.594 231 538C231 537.206 230.686 536.445 230.125 535.883C229.565 535.321 228.805 535.003 228.012 535ZM228.012 539.706C227.671 539.708 227.337 539.609 227.053 539.421C226.769 539.233 226.547 538.965 226.415 538.651C226.284 538.337 226.249 537.99 226.315 537.656C226.381 537.322 226.545 537.015 226.785 536.774C227.026 536.533 227.334 536.369 227.668 536.303C228.002 536.237 228.348 536.272 228.663 536.404C228.977 536.535 229.245 536.757 229.433 537.041C229.621 537.326 229.72 537.659 229.718 538C229.718 538.452 229.538 538.886 229.218 539.206C228.898 539.526 228.464 539.706 228.012 539.706Z'
              fill='#162029'
            />
            <path
              className={`${styles.delay3} ${styles.line}  line19`}
              d='M89 555.49L117 555.49L134.5 537.99L226 537.99'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay1} ${styles.opacity} circle8`}
              d='M238 247.988C237.998 248.582 238.172 249.163 238.5 249.658C238.828 250.153 239.296 250.539 239.844 250.768C240.392 250.997 240.995 251.058 241.578 250.944C242.161 250.829 242.696 250.545 243.117 250.125C243.538 249.706 243.825 249.172 243.941 248.59C244.058 248.007 243.999 247.404 243.773 246.855C243.546 246.306 243.162 245.837 242.668 245.506C242.174 245.176 241.594 245 241 245C240.206 245 239.445 245.314 238.883 245.875C238.321 246.435 238.003 247.195 238 247.988ZM242.706 247.988C242.708 248.329 242.609 248.663 242.421 248.947C242.233 249.231 241.965 249.453 241.651 249.585C241.337 249.716 240.99 249.751 240.656 249.685C240.322 249.619 240.015 249.455 239.774 249.215C239.533 248.974 239.369 248.666 239.303 248.332C239.237 247.998 239.272 247.652 239.404 247.337C239.535 247.023 239.757 246.755 240.041 246.567C240.326 246.379 240.659 246.28 241 246.282C241.452 246.282 241.886 246.462 242.206 246.782C242.526 247.102 242.706 247.536 242.706 247.988Z'
              fill='#162029'
            />
            <path
              className={`${styles.delay2} ${styles.line}  line8`}
              d='M255.49 407.5L255.49 356.5L240.99 342V250'
              stroke='#162029'
            />
          </g>
          <g opacity='0.3'>
            <path
              className={`${styles.delay3} ${styles.opacity} circle20`}
              d='M187.988 555.49C188.582 555.492 189.163 555.318 189.658 554.99C190.153 554.662 190.539 554.194 190.768 553.646C190.997 553.098 191.058 552.495 190.944 551.912C190.829 551.329 190.545 550.794 190.125 550.373C189.706 549.952 189.172 549.665 188.59 549.549C188.007 549.432 187.404 549.491 186.855 549.717C186.306 549.944 185.837 550.328 185.506 550.822C185.176 551.316 185 551.896 185 552.49C185 553.284 185.314 554.045 185.875 554.607C186.435 555.169 187.195 555.487 187.988 555.49ZM187.988 550.784C188.329 550.782 188.663 550.881 188.947 551.069C189.231 551.256 189.453 551.525 189.585 551.839C189.716 552.153 189.751 552.5 189.685 552.834C189.619 553.168 189.455 553.475 189.215 553.716C188.974 553.957 188.666 554.121 188.332 554.187C187.998 554.253 187.652 554.218 187.337 554.086C187.023 553.955 186.755 553.733 186.567 553.449C186.379 553.164 186.28 552.831 186.282 552.49C186.282 552.038 186.462 551.604 186.782 551.284C187.102 550.964 187.536 550.784 187.988 550.784Z'
              fill='#162029'
            />
            <path
              className={`${styles.delay4} ${styles.opacity} circle20`}
              d='M353.988 541C354.582 541.002 355.163 540.828 355.658 540.5C356.153 540.172 356.539 539.704 356.768 539.156C356.997 538.608 357.058 538.005 356.944 537.422C356.829 536.839 356.545 536.304 356.125 535.883C355.706 535.462 355.172 535.175 354.59 535.059C354.007 534.942 353.404 535.001 352.855 535.227C352.306 535.454 351.837 535.838 351.506 536.332C351.176 536.826 351 537.406 351 538C351 538.794 351.314 539.555 351.875 540.117C352.435 540.679 353.195 540.997 353.988 541ZM353.988 536.294C354.329 536.292 354.663 536.391 354.947 536.579C355.231 536.767 355.453 537.035 355.585 537.349C355.716 537.663 355.751 538.01 355.685 538.344C355.619 538.678 355.455 538.985 355.215 539.226C354.974 539.467 354.666 539.631 354.332 539.697C353.998 539.763 353.652 539.728 353.337 539.596C353.023 539.465 352.755 539.243 352.567 538.959C352.379 538.674 352.28 538.341 352.282 538C352.282 537.548 352.462 537.114 352.782 536.794C353.102 536.474 353.536 536.294 353.988 536.294Z'
              fill='#162029'
            />
            <path
              className={`${styles.delay5} ${styles.line}  line20`}
              d='M351 538L296.5 538L282 552.5L190 552.5'
              stroke='#162029'
            />
          </g>
          <path
            className={`${styles.delay2} ${styles.line}  line9`}
            d='M450 433.5L540.5 433.5L555.5 421L590 421'
            stroke='url(#paint1_linear_110_2)'
          />
          <path
            className={`${styles.delay1} ${styles.opacity} circle9`}
            d='M592.012 418C591.418 417.998 590.837 418.172 590.342 418.5C589.847 418.828 589.461 419.296 589.232 419.844C589.003 420.392 588.942 420.995 589.056 421.578C589.171 422.161 589.455 422.696 589.875 423.117C590.294 423.538 590.828 423.825 591.41 423.941C591.993 424.058 592.597 423.999 593.145 423.773C593.694 423.546 594.163 423.162 594.494 422.668C594.824 422.174 595 421.594 595 421C595 420.206 594.686 419.445 594.126 418.883C593.565 418.321 592.805 418.003 592.012 418ZM592.012 422.706C591.671 422.708 591.337 422.609 591.053 422.421C590.769 422.233 590.547 421.965 590.415 421.651C590.284 421.337 590.249 420.99 590.315 420.656C590.381 420.322 590.545 420.015 590.786 419.774C591.026 419.533 591.334 419.369 591.668 419.303C592.002 419.237 592.348 419.272 592.663 419.404C592.977 419.535 593.245 419.757 593.433 420.041C593.621 420.326 593.72 420.659 593.718 421C593.718 421.452 593.538 421.886 593.218 422.206C592.898 422.526 592.464 422.706 592.012 422.706Z'
            fill='#D6C3BA'
          />
          <path
            className={`${styles.delay1} ${styles.opacity} circle9`}
            d='M448.012 430C447.418 429.998 446.837 430.172 446.342 430.5C445.847 430.828 445.461 431.296 445.232 431.844C445.003 432.392 444.942 432.995 445.056 433.578C445.171 434.161 445.455 434.696 445.875 435.117C446.294 435.538 446.828 435.825 447.41 435.941C447.993 436.058 448.597 435.999 449.145 435.773C449.694 435.546 450.163 435.162 450.494 434.668C450.824 434.174 451 433.594 451 433C451 432.206 450.686 431.445 450.126 430.883C449.565 430.321 448.805 430.003 448.012 430ZM448.012 434.706C447.671 434.708 447.337 434.609 447.053 434.421C446.769 434.233 446.547 433.965 446.415 433.651C446.284 433.337 446.249 432.99 446.315 432.656C446.381 432.322 446.545 432.015 446.786 431.774C447.026 431.533 447.334 431.369 447.668 431.303C448.002 431.237 448.348 431.272 448.663 431.404C448.977 431.535 449.245 431.757 449.433 432.041C449.621 432.326 449.72 432.659 449.718 433C449.718 433.452 449.538 433.886 449.218 434.206C448.898 434.526 448.464 434.706 448.012 434.706Z'
            fill='#CBC3BA'
          />
          <path
            className={`${styles.delay4} ${styles.line}  line8`}
            d='M239.5 196.5L239.5 227.5L252 242.5L252 277'
            stroke='#A6D0DD'
          />
          <path
            className={`${styles.delay3} ${styles.opacity} circle8`}
            d='M255 279.012C255.002 278.418 254.828 277.837 254.5 277.342C254.172 276.847 253.704 276.461 253.156 276.232C252.608 276.003 252.005 275.942 251.422 276.056C250.839 276.171 250.304 276.455 249.883 276.875C249.462 277.294 249.175 277.828 249.059 278.41C248.942 278.993 249.001 279.596 249.227 280.145C249.454 280.694 249.838 281.163 250.332 281.494C250.826 281.824 251.406 282 252 282C252.794 282 253.555 281.686 254.117 281.125C254.679 280.565 254.997 279.805 255 279.012ZM250.294 279.012C250.292 278.671 250.391 278.337 250.579 278.053C250.767 277.769 251.035 277.547 251.349 277.415C251.663 277.284 252.01 277.249 252.344 277.315C252.678 277.381 252.985 277.545 253.226 277.785C253.467 278.026 253.631 278.334 253.697 278.668C253.763 279.002 253.728 279.348 253.596 279.663C253.465 279.977 253.243 280.245 252.959 280.433C252.674 280.621 252.341 280.72 252 280.718C251.548 280.718 251.114 280.538 250.794 280.218C250.474 279.898 250.294 279.464 250.294 279.012Z'
            fill='#A6D0DD'
          />
          <path
            className={`${styles.delay2} ${styles.opacity} circle8`}
            d='M243 194.012C243.002 193.418 242.828 192.837 242.5 192.342C242.172 191.847 241.704 191.461 241.156 191.232C240.608 191.003 240.005 190.942 239.422 191.056C238.839 191.171 238.304 191.455 237.883 191.875C237.462 192.294 237.175 192.828 237.059 193.41C236.942 193.993 237.001 194.596 237.227 195.145C237.454 195.694 237.838 196.163 238.332 196.494C238.826 196.824 239.406 197 240 197C240.794 197 241.555 196.686 242.117 196.125C242.679 195.565 242.997 194.805 243 194.012ZM238.294 194.012C238.292 193.671 238.391 193.337 238.579 193.053C238.767 192.769 239.035 192.547 239.349 192.415C239.663 192.284 240.01 192.249 240.344 192.315C240.678 192.381 240.985 192.545 241.226 192.785C241.467 193.026 241.631 193.334 241.697 193.668C241.763 194.002 241.728 194.348 241.596 194.663C241.465 194.977 241.243 195.245 240.959 195.433C240.674 195.621 240.341 195.72 240 195.718C239.548 195.718 239.114 195.538 238.794 195.218C238.474 194.898 238.294 194.464 238.294 194.012Z'
            fill='#A6D0DD'
          />
          <g opacity='0.4'>
            <path className={`${styles.delay5} ${styles.line}  line19`} d='M112 716L287 716' stroke='#162029' />
            <path
              className={`${styles.delay4} ${styles.opacity} circle19`}
              d='M289.012 713C288.418 712.998 287.837 713.172 287.342 713.5C286.847 713.828 286.461 714.296 286.232 714.844C286.003 715.392 285.942 715.995 286.056 716.578C286.171 717.161 286.455 717.696 286.875 718.117C287.294 718.538 287.828 718.825 288.41 718.941C288.993 719.058 289.596 718.999 290.145 718.773C290.694 718.546 291.163 718.162 291.494 717.668C291.824 717.174 292 716.594 292 716C292 715.206 291.686 714.445 291.125 713.883C290.565 713.321 289.805 713.003 289.012 713ZM289.012 717.706C288.671 717.708 288.337 717.609 288.053 717.421C287.769 717.233 287.547 716.965 287.415 716.651C287.284 716.337 287.249 715.99 287.315 715.656C287.381 715.322 287.545 715.015 287.785 714.774C288.026 714.533 288.334 714.369 288.668 714.303C289.002 714.237 289.348 714.272 289.663 714.404C289.977 714.535 290.245 714.757 290.433 715.041C290.621 715.326 290.72 715.659 290.718 716C290.718 716.452 290.538 716.886 290.218 717.206C289.898 717.526 289.464 717.706 289.012 717.706Z'
              fill='#162029'
            />
            <path
              className={`${styles.delay3} ${styles.opacity} circle19`}
              d='M109.012 713C108.418 712.998 107.837 713.172 107.342 713.5C106.847 713.828 106.461 714.296 106.232 714.844C106.003 715.392 105.942 715.995 106.056 716.578C106.171 717.161 106.455 717.696 106.875 718.117C107.294 718.538 107.828 718.825 108.41 718.941C108.993 719.058 109.596 718.999 110.145 718.773C110.694 718.546 111.163 718.162 111.494 717.668C111.824 717.174 112 716.594 112 716C112 715.206 111.686 714.445 111.125 713.883C110.565 713.321 109.805 713.003 109.012 713ZM109.012 717.706C108.671 717.708 108.337 717.609 108.053 717.421C107.769 717.233 107.547 716.965 107.415 716.651C107.284 716.337 107.249 715.99 107.315 715.656C107.381 715.322 107.545 715.015 107.785 714.774C108.026 714.533 108.334 714.369 108.668 714.303C109.002 714.237 109.348 714.272 109.663 714.404C109.977 714.535 110.245 714.757 110.433 715.041C110.621 715.326 110.72 715.659 110.718 716C110.718 716.452 110.538 716.886 110.218 717.206C109.898 717.526 109.464 717.706 109.012 717.706Z'
              fill='#162029'
            />
          </g>
          <path
            className={`${styles.delay1} ${styles.opacity} circle7`}
            d='M110.012 427C109.418 426.998 108.837 427.172 108.342 427.5C107.847 427.828 107.461 428.296 107.232 428.844C107.003 429.392 106.942 429.995 107.056 430.578C107.171 431.161 107.455 431.696 107.875 432.117C108.294 432.538 108.828 432.825 109.41 432.941C109.993 433.058 110.596 432.999 111.145 432.773C111.694 432.546 112.163 432.162 112.494 431.668C112.824 431.174 113 430.594 113 430C113 429.206 112.686 428.445 112.125 427.883C111.565 427.321 110.805 427.003 110.012 427ZM110.012 431.706C109.671 431.708 109.337 431.609 109.053 431.421C108.769 431.233 108.547 430.965 108.415 430.651C108.284 430.337 108.249 429.99 108.315 429.656C108.381 429.322 108.545 429.015 108.785 428.774C109.026 428.533 109.334 428.369 109.668 428.303C110.002 428.237 110.348 428.272 110.663 428.404C110.977 428.535 111.245 428.757 111.433 429.041C111.621 429.326 111.72 429.659 111.718 430C111.718 430.452 111.538 430.886 111.218 431.206C110.898 431.526 110.464 431.706 110.012 431.706Z'
            fill='#A6D0DD'
          />
          <path
            className={`${styles.delay2} ${styles.line}  line7`}
            d='M112 430L177 430L190 442L250.5 442'
            stroke='url(#paint2_linear_110_2)'
          />
          <path
            className={`${styles.delay1} ${styles.opacity} circle7`}
            d='M252.512 439.01C251.918 439.008 251.337 439.182 250.842 439.51C250.347 439.838 249.961 440.306 249.732 440.854C249.503 441.402 249.442 442.005 249.556 442.588C249.671 443.171 249.956 443.706 250.375 444.127C250.794 444.548 251.328 444.835 251.911 444.951C252.493 445.068 253.097 445.009 253.645 444.783C254.194 444.556 254.664 444.172 254.994 443.678C255.324 443.184 255.5 442.604 255.5 442.01C255.5 441.216 255.186 440.455 254.626 439.893C254.066 439.331 253.306 439.013 252.512 439.01ZM252.512 443.716C252.171 443.718 251.837 443.619 251.553 443.431C251.269 443.244 251.047 442.975 250.916 442.661C250.784 442.347 250.749 442 250.815 441.666C250.881 441.332 251.045 441.025 251.286 440.784C251.527 440.543 251.834 440.379 252.168 440.313C252.502 440.247 252.849 440.282 253.163 440.414C253.477 440.545 253.745 440.767 253.933 441.051C254.121 441.336 254.22 441.669 254.218 442.01C254.218 442.462 254.038 442.896 253.718 443.216C253.398 443.536 252.964 443.716 252.512 443.716Z'
            fill='#9D9A96'
          />
          <g opacity='0.2'>
            <path
              className={`${styles.delay3} ${styles.opacity} circle9`}
              d='M644.512 454.51C643.918 454.508 643.337 454.682 642.842 455.01C642.347 455.338 641.961 455.806 641.732 456.354C641.503 456.902 641.442 457.505 641.556 458.088C641.671 458.671 641.955 459.206 642.375 459.627C642.794 460.048 643.328 460.335 643.91 460.451C644.493 460.568 645.097 460.509 645.645 460.283C646.194 460.056 646.663 459.672 646.994 459.178C647.324 458.684 647.5 458.104 647.5 457.51C647.5 456.716 647.186 455.955 646.626 455.393C646.065 454.831 645.305 454.513 644.512 454.51ZM644.512 459.216C644.171 459.218 643.837 459.119 643.553 458.931C643.269 458.744 643.047 458.475 642.915 458.161C642.784 457.847 642.749 457.5 642.815 457.166C642.881 456.832 643.045 456.525 643.286 456.284C643.526 456.043 643.834 455.879 644.168 455.813C644.502 455.747 644.848 455.782 645.163 455.914C645.477 456.045 645.745 456.267 645.933 456.551C646.121 456.836 646.22 457.169 646.218 457.51C646.218 457.962 646.038 458.396 645.718 458.716C645.398 459.036 644.964 459.216 644.512 459.216Z'
              fill='black'
            />
            <path
              className={`${styles.delay4} ${styles.opacity} circle9`}
              d='M368.012 439C367.418 438.998 366.837 439.172 366.342 439.5C365.847 439.828 365.461 440.296 365.232 440.844C365.003 441.392 364.942 441.995 365.056 442.578C365.171 443.161 365.455 443.696 365.875 444.117C366.294 444.538 366.828 444.825 367.41 444.941C367.993 445.058 368.597 444.999 369.145 444.773C369.694 444.546 370.163 444.162 370.494 443.668C370.824 443.174 371 442.594 371 442C371 441.206 370.686 440.445 370.126 439.883C369.565 439.321 368.805 439.003 368.012 439ZM368.012 443.706C367.671 443.708 367.337 443.609 367.053 443.421C366.769 443.233 366.547 442.965 366.415 442.651C366.284 442.337 366.249 441.99 366.315 441.656C366.381 441.322 366.545 441.015 366.786 440.774C367.026 440.533 367.334 440.369 367.668 440.303C368.002 440.237 368.348 440.272 368.663 440.404C368.977 440.535 369.245 440.757 369.433 441.041C369.621 441.326 369.72 441.659 369.718 442C369.718 442.452 369.538 442.886 369.218 443.206C368.898 443.526 368.464 443.706 368.012 443.706Z'
              fill='black'
            />
            <path
              className={`${styles.delay5} ${styles.line}  line9`}
              d='M370.5 442L586 442L602 457.5L643 457.5'
              stroke='black'
            />
          </g>
          <path
            className={`${styles.delay4} ${styles.line}  line21`}
            d='M536 532H624.5L655.5 563V584'
            stroke='url(#paint3_linear_110_2)'
          />
          <path
            className={`${styles.delay3} ${styles.line}  line11`}
            d='M974 490H1058.5L1089.5 521'
            stroke='url(#paint4_linear_110_2)'
          />
          <path
            className={`${styles.delay2} ${styles.line}  line7`}
            opacity='0.4'
            d='M-4 361.5H132.5L164.5 393.5V409.5'
            stroke='url(#paint5_linear_110_2)'
          />
          <path
            className={`${styles.delay5} ${styles.line}  line21`}
            d='M539.5 519H630L670.5 562V582.5'
            stroke='url(#paint6_linear_110_2)'
          />
          <path
            className={`${styles.delay4} ${styles.line}  line11`}
            d='M973.5 478H1064L1104.5 521'
            stroke='url(#paint7_linear_110_2)'
          />
          <path
            className={`${styles.delay3} ${styles.line}  line7`}
            opacity='0.4'
            d='M-13 351H135.5L172.5 389V418'
            stroke='url(#paint8_linear_110_2)'
          />
          <path
            className={`${styles.delay4} ${styles.line}  line7`}
            d='M-4 341.5L141.5 341.5L180 383.5V432'
            stroke='url(#paint9_linear_110_2)'
          />
          <path
            className={`${styles.delay3} ${styles.line}  line8`}
            d='M208 429H276.5L312 464V472'
            stroke='url(#paint10_linear_110_2)'
          />
          <circle
            className={`${styles.delay2} ${styles.opacity} circle8`}
            cx='312'
            cy='475'
            r='2.25'
            stroke='#A7D1DE'
            strokeWidth='1.5'
          />
          <circle
            className={`${styles.delay1} ${styles.opacity} circle8`}
            cx='206'
            cy='429'
            r='2.25'
            stroke='#9E9C97'
            strokeWidth='1.5'
          />
          <g opacity='0.4'>
            <path
              className={`${styles.delay5} ${styles.line}  line21`}
              d='M475.5 545.5H620.5L641 565.5V572'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay4} ${styles.opacity} circle21`}
              cx='641'
              cy='574'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle21`}
              cx='473'
              cy='545'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <path
            className={`${styles.delay3} ${styles.line}  line19`}
            d='M17.5 604L17.5 684.5L37.5 705L44 705'
            stroke='url(#paint11_linear_110_2)'
          />
          <circle
            className={`${styles.delay1} ${styles.opacity} circle19`}
            cx='3'
            cy='3'
            r='2.25'
            transform='matrix(-4.37114e-08 1 1 4.37114e-08 43 702)'
            stroke='#A19D99'
            strokeWidth='1.5'
          />
          <circle
            className={`${styles.delay2} ${styles.opacity} circle19`}
            cx='3'
            cy='3'
            r='2.25'
            transform='matrix(-4.37114e-08 1 1 4.37114e-08 15 599)'
            stroke='#A6D0DD'
            strokeWidth='1.5'
          />
          <path
            className={`${styles.delay3} ${styles.line}  line22`}
            d='M710 995.5L790.5 995.5L811 975.5L811 969'
            stroke='#A6D0DD'
          />
          <circle
            className={`${styles.delay2} ${styles.opacity} circle22`}
            cx='3'
            cy='3'
            r='2.25'
            transform='matrix(1 -8.74228e-08 -8.74228e-08 -1 808 970)'
            stroke='#A6D0DD'
            strokeWidth='1.5'
          />
          <circle
            className={`${styles.delay1} ${styles.opacity} circle22`}
            cx='3'
            cy='3'
            r='2.25'
            transform='matrix(1 -8.74228e-08 -8.74228e-08 -1 705 998)'
            stroke='#A6D0DD'
            strokeWidth='1.5'
          />
          <path
            className={`${styles.delay2} ${styles.line}  line10`}
            d='M743 107.5L823.5 107.5L844 127.5L844 134'
            stroke='#A6D0DD'
          />
          <circle
            className={`${styles.delay1} ${styles.opacity} circle10`}
            cx='844'
            cy='136'
            r='2.25'
            stroke='#A6D0DD'
            strokeWidth='1.5'
          />
          <circle
            className={`${styles.delay1} ${styles.opacity} circle10`}
            cx='741'
            cy='108'
            r='2.25'
            stroke='#A6D0DD'
            strokeWidth='1.5'
          />
          <path
            className={`${styles.delay5} ${styles.line}  line20`}
            d='M222 740H304.5L349.5 696V680'
            stroke='url(#paint12_linear_110_2)'
          />
          <circle
            className={`${styles.delay4} ${styles.opacity} circle20`}
            cx='3'
            cy='3'
            r='2.25'
            transform='matrix(1 0 0 -1 347 681)'
            stroke='#A6D0DD'
            strokeWidth='1.5'
          />
          <g opacity='0.4'>
            <circle className={`${styles.delay1} ${styles.opacity} circle8`} cx='329' cy='423' r='4' fill='#162029' />
            <circle className={`${styles.delay2} ${styles.opacity} circle8`} cx='341' cy='423' r='4' fill='#162029' />
            <circle className={`${styles.delay3} ${styles.opacity} circle8`} cx='353' cy='423' r='4' fill='#162029' />
            <circle className={`${styles.delay4} ${styles.opacity} circle8`} cx='365' cy='423' r='4' fill='#162029' />
            <circle className={`${styles.delay5} ${styles.opacity} circle8`} cx='377' cy='423' r='4' fill='#162029' />
          </g>
          <g opacity='0.4'>
            <circle className={`${styles.delay1} ${styles.opacity} circle10`} cx='694' cy='265' r='4' fill='#162029' />
            <circle className={`${styles.delay2} ${styles.opacity} circle10`} cx='706' cy='265' r='4' fill='#162029' />
            <circle className={`${styles.delay3} ${styles.opacity} circle10`} cx='718' cy='265' r='4' fill='#162029' />
            <circle className={`${styles.delay4} ${styles.opacity} circle10`} cx='730' cy='265' r='4' fill='#162029' />
            <circle className={`${styles.delay5} ${styles.opacity} circle10`} cx='742' cy='265' r='4' fill='#162029' />
          </g>
          <g opacity='0.4'>
            <circle className={`${styles.delay1} ${styles.opacity} circle10`} cx='694' cy='278' r='4' fill='#162029' />
            <circle className={`${styles.delay2} ${styles.opacity} circle10`} cx='706' cy='278' r='4' fill='#162029' />
            <circle className={`${styles.delay3} ${styles.opacity} circle10`} cx='718' cy='278' r='4' fill='#162029' />
            <circle className={`${styles.delay4} ${styles.opacity} circle10`} cx='730' cy='278' r='4' fill='#FF6969' />
            <circle className={`${styles.delay5} ${styles.opacity} circle10`} cx='742' cy='278' r='4' fill='#162029' />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay1} ${styles.opacity} circle21`}
              cx='568'
              cy='780'
              r='4'
              transform='rotate(-90 568 780)'
              fill='#162029'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle21`}
              cx='568'
              cy='768'
              r='4'
              transform='rotate(-90 568 768)'
              fill='#162029'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle21`}
              cx='568'
              cy='756'
              r='4'
              transform='rotate(-90 568 756)'
              fill='#162029'
            />
            <circle
              className={`${styles.delay4} ${styles.opacity} circle21`}
              cx='568'
              cy='744'
              r='4'
              transform='rotate(-90 568 744)'
              fill='#162029'
            />
            <circle
              className={`${styles.delay5} ${styles.opacity} circle21`}
              cx='568'
              cy='732'
              r='4'
              transform='rotate(-90 568 732)'
              fill='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay5} ${styles.opacity} circle19`}
              cx='41'
              cy='930'
              r='4'
              transform='rotate(-90 41 930)'
              fill='#162029'
            />
            <circle
              className={`${styles.delay4} ${styles.opacity} circle19`}
              cx='41'
              cy='918'
              r='4'
              transform='rotate(-90 41 918)'
              fill='#162029'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle19`}
              cx='41'
              cy='906'
              r='4'
              transform='rotate(-90 41 906)'
              fill='#162029'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle19`}
              cx='41'
              cy='894'
              r='4'
              transform='rotate(-90 41 894)'
              fill='#162029'
            />
            <circle
              className={`${styles.delay1} ${styles.opacityH} circle19`}
              cx='41'
              cy='882'
              r='4'
              transform='rotate(-90 41 882)'
              fill='#162029'
            />
          </g>
          <circle
            className={`${styles.delay1} ${styles.opacityH} circle19`}
            opacity='0.3'
            cx='54'
            cy='930'
            r='4'
            transform='rotate(-90 54 930)'
            fill='#162029'
          />
          <circle
            className={`${styles.delay2} ${styles.opacityH} circle19`}
            opacity='0.3'
            cx='54'
            cy='918'
            r='4'
            transform='rotate(-90 54 918)'
            fill='#162029'
          />
          <circle
            className={`${styles.delay3} ${styles.opacityH} circle19`}
            cx='54'
            cy='906'
            r='4'
            transform='rotate(-90 54 906)'
            fill='#A6D0DD'
          />
          <circle
            className={`${styles.delay4} ${styles.opacityH} circle19`}
            opacity='0.3'
            cx='54'
            cy='894'
            r='4'
            transform='rotate(-90 54 894)'
            fill='#162029'
          />
          <circle
            className={`${styles.delay5} ${styles.opacityH} circle19`}
            opacity='0.3'
            cx='54'
            cy='882'
            r='4'
            transform='rotate(-90 54 882)'
            fill='#162029'
          />
          <circle
            className={`${styles.delay4} ${styles.opacityH} circle20`}
            opacity='0.3'
            cx='143'
            cy='439'
            r='3'
            fill='#162029'
          />
          <circle
            className={`${styles.delay3} ${styles.opacityH} circle20`}
            opacity='0.4'
            cx='153'
            cy='439'
            r='3'
            fill='#162029'
          />
          <circle
            className={`${styles.delay2} ${styles.opacityH} circle20`}
            opacity='0.3'
            cx='163'
            cy='439'
            r='3'
            fill='#162029'
          />
          <circle
            className={`${styles.delay1} ${styles.opacityH} circle20`}
            opacity='0.3'
            cx='173'
            cy='439'
            r='3'
            fill='#162029'
          />
          <circle
            className={`${styles.delay1} ${styles.opacityH} circle20`}
            opacity='0.3'
            cx='428'
            cy='691'
            r='3'
            fill='#162029'
          />
          <circle
            className={`${styles.delay2} ${styles.opacityH} circle20`}
            opacity='0.4'
            cx='438'
            cy='691'
            r='3'
            fill='#162029'
          />
          <circle
            className={`${styles.delay3} ${styles.opacityH} circle20`}
            opacity='0.3'
            cx='448'
            cy='691'
            r='3'
            fill='#162029'
          />
          <circle className={`${styles.delay4} ${styles.opacity} circle20`} cx='458' cy='691' r='3' fill='#A6D0DD' />
          <circle
            className={`${styles.delay4} ${styles.opacityH} circle7`}
            opacity='0.3'
            cx='220'
            cy='284'
            r='3'
            transform='rotate(-90 220 284)'
            fill='#162029'
          />
          <circle
            className={`${styles.delay3} ${styles.opacityH} circle7`}
            opacity='0.4'
            cx='220'
            cy='274'
            r='3'
            transform='rotate(-90 220 274)'
            fill='#162029'
          />
          <circle
            className={`${styles.delay2} ${styles.opacityH} circle7`}
            opacity='0.3'
            cx='220'
            cy='264'
            r='3'
            transform='rotate(-90 220 264)'
            fill='#162029'
          />
          <circle
            className={`${styles.delay1} ${styles.opacityH} circle7`}
            cx='220'
            cy='254'
            r='3'
            transform='rotate(-90 220 254)'
            fill='#A6D0DD'
          />
          <circle
            className={`${styles.delay1} ${styles.opacity} circle10`}
            opacity='0.3'
            cx='936'
            cy='457'
            r='3'
            transform='rotate(90 936 457)'
            fill='#162029'
          />
          <circle
            className={`${styles.delay2} ${styles.opacity} circle10`}
            opacity='0.4'
            cx='936'
            cy='467'
            r='3'
            transform='rotate(90 936 467)'
            fill='#162029'
          />
          <circle
            className={`${styles.delay3} ${styles.opacity} circle10`}
            opacity='0.3'
            cx='936'
            cy='477'
            r='3'
            transform='rotate(90 936 477)'
            fill='#162029'
          />
          <circle
            className={`${styles.delay4} ${styles.opacity} circle10`}
            cx='936'
            cy='487'
            r='3'
            transform='rotate(90 936 487)'
            fill='#A6D0DD'
          />
          <circle
            className={`${styles.delay1} ${styles.opacityH} circle19`}
            opacity='0.3'
            cx='83'
            cy='782'
            r='3'
            fill='#162029'
          />
          <circle
            className={`${styles.delay2} ${styles.opacityH} circle19`}
            opacity='0.4'
            cx='93'
            cy='782'
            r='3'
            fill='#162029'
          />
          <circle
            className={`${styles.delay3} ${styles.opacityH} circle19`}
            opacity='0.3'
            cx='103'
            cy='782'
            r='3'
            fill='#162029'
          />
          <circle
            className={`${styles.delay4} ${styles.opacityH} circle19`}
            opacity='0.3'
            cx='113'
            cy='782'
            r='3'
            fill='#162029'
          />
          <circle
            className={`${styles.delay5} ${styles.opacityH} circle19`}
            opacity='0.3'
            cx='309'
            cy='549'
            r='3'
            fill='#162029'
          />
          <circle
            className={`${styles.delay3} ${styles.opacityH} circle20`}
            opacity='0.4'
            cx='319'
            cy='549'
            r='3'
            fill='#162029'
          />
          <circle
            className={`${styles.delay2} ${styles.opacityH} circle20`}
            opacity='0.3'
            cx='329'
            cy='549'
            r='3'
            fill='#162029'
          />
          <circle
            className={`${styles.delay1} ${styles.opacityH} circle20`}
            opacity='0.3'
            cx='339'
            cy='549'
            r='3'
            fill='#162029'
          />
          <circle
            className={`${styles.delay4} ${styles.opacityH} circle20`}
            opacity='0.3'
            cx='309'
            cy='557'
            r='3'
            fill='#162029'
          />
          <circle
            className={`${styles.delay3} ${styles.opacityH} circle20`}
            opacity='0.4'
            cx='319'
            cy='557'
            r='3'
            fill='#162029'
          />
          <circle
            className={`${styles.delay2} ${styles.opacityH} circle20`}
            opacity='0.3'
            cx='329'
            cy='557'
            r='3'
            fill='#162029'
          />
          <circle
            className={`${styles.delay1} ${styles.opacityH} circle20`}
            opacity='0.3'
            cx='339'
            cy='557'
            r='3'
            fill='#162029'
          />
          <circle
            className={`${styles.delay3} ${styles.opacityH} circle19`}
            opacity='0.3'
            cx='83'
            cy='791'
            r='3'
            fill='#162029'
          />
          <circle
            className={`${styles.delay4} ${styles.opacityH} circle19`}
            opacity='0.2'
            cx='93'
            cy='791'
            r='3'
            fill='#162029'
          />
          <circle
            className={`${styles.delay5} ${styles.opacityH} circle19`}
            opacity='0.3'
            cx='103'
            cy='791'
            r='3'
            fill='#162029'
          />
          <circle
            className={`${styles.delay1} ${styles.opacityH} circle23`}
            opacity='0.3'
            cx='1086'
            cy='784'
            r='3'
            transform='rotate(-90 1086 784)'
            fill='#162029'
          />
          <circle
            className={`${styles.delay2} ${styles.opacityH} circle23`}
            opacity='0.4'
            cx='1086'
            cy='774'
            r='3'
            transform='rotate(-90 1086 774)'
            fill='#162029'
          />
          <circle
            className={`${styles.delay3} ${styles.opacityH} circle23`}
            opacity='0.3'
            cx='1086'
            cy='764'
            r='3'
            transform='rotate(-90 1086 764)'
            fill='#162029'
          />
          <circle
            className={`${styles.delay4} ${styles.opacityH} circle23`}
            opacity='0.3'
            cx='1086'
            cy='754'
            r='3'
            transform='rotate(-90 1086 754)'
            fill='#162029'
          />
          <g opacity='0.4'>
            <circle
              className={`${styles.delay3} ${styles.opacity} circle8`}
              cx='372'
              cy='368'
              r='2.25'
              stroke='#FF6969'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay4} ${styles.opacity} circle8`}
              cx='372'
              cy='404'
              r='2.25'
              stroke='#FF6969'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay5} ${styles.line}  line8`}
              d='M372 370.5C372 396.1 372 402.5 372 402.5'
              stroke='#FF6969'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay1} ${styles.opacity} circle19`}
              cx='151'
              cy='557'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle19`}
              cx='151'
              cy='574'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay3} ${styles.line}  line19`}
              d='M151 560C151 569.6 151 572 151 572'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay3} ${styles.opacity} circle19`}
              cx='160'
              cy='544'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay4} ${styles.opacity} circle19`}
              cx='160'
              cy='561'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay5} ${styles.line}  line19`}
              d='M160 547C160 556.6 160 559 160 559'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay2} ${styles.opacity} circle7`}
              cx='98'
              cy='429'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle7`}
              cx='98'
              cy='465'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay4} ${styles.line}  line7`}
              d='M98 431.5C98 457.1 98 463.5 98 463.5'
              stroke='black'
            />
          </g>
          <circle
            className={`${styles.delay3} ${styles.opacity} circle19`}
            cx='55'
            cy='725'
            r='2.25'
            stroke='#A6D0DD'
            strokeWidth='1.5'
          />
          <circle
            className={`${styles.delay4} ${styles.opacity} circle19`}
            cx='55'
            cy='761'
            r='2.25'
            stroke='#A6D0DD'
            strokeWidth='1.5'
          />
          <path
            className={`${styles.delay5} ${styles.line}  line19`}
            d='M55 727.5C55 753.1 55 759.5 55 759.5'
            stroke='#A6D0DD'
          />
          <g opacity='0.4'>
            <circle
              className={`${styles.delay2} ${styles.opacity} circle7`}
              cx='110'
              cy='442'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay1} ${styles.opacity} circle7`}
              cx='110'
              cy='465'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay2} ${styles.line}  line7`}
              d='M110 445C110 459.4 110 463 110 463'
              stroke='black'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay3} ${styles.opacity} circle7`}
              cx='85'
              cy='429'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay4} ${styles.opacity} circle7`}
              cx='85'
              cy='445'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay5} ${styles.line}  line7`}
              d='M85 432C85 440.8 85 443 85 443'
              stroke='black'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay3} ${styles.opacity} circle19`}
              cx='46'
              cy='716'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle19`}
              cx='46'
              cy='732'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay5} ${styles.line}  line19`}
              d='M46 719C46 727.8 46 730 46 730'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay4} ${styles.opacity} circle22`}
              cx='885'
              cy='684'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle22`}
              cx='885'
              cy='720'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay5} ${styles.line}  line22`}
              d='M885 686.5C885 712.1 885 718.5 885 718.5'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay1} ${styles.opacity} circle22`}
              cx='876'
              cy='675'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle22`}
              cx='876'
              cy='691'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay3} ${styles.line}  line22`}
              d='M876 678C876 686.8 876 689 876 689'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay4} ${styles.opacity} circle21`}
              cx='717'
              cy='742'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle21`}
              cx='717'
              cy='778'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay5} ${styles.line}  line21`}
              d='M717 744.5C717 770.1 717 776.5 717 776.5'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay1} ${styles.opacity} circle21`}
              cx='646'
              cy='912'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle21`}
              cx='646'
              cy='934'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay3} ${styles.line}  line21`}
              d='M646 915C646 928.6 646 932 646 932'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay2} ${styles.opacity} circle21`}
              cx='637'
              cy='928'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle21`}
              cx='637'
              cy='944'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay4} ${styles.line}  line21`}
              d='M637 931C637 939.8 637 942 637 942'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay2} ${styles.opacity} circle8`}
              cx='360'
              cy='376'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle8`}
              cx='360'
              cy='412'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay4} ${styles.line}  line8`}
              d='M360 378.5C360 404.1 360 410.5 360 410.5'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay1} ${styles.opacity} circle7`}
              cx='49'
              cy='312'
              r='2.25'
              transform='rotate(180 49 312)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle7`}
              cx='49'
              cy='295'
              r='2.25'
              transform='rotate(180 49 295)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay3} ${styles.line}  line7`}
              d='M49 309C49 299.4 49 297 49 297'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay3} ${styles.opacity} circle7`}
              cx='49'
              cy='287'
              r='2.25'
              transform='rotate(180 49 287)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay4} ${styles.opacity} circle7`}
              cx='49'
              cy='251'
              r='2.25'
              transform='rotate(180 49 251)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay5} ${styles.line}  line7`}
              d='M49 284.5C49 258.9 49 252.5 49 252.5'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay2} ${styles.opacity} circle7`}
              cx='31'
              cy='306'
              r='2.25'
              transform='rotate(180 31 306)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle7`}
              cx='31'
              cy='270'
              r='2.25'
              transform='rotate(180 31 270)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay4} ${styles.line}  line7`}
              d='M31 303.5C31 277.9 31 271.5 31 271.5'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay2} ${styles.opacity} circle7`}
              cx='40'
              cy='316'
              r='2.25'
              transform='rotate(180 40 316)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle7`}
              cx='40'
              cy='254'
              r='2.25'
              transform='rotate(180 40 254)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay4} ${styles.line}  line7`}
              d='M40 314C40 267.6 40 256 40 256'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay1} ${styles.opacity} circle10`}
              cx='827'
              cy='363'
              r='2.25'
              transform='rotate(180 827 363)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay1} ${styles.opacity} circle10`}
              cx='827'
              cy='346'
              r='2.25'
              transform='rotate(180 827 346)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay1} ${styles.line}  line10`}
              d='M827 360C827 350.4 827 348 827 348'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay1} ${styles.opacity} circle10`}
              cx='827'
              cy='338'
              r='2.25'
              transform='rotate(180 827 338)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay1} ${styles.opacity} circle10`}
              cx='827'
              cy='302'
              r='2.25'
              transform='rotate(180 827 302)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay1} ${styles.line}  line10`}
              d='M827 335.5C827 309.9 827 303.5 827 303.5'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay1} ${styles.opacity} circle10`}
              cx='809'
              cy='357'
              r='2.25'
              transform='rotate(180 809 357)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle10`}
              cx='809'
              cy='321'
              r='2.25'
              transform='rotate(180 809 321)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay3} ${styles.line}  line10`}
              d='M809 354.5C809 328.9 809 322.5 809 322.5'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay1} ${styles.opacity} circle10`}
              cx='818'
              cy='367'
              r='2.25'
              transform='rotate(180 818 367)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay1} ${styles.opacity} circle10`}
              cx='818'
              cy='305'
              r='2.25'
              transform='rotate(180 818 305)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay2} ${styles.line}  line10`}
              d='M818 365C818 318.6 818 307 818 307'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay1} ${styles.opacity} circle21`}
              cx='668'
              cy='767'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle21`}
              cx='668'
              cy='784'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay3} ${styles.line}  line21`}
              d='M668 770C668 779.6 668 782 668 782'
              stroke='#162029'
            />
          </g>
          <path
            className={`${styles.delay5} ${styles.line}  line21`}
            d='M668 794.5C668 820.1 668 826.5 668 826.5'
            stroke='url(#paint13_linear_110_2)'
          />
          <circle
            className={`${styles.delay4} ${styles.opacity} circle21`}
            cx='668'
            cy='792'
            r='2.25'
            stroke='#A5CEDB'
            strokeWidth='1.5'
          />
          <circle
            className={`${styles.delay3} ${styles.opacity} circle21`}
            cx='668'
            cy='828'
            r='2.25'
            stroke='#9C9B97'
            strokeWidth='1.5'
          />
          <path
            className={`${styles.delay4} ${styles.line}  line21`}
            d='M677 765C677 811.4 677 823 677 823'
            stroke='url(#paint14_linear_110_2)'
          />
          <circle
            className={`${styles.delay3} ${styles.opacity} circle21`}
            cx='677'
            cy='763'
            r='2.25'
            stroke='#A19D99'
            strokeWidth='1.5'
          />
          <circle
            className={`${styles.delay2} ${styles.opacity} circle21`}
            cx='677'
            cy='825'
            r='2.25'
            stroke='#F96969'
            strokeWidth='1.5'
          />
          <g opacity='0.4'>
            <circle
              className={`${styles.delay1} ${styles.opacity} circle8`}
              cx='348'
              cy='368'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle8`}
              cx='348'
              cy='412'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay3} ${styles.line}  line8`}
              d='M348 371C348 403 348 411 348 411'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay3} ${styles.opacity} circle20`}
              cx='419'
              cy='553'
              r='2.25'
              transform='rotate(-90 419 553)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay4} ${styles.opacity} circle20`}
              cx='463'
              cy='553'
              r='2.25'
              transform='rotate(-90 463 553)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay5} ${styles.line}  line20`}
              d='M422 553C453.2 553 461 553 461 553'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay2} ${styles.opacity} circle7`}
              cx='61.2426'
              cy='106.243'
              r='2.25'
              transform='rotate(-45 61.2426 106.243)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle7`}
              cx='93.2426'
              cy='138.243'
              r='2.25'
              transform='rotate(-45 93.2426 138.243)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay4} ${styles.line}  line7`}
              d='M63.364 108.364C85.9914 130.991 91.6482 136.648 91.6482 136.648'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay1} ${styles.line}  line7`}
              cx='70.2426'
              cy='145.243'
              r='2.25'
              transform='rotate(-45 70.2426 145.243)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay1} ${styles.line}  line7`}
              cx='95.2426'
              cy='170.243'
              r='2.25'
              transform='rotate(-45 95.2426 170.243)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay2} ${styles.line}  line7`}
              d='M72.364 147.364C89.164 164.164 93.364 168.364 93.364 168.364'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay1} ${styles.opacity} circle7`}
              cx='42.2426'
              cy='103.243'
              r='2.25'
              transform='rotate(-45 42.2426 103.243)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle7`}
              cx='90.2426'
              cy='151.243'
              r='2.25'
              transform='rotate(-45 90.2426 151.243)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay3} ${styles.line}  line7`}
              d='M44.364 105.364C79.564 140.564 88.364 149.364 88.364 149.364'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay1} ${styles.opacity} circle19`}
              cx='179'
              cy='758'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle19`}
              cx='179'
              cy='794'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay5} ${styles.line}  line19`}
              d='M179 760.5C179 786.1 179 792.5 179 792.5'
              stroke='#162029'
            />
          </g>
          <g opacity='0.34'>
            <circle
              className={`${styles.delay1} ${styles.opacity} circle19`}
              cx='167'
              cy='766'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle19`}
              cx='167'
              cy='802'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay3} ${styles.line}  line19`}
              d='M167 768.5C167 794.1 167 800.5 167 800.5'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay3} ${styles.opacity} circle19`}
              cx='155'
              cy='758'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay4} ${styles.opacity} circle19`}
              cx='155'
              cy='802'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay5} ${styles.line}  line19`}
              d='M155 761C155 793 155 801 155 801'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay3} ${styles.opacity} circle11`}
              cx='1164'
              cy='426'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay4} ${styles.opacity} circle11`}
              cx='1164'
              cy='462'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay5} ${styles.line}  line11`}
              d='M1164 428.5C1164 454.1 1164 460.5 1164 460.5'
              stroke='#162029'
            />
          </g>
          <g opacity='0.34'>
            <circle
              className={`${styles.delay2} ${styles.opacity} circle11`}
              cx='1152'
              cy='434'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle11`}
              cx='1152'
              cy='470'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay4} ${styles.line}  line11`}
              d='M1152 436.5C1152 462.1 1152 468.5 1152 468.5'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay1} ${styles.opacity} circle11`}
              cx='1140'
              cy='426'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle11`}
              cx='1140'
              cy='470'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay3} ${styles.line}  line11`}
              d='M1140 429C1140 461 1140 469 1140 469'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay1} ${styles.opacity} circle8`}
              cx='251'
              cy='292'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle8`}
              cx='251'
              cy='336'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay3} ${styles.line}  line8`}
              d='M251 295C251 327 251 335 251 335'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay1} ${styles.opacity} circle20`}
              d='M476 845.512C476.002 844.918 475.828 844.337 475.5 843.842C475.172 843.347 474.704 842.96 474.156 842.732C473.608 842.503 473.005 842.442 472.422 842.556C471.839 842.67 471.303 842.955 470.883 843.374C470.462 843.793 470.175 844.328 470.058 844.91C469.942 845.492 470 846.096 470.227 846.645C470.454 847.194 470.838 847.663 471.332 847.993C471.826 848.324 472.406 848.5 473 848.5C473.794 848.5 474.555 848.185 475.117 847.625C475.679 847.065 475.997 846.305 476 845.512ZM471.294 845.512C471.292 845.171 471.391 844.837 471.579 844.553C471.766 844.269 472.035 844.047 472.349 843.915C472.663 843.784 473.01 843.749 473.344 843.815C473.678 843.88 473.985 844.044 474.226 844.285C474.467 844.526 474.631 844.833 474.697 845.168C474.763 845.502 474.728 845.848 474.596 846.163C474.465 846.477 474.243 846.745 473.959 846.933C473.674 847.121 473.341 847.22 473 847.217C472.547 847.217 472.114 847.038 471.794 846.718C471.474 846.398 471.294 845.964 471.294 845.512Z'
              fill='#162029'
            />
            <path
              className={`${styles.delay2} ${styles.opacity} circle20`}
              d='M462 701.012C462.002 700.418 461.828 699.837 461.5 699.342C461.172 698.847 460.704 698.46 460.156 698.232C459.608 698.003 459.005 697.942 458.422 698.056C457.839 698.17 457.304 698.455 456.883 698.874C456.462 699.293 456.175 699.828 456.058 700.41C455.942 700.992 456.001 701.596 456.227 702.145C456.454 702.694 456.838 703.163 457.332 703.493C457.826 703.824 458.406 704 459 704C459.794 704 460.555 703.685 461.117 703.125C461.679 702.565 461.997 701.805 462 701.012ZM457.294 701.012C457.292 700.671 457.391 700.337 457.579 700.053C457.766 699.769 458.035 699.547 458.349 699.415C458.663 699.284 459.01 699.249 459.344 699.315C459.678 699.38 459.985 699.544 460.226 699.785C460.467 700.026 460.631 700.333 460.697 700.668C460.763 701.002 460.728 701.348 460.596 701.663C460.465 701.977 460.243 702.245 459.959 702.433C459.674 702.621 459.341 702.72 459 702.717C458.548 702.717 458.114 702.538 457.794 702.218C457.474 701.898 457.294 701.464 457.294 701.012Z'
              fill='#162029'
            />
            <path
              className={`${styles.delay3} ${styles.line}  line20`}
              d='M458.51 703L458.51 737L473.01 751.5L473.01 843.5'
              stroke='#162029'
            />
          </g>
          <path
            className={`${styles.delay1} ${styles.opacity} circle20`}
            d='M458 813.488C457.998 814.082 458.172 814.663 458.5 815.158C458.828 815.653 459.296 816.039 459.844 816.268C460.392 816.497 460.995 816.558 461.578 816.444C462.161 816.329 462.696 816.045 463.117 815.625C463.538 815.206 463.825 814.672 463.941 814.09C464.058 813.507 463.999 812.904 463.773 812.355C463.546 811.806 463.161 811.337 462.668 811.006C462.174 810.676 461.594 810.5 461 810.5C460.206 810.5 459.445 810.814 458.883 811.375C458.321 811.935 458.003 812.695 458 813.488ZM462.706 813.488C462.708 813.829 462.609 814.163 462.421 814.447C462.233 814.731 461.965 814.953 461.651 815.085C461.337 815.216 460.99 815.251 460.656 815.185C460.322 815.119 460.015 814.955 459.774 814.715C459.533 814.474 459.369 814.166 459.303 813.832C459.237 813.498 459.272 813.152 459.404 812.837C459.535 812.523 459.757 812.255 460.041 812.067C460.326 811.879 460.659 811.78 461 811.782C461.452 811.782 461.886 811.962 462.206 812.282C462.526 812.602 462.706 813.036 462.706 813.488Z'
            fill='#FF6969'
          />
          <path
            className={`${styles.delay2} ${styles.opacity} circle20`}
            d='M470 898.488C469.998 899.082 470.172 899.663 470.5 900.158C470.828 900.653 471.296 901.039 471.844 901.268C472.392 901.497 472.995 901.558 473.578 901.444C474.161 901.329 474.696 901.045 475.117 900.625C475.538 900.206 475.825 899.672 475.941 899.09C476.058 898.507 475.999 897.904 475.773 897.355C475.546 896.806 475.161 896.337 474.668 896.006C474.174 895.676 473.594 895.5 473 895.5C472.206 895.5 471.445 895.814 470.883 896.375C470.321 896.935 470.003 897.695 470 898.488ZM474.706 898.488C474.708 898.829 474.609 899.163 474.421 899.447C474.233 899.731 473.965 899.953 473.651 900.085C473.337 900.216 472.99 900.251 472.656 900.185C472.322 900.119 472.015 899.955 471.774 899.715C471.533 899.474 471.369 899.166 471.303 898.832C471.237 898.498 471.272 898.152 471.404 897.837C471.535 897.523 471.757 897.255 472.041 897.067C472.326 896.879 472.659 896.78 473 896.782C473.452 896.782 473.886 896.962 474.206 897.282C474.526 897.602 474.706 898.036 474.706 898.488Z'
            fill='#FF6969'
          />
          <path
            className={`${styles.delay3} ${styles.line}  line20`}
            d='M473.5 896L473.5 865L461 850V815.5'
            stroke='#FF6969'
          />
          <g opacity='0.4'>
            <circle
              className={`${styles.delay3} ${styles.opacity} circle20`}
              cx='462'
              cy='798.5'
              r='2.25'
              transform='rotate(180 462 798.5)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay4} ${styles.opacity} circle20`}
              cx='462'
              cy='753.5'
              r='2.25'
              transform='rotate(180 462 753.5)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay5} ${styles.line}  line20`}
              d='M462 795.5C462 763.5 462 755.5 462 755.5'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay1} ${styles.opacity} circle21`}
              d='M712 896.512C711.998 895.918 712.172 895.337 712.5 894.842C712.828 894.347 713.296 893.961 713.844 893.732C714.392 893.503 714.995 893.442 715.578 893.556C716.161 893.671 716.696 893.955 717.117 894.375C717.538 894.794 717.825 895.328 717.942 895.91C718.058 896.493 718 897.096 717.773 897.645C717.546 898.194 717.162 898.663 716.668 898.994C716.174 899.324 715.594 899.5 715 899.5C714.206 899.5 713.445 899.186 712.883 898.625C712.321 898.065 712.003 897.305 712 896.512ZM716.706 896.512C716.708 896.171 716.609 895.837 716.421 895.553C716.234 895.269 715.965 895.047 715.651 894.915C715.337 894.784 714.99 894.749 714.656 894.815C714.322 894.881 714.015 895.045 713.774 895.285C713.533 895.526 713.369 895.834 713.303 896.168C713.237 896.502 713.272 896.848 713.404 897.163C713.535 897.477 713.757 897.745 714.041 897.933C714.326 898.121 714.659 898.22 715 898.218C715.453 898.218 715.886 898.038 716.206 897.718C716.526 897.398 716.706 896.964 716.706 896.512Z'
              fill='#162029'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle21`}
              cx='729'
              cy='752'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay3} ${styles.line}  line21`}
              d='M729.49 754L729.49 788L714.99 802.5L714.99 894.5'
              stroke='#162029'
            />
          </g>
          <path
            className={`${styles.delay1} ${styles.opacity} circle9`}
            d='M53 426L53 451'
            stroke='url(#paint15_linear_110_2)'
          />
          <path
            className={`${styles.delay2} ${styles.opacity} circle9`}
            d='M68 426L68 445'
            stroke='url(#paint16_linear_110_2)'
          />
          <path
            className={`${styles.delay3} ${styles.opacityH} circle9`}
            opacity='0.4'
            d='M48 426L48 453'
            stroke='#162029'
          />
          <path
            className={`${styles.delay3} ${styles.opacity} circle9`}
            opacity='0.4'
            d='M670 320L670 347'
            stroke='#162029'
          />
          <path
            className={`${styles.delay2} ${styles.opacity} circle9`}
            opacity='0.4'
            d='M685 335L685 362'
            stroke='#162029'
          />
          <path
            className={`${styles.delay1} ${styles.opacity} circle9`}
            opacity='0.4'
            d='M679 320L679 368'
            stroke='#162029'
          />
          <path
            className={`${styles.delay3} ${styles.opacity} circle7`}
            d='M170 155L170 212'
            stroke='url(#paint17_linear_110_2)'
          />
          <path
            className={`${styles.delay2} ${styles.opacityH} circle7`}
            opacity='0.4'
            d='M184 200L184 227'
            stroke='#162029'
          />
          <path
            className={`${styles.delay1} ${styles.opacity} circle7`}
            d='M177 185L177 233'
            stroke='url(#paint18_linear_110_2)'
          />
          <path
            className={`${styles.delay5} ${styles.opacityH} circle12`}
            opacity='0.4'
            d='M1270 173L1270 230'
            stroke='#162029'
          />
          <path
            className={`${styles.delay4} ${styles.opacityH} circle12`}
            opacity='0.4'
            d='M1285 218L1285 245'
            stroke='#162029'
          />
          <path
            className={`${styles.delay3} ${styles.opacityH} circle12`}
            opacity='0.4'
            d='M1279 203L1279 251'
            stroke='#162029'
          />
          <path
            className={`${styles.delay3} ${styles.opacityH} circle8`}
            opacity='0.4'
            d='M329 293H435'
            stroke='url(#paint19_linear_110_2)'
          />
          <path
            className={`${styles.delay2} ${styles.opacity} circle8`}
            d='M353 285L402 285'
            stroke='url(#paint20_linear_110_2)'
          />
          <path
            className={`${styles.delay1} ${styles.opacity} circle8`}
            d='M340 301H446'
            stroke='url(#paint21_linear_110_2)'
          />
          <path
            className={`${styles.delay3} ${styles.opacity} circle10`}
            opacity='0.4'
            d='M862 418H968'
            stroke='#162029'
          />
          <path
            className={`${styles.delay2} ${styles.opacity} circle10`}
            opacity='0.4'
            d='M886 410L935 410'
            stroke='#162029'
          />
          <path
            className={`${styles.delay1} ${styles.opacity} circle10`}
            d='M873 426H979'
            stroke='url(#paint22_linear_110_2)'
          />
          <path
            className={`${styles.delay5} ${styles.line}  line19`}
            opacity='0.4'
            d='M292 908L149 908'
            stroke='url(#paint23_linear_110_2)'
          />
          <path
            className={`${styles.delay4} ${styles.line}  line19`}
            opacity='0.4'
            d='M231 916L182 916'
            stroke='#162029'
          />
          <path className={`${styles.delay3} ${styles.line}  line19`} d='M244 900L138 900' stroke='#FF6969' />
          <path
            className={`${styles.delay3} ${styles.opacityH} circle9`}
            opacity='0.4'
            d='M643 102L500 102'
            stroke='url(#paint24_linear_110_2)'
          />
          <path
            className={`${styles.delay2} ${styles.opacityH} circle9`}
            opacity='0.4'
            d='M582 110L533 110'
            stroke='#162029'
          />
          <path className={`${styles.delay1} ${styles.opacityH} circle9`} d='M595 94L489 94' stroke='#FF6969' />
          <path
            className={`${styles.delay3} ${styles.opacityH} circle24`}
            opacity='0.4'
            d='M1319 581L1176 581'
            stroke='url(#paint25_linear_110_2)'
          />
          <path
            className={`${styles.delay2} ${styles.opacityH} circle24`}
            opacity='0.4'
            d='M1258 589L1209 589'
            stroke='#162029'
          />
          <path className={`${styles.delay1} ${styles.opacityH} circle24`} d='M1271 573L1165 573' stroke='#FF6969' />
          <path
            className={`${styles.delay2} ${styles.opacityH} circle24`}
            opacity='0.4'
            d='M63 426L63 450'
            stroke='#162029'
          />
          <path
            className={`${styles.delay1} ${styles.opacityH} circle24`}
            opacity='0.4'
            d='M58 426L58 448'
            stroke='#162029'
          />
          <path
            className={`${styles.delay3} ${styles.line}  line21`}
            d='M625 750L625 806'
            stroke='url(#paint26_linear_110_2)'
          />
          <path
            className={`${styles.delay2} ${styles.line}  line21`}
            opacity='0.4'
            d='M621 750L621 797'
            stroke='url(#paint27_linear_110_2)'
          />
          <path
            className={`${styles.delay1} ${styles.line}  line21`}
            opacity='0.4'
            d='M629 750L629 808'
            stroke='url(#paint28_linear_110_2)'
          />
          <path
            className={`${styles.delay1} ${styles.line}  line19`}
            opacity='0.4'
            d='M72 682L72 716'
            stroke='url(#paint29_linear_110_2)'
          />
          <path
            className={`${styles.delay2} ${styles.line}  line19`}
            opacity='0.4'
            d='M68 682L68 716'
            stroke='url(#paint30_linear_110_2)'
          />
          <path
            className={`${styles.delay3} ${styles.line}  line19`}
            opacity='0.4'
            d='M76 682L76 717'
            stroke='url(#paint31_linear_110_2)'
          />
          <path
            className={`${styles.delay3} ${styles.opacityH} circle21`}
            opacity='0.4'
            d='M488 521L488 536'
            stroke='url(#paint32_linear_110_2)'
          />
          <path
            className={`${styles.delay2} ${styles.opacityH} circle21`}
            opacity='0.4'
            d='M484 521L484 541'
            stroke='url(#paint33_linear_110_2)'
          />
          <path
            className={`${styles.delay1} ${styles.opacityH} circle21`}
            opacity='0.4'
            d='M492 521L492 532'
            stroke='url(#paint34_linear_110_2)'
          />
          <path
            className={`${styles.delay4} ${styles.opacityH} circle7`}
            opacity='0.4'
            d='M73 426L73 449'
            stroke='#162029'
          />
          <g opacity='0.4'>
            <path
              className={`${styles.delay2} ${styles.line}  line7`}
              d='M25.5 399.5L12.5 421.5V519.5L37 544V609.5'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay1} ${styles.opacity} circle7`}
              cx='27'
              cy='397'
              r='3'
              transform='rotate(180 27 397)'
              stroke='#162029'
              strokeWidth='2'
            />
            <circle
              className={`${styles.delay1} ${styles.opacity} circle7`}
              cx='37'
              cy='613'
              r='3'
              transform='rotate(180 37 613)'
              stroke='#162029'
              strokeWidth='2'
            />
          </g>
          <path
            className={`${styles.delay5} ${styles.line}  line19`}
            d='M103.5 543H55L25 513V471L47.5 493.5'
            stroke='url(#paint35_linear_110_2)'
          />
          <path
            className={`${styles.delay4} ${styles.opacity} circle19`}
            d='M106.012 546C105.418 546.002 104.837 545.828 104.342 545.5C103.847 545.172 103.461 544.704 103.232 544.156C103.003 543.608 102.942 543.005 103.056 542.422C103.171 541.839 103.455 541.304 103.875 540.883C104.294 540.462 104.828 540.175 105.41 540.059C105.993 539.942 106.596 540.001 107.145 540.227C107.694 540.454 108.163 540.838 108.494 541.332C108.824 541.826 109 542.406 109 543C109 543.794 108.686 544.555 108.125 545.117C107.565 545.679 106.805 545.997 106.012 546ZM106.012 541.294C105.671 541.292 105.337 541.391 105.053 541.579C104.769 541.767 104.547 542.035 104.415 542.349C104.284 542.663 104.249 543.01 104.315 543.344C104.381 543.678 104.545 543.985 104.785 544.226C105.026 544.467 105.334 544.631 105.668 544.697C106.002 544.763 106.348 544.728 106.663 544.596C106.977 544.465 107.245 544.243 107.433 543.959C107.621 543.674 107.72 543.341 107.718 543C107.718 542.548 107.538 542.114 107.218 541.794C106.898 541.474 106.464 541.294 106.012 541.294Z'
            fill='#9B9B97'
          />
          <path
            className={`${styles.delay3} ${styles.opacity} circle19`}
            d='M49.0118 498C48.4179 498.002 47.8368 497.828 47.3419 497.5C46.847 497.172 46.4606 496.704 46.2317 496.156C46.0029 495.608 45.9418 495.005 46.0562 494.422C46.1706 493.839 46.4554 493.304 46.8745 492.883C47.2936 492.462 47.8281 492.175 48.4104 492.059C48.9927 491.942 49.5965 492.001 50.1453 492.227C50.6942 492.454 51.1634 492.838 51.4936 493.332C51.8238 493.826 52 494.406 52 495C52 495.794 51.6856 496.555 51.1255 497.117C50.5654 497.679 49.8054 497.997 49.0118 498ZM49.0118 493.294C48.6711 493.292 48.3374 493.391 48.0531 493.579C47.7688 493.767 47.5469 494.035 47.4154 494.349C47.2839 494.663 47.2489 495.01 47.3148 495.344C47.3807 495.678 47.5446 495.985 47.7855 496.226C48.0264 496.467 48.3335 496.631 48.6678 496.697C49.0021 496.763 49.3484 496.728 49.6628 496.596C49.9771 496.465 50.2452 496.243 50.4331 495.959C50.6209 495.674 50.72 495.341 50.7177 495C50.7177 494.548 50.5379 494.114 50.218 493.794C49.8981 493.474 49.4642 493.294 49.0118 493.294Z'
            fill='#A5CEDA'
          />
          <g opacity='0.4'>
            <path
              className={`${styles.delay3} ${styles.line}  line21`}
              d='M637.5 675H686L716 645L716 630H697.5'
              stroke='#162029'
            />
            <path
              className={`${styles.delay2} ${styles.opacity} circle21`}
              d='M634.988 678C635.582 678.002 636.163 677.828 636.658 677.5C637.153 677.172 637.539 676.704 637.768 676.156C637.997 675.608 638.058 675.005 637.944 674.422C637.829 673.839 637.545 673.304 637.126 672.883C636.706 672.462 636.172 672.175 635.59 672.059C635.007 671.942 634.404 672.001 633.855 672.227C633.306 672.454 632.837 672.838 632.506 673.332C632.176 673.826 632 674.406 632 675C632 675.794 632.315 676.555 632.875 677.117C633.435 677.679 634.195 677.997 634.988 678ZM634.988 673.294C635.329 673.292 635.663 673.391 635.947 673.579C636.231 673.767 636.453 674.035 636.585 674.349C636.716 674.663 636.751 675.01 636.685 675.344C636.619 675.678 636.455 675.985 636.215 676.226C635.974 676.467 635.667 676.631 635.332 676.697C634.998 676.763 634.652 676.728 634.337 676.596C634.023 676.465 633.755 676.243 633.567 675.959C633.379 675.674 633.28 675.341 633.282 675C633.282 674.548 633.462 674.114 633.782 673.794C634.102 673.474 634.536 673.294 634.988 673.294Z'
              fill='#162029'
            />
            <path
              className={`${styles.delay1} ${styles.opacity} circle21`}
              d='M695.988 633C696.582 633.002 697.163 632.828 697.658 632.5C698.153 632.172 698.539 631.704 698.768 631.156C698.997 630.608 699.058 630.005 698.944 629.422C698.829 628.839 698.545 628.304 698.126 627.883C697.706 627.462 697.172 627.175 696.59 627.059C696.007 626.942 695.404 627.001 694.855 627.227C694.306 627.454 693.837 627.838 693.506 628.332C693.176 628.826 693 629.406 693 630C693 630.794 693.315 631.555 693.875 632.117C694.435 632.679 695.195 632.997 695.988 633ZM695.988 628.294C696.329 628.292 696.663 628.391 696.947 628.579C697.231 628.767 697.453 629.035 697.585 629.349C697.716 629.663 697.751 630.01 697.685 630.344C697.619 630.678 697.455 630.985 697.215 631.226C696.974 631.467 696.667 631.631 696.332 631.697C695.998 631.763 695.652 631.728 695.337 631.596C695.023 631.465 694.755 631.243 694.567 630.959C694.379 630.674 694.28 630.341 694.282 630C694.282 629.548 694.462 629.114 694.782 628.794C695.102 628.474 695.536 628.294 695.988 628.294Z'
              fill='#162029'
            />
          </g>
          <path
            className={`${styles.delay5} ${styles.line}  line7`}
            d='M-1 333H146.5L189 377.5V465.5'
            stroke='#A6D0DD'
          />
          <path
            className={`${styles.delay4} ${styles.opacityH} circle20`}
            opacity='0.4'
            d='M399.5 735L399.501 971.5L431.501 1003.5L447.501 1003.5'
            stroke='url(#paint36_linear_110_2)'
          />
          <path
            className={`${styles.delay3} ${styles.opacityH} circle20`}
            opacity='0.4'
            d='M389.001 735L389.001 974.5L427.001 1011.5L456.001 1011.5'
            stroke='url(#paint37_linear_110_2)'
          />
          <path
            className={`${styles.delay2} ${styles.opacityH} circle20`}
            opacity='0.4'
            d='M379.5 735L379.501 980.5L421.501 1019L470.001 1019'
            stroke='url(#paint38_linear_110_2)'
          />
          <path
            className={`${styles.delay1} ${styles.opacityH} circle20`}
            opacity='0.4'
            d='M371 735L371 985.5L415.5 1028L503.5 1028'
            stroke='url(#paint39_linear_110_2)'
          />
          <circle
            className={`${styles.delay1} ${styles.opacity} circle20`}
            cx='371'
            cy='733'
            r='2.25'
            transform='rotate(180 371 733)'
            stroke='#989591'
            strokeWidth='1.5'
          />
          <circle
            className={`${styles.delay2} ${styles.opacity} circle20`}
            cx='380'
            cy='733'
            r='2.25'
            transform='rotate(180 380 733)'
            stroke='#989591'
            strokeWidth='1.5'
          />
          <circle
            className={`${styles.delay3} ${styles.opacity} circle20`}
            cx='389'
            cy='733'
            r='2.25'
            transform='rotate(180 389 733)'
            stroke='#989591'
            strokeWidth='1.5'
          />
          <circle
            className={`${styles.delay4} ${styles.opacity} circle20`}
            cx='399'
            cy='733'
            r='2.25'
            transform='rotate(180 399 733)'
            stroke='#989591'
            strokeWidth='1.5'
          />
          <path
            className={`${styles.delay4} ${styles.line}  line9`}
            d='M544.5 364L544.5 283.5L564.5 263L571 263'
            stroke='url(#paint40_linear_110_2)'
          />
          <circle
            className={`${styles.delay3} ${styles.opacity} circle9`}
            cx='573'
            cy='263'
            r='2.25'
            transform='rotate(-90 573 263)'
            stroke='#ACCAD6'
            strokeWidth='1.5'
          />
          <circle
            className={`${styles.delay2} ${styles.opacity} circle9`}
            cx='545'
            cy='366'
            r='2.25'
            transform='rotate(-90 545 366)'
            stroke='#FD6C6D'
            strokeWidth='1.5'
          />
          <g opacity='0.4'>
            <circle
              className={`${styles.delay3} ${styles.opacity} circle9`}
              cx='516'
              cy='309'
              r='2.25'
              transform='rotate(-90 516 309)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay4} ${styles.opacity} circle9`}
              cx='533'
              cy='309'
              r='2.25'
              transform='rotate(-90 533 309)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay5} ${styles.line}  line9`}
              d='M519 309C528.6 309 531 309 531 309'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay3} ${styles.line}  line9`}
              d='M535.5 384.5L535.5 335L522 324L503 324'
              stroke='#162029'
            />
            <path
              className={`${styles.delay2} ${styles.opacity} circle9`}
              d='M498 324.012C497.998 323.418 498.172 322.837 498.5 322.342C498.828 321.847 499.296 321.461 499.844 321.232C500.392 321.003 500.995 320.942 501.578 321.056C502.161 321.171 502.696 321.455 503.117 321.875C503.538 322.294 503.825 322.828 503.941 323.41C504.058 323.993 503.999 324.596 503.773 325.145C503.546 325.694 503.162 326.163 502.668 326.494C502.174 326.824 501.594 327 501 327C500.206 327 499.445 326.686 498.883 326.125C498.321 325.565 498.003 324.805 498 324.012ZM502.706 324.012C502.708 323.671 502.609 323.337 502.421 323.053C502.233 322.769 501.965 322.547 501.651 322.415C501.337 322.284 500.99 322.249 500.656 322.315C500.322 322.381 500.015 322.545 499.774 322.785C499.533 323.026 499.369 323.334 499.303 323.668C499.237 324.002 499.272 324.348 499.404 324.663C499.535 324.977 499.757 325.245 500.041 325.433C500.326 325.621 500.659 325.72 501 325.718C501.452 325.718 501.886 325.538 502.206 325.218C502.526 324.898 502.706 324.464 502.706 324.012Z'
              fill='#162029'
            />
            <path
              className={`${styles.delay1} ${styles.opacity} circle9`}
              d='M533 387.012C532.998 386.418 533.172 385.837 533.5 385.342C533.828 384.847 534.296 384.461 534.844 384.232C535.392 384.003 535.995 383.942 536.578 384.056C537.161 384.171 537.696 384.455 538.117 384.875C538.538 385.294 538.825 385.828 538.941 386.41C539.058 386.993 538.999 387.596 538.773 388.145C538.546 388.694 538.162 389.163 537.668 389.494C537.174 389.824 536.594 390 536 390C535.206 390 534.445 389.686 533.883 389.125C533.321 388.565 533.003 387.805 533 387.012ZM537.706 387.012C537.708 386.671 537.609 386.337 537.421 386.053C537.234 385.769 536.965 385.547 536.651 385.415C536.337 385.284 535.99 385.249 535.656 385.315C535.322 385.381 535.015 385.545 534.774 385.785C534.533 386.026 534.369 386.334 534.303 386.668C534.237 387.002 534.272 387.348 534.404 387.663C534.535 387.977 534.757 388.245 535.041 388.433C535.326 388.621 535.659 388.72 536 388.718C536.452 388.718 536.886 388.538 537.206 388.218C537.526 387.898 537.706 387.464 537.706 387.012Z'
              fill='#162029'
            />
          </g>
          <path
            className={`${styles.delay5} ${styles.line}  line22`}
            d='M795.5 804L795.5 723.5L815.5 703L822 703'
            stroke='url(#paint41_linear_110_2)'
          />
          <circle
            className={`${styles.delay4} ${styles.opacity} circle22`}
            cx='824'
            cy='703'
            r='2.25'
            transform='rotate(-90 824 703)'
            stroke='#ACCAD6'
            strokeWidth='1.5'
          />
          <circle
            className={`${styles.delay3} ${styles.opacity} circle22`}
            cx='796'
            cy='806'
            r='2.25'
            transform='rotate(-90 796 806)'
            stroke='#FD6C6D'
            strokeWidth='1.5'
          />
          <g opacity='0.4'>
            <circle
              className={`${styles.delay1} ${styles.opacity} circle22`}
              cx='767'
              cy='749'
              r='2.25'
              transform='rotate(-90 767 749)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle22`}
              cx='784'
              cy='749'
              r='2.25'
              transform='rotate(-90 784 749)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay3} ${styles.line}  line22`}
              d='M770 749C779.6 749 782 749 782 749'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay5} ${styles.line}  line22`}
              d='M786.5 824.5L786.5 775L773 764L754 764'
              stroke='#162029'
            />
            <path
              className={`${styles.delay4} ${styles.opacity} circle22`}
              d='M749 764.012C748.998 763.418 749.172 762.837 749.5 762.342C749.828 761.847 750.296 761.461 750.844 761.232C751.392 761.003 751.995 760.942 752.578 761.056C753.161 761.171 753.696 761.455 754.117 761.875C754.538 762.294 754.825 762.828 754.941 763.41C755.058 763.993 754.999 764.596 754.773 765.145C754.546 765.694 754.162 766.163 753.668 766.494C753.174 766.824 752.594 767 752 767C751.206 767 750.445 766.686 749.883 766.125C749.321 765.565 749.003 764.805 749 764.012ZM753.706 764.012C753.708 763.671 753.609 763.337 753.421 763.053C753.233 762.769 752.965 762.547 752.651 762.415C752.337 762.284 751.99 762.249 751.656 762.315C751.322 762.381 751.015 762.545 750.774 762.785C750.533 763.026 750.369 763.334 750.303 763.668C750.237 764.002 750.272 764.348 750.404 764.663C750.535 764.977 750.757 765.245 751.041 765.433C751.326 765.621 751.659 765.72 752 765.718C752.452 765.718 752.886 765.538 753.206 765.218C753.526 764.898 753.706 764.464 753.706 764.012Z'
              fill='#162029'
            />
            <path
              className={`${styles.delay3} ${styles.opacity} circle22`}
              d='M784 827.012C783.998 826.418 784.172 825.837 784.5 825.342C784.828 824.847 785.296 824.461 785.844 824.232C786.392 824.003 786.995 823.942 787.578 824.056C788.161 824.171 788.696 824.455 789.117 824.875C789.538 825.294 789.825 825.828 789.942 826.41C790.058 826.993 789.999 827.596 789.773 828.145C789.546 828.694 789.162 829.163 788.668 829.494C788.174 829.824 787.594 830 787 830C786.206 830 785.445 829.686 784.883 829.125C784.321 828.565 784.003 827.805 784 827.012ZM788.706 827.012C788.708 826.671 788.609 826.337 788.421 826.053C788.234 825.769 787.965 825.547 787.651 825.415C787.337 825.284 786.99 825.249 786.656 825.315C786.322 825.381 786.015 825.545 785.774 825.785C785.533 826.026 785.369 826.334 785.303 826.668C785.237 827.002 785.272 827.348 785.404 827.663C785.535 827.977 785.757 828.245 786.041 828.433C786.326 828.621 786.659 828.72 787 828.718C787.452 828.718 787.886 828.538 788.206 828.218C788.526 827.898 788.706 827.464 788.706 827.012Z'
              fill='#162029'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay5} ${styles.line}  line20`}
              d='M494.5 561L394 561L382 552L382 540.5'
              stroke='#162029'
            />
            <path
              className={`${styles.delay3} ${styles.opacity} circle20`}
              d='M382.012 535C381.418 534.998 380.837 535.172 380.342 535.5C379.847 535.828 379.461 536.296 379.232 536.844C379.003 537.392 378.942 537.995 379.056 538.578C379.171 539.161 379.455 539.696 379.875 540.117C380.294 540.538 380.828 540.825 381.41 540.941C381.993 541.058 382.596 540.999 383.145 540.773C383.694 540.546 384.163 540.162 384.494 539.668C384.824 539.174 385 538.594 385 538C385 537.206 384.686 536.445 384.125 535.883C383.565 535.321 382.805 535.003 382.012 535ZM382.012 539.706C381.671 539.708 381.337 539.609 381.053 539.421C380.769 539.233 380.547 538.965 380.415 538.651C380.284 538.337 380.249 537.99 380.315 537.656C380.381 537.322 380.545 537.015 380.785 536.774C381.026 536.533 381.334 536.369 381.668 536.303C382.002 536.237 382.348 536.272 382.663 536.404C382.977 536.535 383.245 536.757 383.433 537.041C383.621 537.326 383.72 537.659 383.718 538C383.718 538.452 383.538 538.886 383.218 539.206C382.898 539.526 382.464 539.706 382.012 539.706Z'
              fill='#162029'
            />
            <path
              className={`${styles.delay4} ${styles.opacity} circle20`}
              d='M497.012 558C496.418 557.998 495.837 558.172 495.342 558.5C494.847 558.828 494.461 559.296 494.232 559.844C494.003 560.392 493.942 560.995 494.056 561.578C494.171 562.161 494.455 562.696 494.875 563.117C495.294 563.538 495.828 563.825 496.41 563.941C496.993 564.058 497.596 563.999 498.145 563.773C498.694 563.546 499.163 563.162 499.494 562.668C499.824 562.174 500 561.594 500 561C500 560.206 499.686 559.445 499.125 558.883C498.565 558.321 497.805 558.003 497.012 558ZM497.012 562.706C496.671 562.708 496.337 562.609 496.053 562.421C495.769 562.233 495.547 561.965 495.415 561.651C495.284 561.337 495.249 560.99 495.315 560.656C495.381 560.322 495.545 560.015 495.785 559.774C496.026 559.533 496.334 559.369 496.668 559.303C497.002 559.237 497.348 559.272 497.663 559.404C497.977 559.535 498.245 559.757 498.433 560.041C498.621 560.326 498.72 560.659 498.718 561C498.718 561.452 498.538 561.886 498.218 562.206C497.898 562.526 497.464 562.706 497.012 562.706Z'
              fill='#162029'
            />
          </g>
          <path
            className={`${styles.delay3} ${styles.line}  line19`}
            d='M18 831.5L18 766.5L37.5 746L44 746'
            stroke='url(#paint42_linear_110_2)'
          />
          <circle
            className={`${styles.delay2} ${styles.opacity} circle19`}
            cx='46'
            cy='746'
            r='2.25'
            transform='rotate(-90 46 746)'
            stroke='#ACCAD6'
            strokeWidth='1.5'
          />
          <circle
            className={`${styles.delay1} ${styles.opacity} circle19`}
            cx='18'
            cy='834'
            r='2.25'
            transform='rotate(-90 18 834)'
            stroke='#FD6C6D'
            strokeWidth='1.5'
          />
          <g opacity='0.4'>
            <circle
              className={`${styles.delay3} ${styles.opacity} circle22`}
              cx='759'
              cy='580'
              r='2.25'
              transform='rotate(-90 759 580)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay4} ${styles.opacity} circle22`}
              cx='800'
              cy='580'
              r='2.25'
              transform='rotate(-90 800 580)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay5} ${styles.line}  line22`}
              d='M762 580C790.8 580 798 580 798 580'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay1} ${styles.opacity} circle8`}
              cx='457'
              cy='394'
              r='2.25'
              transform='rotate(180 457 394)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle8`}
              cx='457'
              cy='377'
              r='2.25'
              transform='rotate(180 457 377)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay3} ${styles.line}  line8`}
              d='M457 391C457 381.4 457 379 457 379'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay1} ${styles.opacity} circle21`}
              cx='552'
              cy='950'
              r='2.25'
              transform='rotate(180 552 950)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle21`}
              cx='552'
              cy='933'
              r='2.25'
              transform='rotate(180 552 933)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay3} ${styles.line}  line21`}
              d='M552 947C552 937.4 552 935 552 935'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay3} ${styles.line}  line19`}
              d='M-1.4186 856.886L4.16755 851.3H12.0589L19.9572 851.307L27.8485 851.307L35.7469 851.3L43.6453 851.307L51.5366 851.307L59.4279 851.307L67.3263 851.3L75.2247 851.307L83.116 851.307L88.6951 845.728L94.2812 840.142L102.173 840.142L110.071 840.135L117.969 840.142L125.861 840.142L133.752 840.142L141.657 840.142L149.549 840.142L157.44 840.142L165.331 840.142L173.223 840.142L181.121 840.135L189.019 840.142L194.606 834.556L200.185 828.977L208.076 828.977L215.967 828.977L223.866 828.97L231.764 828.977L239.655 828.977L247.547 828.977L255.438 828.977'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay2} ${styles.opacity} circle19`}
              d='M259.495 830.667C259.125 830.914 258.691 831.047 258.246 831.047C257.95 831.048 257.657 830.99 257.383 830.877C257.11 830.764 256.861 830.598 256.652 830.388C256.442 830.179 256.276 829.93 256.163 829.657C256.05 829.383 255.992 829.09 255.993 828.794C255.993 828.349 256.126 827.915 256.373 827.545C256.621 827.176 256.972 826.888 257.383 826.718C257.794 826.548 258.246 826.504 258.682 826.591C259.119 826.678 259.519 826.892 259.834 827.206C260.148 827.521 260.362 827.921 260.449 828.358C260.536 828.794 260.492 829.246 260.322 829.657C260.152 830.068 259.864 830.419 259.495 830.667Z'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay5} ${styles.line}  line21`}
              d='M702.42 856.73L702.42 848.84L702.42 840.95L702.42 833.05L702.42 825.15L702.42 817.26L702.42 809.36L702.42 801.47L702.42 793.58L702.42 785.68L702.42 777.79L702.42 769.89L702.42 762L702.42 754.1L702.42 746.21L702.42 738.31L702.42 730.42L702.42 722.53L696.83 716.94L691.25 711.36L685.67 705.78L677.78 705.78L669.88 705.78L661.99 705.78'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay4} ${styles.opacity} circle21`}
              d='M657.75 710.25C656.86 710.25 655.99 709.986 655.25 709.492C654.51 708.997 653.933 708.294 653.593 707.472C653.252 706.65 653.163 705.745 653.336 704.872C653.51 703.999 653.939 703.197 654.568 702.568C655.197 701.939 655.999 701.51 656.872 701.336C657.745 701.163 658.65 701.252 659.472 701.593C660.294 701.933 660.997 702.51 661.492 703.25C661.986 703.99 662.25 704.86 662.25 705.75C662.25 706.943 661.776 708.088 660.932 708.932C660.088 709.776 658.943 710.25 657.75 710.25Z'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay2} ${styles.line}  line10`}
              d='M755.54 280.576L761.119 286.155V294.046L761.126 301.945L761.119 309.843V317.735L761.126 325.633L761.119 333.531V341.423V349.314L761.126 357.212L761.126 365.104V372.995L766.705 378.574L772.292 384.16L777.878 389.746L783.457 395.325L789.036 400.904L789.036 408.81L789.036 416.701L789.036 424.593L789.029 432.491L789.029 440.382L789.036 448.281V456.172L789.036 464.063L789.036 471.969L789.036 479.86L789.036 487.751L789.036 495.643L789.029 503.541L789.036 511.439L783.457 517.018L777.871 522.605L772.292 528.184L766.705 533.77L761.126 539.349L755.54 533.763'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay1} ${styles.opacity} circle10`}
              d='M754.961 529.887C755.397 529.974 755.798 530.188 756.113 530.503C756.535 530.925 756.772 531.497 756.772 532.094C756.772 532.691 756.535 533.263 756.113 533.685C755.798 534 755.397 534.214 754.961 534.301C754.524 534.388 754.072 534.343 753.661 534.173C753.25 534.002 752.898 533.714 752.651 533.344C752.404 532.974 752.272 532.539 752.272 532.094C752.272 531.649 752.404 531.214 752.651 530.844C752.898 530.474 753.25 530.186 753.661 530.015L753.374 529.322L753.661 530.015C754.072 529.845 754.524 529.8 754.961 529.887Z'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay1} ${styles.opacity} circle10`}
              d='M754.254 276.036C754.69 276.123 755.091 276.337 755.406 276.652C755.828 277.074 756.065 277.646 756.065 278.243C756.065 278.839 755.828 279.412 755.406 279.834C755.091 280.148 754.69 280.363 754.254 280.449C753.817 280.536 753.365 280.492 752.954 280.321C752.543 280.151 752.191 279.863 751.944 279.493C751.697 279.123 751.565 278.688 751.565 278.243C751.565 277.798 751.697 277.363 751.944 276.993C752.191 276.623 752.543 276.334 752.954 276.164L752.667 275.471L752.954 276.164C753.365 275.994 753.817 275.949 754.254 276.036Z'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <path
            className={`${styles.delay3} ${styles.line}  line9`}
            d='M566 190C585.2 190 590 190 590 190'
            stroke='url(#paint43_linear_110_2)'
          />
          <circle
            className={`${styles.delay2} ${styles.opacity} circle9`}
            cx='3'
            cy='3'
            r='2.25'
            transform='matrix(4.37114e-08 1 1 -4.37114e-08 561 187)'
            stroke='#A5CEDB'
            strokeWidth='1.5'
          />
          <circle
            className={`${styles.delay1} ${styles.opacity} circle9`}
            cx='3'
            cy='3'
            r='2.25'
            transform='matrix(4.37114e-08 1 1 -4.37114e-08 589 187)'
            stroke='#9C9B97'
            strokeWidth='1.5'
          />
          <g opacity='0.4'>
            <path
              className={`${styles.delay3} ${styles.line}  line8`}
              d='M396 240C442.4 240 454 240 454 240'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle8`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(4.37114e-08 1 1 -4.37114e-08 391 237)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay1} ${styles.opacity} circle8`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(4.37114e-08 1 1 -4.37114e-08 453 237)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay3} ${styles.line}  line9`}
              d='M380 253.72L385.59 248.14L393.48 248.14L401.38 248.14L409.27 248.14L417.17 248.14L425.06 248.14L432.96 248.14L440.85 248.14L448.75 248.14L456.64 248.14L464.54 248.14L472.43 248.14L480.32 248.14L488.22 248.14L493.8 242.56L499.38 236.98L504.97 231.39L510.55 225.81L516.13 220.23L521.71 214.65L527.3 209.06L532.88 203.48L538.46 197.9L544.04 192.32L549.62 186.74L555.21 181.16L563.1 181.16L571 181.16L578.89 181.16L586.79 181.16L594.68 181.16L602.57 181.16L608.16 175.57'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay2} ${styles.opacity} circle9`}
              d='M611.453 174.406C611.374 174.84 611.168 175.241 610.863 175.559C610.653 175.777 610.401 175.951 610.122 176.07C609.843 176.189 609.543 176.25 609.24 176.25C608.937 176.25 608.637 176.189 608.358 176.07C608.079 175.951 607.827 175.777 607.617 175.559C607.312 175.241 607.106 174.84 607.027 174.406C606.947 173.972 606.997 173.524 607.17 173.118C607.343 172.712 607.631 172.366 607.999 172.123C608.367 171.88 608.799 171.75 609.24 171.75C609.681 171.75 610.113 171.88 610.481 172.123C610.849 172.366 611.137 172.712 611.31 173.118C611.483 173.524 611.533 173.972 611.453 174.406Z'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay1} ${styles.opacity} circle9`}
              d='M380.213 256.405C380.134 256.839 379.928 257.24 379.623 257.558C379.413 257.777 379.161 257.951 378.882 258.07C378.603 258.189 378.303 258.25 378 258.25C377.697 258.25 377.397 258.189 377.118 258.07C376.839 257.951 376.587 257.777 376.377 257.558C376.072 257.24 375.866 256.839 375.787 256.405C375.707 255.972 375.757 255.524 375.93 255.118C376.103 254.712 376.391 254.366 376.759 254.123C377.127 253.879 377.559 253.75 378 253.75C378.441 253.75 378.873 253.879 379.241 254.123C379.609 254.366 379.897 254.712 380.07 255.118C380.243 255.524 380.293 255.972 380.213 256.405Z'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay4} ${styles.line}  line8`}
              d='M467 392C467 345.6 467 334 467 334'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle8`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(1 0 0 -1 464 397)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle8`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(1 0 0 -1 464 335)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay3} ${styles.line}  line21`}
              d='M502.657 1001.67C535.467 968.859 543.669 960.657 543.669 960.657'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle21`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(0.707107 0.707107 0.707107 -0.707107 497 1003.08)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay1} ${styles.opacity} circle21`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(0.707107 0.707107 0.707107 -0.707107 540.841 959.243)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay2} ${styles.line}  line8`}
              d='M457 363C457 316.6 457 305 457 305'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle8`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(1 0 0 -1 454 368)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay1} ${styles.opacity} circle8`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(1 0 0 -1 454 306)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay5} ${styles.line}  line21`}
              d='M545 941C545 894.6 545 883 545 883'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle21`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(1 0 0 -1 542 946)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay4} ${styles.opacity} circle21`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(1 0 0 -1 542 884)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.3'>
            <path
              className={`${styles.delay4} ${styles.line}  line7`}
              d='M160.657 310.657C106.257 256.257 92.6569 242.657 92.6569 242.657'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle7`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(0.707107 -0.707107 -0.707107 -0.707107 162.243 316.485)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle7`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(0.707107 -0.707107 -0.707107 -0.707107 91.2426 245.485)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.3'>
            <path className={`${styles.delay4} ${styles.line}  line8`} d='M445 135.5H379L317 197.5' stroke='black' />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle8`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(4.37114e-08 1 1 -4.37114e-08 312 196)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle8`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(4.37114e-08 1 1 -4.37114e-08 444 133)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.3'>
            <path
              className={`${styles.delay3} ${styles.line}  line9`}
              d='M586.558 270.303L633.227 316.972L633.227 404.653'
              stroke='black'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle9`}
              cx='633.581'
              cy='407.128'
              r='2.25'
              transform='rotate(135 633.581 407.128)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay1} ${styles.opacity} circle9`}
              cx='584.79'
              cy='269.242'
              r='2.25'
              transform='rotate(135 584.79 269.242)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path className={`${styles.delay3} ${styles.line}  line8`} d='M451 143.5H385L323 205.5' stroke='black' />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle8`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(4.37114e-08 1 1 -4.37114e-08 318 204)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay1} ${styles.opacity} circle8`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(4.37114e-08 1 1 -4.37114e-08 450 141)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay3} ${styles.line}  line8`}
              d='M270.749 133.657C294.749 109.657 300.749 103.657 300.749 103.657'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle8`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(0.707107 0.707107 0.707107 -0.707107 265.08 135.242)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle8`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(0.707107 0.707107 0.707107 -0.707107 297.92 102.243)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay4} ${styles.line}  line8`}
              d='M267.749 122.657C284.549 105.857 288.749 101.657 288.749 101.657'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle8`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(0.707107 0.707107 0.707107 -0.707107 262.08 124.242)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle8`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(0.707107 0.707107 0.707107 -0.707107 285.92 100.242)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay3} ${styles.line}  line8`}
              d='M396.13 153C419.889 153 425.828 153 425.828 153'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle8`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(-4.37114e-08 1 1 4.37114e-08 391 150.113)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay1} ${styles.opacity} circle8`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(-4.37114e-08 1 1 4.37114e-08 424.828 150)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay2} ${styles.line}  line7`}
              d='M170.828 321.749C181.228 332.149 183.828 334.749 183.828 334.749'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay1} ${styles.opacity} circle7`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(-0.707107 0.707107 0.707107 0.707107 169.243 316.08)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle7`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(-0.707107 0.707107 0.707107 0.707107 185.243 332)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay5} ${styles.line}  line20`}
              d='M433 545C447.4 545 451 545 451 545'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay4} ${styles.opacity} circle20`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(-4.37114e-08 1 1 4.37114e-08 428 542.056)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle20`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(-4.37114e-08 1 1 4.37114e-08 449.571 542)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay5} ${styles.line}  line7`}
              d='M96.8284 263.689C125.628 292.489 132.828 299.689 132.828 299.689'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay4} ${styles.opacity} circle7`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(-0.707107 0.707107 0.707107 0.707107 95.2426 258.02)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle7`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(-0.707107 0.707107 0.707107 0.707107 134.243 296.98)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.3'>
            <path
              className={`${styles.delay5} ${styles.line}  line8`}
              d='M245.657 131.669C278.467 98.8592 286.669 90.6568 286.669 90.6568'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay4} ${styles.opacity} circle8`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(0.707107 0.707107 0.707107 -0.707107 240 133.083)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay4} ${styles.opacity} circle8`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(0.707107 0.707107 0.707107 -0.707107 283.841 89.2427)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.3'>
            <path
              className={`${styles.delay3} ${styles.line}  line8`}
              d='M342.657 202.669C375.467 169.859 383.669 161.657 383.669 161.657'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle8`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(0.707107 0.707107 0.707107 -0.707107 337 204.083)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay1} ${styles.opacity} circle8`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(0.707107 0.707107 0.707107 -0.707107 380.841 160.243)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.3'>
            <path
              className={`${styles.delay5} ${styles.line}  line20`}
              d='M524.72 720.09V727.99V735.88V743.78V751.67V759.57V767.46V775.35V783.25V791.14V799.04V806.93V814.83V822.72L530.3 828.31V836.2V844.09V851.99V859.88V867.78V875.68V883.57V891.46V899.36V907.25V915.15V923.04V930.94V938.83V946.73V954.62L524.72 960.2L519.14 965.78L513.56 971.37L507.97 976.95L502.39 982.53L496.81 988.12L491.22 993.7L485.64 999.28L480.06 1004.86H472.16H464.27H456.38H448.48H440.59L435 1010.44V1002.55V994.66V986.76V978.86V970.97V963.07V955.18V947.29V939.39V931.5V923.6V915.71V907.81V899.92V892.02V884.13H427.11H419.21V876.24V868.34'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay4} ${styles.opacity} circle20`}
              d='M416 868.34C415.998 867.702 416.185 867.078 416.539 866.547C416.892 866.016 417.394 865.602 417.983 865.357C418.572 865.112 419.22 865.047 419.846 865.171C420.471 865.295 421.046 865.602 421.497 866.053C421.948 866.504 422.255 867.079 422.379 867.704C422.503 868.33 422.438 868.978 422.193 869.567C421.948 870.155 421.534 870.658 421.003 871.011C420.472 871.364 419.848 871.552 419.21 871.55C418.359 871.547 417.545 871.208 416.943 870.607C416.342 870.005 416.003 869.19 416 868.34Z'
              fill='#162029'
            />
            <path
              className={`${styles.delay3} ${styles.opacity} circle20`}
              d='M522 720.009C521.998 719.415 522.173 718.834 522.502 718.339C522.831 717.844 523.299 717.458 523.848 717.23C524.396 717.002 525 716.942 525.583 717.057C526.166 717.173 526.701 717.459 527.121 717.879C527.541 718.299 527.827 718.834 527.943 719.417C528.058 720 527.998 720.604 527.77 721.152C527.542 721.701 527.156 722.169 526.661 722.498C526.166 722.827 525.585 723.002 524.991 723C524.198 722.998 523.439 722.682 522.879 722.121C522.318 721.561 522.002 720.802 522 720.009Z'
              fill='#162029'
            />
          </g>
          <g opacity='0.3'>
            <path
              className={`${styles.delay3} ${styles.line}  line7`}
              d='M-56 178L-50.42 183.58L-44.84 189.16L-39.25 194.75L-33.67 200.33L-28.09 205.91L-22.51 211.49L-16.93 217.07L-11.34 222.66L-5.76 228.24L2.13 228.24L10.03 228.24L17.92 228.24L25.82 228.24L33.71 228.24L41.61 228.24L49.5 228.24L57.4 228.24L65.29 228.24L73.19 228.24L81.08 228.24L88.98 228.24L96.87 228.24L104.76 228.24L112.66 228.24L120.55 228.24L128.45 228.24L134.03 233.82L139.61 239.4L145.2 244.99L150.78 250.57L156.36 256.15L161.94 261.73L167.52 267.31L173.11 272.9L178.69 278.48L184.27 284.06L189.86 289.65L195.44 295.23L201.02 300.81L206.6 306.39L212.19 311.98L217.77 317.56L223.35 323.14L223.35 331.03L223.35 338.93L223.35 352.5'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay2} ${styles.opacity} circle7`}
              d='M225.255 356.267C224.906 356.617 224.462 356.855 223.979 356.952C223.495 357.048 222.994 356.999 222.539 356.81C222.083 356.621 221.694 356.3 221.42 355.889C221.146 355.478 221 354.995 221 354.5C221 354.005 221.146 353.522 221.42 353.111C221.694 352.7 222.083 352.379 222.539 352.19C222.994 352.001 223.495 351.952 223.979 352.048C224.462 352.145 224.906 352.383 225.255 352.733C225.491 352.962 225.678 353.237 225.806 353.541C225.934 353.844 226 354.17 226 354.5C226 354.83 225.934 355.156 225.806 355.459C225.678 355.763 225.491 356.038 225.255 356.267Z'
              fill='#162029'
            />
          </g>
          <g opacity='0.3'>
            <path
              className={`${styles.delay3} ${styles.line}  line9`}
              d='M446 497.39L451.59 502.97L459.48 502.97L467.38 502.97L475.27 502.97L483.17 502.97L491.06 502.97L498.96 502.97L506.85 502.97L514.74 502.97L522.64 502.97L530.53 502.97L538.43 502.97L546.32 502.97L554.22 502.97L562.11 502.97L570.01 502.97L577.9 502.97L585.8 502.97L593.69 502.97L601.59 502.97L609.48 502.97L617.38 502.97L622.96 497.39L630.85 497.39L638.74 497.39L646.64 497.39L654.54 497.39L662.43 497.39L670.33 497.39L678.22 497.39L686.11 497.39L694.01 497.39L701.9 497.39L709.8 497.39L717.69 497.39L725.59 497.39L733.48 497.39L741.38 497.39L749.27 497.39L754.85 491.8L754.85 483.91L749.27 478.32L743.69 472.74L738.11 467.16L738.11 459.27L738.11 451.37L738.11 443.48L738.11 435.58L732.53 430L724.63 430L716.74 430L708.84 430L700.95 430L700.95 437.9L706.53 443.48L712.11 449.06L717.69 454.64L723.28 460.22L728.86 465.81L734.44 471.39L740.02 476.97L745.6 482.55L751.19 488.13'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay2} ${styles.opacity} circle9`}
              d='M749.79 489.53C750.067 489.815 750.424 490.011 750.813 490.093C751.203 490.174 751.607 490.138 751.976 489.988C752.345 489.838 752.66 489.582 752.882 489.252C753.104 488.922 753.223 488.533 753.223 488.135C753.223 487.737 753.104 487.348 752.882 487.018C752.66 486.688 752.345 486.432 751.976 486.282C751.607 486.132 751.203 486.096 750.813 486.177C750.424 486.259 750.067 486.455 749.79 486.74C749.426 487.113 749.223 487.614 749.223 488.135C749.223 488.656 749.426 489.157 749.79 489.53Z'
              fill='#162029'
            />
          </g>
          <g opacity='0.2'>
            <path
              className={`${styles.delay2} ${styles.line}  line20`}
              d='M344.6 1024.11L344.6 1016.21L344.6 1008.32L344.6 1000.42L344.6 992.53L344.6 984.63L344.6 976.74L344.6 968.84L344.6 960.95L344.6 953.06L344.6 945.16L344.6 937.27L344.6 929.37L344.6 921.48L344.6 913.58L344.6 905.69L344.6 897.79L344.6 889.9L344.6 882L344.6 874.11L344.6 866.21L344.6 858.32L339.02 852.74L339.02 844.84L339.02 836.95L339.02 829.05L339.02 821.16L339.02 813.26L339.02 805.37L339.02 797.47L339.02 789.58L339.02 781.69L339.02 773.79L339.02 765.9L339.02 758'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay1} ${styles.opacity} circle20`}
              d='M342 758C342 757.407 341.824 756.827 341.494 756.333C341.165 755.84 340.696 755.455 340.148 755.228C339.6 755.001 338.997 754.942 338.415 755.058C337.833 755.173 337.298 755.459 336.879 755.879C336.459 756.298 336.173 756.833 336.058 757.415C335.942 757.997 336.001 758.6 336.228 759.148C336.455 759.696 336.84 760.165 337.333 760.494C337.827 760.824 338.407 761 339 761C339.796 761 340.559 760.684 341.121 760.121C341.684 759.559 342 758.796 342 758Z'
              fill='#162029'
            />
          </g>
          <g opacity='0.3'>
            <path
              className={`${styles.delay2} ${styles.line}  line8`}
              d='M315.588 -4.99991L315.588 2.89141L315.588 10.7827L315.588 18.674L315.595 26.5724L315.588 34.4708V42.3621L315.588 50.2534L315.588 58.1447L315.588 66.0502L315.588 73.9415L315.588 81.8328L315.595 89.7312L315.588 97.6296L315.588 105.521L310.009 111.1L304.423 116.686L298.843 122.265L293.257 127.851L287.678 133.43L282.092 139.016L276.513 144.596V152.487L282.099 158.073L287.678 163.652L293.257 169.231L293.264 177.13L293.257 185.028L293.257 192.919L293.264 200.818L298.843 206.397L304.43 211.983L310.009 217.562L315.588 223.141L321.174 228.727L321.167 301.428L321.167 309.319L321.174 317.217L321.174 325.109L321.174 333'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay1} ${styles.opacity} circle8`}
              d='M318.657 334.567C318.656 335.066 318.804 335.553 319.08 335.968C319.357 336.383 319.75 336.706 320.211 336.898C320.672 337.089 321.179 337.139 321.668 337.042C322.157 336.944 322.606 336.704 322.959 336.352C323.311 335.999 323.551 335.55 323.648 335.061C323.745 334.572 323.695 334.065 323.504 333.604C323.313 333.144 322.99 332.75 322.575 332.473C322.16 332.197 321.673 332.049 321.174 332.05C320.843 332.048 320.514 332.111 320.208 332.237C319.901 332.363 319.623 332.548 319.389 332.782C319.155 333.016 318.969 333.295 318.844 333.601C318.718 333.908 318.654 334.236 318.657 334.567Z'
              fill='#162029'
            />
          </g>
          <g opacity='0.3'>
            <path
              className={`${styles.delay5} ${styles.line}  line8`}
              d='M216.16 493.265L221.75 487.685L227.33 482.105L232.91 476.525L238.49 470.945L244.07 465.355L249.66 459.775L255.24 454.195L260.82 448.615L266.41 443.025L271.99 437.445L277.57 431.865L283.15 426.285L288.73 420.695L294.31 415.115L294.31 407.225L294.31 399.325L294.31 391.435L294.31 383.535L294.31 375.645L288.73 370.065L288.73 362.165L288.73 354.275L288.73 346.375L288.73 338.485L288.73 330.585L288.73 322.695L288.73 314.795L288.73 306.905L288.73 299.005L288.73 291.115L283.15 285.535L277.57 279.945L271.99 274.365L271.99 266.475L271.99 258.575L271.99 250.685L271.99 242.785L271.99 234.895L271.99 226.995L277.57 221.415L283.15 215.835L288.73 210.255L294.31 204.665L299.9 199.085L305.48 193.505L311.06 187.925L316.64 182.345L322.23 176.755L327.81 171.175L333.39 165.595L338.98 160.015L344.56 154.425L350.14 148.845L355.72 143.265L361.3 137.685L366.89 132.105L372.47 126.515L380.37 126.515L388.26 126.515L396.15 126.515L404.05 126.515L411.94 126.515L419.84 126.515L427.73 126.515L435.63 126.515L443.52 126.515L451.42 126.515L459.31 126.515L464.89 120.935'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay4} ${styles.opacity} circle8`}
              d='M466.26 122.295C466.622 121.933 466.825 121.442 466.825 120.93C466.825 120.418 466.622 119.927 466.26 119.565C465.898 119.203 465.407 119 464.895 119C464.383 119 463.892 119.203 463.53 119.565C463.168 119.927 462.965 120.418 462.965 120.93C462.965 121.442 463.168 121.933 463.53 122.295C463.892 122.657 464.383 122.861 464.895 122.861C465.407 122.861 465.898 122.657 466.26 122.295Z'
              fill='#162029'
            />
          </g>
          <g opacity='0.3'>
            <path
              className={`${styles.delay3} ${styles.line}  line19`}
              d='M320.9 781L315.32 786.58L309.74 792.17L304.16 797.75H296.26H288.37H280.47H272.58H264.68H256.79H248.89H241H233.11H225.21H217.32L211.73 803.33L206.15 808.91L200.57 814.49L194.99 820.08L189.4 825.66L183.82 831.24L178.24 836.82L172.66 842.41L167.07 847.99L161.49 853.57L155.91 859.15L150.33 864.74L144.74 870.32L139.16 875.9L133.58 881.48L128 887.07V894.96L133.58 900.54L139.16 906.13L144.74 911.71L150.33 917.29L155.91 922.87V914.98V907.08V899.19V891.29V883.4V875.5V867.61'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay2} ${styles.opacity} circle19`}
              d='M155.91 869.33C156.86 869.33 157.63 868.56 157.63 867.61C157.63 866.66 156.86 865.89 155.91 865.89C154.96 865.89 154.19 866.66 154.19 867.61C154.19 868.56 154.96 869.33 155.91 869.33Z'
              fill='#162029'
            />
            <path
              className={`${styles.delay1} ${styles.opacity} circle19`}
              d='M321.72 781.44C322.67 781.44 323.44 780.67 323.44 779.72C323.44 778.77 322.67 778 321.72 778C320.77 778 320 778.77 320 779.72C320 780.67 320.77 781.44 321.72 781.44Z'
              fill='#162029'
            />
          </g>
          <g opacity='0.3'>
            <path
              className={`${styles.delay3} ${styles.line}  line24`}
              d='M1105.54 488L1111.12 493.58L1116.7 499.17L1122.28 504.75H1130.18H1138.07H1145.97H1153.86H1161.76H1169.65H1177.55H1185.44H1193.33H1201.23H1209.12L1214.71 510.33L1220.29 515.91L1225.87 521.49L1231.45 527.08L1237.04 532.66L1242.62 538.24L1248.2 543.82L1253.78 549.41L1259.37 554.99L1264.95 560.57L1270.53 566.15L1276.11 571.74L1281.7 577.32L1287.28 582.9L1292.86 588.48L1298.44 594.07V601.96L1292.86 607.54L1287.28 613.13L1281.7 618.71L1276.11 624.29L1270.53 629.87V621.98V614.08V606.19V598.29V590.4V582.5V574.61'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay2} ${styles.opacity} circle24`}
              d='M1270.53 576.33C1269.58 576.33 1268.81 575.56 1268.81 574.61C1268.81 573.66 1269.58 572.89 1270.53 572.89C1271.48 572.89 1272.25 573.66 1272.25 574.61C1272.25 575.56 1271.48 576.33 1270.53 576.33Z'
              fill='#162029'
            />
            <path
              className={`${styles.delay1} ${styles.opacity} circle24`}
              d='M1104.72 488.44C1103.77 488.44 1103 487.67 1103 486.72C1103 485.77 1103.77 485 1104.72 485C1105.67 485 1106.44 485.77 1106.44 486.72C1106.44 487.67 1105.67 488.44 1104.72 488.44Z'
              fill='#162029'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay1} ${styles.line}  line7`}
              d='M201.226 417.57L201.226 409.68L201.226 401.79L201.226 393.89L201.226 386L201.226 378.1L201.226 370.2L201.226 362.31L201.226 354.42L201.226 346.52L201.226 338.63L201.226 330.73L195.636 325.15L190.056 319.57L184.476 313.98L178.886 308.4L173.306 302.82L167.726 297.24L162.146 291.66L156.566 286.08L150.976 280.49L145.396 274.91L139.816 269.33L134.236 263.74L128.646 258.16L123.066 252.58L117.486 247L111.906 241.41L106.316 235.83L100.736 230.25L100.736 222.36L100.736 214.46L100.736 206.57L100.736 198.67L100.736 190.78L95.1561 185.19L89.5761 179.61L83.9961 174.03L78.4061 168.45L72.8261 162.87L67.2461 157.28L61.6561 151.7L56.0761 146.12L50.4961 140.54L44.9161 134.95'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay1} ${styles.opacity} circle7`}
              d='M47.1368 132.881C46.7164 132.461 46.1805 132.174 45.5969 132.058C45.0133 131.942 44.4082 132.001 43.8582 132.228C43.3082 132.455 42.8381 132.839 42.5073 133.333C42.1766 133.826 42 134.406 42 135C42 135.594 42.1766 136.174 42.5073 136.667C42.8381 137.161 43.3082 137.545 43.8582 137.772C44.4082 137.999 45.0133 138.058 45.5969 137.942C46.1805 137.826 46.7164 137.539 47.1368 137.119C47.6903 136.552 48 135.792 48 135C48 134.208 47.6903 133.448 47.1368 132.881Z'
              fill='#162029'
            />
          </g>
          <g opacity='0.3'>
            <path
              className={`${styles.delay5} ${styles.line}  line7`}
              d='M79.0001 103.5L149.5 174V224.5L218 293.5'
              stroke='black'
            />
            <path
              className={`${styles.delay4} ${styles.opacity} circle7`}
              d='M78.4504 99.7937C78.8873 99.8807 79.2884 100.095 79.6033 100.408C80.0183 100.835 80.2501 101.406 80.2501 102C80.2501 102.594 80.0183 103.165 79.6033 103.592C79.2884 103.905 78.8873 104.119 78.4504 104.206C78.0119 104.294 77.5573 104.249 77.1443 104.079C76.7312 103.909 76.3785 103.62 76.1304 103.25C75.8823 102.88 75.7501 102.445 75.7501 102C75.7501 101.555 75.8823 101.12 76.1304 100.75C76.3785 100.38 76.7312 100.091 77.1443 99.9211C77.5573 99.7507 78.0119 99.7063 78.4504 99.7937Z'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay3} ${styles.opacity} circle7`}
              d='M220.45 292.794C220.887 292.881 221.288 293.095 221.603 293.408C222.018 293.835 222.25 294.406 222.25 295C222.25 295.594 222.018 296.165 221.603 296.592C221.288 296.905 220.887 297.119 220.45 297.206C220.012 297.294 219.557 297.249 219.144 297.079C218.731 296.909 218.378 296.62 218.13 296.25C217.882 295.88 217.75 295.445 217.75 295C217.75 294.555 217.882 294.12 218.13 293.75C218.378 293.38 218.731 293.091 219.144 292.921C219.557 292.751 220.012 292.706 220.45 292.794Z'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.3'>
            <path
              className={`${styles.delay3} ${styles.line}  line10`}
              d='M874.361 265.01L874.361 364.713L838.652 400.421L838.298 497.649'
              stroke='black'
            />
            <path
              className={`${styles.delay2} ${styles.opacity} circle10`}
              d='M876.593 262.001C876.84 262.372 876.973 262.806 876.974 263.251C876.965 263.846 876.725 264.414 876.305 264.834C875.885 265.254 875.318 265.493 874.722 265.502C874.278 265.501 873.843 265.369 873.473 265.121C873.101 264.873 872.811 264.52 872.639 264.108C872.468 263.695 872.422 263.241 872.508 262.804C872.595 262.367 872.809 261.966 873.123 261.652C873.438 261.337 873.839 261.123 874.276 261.037C874.713 260.951 875.167 260.996 875.579 261.168C875.992 261.339 876.345 261.629 876.593 262.001Z'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay2} ${styles.opacity} circle10`}
              d='M840.53 498.882C840.778 499.252 840.91 499.687 840.911 500.132C840.903 500.727 840.663 501.295 840.243 501.715C839.823 502.135 839.255 502.374 838.66 502.383C838.215 502.382 837.781 502.249 837.41 502.002C837.038 501.754 836.748 501.401 836.577 500.988C836.405 500.576 836.36 500.122 836.446 499.685C836.532 499.248 836.746 498.847 837.061 498.533C837.375 498.218 837.776 498.004 838.213 497.918C838.651 497.831 839.104 497.877 839.517 498.048C839.929 498.22 840.282 498.51 840.53 498.882Z'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path
              id='myLine2'
              className={`${styles.delay5} ${styles.line}  line9`}
              d='M645.588 449L645.588 414.873L645.588 406.982L645.588 399.091L645.595 391.192L645.588 383.294L645.588 375.402L645.588 367.511L645.588 359.62L645.588 351.714L645.588 343.823L645.588 335.932L645.595 328.033L645.588 320.135L645.588 312.244L640.009 306.665L634.422 301.078L628.843 295.499L623.257 289.913L617.678 284.334L612.092 278.748L606.513 273.169L606.513 265.278L612.099 259.692L617.678 254.112L623.257 248.533L623.264 240.635L623.257 232.737L623.257 224.845L623.264 216.947L628.843 211.368L634.43 205.782L640.009 200.203L645.588 194.624L651.174 189.037L651.167 181.139L651.167 173.248L651.174 165.349L651.174 157.458L651.174 149.567'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay4} ${styles.opacity} circle9`}
              d='M648.656 149.567C648.656 149.068 648.803 148.58 649.08 148.166C649.357 147.751 649.75 147.427 650.211 147.236C650.671 147.045 651.178 146.995 651.667 147.092C652.157 147.189 652.606 147.429 652.958 147.782C653.311 148.135 653.551 148.584 653.648 149.073C653.745 149.562 653.695 150.069 653.504 150.53C653.313 150.99 652.99 151.384 652.575 151.66C652.16 151.937 651.672 152.084 651.174 152.084C650.843 152.086 650.514 152.023 650.208 151.897C649.901 151.771 649.623 151.586 649.389 151.352C649.154 151.118 648.969 150.839 648.843 150.533C648.718 150.226 648.654 149.898 648.656 149.567Z'
              fill='#162029'
            />
          </g>
          <g opacity='0.15'>
            <path
              className={`${styles.delay3} ${styles.line}  line21`}
              d='M363 414L368.58 419.58L374.17 425.16L379.75 430.75L385.33 436.33L390.91 441.91L396.49 447.49L402.07 453.07L407.66 458.66L413.24 464.24L418.82 469.82L424.41 475.41L429.99 480.99H437.88H445.78H453.67H461.57H469.46H477.36H485.25H493.15H501.04H508.93H516.83L522.41 486.57H530.31H538.2H546.1H553.99H561.88H569.78H577.67H585.57H593.46H601.36H609.25H617.15H625.04H632.93H640.83L646.41 492.15L652 497.73L657.58 503.32L663.16 508.9L668.74 514.48L674.33 520.06L679.91 525.65L685.49 531.23L691.07 536.81L696.65 542.39L702.24 547.97L707.82 553.56L713.4 559.14L718.98 564.72L724.57 570.31L730.15 575.89L735.73 581.47L741.31 587.05L746.9 592.64H754.79H762.68H770.58H778.48H786.37H794.26H802.16H810.05L815.64 587.05L821.22 581.47L826.8 575.89L832.38 570.31L837.97 564.72L843.55 559.14L849.13 553.56L854.71 547.97L860.29 542.39L865.88 536.81L871.46 531.23L877.04 525.65L882.63 520.06L888.21 514.48L893.79 508.9L899.37 503.32H907.27H915.16H923.05H930.95H938.84H946.74H954.64H962.53H970.42H978.32H986.21H994.11H1002H1009.9H1017.79H1025.69H1033.58H1041.48H1049.37L1054.95 508.9L1060.54 514.48L1066.12 520.06L1071.7 525.65L1077.28 531.23L1082.87 536.81L1088.45 542.39V550.29'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              d='M1085.91 550.29C1085.91 550.792 1086.06 551.283 1086.34 551.701C1086.62 552.119 1087.01 552.444 1087.48 552.637C1087.94 552.829 1088.45 552.879 1088.95 552.781C1089.44 552.683 1089.89 552.441 1090.25 552.086C1090.6 551.731 1090.84 551.278 1090.94 550.786C1091.04 550.293 1090.99 549.782 1090.8 549.318C1090.6 548.854 1090.28 548.457 1089.86 548.178C1089.44 547.899 1088.95 547.75 1088.45 547.75C1087.78 547.75 1087.13 548.018 1086.65 548.494C1086.18 548.97 1085.91 549.616 1085.91 550.29Z'
              fill='#162029'
            />
          </g>
          <g opacity='0.2'>
            <path
              className={`${styles.delay2} ${styles.line}  line21`}
              d='M589 979.49H596.9H604.79H612.69H620.58H628.48H636.37H644.26H652.16H660.05H667.95H675.85H683.74H691.63H699.53H707.42H715.32H723.21H731.11H739H746.9H754.79H762.68H770.58H778.47L784.06 973.91L789.64 968.33L795.22 962.74L800.8 957.16V949.27V941.37V933.479V925.59V917.69V909.79L806.39 904.21'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay1} ${styles.opacity} circle21`}
              d='M807.96 905.79C808.27 905.479 808.482 905.084 808.567 904.653C808.653 904.222 808.609 903.776 808.441 903.37C808.273 902.965 807.988 902.618 807.623 902.374C807.258 902.13 806.829 902 806.39 902C805.951 902 805.522 902.13 805.157 902.374C804.792 902.618 804.507 902.965 804.339 903.37C804.171 903.776 804.127 904.222 804.213 904.653C804.298 905.084 804.51 905.479 804.82 905.79C805.238 906.204 805.802 906.436 806.39 906.436C806.978 906.436 807.542 906.204 807.96 905.79Z'
              fill='#162029'
            />
          </g>
          <g opacity='0.2'>
            <path
              className={`${styles.delay2} ${styles.line}  line10`}
              d='M622 123.51H629.9H637.79H645.69H653.58H661.48H669.37H677.26H685.16H693.05H700.95H708.85H716.74H724.63H732.53H740.42H748.32H756.21H764.11H772H779.9H787.79H795.68H803.58H811.47L817.06 129.09L822.64 134.67L828.22 140.26L833.8 145.84V153.73V161.63V169.521V177.41V185.31V193.21L839.39 198.79'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay4} ${styles.opacity} circle10`}
              d='M840.96 197.21C841.27 197.521 841.482 197.916 841.567 198.347C841.653 198.778 841.609 199.224 841.441 199.63C841.273 200.035 840.988 200.382 840.623 200.626C840.258 200.87 839.829 201 839.39 201C838.951 201 838.522 200.87 838.157 200.626C837.792 200.382 837.507 200.035 837.339 199.63C837.171 199.224 837.127 198.778 837.213 198.347C837.298 197.916 837.51 197.521 837.82 197.21C838.238 196.796 838.802 196.564 839.39 196.564C839.978 196.564 840.542 196.796 840.96 197.21Z'
              fill='#162029'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay2} ${styles.line}  line19`}
              d='M20.8644 1025.96L26.4434 1020.38L32.0296 1014.79L37.6157 1009.2L43.1948 1003.63L48.7739 998.047L54.36 992.46L62.2584 992.468L70.1497 992.468L78.0481 992.46L85.9394 992.461L93.8307 992.46L101.729 992.468L109.627 992.461L117.519 992.46L125.41 992.461L133.308 992.468L141.2 992.468L146.786 986.881L152.365 981.302L157.951 975.716L163.53 970.137L169.116 964.551L177.008 964.551L184.906 964.558L192.797 964.558L200.696 964.551H208.587L216.478 964.551L224.377 964.544L232.275 964.551L240.166 964.551L248.058 964.551H255.949L263.847 964.558L271.746 964.551H279.637L285.223 970.137L290.802 975.716H298.694H306.599H314.49H322.382H330.273H338.179H346.07H353.961L361.852 975.716H369.744L377.649 975.716L385.541 975.716H393.432L401.33 975.723L406.916 970.137L414.808 970.137L422.699 970.137H430.59L438.489 970.13L446.387 970.137L454.278 970.137L462.177 970.13L467.756 964.551L473.342 958.965L478.921 953.386L484.5 947.807L490.086 942.221L490.086 934.329L490.086 926.438L490.079 918.54L490.086 910.641L490.086 902.75L495.672 897.164L501.252 891.585L506.831 886.006L512.417 880.419'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay1} ${styles.opacity} circle19`}
              d='M513.937 881.94C514.238 881.639 514.442 881.256 514.525 880.839C514.608 880.422 514.566 879.99 514.403 879.597C514.24 879.204 513.965 878.868 513.611 878.632C513.258 878.396 512.842 878.269 512.417 878.269C511.991 878.269 511.576 878.396 511.222 878.632C510.869 878.868 510.593 879.204 510.43 879.597C510.268 879.99 510.225 880.422 510.308 880.839C510.391 881.256 510.596 881.639 510.896 881.94C511.3 882.343 511.846 882.569 512.417 882.569C512.987 882.569 513.534 882.343 513.937 881.94Z'
              fill='#162029'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay3} ${styles.line}  line9`}
              d='M828.808 -14.2567L823.229 -8.67762L817.643 -3.09148L812.057 2.49466L806.478 8.07374L800.898 13.6528L795.312 19.239L787.414 19.2319L779.523 19.2319L771.624 19.239L763.733 19.239L755.842 19.239L747.943 19.2319L740.045 19.239L732.154 19.239L724.262 19.239L716.364 19.2319L708.473 19.2319L702.886 24.818L697.307 30.3971L691.721 35.9833L686.142 41.5623L680.556 47.1485L672.665 47.1485L664.766 47.1414L656.875 47.1414L648.977 47.1485H641.085L633.194 47.1485L625.296 47.1555L617.397 47.1485L609.506 47.1485L601.615 47.1485H593.723L585.825 47.1414L577.927 47.1485H570.035L564.449 41.5623L558.87 35.9832H550.979H543.073H535.182H527.291H519.399H511.494H503.603H495.711L487.82 35.9832H479.929L472.023 35.9832L464.132 35.9832H456.241L448.342 35.9762L442.756 41.5623L434.865 41.5623L426.973 41.5623H419.082L411.184 41.5694L403.285 41.5623L395.394 41.5623L387.496 41.5694L381.917 47.1485L376.33 52.7346L370.751 58.3137L365.172 63.8928L359.586 69.4789L359.586 77.3702L359.586 85.2615L359.593 93.1599L359.586 101.058L359.586 108.95L354 114.536L348.421 120.115L342.842 125.694L337.256 131.28'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay2} ${styles.opacity} circle9`}
              d='M335.735 129.76C335.435 130.06 335.23 130.443 335.147 130.861C335.064 131.278 335.107 131.71 335.269 132.103C335.432 132.496 335.708 132.831 336.061 133.068C336.415 133.304 336.83 133.43 337.256 133.43C337.681 133.43 338.097 133.304 338.45 133.068C338.804 132.831 339.079 132.496 339.242 132.103C339.405 131.71 339.447 131.278 339.364 130.861C339.281 130.443 339.077 130.06 338.776 129.76C338.373 129.357 337.826 129.13 337.256 129.13C336.685 129.13 336.139 129.357 335.735 129.76Z'
              fill='#162029'
            />
          </g>
          <g opacity='0.3'>
            <path
              className={`${styles.delay5} ${styles.line}  line19`}
              d='M45.7086 756.898L45.7086 764.789L45.7157 772.688L45.7086 780.586L45.7086 788.478L45.7086 796.369L45.7157 804.267L45.7157 812.159L45.7157 820.05L51.2947 825.629L56.8809 831.215L62.467 836.801L68.0461 842.38L73.6252 847.959L73.6252 855.865L73.6252 863.756L73.6252 871.647L73.6181 879.546L73.6181 887.437L73.6252 895.336L73.6252 903.227L73.6252 911.118L73.6252 919.024L73.6252 926.915L73.6251 934.806L73.6251 942.698L73.6181 950.596L73.6251 958.494L68.0461 964.073L62.4599 969.66L56.8809 975.239L51.2947 980.825L45.7156 986.404L40.1295 980.818'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay3} ${styles.opacity} circle19`}
              d='M42.143 978.804C41.7448 978.406 41.2374 978.135 40.685 978.025C40.1326 977.915 39.5601 977.972 39.0397 978.187C38.5194 978.403 38.0747 978.768 37.7618 979.236C37.4489 979.704 37.2819 980.255 37.2819 980.818C37.2819 981.381 37.4489 981.932 37.7618 982.4C38.0747 982.868 38.5194 983.233 39.0397 983.449C39.5601 983.664 40.1326 983.721 40.685 983.611C41.2374 983.501 41.7448 983.23 42.143 982.831C42.677 982.297 42.977 981.573 42.977 980.818C42.977 980.063 42.677 979.338 42.143 978.804Z'
              fill='#162029'
            />
          </g>
          <g opacity='0.2'>
            <path
              className={`${styles.delay3} ${styles.line}  line22`}
              d='M677 690.484L684.9 690.484L692.79 690.484L700.68 690.484L706.26 684.904L711.85 679.324L717.43 673.734L723.01 668.154L728.6 662.574L736.49 662.574L744.39 662.574L752.28 662.574L760.17 662.574L768.07 662.574L775.96 662.574L783.86 662.574L791.76 662.574L799.65 662.574L807.54 662.574L815.44 662.574L823.33 662.574L831.23 662.574L836.81 656.984L842.39 651.404L847.98 645.824L853.56 640.244L859.14 634.664L864.72 629.074L870.3 623.494L875.88 617.914L881.47 612.334L887.05 606.744L894.95 606.744L902.84 606.744L910.74 606.744L918.63 606.744L926.52 606.744L934.42 606.744L942.31 606.744L950.21 606.744L958.1 606.744L966 606.744L973.89 606.744L981.79 606.744L987.37 612.334L992.95 617.914L998.53 623.494L1004.12 629.074L1009.7 623.494L1015.28 617.914L1020.86 612.334L1026.45 606.744'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay2} ${styles.opacity} circle22`}
              d='M1030.25 605.006C1030.27 605.591 1030.06 606.159 1029.67 606.599C1029.24 607.016 1028.66 607.25 1028.05 607.25C1027.44 607.25 1026.85 607.012 1026.41 606.587C1025.99 606.149 1025.75 605.562 1025.75 604.951C1025.75 604.345 1025.98 603.763 1026.4 603.325C1026.84 602.94 1027.41 602.735 1027.99 602.751C1028.59 602.767 1029.15 603.01 1029.57 603.429C1029.99 603.849 1030.23 604.413 1030.25 605.006Z'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay1} ${styles.opacity} circle22`}
              d='M676.249 690.006C676.265 690.591 676.06 691.159 675.675 691.599C675.237 692.016 674.655 692.25 674.049 692.25C673.438 692.25 672.851 692.012 672.413 691.587C671.988 691.149 671.75 690.562 671.75 689.951C671.75 689.345 671.984 688.763 672.401 688.325C672.841 687.94 673.409 687.735 673.994 687.751C674.587 687.767 675.151 688.01 675.571 688.429C675.99 688.849 676.233 689.413 676.249 690.006Z'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.2'>
            <path
              className={`${styles.delay3} ${styles.line}  line10`}
              d='M801.485 221L801.485 228.9L801.485 236.79L801.485 244.68L795.905 250.26L790.325 255.85L784.735 261.43L779.155 267.01L773.575 272.6L773.575 280.49L773.575 288.39L773.575 296.28L773.575 304.17L773.575 312.07L773.575 319.96L773.575 327.86L773.575 335.76L773.575 343.65L773.575 351.54'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay2} ${styles.opacity} circle10`}
              d='M774.006 356.249C774.591 356.265 775.159 356.06 775.599 355.675C776.017 355.237 776.25 354.655 776.25 354.049C776.25 353.438 776.012 352.851 775.588 352.413C775.149 351.988 774.562 351.75 773.951 351.75C773.345 351.75 772.763 351.984 772.325 352.401C771.94 352.841 771.735 353.409 771.751 353.994C771.767 354.587 772.01 355.151 772.429 355.571C772.849 355.99 773.413 356.233 774.006 356.249Z'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay1} ${styles.opacity} circle10`}
              d='M801.006 220.249C801.591 220.265 802.159 220.06 802.599 219.675C803.017 219.237 803.25 218.655 803.25 218.049C803.25 217.438 803.012 216.851 802.588 216.413C802.149 215.988 801.562 215.75 800.951 215.75C800.345 215.75 799.763 215.984 799.325 216.401C798.94 216.841 798.735 217.409 798.751 217.994C798.767 218.587 799.01 219.151 799.429 219.571C799.849 219.99 800.413 220.233 801.006 220.249Z'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay5} ${styles.line}  line8`}
              d='M471 217V224.9V232.79V240.69V248.58V256.48V264.37V272.27V280.16V288.06V295.95V303.85V311.74L476.58 317.32V325.22V333.11V341.01V348.9V356.8V364.69V372.59V380.48V388.37V396.27V404.16V412.06'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay4} ${styles.opacity} circle8`}
              d='M473.6 412.06C473.6 412.653 473.776 413.233 474.106 413.727C474.435 414.22 474.904 414.605 475.452 414.832C476 415.059 476.603 415.118 477.185 415.002C477.767 414.887 478.302 414.601 478.721 414.181C479.141 413.762 479.427 413.227 479.542 412.645C479.658 412.063 479.599 411.46 479.372 410.912C479.145 410.364 478.76 409.895 478.267 409.566C477.773 409.236 477.193 409.06 476.6 409.06C475.804 409.06 475.041 409.376 474.479 409.939C473.916 410.501 473.6 411.264 473.6 412.06Z'
              fill='#162029'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay3} ${styles.line}  line21`}
              d='M644.669 900.669C586.269 842.269 571.669 827.669 571.669 827.669'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle21`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(0.707107 -0.707107 -0.707107 -0.707107 646.083 906.326)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay1} ${styles.opacity} circle21`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(0.707107 -0.707107 -0.707107 -0.707107 570.243 830.485)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.6'>
            <path
              className={`${styles.delay3} ${styles.line}  line21`}
              d='M654 970.5H771L792 950.5V925.5'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle21`}
              cx='792'
              cy='923'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.3'>
            <path
              className={`${styles.delay3} ${styles.line}  line10`}
              d='M687 132.5H804L825 152.5V177.5'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle10`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(1 0 0 -1 822 183)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.3'>
            <path
              className={`${styles.delay5} ${styles.line}  line23`}
              d='M1142.5 969L1054 969L1039 984'
              stroke='black'
            />
            <path
              className={`${styles.delay2} ${styles.opacity} circle23`}
              d='M1036 981.91C1037.16 981.91 1038.28 982.311 1039.17 983.045C1040.07 983.779 1040.68 984.801 1040.91 985.935C1041.13 987.07 1040.96 988.248 1040.41 989.269C1039.86 990.289 1038.98 991.088 1037.91 991.531C1036.84 991.973 1035.65 992.03 1034.55 991.694C1033.44 991.357 1032.48 990.647 1031.84 989.684C1031.2 988.722 1030.91 987.566 1031.03 986.415C1031.14 985.263 1031.65 984.187 1032.47 983.37C1033.41 982.435 1034.68 981.91 1036 981.91ZM1036 988.91C1036.4 988.91 1036.78 988.794 1037.11 988.575C1037.44 988.355 1037.7 988.044 1037.85 987.679C1038 987.314 1038.04 986.913 1037.96 986.525C1037.89 986.137 1037.7 985.78 1037.42 985.5C1037.23 985.314 1037.01 985.167 1036.77 985.066C1036.53 984.965 1036.27 984.914 1036 984.914C1035.74 984.914 1035.48 984.965 1035.24 985.066C1035 985.167 1034.78 985.314 1034.59 985.5C1034.22 985.875 1034.01 986.382 1034.01 986.91C1034.01 987.439 1034.22 987.945 1034.59 988.32C1034.96 988.696 1035.47 988.908 1036 988.91Z'
              fill='black'
            />
          </g>
          <path className={`${styles.delay3} ${styles.line}  line23`} d='M1142 970H1053L1038 985' stroke='white' />
          <path
            className={`${styles.delay2} ${styles.opacity} circle23`}
            d='M1035 982.91C1036.16 982.91 1037.28 983.311 1038.17 984.045C1039.07 984.779 1039.68 985.801 1039.91 986.935C1040.13 988.07 1039.96 989.248 1039.41 990.269C1038.86 991.289 1037.98 992.088 1036.91 992.531C1035.84 992.973 1034.65 993.03 1033.55 992.694C1032.44 992.357 1031.48 991.647 1030.84 990.684C1030.2 989.722 1029.91 988.566 1030.03 987.415C1030.14 986.263 1030.65 985.187 1031.47 984.37C1032.41 983.435 1033.68 982.91 1035 982.91ZM1035 989.91C1035.4 989.91 1035.78 989.794 1036.11 989.575C1036.44 989.355 1036.7 989.044 1036.85 988.679C1037 988.314 1037.04 987.913 1036.96 987.525C1036.89 987.137 1036.7 986.78 1036.42 986.5C1036.23 986.314 1036.01 986.167 1035.77 986.066C1035.53 985.965 1035.27 985.914 1035 985.914C1034.74 985.914 1034.48 985.965 1034.24 986.066C1034 986.167 1033.78 986.314 1033.59 986.5C1033.22 986.875 1033.01 987.382 1033.01 987.91C1033.01 988.439 1033.22 988.945 1033.59 989.32C1033.96 989.696 1034.47 989.908 1035 989.91Z'
            fill='white'
          />
          <g opacity='0.4'>
            <path
              className={`${styles.delay4} ${styles.opacity} circle24`}
              d='M1397 762.988C1397 763.582 1396.83 764.163 1396.5 764.658C1396.17 765.153 1395.7 765.539 1395.16 765.768C1394.61 765.997 1394 766.058 1393.42 765.944C1392.84 765.829 1392.3 765.545 1391.88 765.125C1391.46 764.706 1391.18 764.172 1391.06 763.59C1390.94 763.007 1391 762.404 1391.23 761.855C1391.45 761.306 1391.84 760.837 1392.33 760.506C1392.83 760.176 1393.41 760 1394 760C1394.79 760 1395.55 760.314 1396.12 760.875C1396.68 761.435 1397 762.195 1397 762.988ZM1392.29 762.988C1392.29 763.329 1392.39 763.663 1392.58 763.947C1392.77 764.231 1393.03 764.453 1393.35 764.585C1393.66 764.716 1394.01 764.751 1394.34 764.685C1394.68 764.619 1394.99 764.455 1395.23 764.215C1395.47 763.974 1395.63 763.666 1395.7 763.332C1395.76 762.998 1395.73 762.652 1395.6 762.337C1395.46 762.023 1395.24 761.755 1394.96 761.567C1394.67 761.379 1394.34 761.28 1394 761.282C1393.55 761.282 1393.11 761.462 1392.79 761.782C1392.47 762.102 1392.29 762.536 1392.29 762.988Z'
              fill='#162029'
            />
            <path
              className={`${styles.delay5} ${styles.line}  line24`}
              d='M1379.51 922.5V871.5L1394.01 857V765'
              stroke='#162029'
            />
          </g>
          <path
            className={`${styles.delay3} ${styles.line}  line23`}
            d='M1185 948.5L1094.5 948.5L1079.5 936L1045 936'
            stroke='url(#paint44_linear_110_2)'
          />
          <path
            className={`${styles.delay2} ${styles.opacity} circle23`}
            d='M1042.99 933C1043.58 932.998 1044.16 933.172 1044.66 933.5C1045.15 933.828 1045.54 934.296 1045.77 934.844C1046 935.392 1046.06 935.995 1045.94 936.578C1045.83 937.161 1045.54 937.696 1045.13 938.117C1044.71 938.538 1044.17 938.825 1043.59 938.941C1043.01 939.058 1042.4 938.999 1041.85 938.773C1041.31 938.546 1040.84 938.162 1040.51 937.668C1040.18 937.174 1040 936.594 1040 936C1040 935.206 1040.31 934.445 1040.87 933.883C1041.43 933.321 1042.19 933.003 1042.99 933ZM1042.99 937.706C1043.33 937.708 1043.66 937.609 1043.95 937.421C1044.23 937.233 1044.45 936.965 1044.58 936.651C1044.72 936.337 1044.75 935.99 1044.69 935.656C1044.62 935.322 1044.46 935.015 1044.21 934.774C1043.97 934.533 1043.67 934.369 1043.33 934.303C1043 934.237 1042.65 934.272 1042.34 934.404C1042.02 934.535 1041.75 934.757 1041.57 935.041C1041.38 935.326 1041.28 935.659 1041.28 936C1041.28 936.452 1041.46 936.886 1041.78 937.206C1042.1 937.526 1042.54 937.706 1042.99 937.706Z'
            fill='#D6C3BA'
          />
          <path
            className={`${styles.delay1} ${styles.opacity} circle23`}
            d='M1186.99 945C1187.58 944.998 1188.16 945.172 1188.66 945.5C1189.15 945.828 1189.54 946.296 1189.77 946.844C1190 947.392 1190.06 947.995 1189.94 948.578C1189.83 949.161 1189.54 949.696 1189.13 950.117C1188.71 950.538 1188.17 950.825 1187.59 950.941C1187.01 951.058 1186.4 950.999 1185.85 950.773C1185.31 950.546 1184.84 950.162 1184.51 949.668C1184.18 949.174 1184 948.594 1184 948C1184 947.206 1184.31 946.445 1184.87 945.883C1185.43 945.321 1186.19 945.003 1186.99 945ZM1186.99 949.706C1187.33 949.708 1187.66 949.609 1187.95 949.421C1188.23 949.233 1188.45 948.965 1188.58 948.651C1188.72 948.337 1188.75 947.99 1188.69 947.656C1188.62 947.322 1188.46 947.015 1188.21 946.774C1187.97 946.533 1187.67 946.369 1187.33 946.303C1187 946.237 1186.65 946.272 1186.34 946.404C1186.02 946.535 1185.75 946.757 1185.57 947.041C1185.38 947.326 1185.28 947.659 1185.28 948C1185.28 948.452 1185.46 948.886 1185.78 949.206C1186.1 949.526 1186.54 949.706 1186.99 949.706Z'
            fill='#CBC3BA'
          />
          <path
            className={`${styles.delay5} ${styles.line}  line23`}
            d='M1138.5 716L1138.5 625.5L1151 610.5L1151 576'
            stroke='url(#paint45_linear_110_2)'
          />
          <path
            className={`${styles.delay4} ${styles.opacity} circle23`}
            d='M1154 573.988C1154 574.582 1153.83 575.163 1153.5 575.658C1153.17 576.153 1152.7 576.539 1152.16 576.768C1151.61 576.997 1151 577.058 1150.42 576.944C1149.84 576.829 1149.3 576.545 1148.88 576.125C1148.46 575.706 1148.18 575.172 1148.06 574.59C1147.94 574.007 1148 573.404 1148.23 572.855C1148.45 572.306 1148.84 571.837 1149.33 571.506C1149.83 571.176 1150.41 571 1151 571C1151.79 571 1152.55 571.314 1153.12 571.875C1153.68 572.435 1154 573.195 1154 573.988ZM1149.29 573.988C1149.29 574.329 1149.39 574.663 1149.58 574.947C1149.77 575.231 1150.03 575.453 1150.35 575.585C1150.66 575.716 1151.01 575.751 1151.34 575.685C1151.68 575.619 1151.99 575.455 1152.23 575.215C1152.47 574.974 1152.63 574.666 1152.7 574.332C1152.76 573.998 1152.73 573.652 1152.6 573.337C1152.46 573.023 1152.24 572.755 1151.96 572.567C1151.67 572.379 1151.34 572.28 1151 572.282C1150.55 572.282 1150.11 572.462 1149.79 572.782C1149.47 573.102 1149.29 573.536 1149.29 573.988Z'
            fill='#D6C3BA'
          />
          <path
            className={`${styles.delay3} ${styles.opacity} circle23`}
            d='M1142 717.988C1142 718.582 1141.83 719.163 1141.5 719.658C1141.17 720.153 1140.7 720.539 1140.16 720.768C1139.61 720.997 1139 721.058 1138.42 720.944C1137.84 720.829 1137.3 720.545 1136.88 720.125C1136.46 719.706 1136.18 719.172 1136.06 718.59C1135.94 718.007 1136 717.404 1136.23 716.855C1136.45 716.306 1136.84 715.837 1137.33 715.506C1137.83 715.176 1138.41 715 1139 715C1139.79 715 1140.55 715.314 1141.12 715.875C1141.68 716.435 1142 717.195 1142 717.988ZM1137.29 717.988C1137.29 718.329 1137.39 718.663 1137.58 718.947C1137.77 719.231 1138.03 719.453 1138.35 719.585C1138.66 719.716 1139.01 719.751 1139.34 719.685C1139.68 719.619 1139.99 719.455 1140.23 719.215C1140.47 718.974 1140.63 718.666 1140.7 718.332C1140.76 717.998 1140.73 717.652 1140.6 717.337C1140.46 717.023 1140.24 716.755 1139.96 716.567C1139.67 716.379 1139.34 716.28 1139 716.282C1138.55 716.282 1138.11 716.462 1137.79 716.782C1137.47 717.102 1137.29 717.536 1137.29 717.988Z'
            fill='#CBC3BA'
          />
          <path
            className={`${styles.delay3} ${styles.line}  line24`}
            d='M1395.5 711.5L1395.5 742.5L1383 757.5L1383 792'
            stroke='#A6D0DD'
          />
          <path
            className={`${styles.delay2} ${styles.opacity} circle24`}
            d='M1380 794.012C1380 793.418 1380.17 792.837 1380.5 792.342C1380.83 791.847 1381.3 791.461 1381.84 791.232C1382.39 791.003 1383 790.942 1383.58 791.056C1384.16 791.171 1384.7 791.455 1385.12 791.875C1385.54 792.294 1385.82 792.828 1385.94 793.41C1386.06 793.993 1386 794.596 1385.77 795.145C1385.55 795.694 1385.16 796.163 1384.67 796.494C1384.17 796.824 1383.59 797 1383 797C1382.21 797 1381.45 796.686 1380.88 796.125C1380.32 795.565 1380 794.805 1380 794.012ZM1384.71 794.012C1384.71 793.671 1384.61 793.337 1384.42 793.053C1384.23 792.769 1383.97 792.547 1383.65 792.415C1383.34 792.284 1382.99 792.249 1382.66 792.315C1382.32 792.381 1382.01 792.545 1381.77 792.785C1381.53 793.026 1381.37 793.334 1381.3 793.668C1381.24 794.002 1381.27 794.348 1381.4 794.663C1381.54 794.977 1381.76 795.245 1382.04 795.433C1382.33 795.621 1382.66 795.72 1383 795.718C1383.45 795.718 1383.89 795.538 1384.21 795.218C1384.53 794.898 1384.71 794.464 1384.71 794.012Z'
            fill='#A6D0DD'
          />
          <path
            className={`${styles.delay1} ${styles.opacity} circle24`}
            d='M1392 709.012C1392 708.418 1392.17 707.837 1392.5 707.342C1392.83 706.847 1393.3 706.461 1393.84 706.232C1394.39 706.003 1395 705.942 1395.58 706.056C1396.16 706.171 1396.7 706.455 1397.12 706.875C1397.54 707.294 1397.82 707.828 1397.94 708.41C1398.06 708.993 1398 709.596 1397.77 710.145C1397.55 710.694 1397.16 711.163 1396.67 711.494C1396.17 711.824 1395.59 712 1395 712C1394.21 712 1393.45 711.686 1392.88 711.125C1392.32 710.565 1392 709.805 1392 709.012ZM1396.71 709.012C1396.71 708.671 1396.61 708.337 1396.42 708.053C1396.23 707.769 1395.97 707.547 1395.65 707.415C1395.34 707.284 1394.99 707.249 1394.66 707.315C1394.32 707.381 1394.01 707.545 1393.77 707.785C1393.53 708.026 1393.37 708.334 1393.3 708.668C1393.24 709.002 1393.27 709.348 1393.4 709.663C1393.54 709.977 1393.76 710.245 1394.04 710.433C1394.33 710.621 1394.66 710.72 1395 710.718C1395.45 710.718 1395.89 710.538 1396.21 710.218C1396.53 709.898 1396.71 709.464 1396.71 709.012Z'
            fill='#A6D0DD'
          />
          <path
            className={`${styles.delay3} ${styles.line}  line23`}
            d='M1141.5 576.5L1141.5 607.5L1129 622.5L1129 657'
            stroke='#A6D0DD'
          />
          <path
            className={`${styles.delay2} ${styles.opacity} circle23`}
            d='M1126 659.012C1126 658.418 1126.17 657.837 1126.5 657.342C1126.83 656.847 1127.3 656.461 1127.84 656.232C1128.39 656.003 1129 655.942 1129.58 656.056C1130.16 656.171 1130.7 656.455 1131.12 656.875C1131.54 657.294 1131.82 657.828 1131.94 658.41C1132.06 658.993 1132 659.596 1131.77 660.145C1131.55 660.694 1131.16 661.163 1130.67 661.494C1130.17 661.824 1129.59 662 1129 662C1128.21 662 1127.45 661.686 1126.88 661.125C1126.32 660.565 1126 659.805 1126 659.012ZM1130.71 659.012C1130.71 658.671 1130.61 658.337 1130.42 658.053C1130.23 657.769 1129.97 657.547 1129.65 657.415C1129.34 657.284 1128.99 657.249 1128.66 657.315C1128.32 657.381 1128.01 657.545 1127.77 657.785C1127.53 658.026 1127.37 658.334 1127.3 658.668C1127.24 659.002 1127.27 659.348 1127.4 659.663C1127.54 659.977 1127.76 660.245 1128.04 660.433C1128.33 660.621 1128.66 660.72 1129 660.718C1129.45 660.718 1129.89 660.538 1130.21 660.218C1130.53 659.898 1130.71 659.464 1130.71 659.012Z'
            fill='#A6D0DD'
          />
          <path
            className={`${styles.delay1} ${styles.opacity} circle23`}
            d='M1138 574.012C1138 573.418 1138.17 572.837 1138.5 572.342C1138.83 571.847 1139.3 571.461 1139.84 571.232C1140.39 571.003 1141 570.942 1141.58 571.056C1142.16 571.171 1142.7 571.455 1143.12 571.875C1143.54 572.294 1143.82 572.828 1143.94 573.41C1144.06 573.993 1144 574.596 1143.77 575.145C1143.55 575.694 1143.16 576.163 1142.67 576.494C1142.17 576.824 1141.59 577 1141 577C1140.21 577 1139.45 576.686 1138.88 576.125C1138.32 575.565 1138 574.805 1138 574.012ZM1142.71 574.012C1142.71 573.671 1142.61 573.337 1142.42 573.053C1142.23 572.769 1141.97 572.547 1141.65 572.415C1141.34 572.284 1140.99 572.249 1140.66 572.315C1140.32 572.381 1140.01 572.545 1139.77 572.785C1139.53 573.026 1139.37 573.334 1139.3 573.668C1139.24 574.002 1139.27 574.348 1139.4 574.663C1139.54 574.977 1139.76 575.245 1140.04 575.433C1140.33 575.621 1140.66 575.72 1141 575.718C1141.45 575.718 1141.89 575.538 1142.21 575.218C1142.53 574.898 1142.71 574.464 1142.71 574.012Z'
            fill='#A6D0DD'
          />
          <path
            className={`${styles.delay5} ${styles.line}  line24`}
            d='M1523 945L1458 945L1445 957L1384.5 957'
            stroke='url(#paint46_linear_110_2)'
          />
          <path
            className={`${styles.delay4} ${styles.opacity} circle24`}
            d='M1382.49 954.01C1383.08 954.008 1383.66 954.182 1384.16 954.51C1384.65 954.838 1385.04 955.306 1385.27 955.854C1385.5 956.402 1385.56 957.005 1385.44 957.588C1385.33 958.171 1385.04 958.706 1384.63 959.127C1384.21 959.548 1383.67 959.835 1383.09 959.951C1382.51 960.068 1381.9 960.009 1381.35 959.783C1380.81 959.556 1380.34 959.172 1380.01 958.678C1379.68 958.184 1379.5 957.604 1379.5 957.01C1379.5 956.216 1379.81 955.455 1380.37 954.893C1380.93 954.331 1381.69 954.013 1382.49 954.01ZM1382.49 958.716C1382.83 958.718 1383.16 958.619 1383.45 958.431C1383.73 958.244 1383.95 957.975 1384.08 957.661C1384.22 957.347 1384.25 957 1384.19 956.666C1384.12 956.332 1383.96 956.025 1383.71 955.784C1383.47 955.543 1383.17 955.379 1382.83 955.313C1382.5 955.247 1382.15 955.282 1381.84 955.414C1381.52 955.545 1381.25 955.767 1381.07 956.051C1380.88 956.336 1380.78 956.669 1380.78 957.01C1380.78 957.462 1380.96 957.896 1381.28 958.216C1381.6 958.536 1382.04 958.716 1382.49 958.716Z'
            fill='#9D9A96'
          />
          <g opacity='0.2'>
            <path
              className={`${styles.delay2} ${styles.opacity} circle23`}
              d='M990.488 969.51C991.082 969.508 991.663 969.682 992.158 970.01C992.653 970.338 993.039 970.806 993.268 971.354C993.497 971.902 993.558 972.505 993.444 973.088C993.329 973.671 993.045 974.206 992.625 974.627C992.206 975.048 991.672 975.335 991.09 975.451C990.507 975.568 989.903 975.509 989.355 975.283C988.806 975.056 988.337 974.672 988.006 974.178C987.676 973.684 987.5 973.104 987.5 972.51C987.5 971.716 987.814 970.955 988.374 970.393C988.935 969.831 989.695 969.513 990.488 969.51ZM990.488 974.216C990.829 974.218 991.163 974.119 991.447 973.931C991.731 973.744 991.953 973.475 992.085 973.161C992.216 972.847 992.251 972.5 992.185 972.166C992.119 971.832 991.955 971.525 991.714 971.284C991.474 971.043 991.166 970.879 990.832 970.813C990.498 970.747 990.152 970.782 989.837 970.914C989.523 971.045 989.255 971.267 989.067 971.551C988.879 971.836 988.78 972.169 988.782 972.51C988.782 972.962 988.962 973.396 989.282 973.716C989.602 974.036 990.036 974.216 990.488 974.216Z'
              fill='black'
            />
            <path
              className={`${styles.delay3} ${styles.opacity} circle23`}
              d='M1266.99 954C1267.58 953.998 1268.16 954.172 1268.66 954.5C1269.15 954.828 1269.54 955.296 1269.77 955.844C1270 956.392 1270.06 956.995 1269.94 957.578C1269.83 958.161 1269.54 958.696 1269.13 959.117C1268.71 959.538 1268.17 959.825 1267.59 959.941C1267.01 960.058 1266.4 959.999 1265.85 959.773C1265.31 959.546 1264.84 959.162 1264.51 958.668C1264.18 958.174 1264 957.594 1264 957C1264 956.206 1264.31 955.445 1264.87 954.883C1265.43 954.321 1266.19 954.003 1266.99 954ZM1266.99 958.706C1267.33 958.708 1267.66 958.609 1267.95 958.421C1268.23 958.233 1268.45 957.965 1268.58 957.651C1268.72 957.337 1268.75 956.99 1268.69 956.656C1268.62 956.322 1268.46 956.015 1268.21 955.774C1267.97 955.533 1267.67 955.369 1267.33 955.303C1267 955.237 1266.65 955.272 1266.34 955.404C1266.02 955.535 1265.75 955.757 1265.57 956.041C1265.38 956.326 1265.28 956.659 1265.28 957C1265.28 957.452 1265.46 957.886 1265.78 958.206C1266.1 958.526 1266.54 958.706 1266.99 958.706Z'
              fill='black'
            />
            <path
              className={`${styles.delay4} ${styles.line}  line23`}
              d='M1264.5 957L1049 957L1033 972.5L992 972.5'
              stroke='black'
            />
          </g>
          <path
            className={`${styles.delay3} ${styles.line}  line24`}
            d='M1427 944H1358.5L1323 979V987'
            stroke='url(#paint47_linear_110_2)'
          />
          <circle
            className={`${styles.delay2} ${styles.opacity} circle24`}
            cx='3'
            cy='3'
            r='2.25'
            transform='matrix(-1 0 0 1 1326 987)'
            stroke='#A7D1DE'
            strokeWidth='1.5'
          />
          <circle
            className={`${styles.delay1} ${styles.opacity} circle24`}
            cx='3'
            cy='3'
            r='2.25'
            transform='matrix(-1 0 0 1 1432 941)'
            stroke='#9E9C97'
            strokeWidth='1.5'
          />
          <g opacity='0.4'>
            <circle
              className={`${styles.delay1} ${styles.opacity} circle24`}
              cx='4'
              cy='4'
              r='4'
              transform='matrix(-1 0 0 1 1310 934)'
              fill='#162029'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle24`}
              cx='4'
              cy='4'
              r='4'
              transform='matrix(-1 0 0 1 1298 934)'
              fill='#162029'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle24`}
              cx='4'
              cy='4'
              r='4'
              transform='matrix(-1 0 0 1 1286 934)'
              fill='#162029'
            />
            <circle
              className={`${styles.delay4} ${styles.opacity} circle24`}
              cx='4'
              cy='4'
              r='4'
              transform='matrix(-1 0 0 1 1274 934)'
              fill='#162029'
            />
            <circle
              className={`${styles.delay5} ${styles.opacity} circle24`}
              cx='4'
              cy='4'
              r='4'
              transform='matrix(-1 0 0 1 1262 934)'
              fill='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay5} ${styles.opacity} circle22`}
              cx='4'
              cy='4'
              r='4'
              transform='matrix(-1 0 0 1 945 776)'
              fill='#162029'
            />
            <circle
              className={`${styles.delay4} ${styles.opacity} circle22`}
              cx='4'
              cy='4'
              r='4'
              transform='matrix(-1 0 0 1 933 776)'
              fill='#162029'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle22`}
              cx='4'
              cy='4'
              r='4'
              transform='matrix(-1 0 0 1 921 776)'
              fill='#162029'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle22`}
              cx='4'
              cy='4'
              r='4'
              transform='matrix(-1 0 0 1 909 776)'
              fill='#162029'
            />
            <circle
              className={`${styles.delay1} ${styles.opacity} circle22`}
              cx='4'
              cy='4'
              r='4'
              transform='matrix(-1 0 0 1 897 776)'
              fill='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay5} ${styles.opacity} circle22`}
              cx='4'
              cy='4'
              r='4'
              transform='matrix(-1 0 0 1 945 789)'
              fill='#162029'
            />
            <circle
              className={`${styles.delay4} ${styles.opacity} circle22`}
              cx='4'
              cy='4'
              r='4'
              transform='matrix(-1 0 0 1 933 789)'
              fill='#162029'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle22`}
              cx='4'
              cy='4'
              r='4'
              transform='matrix(-1 0 0 1 921 789)'
              fill='#162029'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle22`}
              cx='4'
              cy='4'
              r='4'
              transform='matrix(-1 0 0 1 909 789)'
              fill='#FF6969'
            />
            <circle
              className={`${styles.delay1} ${styles.opacity} circle22`}
              cx='4'
              cy='4'
              r='4'
              transform='matrix(-1 0 0 1 897 789)'
              fill='#162029'
            />
          </g>
          <circle
            className={`${styles.delay4} ${styles.opacityH} circle24`}
            opacity='0.3'
            cx='3'
            cy='3'
            r='3'
            transform='matrix(4.37114e-08 -1 -1 -4.37114e-08 1418 802)'
            fill='#162029'
          />
          <circle
            className={`${styles.delay3} ${styles.opacityH} circle24`}
            opacity='0.4'
            cx='3'
            cy='3'
            r='3'
            transform='matrix(4.37114e-08 -1 -1 -4.37114e-08 1418 792)'
            fill='#162029'
          />
          <circle
            className={`${styles.delay2} ${styles.opacityH} circle24`}
            opacity='0.3'
            cx='3'
            cy='3'
            r='3'
            transform='matrix(4.37114e-08 -1 -1 -4.37114e-08 1418 782)'
            fill='#162029'
          />
          <circle
            className={`${styles.delay1} ${styles.opacityH} circle24`}
            cx='3'
            cy='3'
            r='3'
            transform='matrix(4.37114e-08 -1 -1 -4.37114e-08 1418 772)'
            fill='#A6D0DD'
          />
          <g opacity='0.4'>
            <circle
              className={`${styles.delay3} ${styles.opacity} circle24`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(-1 0 0 1 1266 880)'
              stroke='#FF6969'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay4} ${styles.opacity} circle24`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(-1 0 0 1 1266 916)'
              stroke='#FF6969'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay5} ${styles.line}  line24`}
              d='M1263 885.5C1263 911.1 1263 917.5 1263 917.5'
              stroke='#FF6969'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay2} ${styles.opacity} circle24`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(-1 0 0 1 1278 888)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle24`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(-1 0 0 1 1278 924)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay4} ${styles.line}  line24`}
              d='M1275 893.5C1275 919.1 1275 925.5 1275 925.5'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay1} ${styles.opacity} circle24`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(-1 0 0 1 1290 880)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle24`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(-1 0 0 1 1290 924)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay3} ${styles.line}  line24`}
              d='M1287 886C1287 918 1287 926 1287 926'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay2} ${styles.opacity} circle24`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(-1 0 0 1 1387 804)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle24`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(-1 0 0 1 1387 848)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay4} ${styles.line}  line24`}
              d='M1384 810C1384 842 1384 850 1384 850'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay2} ${styles.opacity} circle23`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(-1 0 0 1 1132 671)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle23`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(-1 0 0 1 1132 715)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay4} ${styles.line}  line23`}
              d='M1129 677C1129 709 1129 717 1129 717'
              stroke='#162029'
            />
          </g>
          <path
            className={`${styles.delay1} ${styles.opacityH} circle23`}
            opacity='0.4'
            d='M965 835L965 862'
            stroke='#162029'
          />
          <path
            className={`${styles.delay2} ${styles.opacityH} circle23`}
            opacity='0.4'
            d='M950 850L950 877'
            stroke='#162029'
          />
          <path
            className={`${styles.delay3} ${styles.opacityH} circle23`}
            opacity='0.4'
            d='M956 835L956 883'
            stroke='#162029'
          />
          <path
            className={`${styles.delay1} ${styles.line}  line20`}
            opacity='0.4'
            d='M365 688L365 745'
            stroke='#162029'
          />
          <path
            className={`${styles.delay3} ${styles.line}  line20`}
            opacity='0.4'
            d='M350 733L350 760'
            stroke='#162029'
          />
          <path
            className={`${styles.delay2} ${styles.line}  line20`}
            opacity='0.4'
            d='M356 718L356 766'
            stroke='#162029'
          />
          <path
            className={`${styles.delay1} ${styles.line}  line24`}
            opacity='0.4'
            d='M1308 845H1202'
            stroke='url(#paint48_linear_110_2)'
          />
          <path
            className={`${styles.delay2} ${styles.line}  line24`}
            d='M1284 837L1235 837'
            stroke='url(#paint49_linear_110_2)'
          />
          <path
            className={`${styles.delay3} ${styles.line}  line24`}
            d='M1297 853H1191'
            stroke='url(#paint50_linear_110_2)'
          />
          <path
            className={`${styles.delay3} ${styles.opacityH} circle21`}
            opacity='0.4'
            d='M773 933H667'
            stroke='#162029'
          />
          <path
            className={`${styles.delay2} ${styles.opacityH} circle21`}
            opacity='0.4'
            d='M749 925L700 925'
            stroke='#162029'
          />
          <path
            className={`${styles.delay1} ${styles.opacityH} circle21`}
            d='M762 941H656'
            stroke='url(#paint51_linear_110_2)'
          />
          <path
            className={`${styles.delay3} ${styles.line}  line23`}
            d='M1090.5 879L1090.5 798.5L1070.5 778L1064 778'
            stroke='url(#paint52_linear_110_2)'
          />
          <circle
            className={`${styles.delay2} ${styles.opacity} circle23`}
            cx='3'
            cy='3'
            r='2.25'
            transform='matrix(4.37114e-08 -1 -1 -4.37114e-08 1065 781)'
            stroke='#ACCAD6'
            strokeWidth='1.5'
          />
          <circle
            className={`${styles.delay1} ${styles.opacity} circle23`}
            cx='3'
            cy='3'
            r='2.25'
            transform='matrix(4.37114e-08 -1 -1 -4.37114e-08 1093 884)'
            stroke='#FD6C6D'
            strokeWidth='1.5'
          />
          <g opacity='0.4'>
            <circle
              className={`${styles.delay1} ${styles.opacity} circle23`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(4.37114e-08 -1 -1 -4.37114e-08 1122 827)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle23`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(4.37114e-08 -1 -1 -4.37114e-08 1105 827)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay3} ${styles.line}  line23`}
              d='M1116 824C1106.4 824 1104 824 1104 824'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay4} ${styles.line}  line23`}
              d='M1099.5 899.5L1099.5 850L1113 839L1132 839'
              stroke='#162029'
            />
            <path
              className={`${styles.delay3} ${styles.opacity} circle23`}
              d='M1137 839.012C1137 838.418 1136.83 837.837 1136.5 837.342C1136.17 836.847 1135.7 836.461 1135.16 836.232C1134.61 836.003 1134 835.942 1133.42 836.056C1132.84 836.171 1132.3 836.455 1131.88 836.875C1131.46 837.294 1131.18 837.828 1131.06 838.41C1130.94 838.993 1131 839.596 1131.23 840.145C1131.45 840.694 1131.84 841.163 1132.33 841.494C1132.83 841.824 1133.41 842 1134 842C1134.79 842 1135.55 841.686 1136.12 841.125C1136.68 840.565 1137 839.805 1137 839.012ZM1132.29 839.012C1132.29 838.671 1132.39 838.337 1132.58 838.053C1132.77 837.769 1133.03 837.547 1133.35 837.415C1133.66 837.284 1134.01 837.249 1134.34 837.315C1134.68 837.381 1134.99 837.545 1135.23 837.785C1135.47 838.026 1135.63 838.334 1135.7 838.668C1135.76 839.002 1135.73 839.348 1135.6 839.663C1135.46 839.977 1135.24 840.245 1134.96 840.433C1134.67 840.621 1134.34 840.72 1134 840.718C1133.55 840.718 1133.11 840.538 1132.79 840.218C1132.47 839.898 1132.29 839.464 1132.29 839.012Z'
              fill='#162029'
            />
            <path
              className={`${styles.delay2} ${styles.opacity} circle23`}
              d='M1102 902.012C1102 901.418 1101.83 900.837 1101.5 900.342C1101.17 899.847 1100.7 899.461 1100.16 899.232C1099.61 899.003 1099 898.942 1098.42 899.056C1097.84 899.171 1097.3 899.455 1096.88 899.875C1096.46 900.294 1096.18 900.828 1096.06 901.41C1095.94 901.993 1096 902.596 1096.23 903.145C1096.45 903.694 1096.84 904.163 1097.33 904.494C1097.83 904.824 1098.41 905 1099 905C1099.79 905 1100.55 904.686 1101.12 904.125C1101.68 903.565 1102 902.805 1102 902.012ZM1097.29 902.012C1097.29 901.671 1097.39 901.337 1097.58 901.053C1097.77 900.769 1098.03 900.547 1098.35 900.415C1098.66 900.284 1099.01 900.249 1099.34 900.315C1099.68 900.381 1099.99 900.545 1100.23 900.785C1100.47 901.026 1100.63 901.334 1100.7 901.668C1100.76 902.002 1100.73 902.348 1100.6 902.663C1100.46 902.977 1100.24 903.245 1099.96 903.433C1099.67 903.621 1099.34 903.72 1099 903.718C1098.55 903.718 1098.11 903.538 1097.79 903.218C1097.47 902.898 1097.29 902.464 1097.29 902.012Z'
              fill='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay1} ${styles.opacity} circle23`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(1 8.74228e-08 8.74228e-08 -1 1175 912)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle23`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(1 8.74228e-08 8.74228e-08 -1 1175 895)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay3} ${styles.line}  line23`}
              d='M1178 906C1178 896.4 1178 894 1178 894'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay3} ${styles.line}  line22`}
              d='M879.46 795.576L873.881 801.155V809.046L873.874 816.945L873.881 824.843V832.735L873.874 840.633L873.881 848.531V856.423V864.314L873.874 872.212L873.874 880.104V887.995L868.295 893.574L862.708 899.16L857.122 904.746L851.543 910.325L845.964 915.904L845.964 923.81L845.964 931.701L845.964 939.593L845.971 947.491L845.971 955.382L845.964 963.281V971.172L845.964 979.063L845.964 986.969L845.964 994.86L845.964 1002.75L845.964 1010.64L845.971 1018.54L845.964 1026.44L851.543 1032.02L857.129 1037.6L862.708 1043.18L868.295 1048.77L873.874 1054.35L879.46 1048.76'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay2} ${styles.opacity} circle22`}
              d='M880.746 791.036C880.31 791.123 879.909 791.337 879.594 791.652C879.172 792.074 878.935 792.646 878.935 793.243C878.935 793.839 879.172 794.412 879.594 794.834C879.909 795.148 880.31 795.363 880.746 795.449C881.183 795.536 881.635 795.492 882.046 795.321C882.457 795.151 882.809 794.863 883.056 794.493C883.303 794.123 883.435 793.688 883.435 793.243C883.435 792.798 883.303 792.363 883.056 791.993C882.809 791.623 882.457 791.334 882.046 791.164L882.333 790.471L882.046 791.164C881.635 790.994 881.183 790.949 880.746 791.036Z'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <path
            className={`${styles.delay3} ${styles.line}  line23`}
            d='M1069 705C1049.8 705 1045 705 1045 705'
            stroke='url(#paint53_linear_110_2)'
          />
          <circle
            className={`${styles.delay2} ${styles.opacity} circle23`}
            cx='1071'
            cy='705'
            r='2.25'
            transform='rotate(90 1071 705)'
            stroke='#A5CEDB'
            strokeWidth='1.5'
          />
          <circle
            className={`${styles.delay1} ${styles.opacity} circle23`}
            cx='1043'
            cy='705'
            r='2.25'
            transform='rotate(90 1043 705)'
            stroke='#9C9B97'
            strokeWidth='1.5'
          />
          <g opacity='0.4'>
            <path
              className={`${styles.delay3} ${styles.line}  line24`}
              d='M1239 755C1192.6 755 1181 755 1181 755'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle24`}
              cx='1241'
              cy='755'
              r='2.25'
              transform='rotate(90 1241 755)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay1} ${styles.opacity} circle24`}
              cx='1179'
              cy='755'
              r='2.25'
              transform='rotate(90 1179 755)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay5} ${styles.line}  line23`}
              d='M1255 768.72L1249.41 763.14L1241.52 763.14L1233.62 763.14L1225.73 763.14L1217.83 763.14L1209.94 763.14L1202.04 763.14L1194.15 763.14L1186.25 763.14L1178.36 763.14L1170.46 763.14L1162.57 763.14L1154.68 763.14L1146.78 763.14L1141.2 757.56L1135.62 751.98L1130.03 746.39L1124.45 740.81L1118.87 735.23L1113.29 729.65L1107.7 724.06L1102.12 718.48L1096.54 712.9L1090.96 707.32L1085.38 701.74L1079.79 696.16L1071.9 696.16L1064 696.16L1056.11 696.16L1048.21 696.16L1040.32 696.16L1032.43 696.16L1026.84 690.57'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay4} ${styles.opacity} circle23`}
              d='M1023.55 689.406C1023.63 689.84 1023.83 690.241 1024.14 690.559C1024.35 690.777 1024.6 690.951 1024.88 691.07C1025.16 691.189 1025.46 691.25 1025.76 691.25C1026.06 691.25 1026.36 691.189 1026.64 691.07C1026.92 690.951 1027.17 690.777 1027.38 690.559C1027.69 690.241 1027.89 689.84 1027.97 689.406C1028.05 688.972 1028 688.524 1027.83 688.118C1027.66 687.712 1027.37 687.366 1027 687.123C1026.63 686.88 1026.2 686.75 1025.76 686.75C1025.32 686.75 1024.89 686.88 1024.52 687.123C1024.15 687.366 1023.86 687.712 1023.69 688.118C1023.52 688.524 1023.47 688.972 1023.55 689.406Z'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay3} ${styles.opacity} circle23`}
              d='M1254.79 771.405C1254.87 771.839 1255.07 772.24 1255.38 772.558C1255.59 772.777 1255.84 772.951 1256.12 773.07C1256.4 773.189 1256.7 773.25 1257 773.25C1257.3 773.25 1257.6 773.189 1257.88 773.07C1258.16 772.951 1258.41 772.777 1258.62 772.558C1258.93 772.24 1259.13 771.839 1259.21 771.405C1259.29 770.972 1259.24 770.524 1259.07 770.118C1258.9 769.712 1258.61 769.366 1258.24 769.123C1257.87 768.879 1257.44 768.75 1257 768.75C1256.56 768.75 1256.13 768.879 1255.76 769.123C1255.39 769.366 1255.1 769.712 1254.93 770.118C1254.76 770.524 1254.71 770.972 1254.79 771.405Z'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay3} ${styles.line}  line23`}
              d='M1168 907C1168 860.6 1168 849 1168 849'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle23`}
              cx='1168'
              cy='909'
              r='2.25'
              transform='rotate(180 1168 909)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay1} ${styles.opacity} circle23`}
              cx='1168'
              cy='847'
              r='2.25'
              transform='rotate(180 1168 847)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay4} ${styles.line}  line23`}
              d='M1178 878C1178 831.6 1178 820 1178 820'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle23`}
              cx='1178'
              cy='880'
              r='2.25'
              transform='rotate(180 1178 880)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle23`}
              cx='1178'
              cy='818'
              r='2.25'
              transform='rotate(180 1178 818)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.3'>
            <path
              className={`${styles.delay4} ${styles.line}  line24`}
              d='M1190 650.5H1256L1318 712.5'
              stroke='black'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle24`}
              cx='1320'
              cy='714'
              r='2.25'
              transform='rotate(90 1320 714)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle24`}
              cx='1188'
              cy='651'
              r='2.25'
              transform='rotate(90 1188 651)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.3'>
            <path
              className={`${styles.delay3} ${styles.line}  line23`}
              d='M1048.44 785.303L1001.77 831.972L1001.77 919.653'
              stroke='black'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle23`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(0.707107 0.707107 0.707107 -0.707107 997.177 922.128)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay1} ${styles.opacity} circle23`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(0.707107 0.707107 0.707107 -0.707107 1045.97 784.242)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay3} ${styles.line}  line24`}
              d='M1184 658.5H1250L1312 720.5'
              stroke='black'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle24`}
              cx='1314'
              cy='722'
              r='2.25'
              transform='rotate(90 1314 722)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay1} ${styles.opacity} circle24`}
              cx='1182'
              cy='659'
              r='2.25'
              transform='rotate(90 1182 659)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay3} ${styles.line}  line24`}
              d='M1364.25 648.657C1340.25 624.657 1334.25 618.657 1334.25 618.657'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle24`}
              cx='1365.68'
              cy='650.242'
              r='2.25'
              transform='rotate(135 1365.68 650.242)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay1} ${styles.opacity} circle24`}
              cx='1332.84'
              cy='617.243'
              r='2.25'
              transform='rotate(135 1332.84 617.243)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay3} ${styles.line}  line22`}
              d='M826.828 635.737C850.828 611.737 856.828 605.737 856.828 605.737'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle22`}
              cx='825.243'
              cy='637.163'
              r='2.25'
              transform='rotate(-135 825.243 637.163)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay1} ${styles.opacity} circle22`}
              cx='858.243'
              cy='604.323'
              r='2.25'
              transform='rotate(-135 858.243 604.323)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay4} ${styles.line}  line24`}
              d='M1367.25 637.657C1350.45 620.857 1346.25 616.657 1346.25 616.657'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle24`}
              cx='1368.68'
              cy='639.242'
              r='2.25'
              transform='rotate(135 1368.68 639.242)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle24`}
              cx='1344.84'
              cy='615.242'
              r='2.25'
              transform='rotate(135 1344.84 615.242)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay5} ${styles.line}  line22`}
              d='M837.828 638.737C854.628 621.937 858.828 617.737 858.828 617.737'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay4} ${styles.opacity} circle22`}
              cx='836.243'
              cy='640.163'
              r='2.25'
              transform='rotate(-135 836.243 640.163)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle22`}
              cx='860.243'
              cy='616.322'
              r='2.25'
              transform='rotate(-135 860.243 616.322)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay2} ${styles.line}  line24`}
              d='M1238.87 668C1215.11 668 1209.17 668 1209.17 668'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay1} ${styles.opacity} circle24`}
              cx='1241'
              cy='668.113'
              r='2.25'
              transform='rotate(90 1241 668.113)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle24`}
              cx='1207.17'
              cy='668'
              r='2.25'
              transform='rotate(90 1207.17 668)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.3'>
            <path
              className={`${styles.delay5} ${styles.line}  line24`}
              d='M1389.34 646.669C1356.53 613.859 1348.33 605.657 1348.33 605.657'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay4} ${styles.opacity} circle24`}
              cx='1390.76'
              cy='648.083'
              r='2.25'
              transform='rotate(135 1390.76 648.083)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle24`}
              cx='1346.92'
              cy='604.243'
              r='2.25'
              transform='rotate(135 1346.92 604.243)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.3'>
            <path
              className={`${styles.delay3} ${styles.line}  line24`}
              d='M1292.34 717.669C1259.53 684.859 1251.33 676.657 1251.33 676.657'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle24`}
              cx='1293.76'
              cy='719.083'
              r='2.25'
              transform='rotate(135 1293.76 719.083)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay1} ${styles.opacity} circle24`}
              cx='1249.92'
              cy='675.243'
              r='2.25'
              transform='rotate(135 1249.92 675.243)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.3'>
            <path
              className={`${styles.delay4} ${styles.line}  line24`}
              d='M1691 693L1685.42 698.58L1679.84 704.16L1674.25 709.75L1668.67 715.33L1663.09 720.91L1657.51 726.49L1651.93 732.07L1646.34 737.66L1640.76 743.24L1632.87 743.24L1624.97 743.24L1617.08 743.24L1609.18 743.24L1601.29 743.24L1593.39 743.24L1585.5 743.24L1577.6 743.24L1569.71 743.24L1561.81 743.24L1553.92 743.24L1546.02 743.24L1538.13 743.24L1530.24 743.24L1522.34 743.24L1514.45 743.24L1506.55 743.24L1500.97 748.82L1495.39 754.4L1489.8 759.99L1484.22 765.57L1478.64 771.15L1473.06 776.73L1467.48 782.31L1461.89 787.9L1456.31 793.48L1450.73 799.06L1445.14 804.65L1439.56 810.23L1433.98 815.81L1428.4 821.39L1422.81 826.98L1417.23 832.56L1411.65 838.14L1411.65 846.03L1411.65 853.93L1411.65 867.5'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay3} ${styles.opacity} circle24`}
              d='M1409.75 871.267C1410.09 871.617 1410.54 871.855 1411.02 871.952C1411.5 872.048 1412.01 871.999 1412.46 871.81C1412.92 871.621 1413.31 871.3 1413.58 870.889C1413.85 870.478 1414 869.995 1414 869.5C1414 869.005 1413.85 868.522 1413.58 868.111C1413.31 867.7 1412.92 867.379 1412.46 867.19C1412.01 867.001 1411.5 866.952 1411.02 867.048C1410.54 867.145 1410.09 867.383 1409.75 867.733C1409.51 867.962 1409.32 868.237 1409.19 868.541C1409.07 868.844 1409 869.17 1409 869.5C1409 869.83 1409.07 870.156 1409.19 870.459C1409.32 870.763 1409.51 871.038 1409.75 871.267Z'
              fill='#162029'
            />
          </g>
          <g opacity='0.3'>
            <path
              className={`${styles.delay5} ${styles.line}  line22`}
              d='M1189 1012.39L1183.41 1017.97L1175.52 1017.97L1167.62 1017.97L1159.73 1017.97L1151.83 1017.97L1143.94 1017.97L1136.04 1017.97L1128.15 1017.97L1120.26 1017.97L1112.36 1017.97L1104.47 1017.97L1096.57 1017.97L1088.68 1017.97L1080.78 1017.97L1072.89 1017.97L1064.99 1017.97L1057.1 1017.97L1049.2 1017.97L1041.31 1017.97L1033.41 1017.97L1025.52 1017.97L1017.62 1017.97L1012.04 1012.39L1004.15 1012.39L996.26 1012.39L988.36 1012.39L980.46 1012.39L972.57 1012.39L964.67 1012.39L956.78 1012.39L948.89 1012.39L940.99 1012.39L933.1 1012.39L925.2 1012.39L917.31 1012.39L909.41 1012.39L901.52 1012.39L893.62 1012.39L885.73 1012.39L880.15 1006.8L880.15 998.91L885.73 993.32L891.31 987.74L896.89 982.16L896.89 974.27L896.89 966.37L896.89 958.48L896.89 950.58L902.47 945L910.37 945L918.26 945L926.16 945L934.05 945L934.05 952.9L928.47 958.48L922.89 964.06L917.31 969.64L911.72 975.22L906.14 980.81L900.56 986.39L894.98 991.97L889.4 997.55L883.81 1003.13'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay4} ${styles.opacity} circle22`}
              d='M885.21 1004.53C884.933 1004.82 884.576 1005.01 884.187 1005.09C883.797 1005.17 883.393 1005.14 883.024 1004.99C882.655 1004.84 882.34 1004.58 882.118 1004.25C881.896 1003.92 881.777 1003.53 881.777 1003.14C881.777 1002.74 881.896 1002.35 882.118 1002.02C882.34 1001.69 882.655 1001.43 883.024 1001.28C883.393 1001.13 883.797 1001.1 884.187 1001.18C884.576 1001.26 884.933 1001.45 885.21 1001.74C885.574 1002.11 885.777 1002.61 885.777 1003.14C885.777 1003.66 885.574 1004.16 885.21 1004.53Z'
              fill='#162029'
            />
          </g>
          <g opacity='0.3'>
            <path
              className={`${styles.delay5} ${styles.line}  line24`}
              d='M1319.41 510L1319.41 517.891L1319.41 525.783L1319.41 533.674L1319.41 541.572L1319.41 549.471V557.362L1319.41 565.253L1319.41 573.145L1319.41 581.05L1319.41 588.941L1319.41 596.833L1319.41 604.731L1319.41 612.63L1319.41 620.521L1324.99 626.1L1330.58 631.686L1336.16 637.265L1341.74 642.851L1347.32 648.43L1352.91 654.016L1358.49 659.596V667.487L1352.9 673.073L1347.32 678.652L1341.74 684.231L1341.74 692.13L1341.74 700.028L1341.74 707.919L1341.74 715.818L1336.16 721.397L1330.57 726.983L1324.99 732.562L1319.41 738.141L1313.83 743.727L1313.83 816.428L1313.83 824.319L1313.83 832.217L1313.83 840.109L1313.83 848'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay4} ${styles.line}  line24`}
              d='M1316.34 849.567C1316.34 850.066 1316.2 850.553 1315.92 850.968C1315.64 851.383 1315.25 851.706 1314.79 851.898C1314.33 852.089 1313.82 852.139 1313.33 852.042C1312.84 851.944 1312.39 851.704 1312.04 851.352C1311.69 850.999 1311.45 850.55 1311.35 850.061C1311.25 849.572 1311.3 849.065 1311.5 848.604C1311.69 848.144 1312.01 847.75 1312.42 847.473C1312.84 847.197 1313.33 847.049 1313.83 847.05C1314.16 847.048 1314.49 847.111 1314.79 847.237C1315.1 847.363 1315.38 847.548 1315.61 847.782C1315.85 848.016 1316.03 848.295 1316.16 848.601C1316.28 848.908 1316.35 849.236 1316.34 849.567Z'
              fill='#162029'
            />
          </g>
          <g opacity='0.3'>
            <path
              className={`${styles.delay5} ${styles.line}  line24`}
              d='M1418.84 1008.27L1413.25 1002.69L1407.67 997.105L1402.09 991.525L1396.51 985.945L1390.93 980.355L1385.34 974.775L1379.76 969.195L1374.18 963.615L1368.59 958.025L1363.01 952.445L1357.43 946.865L1351.85 941.285L1346.27 935.695L1340.69 930.115L1340.69 922.225L1340.69 914.325L1340.69 906.435L1340.69 898.535L1340.69 890.645L1346.27 885.065L1346.27 877.165L1346.27 869.275L1346.27 861.375L1346.27 853.485L1346.27 845.585L1346.27 837.695L1346.27 829.795L1346.27 821.905L1346.27 814.005L1346.27 806.115L1351.85 800.535L1357.43 794.945L1363.01 789.365L1363.01 781.475L1363.01 773.575L1363.01 765.685L1363.01 757.785L1363.01 749.895L1363.01 741.995L1357.43 736.415L1351.85 730.835L1346.27 725.255L1340.69 719.665L1335.1 714.085L1329.52 708.505L1323.94 702.925L1318.36 697.345L1312.77 691.755L1307.19 686.175L1301.61 680.595L1296.02 675.015L1290.44 669.425L1284.86 663.845L1279.28 658.265L1273.7 652.685L1268.11 647.105L1262.53 641.515L1254.63 641.515L1246.74 641.515L1238.85 641.515L1230.95 641.515L1223.06 641.515L1215.16 641.515L1207.27 641.515L1199.37 641.515L1191.48 641.515L1183.58 641.515L1175.69 641.515L1170.11 635.935'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay4} ${styles.opacity} circle24`}
              d='M1168.74 637.295C1168.38 636.933 1168.17 636.442 1168.17 635.93C1168.17 635.418 1168.38 634.927 1168.74 634.565C1169.1 634.203 1169.59 634 1170.1 634C1170.62 634 1171.11 634.203 1171.47 634.565C1171.83 634.927 1172.04 635.418 1172.04 635.93C1172.04 636.442 1171.83 636.933 1171.47 637.295C1171.11 637.657 1170.62 637.861 1170.1 637.861C1169.59 637.861 1169.1 637.657 1168.74 637.295Z'
              fill='#162029'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay3} ${styles.line}  line24`}
              d='M1433.77 932.57L1433.77 924.68L1433.77 916.79L1433.77 908.89L1433.77 901L1433.77 893.1L1433.77 885.2L1433.77 877.31L1433.77 869.42L1433.77 861.52L1433.77 853.63L1433.77 845.73L1439.36 840.15L1444.94 834.57L1450.52 828.98L1456.11 823.4L1461.69 817.82L1467.27 812.24L1472.85 806.66L1478.43 801.08L1484.02 795.49L1489.6 789.91L1495.18 784.33L1500.76 778.74L1506.35 773.16L1511.93 767.58L1517.51 762L1523.09 756.41L1528.68 750.83L1534.26 745.25L1534.26 737.36L1534.26 729.46L1534.26 721.57L1534.26 713.67L1534.26 705.78L1539.84 700.19L1545.42 694.61L1551 689.03L1556.59 683.45L1562.17 677.87L1567.75 672.28L1573.34 666.7L1578.92 661.12L1584.5 655.54L1590.08 649.95'
              stroke='#162029'
              strokeLinejoin='round'
            />
          </g>
          <g opacity='0.3'>
            <path
              className={`${styles.delay5} ${styles.line}  line24`}
              d='M1556 618.5L1485.5 689V739.5L1417 808.5'
              stroke='black'
            />
            <path
              className={`${styles.delay4} ${styles.opacity} circle24`}
              d='M1414.55 807.794C1414.11 807.881 1413.71 808.095 1413.4 808.408C1412.98 808.835 1412.75 809.406 1412.75 810C1412.75 810.594 1412.98 811.165 1413.4 811.592C1413.71 811.905 1414.11 812.119 1414.55 812.206C1414.99 812.294 1415.44 812.249 1415.86 812.079C1416.27 811.909 1416.62 811.62 1416.87 811.25C1417.12 810.88 1417.25 810.445 1417.25 810C1417.25 809.555 1417.12 809.12 1416.87 808.75C1416.62 808.38 1416.27 808.091 1415.86 807.921C1415.44 807.751 1414.99 807.706 1414.55 807.794Z'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay5} ${styles.line}  line23`}
              d='M989.412 964L989.412 929.873L989.412 921.982L989.412 914.091L989.405 906.192L989.412 898.294L989.412 890.402L989.412 882.511L989.412 874.62L989.412 866.714L989.412 858.823L989.412 850.932L989.405 843.033L989.412 835.135L989.412 827.244L994.991 821.665L1000.58 816.078L1006.16 810.499L1011.74 804.913L1017.32 799.334L1022.91 793.748L1028.49 788.169L1028.49 780.278L1022.9 774.692L1017.32 769.112L1011.74 763.533L1011.74 755.635L1011.74 747.737L1011.74 739.845L1011.74 731.947L1006.16 726.368L1000.57 720.782L994.991 715.203L989.412 709.624L983.826 704.037L983.833 696.139L983.833 688.248L983.826 680.349L983.826 672.458L983.826 664.567'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay4} ${styles.opacity} circle23`}
              d='M986.344 664.567C986.344 664.068 986.197 663.58 985.92 663.166C985.643 662.751 985.25 662.427 984.789 662.236C984.329 662.045 983.822 661.995 983.333 662.092C982.843 662.189 982.394 662.429 982.042 662.782C981.689 663.135 981.449 663.584 981.352 664.073C981.255 664.562 981.305 665.069 981.496 665.53C981.687 665.99 982.01 666.384 982.425 666.66C982.84 666.937 983.328 667.084 983.826 667.084C984.157 667.086 984.486 667.023 984.792 666.897C985.099 666.771 985.377 666.586 985.611 666.352C985.846 666.118 986.031 665.839 986.157 665.533C986.282 665.226 986.346 664.898 986.344 664.567Z'
              fill='#162029'
            />
          </g>
          <g opacity='0.15'>
            <path
              className={`${styles.delay1} ${styles.line}  line21`}
              d='M1272 929L1266.42 934.58L1260.83 940.16L1255.25 945.75L1249.67 951.33L1244.09 956.91L1238.51 962.49L1232.93 968.07L1227.34 973.66L1221.76 979.24L1216.18 984.82L1210.59 990.41L1205.01 995.99H1197.12H1189.22H1181.33H1173.43H1165.54H1157.64H1149.75H1141.85H1133.96H1126.07H1118.17L1112.59 1001.57H1104.69H1096.8H1088.9H1081.01H1073.12H1065.22H1057.33H1049.43H1041.54H1033.64H1025.75H1017.85H1009.96H1002.07H994.17L988.59 1007.15L983 1012.73L977.42 1018.32L971.84 1023.9L966.26 1029.48L960.67 1035.06L955.09 1040.65L949.51 1046.23L943.93 1051.81L938.35 1057.39L932.76 1062.97L927.18 1068.56L921.6 1074.14L916.02 1079.72L910.43 1085.31L904.85 1090.89L899.27 1096.47L893.69 1102.05L888.1 1107.64H880.21H872.32H864.42H856.52H848.63H840.74H832.84H824.95L819.36 1102.05L813.78 1096.47L808.2 1090.89L802.62 1085.31L797.03 1079.72L791.45 1074.14L785.87 1068.56L780.29 1062.97L774.71 1057.39L769.12 1051.81L763.54 1046.23L757.96 1040.65L752.37 1035.06L746.79 1029.48L741.21 1023.9L735.63 1018.32H727.73H719.84H711.95H704.05H696.16H688.26H680.36H672.47H664.58H656.68H648.79H640.89H633H625.1H617.21H609.31H601.42H593.52H585.63L580.05 1023.9L574.46 1029.48L568.88 1035.06L563.3 1040.65L557.72 1046.23L552.13 1051.81L546.55 1057.39V1065.29'
              stroke='#162029'
              strokeLinejoin='round'
            />
          </g>
          <g opacity='0.2'>
            <path
              className={`${styles.delay3} ${styles.line}  line22`}
              d='M833.515 736L833.515 743.9L833.515 751.79L833.515 759.68L839.095 765.26L844.675 770.85L850.265 776.43L855.845 782.01L861.425 787.6L861.425 795.49L861.425 803.39L861.425 811.28L861.425 819.17L861.425 827.07L861.425 834.96L861.425 842.86L861.425 850.76L861.425 858.65L861.425 866.54'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay2} ${styles.opacity} circle22`}
              d='M860.994 871.249C860.409 871.265 859.841 871.06 859.401 870.675C858.983 870.237 858.75 869.655 858.75 869.049C858.75 868.438 858.988 867.851 859.412 867.413C859.851 866.988 860.438 866.75 861.049 866.75C861.655 866.75 862.237 866.984 862.675 867.401C863.06 867.841 863.265 868.409 863.249 868.994C863.233 869.587 862.99 870.151 862.571 870.571C862.151 870.99 861.587 871.233 860.994 871.249Z'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay1} ${styles.opacity} circle22`}
              d='M833.994 735.249C833.409 735.265 832.841 735.06 832.401 734.675C831.983 734.237 831.75 733.655 831.75 733.049C831.75 732.438 831.988 731.851 832.412 731.413C832.851 730.988 833.438 730.75 834.049 730.75C834.655 730.75 835.237 730.984 835.675 731.401C836.06 731.841 836.265 732.409 836.249 732.994C836.233 733.587 835.99 734.151 835.571 734.571C835.151 734.99 834.587 735.233 833.994 735.249Z'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay5} ${styles.line}  line23`}
              d='M1164 732V739.9V747.79V755.69V763.58V771.48V779.37V787.27V795.16V803.06V810.95V818.85V826.74L1158.42 832.32V840.22V848.11V856.01V863.9V871.8V879.69V887.59V895.48V903.37V911.27V919.16V927.06'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay4} ${styles.opacity} circle23`}
              d='M1161.4 927.06C1161.4 927.653 1161.22 928.233 1160.89 928.727C1160.56 929.22 1160.1 929.605 1159.55 929.832C1159 930.059 1158.4 930.118 1157.81 930.002C1157.23 929.887 1156.7 929.601 1156.28 929.181C1155.86 928.762 1155.57 928.227 1155.46 927.645C1155.34 927.063 1155.4 926.46 1155.63 925.912C1155.86 925.364 1156.24 924.895 1156.73 924.566C1157.23 924.236 1157.81 924.06 1158.4 924.06C1159.2 924.06 1159.96 924.376 1160.52 924.939C1161.08 925.501 1161.4 926.264 1161.4 927.06Z'
              fill='#162029'
            />
          </g>
          <g opacity='0.3'>
            <path
              className={`${styles.delay3} ${styles.line}  line11`}
              d='M1185.5 124.699L1097 124.699L1082 109.699'
              stroke='black'
            />
            <path
              className={`${styles.delay2} ${styles.opacity} circle11`}
              d='M1079 111.789C1080.16 111.789 1081.28 111.388 1082.17 110.654C1083.07 109.92 1083.68 108.899 1083.91 107.764C1084.13 106.629 1083.96 105.451 1083.41 104.431C1082.86 103.41 1081.98 102.611 1080.91 102.169C1079.84 101.726 1078.65 101.669 1077.55 102.005C1076.44 102.342 1075.48 103.052 1074.84 104.015C1074.2 104.978 1073.91 106.133 1074.03 107.285C1074.14 108.436 1074.65 109.512 1075.47 110.329C1076.41 111.264 1077.68 111.789 1079 111.789ZM1079 104.789C1079.4 104.789 1079.78 104.906 1080.11 105.125C1080.44 105.344 1080.7 105.655 1080.85 106.02C1081 106.385 1081.04 106.787 1080.96 107.174C1080.89 107.562 1080.7 107.919 1080.42 108.199C1080.23 108.385 1080.01 108.533 1079.77 108.633C1079.53 108.734 1079.27 108.786 1079 108.786C1078.74 108.786 1078.48 108.734 1078.24 108.633C1078 108.533 1077.78 108.385 1077.59 108.199C1077.22 107.824 1077.01 107.317 1077.01 106.789C1077.01 106.261 1077.22 105.754 1077.59 105.379C1077.96 105.003 1078.47 104.791 1079 104.789Z'
              fill='black'
            />
          </g>
          <path
            className={`${styles.delay2} ${styles.line}  line11`}
            d='M1185 123.699H1096L1081 108.699'
            stroke='white'
          />
          <path
            className={`${styles.delay1} ${styles.opacity} circle11`}
            d='M1078 110.789C1079.16 110.789 1080.28 110.388 1081.17 109.654C1082.07 108.92 1082.68 107.899 1082.91 106.764C1083.13 105.629 1082.96 104.451 1082.41 103.431C1081.86 102.41 1080.98 101.611 1079.91 101.169C1078.84 100.726 1077.65 100.669 1076.55 101.005C1075.44 101.342 1074.48 102.052 1073.84 103.015C1073.2 103.978 1072.91 105.133 1073.03 106.285C1073.14 107.436 1073.65 108.512 1074.47 109.329C1075.41 110.264 1076.68 110.789 1078 110.789ZM1078 103.789C1078.4 103.789 1078.78 103.906 1079.11 104.125C1079.44 104.344 1079.7 104.655 1079.85 105.02C1080 105.385 1080.04 105.787 1079.96 106.174C1079.89 106.562 1079.7 106.919 1079.42 107.199C1079.23 107.385 1079.01 107.533 1078.77 107.633C1078.53 107.734 1078.27 107.786 1078 107.786C1077.74 107.786 1077.48 107.734 1077.24 107.633C1077 107.533 1076.78 107.385 1076.59 107.199C1076.22 106.824 1076.01 106.317 1076.01 105.789C1076.01 105.261 1076.22 104.754 1076.59 104.379C1076.96 104.003 1077.47 103.791 1078 103.789Z'
            fill='white'
          />
          <g opacity='0.4'>
            <path
              className={`${styles.delay2} ${styles.opacity} circle12`}
              d='M1440 330.711C1440 330.117 1439.83 329.536 1439.5 329.041C1439.17 328.546 1438.7 328.16 1438.16 327.931C1437.61 327.702 1437 327.641 1436.42 327.755C1435.84 327.87 1435.3 328.155 1434.88 328.574C1434.46 328.993 1434.18 329.527 1434.06 330.11C1433.94 330.692 1434 331.296 1434.23 331.845C1434.45 332.393 1434.84 332.863 1435.33 333.193C1435.83 333.523 1436.41 333.699 1437 333.699C1437.79 333.699 1438.55 333.385 1439.12 332.825C1439.68 332.265 1440 331.505 1440 330.711ZM1435.29 330.711C1435.29 330.37 1435.39 330.037 1435.58 329.752C1435.77 329.468 1436.03 329.246 1436.35 329.115C1436.66 328.983 1437.01 328.948 1437.34 329.014C1437.68 329.08 1437.99 329.244 1438.23 329.485C1438.47 329.726 1438.63 330.033 1438.7 330.367C1438.76 330.701 1438.73 331.048 1438.6 331.362C1438.46 331.676 1438.24 331.944 1437.96 332.132C1437.67 332.32 1437.34 332.419 1437 332.417C1436.55 332.417 1436.11 332.237 1435.79 331.917C1435.47 331.597 1435.29 331.163 1435.29 330.711Z'
              fill='#162029'
            />
            <path
              className={`${styles.delay3} ${styles.line}  line12`}
              d='M1422.51 171.199V222.199L1437.01 236.699V328.699'
              stroke='#162029'
            />
          </g>
          <g opacity='0.3'>
            <path
              className={`${styles.delay4} ${styles.opacity} circle12`}
              d='M1324.01 37.6992C1323.42 37.6969 1322.84 37.8709 1322.34 38.1991C1321.85 38.5273 1321.46 38.995 1321.23 39.543C1321 40.091 1320.94 40.6945 1321.06 41.2773C1321.17 41.86 1321.46 42.3956 1321.87 42.8164C1322.29 43.2371 1322.83 43.524 1323.41 43.6407C1323.99 43.7574 1324.6 43.6987 1325.15 43.472C1325.69 43.2453 1326.16 42.8608 1326.49 42.3672C1326.82 41.8736 1327 41.2931 1327 40.6992C1327 39.9056 1326.69 39.1443 1326.13 38.5821C1325.57 38.0198 1324.81 37.7024 1324.01 37.6992ZM1324.01 42.4051C1323.67 42.4074 1323.34 42.3084 1323.05 42.1206C1322.77 41.9327 1322.55 41.6646 1322.42 41.3502C1322.28 41.0359 1322.25 40.6896 1322.31 40.3553C1322.38 40.021 1322.54 39.7139 1322.79 39.473C1323.03 39.232 1323.33 39.0682 1323.67 39.0023C1324 38.9364 1324.35 38.9714 1324.66 39.1029C1324.98 39.2343 1325.25 39.4563 1325.43 39.7406C1325.62 40.0248 1325.72 40.3585 1325.72 40.6992C1325.72 41.1517 1325.54 41.5856 1325.22 41.9055C1324.9 42.2254 1324.46 42.4051 1324.01 42.4051Z'
              fill='#162029'
            />
            <path
              className={`${styles.delay5} ${styles.line}  line12`}
              d='M1327 40.6992L1381.5 40.6992L1396 26.1992L1488 26.1992'
              stroke='#162029'
            />
          </g>
          <path
            className={`${styles.delay3} ${styles.line}  line12`}
            d='M1228 145.199L1137.5 145.199L1122.5 157.699L1088 157.699'
            stroke='url(#paint54_linear_110_2)'
          />
          <path
            className={`${styles.delay2} ${styles.opacity} circle12`}
            d='M1085.99 160.699C1086.58 160.702 1087.16 160.528 1087.66 160.199C1088.15 159.871 1088.54 159.403 1088.77 158.855C1089 158.307 1089.06 157.704 1088.94 157.121C1088.83 156.538 1088.54 156.003 1088.13 155.582C1087.71 155.161 1087.17 154.874 1086.59 154.758C1086.01 154.641 1085.4 154.7 1084.85 154.926C1084.31 155.153 1083.84 155.538 1083.51 156.031C1083.18 156.525 1083 157.105 1083 157.699C1083 158.493 1083.31 159.254 1083.87 159.816C1084.43 160.379 1085.19 160.696 1085.99 160.699ZM1085.99 155.993C1086.33 155.991 1086.66 156.09 1086.95 156.278C1087.23 156.466 1087.45 156.734 1087.58 157.048C1087.72 157.363 1087.75 157.709 1087.69 158.043C1087.62 158.377 1087.46 158.685 1087.21 158.925C1086.97 159.166 1086.67 159.33 1086.33 159.396C1086 159.462 1085.65 159.427 1085.34 159.296C1085.02 159.164 1084.75 158.942 1084.57 158.658C1084.38 158.374 1084.28 158.04 1084.28 157.699C1084.28 157.247 1084.46 156.813 1084.78 156.493C1085.1 156.173 1085.54 155.993 1085.99 155.993Z'
            fill='#D6C3BA'
          />
          <path
            className={`${styles.delay1} ${styles.opacity} circle12`}
            d='M1229.99 148.699C1230.58 148.702 1231.16 148.528 1231.66 148.199C1232.15 147.871 1232.54 147.403 1232.77 146.855C1233 146.307 1233.06 145.704 1232.94 145.121C1232.83 144.538 1232.54 144.003 1232.13 143.582C1231.71 143.161 1231.17 142.874 1230.59 142.758C1230.01 142.641 1229.4 142.7 1228.85 142.926C1228.31 143.153 1227.84 143.538 1227.51 144.031C1227.18 144.525 1227 145.105 1227 145.699C1227 146.493 1227.31 147.254 1227.87 147.816C1228.43 148.379 1229.19 148.696 1229.99 148.699ZM1229.99 143.993C1230.33 143.991 1230.66 144.09 1230.95 144.278C1231.23 144.466 1231.45 144.734 1231.58 145.048C1231.72 145.363 1231.75 145.709 1231.69 146.043C1231.62 146.377 1231.46 146.685 1231.21 146.925C1230.97 147.166 1230.67 147.33 1230.33 147.396C1230 147.462 1229.65 147.427 1229.34 147.296C1229.02 147.164 1228.75 146.942 1228.57 146.658C1228.38 146.374 1228.28 146.04 1228.28 145.699C1228.28 145.247 1228.46 144.813 1228.78 144.493C1229.1 144.173 1229.54 143.993 1229.99 143.993Z'
            fill='#CBC3BA'
          />
          <path
            className={`${styles.delay5} ${styles.line}  line12`}
            d='M1438.5 382.199L1438.5 351.199L1426 336.199L1426 301.699'
            stroke='#A6D0DD'
          />
          <path
            className={`${styles.delay4} ${styles.opacity} circle12`}
            d='M1423 299.687C1423 300.281 1423.17 300.862 1423.5 301.357C1423.83 301.852 1424.3 302.239 1424.84 302.467C1425.39 302.696 1426 302.757 1426.58 302.643C1427.16 302.529 1427.7 302.244 1428.12 301.825C1428.54 301.406 1428.82 300.871 1428.94 300.289C1429.06 299.707 1429 299.103 1428.77 298.554C1428.55 298.005 1428.16 297.536 1427.67 297.206C1427.17 296.875 1426.59 296.699 1426 296.699C1425.21 296.699 1424.45 297.014 1423.88 297.574C1423.32 298.134 1423 298.894 1423 299.687ZM1427.71 299.687C1427.71 300.028 1427.61 300.362 1427.42 300.646C1427.23 300.93 1426.97 301.152 1426.65 301.284C1426.34 301.415 1425.99 301.45 1425.66 301.384C1425.32 301.318 1425.01 301.155 1424.77 300.914C1424.53 300.673 1424.37 300.366 1424.3 300.031C1424.24 299.697 1424.27 299.351 1424.4 299.036C1424.54 298.722 1424.76 298.454 1425.04 298.266C1425.33 298.078 1425.66 297.979 1426 297.982C1426.45 297.982 1426.89 298.161 1427.21 298.481C1427.53 298.801 1427.71 299.235 1427.71 299.687Z'
            fill='#A6D0DD'
          />
          <path
            className={`${styles.delay3} ${styles.opacity} circle12`}
            d='M1435 384.687C1435 385.281 1435.17 385.862 1435.5 386.357C1435.83 386.852 1436.3 387.239 1436.84 387.467C1437.39 387.696 1438 387.757 1438.58 387.643C1439.16 387.529 1439.7 387.244 1440.12 386.825C1440.54 386.406 1440.82 385.871 1440.94 385.289C1441.06 384.707 1441 384.103 1440.77 383.554C1440.55 383.005 1440.16 382.536 1439.67 382.206C1439.17 381.875 1438.59 381.699 1438 381.699C1437.21 381.699 1436.45 382.014 1435.88 382.574C1435.32 383.134 1435 383.894 1435 384.687ZM1439.71 384.687C1439.71 385.028 1439.61 385.362 1439.42 385.646C1439.23 385.93 1438.97 386.152 1438.65 386.284C1438.34 386.415 1437.99 386.45 1437.66 386.384C1437.32 386.318 1437.01 386.155 1436.77 385.914C1436.53 385.673 1436.37 385.366 1436.3 385.031C1436.24 384.697 1436.27 384.351 1436.4 384.036C1436.54 383.722 1436.76 383.454 1437.04 383.266C1437.33 383.078 1437.66 382.979 1438 382.982C1438.45 382.982 1438.89 383.161 1439.21 383.481C1439.53 383.801 1439.71 384.235 1439.71 384.687Z'
            fill='#A6D0DD'
          />
          <path
            className={`${styles.delay3} ${styles.line}  line12`}
            d='M1566 148.699L1501 148.699L1488 136.699L1427.5 136.699'
            stroke='url(#paint55_linear_110_2)'
          />
          <path
            className={`${styles.delay2} ${styles.opacity} circle12`}
            d='M1425.49 139.689C1426.08 139.692 1426.66 139.518 1427.16 139.189C1427.65 138.861 1428.04 138.393 1428.27 137.845C1428.5 137.297 1428.56 136.694 1428.44 136.111C1428.33 135.528 1428.04 134.993 1427.63 134.572C1427.21 134.151 1426.67 133.864 1426.09 133.748C1425.51 133.631 1424.9 133.69 1424.35 133.916C1423.81 134.143 1423.34 134.528 1423.01 135.021C1422.68 135.515 1422.5 136.095 1422.5 136.689C1422.5 137.483 1422.81 138.244 1423.37 138.806C1423.93 139.369 1424.69 139.686 1425.49 139.689ZM1425.49 134.983C1425.83 134.981 1426.16 135.08 1426.45 135.268C1426.73 135.456 1426.95 135.724 1427.08 136.038C1427.22 136.353 1427.25 136.699 1427.19 137.033C1427.12 137.367 1426.96 137.675 1426.71 137.915C1426.47 138.156 1426.17 138.32 1425.83 138.386C1425.5 138.452 1425.15 138.417 1424.84 138.286C1424.52 138.154 1424.25 137.932 1424.07 137.648C1423.88 137.364 1423.78 137.03 1423.78 136.689C1423.78 136.237 1423.96 135.803 1424.28 135.483C1424.6 135.163 1425.04 134.983 1425.49 134.983Z'
            fill='#9D9A96'
          />
          <g opacity='0.2'>
            <path
              className={`${styles.delay1} ${styles.opacity} circle12`}
              d='M1033.49 124.189C1034.08 124.192 1034.66 124.018 1035.16 123.689C1035.65 123.361 1036.04 122.893 1036.27 122.345C1036.5 121.797 1036.56 121.194 1036.44 120.611C1036.33 120.028 1036.04 119.493 1035.63 119.072C1035.21 118.651 1034.67 118.364 1034.09 118.248C1033.51 118.131 1032.9 118.19 1032.35 118.416C1031.81 118.643 1031.34 119.028 1031.01 119.521C1030.68 120.015 1030.5 120.595 1030.5 121.189C1030.5 121.983 1030.81 122.744 1031.37 123.306C1031.93 123.869 1032.69 124.186 1033.49 124.189ZM1033.49 119.483C1033.83 119.481 1034.16 119.58 1034.45 119.768C1034.73 119.956 1034.95 120.224 1035.08 120.538C1035.22 120.853 1035.25 121.199 1035.19 121.533C1035.12 121.867 1034.96 122.175 1034.71 122.415C1034.47 122.656 1034.17 122.82 1033.83 122.886C1033.5 122.952 1033.15 122.917 1032.84 122.786C1032.52 122.654 1032.25 122.432 1032.07 122.148C1031.88 121.864 1031.78 121.53 1031.78 121.189C1031.78 120.737 1031.96 120.303 1032.28 119.983C1032.6 119.663 1033.04 119.483 1033.49 119.483Z'
              fill='black'
            />
            <path
              className={`${styles.delay2} ${styles.opacity} circle12`}
              d='M1309.99 139.699C1310.58 139.702 1311.16 139.528 1311.66 139.199C1312.15 138.871 1312.54 138.403 1312.77 137.855C1313 137.307 1313.06 136.704 1312.94 136.121C1312.83 135.538 1312.54 135.003 1312.13 134.582C1311.71 134.161 1311.17 133.874 1310.59 133.758C1310.01 133.641 1309.4 133.7 1308.85 133.926C1308.31 134.153 1307.84 134.538 1307.51 135.031C1307.18 135.525 1307 136.105 1307 136.699C1307 137.493 1307.31 138.254 1307.87 138.816C1308.43 139.379 1309.19 139.696 1309.99 139.699ZM1309.99 134.993C1310.33 134.991 1310.66 135.09 1310.95 135.278C1311.23 135.466 1311.45 135.734 1311.58 136.048C1311.72 136.363 1311.75 136.709 1311.69 137.043C1311.62 137.377 1311.46 137.685 1311.21 137.925C1310.97 138.166 1310.67 138.33 1310.33 138.396C1310 138.462 1309.65 138.427 1309.34 138.296C1309.02 138.164 1308.75 137.942 1308.57 137.658C1308.38 137.374 1308.28 137.04 1308.28 136.699C1308.28 136.247 1308.46 135.813 1308.78 135.493C1309.1 135.173 1309.54 134.993 1309.99 134.993Z'
              fill='black'
            />
            <path
              className={`${styles.delay3} ${styles.line}  line12`}
              d='M1307.5 136.699L1092 136.699L1076 121.199L1035 121.199'
              stroke='black'
            />
          </g>
          <path
            className={`${styles.delay1} ${styles.line}  line11`}
            d='M1142 46.6992H1053.5L1022.5 15.6992V-5.30078'
            stroke='url(#paint56_linear_110_2)'
          />
          <path
            className={`${styles.delay2} ${styles.line}  line11`}
            d='M1138.5 59.6992L1048 59.6992L1007.5 16.6992V-3.80078'
            stroke='url(#paint57_linear_110_2)'
          />
          <path
            className={`${styles.delay2} ${styles.line}  line12`}
            d='M1470 149.699H1401.5L1366 114.699V106.699'
            stroke='url(#paint58_linear_110_2)'
          />
          <circle
            className={`${styles.delay1} ${styles.opacity} circle12`}
            cx='1366'
            cy='103.699'
            r='2.25'
            transform='rotate(180 1366 103.699)'
            stroke='#A7D1DE'
            strokeWidth='1.5'
          />
          <g opacity='0.4'>
            <path
              className={`${styles.delay3} ${styles.line}  line11`}
              d='M1202.5 33.1992L1057.5 33.1992L1037 13.1992V6.69922'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle11`}
              cx='1037'
              cy='4.69922'
              r='2.25'
              transform='rotate(180 1037 4.69922)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay1} ${styles.opacity} circle11`}
              cx='1205'
              cy='33.6992'
              r='2.25'
              transform='rotate(180 1205 33.6992)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay1} ${styles.opacity} circle12`}
              cx='1349'
              cy='155.699'
              r='4'
              transform='rotate(180 1349 155.699)'
              fill='#162029'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle12`}
              cx='1337'
              cy='155.699'
              r='4'
              transform='rotate(180 1337 155.699)'
              fill='#162029'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle12`}
              cx='1325'
              cy='155.699'
              r='4'
              transform='rotate(180 1325 155.699)'
              fill='#162029'
            />
            <circle
              className={`${styles.delay4} ${styles.opacity} circle12`}
              cx='1313'
              cy='155.699'
              r='4'
              transform='rotate(180 1313 155.699)'
              fill='#162029'
            />
            <circle
              className={`${styles.delay5} ${styles.opacity} circle12`}
              cx='1301'
              cy='155.699'
              r='4'
              transform='rotate(180 1301 155.699)'
              fill='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay5} ${styles.opacity} circle24`}
              cx='1296'
              cy='501'
              r='4'
              transform='rotate(90 1296 501)'
              fill='#162029'
            />
            <circle
              className={`${styles.delay4} ${styles.opacity} circle24`}
              cx='1296'
              cy='513'
              r='4'
              transform='rotate(90 1296 513)'
              fill='#162029'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle24`}
              cx='1296'
              cy='525'
              r='4'
              transform='rotate(90 1296 525)'
              fill='#162029'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle24`}
              cx='1296'
              cy='537'
              r='4'
              transform='rotate(90 1296 537)'
              fill='#162029'
            />
            <circle
              className={`${styles.delay1} ${styles.opacity} circle24`}
              cx='1296'
              cy='549'
              r='4'
              transform='rotate(90 1296 549)'
              fill='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay1} ${styles.opacity} circle24`}
              cx='1283'
              cy='501'
              r='4'
              transform='rotate(90 1283 501)'
              fill='#162029'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle24`}
              cx='1283'
              cy='513'
              r='4'
              transform='rotate(90 1283 513)'
              fill='#162029'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle24`}
              cx='1283'
              cy='525'
              r='4'
              transform='rotate(90 1283 525)'
              fill='#162029'
            />
            <circle
              className={`${styles.delay4} ${styles.opacity} circle24`}
              cx='1283'
              cy='537'
              r='4'
              transform='rotate(90 1283 537)'
              fill='#FF6969'
            />
            <circle
              className={`${styles.delay5} ${styles.opacity} circle24`}
              cx='1283'
              cy='549'
              r='4'
              transform='rotate(90 1283 549)'
              fill='#162029'
            />
          </g>
          <circle
            className={`${styles.delay1} ${styles.opacityH} circle12`}
            opacity='0.3'
            cx='1369'
            cy='29.6992'
            r='3'
            transform='rotate(180 1369 29.6992)'
            fill='#162029'
          />
          <circle
            className={`${styles.delay2} ${styles.opacityH} circle12`}
            opacity='0.4'
            cx='1359'
            cy='29.6992'
            r='3'
            transform='rotate(180 1359 29.6992)'
            fill='#162029'
          />
          <circle
            className={`${styles.delay3} ${styles.opacityH} circle12`}
            opacity='0.3'
            cx='1349'
            cy='29.6992'
            r='3'
            transform='rotate(180 1349 29.6992)'
            fill='#162029'
          />
          <circle
            className={`${styles.delay4} ${styles.opacityH} circle12`}
            opacity='0.3'
            cx='1339'
            cy='29.6992'
            r='3'
            transform='rotate(180 1339 29.6992)'
            fill='#162029'
          />
          <circle
            className={`${styles.delay1} ${styles.opacityH} circle12`}
            opacity='0.3'
            cx='1369'
            cy='21.6992'
            r='3'
            transform='rotate(180 1369 21.6992)'
            fill='#162029'
          />
          <circle
            className={`${styles.delay2} ${styles.opacityH} circle12`}
            opacity='0.4'
            cx='1359'
            cy='21.6992'
            r='3'
            transform='rotate(180 1359 21.6992)'
            fill='#162029'
          />
          <circle
            className={`${styles.delay3} ${styles.opacityH} circle12`}
            opacity='0.3'
            cx='1349'
            cy='21.6992'
            r='3'
            transform='rotate(180 1349 21.6992)'
            fill='#162029'
          />
          <circle
            className={`${styles.delay4} ${styles.opacityH} circle12`}
            opacity='0.3'
            cx='1339'
            cy='21.6992'
            r='3'
            transform='rotate(180 1339 21.6992)'
            fill='#162029'
          />
          <g opacity='0.4'>
            <circle
              className={`${styles.delay1} ${styles.opacity} circle12`}
              cx='1306'
              cy='210.699'
              r='2.25'
              transform='rotate(180 1306 210.699)'
              stroke='#FF6969'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle12`}
              cx='1306'
              cy='174.699'
              r='2.25'
              transform='rotate(180 1306 174.699)'
              stroke='#FF6969'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay3} ${styles.line}  line12`}
              d='M1306 208.199C1306 182.599 1306 176.199 1306 176.199'
              stroke='#FF6969'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay2} ${styles.opacity} circle12`}
              cx='1318'
              cy='202.699'
              r='2.25'
              transform='rotate(180 1318 202.699)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle12`}
              cx='1318'
              cy='166.699'
              r='2.25'
              transform='rotate(180 1318 166.699)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay4} ${styles.line}  line12`}
              d='M1318 200.199C1318 174.599 1318 168.199 1318 168.199'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay1} ${styles.opacity} circle12`}
              cx='1330'
              cy='210.699'
              r='2.25'
              transform='rotate(180 1330 210.699)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle12`}
              cx='1330'
              cy='166.699'
              r='2.25'
              transform='rotate(180 1330 166.699)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay3} ${styles.line}  line12`}
              d='M1330 207.699C1330 175.699 1330 167.699 1330 167.699'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay2} ${styles.opacity} circle12`}
              cx='1259'
              cy='25.6992'
              r='2.25'
              transform='rotate(90 1259 25.6992)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle12`}
              cx='1215'
              cy='25.6992'
              r='2.25'
              transform='rotate(90 1215 25.6992)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay4} ${styles.line}  line12`}
              d='M1256 25.6992C1224.8 25.6992 1217 25.6992 1217 25.6992'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay1} ${styles.opacity} circle23`}
              cx='1017'
              cy='560'
              r='2.25'
              transform='rotate(90 1017 560)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle23`}
              cx='973'
              cy='560'
              r='2.25'
              transform='rotate(90 973 560)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay3} ${styles.line}  line23`}
              d='M1014 560C982.8 560 975 560 975 560'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay2} ${styles.opacity} circle12`}
              cx='1427'
              cy='286.699'
              r='2.25'
              transform='rotate(180 1427 286.699)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle12`}
              cx='1427'
              cy='242.699'
              r='2.25'
              transform='rotate(180 1427 242.699)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay4} ${styles.line}  line12`}
              d='M1427 283.699C1427 251.699 1427 243.699 1427 243.699'
              stroke='#162029'
            />
          </g>
          <path
            className={`${styles.delay3} ${styles.opacityH} circle11`}
            opacity='0.4'
            d='M1008 258.699L1008 231.699'
            stroke='#162029'
          />
          <path
            className={`${styles.delay2} ${styles.opacityH} circle11`}
            opacity='0.4'
            d='M993 243.699L993 216.699'
            stroke='#162029'
          />
          <path
            className={`${styles.delay1} ${styles.opacityH} circle11`}
            opacity='0.4'
            d='M999 258.699L999 210.699'
            stroke='#162029'
          />
          <path
            className={`${styles.delay3} ${styles.opacityH} circle8`}
            opacity='0.4'
            d='M408 405.699L408 348.699'
            stroke='#162029'
          />
          <path
            className={`${styles.delay2} ${styles.opacityH} circle8`}
            opacity='0.4'
            d='M393 360.699L393 333.699'
            stroke='#162029'
          />
          <path
            className={`${styles.delay1} ${styles.opacityH} circle8`}
            opacity='0.4'
            d='M399 375.699L399 327.699'
            stroke='#162029'
          />
          <path
            className={`${styles.delay3} ${styles.opacityH} circle12`}
            opacity='0.4'
            d='M1351 276H1245'
            stroke='url(#paint59_linear_110_2)'
          />
          <path
            className={`${styles.delay2} ${styles.opacity} circle12`}
            d='M1327 284L1278 284'
            stroke='url(#paint60_linear_110_2)'
          />
          <path
            className={`${styles.delay1} ${styles.opacity} circle12`}
            d='M1340 268H1234'
            stroke='url(#paint61_linear_110_2)'
          />
          <path
            className={`${styles.delay3} ${styles.opacityH} circle11`}
            opacity='0.4'
            d='M1190 57.6992L1190 42.6992'
            stroke='url(#paint62_linear_110_2)'
          />
          <path
            className={`${styles.delay2} ${styles.opacityH} circle11`}
            opacity='0.4'
            d='M1194 57.6992L1194 37.6992'
            stroke='url(#paint63_linear_110_2)'
          />
          <path
            className={`${styles.delay1} ${styles.opacityH} circle11`}
            opacity='0.4'
            d='M1186 57.6992L1186 46.6992'
            stroke='url(#paint64_linear_110_2)'
          />
          <path
            className={`${styles.delay3} ${styles.line}  line11`}
            d='M1133.5 235L1133.5 315.5L1113.5 336L1107 336'
            stroke='url(#paint65_linear_110_2)'
          />
          <circle
            className={`${styles.delay2} ${styles.opacity} circle11`}
            cx='1105'
            cy='336'
            r='2.25'
            transform='rotate(90 1105 336)'
            stroke='#ACCAD6'
            strokeWidth='1.5'
          />
          <circle
            className={`${styles.delay1} ${styles.opacity} circle11`}
            cx='1133'
            cy='233'
            r='2.25'
            transform='rotate(90 1133 233)'
            stroke='#FD6C6D'
            strokeWidth='1.5'
          />
          <g opacity='0.4'>
            <circle
              className={`${styles.delay3} ${styles.opacity} circle11`}
              cx='1162'
              cy='290'
              r='2.25'
              transform='rotate(90 1162 290)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay4} ${styles.opacity} circle11`}
              cx='1145'
              cy='290'
              r='2.25'
              transform='rotate(90 1145 290)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay5} ${styles.line}  line11`}
              d='M1159 290C1149.4 290 1147 290 1147 290'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay4} ${styles.line}  line11`}
              d='M1142.5 214.5L1142.5 264L1156 275L1175 275'
              stroke='#162029'
            />
            <path
              className={`${styles.delay3} ${styles.opacity} circle11`}
              d='M1180 274.988C1180 275.582 1179.83 276.163 1179.5 276.658C1179.17 277.153 1178.7 277.539 1178.16 277.768C1177.61 277.997 1177 278.058 1176.42 277.944C1175.84 277.829 1175.3 277.545 1174.88 277.125C1174.46 276.706 1174.18 276.172 1174.06 275.59C1173.94 275.007 1174 274.404 1174.23 273.855C1174.45 273.306 1174.84 272.837 1175.33 272.506C1175.83 272.176 1176.41 272 1177 272C1177.79 272 1178.55 272.314 1179.12 272.875C1179.68 273.435 1180 274.195 1180 274.988ZM1175.29 274.988C1175.29 275.329 1175.39 275.663 1175.58 275.947C1175.77 276.231 1176.03 276.453 1176.35 276.585C1176.66 276.716 1177.01 276.751 1177.34 276.685C1177.68 276.619 1177.99 276.455 1178.23 276.215C1178.47 275.974 1178.63 275.666 1178.7 275.332C1178.76 274.998 1178.73 274.652 1178.6 274.337C1178.46 274.023 1178.24 273.755 1177.96 273.567C1177.67 273.379 1177.34 273.28 1177 273.282C1176.55 273.282 1176.11 273.462 1175.79 273.782C1175.47 274.102 1175.29 274.536 1175.29 274.988Z'
              fill='#162029'
            />
            <path
              className={`${styles.delay2} ${styles.opacity} circle11`}
              d='M1145 211.988C1145 212.582 1144.83 213.163 1144.5 213.658C1144.17 214.153 1143.7 214.539 1143.16 214.768C1142.61 214.997 1142 215.058 1141.42 214.944C1140.84 214.829 1140.3 214.545 1139.88 214.125C1139.46 213.706 1139.18 213.172 1139.06 212.59C1138.94 212.007 1139 211.404 1139.23 210.855C1139.45 210.306 1139.84 209.837 1140.33 209.506C1140.83 209.176 1141.41 209 1142 209C1142.79 209 1143.55 209.314 1144.12 209.875C1144.68 210.435 1145 211.195 1145 211.988ZM1140.29 211.988C1140.29 212.329 1140.39 212.663 1140.58 212.947C1140.77 213.231 1141.03 213.453 1141.35 213.585C1141.66 213.716 1142.01 213.751 1142.34 213.685C1142.68 213.619 1142.99 213.455 1143.23 213.215C1143.47 212.974 1143.63 212.666 1143.7 212.332C1143.76 211.998 1143.73 211.652 1143.6 211.337C1143.46 211.023 1143.24 210.755 1142.96 210.567C1142.67 210.379 1142.34 210.28 1142 210.282C1141.55 210.282 1141.11 210.462 1140.79 210.782C1140.47 211.102 1140.29 211.536 1140.29 211.988Z'
              fill='#162029'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay5} ${styles.line}  line12`}
              d='M1183.5 17.6992L1284 17.6992L1296 26.6992L1296 38.1992'
              stroke='#162029'
            />
            <path
              className={`${styles.delay4} ${styles.opacity} circle12`}
              d='M1295.99 43.6992C1296.58 43.7015 1297.16 43.5276 1297.66 43.1993C1298.15 42.8711 1298.54 42.4034 1298.77 41.8554C1299 41.3075 1299.06 40.7039 1298.94 40.1212C1298.83 39.5385 1298.54 39.0028 1298.13 38.5821C1297.71 38.1613 1297.17 37.8744 1296.59 37.7577C1296.01 37.641 1295.4 37.6997 1294.85 37.9265C1294.31 38.1532 1293.84 38.5377 1293.51 39.0313C1293.18 39.5249 1293 40.1054 1293 40.6992C1293 41.4928 1293.31 42.2541 1293.87 42.8164C1294.43 43.3786 1295.19 43.6961 1295.99 43.6992ZM1295.99 38.9933C1296.33 38.991 1296.66 39.09 1296.95 39.2779C1297.23 39.4657 1297.45 39.7339 1297.58 40.0482C1297.72 40.3625 1297.75 40.7089 1297.69 41.0431C1297.62 41.3774 1297.46 41.6846 1297.21 41.9255C1296.97 42.1664 1296.67 42.3302 1296.33 42.3961C1296 42.462 1295.65 42.427 1295.34 42.2956C1295.02 42.1641 1294.75 41.9421 1294.57 41.6579C1294.38 41.3736 1294.28 41.0399 1294.28 40.6992C1294.28 40.2468 1294.46 39.8129 1294.78 39.493C1295.1 39.173 1295.54 38.9933 1295.99 38.9933Z'
              fill='#162029'
            />
            <path
              className={`${styles.delay3} ${styles.opacity} circle12`}
              d='M1180.99 20.6992C1181.58 20.7015 1182.16 20.5276 1182.66 20.1993C1183.15 19.8711 1183.54 19.4034 1183.77 18.8554C1184 18.3075 1184.06 17.7039 1183.94 17.1212C1183.83 16.5385 1183.54 16.0028 1183.13 15.5821C1182.71 15.1613 1182.17 14.8744 1181.59 14.7577C1181.01 14.641 1180.4 14.6997 1179.85 14.9265C1179.31 15.1532 1178.84 15.5377 1178.51 16.0313C1178.18 16.5249 1178 17.1054 1178 17.6992C1178 18.4928 1178.31 19.2541 1178.87 19.8164C1179.43 20.3786 1180.19 20.6961 1180.99 20.6992ZM1180.99 15.9933C1181.33 15.991 1181.66 16.09 1181.95 16.2779C1182.23 16.4657 1182.45 16.7339 1182.58 17.0482C1182.72 17.3625 1182.75 17.7089 1182.69 18.0431C1182.62 18.3774 1182.46 18.6846 1182.21 18.9255C1181.97 19.1664 1181.67 19.3302 1181.33 19.3961C1181 19.462 1180.65 19.427 1180.34 19.2956C1180.02 19.1641 1179.75 18.9421 1179.57 18.6579C1179.38 18.3736 1179.28 18.0399 1179.28 17.6992C1179.28 17.2468 1179.46 16.8129 1179.78 16.493C1180.1 16.173 1180.54 15.9933 1180.99 15.9933Z'
              fill='#162029'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay3} ${styles.line}  line22`}
              d='M941.5 552L1042 552L1054 561L1054 572.5'
              stroke='#162029'
            />
            <path
              className={`${styles.delay2} ${styles.opacity} circle22`}
              d='M1053.99 578C1054.58 578.002 1055.16 577.828 1055.66 577.5C1056.15 577.172 1056.54 576.704 1056.77 576.156C1057 575.608 1057.06 575.005 1056.94 574.422C1056.83 573.839 1056.54 573.304 1056.13 572.883C1055.71 572.462 1055.17 572.175 1054.59 572.059C1054.01 571.942 1053.4 572.001 1052.85 572.227C1052.31 572.454 1051.84 572.838 1051.51 573.332C1051.18 573.826 1051 574.406 1051 575C1051 575.794 1051.31 576.555 1051.87 577.117C1052.43 577.679 1053.19 577.997 1053.99 578ZM1053.99 573.294C1054.33 573.292 1054.66 573.391 1054.95 573.579C1055.23 573.767 1055.45 574.035 1055.58 574.349C1055.72 574.663 1055.75 575.01 1055.69 575.344C1055.62 575.678 1055.46 575.985 1055.21 576.226C1054.97 576.467 1054.67 576.631 1054.33 576.697C1054 576.763 1053.65 576.728 1053.34 576.596C1053.02 576.465 1052.75 576.243 1052.57 575.959C1052.38 575.674 1052.28 575.341 1052.28 575C1052.28 574.548 1052.46 574.114 1052.78 573.794C1053.1 573.474 1053.54 573.294 1053.99 573.294Z'
              fill='#162029'
            />
            <path
              className={`${styles.delay1} ${styles.opacity} circle22`}
              d='M938.988 555C939.582 555.002 940.163 554.828 940.658 554.5C941.153 554.172 941.539 553.704 941.768 553.156C941.997 552.608 942.058 552.005 941.944 551.422C941.829 550.839 941.545 550.304 941.125 549.883C940.706 549.462 940.172 549.175 939.59 549.059C939.007 548.942 938.404 549.001 937.855 549.227C937.306 549.454 936.837 549.838 936.506 550.332C936.176 550.826 936 551.406 936 552C936 552.794 936.314 553.555 936.875 554.117C937.435 554.679 938.195 554.997 938.988 555ZM938.988 550.294C939.329 550.292 939.663 550.391 939.947 550.579C940.231 550.767 940.453 551.035 940.585 551.349C940.716 551.663 940.751 552.01 940.685 552.344C940.619 552.678 940.455 552.985 940.215 553.226C939.974 553.467 939.666 553.631 939.332 553.697C938.998 553.763 938.652 553.728 938.337 553.596C938.023 553.465 937.755 553.243 937.567 552.959C937.379 552.674 937.28 552.341 937.282 552C937.282 551.548 937.462 551.114 937.782 550.794C938.102 550.474 938.536 550.294 938.988 550.294Z'
              fill='#162029'
            />
          </g>
          <g opacity='0.4'>
            <circle
              cx='919'
              cy='-1.30078'
              r='2.25'
              transform='rotate(90 919 -1.30078)'
              stroke='#162029'
              strokeWidth='1.5'
              className={`${styles.delay3} ${styles.opacity} circle10`}
            />
            <circle
              cx='878'
              cy='-1.30078'
              r='2.25'
              transform='rotate(90 878 -1.30078)'
              stroke='#162029'
              strokeWidth='1.5'
              className={`${styles.delay2} ${styles.opacity} circle10`}
            />
          </g>
          <g opacity='0.4'>
            <circle
              className={`${styles.delay2} ${styles.opacity} circle12`}
              cx='1221'
              cy='184.699'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle12`}
              cx='1221'
              cy='201.699'
              r='2.25'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay4} ${styles.line}  line12`}
              d='M1221 187.699C1221 197.299 1221 199.699 1221 199.699'
              stroke='#162029'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay3} ${styles.line}  line10`}
              d='M922.46 298.123L916.881 292.544V284.653L916.874 276.754L916.881 268.856V260.965L916.874 253.066L916.881 245.168V237.277V229.385L916.874 221.487L916.874 213.596V205.704L911.295 200.125L905.708 194.539L900.122 188.953L894.543 183.374L888.964 177.795L888.964 169.889L888.964 161.998L888.964 154.107L888.971 146.208L888.971 138.317L888.964 130.419V122.527L888.964 114.636L888.964 106.731L888.964 98.8392L888.964 90.9479L888.964 83.0566L888.971 75.1582L888.964 67.2598L894.543 61.6808L900.129 56.0946L905.708 50.5156L911.295 44.9294L916.874 39.3503L922.46 44.9365'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay2} ${styles.opacity} circle10`}
              d='M923.039 48.812C922.603 48.7251 922.202 48.5108 921.887 48.1962C921.465 47.7742 921.228 47.2019 921.228 46.6052C921.228 46.0085 921.465 45.4362 921.887 45.0142C922.202 44.6995 922.603 44.4852 923.039 44.3984C923.476 44.3116 923.928 44.3562 924.339 44.5265C924.75 44.6968 925.102 44.9851 925.349 45.3552C925.596 45.7252 925.728 46.1602 925.728 46.6052C925.728 47.0502 925.596 47.4852 925.349 47.8552C925.102 48.2252 924.75 48.5136 924.339 48.6839L924.626 49.3768L924.339 48.6839C923.928 48.8542 923.476 48.8988 923.039 48.812Z'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay1} ${styles.opacity} circle10`}
              d='M923.746 302.663C923.31 302.576 922.909 302.362 922.594 302.047C922.172 301.626 921.935 301.053 921.935 300.457C921.935 299.86 922.172 299.287 922.594 298.866C922.909 298.551 923.31 298.337 923.746 298.25C924.183 298.163 924.635 298.207 925.046 298.378C925.457 298.548 925.809 298.836 926.056 299.206C926.303 299.576 926.435 300.012 926.435 300.457C926.435 300.902 926.303 301.337 926.056 301.707C925.809 302.077 925.457 302.365 925.046 302.535L925.333 303.228L925.046 302.535C924.635 302.706 924.183 302.75 923.746 302.663Z'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <path
            className={`${styles.delay2} ${styles.line}  line11`}
            d='M1112 388.699C1092.8 388.699 1088 388.699 1088 388.699'
            stroke='url(#paint66_linear_110_2)'
          />
          <circle
            className={`${styles.delay1} ${styles.opacity} circle11`}
            cx='3'
            cy='3'
            r='2.25'
            transform='matrix(-4.37114e-08 -1 -1 4.37114e-08 1117 391.699)'
            stroke='#A5CEDB'
            strokeWidth='1.5'
          />
          <circle
            className={`${styles.delay1} ${styles.opacity} circle11`}
            cx='3'
            cy='3'
            r='2.25'
            transform='matrix(-4.37114e-08 -1 -1 4.37114e-08 1089 391.699)'
            stroke='#9C9B97'
            strokeWidth='1.5'
          />
          <g opacity='0.4'>
            <path
              className={`${styles.delay4} ${styles.line}  line12`}
              d='M1282 338.699C1235.6 338.699 1224 338.699 1224 338.699'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle12`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(-4.37114e-08 -1 -1 4.37114e-08 1287 341.699)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle12`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(-4.37114e-08 -1 -1 4.37114e-08 1225 341.699)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay5} ${styles.line}  line12`}
              d='M1298 324.979L1292.41 330.559L1284.52 330.559L1276.62 330.559L1268.73 330.559L1260.83 330.559L1252.94 330.559L1245.04 330.559L1237.15 330.559L1229.25 330.559L1221.36 330.559L1213.46 330.559L1205.57 330.559L1197.68 330.559L1189.78 330.559L1184.2 336.139L1178.62 341.719L1173.03 347.309L1167.45 352.889L1161.87 358.469L1156.29 364.049L1150.7 369.639L1145.12 375.219L1139.54 380.799L1133.96 386.379L1128.38 391.959L1122.79 397.539L1114.9 397.539L1107 397.539L1099.11 397.539L1091.21 397.539L1083.32 397.539L1075.43 397.539L1069.84 403.129'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay4} ${styles.opacity} circle12`}
              d='M1066.55 404.294C1066.63 403.86 1066.83 403.459 1067.14 403.14C1067.35 402.922 1067.6 402.748 1067.88 402.629C1068.16 402.51 1068.46 402.449 1068.76 402.449C1069.06 402.449 1069.36 402.51 1069.64 402.629C1069.92 402.748 1070.17 402.922 1070.38 403.14C1070.69 403.459 1070.89 403.86 1070.97 404.294C1071.05 404.727 1071 405.175 1070.83 405.581C1070.66 405.987 1070.37 406.333 1070 406.576C1069.63 406.82 1069.2 406.949 1068.76 406.949C1068.32 406.949 1067.89 406.82 1067.52 406.576C1067.15 406.333 1066.86 405.987 1066.69 405.581C1066.52 405.175 1066.47 404.727 1066.55 404.294Z'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay3} ${styles.opacity} circle12`}
              d='M1297.79 322.294C1297.87 321.86 1298.07 321.459 1298.38 321.141C1298.59 320.922 1298.84 320.748 1299.12 320.629C1299.4 320.511 1299.7 320.449 1300 320.449C1300.3 320.449 1300.6 320.511 1300.88 320.629C1301.16 320.748 1301.41 320.922 1301.62 321.141C1301.93 321.459 1302.13 321.86 1302.21 322.294C1302.29 322.728 1302.24 323.175 1302.07 323.581C1301.9 323.987 1301.61 324.333 1301.24 324.577C1300.87 324.82 1300.44 324.949 1300 324.949C1299.56 324.949 1299.13 324.82 1298.76 324.577C1298.39 324.333 1298.1 323.987 1297.93 323.581C1297.76 323.175 1297.71 322.728 1297.79 322.294Z'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay5} ${styles.line}  line12`}
              d='M1211 186.699C1211 233.099 1211 244.699 1211 244.699'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay4} ${styles.opacity} circle12`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(-1 0 0 1 1214 181.699)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle12`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(-1 0 0 1 1214 243.699)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay3} ${styles.line}  line12`}
              d='M1221 215.699C1221 262.099 1221 273.699 1221 273.699'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle12`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(-1 0 0 1 1224 210.699)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay1} ${styles.opacity} circle12`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(-1 0 0 1 1224 272.699)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.3'>
            <path
              className={`${styles.delay4} ${styles.line}  line12`}
              d='M1233 443.199H1299L1361 381.199'
              stroke='black'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle12`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(-4.37114e-08 -1 -1 4.37114e-08 1366 382.699)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle12`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(-4.37114e-08 -1 -1 4.37114e-08 1234 445.699)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.3'>
            <path
              className={`${styles.delay3} ${styles.line}  line11`}
              d='M1091.44 308.396L1044.77 261.727L1044.77 174.046'
              stroke='black'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle11`}
              cx='1044.42'
              cy='171.571'
              r='2.25'
              transform='rotate(-45 1044.42 171.571)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle11`}
              cx='1093.21'
              cy='309.457'
              r='2.25'
              transform='rotate(-45 1093.21 309.457)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay3} ${styles.line}  line12`}
              d='M1227 435.199H1293L1355 373.199'
              stroke='black'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle12`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(-4.37114e-08 -1 -1 4.37114e-08 1360 374.699)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay1} ${styles.opacity} circle12`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(-4.37114e-08 -1 -1 4.37114e-08 1228 437.699)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay3} ${styles.line}  line12`}
              d='M1407.25 445.043C1383.25 469.043 1377.25 475.043 1377.25 475.043'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle12`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(-0.707107 -0.707107 -0.707107 0.707107 1412.92 443.457)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay1} ${styles.opacity} circle12`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(-0.707107 -0.707107 -0.707107 0.707107 1380.08 476.457)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay4} ${styles.line}  line12`}
              d='M1410.25 456.043C1393.45 472.843 1389.25 477.043 1389.25 477.043'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle12`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(-0.707107 -0.707107 -0.707107 0.707107 1415.92 454.457)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle12`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(-0.707107 -0.707107 -0.707107 0.707107 1392.08 478.457)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay5} ${styles.line}  line12`}
              d='M1281.87 425.699C1258.11 425.699 1252.17 425.699 1252.17 425.699'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay4} ${styles.opacity} circle12`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(4.37114e-08 -1 -1 -4.37114e-08 1287 428.586)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle12`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(4.37114e-08 -1 -1 -4.37114e-08 1253.17 428.699)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay3} ${styles.line}  line12`}
              d='M1245 33.6992C1230.6 33.6992 1227 33.6992 1227 33.6992'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle12`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(4.37114e-08 -1 -1 -4.37114e-08 1250 36.6428)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay1} ${styles.opacity} circle12`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(4.37114e-08 -1 -1 -4.37114e-08 1228.43 36.6992)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay4} ${styles.line}  line23`}
              d='M1003 568C988.6 568 985 568 985 568'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle23`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(4.37114e-08 -1 -1 -4.37114e-08 1008 570.944)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay2} ${styles.opacity} circle23`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(4.37114e-08 -1 -1 -4.37114e-08 986.429 571)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.3'>
            <path
              className={`${styles.delay5} ${styles.line}  line12`}
              d='M1432.34 447.031C1399.53 479.84 1391.33 488.043 1391.33 488.043'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay4} ${styles.opacity} circle12`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(-0.707107 -0.707107 -0.707107 0.707107 1438 445.616)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle12`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(-0.707107 -0.707107 -0.707107 0.707107 1394.16 489.457)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.3'>
            <path
              className={`${styles.delay5} ${styles.line}  line12`}
              d='M1335.34 376.031C1302.53 408.84 1294.33 417.043 1294.33 417.043'
              stroke='#162029'
            />
            <circle
              className={`${styles.delay4} ${styles.opacity} circle12`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(-0.707107 -0.707107 -0.707107 0.707107 1341 374.616)'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <circle
              className={`${styles.delay3} ${styles.opacity} circle12`}
              cx='3'
              cy='3'
              r='2.25'
              transform='matrix(-0.707107 -0.707107 -0.707107 0.707107 1297.16 418.457)'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.3'>
            <path
              className={`${styles.delay3} ${styles.line}  line11`}
              d='M1232 81.3092L1226.41 75.7292L1218.52 75.7292L1210.62 75.7292L1202.73 75.7292L1194.83 75.7292L1186.94 75.7293L1179.04 75.7293L1171.15 75.7293L1163.26 75.7293L1155.36 75.7293L1147.47 75.7293L1139.57 75.7293L1131.68 75.7293L1123.78 75.7293L1115.89 75.7293L1107.99 75.7293L1100.1 75.7293L1092.2 75.7293L1084.31 75.7293L1076.41 75.7293L1068.52 75.7293L1060.62 75.7293L1055.04 81.3093L1047.15 81.3093L1039.26 81.3093L1031.36 81.3093L1023.46 81.3093L1015.57 81.3093L1007.67 81.3093L999.78 81.3093L991.89 81.3093L983.99 81.3093L976.1 81.3093L968.2 81.3093L960.31 81.3093L952.41 81.3093L944.52 81.3093L936.62 81.3093L928.73 81.3093L923.15 86.8993L923.15 94.7893L928.73 100.379L934.31 105.959L939.89 111.539L939.89 119.429L939.89 127.329L939.89 135.219L939.89 143.119L945.47 148.699L953.37 148.699L961.26 148.699L969.16 148.699L977.05 148.699L977.05 140.799L971.47 135.219L965.89 129.639L960.31 124.059L954.72 118.479L949.14 112.889L943.56 107.309L937.98 101.729L932.4 96.1493L926.81 90.5693'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay2} ${styles.opacity} circle11`}
              d='M928.21 89.1692C927.933 88.8841 927.576 88.6883 927.187 88.6067C926.797 88.5251 926.393 88.5616 926.024 88.7113C925.655 88.8611 925.34 89.1174 925.118 89.4475C924.896 89.7775 924.777 90.1663 924.777 90.5642C924.777 90.9621 924.896 91.3509 925.118 91.681C925.34 92.011 925.655 92.2673 926.024 92.4171C926.393 92.5669 926.797 92.6033 927.187 92.5217C927.576 92.4402 927.933 92.2443 928.21 91.9592C928.574 91.5858 928.777 91.0853 928.777 90.5642C928.777 90.0431 928.574 89.5426 928.21 89.1692Z'
              fill='#162029'
            />
          </g>
          <g opacity='0.3'>
            <path
              className={`${styles.delay3} ${styles.line}  line12`}
              d='M1362.41 583.699L1362.41 575.808L1362.41 567.916L1362.41 560.025L1362.41 552.127L1362.41 544.228V536.337L1362.41 528.446L1362.41 520.554L1362.41 512.649L1362.41 504.758L1362.41 496.866L1362.41 488.968L1362.41 481.07L1362.41 473.178L1367.99 467.599L1373.58 462.013L1379.16 456.434L1384.74 450.848L1390.32 445.269L1395.91 439.683L1401.49 434.104V426.212L1395.9 420.626L1390.32 415.047L1384.74 409.468L1384.74 401.57L1384.74 393.671L1384.74 385.78L1384.74 377.882L1379.16 372.303L1373.57 366.716L1367.99 361.137L1362.41 355.558L1356.83 349.972L1356.83 277.271L1356.83 269.38L1356.83 261.482L1356.83 253.59L1356.83 245.699'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay2} ${styles.opacity} circle12`}
              d='M1359.34 244.132C1359.34 243.633 1359.2 243.146 1358.92 242.731C1358.64 242.316 1358.25 241.993 1357.79 241.802C1357.33 241.611 1356.82 241.56 1356.33 241.658C1355.84 241.755 1355.39 241.995 1355.04 242.347C1354.69 242.7 1354.45 243.149 1354.35 243.638C1354.25 244.127 1354.3 244.634 1354.5 245.095C1354.69 245.556 1355.01 245.949 1355.42 246.226C1355.84 246.502 1356.33 246.65 1356.83 246.649C1357.16 246.652 1357.49 246.588 1357.79 246.462C1358.1 246.337 1358.38 246.151 1358.61 245.917C1358.85 245.683 1359.03 245.405 1359.16 245.098C1359.28 244.792 1359.35 244.463 1359.34 244.132Z'
              fill='#162029'
            />
          </g>
          <g opacity='0.3'>
            <path
              className={`${styles.delay5} ${styles.line}  line12`}
              d='M1461.84 85.4339L1456.25 91.0139L1450.67 96.5939L1445.09 102.174L1439.51 107.754L1433.93 113.344L1428.34 118.924L1422.76 124.504L1417.18 130.084L1411.59 135.674L1406.01 141.254L1400.43 146.834L1394.85 152.414L1389.27 158.004L1383.69 163.584L1383.69 171.474L1383.69 179.374L1383.69 187.264L1383.69 195.164L1383.69 203.054L1389.27 208.634L1389.27 216.534L1389.27 224.424L1389.27 232.324L1389.27 240.214L1389.27 248.114L1389.27 256.004L1389.27 263.904L1389.27 271.794L1389.27 279.694L1389.27 287.584L1394.85 293.164L1400.43 298.754L1406.01 304.334L1406.01 312.224L1406.01 320.124L1406.01 328.014L1406.01 335.914L1406.01 343.804L1406.01 351.704L1400.43 357.284L1394.85 362.864L1389.27 368.444L1383.69 374.034L1378.1 379.614L1372.52 385.194L1366.94 390.774L1361.36 396.354L1355.77 401.944L1350.19 407.524L1344.61 413.104L1339.02 418.684L1333.44 424.274L1327.86 429.854L1322.28 435.434L1316.7 441.014L1311.11 446.594L1305.53 452.184L1297.63 452.184L1289.74 452.184L1281.85 452.184L1273.95 452.184L1266.06 452.184L1258.16 452.184L1250.27 452.184L1242.37 452.184L1234.48 452.184L1226.58 452.184L1218.69 452.184L1213.11 457.764'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay4} ${styles.opacity} circle12`}
              d='M1211.74 456.404C1211.38 456.766 1211.17 457.257 1211.17 457.769C1211.17 458.281 1211.38 458.772 1211.74 459.134C1212.1 459.496 1212.59 459.699 1213.1 459.699C1213.62 459.699 1214.11 459.496 1214.47 459.134C1214.83 458.772 1215.04 458.281 1215.04 457.769C1215.04 457.257 1214.83 456.766 1214.47 456.404C1214.11 456.042 1213.62 455.838 1213.1 455.838C1212.59 455.838 1212.1 456.042 1211.74 456.404Z'
              fill='#162029'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay3} ${styles.line}  line11`}
              d='M1032.41 129.699L1032.41 163.826L1032.41 171.717L1032.41 179.609L1032.41 187.507L1032.41 195.405L1032.41 203.297L1032.41 211.188L1032.41 219.079L1032.41 226.985L1032.41 234.876L1032.41 242.767L1032.41 250.666L1032.41 258.564L1032.41 266.456L1037.99 272.035L1043.58 277.621L1049.16 283.2L1054.74 288.786L1060.32 294.365L1065.91 299.951L1071.49 305.53L1071.49 313.422L1065.9 319.008L1060.32 324.587L1054.74 330.166L1054.74 338.064L1054.74 345.963L1054.74 353.854L1054.74 361.752L1049.16 367.331L1043.57 372.918L1037.99 378.497L1032.41 384.076L1026.83 389.662L1026.83 397.56L1026.83 405.451L1026.83 413.35L1026.83 421.241L1026.83 429.133'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay2} ${styles.opacity} circle11`}
              d='M1029.34 429.133C1029.34 429.631 1029.2 430.119 1028.92 430.534C1028.64 430.948 1028.25 431.272 1027.79 431.463C1027.33 431.654 1026.82 431.704 1026.33 431.607C1025.84 431.51 1025.39 431.27 1025.04 430.917C1024.69 430.565 1024.45 430.115 1024.35 429.626C1024.25 429.137 1024.3 428.63 1024.5 428.17C1024.69 427.709 1025.01 427.316 1025.43 427.039C1025.84 426.762 1026.33 426.615 1026.83 426.615C1027.16 426.613 1027.49 426.677 1027.79 426.802C1028.1 426.928 1028.38 427.113 1028.61 427.347C1028.85 427.582 1029.03 427.86 1029.16 428.167C1029.28 428.473 1029.35 428.801 1029.34 429.133Z'
              fill='#162029'
            />
          </g>
          <g opacity='0.15'>
            <path
              className={`${styles.delay4} ${styles.line}  line11`}
              d='M1314.99 165.64L1309.41 160.06L1303.82 154.48L1298.24 148.89L1292.66 143.31L1287.08 137.73L1281.5 132.15L1275.92 126.57L1270.33 120.98L1264.75 115.4L1259.17 109.82L1253.58 104.23L1248 98.6499H1240.11H1232.21H1224.32H1216.42H1208.53H1200.63H1192.74H1184.84H1176.95H1169.06H1161.16L1155.58 93.0699H1147.68H1139.79H1131.89H1124H1116.11H1108.21H1100.32H1092.42H1084.53H1076.63H1068.74H1060.84H1052.95H1045.06H1037.16L1031.58 87.4899L1025.99 81.9099L1020.41 76.3199L1014.83 70.7399L1009.25 65.1599L1003.66 59.5799L998.08 53.9899L992.5 48.4099L986.92 42.8299L981.34 37.2499L975.75 31.6699L970.17 26.0799L964.59 20.4999L959.01 14.9199L953.42 9.3299L947.84 3.74989L942.26 -1.83011L936.68 -7.41011L931.09 -13.0001H923.2H915.31H907.41H899.51H891.62H883.73H875.83H867.94L862.35 -7.41011L856.77 -1.83011L851.19 3.74989L845.61 9.3299L840.02 14.9199L834.44 20.4999L828.86 26.0799L823.28 31.6699L817.7 37.2499L812.11 42.8299L806.53 48.4099L800.95 53.9899L795.36 59.5799L789.78 65.1599L784.2 70.7399L778.62 76.3199H770.72H762.83H754.94H747.04H739.15H731.25H723.35H715.46H707.57H699.67H691.78H683.88H675.99H668.09H660.2H652.3H644.41H636.51H628.62L623.04 70.7399L617.45 65.1599L611.87 59.5799L606.29 53.9899L600.71 48.4099L595.12 42.8299L589.54 37.2499V29.3499'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay3} ${styles.opacity} circle11`}
              d='M592.08 29.3499C592.08 28.8475 591.931 28.3564 591.652 27.9387C591.373 27.521 590.976 27.1955 590.512 27.0032C590.048 26.811 589.537 26.7607 589.044 26.8587C588.552 26.9567 588.099 27.1986 587.744 27.5538C587.389 27.9091 587.147 28.3616 587.049 28.8544C586.951 29.3471 587.001 29.8578 587.193 30.3219C587.386 30.786 587.711 31.1827 588.129 31.4618C588.547 31.7409 589.038 31.8899 589.54 31.8899C590.214 31.8899 590.86 31.6223 591.336 31.1459C591.812 30.6696 592.08 30.0235 592.08 29.3499Z'
              fill='#162029'
            />
          </g>
          <g opacity='0.2'>
            <path
              className={`${styles.delay2} ${styles.line}  line10`}
              d='M972.484 364L972.484 356.1L972.484 348.21L972.484 340.32L966.904 334.74L961.324 329.15L955.734 323.57L950.154 317.99L944.574 312.4L944.574 304.51L944.574 296.61L944.574 288.72L944.574 280.83L944.574 272.93L944.574 265.04L944.574 257.14L944.574 249.24L944.574 241.35L944.574 233.46'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay1} ${styles.opacity} circle10`}
              d='M945.006 228.751C945.591 228.735 946.159 228.94 946.599 229.325C947.016 229.763 947.25 230.345 947.25 230.951C947.25 231.562 947.012 232.149 946.587 232.587C946.149 233.012 945.562 233.25 944.951 233.25C944.345 233.25 943.763 233.016 943.325 232.599C942.94 232.159 942.735 231.591 942.751 231.006C942.767 230.413 943.01 229.849 943.429 229.429C943.849 229.01 944.413 228.767 945.006 228.751Z'
              stroke='#162029'
              strokeWidth='1.5'
            />
            <path
              className={`${styles.delay1} ${styles.opacity} circle10`}
              d='M972.006 364.751C972.591 364.735 973.159 364.94 973.599 365.325C974.016 365.763 974.25 366.345 974.25 366.951C974.25 367.562 974.012 368.149 973.587 368.587C973.149 369.012 972.562 369.25 971.951 369.25C971.345 369.25 970.763 369.016 970.325 368.599C969.94 368.159 969.735 367.591 969.751 367.006C969.767 366.413 970.01 365.849 970.429 365.429C970.849 365.01 971.413 364.767 972.006 364.751Z'
              stroke='#162029'
              strokeWidth='1.5'
            />
          </g>
          <g opacity='0.4'>
            <path
              className={`${styles.delay3} ${styles.line}  line12`}
              d='M1207 361.699V353.799V345.909V338.009V330.119V322.219V314.329V306.429V298.539V290.639V282.749V274.849V266.959L1201.42 261.379V253.479V245.589V237.689V229.799V221.899V214.009V206.109V198.219V190.329V182.429V174.539V166.639'
              stroke='#162029'
              strokeLinejoin='round'
            />
            <path
              className={`${styles.delay3} ${styles.line}  line12`}
              d='M1204.4 166.639C1204.4 166.046 1204.22 165.466 1203.89 164.972C1203.56 164.479 1203.1 164.095 1202.55 163.868C1202 163.64 1201.4 163.581 1200.81 163.697C1200.23 163.813 1199.7 164.098 1199.28 164.518C1198.86 164.937 1198.57 165.472 1198.46 166.054C1198.34 166.636 1198.4 167.239 1198.63 167.787C1198.86 168.335 1199.24 168.804 1199.73 169.134C1200.23 169.463 1200.81 169.639 1201.4 169.639C1202.2 169.639 1202.96 169.323 1203.52 168.76C1204.08 168.198 1204.4 167.435 1204.4 166.639Z'
              fill='#162029'
            />
          </g>
        </g>
        <defs>
          {/*<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1.42222" height="2">*/}
          {/*    <use xlink:href="#image0_110_2" transform="scale(0.000694444 0.000976562)"/>*/}
          {/*</pattern>*/}
          <linearGradient
            id='paint0_linear_110_2'
            x1='147'
            y1='428.001'
            x2='37'
            y2='428.001'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#A6D0DD' />
            <stop offset='1' stopColor='#162029' stopOpacity='0.4' />
          </linearGradient>
          <linearGradient
            id='paint1_linear_110_2'
            x1='615'
            y1='433.166'
            x2='450'
            y2='433.166'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#162029' stopOpacity='0.2' />
            <stop offset='0.469695' stopColor='#FF6969' stopOpacity='0.44' />
            <stop offset='1' stopColor='#162029' stopOpacity='0.2' />
          </linearGradient>
          <linearGradient id='paint2_linear_110_2' x1='250.5' y1='436' x2='112' y2='436' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#162029' stopOpacity='0.4' />
            <stop offset='1' stopColor='#A6D0DD' />
          </linearGradient>
          <linearGradient
            id='paint3_linear_110_2'
            x1='539.191'
            y1='532'
            x2='655'
            y2='532'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#162029' stopOpacity='0.4' />
            <stop offset='1' stopColor='#A6D0DD' />
          </linearGradient>
          <linearGradient
            id='paint4_linear_110_2'
            x1='973.191'
            y1='490'
            x2='1089'
            y2='490'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#162029' stopOpacity='0.4' />
            <stop offset='1' stopColor='#A6D0DD' />
          </linearGradient>
          <linearGradient
            id='paint5_linear_110_2'
            x1='105.5'
            y1='362'
            x2='238.868'
            y2='451.768'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#162029' />
            <stop offset='1' stopColor='#162029' stopOpacity='0' />
          </linearGradient>
          <linearGradient
            id='paint6_linear_110_2'
            x1='542.999'
            y1='519'
            x2='669.952'
            y2='519'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#162029' stopOpacity='0.4' />
            <stop offset='1' stopColor='#A6D0DD' />
          </linearGradient>
          <linearGradient
            id='paint7_linear_110_2'
            x1='976.999'
            y1='478'
            x2='1103.95'
            y2='478'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#162029' stopOpacity='0.4' />
            <stop offset='1' stopColor='#A6D0DD' />
          </linearGradient>
          <linearGradient
            id='paint8_linear_110_2'
            x1='108.5'
            y1='351'
            x2='198.5'
            y2='413.5'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#162029' />
            <stop offset='1' stopColor='#162029' stopOpacity='0' />
          </linearGradient>
          <linearGradient
            id='paint9_linear_110_2'
            x1='0.913946'
            y1='341.5'
            x2='308.5'
            y2='341.5'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#A6D0DD' stopOpacity='0' />
            <stop offset='0.469695' stopColor='#A6D0DD' />
            <stop offset='1' stopColor='#A6D0DD' stopOpacity='0' />
          </linearGradient>
          <linearGradient id='paint10_linear_110_2' x1='208' y1='429' x2='312' y2='429' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#162029' stopOpacity='0.4' />
            <stop offset='1' stopColor='#A6D0DD' />
          </linearGradient>
          <linearGradient
            id='paint11_linear_110_2'
            x1='17.5'
            y1='604'
            x2='17.4998'
            y2='705'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#A6D0DD' />
            <stop offset='1' stopColor='#162029' stopOpacity='0.4' />
          </linearGradient>
          <linearGradient
            id='paint12_linear_110_2'
            x1='222'
            y1='750.719'
            x2='349'
            y2='750.719'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#FF6969' />
            <stop offset='1' stopColor='#A6D0DD' />
          </linearGradient>
          <linearGradient
            id='paint13_linear_110_2'
            x1='669.455'
            y1='826.5'
            x2='669.455'
            y2='795'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#162029' stopOpacity='0.4' />
            <stop offset='1' stopColor='#A6D0DD' />
          </linearGradient>
          <linearGradient
            id='paint14_linear_110_2'
            x1='678.455'
            y1='823'
            x2='678.455'
            y2='765.5'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#FF6969' />
            <stop offset='0.9999' stopColor='#162029' stopOpacity='0.4' />
            <stop offset='1' stopColor='#162029' stopOpacity='0.2' />
          </linearGradient>
          <linearGradient id='paint15_linear_110_2' x1='52' y1='426' x2='52' y2='451' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#A6D0DD' />
            <stop offset='1' stopColor='#A6D0DD' stopOpacity='0' />
          </linearGradient>
          <linearGradient id='paint16_linear_110_2' x1='67' y1='426' x2='67' y2='445' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#A6D0DD' />
            <stop offset='1' stopColor='#A6D0DD' stopOpacity='0' />
          </linearGradient>
          <linearGradient
            id='paint17_linear_110_2'
            x1='170.178'
            y1='154.153'
            x2='170.18'
            y2='215.95'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#FF6969' stopOpacity='0' />
            <stop offset='1' stopColor='#FF6969' />
          </linearGradient>
          <linearGradient id='paint18_linear_110_2' x1='176' y1='185' x2='176' y2='233' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#A6D0DD' />
            <stop offset='1' stopColor='#A6D0DD' stopOpacity='0' />
          </linearGradient>
          <linearGradient id='paint19_linear_110_2' x1='329' y1='294' x2='435' y2='294' gradientUnits='userSpaceOnUse'>
            <stop stopOpacity='0' />
            <stop offset='0.494792' />
            <stop offset='1' stopOpacity='0' />
          </linearGradient>
          <linearGradient id='paint20_linear_110_2' x1='402' y1='286' x2='353' y2='286' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#A6D0DD' />
            <stop offset='1' stopColor='#A6D0DD' stopOpacity='0' />
          </linearGradient>
          <linearGradient id='paint21_linear_110_2' x1='446' y1='302' x2='340' y2='302' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#A6D0DD' stopOpacity='0' />
            <stop offset='1' stopColor='#A6D0DD' />
          </linearGradient>
          <linearGradient id='paint22_linear_110_2' x1='979' y1='427' x2='873' y2='427' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#FF6969' stopOpacity='0' />
            <stop offset='1' stopColor='#FF6969' />
          </linearGradient>
          <linearGradient id='paint23_linear_110_2' x1='292' y1='907' x2='149' y2='907' gradientUnits='userSpaceOnUse'>
            <stop stopOpacity='0' />
            <stop offset='0.494792' />
            <stop offset='1' stopOpacity='0' />
          </linearGradient>
          <linearGradient id='paint24_linear_110_2' x1='643' y1='101' x2='500' y2='101' gradientUnits='userSpaceOnUse'>
            <stop stopOpacity='0' />
            <stop offset='0.494792' />
            <stop offset='1' stopOpacity='0' />
          </linearGradient>
          <linearGradient
            id='paint25_linear_110_2'
            x1='1319'
            y1='580'
            x2='1176'
            y2='580'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopOpacity='0' />
            <stop offset='0.494792' />
            <stop offset='1' stopOpacity='0' />
          </linearGradient>
          <linearGradient
            id='paint26_linear_110_2'
            x1='625.179'
            y1='749.168'
            x2='625.18'
            y2='809.881'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#FF6969' />
            <stop offset='1' stopColor='#FF6969' stopOpacity='0' />
          </linearGradient>
          <linearGradient id='paint27_linear_110_2' x1='620' y1='750' x2='620' y2='797' gradientUnits='userSpaceOnUse'>
            <stop stopOpacity='0' />
            <stop offset='0.494792' />
            <stop offset='1' stopOpacity='0' />
          </linearGradient>
          <linearGradient id='paint28_linear_110_2' x1='628' y1='750' x2='628' y2='808' gradientUnits='userSpaceOnUse'>
            <stop stopOpacity='0' />
            <stop offset='0.494792' />
            <stop offset='1' stopOpacity='0' />
          </linearGradient>
          <linearGradient id='paint29_linear_110_2' x1='71' y1='682' x2='71' y2='716' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#162029' />
            <stop offset='1' stopColor='#162029' stopOpacity='0' />
          </linearGradient>
          <linearGradient id='paint30_linear_110_2' x1='67' y1='682' x2='67' y2='716' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#162029' />
            <stop offset='1' stopColor='#162029' stopOpacity='0' />
          </linearGradient>
          <linearGradient id='paint31_linear_110_2' x1='75' y1='682' x2='75' y2='717' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#162029' />
            <stop offset='1' stopColor='#162029' stopOpacity='0' />
          </linearGradient>
          <linearGradient id='paint32_linear_110_2' x1='487' y1='521' x2='487' y2='536' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#162029' />
            <stop offset='1' stopColor='#162029' stopOpacity='0' />
          </linearGradient>
          <linearGradient id='paint33_linear_110_2' x1='483' y1='521' x2='483' y2='541' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#162029' />
            <stop offset='1' stopColor='#162029' stopOpacity='0' />
          </linearGradient>
          <linearGradient id='paint34_linear_110_2' x1='491' y1='521' x2='491' y2='532' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#162029' />
            <stop offset='1' stopColor='#162029' stopOpacity='0' />
          </linearGradient>
          <linearGradient
            id='paint35_linear_110_2'
            x1='28.3421'
            y1='465.019'
            x2='105.373'
            y2='542.049'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#162029' stopOpacity='0.4' />
            <stop offset='0.301897' stopColor='#A6D0DD' />
            <stop offset='0.810486' stopColor='#A6D0DD' />
            <stop offset='1' stopColor='#162029' stopOpacity='0.4' />
          </linearGradient>
          <linearGradient
            id='paint36_linear_110_2'
            x1='447.5'
            y1='835'
            x2='447.501'
            y2='1003.5'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#162029' />
            <stop offset='1' stopColor='#162029' stopOpacity='0' />
          </linearGradient>
          <linearGradient
            id='paint37_linear_110_2'
            x1='456.001'
            y1='826'
            x2='456.001'
            y2='1011.5'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#162029' />
            <stop offset='1' stopColor='#162029' stopOpacity='0' />
          </linearGradient>
          <linearGradient
            id='paint38_linear_110_2'
            x1='470'
            y1='835'
            x2='470.001'
            y2='1019'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#162029' />
            <stop offset='1' stopColor='#162029' stopOpacity='0' />
          </linearGradient>
          <linearGradient
            id='paint39_linear_110_2'
            x1='503.5'
            y1='838'
            x2='503.5'
            y2='1028'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#162029' />
            <stop offset='1' stopColor='#162029' stopOpacity='0' />
          </linearGradient>
          <linearGradient
            id='paint40_linear_110_2'
            x1='539.77'
            y1='365.5'
            x2='539.77'
            y2='256'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#FF6969' />
            <stop offset='1' stopColor='#A6D0DD' />
          </linearGradient>
          <linearGradient
            id='paint41_linear_110_2'
            x1='790.77'
            y1='805.5'
            x2='790.77'
            y2='696'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#FF6969' />
            <stop offset='1' stopColor='#A6D0DD' />
          </linearGradient>
          <linearGradient
            id='paint42_linear_110_2'
            x1='12.7705'
            y1='848.5'
            x2='12.7703'
            y2='739'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#FF6969' />
            <stop offset='1' stopColor='#A6D0DD' />
          </linearGradient>
          <linearGradient
            id='paint43_linear_110_2'
            x1='590'
            y1='191.454'
            x2='566.375'
            y2='191.454'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#162029' stopOpacity='0.4' />
            <stop offset='1' stopColor='#A6D0DD' />
          </linearGradient>
          <linearGradient
            id='paint44_linear_110_2'
            x1='1020'
            y1='948.166'
            x2='1185'
            y2='948.166'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#162029' stopOpacity='0.2' />
            <stop offset='0.469695' stopColor='#FF6969' stopOpacity='0.44' />
            <stop offset='1' stopColor='#162029' stopOpacity='0.2' />
          </linearGradient>
          <linearGradient
            id='paint45_linear_110_2'
            x1='1138.83'
            y1='551'
            x2='1138.83'
            y2='716'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#162029' stopOpacity='0.2' />
            <stop offset='0.469695' stopColor='#FF6969' stopOpacity='0.44' />
            <stop offset='1' stopColor='#162029' stopOpacity='0.2' />
          </linearGradient>
          <linearGradient
            id='paint46_linear_110_2'
            x1='1384.5'
            y1='951'
            x2='1523'
            y2='951'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#162029' stopOpacity='0.4' />
            <stop offset='1' stopColor='#A6D0DD' />
          </linearGradient>
          <linearGradient
            id='paint47_linear_110_2'
            x1='1427'
            y1='944'
            x2='1323'
            y2='944'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#162029' stopOpacity='0.4' />
            <stop offset='1' stopColor='#A6D0DD' />
          </linearGradient>
          <linearGradient
            id='paint48_linear_110_2'
            x1='1308'
            y1='846'
            x2='1202'
            y2='846'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopOpacity='0' />
            <stop offset='0.494792' />
            <stop offset='1' stopOpacity='0' />
          </linearGradient>
          <linearGradient
            id='paint49_linear_110_2'
            x1='1235'
            y1='838'
            x2='1284'
            y2='838'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#A6D0DD' />
            <stop offset='1' stopColor='#A6D0DD' stopOpacity='0' />
          </linearGradient>
          <linearGradient
            id='paint50_linear_110_2'
            x1='1191'
            y1='854'
            x2='1297'
            y2='854'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#A6D0DD' stopOpacity='0' />
            <stop offset='1' stopColor='#A6D0DD' />
          </linearGradient>
          <linearGradient id='paint51_linear_110_2' x1='656' y1='942' x2='762' y2='942' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#FF6969' stopOpacity='0' />
            <stop offset='1' stopColor='#FF6969' />
          </linearGradient>
          <linearGradient
            id='paint52_linear_110_2'
            x1='1095.23'
            y1='880.5'
            x2='1095.23'
            y2='771'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#FF6969' />
            <stop offset='1' stopColor='#A6D0DD' />
          </linearGradient>
          <linearGradient
            id='paint53_linear_110_2'
            x1='1045'
            y1='706.454'
            x2='1068.62'
            y2='706.454'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#162029' stopOpacity='0.4' />
            <stop offset='1' stopColor='#A6D0DD' />
          </linearGradient>
          <linearGradient
            id='paint54_linear_110_2'
            x1='1063'
            y1='145.533'
            x2='1228'
            y2='145.533'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#162029' stopOpacity='0.2' />
            <stop offset='0.469695' stopColor='#FF6969' stopOpacity='0.44' />
            <stop offset='1' stopColor='#162029' stopOpacity='0.2' />
          </linearGradient>
          <linearGradient
            id='paint55_linear_110_2'
            x1='1427.5'
            y1='142.699'
            x2='1566'
            y2='142.699'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#162029' stopOpacity='0.4' />
            <stop offset='1' stopColor='#A6D0DD' />
          </linearGradient>
          <linearGradient
            id='paint56_linear_110_2'
            x1='1138.81'
            y1='46.6992'
            x2='1023'
            y2='46.6992'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#162029' stopOpacity='0.4' />
            <stop offset='1' stopColor='#A6D0DD' />
          </linearGradient>
          <linearGradient
            id='paint57_linear_110_2'
            x1='1135'
            y1='59.6992'
            x2='1008.05'
            y2='59.6992'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#162029' stopOpacity='0.4' />
            <stop offset='1' stopColor='#A6D0DD' />
          </linearGradient>
          <linearGradient
            id='paint58_linear_110_2'
            x1='1470'
            y1='149.699'
            x2='1366'
            y2='149.699'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#162029' stopOpacity='0.4' />
            <stop offset='1' stopColor='#A6D0DD' />
          </linearGradient>
          <linearGradient
            id='paint59_linear_110_2'
            x1='1351'
            y1='275'
            x2='1245'
            y2='275'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopOpacity='0' />
            <stop offset='0.494792' />
            <stop offset='1' stopOpacity='0' />
          </linearGradient>
          <linearGradient
            id='paint60_linear_110_2'
            x1='1278'
            y1='283'
            x2='1327'
            y2='283'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#A6D0DD' />
            <stop offset='1' stopColor='#A6D0DD' stopOpacity='0' />
          </linearGradient>
          <linearGradient
            id='paint61_linear_110_2'
            x1='1234'
            y1='267'
            x2='1340'
            y2='267'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#A6D0DD' stopOpacity='0' />
            <stop offset='1' stopColor='#A6D0DD' />
          </linearGradient>
          <linearGradient
            id='paint62_linear_110_2'
            x1='1191'
            y1='57.6992'
            x2='1191'
            y2='42.6992'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#162029' />
            <stop offset='1' stopColor='#162029' stopOpacity='0' />
          </linearGradient>
          <linearGradient
            id='paint63_linear_110_2'
            x1='1195'
            y1='57.6992'
            x2='1195'
            y2='37.6992'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#162029' />
            <stop offset='1' stopColor='#162029' stopOpacity='0' />
          </linearGradient>
          <linearGradient
            id='paint64_linear_110_2'
            x1='1187'
            y1='57.6992'
            x2='1187'
            y2='46.6992'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#162029' />
            <stop offset='1' stopColor='#162029' stopOpacity='0' />
          </linearGradient>
          <linearGradient
            id='paint65_linear_110_2'
            x1='1138.23'
            y1='233.5'
            x2='1138.23'
            y2='343'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#FF6969' />
            <stop offset='1' stopColor='#A6D0DD' />
          </linearGradient>
          <linearGradient
            id='paint66_linear_110_2'
            x1='1088'
            y1='387.245'
            x2='1111.62'
            y2='387.245'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#162029' stopOpacity='0.4' />
            <stop offset='1' stopColor='#A6D0DD' />
          </linearGradient>
          <clipPath id='clip0_110_2'>
            <rect width='1440' height='1024' fill='white' />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default Microscheme;
