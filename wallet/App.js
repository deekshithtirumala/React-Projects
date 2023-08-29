import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen, { SocialButton } from "react-native-login-screen";

export default function App() {
  return (
    <LoginScreen
      logoImageSource={require("./assets/icon.png")}
      onLoginPress={() => {}}
      onHaveAccountPress={() => {}}
      onEmailChange={(email: string) => {}}
      onPasswordChange={(password: string) => {}}
    >
      <SocialButton text="Continue with Google" onPress={() => {}} />
      <SocialButton
        text="Continue with Facebook"
        imageSource={require("./assets/favicon.png")}
        onPress={() => {}}
      />
      <SocialButton
        text="Continue with Twitter"
        imageSource={require("./assets/splash.png")}
        onPress={() => {}}
      />
    </LoginScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
