import {getHousesCall} from '../calls';
import {useHousesStore} from '../stores';

export const useHousesHooks = () => {
  const {
    housesList,
    setHouseList,
    setLoadingHousesList,
    offset,
    setOffset,
    query,
    setQuery,
  } = useHousesStore();

  const onGetHouses = async () => {
    const result = await getHousesCall({
      ...query,
      offset,
    });
    if (offset > 0) {
      setHouseList(
        result.properties ? [...housesList, ...result.properties] : housesList,
      );
    } else {
      setHouseList(result.properties ? result.properties : housesList);
    }
    setLoadingHousesList(false);
    setOffset(offset + 15);
  };

  const onFilterHousesList = async receivedQuery => {
    setLoadingHousesList(true);
    if (receivedQuery !== query) {
      setHouseList([]);
      setOffset(0);
    }
    setQuery(receivedQuery);
    const result = await getHousesCall({
      query: receivedQuery,
      offset,
    });
    setHouseList(result.properties ? result.properties : []);
    setLoadingHousesList(false);
  };

  return {
    onGetHouses,
    onFilterHousesList,
  };
};
