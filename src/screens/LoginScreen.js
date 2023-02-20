import React, { memo, useState } from 'react';

import BackButton from '../components/BackButton';
import Background from '../components/Background';
import Button from '../components/Button';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import TextInput from '../components/TextInput';
import { emailValidator, passwordValidator } from '../core/utils';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });

  const [loading, setLoading] = useState('');

  const _onLoginPressed = async (type) => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    setLoading(type);
  };

  return (
    <Background>
      <BackButton goBack={() => navigation.navigate('HomeScreen')} />

      <Header>Selamat Datang di JJSystem</Header>

      <Paragraph>Silahkan Masuk</Paragraph>

      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />

      <Button
        mode="contained"
        disabled={!!loading.length}
        loading={loading === 'LOGIN'}
        onPress={() => _onLoginPressed('LOGIN')}
      >
        Login
      </Button>
    </Background>
  );
};

export default memo(LoginScreen);
