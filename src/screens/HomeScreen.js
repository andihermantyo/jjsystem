import React, { memo, useState } from 'react';

import Background from '../components/Background';
import Button from '../components/Button';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';

const HomeScreen = ({ navigation }) => {
  const [loading, setLoading] = useState('');

  const handleSetting = async (type) => {
    setLoading(type);
  };

  return (
    <Background>
      <Header>Selamat Datang di JJSystem</Header>

      <Paragraph>JJ Poultry, Petshop & Dokter Hewan</Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Login
      </Button>
      <Button
        mode="outlined"
        disabled={!!loading.length}
        loading={loading === 'SETTING'}
        onPress={() => handleSetting('SETTING')}
      >
        Pengaturan
      </Button>
    </Background>
  );
};

export default memo(HomeScreen);
