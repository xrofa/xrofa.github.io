# Unity Event API

## Consent Listener
### Subscribe
Subscribe to any consent updated event that happens within Usercentrics SDK
This API is meant for third-parties, that need to pull consent from the Usercentrics SDK.

```c#
Usercentrics.Instance.SubscribeOnConsentUpdated((consentEvent) => {
    // Handle consentEvent
});
```

#### ConsentEvent
| Property     | Type                                                      | Notes                                                                                                                                                                                                                                                                             |
|--------------|-----------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| consents     | [UsercentricsServiceConsent](#usercentricsserviceconsent) | List of Services with consent choices.                                                                                                                                                                                                                                            |
| controllerId | String                                                    | A Usercentrics generated ID, used to identify a specific user. See [Restore User Session](../../apps/features/restore-user-sessions.md#restore-a-user-session-cross-device-consent-sharing)                                                                                       |
| tcString     | String                                                    | IAB's [Transparency & Consent String](https://github.com/InteractiveAdvertisingBureau/GDPR-Transparency-and-Consent-Framework/blob/master/TCFv2/IAB%20Tech%20Lab%20-%20Consent%20string%20and%20vendor%20list%20formats%20v2.md#about-the-transparency--consent-string-tc-string) |
| uspString    | String                                                    | IAB's [US Privacy String](https://github.com/InteractiveAdvertisingBureau/USPrivacy/blob/master/CCPA/US%20Privacy%20String.md)                                                                                                                                                    |
| acString     | String                                                    | A String that represents the consented and disclosed Google Ad Technology Providers (ATPs), as defined by Google.                                                                                                                                                                 |

#### UsercentricsServiceConsent
| Property      | Type   | Notes                                                                                                                                                       |
|---------------|--------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| templateId    | String | ID used to match a service with frameworks running on your app. See [Applying Consent](../integration/apply_consent.md#how-to-match-a-service-with-an-sdk). |
| status        | Bool   | Consent status given to this specific service.                                                                                                              |
| dataProcessor | String | Name of entity processing the data that was collected via this service.                                                                                     |
| version       | String | Legal template version. See [Service Settings](../../config/banner-config.md#service-settings).                                                             |

### Dispose Listener
Dispose any subscription to this API.

```c#
Usercentrics.Instance.DisposeOnConsentUpdatedSubscription();
```

## Mediation Listener
### Subscribe
Subscribe to any mediation updated event that happens within Usercentrics SDK
This API is meant for third-parties, that need to pull mediation from the Usercentrics SDK.

```c#
Usercentrics.Instance.SubscribeOnConsentMediation( (mediationEvent) => {
    // Handle mediationEvent
});
```

#### MediationEvent
| Property | Type                                             | Notes                            |
|----------|--------------------------------------------------|----------------------------------|
| applied  | [ConsentApplied](#consentapplied) | List of Consent Applied payload. |

#### ConsentApplied
| Property   | Type   | Notes                                          |
|------------|--------|------------------------------------------------|
| name       | String | Name of the SDK mediated.                      |
| templateId | String | Template ID that represents the SDK.           |
| consent    | Bool   | Consent status given to this specific service. |
| mediated   | Bool   | Mediation success status.                      |                                                         |

### Dispose Listener
Dispose any subscription to this API.

```c#
Usercentrics.Instance.DisposeOnConsentMediationSubscription();
```
