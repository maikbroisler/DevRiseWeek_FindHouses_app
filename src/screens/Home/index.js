import React, {useEffect, useState} from 'react';
import {
  ScreenContainer,
  TopContainer,
  TitleContainer,
  ContentContainer,
} from './styles';
import {
  Title,
  IconButton,
  Input,
  HousesList,
  Loader,
  Modal,
  FilterModal,
} from '../../components';
import {useHousesHooks} from '../../services/hooks';
import {useHousesStore} from '../../services/stores';

export const HomeScreen = () => {
  const {onGetHouses} = useHousesHooks();
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const {housesList, loadingHousesList} = useHousesStore();

  useEffect(() => {
    onGetHouses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const openFilterModal = () => {
    setFilterModalVisible(true);
  };

  const closeFilterModal = () => {
    setFilterModalVisible(false);
  };

  return (
    <ScreenContainer>
      <HousesList
        data={housesList}
        loading={loadingHousesList}
        onEndReached={onGetHouses}>
        <ContentContainer>
          <TopContainer>
            <TitleContainer>
              <Title>Encontre aqui seu imóvel</Title>
            </TitleContainer>
            <IconButton iconName="filter" onPress={openFilterModal} />
          </TopContainer>
          <Input label="Localização" placeholder="Digite o endereço" />
          {loadingHousesList && <Loader />}
        </ContentContainer>
      </HousesList>
      {filterModalVisible && (
        <FilterModal onClose={closeFilterModal} visible={filterModalVisible} />
      )}
    </ScreenContainer>
  );
};
