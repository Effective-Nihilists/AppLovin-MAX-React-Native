import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useEffect, useRef } from 'react';
import { RewardedAd } from '../../src/index';
import AppButton from './components/AppButton';
const MAX_EXPONENTIAL_RETRY_COUNT = 6;
var AdLoadState;
(function (AdLoadState) {
    AdLoadState["notLoaded"] = "NOT_LOADED";
    AdLoadState["loading"] = "LOADING";
    AdLoadState["loaded"] = "LOADED";
})(AdLoadState || (AdLoadState = {}));
const RewardedExample = ({ adUnitId, isInitialized, log }) => {
    const [adLoadState, setAdLoadState] = useState(AdLoadState.notLoaded);
    const retryAttempt = useRef(0);
    useEffect(() => {
        setupEventListeners();
    }, []);
    const setupEventListeners = () => {
        RewardedAd.addAdLoadedEventListener((adInfo) => {
            setAdLoadState(AdLoadState.loaded);
            // Rewarded ad is ready to be shown. AppLovinMAX.isRewardedAdReady(REWARDED_AD_UNIT_ID) will now return 'true'
            log('Rewarded ad loaded from ' + adInfo.networkName);
            // Reset retry attempt
            retryAttempt.current = 0;
        });
        RewardedAd.addAdLoadFailedEventListener((errorInfo) => {
            setAdLoadState(AdLoadState.notLoaded);
            if (retryAttempt.current > MAX_EXPONENTIAL_RETRY_COUNT) {
                log('Rewarded ad failed to load with code ' + errorInfo.code);
                return;
            }
            // Rewarded ad failed to load
            // We recommend retrying with exponentially higher delays up to a maximum delay (in this case 64 seconds)
            retryAttempt.current += 1;
            const retryDelay = Math.pow(2, Math.min(MAX_EXPONENTIAL_RETRY_COUNT, retryAttempt.current));
            log('Rewarded ad failed to load with code ' + errorInfo.code + ' - retrying in ' + retryDelay + 's');
            setTimeout(() => {
                setAdLoadState(AdLoadState.loading);
                log('Rewarded ad retrying to load...');
                RewardedAd.loadAd(adUnitId);
            }, retryDelay * 1000);
        });
        RewardedAd.addAdClickedEventListener(( /* adInfo: AdInfo */) => {
            log('Rewarded ad clicked');
        });
        RewardedAd.addAdDisplayedEventListener(( /* adInfo: AdInfo */) => {
            log('Rewarded ad displayed');
        });
        RewardedAd.addAdFailedToDisplayEventListener(( /* adInfo: AdDisplayFailedInfo */) => {
            setAdLoadState(AdLoadState.notLoaded);
            log('Rewarded ad failed to display');
        });
        RewardedAd.addAdHiddenEventListener(( /* adInfo: AdInfo */) => {
            setAdLoadState(AdLoadState.notLoaded);
            log('Rewarded ad hidden');
        });
        RewardedAd.addAdReceivedRewardEventListener(( /* adInfo: AdRewardInfo */) => {
            log('Rewarded ad granted reward');
        });
        RewardedAd.addAdRevenuePaidListener((adInfo) => {
            log('Rewarded ad revenue paid: ' + adInfo.revenue);
        });
    };
    const getRewardedButtonTitle = () => {
        if (adLoadState === AdLoadState.notLoaded) {
            return 'Load Rewarded Ad';
        }
        else if (adLoadState === AdLoadState.loading) {
            return 'Loading...';
        }
        else {
            return 'Show Rewarded Ad'; // adLoadState.loaded
        }
    };
    return (_jsx(AppButton, { title: getRewardedButtonTitle(), enabled: isInitialized && adLoadState !== AdLoadState.loading, onPress: async () => {
            try {
                const isRewardedReady = await RewardedAd.isAdReady(adUnitId);
                if (isRewardedReady) {
                    RewardedAd.showAd(adUnitId);
                }
                else {
                    log('Loading rewarded ad...');
                    setAdLoadState(AdLoadState.loading);
                    RewardedAd.loadAd(adUnitId);
                }
            }
            catch (error) {
                if (error instanceof Error)
                    log(error.toString());
            }
        } }));
};
export default RewardedExample;
