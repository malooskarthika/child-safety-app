import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Shield, Clock, MapPin, Bell } from 'lucide-react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&fit=crop&crop=faces' }}
          style={styles.profileImage}
        />
        <View style={styles.headerText}>
          <Text style={styles.welcome}>Welcome back,</Text>
          <Text style={styles.name}>Sarah Johnson</Text>
        </View>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.stat}>
          <Text style={styles.statValue}>2</Text>
          <Text style={styles.statLabel}>Children</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statValue}>5h 23m</Text>
          <Text style={styles.statLabel}>Screen Time Today</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statValue}>3</Text>
          <Text style={styles.statLabel}>Active Alerts</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Quick Actions</Text>
      <View style={styles.quickActions}>
        <TouchableOpacity style={styles.actionCard}>
          <Shield size={24} color="#007AFF" />
          <Text style={styles.actionText}>Content Filter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionCard}>
          <Clock size={24} color="#FF9500" />
          <Text style={styles.actionText}>Screen Time</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionCard}>
          <MapPin size={24} color="#34C759" />
          <Text style={styles.actionText}>Location</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionCard}>
          <Bell size={24} color="#FF3B30" />
          <Text style={styles.actionText}>Alerts</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Recent Activity</Text>
      <View style={styles.activityList}>
        {[
          { icon: MapPin, color: '#34C759', text: 'Emily arrived at school', time: '8:30 AM' },
          { icon: Clock, color: '#FF9500', text: 'Screen time limit reached', time: '2:15 PM' },
          { icon: Shield, color: '#007AFF', text: 'Blocked inappropriate content', time: '3:45 PM' },
        ].map((activity, index) => (
          <View key={index} style={styles.activityItem}>
            <View style={[styles.activityIcon, { backgroundColor: `${activity.color}15` }]}>
              <activity.icon size={20} color={activity.color} />
            </View>
            <View style={styles.activityContent}>
              <Text style={styles.activityText}>{activity.text}</Text>
              <Text style={styles.activityTime}>{activity.time}</Text>
            </View>
          </View>
        ))}
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
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#FFFFFF',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  headerText: {
    marginLeft: 15,
  },
  welcome: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#8E8E93',
  },
  name: {
    fontFamily: 'Inter_700Bold',
    fontSize: 20,
    color: '#000000',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
  },
  stat: {
    alignItems: 'center',
  },
  statValue: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 24,
    color: '#000000',
  },
  statLabel: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    color: '#8E8E93',
    marginTop: 4,
  },
  sectionTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 18,
    color: '#000000',
    marginLeft: 20,
    marginBottom: 15,
  },
  quickActions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
  },
  actionCard: {
    width: '45%',
    backgroundColor: '#FFFFFF',
    padding: 20,
    margin: '2.5%',
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  actionText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#000000',
    marginTop: 10,
  },
  activityList: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    margin: 20,
    padding: 15,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F7',
  },
  activityIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityContent: {
    marginLeft: 15,
    flex: 1,
  },
  activityText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#000000',
  },
  activityTime: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    color: '#8E8E93',
    marginTop: 2,
  },
});