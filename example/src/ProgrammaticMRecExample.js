import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { MRecAd, AdViewPosition } from '../../src/index';
import AppButton from './components/AppButton';
const ProgrammaticMRecExample = ({ adUnitId, isInitialized, log, isNativeUIMRecShowing, isProgrammaticMRecShowing, setIsProgrammaticMRecShowing, }) => {
    const [isProgrammaticMRecCreated, setIsProgrammaticMRecCreated] = useState(false);
    useEffect(() => {
        setupEventListeners();
    }, []);
    const setupEventListeners = () => {
        MRecAd.addAdLoadedEventListener((adInfo) => {
            log('MRec ad loaded from ' + adInfo.networkName);
        });
        MRecAd.addAdLoadFailedEventListener((errorInfo) => {
            log('MRec ad failed to load with error code ' + errorInfo.code + ' and message: ' + errorInfo.message);
        });
        MRecAd.addAdClickedEventListener(( /* adInfo: AdInfo */) => {
            log('MRec ad clicked');
        });
        MRecAd.addAdExpandedEventListener(( /* adInfo: AdInfo */) => {
            log('MRec ad expanded');
        });
        MRecAd.addAdCollapsedEventListener(( /* adInfo: AdInfo */) => {
            log('MRec ad collapsed');
        });
        MRecAd.addAdRevenuePaidListener((adInfo) => {
            log('MRec ad revenue paid: ' + adInfo.revenue);
        });
    };
    return (_jsx(AppButton, { title: isProgrammaticMRecShowing ? 'Hide Programmatic MREC' : 'Show Programmatic MREC', enabled: isInitialized && !isNativeUIMRecShowing, onPress: () => {
            if (isProgrammaticMRecShowing) {
                MRecAd.hideAd(adUnitId);
            }
            else {
                if (!isProgrammaticMRecCreated) {
                    MRecAd.createAd(adUnitId, AdViewPosition.TOP_CENTER);
                    setIsProgrammaticMRecCreated(true);
                }
                MRecAd.showAd(adUnitId);
            }
            setIsProgrammaticMRecShowing(!isProgrammaticMRecShowing);
        } }));
};
export default ProgrammaticMRecExample;
