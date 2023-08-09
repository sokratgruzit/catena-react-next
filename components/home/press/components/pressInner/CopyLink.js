import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function CopyLink({ data, currentPageURL, showDetails = true, showCopyButton = true }) {
  const copyLinkToClipboard = async link => {
    try {
      await navigator.clipboard.writeText(link);
      alert('Link copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy link: ', err);
    }
  };

  const linkToCopy = currentPageURL();

  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);

  return (
    <div className='text' data-aos='fade-up'>
      <div>
        {data.map((item, index) => (
          <div key={index} className='copy-link'>
            {showDetails && (
              <>
                {item.time} <div className='dot' /> {item.month},<div className='year'> {item.year}</div>
              </>
            )}
            {showCopyButton && (
              <button onClick={() => copyLinkToClipboard(linkToCopy)}>
                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <circle cx='12' cy='12' r='12' fill='#F3E4D2' />
                  <g clipPath='url(#clip0_3654_460)'>
                    <path
                      d='M12.2484 15.3073L10.6295 16.9241C10.2248 17.3283 9.69124 17.5487 9.12093 17.5487C8.55062 17.5487 8.01711 17.3283 7.61238 16.9241L7.09726 16.4096C6.69252 16.0054 6.47176 15.4726 6.47176 14.903C6.47176 14.3335 6.69252 13.8007 7.09726 13.3965L9.24971 11.2468C10.0776 10.4201 11.439 10.4201 12.2668 11.2468L13.0395 12.0185C13.3338 12.3125 13.7938 12.3125 14.0881 12.0185C14.3825 11.7245 14.3825 11.2652 14.0881 10.9713L13.3154 10.1996C11.9173 8.80326 9.61765 8.80326 8.21948 10.1996L6.04863 12.3492C5.36794 13.029 5 13.9293 5 14.903C5 15.8768 5.36794 16.7587 6.04863 17.4385L6.56375 17.9529C7.24444 18.6327 8.14589 19.0002 9.10253 19.0002C10.0592 19.0002 10.9606 18.6327 11.6413 17.9529L13.2603 16.3361C13.5546 16.0422 13.5546 15.5828 13.2603 15.2889C13.0027 15.0133 12.5428 15.0133 12.2484 15.3073Z'
                      fill='#00050F'
                    />
                    <path
                      d='M17.4547 6.04725C16.774 5.36746 15.8726 5 14.9159 5C13.9593 5 13.0578 5.36746 12.3771 6.04725L11.0157 7.40684C10.7214 7.70081 10.7214 8.16013 11.0157 8.4541C11.3101 8.74806 11.77 8.74806 12.0644 8.4541L13.4258 7.09451C13.8305 6.6903 14.364 6.46983 14.9343 6.46983C15.5046 6.46983 16.0381 6.6903 16.4429 7.09451L16.958 7.60895C17.3627 8.01315 17.5835 8.54596 17.5835 9.11552C17.5835 9.68508 17.3627 10.2179 16.958 10.6221L15.0631 12.4961C14.6583 12.9003 14.1248 13.1208 13.5545 13.1208C12.9842 13.1208 12.4507 12.9003 12.046 12.4961L11.2733 11.7245C10.9789 11.4305 10.519 11.4305 10.2247 11.7245C9.93032 12.0184 9.93032 12.4778 10.2247 12.7717L10.9973 13.5434C11.678 14.2232 12.5795 14.5906 13.5361 14.5906C14.4928 14.5906 15.3942 14.2232 16.0749 13.5434L17.9514 11.6693C18.6321 10.9896 19 10.0893 19 9.13389C19 8.1785 18.6321 7.27823 17.9514 6.59844L17.4547 6.04725Z'
                      fill='#00050F'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_3654_460'>
                      <rect width='14' height='14' fill='white' transform='translate(5 5)' />
                    </clipPath>
                  </defs>
                </svg>
                Copy Link
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
