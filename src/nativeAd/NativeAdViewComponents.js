import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext, useRef, useEffect } from 'react';
import { findNodeHandle, Text, Image, View, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeAdViewContext } from './NativeAdViewProvider';
export const TitleView = (props) => {
    const titleRef = useRef(null);
    const { nativeAd, nativeAdView } = useContext(NativeAdViewContext);
    useEffect(() => {
        if (!nativeAd.title || !titleRef.current)
            return;
        nativeAdView?.setNativeProps({
            titleView: findNodeHandle(titleRef.current),
        });
    }, [nativeAd]);
    return (_jsx(Text, { ...props, ref: titleRef, children: nativeAd.title || null }));
};
export const AdvertiserView = (props) => {
    const advertiserRef = useRef(null);
    const { nativeAd, nativeAdView } = useContext(NativeAdViewContext);
    useEffect(() => {
        if (!nativeAd.advertiser || !advertiserRef.current)
            return;
        nativeAdView?.setNativeProps({
            advertiserView: findNodeHandle(advertiserRef.current),
        });
    }, [nativeAd]);
    return (_jsx(Text, { ...props, ref: advertiserRef, children: nativeAd.advertiser || null }));
};
export const BodyView = (props) => {
    const bodyRef = useRef(null);
    const { nativeAd, nativeAdView } = useContext(NativeAdViewContext);
    useEffect(() => {
        if (!nativeAd.body || !bodyRef.current)
            return;
        nativeAdView?.setNativeProps({
            bodyView: findNodeHandle(bodyRef.current),
        });
    }, [nativeAd]);
    return (_jsx(Text, { ...props, ref: bodyRef, children: nativeAd.body || null }));
};
export const CallToActionView = (props) => {
    const callToActionRef = useRef(null);
    const { nativeAd, nativeAdView } = useContext(NativeAdViewContext);
    useEffect(() => {
        if (!nativeAd.callToAction || !callToActionRef.current)
            return;
        nativeAdView?.setNativeProps({
            callToActionView: findNodeHandle(callToActionRef.current),
        });
    }, [nativeAd]);
    return (_jsx(TouchableOpacity, { children: _jsx(Text, { ...props, ref: callToActionRef, children: nativeAd.callToAction || null }) }));
};
export const IconView = (props) => {
    const imageRef = useRef(null);
    const { nativeAd, nativeAdView } = useContext(NativeAdViewContext);
    useEffect(() => {
        if (!nativeAd.image || !imageRef.current)
            return;
        nativeAdView?.setNativeProps({
            iconView: findNodeHandle(imageRef.current),
        });
    }, [nativeAd]);
    return nativeAd.url ? (_jsx(Image, { ...props, source: { uri: nativeAd.url } })) : nativeAd.image ? (_jsx(Image, { ...props, ref: imageRef, source: 0 })) : (_jsx(View, { ...props }));
};
export const OptionsView = (props) => {
    const viewRef = useRef(null);
    const { nativeAd, nativeAdView } = useContext(NativeAdViewContext);
    useEffect(() => {
        if (!nativeAd.isOptionsViewAvailable || !viewRef.current)
            return;
        nativeAdView?.setNativeProps({
            optionsView: findNodeHandle(viewRef.current),
        });
    }, [nativeAd]);
    return _jsx(View, { ...props, ref: viewRef });
};
export const MediaView = (props) => {
    const viewRef = useRef(null);
    const { nativeAd, nativeAdView } = useContext(NativeAdViewContext);
    useEffect(() => {
        if (!nativeAd.isMediaViewAvailable || !viewRef.current)
            return;
        nativeAdView?.setNativeProps({
            mediaView: findNodeHandle(viewRef.current),
        });
    }, [nativeAd]);
    return _jsx(View, { ...props, ref: viewRef });
};
export const StarRatingView = (props) => {
    const { style, ...restProps } = props;
    const maxStarCount = 5;
    const starColor = StyleSheet.flatten(style || {}).color ?? '#ffe234';
    const starSize = StyleSheet.flatten(style || {}).fontSize ?? 10;
    const { nativeAd } = useContext(NativeAdViewContext);
    const FilledStar = () => {
        return (
        // black star in unicode
        _jsx(Text, { style: { fontSize: starSize, color: starColor }, children: String.fromCodePoint(0x2605) }));
    };
    const EmptyStar = () => {
        return (
        // white star in unicode
        _jsx(Text, { style: { fontSize: starSize, color: starColor }, children: String.fromCodePoint(0x2606) }));
    };
    return (_jsx(View, { ...restProps, style: [style, { flexDirection: 'row', alignItems: 'center' }], children: (() => {
            const stars = [];
            for (let index = 0; index < maxStarCount; index++) {
                if (nativeAd.starRating) {
                    const width = (nativeAd.starRating - index) * starSize;
                    stars.push(_jsxs(View, { children: [_jsx(EmptyStar, {}), nativeAd.starRating > index && (_jsx(View, { style: {
                                    width: width,
                                    overflow: 'hidden',
                                    position: 'absolute',
                                }, children: _jsx(FilledStar, {}) }))] }, index));
                }
                else {
                    stars.push(_jsx(Text, { style: { fontSize: starSize }, children: ' ' }, index));
                }
            }
            return stars;
        })() }));
};
