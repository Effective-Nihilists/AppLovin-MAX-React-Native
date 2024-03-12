import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Platform, StyleSheet } from 'react-native';
import { AdView, AdFormat } from '../../src/index';
import AppButton from './components/AppButton';
const NativeBannerExample = ({ adUnitId, isInitialized, log, isNativeUIBannerShowing, isProgrammaticBannerShowing, setIsNativeUIBannerShowing, }) => {
    return (_jsxs(_Fragment, { children: [_jsx(AppButton, { title: isNativeUIBannerShowing ? 'Hide Native UI Banner' : 'Show Native UI Banner', enabled: isInitialized && !isProgrammaticBannerShowing, onPress: () => {
                    setIsNativeUIBannerShowing(!isNativeUIBannerShowing);
                } }), isNativeUIBannerShowing && (_jsx(AdView, { adUnitId: adUnitId, adFormat: AdFormat.BANNER, style: styles.banner, onAdLoaded: (adInfo) => {
                    log('Banner ad loaded from ' + adInfo.networkName);
                }, onAdLoadFailed: (errorInfo) => {
                    log('Banner ad failed to load with error code ' +
                        errorInfo.code +
                        ' and message: ' +
                        errorInfo.message);
                }, onAdClicked: ( /* adInfo: AdInfo */) => {
                    log('Banner ad clicked');
                }, onAdExpanded: ( /* adInfo: AdInfo */) => {
                    log('Banner ad expanded');
                }, onAdCollapsed: ( /* adInfo: AdInfo */) => {
                    log('Banner ad collapsed');
                }, onAdRevenuePaid: (adInfo) => {
                    log('Banner ad revenue paid: ' + adInfo.revenue);
                } }))] }));
};
const styles = StyleSheet.create({
    banner: {
        // Set background color for banners to be fully functional
        backgroundColor: '#000000',
        position: 'absolute',
        width: '100%',
        // Automatically sized to 50 on phones and 90 on tablets. When adaptiveBannerEnabled is on,
        // sized to AppLovinMAX.getAdaptiveBannerHeightForWidth().
        height: 'auto',
        bottom: Platform.select({
            ios: 36, // For bottom safe area
            android: 0,
        }),
    },
});
export default NativeBannerExample;
