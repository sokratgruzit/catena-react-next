import { useEffect, useState } from 'react';
import Link from 'next/link';

import ListItemCard from '../UI/listItem/ListItemCard';
import Table from '../UI/table/Table';
import TabFilter from '../UI/filters/TabFilter';

import styles from './Activity.module.css';
import filterStyles from '../UI/filters/TabFilter.module.css';

let nftActivityData = [
    {
        id: 0,
        itemImg: '/images/nft/nft_activity_items/item1.png',
        itemTitle: 'Alpha Kong #8223',
        itemSubTitle: 'Alpha Kongs Club - AKC',
        event: 'Listed',
        priceInCmcx: '0.0123',
        priceInDollar: '(~$51.028)',
        fromImg: '/images/nft/nft_activity_items/sub_item1.png',
        from: 'BilanCh',
        fromAddress: '0xC7...061b',
        toReciverImg: '/images/nft/nft_activity_items/sub_item2.png',
        toReciver: '-',
        toReciverAddress: '0xF5...301c',
        dateDay: '4.7.2022',
        dateTime: '6:28 PM',
        lowestPrice: '0.198',
        hightestPrice: '10,000',
        items: '895',
        supply: '7777'
    },
    {
        id: 1,
        itemImg: '/images/nft/nft_activity_items/item1.png',
        itemTitle: 'Alpha Kong #8223',
        itemSubTitle: 'Alpha Kongs Club - AKC',
        event: 'Sold',
        priceInCmcx: 'CMCX 0.0123',
        priceInDollar: '(~$51.028)',
        fromImg: '/images/nft/nft_activity_items/sub_item1.png',
        from: 'BilanCh',
        fromAddress: '0xC7...061b',
        toReciverImg: '/images/nft/nft_activity_items/sub_item2.png',
        toReciver: '-',
        toReciverAddress: '0xF5...301c',
        dateDay: '4.7.2022',
        dateTime: '6:28 PM',
        lowestPrice: '0.198',
        hightestPrice: '10,000',
        items: '895',
        supply: '7777'
    },
    {
        id: 2,
        itemImg: '/images/nft/nft_activity_items/item1.png',
        itemTitle: 'Alpha Kong #8223',
        itemSubTitle: 'Alpha Kongs Club - AKC',
        event: 'Delisted',
        priceInCmcx: 'CMCX 0.0123',
        priceInDollar: '(~$51.028)',
        fromImg: '/images/nft/nft_activity_items/sub_item1.png',
        from: 'BilanCh',
        fromAddress: '0xC7...061b',
        toReciverImg: '/images/nft/nft_activity_items/sub_item2.png',
        toReciver: '-',
        toReciverAddress: '0xF5...301c',
        dateDay: '4.7.2022',
        dateTime: '6:28 PM',
        lowestPrice: '0.198',
        hightestPrice: '10,000',
        items: '895',
        supply: '7777'
    },
    {
        id: 3,
        itemImg: '/images/nft/nft_activity_items/item1.png',
        itemTitle: 'Alpha Kong #8223',
        itemSubTitle: 'Alpha Kongs Club - AKC',
        event: 'Modified',
        priceInCmcx: 'CMCX 0.0123',
        priceInDollar: '(~$51.028)',
        fromImg: '/images/nft/nft_activity_items/sub_item1.png',
        from: 'BilanCh',
        fromAddress: '0xC7...061b',
        toReciverImg: '/images/nft/nft_activity_items/sub_item2.png',
        toReciver: '-',
        toReciverAddress: '0xF5...301c',
        dateDay: '4.7.2022',
        dateTime: '6:28 PM',
        lowestPrice: '0.198',
        hightestPrice: '10,000',
        items: '895',
        supply: '7777'
    },
    {
        id: 4,
        itemImg: '/images/nft/nft_activity_items/item1.png',
        itemTitle: 'Alpha Kong #8223',
        itemSubTitle: 'Alpha Kongs Club - AKC',
        event: 'Collection',
        priceInCmcx: 'CMCX 0.0123',
        priceInDollar: '(~$51.028)',
        fromImg: '/images/nft/nft_activity_items/sub_item1.png',
        from: 'BilanCh',
        fromAddress: '0xC7...061b',
        toReciverImg: '/images/nft/nft_activity_items/sub_item2.png',
        toReciver: '-',
        toReciverAddress: '0xF5...301c',
        dateDay: '4.7.2022',
        dateTime: '6:28 PM',
        lowestPrice: '0.198',
        hightestPrice: '10,000',
        items: '895',
        supply: '7777'
    },
    {
        id: 5,
        itemImg: '/images/nft/nft_activity_items/item1.png',
        itemTitle: 'Alpha Kong #8223',
        itemSubTitle: 'Alpha Kongs Club - AKC',
        event: 'Listed',
        priceInCmcx: 'CMCX 0.0123',
        priceInDollar: '(~$51.028)',
        fromImg: '/images/nft/nft_activity_items/sub_item1.png',
        from: 'BilanCh',
        fromAddress: '0xC7...061b',
        toReciverImg: '/images/nft/nft_activity_items/sub_item2.png',
        toReciver: '-',
        toReciverAddress: '0xF5...301c',
        dateDay: '4.7.2022',
        dateTime: '6:28 PM',
        lowestPrice: '0.198',
        hightestPrice: '10,000',
        items: '895',
        supply: '7777'
    },
    {
        id: 6,
        itemImg: '/images/nft/nft_activity_items/item1.png',
        itemTitle: 'Alpha Kong #8223',
        itemSubTitle: 'Alpha Kongs Club - AKC',
        event: 'Modified',
        priceInCmcx: 'CMCX 0.0123',
        priceInDollar: '(~$51.028)',
        fromImg: '/images/nft/nft_activity_items/sub_item1.png',
        from: 'BilanCh',
        fromAddress: '0xC7...061b',
        toReciverImg: '/images/nft/nft_activity_items/sub_item2.png',
        toReciver: '-',
        toReciverAddress: '0xF5...301c',
        dateDay: '4.7.2022',
        dateTime: '6:28 PM',
        lowestPrice: '0.198',
        hightestPrice: '10,000',
        items: '895',
        supply: '7777'
    },
    {
        id: 7,
        itemImg: '/images/nft/nft_activity_items/item1.png',
        itemTitle: 'Alpha Kong #8223',
        itemSubTitle: 'Alpha Kongs Club - AKC',
        event: 'Sold',
        priceInCmcx: 'CMCX 0.0123',
        priceInDollar: '(~$51.028)',
        fromImg: '/images/nft/nft_activity_items/sub_item1.png',
        from: 'BilanCh',
        fromAddress: '0xC7...061b',
        toReciverImg: '/images/nft/nft_activity_items/sub_item2.png',
        toReciver: '-',
        toReciverAddress: '0xF5...301c',
        dateDay: '4.7.2022',
        dateTime: '6:28 PM',
        lowestPrice: '0.198',
        hightestPrice: '10,000',
        items: '895',
        supply: '7777'
    },
    {
        id: 12312323,
        itemImg: '/images/nft/nft_activity_items/item1.png',
        itemTitle: 'Alpha Kong #8223',
        itemSubTitle: 'Alpha Kongs Club - AKC',
        event: 'Listed',
        priceInCmcx: 'CMCX 0.0123',
        priceInDollar: '(~$51.028)',
        fromImg: '/images/nft/nft_activity_items/sub_item1.png',
        from: 'BilanCh',
        fromAddress: '0xC7...061b',
        toReciverImg: '/images/nft/nft_activity_items/sub_item2.png',
        toReciver: '-',
        toReciverAddress: '0xF5...301c',
        dateDay: '4.7.2022',
        dateTime: '6:28 PM',
        lowestPrice: '0.198',
        hightestPrice: '10,000',
        items: '895',
        supply: '7777'
    },
    {
        id: 13232,
        itemImg: '/images/nft/nft_activity_items/item1.png',
        itemTitle: 'Alpha Kong #8223',
        itemSubTitle: 'Alpha Kongs Club - AKC',
        event: 'Sold',
        priceInCmcx: 'CMCX 0.0123',
        priceInDollar: '(~$51.028)',
        fromImg: '/images/nft/nft_activity_items/sub_item1.png',
        from: 'BilanCh',
        fromAddress: '0xC7...061b',
        toReciverImg: '/images/nft/nft_activity_items/sub_item2.png',
        toReciver: '-',
        toReciverAddress: '0xF5...301c',
        dateDay: '4.7.2022',
        dateTime: '6:28 PM',
        lowestPrice: '0.198',
        hightestPrice: '10,000',
        items: '895',
        supply: '7777'
    },
    {
        id: 22222,
        itemImg: '/images/nft/nft_activity_items/item1.png',
        itemTitle: 'Alpha Kong #8223',
        itemSubTitle: 'Alpha Kongs Club - AKC',
        event: 'Delisted',
        priceInCmcx: 'CMCX 0.0123',
        priceInDollar: '(~$51.028)',
        fromImg: '/images/nft/nft_activity_items/sub_item1.png',
        from: 'BilanCh',
        fromAddress: '0xC7...061b',
        toReciverImg: '/images/nft/nft_activity_items/sub_item2.png',
        toReciver: '-',
        toReciverAddress: '0xF5...301c',
        dateDay: '4.7.2022',
        dateTime: '6:28 PM',
        lowestPrice: '0.198',
        hightestPrice: '10,000',
        items: '895',
        supply: '7777'
    },
    {
        id: 3555,
        itemImg: '/images/nft/nft_activity_items/item1.png',
        itemTitle: 'Alpha Kong #8223',
        itemSubTitle: 'Alpha Kongs Club - AKC',
        event: 'Modified',
        priceInCmcx: 'CMCX 0.0123',
        priceInDollar: '(~$51.028)',
        fromImg: '/images/nft/nft_activity_items/sub_item1.png',
        from: 'BilanCh',
        fromAddress: '0xC7...061b',
        toReciverImg: '/images/nft/nft_activity_items/sub_item2.png',
        toReciver: '-',
        toReciverAddress: '0xF5...301c',
        dateDay: '4.7.2022',
        dateTime: '6:28 PM',
        lowestPrice: '0.198',
        hightestPrice: '10,000',
        items: '895',
        supply: '7777'
    },
    {
        id: 411,
        itemImg: '/images/nft/nft_activity_items/item1.png',
        itemTitle: 'Alpha Kong #8223',
        itemSubTitle: 'Alpha Kongs Club - AKC',
        event: 'Collection',
        priceInCmcx: 'CMCX 0.0123',
        priceInDollar: '(~$51.028)',
        fromImg: '/images/nft/nft_activity_items/sub_item1.png',
        from: 'BilanCh',
        fromAddress: '0xC7...061b',
        toReciverImg: '/images/nft/nft_activity_items/sub_item2.png',
        toReciver: '-',
        toReciverAddress: '0xF5...301c',
        dateDay: '4.7.2022',
        dateTime: '6:28 PM',
        lowestPrice: '0.198',
        hightestPrice: '10,000',
        items: '895',
        supply: '7777'
    },
    {
        id: 51,
        itemImg: '/images/nft/nft_activity_items/item1.png',
        itemTitle: 'Alpha Kong #8223',
        itemSubTitle: 'Alpha Kongs Club - AKC',
        event: 'Listed',
        priceInCmcx: 'CMCX 0.0123',
        priceInDollar: '(~$51.028)',
        fromImg: '/images/nft/nft_activity_items/sub_item1.png',
        from: 'BilanCh',
        fromAddress: '0xC7...061b',
        toReciverImg: '/images/nft/nft_activity_items/sub_item2.png',
        toReciver: '-',
        toReciverAddress: '0xF5...301c',
        dateDay: '4.7.2022',
        dateTime: '6:28 PM',
        lowestPrice: '0.198',
        hightestPrice: '10,000',
        items: '895',
        supply: '7777'
    },
    {
        id: 6343,
        itemImg: '/images/nft/nft_activity_items/item1.png',
        itemTitle: 'Alpha Kong #8223',
        itemSubTitle: 'Alpha Kongs Club - AKC',
        event: 'Modified',
        priceInCmcx: 'CMCX 0.0123',
        priceInDollar: '(~$51.028)',
        fromImg: '/images/nft/nft_activity_items/sub_item1.png',
        from: 'BilanCh',
        fromAddress: '0xC7...061b',
        toReciverImg: '/images/nft/nft_activity_items/sub_item2.png',
        toReciver: '-',
        toReciverAddress: '0xF5...301c',
        dateDay: '4.7.2022',
        dateTime: '6:28 PM',
        lowestPrice: '0.198',
        hightestPrice: '10,000',
        items: '895',
        supply: '7777'
    },
    {
        id: 72,
        itemImg: '/images/nft/nft_activity_items/item1.png',
        itemTitle: 'Alpha Kong #8223',
        itemSubTitle: 'Alpha Kongs Club - AKC',
        event: 'Sold',
        priceInCmcx: 'CMCX 0.0123',
        priceInDollar: '(~$51.028)',
        fromImg: '/images/nft/nft_activity_items/sub_item1.png',
        from: 'BilanCh',
        fromAddress: '0xC7...061b',
        toReciverImg: '/images/nft/nft_activity_items/sub_item2.png',
        toReciver: '-',
        toReciverAddress: '0xF5...301c',
        dateDay: '4.7.2022',
        dateTime: '6:28 PM',
        lowestPrice: '0.198',
        hightestPrice: '10,000',
        items: '895',
        supply: '7777'
    },
    {
        id: 999,
        itemImg: '/images/nft/nft_activity_items/item1.png',
        itemTitle: 'Alpha Kong #8223',
        itemSubTitle: 'Alpha Kongs Club - AKC',
        event: 'Listed',
        priceInCmcx: 'CMCX 0.0123',
        priceInDollar: '(~$51.028)',
        fromImg: '/images/nft/nft_activity_items/sub_item1.png',
        from: 'BilanCh',
        fromAddress: '0xC7...061b',
        toReciverImg: '/images/nft/nft_activity_items/sub_item2.png',
        toReciver: '-',
        toReciverAddress: '0xF5...301c',
        dateDay: '4.7.2022',
        dateTime: '6:28 PM',
        lowestPrice: '0.198',
        hightestPrice: '10,000',
        items: '895',
        supply: '7777'
    },
    {
        id: 15,
        itemImg: '/images/nft/nft_activity_items/item1.png',
        itemTitle: 'Alpha Kong #8223',
        itemSubTitle: 'Alpha Kongs Club - AKC',
        event: 'Sold',
        priceInCmcx: 'CMCX 0.0123',
        priceInDollar: '(~$51.028)',
        fromImg: '/images/nft/nft_activity_items/sub_item1.png',
        from: 'BilanCh',
        fromAddress: '0xC7...061b',
        toReciverImg: '/images/nft/nft_activity_items/sub_item2.png',
        toReciver: '-',
        toReciverAddress: '0xF5...301c',
        dateDay: '4.7.2022',
        dateTime: '6:28 PM',
        lowestPrice: '0.198',
        hightestPrice: '10,000',
        items: '895',
        supply: '7777'
    },
    {
        id: 21,
        itemImg: '/images/nft/nft_activity_items/item1.png',
        itemTitle: 'Alpha Kong #8223',
        itemSubTitle: 'Alpha Kongs Club - AKC',
        event: 'Delisted',
        priceInCmcx: 'CMCX 0.0123',
        priceInDollar: '(~$51.028)',
        fromImg: '/images/nft/nft_activity_items/sub_item1.png',
        from: 'BilanCh',
        fromAddress: '0xC7...061b',
        toReciverImg: '/images/nft/nft_activity_items/sub_item2.png',
        toReciver: '-',
        toReciverAddress: '0xF5...301c',
        dateDay: '4.7.2022',
        dateTime: '6:28 PM',
        lowestPrice: '0.198',
        hightestPrice: '10,000',
        items: '895',
        supply: '7777'
    },
    {
        id: 13,
        itemImg: '/images/nft/nft_activity_items/item1.png',
        itemTitle: 'Alpha Kong #8223',
        itemSubTitle: 'Alpha Kongs Club - AKC',
        event: 'Modified',
        priceInCmcx: 'CMCX 0.0123',
        priceInDollar: '(~$51.028)',
        fromImg: '/images/nft/nft_activity_items/sub_item1.png',
        from: 'BilanCh',
        fromAddress: '0xC7...061b',
        toReciverImg: '/images/nft/nft_activity_items/sub_item2.png',
        toReciver: '-',
        toReciverAddress: '0xF5...301c',
        dateDay: '4.7.2022',
        dateTime: '6:28 PM',
        lowestPrice: '0.198',
        hightestPrice: '10,000',
        items: '895',
        supply: '7777'
    },
    {
        id: 4343,
        itemImg: '/images/nft/nft_activity_items/item1.png',
        itemTitle: 'Alpha Kong #8223',
        itemSubTitle: 'Alpha Kongs Club - AKC',
        event: 'Collection',
        priceInCmcx: 'CMCX 0.0123',
        priceInDollar: '(~$51.028)',
        fromImg: '/images/nft/nft_activity_items/sub_item1.png',
        from: 'BilanCh',
        fromAddress: '0xC7...061b',
        toReciverImg: '/images/nft/nft_activity_items/sub_item2.png',
        toReciver: '-',
        toReciverAddress: '0xF5...301c',
        dateDay: '4.7.2022',
        dateTime: '6:28 PM',
        lowestPrice: '0.198',
        hightestPrice: '10,000',
        items: '895',
        supply: '7777'
    },
    {
        id: 5551,
        itemImg: '/images/nft/nft_activity_items/item1.png',
        itemTitle: 'Alpha Kong #8223',
        itemSubTitle: 'Alpha Kongs Club - AKC',
        event: 'Listed',
        priceInCmcx: 'CMCX 0.0123',
        priceInDollar: '(~$51.028)',
        fromImg: '/images/nft/nft_activity_items/sub_item1.png',
        from: 'BilanCh',
        fromAddress: '0xC7...061b',
        toReciverImg: '/images/nft/nft_activity_items/sub_item2.png',
        toReciver: '-',
        toReciverAddress: '0xF5...301c',
        dateDay: '4.7.2022',
        dateTime: '6:28 PM',
        lowestPrice: '0.198',
        hightestPrice: '10,000',
        items: '895',
        supply: '7777'
    },
    {
        id: 61,
        itemImg: '/images/nft/nft_activity_items/item1.png',
        itemTitle: 'Alpha Kong #8223',
        itemSubTitle: 'Alpha Kongs Club - AKC',
        event: 'Modified',
        priceInCmcx: 'CMCX 0.0123',
        priceInDollar: '(~$51.028)',
        fromImg: '/images/nft/nft_activity_items/sub_item1.png',
        from: 'BilanCh',
        fromAddress: '0xC7...061b',
        toReciverImg: '/images/nft/nft_activity_items/sub_item2.png',
        toReciver: '-',
        toReciverAddress: '0xF5...301c',
        dateDay: '4.7.2022',
        dateTime: '6:28 PM',
        lowestPrice: '0.198',
        hightestPrice: '10,000',
        items: '895',
        supply: '7777'
    },
    {
        id: 71,
        itemImg: '/images/nft/nft_activity_items/item1.png',
        itemTitle: 'Alpha Kong #8223',
        itemSubTitle: 'Alpha Kongs Club - AKC',
        event: 'Sold',
        priceInCmcx: 'CMCX 0.0123',
        priceInDollar: '(~$51.028)',
        fromImg: '/images/nft/nft_activity_items/sub_item1.png',
        from: 'BilanCh',
        fromAddress: '0xC7...061b',
        toReciverImg: '/images/nft/nft_activity_items/sub_item2.png',
        toReciver: '-',
        toReciverAddress: '0xF5...301c',
        dateDay: '4.7.2022',
        dateTime: '6:28 PM',
        lowestPrice: '0.198',
        hightestPrice: '10,000',
        items: '895',
        supply: '7777'
    }
];

let tabsData = [
    {
        id: 0,
        label: 'All'
    },
    {
        id: 1,
        label: 'Collection'
    },
    {
        id: 2,
        label: 'Listed'
    },
    {
        id: 3,
        label: 'Delisted'
    },
    {
        id: 4,
        label: 'Modified'
    },
    {
        id: 5,
        label: 'Sold'
    }
];

const Activity = () => {
    const [tableData, setTableData] = useState(nftActivityData.slice(0, 20));
    const [screeWidth, setScreenWidth] = useState(0);
    const [activeMenuItem, setActiveMenuItem] = useState('All');
    const [pageNumber, setPageNumber] = useState(0);

    const ITEMS_PER_PAGE = 5;
    const ITEMS_SHOWN = pageNumber * ITEMS_PER_PAGE;
    const PAGE_COUNT = Math.ceil(tableData.length / ITEMS_PER_PAGE);

    const showItems = tableData.slice(ITEMS_SHOWN, ITEMS_SHOWN + ITEMS_PER_PAGE).map((item) => {
        return item;
    });

    const filterTableHandler = (status) => {
        const filtered = nftActivityData.filter((item) => {
            if (status == 'All') {
                return item;
            }
            if (status == item.event) {
                return item;
            }
        });
        setTableData(filtered);
        setActiveMenuItem(status);
    };

    const onPageChangeHandler = ({selected}) => {
        setPageNumber(selected);
    };

    useEffect(() => {
        setScreenWidth(window.innerWidth);
    }, []);

    let content = <div className={styles.Activity__listItems}>
        <Table
            tableLabels={["Item", "Event", "Price", "From", "To", "Date"]}
            tableData={showItems}
            type={"nft_activity"}
        />
    </div>;

    if (screeWidth < 1200) {
        content = <div className={styles.Activity__wrap}>
            {nftActivityData.map((item) => {
                return <ListItemCard key={item.id + 'mobile'} data={item} type={"nft_activity_mobile"} />
            })}
        </div>;

    }

    return (
        <div className={`${styles.Activity} container`}>
            <Link href={`/nfts`} className={styles.Activity__backBtn}>
                <div>
                    <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.611328 5.10352C0.611328 4.87332 0.702771 4.65256 0.865541 4.48979L4.9976 0.35773C5.33655 0.0187786 5.8861 0.0187786 6.22505 0.35773C6.564 0.69668 6.564 1.24623 6.22505 1.58518L2.70671 5.10352L6.22505 8.62185C6.564 8.9608 6.564 9.51035 6.22505 9.8493C5.8861 10.1883 5.33655 10.1883 4.9976 9.8493L0.865541 5.71724C0.702771 5.55447 0.611328 5.33371 0.611328 5.10352Z" fill="#FF7152"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.724609 5.10277C0.724609 4.62342 1.1132 4.23483 1.59255 4.23483L13.0493 4.23483C13.5287 4.23483 13.9173 4.62342 13.9173 5.10277C13.9173 5.58211 13.5287 5.9707 13.0493 5.9707L1.59255 5.9707C1.1132 5.9707 0.724609 5.58211 0.724609 5.10277Z" fill="#FF7152"/>
                    </svg>
                    <p className={styles.Activity__backBtn__txt}>Back NFT Overview</p>
                </div>
            </Link>
            <h1 className={`font_30`}>Activity</h1>
            <TabFilter
                onClick={filterTableHandler} activeMenu={activeMenuItem}
                data={tabsData}
                css={{
                    wrap: filterStyles.Activity__filterWrap,
                    filter: filterStyles.Activity__filter,
                    active: filterStyles.Activity__filterActive,
                    item: filterStyles.Activity__filter__item
                }}
            />
            {content}
            <div className={styles.nftActivityTable__pagesFilter}>
                {/*<ReactPaginate
                    previousLabel={'<'}
                    nextLabel={'>'}
                    pageCount={PAGE_COUNT}
                    onPageChange={onPageChangeHandler}
                />*/}
                pagination
            </div>
        </div>
    );
};

export default Activity;
