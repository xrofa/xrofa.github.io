#UsercentricsCore API

## Initialization
### Init
=== "Swift<center><sub>iOS</sub></center>"
    ```swift
    UsercentricsCore.configure(options: <UsercentricsOptions>)
    ```
=== "Kotlin<center><sub>Android</sub></center>"
    ```kotlin
    Usercentrics.initialize(appContext, <UsercentricsOptions>)
    ```
=== "Dart<center><sub>Flutter</sub></center>"
    ```dart
    Usercentrics.initialize(<UsercentricsOptions>);
    ```
=== "Typescript<center><sub>React Native</sub></center>"
    ```typescript
    Usercentrics.configure(<UsercentricsOptions>);
    ```

| Inputs   | Type                                        | Notes                                 |
|----------|---------------------------------------------|---------------------------------------|
| options* | [UsercentricsOptions](#usercentricsoptions) | Defines the configuration of the SDK. |

### isReady
=== "Swift<center><sub>iOS</sub></center>"
    ```swift
    UsercentricsCore.isReady { <UsercentricsReadyStatus> in
        // Handle status
    } onFailure: { <Error> in
        // Handle error
    }
    ```
=== "Kotlin<center><sub>Android</sub></center>"
    ```kotlin
    Usercentrics.isReady({
        // Handle status
    }, {
        // Handle error
    })
    ```

=== "Dart<center><sub>Flutter</sub></center>"
    ```dart
    final usercentricsReadyStatus = await Usercentrics.status;
    ```
=== "Typescript<center><sub>React Native</sub></center>"
    ```typescript
    const usercentricsReadyStatus = await Usercentrics.status;
    ```

| Completion Blocks | Type                                                | Notes                                                                                                                                |
|-------------------|-----------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------|
| status            | [UsercentricsReadyStatus](#usercentricsreadystatus) | Provides information needed to know what action to take next. Show CMP banner to collect consent or apply already collected consent. |
| error             | Error                                               | Error object with non-localized description.                                                                                         |

### Reset
=== "Swift<center><sub>iOS</sub></center>"
    ```swift
    UsercentricsCore.reset()
    ```
=== "Kotlin<center><sub>Android</sub></center>"
    ```kotlin
    Usercentrics.reset()
    ```
=== "Dart<center><sub>Flutter</sub></center>"
    ```dart
    Usercentrics.reset();
    ```
=== "Typescript<center><sub>React Native</sub></center>"
    ```typescript
    Usercentrics.reset();
    ```

??? warning "Resetting the SDK"
    Use `reset()` to clean all local storage and release the initialized instance. You will need to initialize the SDK again after a reset. **Make sure you validate the expected behaviour, before using reset in production.**


## Features
### restoreUserSession
=== "Swift<center><sub>iOS</sub></center>"
    ```swift
    UsercentricsCore.shared.restoreUserSession(controllerId: <String>, onSuccess: <(UsercentricsReadyStatus) -> Void>, onFailure: <(Error) -> Void>)
    ```
=== "Kotlin<center><sub>Android</sub></center>"
    ```kotlin
    Usercentrics.instance.restoreUserSession(controllerId = <String>, onSuccess = <(UsercentricsReadyStatus) -> Unit>, onFailure = <(Throwable) -> Unit>)
    ```
=== "Dart<center><sub>Flutter</sub></center>"
    ```dart
    final status = await Usercentrics.restoreUserSession(controllerId: <String>);
    ```

=== "Typescript<center><sub>React Native</sub></center>"
    ```typescript
    const status = await Usercentrics.restoreUserSession(controllerId: <String>);
    ```

| Input        | Type                                                          | Notes                                                                                                                                       |
|--------------|---------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| controllerID | String                                                        | A Usercentrics generated ID, used to identify a specific user.                                                                              |
| onSuccess    | Callback<[UsercentricsReadyStatus](#usercentricsreadystatus)> | SDK has restored the user's consent attached to the controllerID provided. See [Restore User Session](../features/restore-user-sessions.md) |
| onFailure    | Callback                                                      | Handle non-localized error.                                                                                                                 |


#### Flutter and React Native

| Outputs | Type                                                | Notes                                                                                                                 |
|---------|-----------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------|
| status  | [UsercentricsReadyStatus](#usercentricsreadystatus) | Data needed to know if consents should be collected. See [Restore User Session](../features/restore-user-sessions.md) |

### clearUserSession
=== "Swift<center><sub>iOS</sub></center>"
    ```swift
    UsercentricsCore.shared.clearUserSession(onSuccess: <(UsercentricsReadyStatus) -> Void>, onError: <(Error) -> Void>)
    ```
=== "Kotlin<center><sub>Android</sub></center>"
    ```kotlin
    Usercentrics.instance.clearUserSession(onSuccess = <(UsercentricsReadyStatus) -> Unit>, onError = <(Throwable) -> Unit>)
    ```
=== "Dart<center><sub>Flutter</sub></center>"
    ```dart
    final status = await Usercentrics.clearUserSession();
    ```

=== "Typescript<center><sub>React Native</sub></center>"
    ```typescript
    const status = await Usercentrics.clearUserSession();
    ```

| Input     | Type                                                          | Notes                                                                                                                            |
|-----------|---------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------|
| onSuccess | Callback<[UsercentricsReadyStatus](#usercentricsreadystatus)> | SDK has cleared the user's consent attached to the current session. See [Clear User Session](../features/clear-user-session.md) |
| onError   | Callback                                                      | Handle non-localized error.                                                                                                      |


#### Flutter and React Native

| Outputs | Type                                                | Notes                                                                                                             |
|---------|-----------------------------------------------------|-------------------------------------------------------------------------------------------------------------------|
| status  | [UsercentricsReadyStatus](#usercentricsreadystatus) | Data needed to know if consents should be collected. See [Clear User Session](../features/clear-user-session.md) |

### getUserSessionData
=== "Swift<center><sub>iOS</sub></center>"
    ```swift
    let userSessionData = UsercentricsCore.shared.getUserSessionData()
    ```
=== "Kotlin<center><sub>Android</sub></center>"
    ```kotlin
    val userSessionData = Usercentrics.instance.getUserSessionData()
    ```
=== "Dart<center><sub>Flutter</sub></center>"
    ```dart
    final userSessionData = await Usercentrics.userSessionData;
    ```
=== "Typescript<center><sub>React Native</sub></center>"
    ```typescript
    const userSessionData = await Usercentrics.getUserSessionData();
    ```

| Outputs         | Type   | Notes                                                                                                         |
|-----------------|--------|---------------------------------------------------------------------------------------------------------------|
| userSessionData | String | String used to pass consent to a WebView. See [WebView Consent Continuity](../features/webview-continuity.md) |

### changeLanguage
=== "Swift<center><sub>iOS</sub></center>"
    ```swift
    UsercentricsCore.shared.changeLanguage(language: <String>, onSuccess: <() -> Void>, onFailure: <(Error) -> Void>)
    ```
=== "Kotlin<center><sub>Android</sub></center>"
    ```kotlin
    Usercentrics.instance.changeLanguage(language = <String>, onSuccess = <() -> Unit>, onFailure = <(Throwable) -> Unit>)
    ```
=== "Dart<center><sub>Flutter</sub></center>"
    ```dart
    await Usercentrics.changeLanguage(language: <String>);
    ```
=== "Typescript<center><sub>React Native</sub></center>"
    ```typescript
    await Usercentrics.changeLanguage(language: <String>);
    ```

| Input     | Type     | Notes                                                                                   |
|-----------|----------|-----------------------------------------------------------------------------------------|
| language  | String   | Language for content to be loaded on.  e.g. "en", "de", "fr".                           |
| onSuccess | Callback | Re-render your UI, as usual with the CMP data. Content now will be on the new language. |
| onFailure | Callback | Handle non-localized error                                                              |

!!! warning "Always change language before rendering your UI"
    If you call this method after the UsercentricsUI has already been created, the new language will not be applied.

### getABTestingVariant
=== "Swift<center><sub>iOS</sub></center>"
    ```swift
    let testingVariant = UsercentricsCore.shared.getABTestingVariant()
    ```
=== "Kotlin<center><sub>Android</sub></center>"
    ```kotlin
    val testingVariant = Usercentrics.instance.getABTestingVariant()
    ```
=== "Dart<center><sub>Flutter</sub></center>"
    ```dart
    final testingVariant = await Usercentrics.aBTestingVariant;
    ```
=== "Typescript<center><sub>React Native</sub></center>"
    ```typescript
    const testingVariant = await Usercentrics.getABTestingVariant();
    ```

| Outputs        | Type    | Notes                                                |
|----------------|---------|------------------------------------------------------|
| testingVariant | String? | Get the A/B testing active string variant of the CMP |

### setABTestingVariant
=== "Swift<center><sub>iOS</sub></center>"
    ```swift
    UsercentricsCore.shared.setABTestingVariant(variant: <String>)
    ```
    
=== "Kotlin<center><sub>Android</sub></center>"
    ```kotlin
    Usercentrics.instance.setABTestingVariant(variant: <String>)
    ```
=== "Dart<center><sub>Flutter</sub></center>"
    ```dart
    Usercentrics.setABTestingVariant(variant: <String>);
    ```
=== "Typescript<center><sub>React Native</sub></center>"
    ```typescript
    await Usercentrics.setABTestingVariant(variant: <String>);
    ```

| Input   | Type   | Notes                                          |
|---------|--------|------------------------------------------------|
| variant | String | Set the A/B testing active variant of the CMP. |

## Build your own UI
### getCMPData
=== "Swift<center><sub>iOS</sub></center>"
    ```swift
    let cmpData = UsercentricsCore.shared.getCMPData()
    ```
=== "Kotlin<center><sub>Android</sub></center>"
    ```kotlin
    val cmpData = Usercentrics.instance.getCMPData()
    ```
=== "Dart<center><sub>Flutter</sub></center>"
    ```dart
    final cmpData = await Usercentrics.cmpData;
    ```
=== "Typescript<center><sub>React Native</sub></center>"
    ```typescript
    const cmpData = await Usercentrics.getCMPData();
    ```

| Outputs | Type                                        | Notes                                                               |
|---------|---------------------------------------------|---------------------------------------------------------------------|
| CMPData | [UsercentricsCMPData](#usercentricscmpdata) | Data needed to [building your own UI](../features/build_own_ui.md). |

### acceptAll
=== "Swift<center><sub>iOS</sub></center>"
    ```swift
    let consents = UsercentricsCore.shared.acceptAll(consentType: <UsercentricsConsentType>)
    ```
=== "Kotlin<center><sub>Android</sub></center>"
    ```kotlin
    val consents = Usercentrics.instance.acceptAll(consentType = <UsercentricsConsentType>)
    ```
=== "Dart<center><sub>Flutter</sub></center>"
    ```dart
    final consents = await Usercentrics.acceptAll(consentType: <UsercentricsConsentType>);
    ```
=== "Typescript<center><sub>React Native</sub></center>"
    ```typescript
    const consents = await Usercentrics.acceptAll(consentType: <UsercentricsConsentType>);
    ```

| Input       | Type | Notes                                                                                                                                                                                                                                                                                                                                              |
|-------------|------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| consentType | Enum | <li>**Explicit**: Consent was collected from a explicit action from the user. e.g. Button action.</li> <li>**Implicit**: Consent was collected without a explicit action of the user. e.g User can close or ignore the banner without giving a choice. Please make sure you consult with your Data Protection Officer before using this case.</li> |

| Output   | Type                                                        | Notes                                  |
|----------|-------------------------------------------------------------|----------------------------------------|
| consents | [[UsercentricsServiceConsent](#usercentricsserviceconsent)] | List of Services with consent choices. |

### denyAll
=== "Swift<center><sub>iOS</sub></center>"
    ```swift
    let consents = UsercentricsCore.shared.denyAll(consentType: <UsercentricsConsentType>)
    ```
=== "Kotlin<center><sub>Android</sub></center>"
    ```kotlin
    val consents = Usercentrics.instance.denyAll(consentType = <UsercentricsConsentType>)
    ```
=== "Dart<center><sub>Flutter</sub></center>"
    ```dart
    final consents = await Usercentrics.denyAll(consentType: <UsercentricsConsentType>);
    ```
=== "Typescript<center><sub>React Native</sub></center>"
    ```typescript
    const consents = await Usercentrics.denyAll(consentType: <UsercentricsConsentType>);
    ```

| Input       | Type | Notes                                                                                                                                                                                                                                                                                                                                              |
|-------------|------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| consentType | Enum | <li>**Explicit**: Consent was collected from a explicit action from the user. e.g. Button action.</li> <li>**Implicit**: Consent was collected without a explicit action of the user. e.g User can close or ignore the banner without giving a choice. Please make sure you consult with your Data Protection Officer before using this case.</li> |

| Output   | Type                                                        | Notes                                  |
|----------|-------------------------------------------------------------|----------------------------------------|
| consents | [[UsercentricsServiceConsent](#usercentricsserviceconsent)] | List of Services with consent choices. |

### saveDecisions
=== "Swift<center><sub>iOS</sub></center>"
    ```swift
    let consents = UsercentricsCore.shared.saveDecisions(decisions: <[UserDecision]>, consentType: <UsercentricsConsentType>)
    ```
=== "Kotlin<center><sub>Android</sub></center>"
    ```kotlin
    val consents = Usercentrics.instance.saveDecisions(decisions = <[UserDecision]>, consentType = <UsercentricsConsentType>)
    ```
=== "Dart<center><sub>Flutter</sub></center>"
    ```dart
    final consents = await Usercentrics.saveDecisions(decisions: <[UserDecision]>, consentType: <UsercentricsConsentType>);
    ```
=== "Typescript<center><sub>React Native</sub></center>"
    ```typescript
    const consents = await Usercentrics.saveDecisions(decisions: <[UserDecision]>, consentType: <UsercentricsConsentType>);
    ```

| Input       | Type           | Notes                                                                                                                                                                                                                                                                                                                                              |
|-------------|----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| decisions   | [UserDecision] | List of every service's **templateID** and the **consent** as a Bool.                                                                                                                                                                                                                                                                              |
| consentType | Enum           | <li>**Explicit**: Consent was collected from a explicit action from the user. e.g. Button action.</li> <li>**Implicit**: Consent was collected without a explicit action of the user. e.g User can close or ignore the banner without giving a choice. Please make sure you consult with your Data Protection Officer before using this case.</li> |

| Output   | Type                                                        | Notes                                  |
|----------|-------------------------------------------------------------|----------------------------------------|
| consents | [[UsercentricsServiceConsent](#usercentricsserviceconsent)] | List of Services with consent choices. |

## Interaction Analytics

### Track
Track [user events](../features/build_own_ui.md#interaction-analytics) if you are building your own UI, and want to see these events in the Usercentrics Analytics Dashboard.
=== "Swift<center><sub>iOS</sub></center>"
    ```swift
    UsercentricsCore.shared.track(event: <UsercentricsAnalyticsEventType>)
    ```
=== "Kotlin<center><sub>Android</sub></center>"
    ```kotlin
    Usercentrics.instance.track(event = <UsercentricsAnalyticsEventType>)
    ```
=== "Dart<center><sub>Flutter</sub></center>"
    ```dart
    await Usercentrics.track(event: <UsercentricsAnalyticsEventType>);
    ```
=== "Typescript<center><sub>React Native</sub></center>"
    ```typescript
    await Usercentrics.track(event: <UsercentricsAnalyticsEventType>);
    ```

| Input | Type                           | Notes                                                                                                 |
|-------|--------------------------------|-------------------------------------------------------------------------------------------------------|
| event | UsercentricsAnalyticsEventType | Track analytics events when building a Custom UI or you wish to track events with a third party tool. |

**Events**

| Event<br/><small>Android</small> | Event<br/><small>iOS, Flutter and React Native</small> | Notes                                                                                                                   |
|----------------------------------|--------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|
| .CMP_SHOWN                       | .cmpShown                                              | The banner was displayed to the user. It doesn't matter which layer.                                                    |
| .ACCEPT_ALL_FIRST_LAYER          | .acceptAllFirstLayer                                   | The Accept All button was pressed from the first layer.                                                                 |
| .DENY_ALL_FIRST_LAYER            | .denyAllFirstLayer                                     | The Deny All button was pressed from the first layer.                                                                   |
| .SAVE_FIRST_LAYER                | .saveFirstLayer                                        | The Save button was pressed from the first layer. Save is mainly used for granular decisions.                           |
| .ACCEPT_ALL_SECOND_LAYER         | .acceptAllSecondLayer                                  | The Accept All button was pressed from the second layer.                                                                |
| .DENY_ALL_SECOND_LAYER           | .denyAllSecondLayer                                    | The Deny All button was pressed from the second layer.                                                                  |
| .SAVE_SECOND_LAYER               | .saveSecondLayer                                       | The Save button was pressed from the second layer. Save is mainly used for granular decisions.                          |
| .IMPRINT_LINK                    | .imprintLink                                           | The Imprint link/button was pressed.                                                                                    |
| .MORE_INFORMATION_LINK           | .moreInformationLink                                   | The More Information link/button was pressed. This button is usually used to navigate from first layer to second layer. |
| .PRIVACY_POLICY_LINK             | .privacyPolicyLink                                     | The Privacy policy link/button was pressed.                                                                             |
| .CCPA_TOGGLES_ON                 | .ccpaTogglesOn                                         | The CCPA toggle was set to on.                                                                                          |
| .CCPA_TOGGLES_OFF                | .ccpaTogglesOff                                        | The CCPA toggle was set to off.                                                                                         |

## TCF 2.2 Specific Methods
### getTCFData
=== "Swift<center><sub>iOS</sub></center>"
    ```swift
    UsercentricsCore.shared.getTCFData() { tcfData in
        // handle data
    }
    ```
=== "Kotlin<center><sub>Android</sub></center>"
    ```kotlin
    Usercentrics.instance.getTCFData { tcfData ->
        // handle data
    }
    ```
=== "Dart<center><sub>Flutter</sub></center>"
    ```dart
    final tcfData = await Usercentrics.tcfData;
    ```
=== "Typescript<center><sub>React Native</sub></center>"
    ```typescript
    const tcfData = await Usercentrics.getTCFData();
    ```

| Outputs | Type    | Notes                                                                                                        |
|---------|---------|--------------------------------------------------------------------------------------------------------------|
| TCFData | TCFData | IAB's Transparency & Consent CMP Content. See [IAB Data Source](../features/build_own_ui.md#iab-data-source) |

### getTCString
=== "Swift<center><sub>iOS</sub></center>"
    ```swift
    UsercentricsCore.shared.getTCFData() { tcfData in
        let tcString = tcfData.tcString
    }
    ```
=== "Kotlin<center><sub>Android</sub></center>"
    ```kotlin
    Usercentrics.instance.getTCFData { tcfData ->
        val tcString = tcfData.tcString
    }
    ```
=== "Dart<center><sub>Flutter</sub></center>"
    ```dart
    final tcfData = await Usercentrics.tcfData;
    final tcString = tcfData.tcString;
    ```
=== "Typescript<center><sub>React Native</sub></center>"
    ```typescript
    const tcfData = await Usercentrics.getTCFData();
    const tcString = tcfData.tcString;
    ```

| Inputs   | Type   | Notes                                                                                                                                                                                                                                                                             |
|----------|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| TCString | String | IAB's [Transparency & Consent String](https://github.com/InteractiveAdvertisingBureau/GDPR-Transparency-and-Consent-Framework/blob/master/TCFv2/IAB%20Tech%20Lab%20-%20Consent%20string%20and%20vendor%20list%20formats%20v2.md#about-the-transparency--consent-string-tc-string) |

### getAdditionalConsentModeData
=== "Swift<center><sub>iOS</sub></center>"
    ```swift
    let additionalConsentData = UsercentricsCore.shared.getAdditionalConsentModeData()
    ```
=== "Kotlin<center><sub>Android</sub></center>"
    ```kotlin
    val additionalConsentData = Usercentrics.instance.getAdditionalConsentModeData()
    ```
=== "Dart<center><sub>Flutter</sub></center>"
    ```dart
    final additionalConsentModeData = await Usercentrics.additionalConsentModeData;
    ```
=== "Typescript<center><sub>React Native</sub></center>"
    ```typescript
    const additionalConsentModeData =  await Usercentrics.getAdditionalConsentModeData();
    ```

| Outputs               | Type                                                    | Notes                                                                                                                                                                        |
|-----------------------|---------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| additionalConsentData | [AdditionalConsentModeData](#additionalconsentmodedata) | Retrieves the [Google's Additional Consent String](https://support.google.com/admanager/answer/9681920?hl=en) and the List of consented and not consented Ad Tech Providers. |


### setCMPId
=== "Swift<center><sub>iOS</sub></center>"
    ```swift
    UsercentricsCore.shared.setCMPId(id: <String>)
    ```
=== "Kotlin<center><sub>Android</sub></center>"
    ```kotlin
    Usercentrics.instance.setCMPId(id = <String>)
    ```
=== "Dart<center><sub>Flutter</sub></center>"
    ```dart
    await Usercentrics.setCmpIdForTCF(id: <String>);
    ```
=== "Typescript<center><sub>React Native</sub></center>"
    ```typescript
    await Usercentrics.setCMPId(id: <String>);
    ```

| Inputs | Type | Notes                                                                                                                                  |
|--------|------|----------------------------------------------------------------------------------------------------------------------------------------|
| CMPId  | Int  | When building your own UI for TCF 2.2. You need to pass the CMPID given to you by the IAB, in order for your solution to be compliant. |

### acceptAllForTCF
=== "Swift<center><sub>iOS</sub></center>"
    ```swift
    let consents = UsercentricsCore.shared.acceptAllForTCF(fromLayer: <TCFDecisionUILayer>, consentType: <UsercentricsConsentType>)
    ```
=== "Kotlin<center><sub>Android</sub></center>"
    ```kotlin
    val consents = Usercentrics.instance.acceptAllForTCF(fromLayer = <TCFDecisionUILayer>, consentType = <UsercentricsConsentType>)
    ```
=== "Dart<center><sub>Flutter</sub></center>"
    ```dart
    final consents = await Usercentrics.acceptAllForTCF(fromLayer: <TCFDecisionUILayer>, consentType: <UsercentricsConsentType>);
    ```
=== "Typescript<center><sub>React Native</sub></center>"
    ```typescript
    const consents = await Usercentrics.acceptAllForTCF(fromLayer: <TCFDecisionUILayer>, consentType: <UsercentricsConsentType>);
    ```

| Input       | Type | Notes                                                                                                                                                                                                                                                                                                                                              |
|-------------|------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| fromLayer   | Enum | Layer in which consent was collected: **firstLayer**: First banner layer. **secondLayer**: Second banner layer.                                                                                                                                                                                                                                    |
| consentType | Enum | <li>**Explicit**: Consent was collected from a explicit action from the user. e.g. Button action.</li> <li>**Implicit**: Consent was collected without a explicit action of the user. e.g User can close or ignore the banner without giving a choice. Please make sure you consult with your Data Protection Officer before using this case.</li> |

| Output   | Type                                                        | Notes                                  |
|----------|-------------------------------------------------------------|----------------------------------------|
| consents | [[UsercentricsServiceConsent](#usercentricsserviceconsent)] | List of Services with consent choices. |

### denyAllForTCF
=== "Swift<center><sub>iOS</sub></center>"
    ```swift
     let consents = UsercentricsCore.shared.denyAllForTCF(fromLayer: <TCFDecisionUILayer>, consentType: <UsercentricsConsentType>)
    ```
=== "Kotlin<center><sub>Android</sub></center>"
    ```kotlin
     val consents = Usercentrics.instance.denyAllForTCF(fromLayer = <TCFDecisionUILayer>, consentType = <UsercentricsConsentType>)
    ```
=== "Dart<center><sub>Flutter</sub></center>"
    ```dart
    final consents = await Usercentrics.denyAllForTCF(fromLayer: <TCFDecisionUILayer>, consentType: <UsercentricsConsentType>);
    ```
=== "Typescript<center><sub>React Native</sub></center>"
    ```typescript
    const consents = await Usercentrics.denyAllForTCF(fromLayer: <TCFDecisionUILayer>, consentType: <UsercentricsConsentType>);
    ```

| Input       | Type | Notes                                                                                                                                                                                                                                                                                                                                               |
|-------------|------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| fromLayer   | Enum | Layer in which consent was collected: **firstLayer**: First banner layer. **secondLayer**: Second banner layer.                                                                                                                                                                                                                                     |
| consentType | Enum | <li>**Explicit**: Consent was collected from a explicit action from the user. e.g. Button action.</li> <li> **Implicit**: Consent was collected without a explicit action of the user. e.g User can close or ignore the banner without giving a choice. Please make sure you consult with your Data Protection Officer before using this case.</li> |

| Output   | Type                                                        | Notes                                  |
|----------|-------------------------------------------------------------|----------------------------------------|
| consents | [[UsercentricsServiceConsent](#usercentricsserviceconsent)] | List of Services with consent choices. |

### saveDecisionsForTCF
=== "Swift<center><sub>iOS</sub></center>"
    ```swift
    let consents = UsercentricsCore.shared.saveDecisionsForTCF(tcfDecisions: <TCFUserDecisions>, fromLayer: <TCFDecisionUILayer>, serviceDecisions: <[UserDecision]>, consentType: <UsercentricsConsentType>)
    ```
=== "Kotlin<center><sub>Android</sub></center>"
    ```kotlin
    val consents = Usercentrics.instance.saveDecisionsForTCF(tcfDecisions = <TCFUserDecisions>, fromLayer = <TCFDecisionUILayer>, serviceDecisions = <[UserDecision]>, consentType = <UsercentricsConsentType>)
    ```
=== "Dart<center><sub>Flutter</sub></center>"
    ```dart
    final consents = await Usercentrics.saveDecisionsForTCF(tcfDecisions: <TCFUserDecisions>, fromLayer: <TCFDecisionUILayer>, serviceDecisions: <[UserDecision]>, consentType: <UsercentricsConsentType>);
    ```
=== "Typescript<center><sub>React Native</sub></center>"
    ```typescript
    const consents = await Usercentrics.saveDecisionsForTCF(tcfDecisions: <TCFUserDecisions>, fromLayer: <TCFDecisionUILayer>, serviceDecisions: <[UserDecision]>, consentType: <UsercentricsConsentType>);
    ```

| Input        | Type              | Notes                                                                                                                                                                                                                                                                                                                                               |
|--------------|-------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| tcfDecisions | [TCFUserDecision] | List of every **purpose** and **specialFeature** with values for **consent** and **legitimate interest** as Bool and respective Vendors.                                                                                                                                                                                                            |
| fromLayer    | Enum              | Layer in which consent was collected: **firstLayer**: First banner layer. **secondLayer**: Second banner layer.                                                                                                                                                                                                                                     |
| decisions    | [UserDecision]    | List of every service's **templateID** and the **consent** as a Bool.                                                                                                                                                                                                                                                                               |
| consentType  | Enum              | <li>**Explicit**: Consent was collected from a explicit action from the user. e.g. Button action.</li> <li> **Implicit**: Consent was collected without a explicit action of the user. e.g User can close or ignore the banner without giving a choice. Please make sure you consult with your Data Protection Officer before using this case.</li> |

| Output   | Type                                                        | Notes                                  |
|----------|-------------------------------------------------------------|----------------------------------------|
| consents | [[UsercentricsServiceConsent](#usercentricsserviceconsent)] | List of Services with consent choices. |

## CCPA Specific Methods
### getUSPData
=== "Swift<center><sub>iOS</sub></center>"
    ```swift
    let uspData = UsercentricsCore.shared.getUSPData()
    ```
=== "Kotlin<center><sub>Android</sub></center>"
    ```kotlin
    val uspData = Usercentrics.instance.getUSPData()
    ```
=== "Dart<center><sub>Flutter</sub></center>"
    ```dart
    final ccpaData = await Usercentrics.ccpaData;
    ```
=== "Typescript<center><sub>React Native</sub></center>"
    ```typescript
    const ccpaData =  await Usercentrics.getCCPAData();
    ```

| Outputs | Type     | Notes                                                                                                                                                         |
|---------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| USPData | CCPAData | [US Privacy String](https://github.com/InteractiveAdvertisingBureau/USPrivacy/blob/master/CCPA/US%20Privacy%20String.md#us-privacy-string-format) information |

### saveDecisions
=== "Swift<center><sub>iOS</sub></center>"
    ```swift
    let ccpaConsents = UsercentricsCore.shared.saveOptOutForCCPA(isOptedOut: <Bool>, consentType: <UsercentricsConsentType>)
    ```
=== "Kotlin<center><sub>Android</sub></center>"
    ```kotlin
    val ccpaConsents = Usercentrics.instance.saveOptOutForCCPA(isOptedOut = <Bool>, consentType = <UsercentricsConsentType>)
    ```
=== "Dart<center><sub>Flutter</sub></center>"
    ```dart
    final ccpaConsents = await Usercentrics.saveOptOutForCCPA(isOptedOut: <Bool>, consentType: <UsercentricsConsentType>);
    ```
=== "Typescript<center><sub>React Native</sub></center>"
    ```typescript
    const ccpaConsents =  await Usercentrics.saveOptOutForCCPA(isOptedOut: <Bool>, consentType: <UsercentricsConsentType>);
    ```

| Input       | Type | Notes                                                                                                                                                                                                                                                                                                                            |
|-------------|------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| isOptedOut  | Bool | Pass the user's response to the statement: "Do Not Sell My Personal Information". **True**: Do not track or sell user's information. **False**: You are allowed to track and sell user's information.                                                                                                                            |
| consentType | Enum | **Explicit**: Consent was collected from a explicit action from the user. e.g. Button action. **Implicit**: Consent was collected without a explicit action of the user. e.g User can close or ignore the banner without giving a choice. Please make sure you consult with your Data Protection Officer before using this case. |

| Output   | Type                                                        | Notes                                  |
|----------|-------------------------------------------------------------|----------------------------------------|
| consents | [[UsercentricsServiceConsent](#usercentricsserviceconsent)] | List of Services with consent choices. |

## Helpers
### shouldCollectConsent
=== "Swift<center><sub>iOS</sub></center>"
    ```swift
    UsercentricsCore.shared.shouldCollectConsent()
    ```
=== "Kotlin<center><sub>Android</sub></center>"
    ```kotlin
    Usercentrics.instance.shouldCollectConsent()
    ```

| Outputs              | Type | Notes                                                                                                                                                                          |
|----------------------|------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| shouldCollectConsent | Bool | **True**, if consent has never been collected or some service has changed thus requiring a consent update. **False**, if consent has been collected and no update is required. |

### getConsents
=== "Swift<center><sub>iOS</sub></center>"
    ```swift
    UsercentricsCore.shared.getConsents()
    ```
=== "Kotlin<center><sub>Android</sub></center>"
    ```kotlin
    Usercentrics.instance.getConsents()
    ```
=== "Dart<center><sub>Flutter</sub></center>"
    ```dart
    await Usercentrics.consents;
    ```
=== "Typescript<center><sub>React Native</sub></center>"
    ```typescript
    await Usercentrics.getConsents();
    ```

| Outputs  | Type                                                        | Notes                                  |
|----------|-------------------------------------------------------------|----------------------------------------|
| consents | [[UsercentricsServiceConsent](#usercentricsserviceconsent)] | List of Services with consent choices. |

### getControllerId
=== "Swift<center><sub>iOS</sub></center>"
    ```swift
    UsercentricsCore.shared.getControllerId()
    ```
=== "Kotlin<center><sub>Android</sub></center>"
    ```kotlin
    Usercentrics.instance.getControllerId()
    ```
=== "Dart<center><sub>Flutter</sub></center>"
    ```dart
    await Usercentrics.controllerId;
    ```
=== "Typescript<center><sub>React Native</sub></center>"
    ```typescript
    await Usercentrics.getControllerId();
    ```

| Outputs      | Type   | Notes                                                                                                                           |
|--------------|--------|---------------------------------------------------------------------------------------------------------------------------------|
| controllerID | String | A Usercentrics generated ID, used to identify a specific user. See [Restore User Session](../features/restore-user-sessions.md) |

## Objects

### UsercentricsOptions
| Property         | Type   | Notes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|------------------|--------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| settingsID       | String | A Usercentrics generated ID, used to identify a unique CMP configuration.                                                                                                                                                                                                                                                                                                                                                                                                                                |
| defaultLanguage  | String | Selected based on our [language selection hierarchy](#language-selection-hierarchy). This property defines the language used to render the banner.  e.g. "en", "de", "fr".                                                                                                                                                                                                                                                                                                                               |
| version          | String | To freeze the configuration version shown to your users, you may pass a specific version here. You may find an overview of all versions in the [Admin Interface](https://admin.usercentrics.eu) under Configuration > History > Settings History > Version (Column) or Implementation > Script Tag > Version History. e.g. "3.0.4". Passing **"latest"** (default) will fetch the latest version of your CMP configuration. Passing **"preview"** will fetch the latest draft of your CMP configuration. |
| timeoutMillis    | Int    | Timeout for network requests in milliseconds. We do **NOT** recommend overwriting this field unless absolutely necessary or for debugging reasons, as well as using any values under 5,000 ms. Default is **10,000 ms (10s)**.                                                                                                                                                                                                                                                                           |
| loggerLevel      | Enum   | Provides a set of logs for operations being executed in the SDK. **debug**: includes every other level, **warning**: non-problematic operations, **error**: relevant logs to any blocking problems and **none** (default).                                                                                                                                                                                                                                                                               |
| rulesetId        | String | A Usercentircs generated ID, used to identify a bundle of CMP configurations to be used depending on the user's location.                                                                                                                                                                                                                                                                                                                                                                                |
| consentMediation | Bool   | Enable [Consent Mediation](../features/consent-mediation.md), an automated way to pass consent to 3rd party frameworks.                                                                                                                                                                                                                                                                                                                                                                                  |

### UsercentricsReadyStatus
| Property             | Type                                                        | Notes                                                                                                                                                                          |
|----------------------|-------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| shouldCollectConsent | Bool                                                        | **True**, if consent has never been collected or some service has changed thus requiring a consent update. **False**, if consent has been collected and no update is required. |
| consents             | [[UsercentricsServiceConsent](#usercentricsserviceconsent)] | List of Services with consent choices.                                                                                                                                         |
| geolocationRuleset   | [[GeolocationRuleset](#geolocationruleset)]                 | Object containing information about Geolocation Rulesets, when enabled in the account.                                                                                         |
| location             | [[UsercentricsLocation](#usercentricslocation)]             | Current location of User.                                                                                                                                                      |

### UsercentricsServiceConsent
| Property      | Type   | Notes                                                                                                                                                           |
|---------------|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| templateId    | String | ID used to match a service with frameworks running on your app. See [Applying Service Consent](../integration/apply-consent.md#how-to-match-a-dps-with-an-sdk). |
| status        | Bool   | Consent status given to this specific service.                                                                                                                  |
| dataProcessor | String | Name of entity processing the data that was collected via this service.                                                                                         |
| version       | String | Legal template version. See [Service Settings](../../config/banner-config.md#service-settings).                                                                 |

### GeolocationRuleset
| Property                 | Type   | Notes                                                                                                                                              |
|--------------------------|--------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| activeSettingsId         | String | Given a Ruleset can contain multiple Settings IDs, this property will have the value of the active one, chosen given User's location.              |
| bannerRequiredAtLocation | Bool   | Rulesets can be configured to not show the CMP in some locations, this propery will indicate wether the banner is required to be displayed or not. |

### UsercentricsLocation
| Property    | Type   | Notes                                                                                                                                                                                                                                           |
|-------------|--------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| countryCode | String | The country associated with the User's IP address. This is a Unicode CLDR region code, such as US or FR. (For most countries, these codes correspond directly to [ISO-3166-2 codes](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).          |
| regionCode  | String | Region, e.g. a province or state, of the country associated with the User's IP address. This is a Unicode CLDR subdivision ID, such as USCA or CAON. (These Unicode codes are derived from the subdivisions defined by the ISO-3166-2 standard. |

### UsercentricsCMPData
| Property      | Type                   | Notes                                                                                                                                                                                    |
|---------------|------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| settings      | UsercentricsSettings   | CMP settings and content properties needed to render your own UI. See [Building your own UI](../features/build_own_ui.md#building-your-own-ui).                                          |
| services      | [UsercentricsService]  | List of services.                                                                                                                                                                        |
| categories    | [UsercentricsCategory] | List of categories.                                                                                                                                                                      |
| userLocation  | UsercentricsLocation   | Object exposing user's general location: **regionCode**, **countryCode** and **countryName**.                                                                                            |
| legalBasis    | LegalBasisLocalization | Object containing Legal Basis localization data.                                                                                                                                         |
| activeVariant | Enum                   | Provides active Legal Framework: **default** solution for GDPR, LGPD, etc., **ccpa** solution for ccpa (California/US), **tcf** solution for IAB's Transparency & Consent Framework 2.0. |

### AdditionalConsentModeData
| Property        | Type                                    | Notes                                                                                                             |
|-----------------|-----------------------------------------|-------------------------------------------------------------------------------------------------------------------|
| acString        | String                                  | A String that represents the consented and disclosed Google Ad Technology Providers (ATPs), as defined by Google. |
| adTechProviders | List<[AdTechProvider](#adtechprovider)> | Represents the List of the defined ATPs.                                                                          |

### AdTechProvider
| Property         | Type    | Notes                     |
|------------------|---------|---------------------------|
| id               | Int     | ATP Identifier.           |
| name             | String  | ATP Name.                 |
| privacyPolicyUrl | String  | ATP Privacy Policy URL.   |
| consent          | Boolean | Consent given to the ATP. |

