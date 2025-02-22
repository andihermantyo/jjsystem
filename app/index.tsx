import * as Application from 'expo-application';
import Constants from 'expo-constants';
import { Platform, StyleSheet, View } from 'react-native';
import { Text, Title } from 'react-native-paper';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Title style={styles.title}>
        {Platform.OS === 'android' ? Application.applicationName : 'JJSystem'}
      </Title>
      <Text style={(styles.paragraph, styles.title)}>
        {process.env.APP_VARIANT}
      </Text>
      <Text style={(styles.paragraph, styles.title)}>
        {Platform.OS === 'android' &&
          `Versi ${Application.nativeApplicationVersion} (${Application.nativeBuildVersion})`}
      </Text>
      <Text style={(styles.paragraph, styles.title)}>
        Informasi perangkat : {Constants.deviceName}{' '}
        {Platform.OS === 'android' &&
          (Constants.platform?.android
            ? `(Android ${Constants.systemVersion})`
            : '')}
      </Text>
      <Text style={(styles.paragraph, styles.title)}>
        Informasi server : {process.env.EXPO_PUBLIC_SUPABASE_URL}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
  },
  button: {
    marginBottom: 10,
  },
  paragraph: {
    marginBottom: 10,
  },
  divider: {
    marginVertical: 20,
  },
});
