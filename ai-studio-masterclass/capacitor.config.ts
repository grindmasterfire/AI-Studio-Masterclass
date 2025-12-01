import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.cipherworks.masterclass',
  appName: 'AI Studio Masterclass',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 0,
      launchAutoHide: true,
      backgroundColor: "#020617",
      androidSplashResourceName: "splash"
    }
  }
};

export default config;