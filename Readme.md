# SMS PULP

SMS PULP Mobile App Repository


Creating App: 
react-native init smspulp -package "com.smspulp.android"

Kill the ADB Server : adb kill-server && adb start-server


Reference : https://dev.to/zilurrane/generate-release-mode-apk-for-react-native-project-to-publish-on-playstore-5f78

Generate Keystore for android : 
    keytool -genkey -v -keystore spkeystore.keystore -alias spkeystore -keyalg RSA -keysize 5050 -validity 10000
SG KeyStore Password : 
    1234567890

Build Sign APK:
    cd android && ./gradlew assembleRelease

