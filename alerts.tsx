import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Bell, TriangleAlert as AlertTriangle, Shield, MapPin, Clock } from 'lucide-react-native';

export default function AlertsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Alerts</Text>
        <Text style={styles.subtitle}>Monitor important notifications</Text>
      </View>

      <View style={styles.section}>
        <View style={styles.alertSummary}>
          <View style={styles.alertCount}>
            <Bell size={24} color="#FFFFFF" />
            <Text style={styles.alertCountText}>3</Text>
          </View>
          <Text style={styles.alertSummaryText}>Active Alerts</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Alerts</Text>
        <View style={styles.card}>
          {[
            {
              icon: AlertTriangle,
              title: 'Unusual Activity Detected',
              description: 'Multiple attempts to access blocked content',
              time: '15 minutes ago',
              priority: 'high',
            },
            {
              icon: MapPin,
              title: 'Left Safe Zone',
              description: 'Emily has left the school area',
              time: '1 hour ago',
              priority: 'medium',
            },
            {
              icon: Clock,
              title: 'Screen Time Limit Reached',
              description: 'Daily limit exceeded by 30 minutes',
              time: '2 hours ago',
              priority: 'low',
            },
          ].map((alert, index) => (
            <TouchableOpacity key={index} style={styles.alertItem}>
              <View
                style={[
                  styles.alertIcon,
                  {
                    backgroundColor:
                      alert.priority === 'high'
                        ? '#FF3B3015'
                        : alert.priority === 'medium'
                        ? '#FF950015'
                        : '#34C75915',
                  },
                ]}>
                <alert.icon
                  size={24}
                  color={
                    alert.priority === 'high' ? '#FF3B30' : alert.priority === 'medium' ? '#FF9500' : '#34C759'
                  }
                />
              </View>
              <View style={styles.alertContent}>
                <View style={styles.alertHeader}>
                  <Text style={styles.alertTitle}>{alert.title}</Text>
                  <Text style={styles.alertTime}>{alert.time}</Text>
                </View>
                <Text style={styles.alertDescription}>{alert.description}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Alert Settings</Text>
        <View style={styles.card}>
          {[
            { title: 'Content Blocking', description: 'Notify when inappropriate content is blocked' },
            { title: 'Location Alerts', description: 'Alert when child leaves safe zones' },
            { title: 'Screen Time', description: 'Notify when daily limits are reached' },
          ].map((setting, index) => (
            <View key={index} style={styles.settingItem}>
              <View style={styles.settingContent}>
                <Text style={styles.settingTitle}>{setting.title}</Text>
                <Text style={styles.settingDescription}>{setting.description}</Text>
              </View>
              <TouchableOpacity style={styles.settingButton}>
                <Text style={styles.settingButtonText}>Configure</Text>
              </TouchableOpacity>
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
  section: {
    padding: 20,
  },
  alertSummary: {
    backgroundColor: '#007AFF',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  alertCount: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertCountText: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#FF3B30',
    color: '#FFFFFF',
    fontFamily: 'Inter_700Bold',
    fontSize: 12,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 10,
  },
  alertSummaryText: {
    marginLeft: 20,
    color: '#FFFFFF',
    fontFamily: 'Inter_600SemiBold',
    fontSize: 18,
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
  alertItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F7',
  },
  alertIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertContent: {
    flex: 1,
    marginLeft: 15,
  },
  alertHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  alertTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: '#000000',
  },
  alertTime: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    color: '#8E8E93',
  },
  alertDescription: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#8E8E93',
    marginTop: 4,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F7',
  },
  settingContent: {
    flex: 1,
  },
  settingTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: '#000000',
  },
  settingDescription: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#8E8E93',
    marginTop: 2,
  },
  settingButton: {
    backgroundColor: '#007AFF15',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 15,
  },
  settingButtonText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 14,
    color: '#007AFF',
  },
});