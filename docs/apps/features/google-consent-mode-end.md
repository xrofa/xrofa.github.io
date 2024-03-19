## Basic vs Advanced Mode

Google delineates its implementation strategies into two categories: [Basic and Advanced modes](https://support.google.com/google-ads/answer/10000067?hl=en).

The key differences are:

- **Basic Implementation**
    - Google SDKs are **NOT loaded** until end-user interacts with a consent banner.

- **Advanced Implementation**
    - Google SDKs are loaded **BEFORE** end-user interacts with a consent banner.

### Usercentrics approach

Our SDK operates within the realm of **Advanced Implementation**, ensuring a comprehensive integration.

Why? **Our approach never restricts any SDK from operating within any app or game.**

When Google SDKs are loaded alongside Usercentrics, you're choosing an Advanced Implementation approach.
Usercentrics will then send the consent signals once it has been initialized.

We signal Consent using Privacy APIs exposed by Third-Party SDKs, like described on our Consent Mediation [documentation](./consent-mediation.md#our-integration-with-sdks).

Following the guidance above, Google SDKs will automatically identify the default consent status, which is initially set to `false` in scenarios where
GDPR or another legal framework requires consent to be explicitly given.

!!! warning "If you wish to implement the Basic approach, make sure to **only initialize Firebase SDK** after the end-user interacted with the banner."

## FAQ

- How to verify the integration with Usercentrics SDK?
    - By enabling the debug mode, check out the console to see our logs, example:
        ```
        [USERCENTRICS][DEBUG] [Mediation] Applied Granular Consent to Firebase - MediationGranularConsent(eea=true, analyticsStorage=false, adStorage=false, adUserData=false, adPersonalization=false)
        [USERCENTRICS][DEBUG] [Mediation] Applied Granular Consent to Firebase (Adjust Signal) - MediationGranularConsent(eea=true, analyticsStorage=false, adStorage=false, adUserData=false, adPersonalization=false)
        ```

- How to double check the integration with Firebase?
    - Check out their documentation on how to verify consent signals, [iOS](https://developers.google.com/tag-platform/security/guides/app-consent?consentmode=basic&platform=ios#swift_1) or [Android](https://developers.google.com/tag-platform/security/guides/app-consent?consentmode=basic&platform=android#verify_consent_settings).

### Integration on Earlier Versions

Usercentrics implemented the Google Consent Mode in version `2.11.0`. For the sake of transparency, we offer a [link](./google-consent-mode2.md)
that documents how the integration was conducted in that version. :tada:
