import * as Application from 'expo-application';
import Constants from 'expo-constants';
import { channel } from 'expo-updates';
import { Linking, Platform, ScrollView, StyleSheet } from 'react-native';
import { Button, Divider, Text, Title } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import CenterColumn from '../../components/CenterColumn';
import ScreenBackground from '../../components/ScreenBackground';
import VerticalButtonGroup from '../../components/VerticalButtonGroup';
import SharedStyles from '../../constants/SharedStyles';

const ANDIHERMANTYO_URL = 'https://github.com/andihermantyo';

export default function AboutScreen({ navigation }) {
  return (
    <ScreenBackground>
      <ScrollView contentContainerStyle={SharedStyles.bodyPadding}>
        <SafeAreaView edges={['left', 'right', 'bottom']}>
          <CenterColumn>
            <Title style={styles.title}>
              {Platform.OS === 'android'
                ? Application.applicationName
                : 'JJSystem'}
            </Title>
            <Text style={(styles.paragraph, styles.title)}>
              {Platform.OS === 'android' &&
                `${channel} versi ${Application.nativeApplicationVersion} (${Application.nativeBuildVersion})`}
            </Text>
            <Text style={(styles.paragraph, styles.title)}>
              Informasi perangkat : {Constants.deviceName}{' '}
              {Platform.OS === 'android' &&
                (Constants.platform.android
                  ? `(Android ${Constants.systemVersion})`
                  : '')}
            </Text>
            <Text style={(styles.paragraph, styles.title)}>
              Informasi server : {process.env.EXPO_PUBLIC_SUPABASE_URL}
            </Text>
            <VerticalButtonGroup>
              <Button
                style={styles.button}
                onPress={() => Linking.openURL(ANDIHERMANTYO_URL)}
              >
                Dikembangkan oleh AndiHermantyo
              </Button>
              <Button
                mode="contained"
                style={styles.button}
                onPress={() => navigation.navigate('SupportScreen')}
              >
                Dukungan
              </Button>
            </VerticalButtonGroup>
            <Text>
              JJSystem menggunakan : Babel, Docker, Expo, Postgres, React
              Native, React Native Paper, React Native Web, React Navigation,
              Supabase.
            </Text>
            <Divider style={styles.divider} />
            <Text style={styles.paragraph}>
              The MIT License (MIT) Copyright
            </Text>
            <Text style={styles.paragraph}>© 2022 AndiHermantyo</Text>
            <Text style={styles.paragraph}>
              Permission is hereby granted, free of charge, to any person
              obtaining a copy of this software and associated documentation
              files (the “Software”), to deal in the Software without
              restriction, including without limitation the rights to use, copy,
              modify, merge, publish, distribute, sublicense, and/or sell copies
              of the Software, and to permit persons to whom the Software is
              furnished to do so, subject to the following conditions:
            </Text>
            <Text style={styles.paragraph}>
              The above copyright notice and this permission notice shall be
              included in all copies or substantial portions of the Software.
            </Text>
            <Text style={styles.paragraph}>
              THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
              EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
              NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
              HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
              WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
              DEALINGS IN THE SOFTWARE.
            </Text>
          </CenterColumn>
        </SafeAreaView>
      </ScrollView>
    </ScreenBackground>
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
