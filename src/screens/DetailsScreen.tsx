import React from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar, Platform, Image, TouchableOpacity } from 'react-native';
import { RouteProp, useNavigation } from '@react-navigation/native';
import WeatherCard from '../components/WeatherCard/WeatherCard';
import { SafeAreaView } from 'react-native-safe-area-context';

interface HourlyData {
  hour: string;
  temperatureC: number;
  summary: string;
}

interface WeatherDetails {
  date: string;
  temperatureC: number;
  summary: string;
  windSpeed?: number;
  humidity?: number;
  hourlyReport: HourlyData[];
}

type DetailsScreenProps = {
  route: RouteProp<{ params: WeatherDetails }, 'params'>;
};

const DetailsScreen: React.FC<DetailsScreenProps> = ({ route }) => {
  const navigation = useNavigation(); // Correct way to get the navigation prop

  const { date, temperatureC, summary, hourlyReport } = route.params;

  const renderHourlyItem = ({ item }: { item: HourlyData }) => (
    <WeatherCard
      date={item.hour}
      summary={item.summary}
      temperatureC={item.temperatureC}
      onPress={() => {}}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated
        backgroundColor="#42A5F5"
        barStyle={Platform.OS === 'android' ? 'light-content' : 'dark-content'}
      />
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image 
            source={require('../assets/back.png')}  // Use a valid image here
            style={styles.backImage} 
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Weather Forecast</Text>
        <TouchableOpacity disabled onPress={() => navigation.goBack()}>
          <Image 
            // source={require('../assets/left-arrow.png')}  // Use a valid image here
            style={styles.backImage} 
          />
        </TouchableOpacity>
      </View>
      <View style={styles.containerView}>
        <WeatherCard
          date={date}
          summary={summary}
          temperatureC={temperatureC}
          onPress={() => {}}
        />
        <Text style={styles.sectionTitle}>Hourly Forecast</Text>
        <FlatList
          data={hourlyReport}
          keyExtractor={(item) => item.hour}
          renderItem={renderHourlyItem}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerView: {
    flex: 1,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#42A5F5',
    padding: 25,
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 8,
  },
  listContainer: {
    paddingBottom: 16,
  },
  backImage: {
    width: 30,
    height: 30,
    tintColor: 'white',
    borderRadius: 8,
  },
});

export default DetailsScreen;
