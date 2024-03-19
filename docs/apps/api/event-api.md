# UsercentricsEvent API

??? warning "This API is created for Usercentrics Partners"
    If you are considering to consume those APIs, make sure that your use case really need this and in case of any doubt, don't hesitate on talking to our support team.

## Consent Listener

### onConsentUpdated
=== "Swift<center><sub>iOS</sub></center>"
    ```swift
    UsercentricsEvent.shared.onConsentUpdated(callback: <(UpdatedConsentPayload) -> Void>): UsercentricsDisposableEvent<UpdatedConsentPayload>
    ```
=== "Kotlin<center><sub>Android</sub></center>"
    ```kotlin
    UsercentricsEvent.onConsentUpdated(callback: <(UpdatedConsentPayload) -> Unit>): UsercentricsDisposableEvent<UpdatedConsentPayload>
    ```

| Inputs   | Type                                                        | Notes                                                 |
|----------|-------------------------------------------------------------|-------------------------------------------------------|
| callback | <([UpdatedConsentPayload](#updatedconsentpayload)) -> Unit> | Callback with relevant information regarding consents |

| Output           | Type                                               | Notes                                                  |
|------------------|----------------------------------------------------|--------------------------------------------------------|
| Disposable Event | UsercentricsDisposableEvent<UpdatedConsentPayload> | Object with a function to dispose the callback created |

### dispose
=== "Swift<center><sub>iOS</sub></center>"
    ```swift
    let disposableEvent = UsercentricsEvent.shared.onConsentUpdated(callback: ...)
    disposableEvent.dispose()
    ```
=== "Kotlin<center><sub>Android</sub></center>"
    ```kotlin
    val disposableEvent = UsercentricsEvent.onConsentUpdated(callback = ...)
    disposableEvent.dispose()
    ```

## Objects

### UpdatedConsentPayload
| Property     | Type                                                      | Notes                                                                                                                                                                                                                                                                             |
|--------------|-----------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| consents     | [UsercentricsServiceConsent](#usercentricsserviceconsent) | List of Services with consent choices.                                                                                                                                                                                                                                            |
| controllerId | String                                                    | A Usercentrics generated ID, used to identify a specific user. See [Restore User Session](../features/restore-user-sessions.md#restore-a-user-session-cross-device-consent-sharing)                                                                                               |
| tcString     | String                                                    | IAB's [Transparency & Consent String](https://github.com/InteractiveAdvertisingBureau/GDPR-Transparency-and-Consent-Framework/blob/master/TCFv2/IAB%20Tech%20Lab%20-%20Consent%20string%20and%20vendor%20list%20formats%20v2.md#about-the-transparency--consent-string-tc-string) |
| uspString    | String                                                    | IAB's [US Privacy String](https://github.com/InteractiveAdvertisingBureau/USPrivacy/blob/master/CCPA/US%20Privacy%20String.md)                                                                                                                                                    |
| acString     | String                                                    | A String that represents the consented and disclosed Google Ad Technology Providers (ATPs), as defined by Google.                                                                                                                                                                 |

### UsercentricsServiceConsent
| Property      | Type   | Notes                                                                                                                                                   |
|---------------|--------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| templateId    | String | ID used to match a service with frameworks running on your app. See [Applying Consent](../integration/apply-consent.md#how-to-match-a-dps-with-an-sdk). |
| status        | Bool   | Consent status given to this specific service.                                                                                                          |
| dataProcessor | String | Name of entity processing the data that was collected via this service.                                                                                 |
| version       | String | Legal template version. See [Service Settings](../../config/banner-config.md#service-settings).                                                         |

## Mediation Listener

### onConsentMediation

=== "Swift<center><sub>iOS</sub></center>"

    ```swift
    UsercentricsEvent.shared.onConsentMediation(callback: <(MediationResultPayload) -> Void>): UsercentricsDisposableEvent<MediationResultPayload>
    ```

=== "Kotlin<center><sub>Android</sub></center>"

    ```kotlin
    UsercentricsEvent.onConsentMediation(callback:<(MediationResultPayload) -> Unit>): UsercentricsDisposableEvent<MediationResultPayload>
    ```

| Inputs   | Type                                                        | Notes                                                  |
|----------|-------------------------------------------------------------|--------------------------------------------------------|
| callback | ([MediationResultPayload](#mediationresultpayload)) -> Void | Callback with relevant information regarding mediation |

| Output           | Type                                                | Notes                                                  |
|------------------|-----------------------------------------------------|--------------------------------------------------------|
| Disposable Event | UsercentricsDisposableEvent<MediationResultPayload> | Object with a function to dispose the callback created |

### dispose

=== "Swift<center><sub>iOS</sub></center>"

    ```swift
    let disposableEvent = UsercentricsEvent.onConsentMediation(callback: ...)
    disposableEvent.dispose()
    ```

=== "Kotlin<center><sub>Android</sub></center>"

    ```kotlin
    val disposableEvent = UsercentricsEvent.onConsentMediation(callback: ...)
    disposableEvent.dispose()
    ```

## Objects

### MediationResultPayload

| Property | Type                              | Notes                            |
|----------|-----------------------------------|----------------------------------|
| applied  | [ConsentApplied](#consentapplied) | List of Consent Applied payload. |

#### ConsentApplied

| Property   | Type   | Notes                                          |
|------------|--------|------------------------------------------------|
| name       | String | Name of the SDK mediated.                      |
| templateId | String | Template ID that represents the SDK.           |
| consent    | Bool   | Consent status given to this specific service. |
| mediated   | Bool   | Mediation success status.                      |
