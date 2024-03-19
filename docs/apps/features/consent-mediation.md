# Consent Mediation

This feature was introduced in its beta version with the release of 2.7.0. Starting from version 2.11.0, it has transitioned to a stable version, offering enhanced functionality.

!!! danger "IMPORTANT"
    Please make sure to follow all the steps outlined below and that consent is being passed correctly before pushing this feature to production.

To simplify the process of signalling consent to third-party SDKs, we added a mediation feature, that works with APIs of SDKs listed below. This feature **will update the consent when necessary within your application**.
Moreover, this functionality allows you to effortlessly activate [Google Consent Mode](google-consent-mode.md) and connect to advertising and mediation tools that, for instance, may not be part of TCF.

Once correctly implemented, this feature simplifies the transmission of the consent signal and privacy choices to selected third-party SDKs.

However, it is always advisable to review and assess the documentation, privacy policy, and privacy section of third-party vendor SDKs before deciding to work with them or integrating any.

Please note that Usercentrics cannot fully guarantee the compliance of collection mechanisms of third-party vendors and SDKs.

## Enable Mediation

=== "Swift<center><sub>iOS</sub></center>"

    ```swift
    let options = UsercentricsOptions(settingsId: <SettingsID>, consentMediation: true)
    ```

=== "Kotlin<center><sub>Android</sub></center>"

    ```kotlin
    val options = UsercentricsOptions(settingsId = <SettingsID>, consentMediation = true)
    ```

!!! success "That's it! 🚀 we will now apply consent automatically to all [supported SDKs](#supported-sdks)."
    Make sure you [apply consent](../integration/apply-consent.md) to not supported SDKs as well.

<!--
if this table gets updated ---> change /games version as well
-->

## Supported SDKs

| SDK                           | Supported version              | Template ID | Added in | Source                                                                                                                                                                                                                                                           |
|-------------------------------|--------------------------------|-------------|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Google Analytics for Firebase | 21.5.0 (Android) 10.17.0 (iOS) | diWdt4yLB   | 2.7.0    | [Analytics data collection and usage](https://firebase.google.com/docs/analytics/configure-data-collection)                                                                                                                                                      |
| Unity Ads                     | 3.7.5 (Android) 4.2.1 (iOS)    | hpb62D82I   | 2.7.0    | [Privacy consent and data APIs](https://docs.unity.com/ads/ImplementingDataPrivacy.html)                                                                                                                                                                         |
| AppLovin                      | 11.4.4 (Android) 11.4.3 (iOS)  | fHczTMzX8   | 2.7.0    | Privacy-Consent and Data API for [iOS](https://dash.applovin.com/documentation/mediation/ios/getting-started/privacy) and [Android](https://dash.applovin.com/documentation/mediation/android/getting-started/privacy)                                           |
| ironSource                    | 7.1.10 (Android) 7.3.0 (iOS)   | 9dchbL797   | 2.7.0    | Regulation Advanced Settings for [iOS](https://developers.is.com/ironsource-mobile/ios/regulation-advanced-settings) and [Android](https://developers.is.com/ironsource-mobile/android/regulation-advanced-settings)                                             |
| Crashlytics                   | 18.3.3 (Android) 10.4.0 (iOS)  | cE0B0wy4Z   | 2.7.12   | Privacy-Consent and Data API for [iOS](https://firebase.google.com/docs/crashlytics/customize-crash-reports?platform=ios#enable-reporting) and [Android](https://firebase.google.com/docs/crashlytics/customize-crash-reports?platform=android#enable-reporting) |
| Adjust                        | 4.33.0 (Android) 4.33.3 (iOS)  | Jy6PlrM3    | 2.7.12   | Privacy-Consent and Data API for [iOS](https://help.adjust.com/en/article/privacy-features-ios-sdk) and [Android](https://help.adjust.com/en/article/privacy-features-android-sdk)                                                                               |
| Chartboost                    | 9.5.0 (Android) 9.5.1 (iOS)    | IEbRp3saT   | 2.11.0   | Privacy API for [iOS](https://docs.chartboost.com/en/monetization/integrate/ios/sdk-privacy-methods/) and [Android](https://docs.chartboost.com/en/monetization/integrate/android/sdk-privacy-methods/)                                                          |

It is essential to thoroughly review the documentation of each SDK to identify the specific APIs necessary for accurately signaling user consent.
Please refer to our [detailed implementation](#our-integration-with-sdks) guidelines for each SDK mentioned above.

Be aware that some SDKs, such as [Crashlytics](https://firebase.google.com/docs/crashlytics), may automatically collect data by default.
Therefore, it is essential to thoroughly verify whether they offer an API that allows you to [disable this data collection](https://firebase.google.com/docs/crashlytics/customize-crash-reports?platform=ios#enable-reporting) prior to initialization.

Although most SDKs maintain consistent contracts for Privacy APIs in their updates, any changes must be noted, and the appropriate API should be used accordingly.
Remember, rigorous testing is vital for success. While our feature addresses a majority of scenarios, it is imperative that you personally verify the expected behavior in your specific use case.

!!! warning
    Ensure that the version of the SDK in your application matches the one we currently support.
    In case of any doubt, double check our SDKs Integration section in the [bottom](#our-integration-with-sdks) of this page.

## Supported Mediation SDKs
These SDKs mediate consent for selected SDKs themselves. Make sure you setup the correct TemplateIDs to automatically pass consent to mediated SDKs.

#### Adjust

Check out the [documentation page](https://help.adjust.com/en/article/privacy-features-ios-sdk#available-partners) to get an insight on the Partners API.
Note that we only support the ones listed below.

| SDK                       | Template ID    |
|---------------------------|----------------|
| Apple Ads                 | weoN4Lb_MjWLuu |
| Facebook                  | ocv9HNX_g      |
| Google Ads                | S1_9Vsuj-Q     |
| Google Marketing Platform | t-TPeXsRi      |
| Snapchat                  | QcD9GVNXZ      |
| Tencent                   | tMLzMavbHZoxW0 |
| TikTokSan                 | 6-qobRfu       |
| Twitter                   | Skj79NodobQ    |
| Yahoo Gemini              | HJSPc4ids-Q    |
| Yahoo Japan Search        | gUbemZYaQwqxss |

## Custom DPS
When creating a Custom DPS, it's **Template ID** will be new and unique. For this reason, if you want to use Consent Mediation, you need to modify the default Template ID we provide in the tables above. you will need to provide this information to our SDK for Consent Mediation to know how to match your Custom DPS with the SDK you are passing consent.

!!! warning 
    The setup below should always happen before Usercentrics is initialized

To do this, we have provided the  object **UsercentricsMediation**. *e.g. If you want to switch the TemplateID for **Unity Ads**:*


=== "Swift<center><sub>iOS</sub></center>"

    ```swift    
    UsercentricsMediation.shared.unityAdsTemplateId = "CustomTemplateId"
    ```

=== "Kotlin<center><sub>Android</sub></center>"

    ```kotlin
    UsercentricsMediation.unityAdsTemplateId = "CustomTemplateId"
    ```

You can customize the Template ID for SDKs that are mediated by supported SDKs. *e.g SDKs that are mediated by Adjust:*

=== "Swift<center><sub>iOS</sub></center>"

    ```swift    
    UsercentricsMediation.Adjust.shared.snapchatTemplateId = "CustomTemplateId"
    ```

=== "Kotlin<center><sub>Android</sub></center>"

    ```kotlin
    UsercentricsMediation.Adjust.snapchatTemplateId = "CustomTemplateId"
    ```

## Debugging

!!! tip "Debug Mode"
    To see debug messages, please set the SDK's [loggerLevel](../integration/configure.md#device-options) to DEBUG.

When running your application with Consent Mediation enabled, you should expect the following events:

**Enable Confirmation**

Immediately after initialization, you will get a confirmation that Consent Mediation is Enabled:
```
[USERCENTRICS] Consent Mediation is Enabled
```

**Scan**

After your configuration has been loaded, the SDK will provide an overview of the supported services:
```
[USERCENTRICS][Mediation] 2/6 Services are supported: Unity Ads | Google Analytics for Firebase
```

**Mediation**

Whenever a user provides consent or the SDK has been initialized, the SDK will apply the latest user choices to each supported SDK:

```
[USERCENTRICS][Mediation] ✅ Google Analytics for Firebase: TRUE
[USERCENTRICS][Mediation] ✅ Unity Ads: FALSE
```

!!! warning "Default Consent" 
    On first launch, you will see consent is applied immediately after initialization, even when a user still has not given consent. This happens because the **default consent** provided in your configuration is being applied.

!!! warning
    If your workflow necessitates the simultaneous initialization of certain SDKs alongside Usercentrics, be aware of potential racing conditions.
    
    These can arise when the Mediation routine is executed while an SDK is still in the process of initialization.
    To mitigate such issues, we strongly advise initializing SDKs only after obtaining user consent.
    For more detailed guidance on this approach, please refer to our further recommendations [here.](../integration/apply-consent.md)

## Our Integration With SDKS

In this section, we provide a detailed overview of our methods for mediating consents.
This initiative is part of our commitment to transparency, offering you clear insights into how we integrate with third-party SDKs to effectively signal user consent.

#### Google Analytics for Firebase

=== "Swift<center><sub>iOS</sub></center>"
    ```swift
    import FirebaseAnalytics
    
    let consent = .granted || .denied

    Analytics.setAnalyticsCollectionEnabled(true || false)
    Analytics.setConsent([
      .analyticsStorage: consent
    ])
    ```

=== "Kotlin<center><sub>Android</sub></center>"
    ```kotlin
    import com.google.firebase.ktx.Firebase
    import com.google.firebase.analytics.ktx.analytics
    import com.google.firebase.analytics.FirebaseAnalytics.ConsentStatus
    
    val consent = ConsentStatus.GRANTED || ConsentStatus.DENIED

    Firebase.analytics.apply {
        setAnalyticsCollectionEnabled(true || false)
        setConsent {
            analyticsStorage(consent)
        }
    }
    ```

#### Unity Ads

=== "Swift<center><sub>iOS</sub></center>"
    ```swift
    import UnityAds
    
    let key = "gdpr.consent" || "privacy.consent"
    let consent = true || false
    
    let metaData = UADSMetaData()
    metaData.setRaw(key, value: consent)
    metaData.commit()
    ```

=== "Kotlin<center><sub>Android</sub></center>"
    ```kotlin
    import com.unity3d.ads.metadata.MetaData
    
    val key = "gdpr.consent" || "privacy.consent"
    val consent = true || false
    
    val metaData = MetaData(context)
    metaData.set(key, consent)
    metaData.commit()
    ```

#### AppLovin

=== "Swift<center><sub>iOS</sub></center>"
    ```swift
    import AppLovinSDK
    
    ALPrivacySettings.setHasUserConsent(true || false)
    // or
    ALPrivacySettings.setDoNotSell(true || false)
    ```

=== "Kotlin<center><sub>Android</sub></center>"
    ```kotlin
    import com.applovin.sdk.AppLovinPrivacySettings
    
    AppLovinPrivacySettings.setHasUserConsent(true || false, context)
    // or
    AppLovinPrivacySettings.setDoNotSell(true || false, context)
    ```

#### ironSource

=== "Swift<center><sub>iOS</sub></center>"
    ```swift
    import IronSource
    
    IronSource.setConsent(true || false)
    // or
    IronSource.setMetaDataWithKey("do_not_sell", value: "NO" || "YES")
    ```

=== "Kotlin<center><sub>Android</sub></center>"
    ```kotlin
    import com.ironsource.mediationsdk.IronSource
    
    IronSource.setConsent(true || false)
    // or
    IronSource.setMetaData("do_not_sell", "false" || "true")
    ```

#### Crashlytics

=== "Swift<center><sub>iOS</sub></center>"
    ```swift
    import FirebaseCrashlytics
    
    Crashlytics.crashlytics().setCrashlyticsCollectionEnabled(true || false)
    ```

=== "Kotlin<center><sub>Android</sub></center>"
    ```kotlin
    import com.google.firebase.crashlytics.ktx.crashlytics
    import com.google.firebase.ktx.Firebase
    
    Firebase.crashlytics.setCrashlyticsCollectionEnabled(true || false)
    ```

#### Adjust

General consent

=== "Swift<center><sub>iOS</sub></center>"
    ```swift
    import Adjust
    
    Adjust.trackMeasurementConsent(true || false)
    ```

=== "Kotlin<center><sub>Android</sub></center>"
    ```kotlin
    import com.adjust.sdk.Adjust
    
    Adjust.trackMeasurementConsent(true || false)
    ```

Third-party SDKs

=== "Swift<center><sub>iOS</sub></center>"
    ```swift
    import Adjust
    
    let sdkName = "SDKName"
    let consent = true || false
    
    let thirdPartySharing = ADJThirdPartySharing.init(isEnabledNumberBool: nil)
    
    thirdPartySharing.addPartnerSharingSetting(sdkName, key: "installs", value: consent)
    thirdPartySharing.addPartnerSharingSetting(sdkName, key: "events", value: consent)
    thirdPartySharing.addPartnerSharingSetting(sdkName, key: "sessions", value: consent)
    
    Adjust.trackThirdPartySharing(thirdPartySharing)
    ```

=== "Kotlin<center><sub>Android</sub></center>"
    ```kotlin
    import com.adjust.sdk.AdjustThirdPartySharing

    val sdkName = "SDKName"
    val consent = true || false
    
    val thirdPartySharing = AdjustThirdPartySharing(null)

    thirdPartySharing.addPartnerSharingSetting(sdkName, "install", consent)
    thirdPartySharing.addPartnerSharingSetting(sdkName, "events", consent)
    thirdPartySharing.addPartnerSharingSetting(sdkName, "sessions", consent)

    Adjust.trackThirdPartySharing(thirdPartySharing)
    ```

#### Chartboost

=== "Swift<center><sub>iOS</sub></center>"
    ```swift
    import ChartboostSDK
    
    let consent = true || false

    let gdprConsent = consent ? CHBDataUseConsent.GDPR.Consent.behavioral : CHBDataUseConsent.GDPR.Consent.nonBehavioral
    Chartboost.addDataUseConsent(CHBDataUseConsent.GDPR(gdprConsent))

    Chartboost.addDataUseConsent(CHBDataUseConsent.LGPD(allowBehavioralTargeting: consent))
    
    // or
    
    let ccpaConsent = consent ? CHBDataUseConsent.CCPA.Consent.optInSale : CHBDataUseConsent.CCPA.Consent.optOutSale
    Chartboost.addDataUseConsent(CHBDataUseConsent.CCPA(ccpaConsent))
    ```

=== "Kotlin<center><sub>Android</sub></center>"
    ```kotlin
    import com.chartboost.sdk.Chartboost
    import com.chartboost.sdk.privacy.model.CCPA
    import com.chartboost.sdk.privacy.model.GDPR
    import com.chartboost.sdk.privacy.model.LGPD
    
    val consent = true || false

    val gpdrConsent = GDPR(if (consent) GDPR.GDPR_CONSENT.BEHAVIORAL else GDPR.GDPR_CONSENT.NON_BEHAVIORAL)
    Chartboost.addDataUseConsent(context, gpdrConsent)

    Chartboost.addDataUseConsent(context, LGPD(consent))
    
    // or
    
    val ccpaConsent = if (consent) CCPA.CCPA_CONSENT.OPT_IN_SALE else CCPA.CCPA_CONSENT.OPT_OUT_SALE
    Chartboost.addDataUseConsent(context, CCPA(ccpaConsent))
    ```
