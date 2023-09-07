import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useNftMarket } from '../../hooks/useNftMarket';

import Arrivals from './components/Arrivals';
import CollectionsPromo from './components/CollectionsPromo';
import Market from './components/Market';

const Overview = () => {
  const triedReconnect = useSelector(state => state.appState.triedReconnect);

  const { 
    account,
    fetchNFTs,
    fetchNewArrivals
  } = useNftMarket();

  const dispatch = useDispatch();

  useEffect(() => {
    if (account && triedReconnect) {
      fetchNFTs().then(items => {
        dispatch({
          type: "SET_NFTS",
          payload: items.reverse()
        });
      });

      fetchNewArrivals().then(items => {
        dispatch({
          type: "SET_NEW_ARRIVALS",
          payload: items
        });
      })
    }
  }, [account, triedReconnect]);

  return (
    <div>
      <Market />
      <CollectionsPromo />
      <Arrivals />
    </div>
  );
};

export default Overview;
