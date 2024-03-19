# Unity Core API

## Initialization
### Init
Called to configure and initialize Usercentrics after app launch

```c#
Usercentrics.Instance.Initialize((status) => {
    // Success: Returns UsercentricsReadyStatus object
}, (errorMessage) => {
    // Failure: Returns non-localized error
});
```

### ShowFirstLayer
When called, it will display First Layer.

```c#
Usercentrics.Instance.ShowFirstLayer( (userResponse) => {
    // Handle userResponse
});
```

### ShowSecondLayer
When called, it will display the Second Layer.

```c#
Usercentrics.Instance.ShowSecondLayer(<showCloseButton> /* true/false */, (usercentricsConsentUserResponse) => {
    // Handle userResponse
});
```
## Features
### RestoreUserSession
Restore Consents given by a user using its Controller ID.

```c#
Usercentrics.Instance.RestoreUserSession(<controllerId>, (status => {}), (errorString => {}));
```

### ClearUserSession
Clear Consents given by a user in its current session, check out the [feature page](../features/clear-user-session.md).

```c#
Usercentrics.Instance.ClearUserSession((status) => {}, (errorString) => {});
```

### Reset
Resets Usercentrics SDK, deleting all local data and forcing to be initialized again.

```c#
Usercentrics.Instance.Reset();
```

### AcceptAll
Signal to Usercentrics SDK that the Accept All button has been pressed by the user.

```c#
Usercentrics.Instance.AcceptAll();
```

### DenyAll
Signal to Usercentrics SDK that the Deny All button has been pressed by the user.

```c#
Usercentrics.Instance.DenyAll();
```

### GetFirstLayerSettings
For now, this method only returns First Layer data when using TCF Framework.

```c#
Usercentrics.Instance.GetFirstLayerSettings();
```
### GetConsents
Retrieve a list of services with the consent choices.

```c#
Usercentrics.Instance.GetConsents();
```

| Outputs  | Type                                                        | Notes                                  |
|----------|-------------------------------------------------------------|----------------------------------------|
| consents | [[UsercentricsServiceConsent](#usercentricsserviceconsent)] | List of Services with consent choices. |

### UsercentricsServiceConsent
| Property      | Type                                                                  | Notes                                                                                                                                                               |
|---------------|-----------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| templateId    | String                                                                | ID used to match a service with frameworks running on your app. See [Applying Service Consent](../integration/apply_consent.md#how-to-match-a-service-with-an-sdk). |
| status        | Bool                                                                  | Consent status given to this specific service.                                                                                                                      |
| dataProcessor | String                                                                | Name of entity processing the data that was collected via this service.                                                                                             |
| version       | String                                                                | Legal template version. See [Service Settings](../../config/banner-config.md#service-settings).                                                                     |
| isEssential   | Boolean                                                               | If it is an essential service.                                                                                                                                      |
| history       | [[UsercentricsConsentHistoryEntry](#usercentricsconsenthistoryentry)] | The consent history chronologically ordered.                                                                                                                        |
| type          | UsercentricsConsentType                                               | The type of the current consent status (Explicit/Implicit).                                                                                                         |

### UsercentricsConsentHistoryEntry
| Property          | Type    | Notes                                                                                           |
|-------------------|---------|-------------------------------------------------------------------------------------------------|
| status            | Bool    | Consent status given to this specific service.                                                  |
| dataProcessor     | String  | Name of entity processing the data that was collected via this service.                         |
| timestampInMillis | Long    | The UNIX timestamp in millisecons of the consent.                                               |

## Helpers
### Platform is supported
Get if current selected platform is supported by Usercentrics.

```c#
Usercentrics.Instance.IsPlatformSupported();
```

### GetControllerID
Catch user events if you are using Third Party Analytics tools.

A Usercentrics generated ID, that represents the consent collected by a User.
```c#
Usercentrics.Instance.GetControllerID();
```

### Track
Track [user events](../features/build_own_ui.md#interaction-analytics) if you are building your own UI, and want to see these events in the Usercentrics Analytics Dashboard.
```c#
Usercentrics.Instance.Track(<usercentricsAnalyticsEventType>);
```

### Get CMP Data
Get CMP related data set in the Admin Interface.
```c#
var cmpData = Usercentrics.Instance.GetCmpData();

var publishedApps = cmpData.publishedApps;
var activeVariant = cmpData.activeVariant
var userLocation = cmpData.userLocation;
```

## TCF 2.2 Specific Methods
### GetTCFData
Retrieve all data related to TCF 2.2, as well as the consent string. (TCString)
Your CMP configuration needs to be set for TCF, otherwise this object will be empty.

```c#
Usercentrics.Instance.GetTCFData((tcfData) => {
    var purposes = tcfData.purposes;
    var specialPurposes = tcfData.specialPurposes;
    var features = tcfData.features;
    var specialFeatures = tcfData.specialFeatures;
    var stacks = tcfData.stacks;
    var vendors = tcfData.vendors;

    // TCString
    var tcString = tcfData.tcString;
});
```

### Set CMP ID
When building your own UI for TCF 2.2. You need to pass the CMPID given to you by the IAB, in order for your solution to be compliant.

```c#
Usercentrics.Instance.SetCmpId(<cmpId>);
```

### GetAdditionalConsentModeData
Retrieve all data related to [Google Additional Consent v2](../features/google-additional-consent.md), as well as the consent string. (ACString)
Your CMP configuration needs to be set for Additional Consent, otherwise this object will be empty.
```c#
var additionalConsentData = Usercentrics.Instance.GetAdditionalConsentModeData()
```

| Outputs               | Type                      | Notes                                                                                                                                                                        |
|-----------------------|---------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| additionalConsentData | AdditionalConsentModeData | Retrieves the [Google's Additional Consent String](https://support.google.com/admanager/answer/9681920?hl=en) and the List of consented and not consented Ad Tech Providers. |

### AdditionalConsentModeData
| Property        | Type                 | Notes                                                                                                             |
|-----------------|----------------------|-------------------------------------------------------------------------------------------------------------------|
| acString        | String               | A String that represents the consented and disclosed Google Ad Technology Providers (ATPs), as defined by Google. |
| adTechProviders | List<AdTechProvider> | Represents the List of the defined ATPs.                                                                          |

### AdTechProvider
| Property         | Type    | Notes                     |
|------------------|---------|---------------------------|
| id               | Int     | ATP Identifier.           |
| name             | String  | ATP Name.                 |
| privacyPolicyUrl | String  | ATP Privacy Policy URL.   |
| consent          | Boolean | Consent given to the ATP. |



## CCPA/CPRA Specific Methods
### Get CCPA/CPRA (USP) Data
Retrieve all data related to CCPA/CPRA, as well as the consent string. (USPString)
Your CMP configuration needs to be set for CCPA/CPRA, otherwise this object will be empty.

```c#
Usercentrics.Instance.GetUSPData();
```
