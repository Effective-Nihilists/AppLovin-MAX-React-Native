import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect, useRef, useCallback } from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { NativeAdView, TitleView, AdvertiserView, BodyView, CallToActionView, IconView, OptionsView, MediaView, StarRatingView, } from '../../src/index';
import AppButton from './components/AppButton';
export const NativeAdViewExample = ({ adUnitId, isInitialized, log, isNativeAdShowing, setIsNativeAdShowing, }) => {
    const DEFAULT_ASPECT_RATIO = 16 / 9;
    const [aspectRatio, setAspectRatio] = useState(DEFAULT_ASPECT_RATIO);
    const [mediaViewSize, setMediaViewSize] = useState({});
    const [isNativeAdLoading, setIsNativeAdLoading] = useState(false);
    // Ref for NativeAdView
    const nativeAdViewRef = useRef(null);
    // adjust the size of MediaView when `aspectRatio` changes
    useEffect(() => {
        if (aspectRatio > 1) {
            // landscape
            setMediaViewSize({ aspectRatio: aspectRatio, width: '80%', height: undefined });
        }
        else {
            // portrait or square
            setMediaViewSize({ aspectRatio: aspectRatio, width: undefined, height: 180 });
        }
    }, [aspectRatio]);
    const NativeAdExample = useCallback(() => {
        return (_jsx(NativeAdView, { adUnitId: adUnitId, placement: "myplacement", customData: "mycustomdata", ref: nativeAdViewRef, style: styles.nativead, onAdLoaded: (adInfo) => {
                if (adInfo?.nativeAd?.mediaContentAspectRatio) {
                    setAspectRatio(adInfo?.nativeAd?.mediaContentAspectRatio);
                }
                log('Native ad loaded from ' + adInfo.networkName);
                setIsNativeAdLoading(false);
            }, onAdLoadFailed: (errorInfo) => {
                log('Native ad failed to load with error code ' +
                    errorInfo.code +
                    ' and message: ' +
                    errorInfo.message);
                setIsNativeAdLoading(false);
            }, onAdClicked: (adInfo) => {
                log('Native ad clicked on ' + adInfo.adUnitId);
            }, onAdRevenuePaid: (adInfo) => {
                log('Native ad revenue paid: ' + adInfo.revenue);
            }, children: _jsxs(View, { style: { flex: 1, flexDirection: 'column' }, children: [_jsxs(View, { style: { flexDirection: 'row', justifyContent: 'space-between' }, children: [_jsx(IconView, { style: styles.icon }), _jsxs(View, { style: { flexDirection: 'column', flexGrow: 1 }, children: [_jsx(TitleView, { style: styles.title }), _jsx(AdvertiserView, { style: styles.advertiser }), _jsx(StarRatingView, { style: styles.starRatingView })] }), _jsx(OptionsView, { style: styles.optionsView })] }), _jsx(BodyView, { style: styles.body }), _jsx(MediaView, { style: { ...styles.mediaView, ...mediaViewSize } }), _jsx(CallToActionView, { style: styles.callToAction })] }) }));
    }, []);
    return (_jsxs(_Fragment, { children: [_jsx(AppButton, { title: isNativeAdShowing ? 'Hide Native Ad' : 'Show Native Ad', enabled: isInitialized, onPress: () => {
                    setIsNativeAdShowing(!isNativeAdShowing);
                } }), isNativeAdShowing && (_jsxs(View, { style: styles.container, children: [_jsx(NativeAdExample, {}), _jsx(AppButton, { title: 'RELOAD', enabled: !isNativeAdLoading, onPress: () => {
                            setIsNativeAdLoading(true);
                            nativeAdViewRef.current?.loadAd();
                        } }), _jsx(AppButton, { title: 'CLOSE', enabled: !isNativeAdLoading, onPress: () => {
                            setIsNativeAdShowing(!isNativeAdShowing);
                        } })] }))] }));
};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#0583aa',
        position: 'absolute',
        top: '15%',
        width: '100%',
        paddingBottom: 10,
        zIndex: 1,
        elevation: Platform.OS === 'android' ? 1 : 0,
    },
    nativead: {
        margin: 10,
        padding: 10,
        backgroundColor: '#EFEFEF',
    },
    title: {
        fontSize: 16,
        marginTop: 4,
        marginHorizontal: 5,
        textAlign: 'left',
        fontWeight: 'bold',
        color: 'black',
    },
    icon: {
        margin: 5,
        height: 48,
        aspectRatio: 1,
        borderRadius: 5,
    },
    optionsView: {
        height: 20,
        width: 20,
        backgroundColor: '#EFEFEF',
    },
    starRatingView: {
        marginHorizontal: 5,
        fontSize: 10, // size of each star as unicode symbol
        color: '#ffe234',
        backgroundColor: '#EFEFEF',
    },
    advertiser: {
        marginHorizontal: 5,
        textAlign: 'left',
        fontSize: 12,
        fontWeight: '400',
        color: 'gray',
    },
    body: {
        fontSize: 14,
        marginVertical: 4,
    },
    mediaView: {
        alignSelf: 'center',
        height: 200,
        width: '100%',
        zIndex: 1,
        elevation: Platform.OS === 'android' ? 1 : 0,
    },
    callToAction: {
        padding: 5,
        width: '100%',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: 'white',
        backgroundColor: '#2d545e',
    },
});
export default NativeAdViewExample;
