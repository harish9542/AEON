import React from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import { View, StyleSheet, Image, Text } from 'react-native';

const getGradientColors = (temperature: number) => {
  if (temperature >= 35) {
    return ['#FF512F', '#DD2476']; // Extreme heat
  } else if (temperature >= 25) {
    return ['#FDC830', '#F37335']; // Hot weather
  } else if (temperature >= 15) {
    return ['#56CCF2', '#2F80ED']; // Pleasant weather
  } else if (temperature >= 5) {
    return ['#76b852', '#8DC26F']; // Cool weather
  } else {
    return ['#457fca', '#5691c8']; // Cold weather
  }
};
const weatherImages: { [key: string]: any } = {
  Sunny: require('../../assets/sunny.jpeg'),
  'Partly Cloudy': require('../../assets/partly-cloudy.jpeg'),
  Rainy : require('../../assets/rainy.jpeg'),
  'Light Rain' : require('../../assets/Light-Rain.jpeg'),
   Rain : require('../../assets/rainy.jpeg'),
  'Heavy Rain' : require('../../assets/Heavy-Rain.jpeg'),
  'Drizzle' : require('../../assets/Drizzle.jpeg'),
  Snow: require('../../assets/snow.jpeg'),
  Clear: require('../../assets/clear-night.jpeg'),
  Cloudy: require('../../assets/cloudy.jpeg'),
  
};

const WeatherCard = ({
  date,
  summary,
  temperatureC,
  onPress,
}: {
  date: string;
  summary: string;
  temperatureC: number;
  onPress: () => void;
}) => (
  <Card style={styles.card} onPress={onPress}>
    <LinearGradient colors={getGradientColors(temperatureC)} style={styles.gradient}>
      <Card.Content style={styles.cardContent}>
        <Image source={weatherImages[summary]} style={styles.weatherImage} />
        <View style={styles.textContainer}>
          <Title>{date}</Title>
          <Paragraph>{summary}</Paragraph>
          <Text style={styles.temperature}>{temperatureC} °C</Text>
        </View>
      </Card.Content>
    </LinearGradient>
  </Card>
);

const styles = StyleSheet.create({
  card: {
    marginVertical: 8,
    borderRadius: 12,
    elevation: 3,
  },
  gradient: {
    borderRadius: 12,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  weatherImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  textContainer: {
    marginLeft: 15,
    flex: 1,
  },
  temperature: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF5722',
  },
});

export default WeatherCard;
