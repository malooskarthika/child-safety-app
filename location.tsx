import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import MapView, { Marker, Circle } from 'react-native-maps';
import { MapPin, Chrome as Home, School, Sparkle as Park } from 'lucide-react-native';

export default function LocationScreen() {
  const schoolLocation = {
    latitude: 37.785834,
    longitude: -122.406417,
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Location</Text>
        <Text style={styles.subtitle}>Track and monitor safe zones</Text>
      </View>

      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: schoolLocation.latitude,
            longitude: schoolLocation.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}>
          <Marker coordinate={schoolLocation} />
          <Circle
            center={schoolLocation}
            radius={200}
            fillColor="rgba(0, 122, 255, 0.1)"
            strokeColor="rgba(0, 122, 255, 0.3)"
            strokeWidth={2}
          />
        </MapView>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Safe Zones</Text>
        <View style={styles.card}>
          {[
            { icon: Home, name: 'Home', address: '123 Main St', status: 'Inside' },
            { icon: School, name: 'School', address: '456 Education Ave', status: 'Inside' },
            { icon: Park, name: 'Park', address: '789 Green Park', status: 'Outside' },
          ].map((zone, index) => (
            <View key={index} style={styles.zoneItem}>
              <View style={[styles.zoneIcon, { backgroundColor: zone.status === 'Inside' ? '#34C75915' : '#FF3B3015' }]}>
                <zone.icon size={24} color={zone.status === 'Inside' ? '#34C759' : '#FF3B30'} />
              </View>
              <View style={styles.zoneInfo}>
                <Text style={styles.zoneName}>{zone.name}</Text>
                <Text style={styles.zoneAddress}>{zone.address}</Text>
              </View>
              <Text style={[styles.zoneStatus, { color: zone.status === 'Inside' ? '#34C759' : '#FF3B30' }]}>
                {zone.status}
              </Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Activity</Text>
        <View style={styles.card}>
          {[
            { time: '9:00 AM', action: 'Arrived at School', location: '456 Education Ave' },
            { time: '8:30 AM', action: 'Left Home', location: '123 Main St' },
            { time: 'Yesterday', action: 'Returned Home', location: '123 Main St' },
          ].map((activity, index) => (
            <View key={index} style={styles.activityItem}>
              <Text style={styles.activityTime}>{activity.time}</Text>
              <View style={styles.activityContent}>
                <Text style={styles.activityAction}>{activity.action}</Text>
                <Text style={styles.activityLocation}>{activity.location}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  header: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontFamily: 'Inter_700Bold',
    fontSize: 28,
    color: '#000000',
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#8E8E93',
  },
  mapContainer: {
    height: 300,
    backgroundColor: '#FFFFFF',
  },
  map: {
    width: Dimensions.get('window').width,
    height: '100%',
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 18,
    color: '#000000',
    marginBottom: 15,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  zoneItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F7',
  },
  zoneIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  zoneInfo: {
    marginLeft: 15,
    flex: 1,
  },
  zoneName: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: '#000000',
  },
  zoneAddress: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#8E8E93',
    marginTop: 2,
  },
  zoneStatus: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 14,
  },
  activityItem: {
    flexDirection: 'row',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F7',
  },
  activityTime: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#8E8E93',
    width: 80,
  },
  activityContent: {
    flex: 1,
  },
  activityAction: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: '#000000',
  },
  activityLocation: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#8E8E93',
    marginTop: 2,
  },
});