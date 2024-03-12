import { jsx as _jsx } from "react/jsx-runtime";
import { useState, createContext } from 'react';
export const NativeAdViewContext = createContext({
    nativeAd: { isOptionsViewAvailable: false, isMediaViewAvailable: false },
    nativeAdView: null,
    setNativeAd: () => { },
    setNativeAdView: () => { },
});
export const NativeAdViewProvider = (props) => {
    const [nativeAd, setNativeAd] = useState({
        isOptionsViewAvailable: false,
        isMediaViewAvailable: false,
    });
    const [nativeAdView, setNativeAdView] = useState(Object);
    const providerValue = {
        nativeAd,
        nativeAdView,
        setNativeAd,
        setNativeAdView,
    };
    return _jsx(NativeAdViewContext.Provider, { value: providerValue, children: props.children });
};
