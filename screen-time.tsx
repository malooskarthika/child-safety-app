import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Clock, Smartphone, Monitor, Gamepad } from 'lucide-react-native';

export default function ScreenTimeScreen() {
  const screenWidth = Dimensions.get('window').width;

  const chartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: [3, 4.5, 3.8, 5, 2, 4, 3.5],
        color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
      },
    ],
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Screen Time</Text>
        <Text style={styles.subtitle}>Monitor and manage device usage</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Daily Usage</Text>
        <View style={styles.card}>
          <LineChart
            data={chartData}
            width={screenWidth - 40}
            height={220}
            chartConfig={{
              backgroundColor: '#FFFFFF',
              backgroundGradientFrom: '#FFFFFF',
              backgroundGradientTo: '#FFFFFF',
              decimalPlaces: 1,
              color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            bezier
            style={styles.chart}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>App Usage</Text>
        <View style={styles.card}>
          {[
            { icon: Smartphone, name: 'Social Media', time: '2h 15m', color: '#007AFF' },
            { icon: Monitor, name: 'Education', time: '1h 45m', color: '#34C759' },
            { icon: Gamepad, name: 'Games', time: '45m', color: '#FF9500' },
          ].map((app, index) => (
            <View key={index} style={styles.appItem}>
              <View style={[styles.appIcon, { backgroundColor: `${app.color}15` }]}>
                <app.icon size={24} color={app.color} />
              </View>
              <View style={styles.appInfo}>
                <Text style={styles.appName}>{app.name}</Text>
                <Text style={styles.appTime}>{app.time}</Text>
              </View>
              <View style={styles.appUsage}>
                <View style={[styles.usageBar, { width: `${(parseInt(app.time) / 4) * 100}%` }]} />
              </View>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Limits & Schedules</Text>
        <View style={styles.card}>
          {[
            { title: 'Daily Limit', value: '4 hours', time: 'Remaining: 1h 45m' },
            { title: 'Bedtime Mode', value: '9:00 PM - 7:00 AM', time: 'Active in 2h 30m' },
            { title: 'Study Time', value: '3:00 PM - 5:00 PM', time: 'Complete for today' },
          ].map((limit, index) => (
            <View key={index} style={styles.limitItem}>
              <Text style={styles.limitTitle}>{limit.title}</Text>
              <Text style={styles.limitValue}>{limit.value}</Text>
              <Text style={styles.limitTime}>{limit.time}</Text>
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
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  appItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F7',
  },
  appIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appInfo: {
    marginLeft: 15,
    flex: 1,
  },
  appName: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: '#000000',
  },
  appTime: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#8E8E93',
    marginTop: 2,
  },
  appUsage: {
    width: 100,
    height: 4,
    backgroundColor: '#F2F2F7',
    borderRadius: 2,
  },
  usageBar: {
    height: '100%',
    backgroundColor: '#007AFF',
    borderRadius: 2,
  },
  limitItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F7',
  },
  limitTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: '#000000',
  },
  limitValue: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#007AFF',
    marginTop: 4,
  },
  limitTime: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    color: '#8E8E93',
    marginTop: 2,
  },
});