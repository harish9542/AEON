import React from 'react';
import { FlatList, StyleSheet, View, Text, StatusBar, SafeAreaView, Platform } from 'react-native';
import { useWeatherData } from '../hooks/useWeather';
import { useWeather } from '../context/WeatherContext';
import WeatherCard from '../components/WeatherCard/WeatherCard';

const HomeScreen = ({ navigation }: { navigation: any }) => {
  useWeatherData();
  const { weather } = useWeather();

  if (weather.length === 0) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading weather data...</Text>
      </View>
    );
  }

  const navigateToDetails = (item: any) => navigation.navigate('DetailsScreen', item);

  const renderWeatherCard = ({ item }: any) => (
    <WeatherCard
      date={item.date}
      summary={item.summary}
      temperatureC={item.temperatureC}
      onPress={() => navigateToDetails(item)}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
        <StatusBar
          animated={true}
          backgroundColor="#42A5F5" // Background color for Android
          barStyle={Platform.OS === 'android' ? 'light-content' : 'dark-content'} // Proper style for iOS
        />
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Weather Forecast</Text>
      </View>
      <FlatList
        data={weather}
        keyExtractor={(item) => item.date}
        renderItem={renderWeatherCard}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#42A5F5',
    padding: 25, // Add padding to avoid overlapping with the Dynamic Island
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 8,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#757575',
  },
  listContainer: {
    padding: 10,
  },
});

export default HomeScreen;
