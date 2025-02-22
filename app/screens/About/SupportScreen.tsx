import { Linking, ScrollView, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import CenterColumn from '../../components/CenterColumn';
import ScreenBackground from '../../components/ScreenBackground';
import VerticalButtonGroup from '../../components/VerticalButtonGroup';
import SharedStyles from '../../constants/SharedStyles';

export default function SupportScreen() {
  return (
    <ScreenBackground>
      <ScrollView contentContainerStyle={SharedStyles.bodyPadding}>
        <SafeAreaView edges={['left', 'right', 'bottom']}>
          <CenterColumn>
            <Text>
              You have two options for getting support with AndiHermantyo:
            </Text>
            <VerticalButtonGroup>
              <Button
                mode="contained"
                style={styles.button}
                onPress={() =>
                  Linking.openURL(
                    'https://github.com/andihermantyo/jjsystem/issues',
                  )
                }
              >
                Open a GitHub Issue
              </Button>
              <Button
                mode="contained"
                style={styles.button}
                onPress={() =>
                  Linking.openURL('mailto:andihermantyo@gmail.com')
                }
              >
                Email Support
              </Button>
            </VerticalButtonGroup>
          </CenterColumn>
        </SafeAreaView>
      </ScrollView>
    </ScreenBackground>
  );
}

const styles = StyleSheet.create({
  button: {
    marginBottom: 10,
  },
});
