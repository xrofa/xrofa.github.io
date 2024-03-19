# Google Consent Mode

!!! danger "This page is an archive for Usercentrics SDK version 2.11.0"
      We highly recommend integrating using our SDK latest version, please [click here](./google-consent-mode.md) 

## What is Google Consent Mode?

Google [Consent mode](https://support.google.com/analytics/answer/9976101?hl=en) helps you to obtain your users consent and pass it to Google seamlessly. Consequently, Google tools
adjust their behaviors automatically. Google further supplements this by filling gaps through conversion modeling and behavioral modeling, aiding you in achieving your marketing
goals. For mobile applications, this is crucial to ensure the proper functioning of Google Analytics for Firebase.

!!! warning "Note"
      Those who do not have consent mode enabled will not be able to capture new EEA users in their audiences starting from March 2024.

## How to implement Google Consent Mode in your app

To successfully incorporate Google Consent Mode V2 into your mobile application, there are a few essential steps to ensure a seamless integration process.

1. **SDK Version**:
   Make sure your application uses our 2.11.0 SDK.

2. **Activate the Usercentrics Consent Mediation Feature**:
   Enable the consent mediation feature for our SDK, and make sure to include the Google Analytics for Firebase template ID in your configuration. Refer to the specific set of the
   documentation for detailed [instructions](consent-mediation.md).

3. **Add Firebase Analytics Library to your app**:

    === "Swift<center><sub>iOS</sub></center>"
    
        Use the minimum version of [10.17.0](https://firebase.google.com/support/release-notes/ios#version_10170_-_oct_30_2023).
        Please refer to its [guide](https://firebase.google.com/docs/analytics/get-started?platform=ios) for detailed instructions on integration.
    
        Finally, in your Info.plist file add the consent mode key value pairs. Assign true or false values to the keys to establish default permission. More information can be found [here](https://developers.google.com/tag-platform/security/guides/app-consent?platform=ios).
    
        ```
        <key>GOOGLE_ANALYTICS_DEFAULT_ALLOW_ANALYTICS_STORAGE</key> <false/>
        <key>GOOGLE_ANALYTICS_DEFAULT_ALLOW_AD_STORAGE</key> <false/>
        <key>GOOGLE_ANALYTICS_DEFAULT_ALLOW_AD_USER_DATA</key> <false/>
        <key>GOOGLE_ANALYTICS_DEFAULT_ALLOW_AD_PERSONALIZATION_SIGNALS</key> <false/>
        ```
    
    === "Kotlin<center><sub>Android</sub></center>"
    
        Use the minimum version of [21.5.0](https://firebase.google.com/support/release-notes/android#2023-10-30) or 32.5.0 if you want to use the Firebase Android BoM.
        Please refer to its [guide](https://firebase.google.com/docs/analytics/get-started?platform=android) for detailed instructions on integration.
        
        Finally, add the consent mode key value pairs. You can find more information [here](https://developers.google.com/tag-platform/security/guides/app-consent?platform=android).
        
        ```
        <meta-data android:name="google_analytics_default_allow_analytics_storage" android:value="false" />
        <meta-data android:name="google_analytics_default_allow_ad_storage" android:value="false" />
        <meta-data android:name="google_analytics_default_allow_ad_user_data" android:value="false" />
        <meta-data android:name="google_analytics_default_allow_ad_personalization_signals" android:value="false" />
        ```

## Our Integration With Google Firebase SDK

In this section, we provide a detailed overview of how we mediate consents for this version `2.11.0`.

This initiative is part of our commitment to transparency, offering you clear insights into how we integrate with third-party SDKs to effectively signal user consent.

=== "Swift<center><sub>iOS</sub></center>"

    ``` swift
    import FirebaseAnalytics
    let consent = .granted || .denied

    Analytics.setConsent([
      .analyticsStorage: consent,
      .adStorage: consent,
      .adUserData: consent,
      .adPersonalization: consent,
    ])
    ```

=== "Kotlin<center><sub>Android</sub></center>"

    ``` kotlin
    import com.google.firebase.ktx.Firebase
    import com.google.firebase.analytics.ktx.analytics
    import com.google.firebase.analytics.FirebaseAnalytics.ConsentStatus
    val consent = ConsentStatus.GRANTED || ConsentStatus.DENIED

    Firebase.analytics.setConsent {
      analyticsStorage(consent)
      adStorage(consent)
      adUserData(consent)
      adPersonalization(consent)
    }
    ```

!!! success "That's it! 🚀 we will now apply the consent mode to Firebase Analytics SDK."

## Basic vs Advanced Mode

Google delineates its implementation strategies into two categories: [Basic and Advanced modes](https://support.google.com/google-ads/answer/10000067?hl=en).
Usercentrics SDK operates within the realm of **Advanced Implementation**, ensuring a comprehensive integration.

**Our approach ensures no SDK is restricted from operating within any app or game.**

Following the guidance above, Google SDKs will intuitively recognize the default consent status (preset to `false`).
Concurrently, upon activation of [Consent Mediation](consent-mediation.md) and subsequent user consent, Usercentrics SDK seamlessly initiates any requisite API calls.

!!! success "This streamlined process facilitates a harmonious operation between consent management and functionality, enhancing user experience and compliance. 🚀"
