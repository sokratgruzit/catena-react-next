    import Link from 'next/link';
    import Image from 'next/image';
    import { Swiper, SwiperSlide } from 'swiper/react';

    import ArrowBtn from '../../UI/button/ArrowBtn';

    import styles from './Buy.module.css';

    const Buy = (props) => {
        return (
            <div className={`container`}>
                <div className={styles.Nftbuy}>
                    <ArrowBtn route={'back__collections'} direction={'back'} />
                    <div className={styles.NftBuy__itemBuy}>
                        <div className={styles.NftBuy__itemImg}>
                            <Image layout='fill' src={props.buyDetails.imgSrc} />
                        </div>
                        <div className={styles.NftBuy__itemDetails}>
                            <p className={`${styles.NftBuy__itemTitle} font_13`}>{props.buyDetails.title}</p>
                            <p className={`font_30`}>{props.buyDetails.value}</p>
                            <p className={styles.NftBuy__itemQuote}>{props.buyDetails.blockQuote}</p>
                            <p className={`font_13`}>Price</p>
                            <div className={styles.NftBuy__itemPrices}>
                                <p className={`font_20`}><span className={`font_20`}>CMCX</span> {props.buyDetails.cmcx}</p>
                                <p className={`font_13`}>{props.buyDetails.usd}</p>
                            </div>
                            <div className={styles.NftBuy__itemBuyBtn}>
                                <p>Buy</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.NftBuy__tables}>
                        <div className={styles.NftBuy__manageTable}>
                            <div className={styles.NftBuy__walletConnect}>
                                <p className={styles.NftBuy__walletConnectTitle}>
                                    Manage Yours
                                    <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M1.03733 5.36892C1.31628 5.64786 1.76854 5.64786 2.04749 5.36892L5.57563 1.84078C5.71335 1.70306 5.9429 1.70306 6.08062 1.84078L9.60876 5.36892C9.88771 5.64786 10.34 5.64786 10.6189 5.36892C10.8979 5.08997 10.8979 4.63771 10.6189 4.35876L7.09078 0.830625C6.39516 0.135013 5.26109 0.135013 4.56547 0.830625L1.03733 4.35876C0.758389 4.63771 0.758389 5.08997 1.03733 5.36892Z" fill="#FF7152"/>
                                    </svg>
                                </p>
                                <div className={styles.NftBuy__connectBtn}>Connect Wallet</div>
                            </div>
                            <div className={styles.NftBuy__properties}>
                                <p className={styles.NftBuy__propertiesTitle}>
                                    Properties
                                    <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M1.03733 5.36892C1.31628 5.64786 1.76854 5.64786 2.04749 5.36892L5.57563 1.84078C5.71335 1.70306 5.9429 1.70306 6.08062 1.84078L9.60876 5.36892C9.88771 5.64786 10.34 5.64786 10.6189 5.36892C10.8979 5.08997 10.8979 4.63771 10.6189 4.35876L7.09078 0.830625C6.39516 0.135013 5.26109 0.135013 4.56547 0.830625L1.03733 4.35876C0.758389 4.63771 0.758389 5.08997 1.03733 5.36892Z" fill="#FF7152"/>
                                    </svg>
                                </p>
                                <div className={styles.NftBuy__properties__inner}>
                                    <div className={styles.NftBuy__properties__item}>
                                        <p>Background</p>
                                        <p><span className={styles.NftBuy__properties__itemTitle}>Pink</span>(14.66%)</p>
                                    </div>
                                    <div className={styles.NftBuy__properties__item}>
                                        <p>Background</p>
                                        <p><span className={styles.NftBuy__properties__itemTitle}>Pink</span>(14.66%)</p>
                                    </div>
                                    <div className={styles.NftBuy__properties__item}>
                                        <p>Background</p>
                                        <p><span className={styles.NftBuy__properties__itemTitle}>Pink</span>(14.66%)</p>
                                    </div>
                                    <div className={styles.NftBuy__properties__item}>
                                        <p>Background</p>
                                        <p><span className={styles.NftBuy__properties__itemTitle}>Pink</span>(14.66%)</p>
                                    </div>
                                    <div className={styles.NftBuy__properties__item}>
                                        <p>Background</p>
                                        <p><span className={styles.NftBuy__properties__itemTitle}>Pink</span>(14.66%)</p>
                                    </div>
                                    {/* here goes map of properties data */}
                                </div>
                            </div>
                            <div className={styles.NftBuy__details}>
                                <p className={styles.NftBuy__propertiesTitle}>
                                    Details
                                    <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M1.03733 5.36892C1.31628 5.64786 1.76854 5.64786 2.04749 5.36892L5.57563 1.84078C5.71335 1.70306 5.9429 1.70306 6.08062 1.84078L9.60876 5.36892C9.88771 5.64786 10.34 5.64786 10.6189 5.36892C10.8979 5.08997 10.8979 4.63771 10.6189 4.35876L7.09078 0.830625C6.39516 0.135013 5.26109 0.135013 4.56547 0.830625L1.03733 4.35876C0.758389 4.63771 0.758389 5.08997 1.03733 5.36892Z" fill="#FF7152"/>
                                    </svg>
                                </p>
                            </div>
                            <div className={styles.NftBuy__details__inner}>
                                <div className={styles.NftBuy__details__itemWrap}>
                                    <div className={styles.NftBuy__details__item}>
                                        <p>Contract Adr.</p>
                                        <div className={styles.NftBuy__details__link}>
                                            <p>0xF5...301c</p>
                                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M12.22 0.94934C12.4489 1.1739 12.4524 1.54151 12.2279 1.77043L7.78417 6.30029C7.55961 6.5292 7.192 6.53273 6.96308 6.30817C6.73417 6.08361 6.73064 5.716 6.9552 5.48709L11.3989 0.957225C11.6234 0.728311 11.9911 0.724781 12.22 0.94934Z" fill="#0500FF"/>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M9.06641 0.922419C9.06641 0.60175 9.32636 0.341797 9.64703 0.341797H12.2482C12.5689 0.341797 12.8288 0.60175 12.8288 0.922419V3.57405C12.8288 3.89472 12.5689 4.15467 12.2482 4.15467C11.9275 4.15467 11.6676 3.89472 11.6676 3.57405V1.50304H9.64703C9.32636 1.50304 9.06641 1.24309 9.06641 0.922419Z" fill="#0500FF"/>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M1.87487 1.41351C2.64646 0.626953 3.78769 0.341797 5.20215 0.341797H6.28597C6.60664 0.341797 6.8666 0.60175 6.8666 0.922419C6.8666 1.24309 6.60664 1.50304 6.28597 1.50304H5.20215C3.90703 1.50304 3.15156 1.77031 2.70384 2.22671C2.25341 2.68587 1.98937 3.46327 1.98937 4.78938V8.10392C1.98937 9.43003 2.25341 10.2074 2.70384 10.6666C3.15156 11.123 3.90703 11.3903 5.20215 11.3903H8.45363C9.74874 11.3903 10.5042 11.123 10.9519 10.6666C11.4024 10.2074 11.6664 9.43003 11.6664 8.10392V6.99907C11.6664 6.6784 11.9264 6.41845 12.247 6.41845C12.5677 6.41845 12.8277 6.6784 12.8277 6.99907V8.10392C12.8277 9.53992 12.5498 10.696 11.7809 11.4798C11.0093 12.2663 9.86809 12.5515 8.45363 12.5515H5.20215C3.78769 12.5515 2.64646 12.2663 1.87487 11.4798C1.106 10.696 0.828125 9.53992 0.828125 8.10392V4.78938C0.828125 3.35338 1.106 2.19729 1.87487 1.41351Z" fill="#0500FF"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className={styles.NftBuy__details__item}>
                                        <p>IPFS JSON.</p>
                                        <div className={styles.NftBuy__details__link}>
                                            <a href='azuki.com'>Azuki.com</a>
                                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M12.22 0.94934C12.4489 1.1739 12.4524 1.54151 12.2279 1.77043L7.78417 6.30029C7.55961 6.5292 7.192 6.53273 6.96308 6.30817C6.73417 6.08361 6.73064 5.716 6.9552 5.48709L11.3989 0.957225C11.6234 0.728311 11.9911 0.724781 12.22 0.94934Z" fill="#0500FF"/>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M9.06641 0.922419C9.06641 0.60175 9.32636 0.341797 9.64703 0.341797H12.2482C12.5689 0.341797 12.8288 0.60175 12.8288 0.922419V3.57405C12.8288 3.89472 12.5689 4.15467 12.2482 4.15467C11.9275 4.15467 11.6676 3.89472 11.6676 3.57405V1.50304H9.64703C9.32636 1.50304 9.06641 1.24309 9.06641 0.922419Z" fill="#0500FF"/>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M1.87487 1.41351C2.64646 0.626953 3.78769 0.341797 5.20215 0.341797H6.28597C6.60664 0.341797 6.8666 0.60175 6.8666 0.922419C6.8666 1.24309 6.60664 1.50304 6.28597 1.50304H5.20215C3.90703 1.50304 3.15156 1.77031 2.70384 2.22671C2.25341 2.68587 1.98937 3.46327 1.98937 4.78938V8.10392C1.98937 9.43003 2.25341 10.2074 2.70384 10.6666C3.15156 11.123 3.90703 11.3903 5.20215 11.3903H8.45363C9.74874 11.3903 10.5042 11.123 10.9519 10.6666C11.4024 10.2074 11.6664 9.43003 11.6664 8.10392V6.99907C11.6664 6.6784 11.9264 6.41845 12.247 6.41845C12.5677 6.41845 12.8277 6.6784 12.8277 6.99907V8.10392C12.8277 9.53992 12.5498 10.696 11.7809 11.4798C11.0093 12.2663 9.86809 12.5515 8.45363 12.5515H5.20215C3.78769 12.5515 2.64646 12.2663 1.87487 11.4798C1.106 10.696 0.828125 9.53992 0.828125 8.10392V4.78938C0.828125 3.35338 1.106 2.19729 1.87487 1.41351Z" fill="#0500FF"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className={styles.NftBuy__tablesRightPanel}>
                            <div className={styles.NftBuy__ownerTable}>
                                <div className={styles.NftBuy__ownerTitle}>Owner</div>
                                <div className={styles.NftBuy__ownerFiltres}>
                                    <p className={`font_13`}>Price</p>
                                    <p className={`font_13`}>Owner</p>
                                </div>
                                {props.ownerItems.map(item => {
                                    return <div key={item.id} className={styles.NftBuy__ownerItem}>
                                            <div className={styles.NftBuy__ownerItemPrices}>
                                                <p><span>CMCX</span>{item.cmcx}</p>
                                                <p className={`font_13`}>{item.usd}</p>
                                            </div>
                                            <div className={styles.NftBuy__itemOwner}>
                                                <Image layout='fill' src={item.ownerImg} />
                                                <div className={styles.NftBuy__itemOwnerTitles}>
                                                    <p>{item.ownerTitle}</p>
                                                    <p>{item.ownerAddress}</p>
                                                </div>
                                            </div>
                                            <div className={styles.NftBuy__BtnBuy}>Buy</div>
                                        </div>
                                    })}
                            </div>
                            <div className={styles.NftBuy__infoTable}>
                                <div className={styles.NftBuy__categories}>
                                    <p className={`font_13 ${styles.NftBuy__categoriesItem}`}>Event</p>
                                    <p className={`font_13 ${styles.NftBuy__categoriesItem}`}>Price</p>
                                    <p className={`font_13 ${styles.NftBuy__categoriesItem}`}>From</p>
                                    <p className={`font_13 ${styles.NftBuy__categoriesItem}`}>To</p>
                                    <p className={`font_13 ${styles.NftBuy__categoriesItemL}`}>Date</p>
                                </div>
                                {props.detailsItems.map(item => {
                                    return (
                                        <div key={item.id} className={styles.NftBuy__itemWrap}>
                                        <div className={styles.NftBuy__item}>
                                            {item.event}
                                        </div>
                                        <div className={styles.NftBuy__item}>
                                            <div className={styles.NftBuy__itemPrice}>
                                                <p><span>CMCX</span>{item.cmcx}</p>
                                                <p className={`font_13`}>{item.usd}</p>
                                            </div>
                                        </div>
                                        <div className={styles.NftBuy__item}>
                                            <Image layout='fill' src={item.fromImg} />
                                            <div className={styles.NftBuy__itemTitles}>
                                                <p>{item.from}</p>
                                                <p>{item.fromAddress}</p>
                                            </div>
                                        </div>
                                        <div className={styles.NftBuy__item}>
                                            <Image layout='fill' src={item.toImg} />
                                            <div className={styles.NftBuy__itemTitles}>
                                                <p>{item.to}</p>
                                                <p>{item.toAddress}</p>
                                            </div>
                                        </div>
                                        <div className={styles.NftBuy__itemB}>
                                            <div className={styles.NftBuy__itemDate}>
                                                <p>{item.date},</p>
                                                <p>{item.time}</p>
                                            </div>
                                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M13.3952 1.64558C13.6577 1.90306 13.6617 2.32458 13.4043 2.58706L8.30899 7.78113C8.0515 8.04361 7.62999 8.04766 7.36751 7.79017C7.10503 7.53268 7.10098 7.11117 7.35847 6.84869L12.4537 1.65462C12.7112 1.39214 13.1327 1.38809 13.3952 1.64558Z" fill="#0500FF"/>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M9.7793 1.61302C9.7793 1.24534 10.0774 0.947266 10.4451 0.947266H13.4276C13.7953 0.947266 14.0934 1.24534 14.0934 1.61302V4.65346C14.0934 5.02115 13.7953 5.31922 13.4276 5.31922C13.06 5.31922 12.7619 5.02115 12.7619 4.65346V2.27878H10.4451C10.0774 2.27878 9.7793 1.98071 9.7793 1.61302Z" fill="#0500FF"/>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M1.53422 2.17612C2.41894 1.27423 3.72751 0.947266 5.34937 0.947266H6.59211C6.9598 0.947266 7.25787 1.24534 7.25787 1.61302C7.25787 1.98071 6.9598 2.27878 6.59211 2.27878H5.34937C3.86435 2.27878 2.9981 2.58524 2.48474 3.10856C1.96826 3.63505 1.6655 4.52643 1.6655 6.04699V9.84754C1.6655 11.3681 1.96826 12.2595 2.48474 12.786C2.9981 13.3093 3.86435 13.6157 5.34937 13.6157H9.07761C10.5626 13.6157 11.4289 13.3093 11.9422 12.786C12.4587 12.2595 12.7615 11.3681 12.7615 9.84754V8.58069C12.7615 8.213 13.0595 7.91493 13.4272 7.91493C13.7949 7.91493 14.093 8.213 14.093 8.58069V9.84754C14.093 11.4941 13.7744 12.8197 12.8928 13.7184C12.008 14.6203 10.6995 14.9473 9.07761 14.9473H5.34937C3.72751 14.9473 2.41894 14.6203 1.53422 13.7184C0.652602 12.8197 0.333984 11.4941 0.333984 9.84754V6.04699C0.333984 4.40043 0.652602 3.07483 1.53422 2.17612Z" fill="#0500FF"/>
                                            </svg>
                                        </div>
                                    </div>
                                    )
                                })}
                            </div>
                        {/* table needs 'pageinate' */}
                        </div>
                    </div>
                    <div className={styles.Collections__section}>
                        <div className={styles.Collections__titles}>
                            <p className={`font_30`}>More From This Collection</p>
                            <ArrowBtn route={'collections'} direction={'forward'} title={'viewAll'} />
                        </div>
                        <div className={styles.Collections__products}>
                        {/*<Swiper
                            spaceBetween={30}
                            slidesPerView={4.6}>
                            {collectionItems.map(item => {
                                return (
                                <SwiperSlide key={item.id}>
                                    <Link href={`/nfts/collections/${item.id}`}>
                                        <div className={styles.Collection__product}>
                                            <div className={styles.Collection__product__inner}>
                                                <div className={styles.Collection__product__titles}>
                                                    <div className={styles.Collection__product__img}>
                                                        <Image layout='fill' src={item.img} />
                                                    </div>
                                                    <p className={`font_13 ${styles.Collection__product__title}`}>{item.title}</p>
                                                    <p className={`font_13`}>{item.subTitle}</p>
                                                </div>
                                                <p className={`font_13 ${styles.Collection__product__askingPrice}`}>Asking Price:</p>
                                                <div className={styles.Collection__prices}>
                                                    <p><span>CMCX</span>{item.priceCmcx}</p>
                                                    <p className={`font_13 ${styles.Collection__price}`}>{item.priceUsd}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                                );
                            })}
                        </Swiper>*/}
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    export default Buy;
