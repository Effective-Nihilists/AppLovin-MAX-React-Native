import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { StyleSheet, Text, ScrollView, View, Dimensions, Platform } from 'react-native';
import { AdFormat, AdView } from '../../src/index';
import AppButton from './components/AppButton';
const ScrolledAdViewExample = ({ bannerAdUnitId, mrecAdUnitId, isInitialized, isNativeAdShowing }) => {
    const [isAdEnabled, setIsAdEnabled] = useState(true);
    const [isScrollViewShowing, setIsScrollViewShowing] = useState(false);
    return (_jsxs(_Fragment, { children: [_jsx(AppButton, { title: isScrollViewShowing ? 'Hide Scrolled AdViews' : 'Show Scrolled AdViews', enabled: isInitialized && !isNativeAdShowing, onPress: () => {
                    setIsScrollViewShowing(!isScrollViewShowing);
                } }), isScrollViewShowing && (_jsxs(View, { style: styles.container, children: [_jsxs(ScrollView, { style: styles.scrollView, children: [_jsx(AppButton, { title: 'CLOSE', enabled: true, onPress: () => {
                                    setIsScrollViewShowing(false);
                                } }), _jsx(AppButton, { title: isAdEnabled ? 'DISABLE ADS' : 'ENABLE ADS', enabled: true, onPress: () => {
                                    setIsAdEnabled(!isAdEnabled);
                                } }), [...Array(4)].map((_, i) => (_jsxs(View, { children: [_jsx(Text, { style: styles.text, children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }, i + '-1'), isAdEnabled ? (i % 2 == 0 ? (_jsx(AdView, { adUnitId: bannerAdUnitId, adFormat: AdFormat.BANNER, style: styles.adview }, i + '-2')) : (_jsx(AdView, { adUnitId: mrecAdUnitId, adFormat: AdFormat.MREC, style: styles.adview }, i + '-2'))) : (_jsx(Text, { style: styles.placeholder, children: "AD PLACEHOLDER" }, i + '-2')), _jsx(Text, { style: styles.text, children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }, i + '-3')] }, i)))] }), isAdEnabled ? (_jsx(AdView, { adUnitId: bannerAdUnitId, adFormat: AdFormat.BANNER, style: styles.adview })) : (_jsx(Text, { style: styles.placeholder, children: "AD PLACEHOLDER" }))] }))] }));
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: Platform.select({
            ios: Dimensions.get('window').height - 36 - 50,
            android: Dimensions.get('window').height,
        }),
        zIndex: 1,
        elevation: Platform.OS === 'android' ? 1 : 0,
    },
    scrollView: {
        backgroundColor: 'pink',
    },
    text: {
        margin: 10,
        fontSize: 20,
    },
    adview: {
        width: '100%',
        height: 'auto',
    },
    placeholder: {
        marginTop: 10,
        backgroundColor: 'lightblue',
        fontSize: 40,
        textAlign: 'center',
        height: 50,
    },
});
export default ScrolledAdViewExample;
