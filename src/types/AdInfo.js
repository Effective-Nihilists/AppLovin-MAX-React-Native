/**
 * This enum contains possible states of an ad in the waterfall.
 * Each adapter response {@link AdNetworkResponseInfo} corresponds to one of these states.
 */
export var AdLoadState;
(function (AdLoadState) {
    /**
     * The AppLovin MAX SDK did not attempt to load an ad from this network in the waterfall because
     * an ad higher in the waterfall loaded successfully.
     */
    AdLoadState[AdLoadState["LoadStateAdLoadNotAttempted"] = 0] = "LoadStateAdLoadNotAttempted";
    /**
     * An ad successfully loaded from this network.
     */
    AdLoadState[AdLoadState["LoadStateAdLoaded"] = 1] = "LoadStateAdLoaded";
    /**
     * An ad failed to load from this network.
     */
    AdLoadState[AdLoadState["LoadStateAdFailedToLoad"] = 2] = "LoadStateAdFailedToLoad";
})(AdLoadState || (AdLoadState = {}));
