import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { BannerAd, AdViewPosition } from '../../src/index';
import AppButton from './components/AppButton';
const ProgrammaticBannerExample = ({ adUnitId, isInitialized, log, isNativeUIBannerShowing, isProgrammaticBannerShowing, setIsProgrammaticBannerShowing, }) => {
    const [isProgrammaticBannerCreated, setIsProgrammaticBannerCreated] = useState(false);
    useEffect(() => {
        setupEventListeners();
    }, []);
    const setupEventListeners = () => {
        BannerAd.addAdLoadedEventListener((adInfo) => {
            log('Banner ad loaded from ' + adInfo.networkName);
        });
        BannerAd.addAdLoadFailedEventListener((errorInfo) => {
            log('Banner ad failed to load with error code ' + errorInfo.code + ' and message: ' + errorInfo.message);
        });
        BannerAd.addAdClickedEventListener(( /* adInfo: AdInfo */) => {
            log('Banner ad clicked');
        });
        BannerAd.addAdExpandedEventListener(( /* adInfo: AdInfo */) => {
            log('Banner ad expanded');
        });
        BannerAd.addAdCollapsedEventListener(( /* adInfo: AdInfo */) => {
            log('Banner ad collapsed');
        });
        BannerAd.addAdRevenuePaidListener((adInfo) => {
            log('Banner ad revenue paid: ' + adInfo.revenue);
        });
    };
    return (_jsx(AppButton, { title: isProgrammaticBannerShowing ? 'Hide Programmatic Banner' : 'Show Programmatic Banner', enabled: isInitialized && !isNativeUIBannerShowing, onPress: () => {
            if (isProgrammaticBannerShowing) {
                BannerAd.hideAd(adUnitId);
            }
            else {
                if (!isProgrammaticBannerCreated) {
                    //
                    // Programmatic banner creation - banners are automatically sized to 320x50
                    // on phones and 728x90 on tablets
                    //
                    BannerAd.createAd(adUnitId, AdViewPosition.BOTTOM_CENTER, 0, 50);
                    // Set background color for banners to be fully functional In this case we
                    // are setting it to black - PLEASE USE HEX STRINGS ONLY
                    BannerAd.setBackgroundColor(adUnitId, '#000000');
                    setIsProgrammaticBannerCreated(true);
                }
                BannerAd.showAd(adUnitId);
            }
            setIsProgrammaticBannerShowing(!isProgrammaticBannerShowing);
        } }));
};
export default ProgrammaticBannerExample;
