import { View, Text, StyleSheet, ScrollView, Switch, TouchableOpacity } from 'react-native';
import { Shield, TriangleAlert as AlertTriangle, MessageSquare, Globe } from 'lucide-react-native';

export default function ContentFilterScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Content Filter</Text>
        <Text style={styles.subtitle}>Protect your children from harmful content</Text>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Shield size={24} color="#007AFF" />
          <Text style={styles.sectionTitle}>Filter Settings</Text>
        </View>

        <View style={styles.card}>
          {[
            { icon: AlertTriangle, title: 'Explicit Content', description: 'Block adult and inappropriate content' },
            { icon: MessageSquare, title: 'Cyberbullying Protection', description: 'Detect and block harmful messages' },
            { icon: Globe, title: 'Safe Browsing', description: 'Enable safe search and website filtering' },
          ].map((item, index) => (
            <View key={index} style={styles.setting}>
              <View style={styles.settingContent}>
                <View style={styles.settingIcon}>
                  <item.icon size={20} color="#007AFF" />
                </View>
                <View style={styles.settingText}>
                  <Text style={styles.settingTitle}>{item.title}</Text>
                  <Text style={styles.settingDescription}>{item.description}</Text>
                </View>
              </View>
              <Switch value={true} onValueChange={() => {}} />
            </View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Blocks</Text>
        <View style={styles.card}>
          {[
            { title: 'Inappropriate Website', time: '2 hours ago', category: 'Web Content' },
            { title: 'Harmful Message', time: '5 hours ago', category: 'Messages' },
            { title: 'Adult Content', time: 'Yesterday', category: 'Web Content' },
          ].map((block, index) => (
            <TouchableOpacity key={index} style={styles.blockItem}>
              <View style={styles.blockHeader}>
                <Text style={styles.blockTitle}>{block.title}</Text>
                <Text style={styles.blockTime}>{block.time}</Text>
              </View>
              <Text style={styles.blockCategory}>{block.category}</Text>
            </TouchableOpacity>
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
    marginTop: 20,
    padding: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 18,
    color: '#000000',
    marginLeft: 10,
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
  setting: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F7',
  },
  settingContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#007AFF15',
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingText: {
    marginLeft: 15,
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
  blockItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F7',
  },
  blockHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  blockTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: '#000000',
  },
  blockTime: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    color: '#8E8E93',
  },
  blockCategory: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#8E8E93',
    marginTop: 4,
  },
});