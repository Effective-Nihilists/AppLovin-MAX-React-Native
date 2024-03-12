import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Platform, StyleSheet, Text, View, SafeAreaView, Dimensions } from 'react-native';
import AppLovinMAX, { ConsentFlowUserGeography, AppTrackingStatus } from '../../src/index';
import AppLogo from './components/AppLogo';
import AppButton from './components/AppButton';
import InterExample from './InterExample';
import RewardedExample from './RewardedExample';
import ProgrammaticBannerExample from './ProgrammaticBannerExample';
import ProgrammaticMRecExample from './ProgrammaticMRecExample';
import NativeBannerExample from './NativeBannerExample';
import NativeMRecExample from './NativeMRecExample';
import NativeAdViewExample from './NativeAdViewExample';
import ScrolledAdViewExample from './ScrolledAdViewExample';
const App = () => {
    // Create constants
    const SDK_KEY = 'YOUR_SDK_KEY_HERE';
    const INTERSTITIAL_AD_UNIT_ID = Platform.select({
        ios: 'ENTER_IOS_INTERSTITIAL_AD_UNIT_ID_HERE',
        android: 'ENTER_ANDROID_INTERSTITIAL_AD_UNIT_ID_HERE',
        default: '',
    });
    const REWARDED_AD_UNIT_ID = Platform.select({
        ios: 'ENTER_IOS_REWARDED_AD_UNIT_ID_HERE',
        android: 'ENTER_ANDROID_REWARDED_AD_UNIT_ID_HERE',
        default: '',
    });
    const BANNER_AD_UNIT_ID = Platform.select({
        ios: 'ENTER_IOS_BANNER_AD_UNIT_ID_HERE',
        android: 'ENTER_ANDROID_BANNER_AD_UNIT_ID_HERE',
        default: '',
    });
    const MREC_AD_UNIT_ID = Platform.select({
        ios: 'ENTER_IOS_MREC_AD_UNIT_ID_HERE',
        android: 'ENTER_ANDROID_MREC_AD_UNIT_ID_HERE',
        default: '',
    });
    const NATIVE_AD_UNIT_ID = Platform.select({
        ios: 'ENTER_IOS_NATIVE_AD_UNIT_ID_HERE',
        android: 'ENTER_ANDROID_NATIVE_AD_UNIT_ID_HERE',
        default: '',
    });
    // Create states
    const [isInitialized, setIsInitialized] = useState(false);
    const [isProgrammaticBannerShowing, setIsProgrammaticBannerShowing] = useState(false);
    const [isNativeUIBannerShowing, setIsNativeUIBannerShowing] = useState(false);
    const [isProgrammaticMRecShowing, setIsProgrammaticMRecShowing] = useState(false);
    const [isNativeUIMRecShowing, setIsNativeUIMRecShowing] = useState(false);
    const [isNativeAdShowing, setIsNativeAdShowing] = useState(false);
    const [statusText, setStatusText] = useState('Initializing SDK...');
    // Run once after mounting
    useEffect(() => {
        initAppLovinMax();
    }, []);
    // Run when statusText has changed
    useEffect(() => {
        console.log(statusText);
    }, [statusText]);
    const initAppLovinMax = () => {
        if (isInitialized)
            return;
        // MAX Consent Flow - https://dash.applovin.com/documentation/mediation/react-native/getting-started/terms-and-privacy-policy-flow
        AppLovinMAX.setTermsAndPrivacyPolicyFlowEnabled(true);
        AppLovinMAX.setPrivacyPolicyUrl('https://your_company_name.com/privacy/'); // mandatory
        AppLovinMAX.setTermsOfServiceUrl('https://your_company_name.com/terms/'); // optional
        AppLovinMAX.setTestDeviceAdvertisingIds([]);
        AppLovinMAX.initialize(SDK_KEY)
            .then((conf) => {
            setIsInitialized(true);
            setStatusText('SDK Initialized in ' + conf.countryCode);
            console.log('isTestModeEnabled: ' + conf.isTestModeEnabled);
            console.log('consentFlowUserGeography: ' +
                Object.keys(ConsentFlowUserGeography)[Object.values(ConsentFlowUserGeography).indexOf(conf.consentFlowUserGeography)]);
            // AppTrackingStatus for iOS
            if (conf.appTrackingStatus) {
                console.log('appTrackingStatus: ' +
                    Object.keys(AppTrackingStatus)[Object.values(AppTrackingStatus).indexOf(conf.appTrackingStatus)]);
            }
        })
            .catch((error) => {
            setStatusText(error.toString());
        });
    };
    return (_jsx(SafeAreaView, { children: _jsxs(View, { style: styles.container, children: [_jsx(AppLogo, {}), _jsx(Text, { style: styles.statusText, children: statusText }), _jsx(AppButton, { title: "Mediation Debugger", enabled: isInitialized, onPress: () => {
                        AppLovinMAX.showMediationDebugger();
                    } }), _jsx(InterExample, { adUnitId: INTERSTITIAL_AD_UNIT_ID, log: setStatusText, isInitialized: isInitialized }), _jsx(RewardedExample, { adUnitId: REWARDED_AD_UNIT_ID, log: setStatusText, isInitialized: isInitialized }), _jsx(ProgrammaticBannerExample, { adUnitId: BANNER_AD_UNIT_ID, log: setStatusText, isInitialized: isInitialized, isNativeUIBannerShowing: isNativeUIBannerShowing, isProgrammaticBannerShowing: isProgrammaticBannerShowing, setIsProgrammaticBannerShowing: setIsProgrammaticBannerShowing }), _jsx(ProgrammaticMRecExample, { adUnitId: MREC_AD_UNIT_ID, log: setStatusText, isInitialized: isInitialized, isNativeUIMRecShowing: isNativeUIMRecShowing, isProgrammaticMRecShowing: isProgrammaticMRecShowing, setIsProgrammaticMRecShowing: setIsProgrammaticMRecShowing }), _jsx(NativeBannerExample, { adUnitId: BANNER_AD_UNIT_ID, log: setStatusText, isInitialized: isInitialized, isNativeUIBannerShowing: isNativeUIBannerShowing, isProgrammaticBannerShowing: isProgrammaticBannerShowing, setIsNativeUIBannerShowing: setIsNativeUIBannerShowing }), _jsx(NativeMRecExample, { adUnitId: MREC_AD_UNIT_ID, log: setStatusText, isInitialized: isInitialized, isNativeUIMRecShowing: isNativeUIMRecShowing, isProgrammaticMRecShowing: isProgrammaticMRecShowing, setIsNativeUIMRecShowing: setIsNativeUIMRecShowing }), _jsx(NativeAdViewExample, { adUnitId: NATIVE_AD_UNIT_ID, isInitialized: isInitialized, log: setStatusText, isNativeAdShowing: isNativeAdShowing, setIsNativeAdShowing: setIsNativeAdShowing }), _jsx(ScrolledAdViewExample, { bannerAdUnitId: BANNER_AD_UNIT_ID, mrecAdUnitId: MREC_AD_UNIT_ID, isInitialized: isInitialized, isNativeAdShowing: isNativeAdShowing })] }) }));
};
const styles = StyleSheet.create({
    container: {
        height: Platform.select({
            ios: Dimensions.get('window').height - 44, // For top safe area
            android: Dimensions.get('window').height,
        }),
    },
    statusText: {
        marginBottom: 10,
        backgroundColor: 'green',
        padding: 10,
        fontSize: 20,
        textAlign: 'center',
    },
});
export default App;
