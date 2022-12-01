import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import SlideNextButton from "../slideIcons/SlideIcons";
import { CoreLogoSvg, PlusSvg } from "../../../svg";

import DashboardSingleSlide from "../dashboardSingleSlide/DashboardSingleSlide";

import styles from "./DashboardAssetsSlider.module.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const dashboardSliderData = [
  {
    logoSvg: <CoreLogoSvg />,
    assetName: "CMCX (CMCX)",
    available: 345.400214,
    stake: 30,
    value: 345.400214,
    inCMCX: 20.1231,
  },
  {
    logoSvg: <CoreLogoSvg />,
    assetName: "CMCX (CMCX)",
    available: 345.400214,
    stake: 30,
    value: 345.400214,
    inCMCX: 20.1231,
  },
  {
    logoSvg: <CoreLogoSvg />,
    assetName: "CMCX (CMCX)",
    available: 345.400214,
    stake: 30,
    value: 345.400214,
    inCMCX: 20.1231,
  },
  {
    logoSvg: <CoreLogoSvg />,
    assetName: "CMCX (CMCX)",
    available: 345.400214,
    stake: 30,
    value: 345.400214,
    inCMCX: 20.1231,
  },
];

const DashboardAssetsSlider = () => {
  return (
    <div className={`container ${styles.marginTop}`}>
      <div className={styles.dashboardMid__wrapper}>
        <div className={styles.dashboardMid__sliderContainer}>
          <div className={styles.sliderHeader}>
            <div className={`${styles.assetsBtn}`}>
              <PlusSvg />
              <p className="font_13">Add Assets</p>
            </div>
            <div className={styles.dashboardMid__checkbox}>
              <div className="radio-btn">
                <input type="checkbox" />
                <div className="radio-btn__inner">
                  <div className="radio-btn__icon"></div>
                </div>
                Staked only
              </div>
            </div>
            <input
              type="search"
              placeholder="Search Farms"
              className={styles.sliderHeader__search}
            ></input>
          </div>
          <Swiper
            slidesPerView={"auto"}
            keyboard={{
              enabled: true,
            }}
            spaceBetween={20}
            pagination={{
              type: "progressbar",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            freeMode={true}
            scrollbar={true}
            mousewheel={true}
          >
            {dashboardSliderData.map((item, index) => (
              <SwiperSlide key={index}>
                <DashboardSingleSlide item={item} />
              </SwiperSlide>
            ))}
            <SlideNextButton />
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default DashboardAssetsSlider;
