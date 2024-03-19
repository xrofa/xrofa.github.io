#Building your own UI

!!! warning "Only for IAB TCF 2.2 certified customers"
    Currently you can only use this solution if you are building a Banner that adheres to the IAB's TCF 2.2 Standard. For this you will need to be [certified as a CMP by the IAB](https://iabeurope.eu/tcf-for-cmps/).

Use our **Data Source** and **Action Delegates** to fetch all the information you need to build you Banner, and add functionality.

###Data Source

```c#
//Fetch Banner properties to build you UI
var firstLayerSettings = Usercentrics.Instance.GetFirstLayerSettings();
var title = firstLayerSettings.title;
var description = firstLayerSettings.description;
// see below the full list of fields available

// IAB's TCF Data
Usercentrics.Instance.GetTCFData((tcfData) => {
    var purposes = tcfData.purposes;
    var specialPurposes = tcfData.specialPurposes;
    var features = tcfData.features;
    var specialFeatures = tcfData.specialFeatures;
    var stacks = tcfData.stacks;
    var vendors = tcfData.vendors;
    var tcString = tcfData.tcString;
});
```

###Content Mapping

| First Layer                    | SDK Property                               |
|:-------------------------------|:-------------------------------------------|
| 1. First layer title           | firstLayerSettings.title                   |
| 2. First layer description     | firstLayerSettings.description             |
| 3. First layer additional Info | firstLayerSettings.additionalInfo          |
| 4. First layer resurface note  | firstLayerSettings.resurfaceNote           |
| 5. Vendorlist link title       | firstLayerSettings.vendorListLinkTitle     |
| 6. Manage settings link title  | firstLayerSettings.manageSettingsLinkTitle |
| 7. Label purposes              | firstLayerSettings.purposesLabel           |
| 8. Label features              | firstLayerSettings.featuresLabel           |

| Buttons                    | SDK Property                       |
|:---------------------------|:-----------------------------------|
| 1. Accept all button title | firstLayerSettings.acceptAllButton |
| 2. Deny all button title   | firstLayerSettings.denyAllButton   |
| 3. Save button title       | firstLayerSettings.saveButton      |

| Vendors                             | SDK Property                                                |
|:------------------------------------|:------------------------------------------------------------|
| 1. Label title                      | vendor.name                                                 |
| 2. Purpose Name                     | vendor.purposes[n].[findByPurposeId].name                   |
| 3. Legitimate Interest Purpose name | vendor.legitimateInterestPurposes[n].[findByPurposeId].name |
| 4. Special purpose name             | vendor.specialPurposes[n].[findByPurposeId].name            |
| 5. Feature name                     | vendor.features[n].[findByPurposeId].name                   |
| 6. Special Feature name             | vendor.specialFeatures[n].[findByPurposeId].name            |
| 7. Cookie refresh value             | vendor.cookieRefresh                                        |
| 8. Cookie Age value                 | vendor.cookieMaxAgeSeconds                                  |
| 9. Cookie storage value             | vendor.usesCookie                                           |
| 10. Non-cookie storage value        | vendor.usesNonCookieAccess                                  |

| Purposes                       | SDK Property                      |
|:-------------------------------|:----------------------------------|
| 1. Label title                 | purpose.name                      |
| 2. Legitimate interest consent | purpose.legitimateInterestConsent |
| 3. Legal Description           | purpose.descriptionLegal          |
| 4. Purpose Description         | purpose.purposeDescription        |
| 5. Consent                     | purpose.consent                   |

| Special Purposes       | SDK Property                    |
|:-----------------------|:--------------------------------|
| 1. Label title         | specialPurpose.name             |
| 2. Legal Description   | specialPurpose.descriptionLegal |
| 3. Purpose Description | purpose.purposeDescription      |

| Features                       | SDK Property                      |
|:-------------------------------|:----------------------------------|
| 1. Label title                 | feature.name                      |
| 2. Legitimate interest consent | feature.legitimateInterestConsent |
| 3. Legal Description           | feature.descriptionLegal          |

| Special Features     | SDK Property                      |
|:---------------------|:----------------------------------|
| 1. Label title       | specialFeature.name               |
| 2. Consent           | specialFeature.consent            |
| 3. Description       | specialFeature.purposeDescription |
| 4. Legal Description | specialFeature.descriptionLegal   |

| Stacks              | SDK Property            |
|:--------------------|:------------------------|
| 1. Label title      | stack.name              |
| 3. Description      | stack.description       |
| 3. Purposes         | stack.purposeIds        |
| 4. Special Features | stack.specialFeatureIds |

###Set CMP ID

When building your own TCF 2.2 CMP, it is required to have your CMP UI design certified by the [IAB](https://iabeurope.eu/tcf-2-0/). Once certified, you will need to provide your CMP ID as follows:

```c#
Usercentrics.Instance.setCMPId(<ID>);
```

### Action Delegates

In order to collect consent, we have provided the following two functions:

**Accept All**

```c#
Usercentrics.Instance.AcceptAll();
```

**Deny All**

```c#
Usercentrics.Instance.DenyAll();
```

### Interaction Analytics
To gather events in the Usercentrics analytics dashboard the following API is provided to track the available events:

```c#
Usercentrics.Instance.Track(<usercentricsAnalyticsEventType>);
```

**Events**

| Event                | Notes                                                                                                                   |
|----------------------|-------------------------------------------------------------------------------------------------------------------------|
| CmpShown             | The banner was displayed to the user. It doesn't matter which layer.                                                    |
| AcceptAllFirstLayer  | The Accept All button was pressed from the first layer.                                                                 |
| DenyAllFirstLayer    | The Deny All button was pressed from the first layer.                                                                   |
| SaveFirstLayer       | The Save button was pressed from the first layer. Save is mainly used for granular decisions.                           |
| AcceptAllSecondLayer | The Accept All button was pressed from the second layer.                                                                |
| DenyAllSecondLayer   | The Deny All button was pressed from the second layer.                                                                  |
| SaveSecondLayer      | The Save button was pressed from the second layer. Save is mainly used for granular decisions.                          |
| ImprintLink          | The Imprint link/button was pressed.                                                                                    |
| MoreInformationLink  | The More Information link/button was pressed. This button is usually used to navigate from first layer to second layer. |
| PrivacyPolicyLink    | The Privacy policy link/button was pressed.                                                                             |


!!! tip "Continue to Apply Consent"
    Now, it is fundamental that the user's privacy choices are applied to the 3rd party SDKs on you App.
    Please continue to [Apply Consent](../integration/apply_consent.md).
