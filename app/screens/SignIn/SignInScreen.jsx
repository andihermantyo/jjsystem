import * as Application from 'expo-application';
import { Platform, StyleSheet } from 'react-native';
import { Button, TextInput, Title } from 'react-native-paper';

import ButtonGroup from '../../components/ButtonGroup';
import CenterColumn from '../../components/CenterColumn';
import ScreenBackground from '../../components/ScreenBackground';
import SharedStyleQueries from '../../constants/SharedStyleQueries';
import sharedStyles from '../../constants/SharedStyles';
import useStyleQueries from '../../hooks/useStyleQueries';

export default function SignInForm() {
  const responsiveStyles = useStyleQueries(SharedStyleQueries);

  return (
    <ScreenBackground style={sharedStyles.bodyPadding}>
      <CenterColumn>
        <Title style={styles.tagline}>
          Selamat datang di{' '}
          {Platform.OS === 'android' ? Application.applicationName : 'JJSystem'}
        </Title>
        <TextInput
          label="Alamat Email"
          accessibilityLabel="Email Address"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          label="Kata Kunci"
          accessibilityLabel="Password"
          secureTextEntry
        />
        <ButtonGroup>
          <Button
            mode="contained"
            onPress={() => {}}
            style={responsiveStyles.button}
            accessibilityLabel="Sign In"
          >
            Masuk
          </Button>
        </ButtonGroup>
      </CenterColumn>
    </ScreenBackground>
  );
}

const styles = StyleSheet.create({
  tagline: {
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
});
