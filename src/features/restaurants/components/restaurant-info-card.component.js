import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Card } from 'react-native-paper';
import styled from 'styled-components/native';

const Title = styled.Text`
  padding: 16px;
  color: red;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'Some rest',
    icon,
    photos = [
      'https://www.mygreekdish.com/wp-content/uploads/2014/01/Traditional-Greek-bean-soup-recipe-Fasolada.jpg',
    ],
    address = 'skippergata',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
  },
  cover: {
    padding: 20,
    backgroundColor: 'white',
  },
});
