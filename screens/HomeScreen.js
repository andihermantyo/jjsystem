import Header from '../components/Header';
import KeyboardAvoidingComponent from '../components/KeyboardAvoidingComponent';
import Logo from '../components/Logo';
import Paragraph from '../components/Paragraph';

export default function HomeScreen() {
  return (
    <KeyboardAvoidingComponent>
      <>
        <Logo />
        <Header>Selamat Datang di JJSystem</Header>
        <Paragraph>Aplikasi ini dikembangkan & digunakan oleh :</Paragraph>
        <Paragraph>JJ Poultry Petshop & Dokter Hewan</Paragraph>
      </>
    </KeyboardAvoidingComponent>
  );
}
