import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Platform, StyleSheet } from 'react-native';
import { AdView, AdFormat } from '../../src/index';
import AppButton from './components/AppButton';
const NativeMRecExample = ({ adUnitId, isInitialized, log, isNativeUIMRecShowing, isProgrammaticMRecShowing, setIsNativeUIMRecShowing, }) => {
    return (_jsxs(_Fragment, { children: [_jsx(AppButton, { title: isNativeUIMRecShowing ? 'Hide Native UI MREC' : 'Show Native UI MREC', enabled: isInitialized && !isProgrammaticMRecShowing, onPress: () => {
                    setIsNativeUIMRecShowing(!isNativeUIMRecShowing);
                } }), isNativeUIMRecShowing && (_jsx(AdView, { adUnitId: adUnitId, adFormat: AdFormat.MREC, style: styles.mrec, onAdLoaded: (adInfo) => {
                    log('MREC ad loaded from ' + adInfo.networkName);
                }, onAdLoadFailed: (errorInfo) => {
                    log('MREC ad failed to load with error code ' +
                        errorInfo.code +
                        ' and message: ' +
                        errorInfo.message);
                }, onAdClicked: ( /* adInfo: AdInfo */) => {
                    log('MREC ad clicked');
                }, onAdExpanded: ( /* adInfo: AdInfo */) => {
                    log('MREC ad expanded');
                }, onAdCollapsed: ( /* adInfo: AdInfo */) => {
                    log('MREC ad collapsed');
                }, onAdRevenuePaid: (adInfo) => {
                    log('MREC ad revenue paid: ' + adInfo.revenue);
                } }))] }));
};
const styles = StyleSheet.create({
    mrec: {
        position: 'absolute',
        width: '100%',
        height: 250,
        bottom: Platform.select({
            ios: 36, // For bottom safe area
            android: 0,
        }),
    },
});
export default NativeMRecExample;
