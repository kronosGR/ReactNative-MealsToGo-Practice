import React, { useContext } from 'react';
import { FlatList, Pressable } from 'react-native';
import styled from 'styled-components/native';

import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { SafeArea } from '../../../components/utility/safe-area.components';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';
import { Search } from '../components/search.component';
import { ActivityIndicator, Colors } from 'react-native-paper';

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <Search />
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <Pressable onPress={() => navigation.navigate('RestaurantDetail')}>
              <Spacer position='bottom' size='large'>
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </Pressable>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
