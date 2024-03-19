#Building your own UI

The **Usercentrics Core** module provides all the information and functionality needed to build a consent banner of your own.

!!! warning "Regulation Dependent"
    Be aware that there are implementation differences between each legal framework, due to divergent legal requirements.

=== "GDPR"
    ##General Data Protection Regulation (GDPR)

    The European Union's General Data Protection Regulation applies to any business in the EU as well as organizations outside the EU that collect, process and store information on EU citizens, as well as non-citizens residing in the EU. 

    To get you started, we have provided a [compliance checklist](https://usercentrics.com/knowledge-hub/gdpr-cookies-checklist-your-toolkit-for-compliance/) to help you understand the requirements of GDPR.

    ###Data Source

    === "Swift<center><sub>iOS</sub></center>"

        ```swift
        UsercentricsCore.isReady { _ in
            
            let data = UsercentricsCore.shared.getCMPData()
            let settings = data.settings
            let services = data.services
            let categories = data.categories

        } onFailure: { error in
            // Handle non-localized error
        }
        ``` 

    === "Kotlin<center><sub>Android</sub></center>"

        ```kotlin
        Usercentrics.isReady({
            
            val data = Usercentrics.instance.getCMPData()
            val settings = data.settings
            val services = data.services
            val categories = data.categories
            
        }, { error ->
            // Handle non-localized error
        })
        ```

    === "Dart<center><sub>Flutter</sub></center>"

        ```dart
        try {
          final data = await Usercentrics.cmpData;
          final settings = data.settings;
          final services = data.services;
          final categories = data.categories;
        } catch (error) {
          // Handle non-localized error
        }
        ```

    === "Typescript<center><sub>React Native</sub></center>"

        ```typescript
        try {
          const data = await Usercentrics.getCMPData();
          const settings = data.settings;
          const services = data.services;
          const categories = data.categories;
        } catch (error) {
          // Handle non-localized error
        }
        ```

    !!! tip "Matching Categories and Services"
        You may match services to categories with `category.slug` == `service.categorySlug`.

    ###Content Mapping

    To help you navigate our Data Source, please see the following content mapping tables:

    | First Layer    | SDK Property      |
    |:-------------------------| : -------------------------|
    | 1. Title   | settings.labels.firstLayerTitle    |
    | 2. Description    | settings.firstLayerDescriptionHtml (raw input) or settings.firstLayerDescription    |
    | 3. Short Description    | settings.firstLayerMobileDescriptionHtml (raw input) or settings.firstLayerMobileDescription    |
    | 4. Read More    | settings.labels.btnBannerReadMore  |
    | 5. Accept Button Title    | settings.labels.btnAcceptAll    |
    | 6. Deny Button Title    | settings.labels.btnDeny     |
    | 7. More Button Title    | settings.labels.btnMore     |

    | Second Layer    | SDK Property      |
    |:-------------------------| : -------------------------|
    | 8. Title  | settings.labels.secondLayerTitle    |
    | 9. Description   | settings.labels.secondLayerDescriptionHtml (raw input) or settings.labels.secondLayerDescription    |
    | 10. Accept Button Title  | settings.secondLayer.acceptButtonText    |
    | 11. Deny Button Title    | settings.secondLayer.denyButtonText     |

    | Banner Elements     | SDK Property      |
    |:-------------------------| : -------------------------|
    | 12. Privacy Policy Text   | settings.labels.privacyPolicyLinkText    |
    | 13. Privacy Policy URL    | settings.privacyPolicyUrl    |
    | 14. Imprint Text    | settings.labels.imprintLinkText    |
    | 15. Imprint URL    | settings.imprintUrl    |
    | 16. Language Selected       | settings.language    |
    | 17. Languages Available       | settings.languagesAvailable    |
    | 18. Categories Tab        | settings.secondLayer.tabsCategoriesLabel    |
    | 19. Services Tab     | settings.secondLayer.tabsServicesLabel   |
    | 20. Save Button Title      | settings.labels.btnSave       |

    | Category Component    | SDK Property      |
    |:-------------------------| : -------------------------|
    | 21. Category Name      | category.label       |
    | 22. Category Description      | category.description       |
    
    | Services Component    | SDK Property    |
    |:-------------------------| : -------------------------|
    |  23. Service Name      | service.dataProcessor       |
    |  24. Service Description Title      | settings.labels.descriptionOfService       |
    |  25. Service Description      | service.descriptionOfService       |
    |  26. Processing Company Title      | settings.labels.processingCompanyTitle       |
    |  27. Processing Company      | service.nameOfProcessingCompany + service.addressOfProcessingCompany       |
    |  28. Data Purposes Title      | settings.labels.dataPurposes       |
    |  29. Data Purposes Description      | settings.labels.dataPurposesInfo       |
    |  30. Data Purposes       | service.dataPurposesList       |
    |  31. Technologies Used Title      | settings.labels.technologiesUsed    |
    |  32. Technologies Used Description      | settings.labels.technologiesUsedInfo       |
    |  33. Technologies Used      | service.technologyUsed       |
    |  34. Data Collected Title      | settings.labels.dataCollectedList       |
    |  35. Data Collected Description      | settings.labels.dataCollectedListInfo       |
    |  36. Data Collected      | service.dataCollectedList       |
    |  37. Legal Bases Title      | settings.labels.legalBasisList       |
    |  38. Legal Bases Description      | settings.labels.legalBasisInfo       |
    |  39. Legal Bases      | service.legalBasisList       |
    |  40. Processing Location Title      | settings.labels.locationOfProcessing       |
    |  41. Processing Location      | service.locationOfProcessing       |
    |  42. Retention Period Title      | settings.labels.retentionPeriod       |
    |  43. Retention Period      | service.retentionPeriodDescription       |
    |  44. Third Country Distribution Title      | settings.labels.transferToThirdCountries       |
    |  45. Third Country Distribution      | service.thirdCountryTransfer       |
    |  46. Is Essential      | service.isEssential       |
    |  47. Data Recipients Title      | settings.labels.dataRecipientsList       |
    |  48. Data Recipients      | service.dataRecipientsList   |
    |  49. Privacy Policy Title      | settings.labels.policyOf       |
    |  50. Privacy Policy      | service.privacyPolicyURL       |
    |  51. Cookie Policy Title      | settings.labels.cookiePolicyInfo       |
    |  52. Cookie Policy       | service.cookiePolicyURL       |
    |  53. Opt Out Link Title      | settings.labels.optOut       |
    |  54. Opt Out Link      | service.optOutUrl       |
    |  55. History Title      | settings.labels.history       |
    |  56. History      | service.consent.history       |
    |  57. History Consent Given      | settings.labels.yes       |
    |  58. History Consent Not Given      | settings.labels.no      |
    |  59. History Explicit Consent      | settings.labels.explicit      |
    |  60. History Implicit Consent      | settings.labels.implicit      |

    ###Action Delegates

    In order to collect consent, we have provided the following 3 functions:

    **Accept All**

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
        final consents = Usercentrics.acceptAll(consentType: <UsercentricsConsentType>);
        ```

    === "Typescript<center><sub>React Native</sub></center>"

        ```typescript
        const consents = Usercentrics.acceptAll(<UsercentricsConsentType>);
        ```


    **Deny All**

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
        final consents = Usercentrics.denyAll(consentType: <UsercentricsConsentType>);
        ```

    === "Typescript<center><sub>React Native</sub></center>"

        ```typescript
        const consents = Usercentrics.denyAll(<UsercentricsConsentType>);
        ```

    **Save**

    For granular selection, you may pass specific sets of consent with an array of decisions:

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
        final consents = Usercentrics.saveDecisions(decisions: List<UserDecision>, consentType: <UsercentricsConsentType>);
        ```

    === "Typescript<center><sub>React Native</sub></center>"

        ```typescript
        const consents = Usercentrics.saveDecisions([<UserDecision], <UsercentricsConsentType>);
        ```

    !!! tip "Consent Type"
        The consent type should be based on if a customer made an **explicit** action to provide consent, or not. **Implicit** can be used if the user ignores or skips the CMP. We highly recommend you only use implicit together with the `denyAll()` method, which will accept only essential services.

    ###Interaction Analytics
    To gather events in the Usercentrics analytics dashboard the following API is provided to track the available events:
    
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
        Usercentrics.track(event: <UsercentricsAnalyticsEventType>);
        ```

    === "Typescript<center><sub>React Native</sub></center>"

        ```typescript
        Usercentrics.track(<UsercentricsAnalyticsEventType>);
        ```

    **Events**

    | [iOS] Event           | [Android] Event          | Notes |
    | --------------------- | ------------------------ | ----- |
    | .cmpShown             | .CMP_SHOWN               | The banner was displayed to the user. It doesn't matter which layer. |
    | .acceptAllFirstLayer  | .ACCEPT_ALL_FIRST_LAYER  | The Accept All button was pressed from the first layer. |
    | .denyAllFirstLayer    | .DENY_ALL_FIRST_LAYER    | The Deny All button was pressed from the first layer. |
    | .saveFirstLayer       | .SAVE_FIRST_LAYER        | The Save button was pressed from the first layer. Save is mainly used for granular decisions. |
    | .acceptAllSecondLayer | .ACCEPT_ALL_SECOND_LAYER | The Accept All button was pressed from the second layer. |
    | .denyAllSecondLayer   | .DENY_ALL_SECOND_LAYER   | The Deny All button was pressed from the second layer. |
    | .saveSecondLayer      | .SAVE_SECOND_LAYER       | The Save button was pressed from the second layer. Save is mainly used for granular decisions. |
    | .imprintLink          | .IMPRINT_LINK            | The Imprint link/button was pressed. |
    | .moreInformationLink  | .MORE_INFORMATION_LINK   | The More Information link/button was pressed. This button is usually used to navigate from first layer to second layer. |
    | .privacyPolicyLink    | .PRIVACY_POLICY_LINK     | The Privacy policy link/button was pressed. |

=== "TCF 2.2"

    ##Transparency & Consent Framework (TCF 2.2)

    The Interactive Advertising Bureau, (IAB Europe) has created the [GDPR Transparency and Consent Framework (TCF 2.2)](https://iabeurope.eu/tcf-2-0/) to support publishers, technology vendors and advertisers in being compliant with EU’s GDPR and ePrivacy Directive.

    Be aware that a [validation process with the IAB](https://iabeurope.eu/tcf-for-cmps/) is required, in order to become a licensed TCF 2.2 CMP provider.

    ###IAB Data Source
    
    === "Swift<center><sub>iOS</sub></center>"
    
        ```swift
        UsercentricsCore.isReady { status in
            
            // CMP Data
            let data = UsercentricsCore.shared.getCMPData()
            let settings = data.settings
            let tcfSettings = settings.tcf2

            // TCF Data
            UsercentricsCore.shared.getTCFData() { tcfData in
                let purposes = tcfData.purposes
                let specialPurposes = tcfData.specialPurposes
                let features = tcfData.features
                let specialFeatures = tcfData.specialFeatures
                let stacks = tcfData.stacks
                let vendors = tcfData.vendors

                // TCString
                let tcString = tcfData.tcString
            }

        } onFailure: { error in
            // Handle non-localized error
        }
        ```
    
    === "Kotlin<center><sub>Android</sub></center>"
    
        ```kotlin
        Usercentrics.isReady({

            // CMP Data
            val data = Usercentrics.instance.getCMPData()
            val settings = data.settings
            val tcfSettings = settings.tcf2

            // TCF Data
            Usercentrics.instance.getTCFData() { tcfData ->
                val purposes = tcfData.purposes
                val specialPurposes = tcfData.specialPurposes
                val features = tcfData.features
                val specialFeatures = tcfData.specialFeatures
                val stacks = tcfData.stacks
                val vendors = tcfData.vendors

                // TCString
                val tcString = tcfData.tcString
            }

        }, { error ->
            // Handle non-localized error
        })
        ```

    === "Dart<center><sub>Flutter</sub></center>"
    
        ```dart
        try {
          final data = await Usercentrics.cmpData;
          final settings = data.settings;
          final tcfSettings = settings.tcf2;
    
          // TCF Data
          final tcfData = await Usercentrics.tcfData;
          final tcString = tcfData.tcString;
          final purposes = tcfData.purposes;
          final specialPurposes = tcfData.specialPurposes;
          final features = tcfData.features;
          final specialFeatures = tcfData.specialFeatures;
          final stacks = tcfData.stacks;
          final vendors = tcfData.vendors;

          // TODO - Add TCString property

        } catch (error) {
            // Handle non-localized error
        }
        ```

    === "Typescript<center><sub>React Native</sub></center>"
    
        ```typescript
        try {
          const data = await Usercentrics.getCMPData();
          const settings = data.settings;
          const tcfSettings = settings.tcf2;
    
          // TCF Data
          const tcfData = await Usercentrics.getTCFData();
          const purposes = tcfData.purposes;
          const specialPurposes = tcfData.specialPurposes;
          const features = tcfData.features;
          const specialFeatures = tcfData.specialFeatures;
          const stacks = tcfData.stacks;
          const vendors = tcfData.vendors;

          // TCString
          const tcString = tcfData.tcString;
    
        } catch (error) {
            // Handle non-localized error
        }
        ```
    
    ###Non-IAB Data Source
    
    === "Swift<center><sub>iOS</sub></center>"
    
        ```swift
        UsercentricsCore.isReady { status in
            
            let data = UsercentricsCore.shared.getCMPData()
            let settings = data.settings
            let services = data.services
            let categories = data.categories

        } onFailure: { error in
            // Handle non-localized error
        }
        ``` 
    
    === "Kotlin<center><sub>Android</sub></center>"
    
        ```kotlin
        Usercentrics.isReady({

            val data = Usercentrics.instance.getCMPData()
            val settings = data.settings
            val services = data.services
            val categories = data.categories
 
        }, { error ->
            // Handle non-localized error
        })
        ```

    === "Dart<center><sub>Flutter</sub></center>"
    
        ```dart
        try {
          final data = await Usercentrics.cmpData;
          final settings = data.settings;
          final services = data.services;
          final categories = data.categories;
    
        } catch (error) {
            // Handle non-localized error
        }
        ```

    === "Typescript<center><sub>React Native</sub></center>"
    
        ```typescript
        try {
          const data = await Usercentrics.getCMPData();
          const settings = data.settings;
          const services = data.services;
          const categories = data.categories;
        } catch (error) {
            // Handle non-localized error
        }
        ```
    
    !!! tip "Matching Categories and Services"
        You may match services to categories with `category.slug` == `service.categorySlug`.

    ###Content Mapping

    | First Layer              | SDK Property    |
    |:-------------------------| : -------------------------|
    | 1. First layer title    | tcf2.firstLayerTitle    |
    | 2. First layer description    | tcf2.firstLayerDescription    |
    | 3. First layer additional Info   | tcf2.firstLayerAdditionalInfo    |
    | 4. First layer resurface note   | tcf2.firstLayerNoteResurface    |
    | 5. Vendorlist link title  |  tcf2.linksVendorListLinkLabel   |
    | 6. Manage settings link title  |  tcf2.linksManageSettingsLabel   |
    | 7. Label purposes  |  tcf2.labelsPurposes  |
    | 8. Label features  |  tcf2.labelsFeatures  |

    | Second Layer             | SDK Property    |
    |:-------------------------| : -------------------------|
    | 1. Second layer title    | tcf2.secondLayerTitle    |
    | 2. Second layer description    | tcf2.secondLayerDescription   |
    | 3. Purposes tab   |  tcf2.tabsPurposeLabel   |
    | 4. Vendors tab  |  tcf2.tabsVendorsLabel  |
    | 5. Vendors who are part of TCF  |  tcf2.labelsIabVendors
    | 6. Vendors who are NOT part of TCF  |  tcf2.labelsNonIabVendors
    | 7. Non IAB purposes  |  tcf2.labelsNonIabPurposes
    
    | Buttons                  | SDK Property    |
    |:-------------------------| : -------------------------|
    | 1. Accept all button title | tcf2.buttonsAcceptAllLabel    |
    | 2. Deny all button title | tcf2.buttonsDenyAllLabel    |
    | 3. Save button title | tcf2.buttonsSaveLabel    |
    
    | General                  | SDK Property    |
    |:-------------------------| : -------------------------|
    | 1. Language Selected       | settings.language    |
    | 2. Languages Available       | settings.languagesAvailable    |
    | 3. Privacy Policy Text   | settings.labels.privacyPolicyLinkText    |
    | 4. Privacy Policy URL    | settings.privacyPolicyUrl    |
    | 5. Imprint Text    | settings.labels.imprintLinkText    |
    | 6. Imprint URL    | settings.imprintUrl    |
    
    | Toggles                  | SDK Property    |
    |:-------------------------| : -------------------------|
    | 1. Toggle consent label  | tcf2.togglesConsentToggleLabel    |
    | 2. Toggle legitimate interest label  | tcf2.togglesLegIntToggleLabel    |
    
    | Vendors                  | SDK Property    |
    |:-------------------------| : -------------------------|
    | 1. Label title  | vendor.name   |
    | 2. Purpose label | tcf2.vendorPurpose
    | 3. Purpose Name  | vendor.purposes[n].[findByPurposeId].name
    | 4. Legitimate interest purpose label | tcf2.vendorLegitimateInterestPurposes
    | 5. Legitimate Interest Purpose name  | vendor.legitimateInterestPurposes[n].[findByPurposeId].name
    | 6. Special purpose label | tcf2.vendorSpecialPurposes
    | 7. Special purpose name  | vendor.specialPurposes[n].[findByPurposeId].name
    | 8. Feature label  | tcf2.vendorFeatures
    | 9. Feature name  | vendor.features[n].[findByPurposeId].name
    | 10. Special Feature label  | tcf2.vendorSpecialFeatures
    | 11. Special Feature name  | vendor.specialFeatures[n].[findByPurposeId].name
    | 12. Cookie refresh value | vendor.cookieRefresh
    | 13. Cookie Age value | vendor.cookieMaxAgeSeconds
    | 14. Cookie storage value  |  vendor.usesCookie
    | 15. Non-cookie storage value  |  vendor.usesNonCookieAccess
    
    | Purposes                 | SDK Property    |
    |:-------------------------| : -------------------------|
    | 1. Label title  | purpose.name   |
    | 2. Legitimate interest consent  | purpose.legitimateInterestConsent    |
    | 3. Legal Description  | purpose.descriptionLegal    |
    | 4. Purpose Description  | purpose.purposeDescription    |
    | 5. Consent  | purpose.consent    |

    | Special Purposes                 | SDK Property    |
    |:-------------------------| : -------------------------|
    | 1. Label title  | specialPurpose.name   |
    | 2. Legal Description  | specialPurpose.descriptionLegal    |
    | 3. Purpose Description  | purpose.purposeDescription    |
    
    | Features              | SDK Property    |
    |:-------------------------| : -------------------------|
    | 1. Label title  | feature.name   |
    | 2. Legitimate interest consent  | feature.legitimateInterestConsent    |
    | 3. Legal Description  | feature.descriptionLegal    |

    | Special Features              | SDK Property    |
    |:-------------------------| : -------------------------|
    | 1. Label title  | specialFeature.name   |
    | 2. Consent  | specialFeature.consent    |
    | 3. Description  |  specialFeature.purposeDescription  |
    | 4. Legal Description  | specialFeature.descriptionLegal    |

    | Stacks             | SDK Property    |
    |:-------------------------| : -------------------------|
    | 1. Label title  | stack.name   |
    | 3. Description  |  stack.description  |
    | 3. Purposes  | stack.purposeIds    |
    | 4. Special Features  | stack.specialFeatureIds    |

    ###Set CMP ID
    
    When building your own TCF 2.2 CMP, it is required to have your CMP UI design certified by the [IAB](https://iabeurope.eu/tcf-2-0/). Once certified, you will need to provide your CMP ID as follows:
    
    === "Swift<center><sub>iOS</sub></center>"
    
        ```swift
        UsercentricsCore.shared.setCMPId(id: <ID>)
        ```
    
    === "Kotlin<center><sub>Android</sub></center>"
    
        ```kotlin
        Usercentrics.instance.setCMPId(<ID>)
        ```

    === "Dart<center><sub>Flutter</sub></center>"
        ```dart
        Usercentrics.setCmpIdForTCF(id: <ID>)
        ```

    === "Typescript<center><sub>React Native</sub></center>"
        ```typescript
        Usercentrics.setCMPId(<ID>)
        ```
    
    ### Action Delegates

    In order to collect consent, we have provided the following 3 functions:

    **Accept All**
    
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
        final consents = Usercentrics.acceptAllForTCF(fromLayer: <TCFDecisionUILayer>, consentType: <UsercentricsConsentType>)
        ```

    === "Typescript<center><sub>React Native</sub></center>"
    
        ```typescript
        const consents = Usercentrics.acceptAllForTCF(<TCFDecisionUILayer>, <UsercentricsConsentType>)
        ```
    
    **Deny All**
    
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
        final consents = Usercentrics.denyAllForTCF(fromLayer: <TCFDecisionUILayer>, consentType: <UsercentricsConsentType>)
        ```

    === "Typescript<center><sub>React Native</sub></center>"
    
        ```typescript
        const consents = Usercentrics.denyAllForTCF(<TCFDecisionUILayer>, <UsercentricsConsentType>)
        ```
    
    **Save** 
    
    For granular selection, you may pass specific sets of consent with an array of `TCFUserDecisions`.
    
    === "Swift<center><sub>iOS</sub></center>"
    
        ```swift
        let consents = UsercentricsCore.shared.saveDecisionsForTCF(tcfDecisions: <[TCFUserDecisions]>, 
                                                                   fromLayer: <TCFDecisionUILayer>,
                                                                   serviceDecisions: <[UserDecision]>,
                                                                   consentType: <UsercentricsConsentType>)
        ```
    
    === "Kotlin<center><sub>Android</sub></center>"
    
        ```kotlin
        val consents = Usercentrics.instance.saveDecisionsForTCF(
            tcfDecisions = <[TCFUserDecisions]>, 
            fromLayer = TCFDecisionUILayer.FIRST_LAYER,
            serviceDecisions = <[UserDecision]>, 
            consentType = <UsercentricsConsentType>
        )
        ```


    === "Dart<center><sub>Flutter</sub></center>"
    
        ```dart
        final consents = await Usercentrics.saveDecisionsForTCF(
          tcfDecisions: List<TCFDecisions>,
          fromLayer: <TCFDecisionUILayer>,
          serviceDecisions: List<UserDecision>,
          consentType: <UsercentricsConsentType>
        );
        ```

    === "Typescript<center><sub>React Native</sub></center>"
    
        ```typescript
        const consents = await Usercentrics.saveDecisionsForTCF(
          [<TCFDecisions>],
          <UsercentricsConsentType>,
          [UserDecision],
          <UsercentricsConsentType>
        );
        ```
    
    !!! warning "TCF 2.2 Decision Layer"
        Depending on your design, you might have 1 or 2 layers for collecting consent. It is required by the IAB, that you specify in which layer the consent was collected. For this, you may pass the corresponding enum value from `TCF_DECISION_UI_LAYER`.
    
    !!! tip "Consent Type"
        The consent type should be based on if a customer made an **explicit** action to provide consent, or not. **Implicit** can be used if the user ignores or skips the CMP. We highly recommend you only use implicit together with the `denyAllForTCF()` method, which will accept only essential services.

    ###Interaction Analytics
    To gather events in the Usercentrics analytics dashboard the following API is provided to track the available events:
    
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
        Usercentrics.track(event: <UsercentricsAnalyticsEventType>);
        ```

    === "Typescript<center><sub>React Native</sub></center>"

        ```typescript
        Usercentrics.track(<UsercentricsAnalyticsEventType>);
        ```

    **Events**

    | [iOS] Event           | [Android] Event          | Notes |
    | --------------------- | ------------------------ | ----- |
    | .cmpShown             | .CMP_SHOWN               | The banner was displayed to the user. It doesn't matter which layer. |
    | .acceptAllFirstLayer  | .ACCEPT_ALL_FIRST_LAYER  | The Accept All button was pressed from the first layer. |
    | .denyAllFirstLayer    | .DENY_ALL_FIRST_LAYER    | The Deny All button was pressed from the first layer. |
    | .saveFirstLayer       | .SAVE_FIRST_LAYER        | The Save button was pressed from the first layer. Save is mainly used for granular decisions. |
    | .acceptAllSecondLayer | .ACCEPT_ALL_SECOND_LAYER | The Accept All button was pressed from the second layer. |
    | .denyAllSecondLayer   | .DENY_ALL_SECOND_LAYER   | The Deny All button was pressed from the second layer. |
    | .saveSecondLayer      | .SAVE_SECOND_LAYER       | The Save button was pressed from the second layer. Save is mainly used for granular decisions. |
    | .imprintLink          | .IMPRINT_LINK            | The Imprint link/button was pressed. |
    | .moreInformationLink  | .MORE_INFORMATION_LINK   | The More Information link/button was pressed. This button is usually used to navigate from first layer to second layer. |
    | .privacyPolicyLink    | .PRIVACY_POLICY_LINK     | The Privacy policy link/button was pressed. |


=== "CCPA/CPRA"

    ##California Consumer Privacy Act (CCPA)

    The California Consumer Privacy Act of 2018 (CCPA) gives consumers more control over the personal information that businesses collect about them and provide guidance on how to implement the law. This landmark law secures new privacy rights for California consumers, including:

    * The right to know about the personal information a business collects about them and how it is used and shared;
    * The right to delete personal information collected from them (with some exceptions);
    * The right to opt-out of the sale of their personal information; and
    * The right to non-discrimination for exercising their CCPA rights.

    Businesses are required to give consumers certain notices explaining their privacy practices. The CCPA applies to many businesses, including data brokers.

    ###Data Source

    === "Swift<center><sub>iOS</sub></center>"

        ```swift
        UsercentricsCore.isReady { status in
            
            let data = UsercentricsCore.shared.getCMPData()
            let settings = data.settings
            let services = data.services
            let categories = data.categories

        } onFailure: { error in
            // Handle non-localized error
        }
        ``` 

    === "Kotlin<center><sub>Android</sub></center>"

        ```kotlin
        Usercentrics.isReady({
            
            val data = Usercentrics.instance.getCMPData()
            val settings = data.settings
            val services = data.services
            val categories = data.categories
            
        }, { error ->
            // Handle non-localized error
        })
        ```


    === "Dart<center><sub>Flutter</sub></center>"
    
        ```dart
        try {
          final data = await Usercentrics.cmpData;
          final settings = data.settings;
          final services = data.services;
          final categories = data.categories;
    
        } catch (error) {
            // Handle non-localized error
        }
        ```

    === "Typescript<center><sub>React Native</sub></center>"
    
        ```typescript
        try {
          const data = await Usercentrics.getCMPData();
          const settings = data.settings;
          const services = data.services;
          const categories = data.categories;
        } catch (error) {
            // Handle non-localized error
        }
        ```

    !!! tip "Matching Categories and Services"
        You may match services to categories with `category.slug` == `service.categorySlug`.

    ###Content Mapping

    | First Layer    | SDK Property      |
    |:-------------------------| : -------------------------|
    | 1. Title    | ccpa.firstLayerTitle    |
    | 2. Description    | ccpa.appFirstLayerDescription    |
    | 3. Short Description    | ccpa.firstLayerMobileDescription     |
    | 4. Read More    | settings.labels.btnBannerReadMore  |
    | 5. Do not sell my info label   | ccpa.optOutNoticeLabel    |
    | 6. Save Button Title  | ccpa.btnSave   |

    | Banner Elements     | SDK Property      |
    |:-------------------------| : -------------------------|
    | 7. Privacy Policy Text   | settings.labels.privacyPolicyLinkText    |
    | 8. Privacy Policy URL    | settings.privacyPolicyUrl    |
    | 9. Imprint Text    | settings.labels.imprintLinkText    |
    | 10. Imprint URL    | settings.imprintUrl    |
    | 11. Language Selected       | settings.language    |
    | 12. Languages Available       | settings.languagesAvailable    |
    | 13. Categories Tab        | settings.secondLayer.tabsCategoriesLabel    |
    | 14. Services Tab     | settings.secondLayer.tabsServicesLabel   |

    | Category Component    | SDK Property      |
         |:-------------------------| : -------------------------|
    | 16. Category Name      | category.label       |
    | 17. Category Description      | category.description       |
    
    | Services Component    | SDK Property    |
         |:-------------------------| : -------------------------|
    |  18. Service Name      | service.dataProcessor       |
    |  19. Service Description Title      | settings.labels.descriptionOfService       |
    |  20. Service Description      | service.descriptionOfService       |
    |  21. Processing Company Title      | settings.labels.processingCompanyTitle       |
    |  22. Processing Company      | service.nameOfProcessingCompany + service.addressOfProcessingCompany       |
    |  23. Data Purposes Title      | settings.labels.dataPurposes       |
    |  24. Data Purposes Description      | settings.labels.dataPurposesInfo       |
    |  25. Data Purposes       | service.dataPurposesList       |
    |  26. Technologies Used Title      | settings.labels.technologiesUsed    |
    |  27. Technologies Used Description      | settings.labels.technologiesUsedInfo       |
    |  28. Technologies Used      | service.technologyUsed       |
    |  29. Data Collected Title      | settings.labels.dataCollectedList       |
    |  30. Data Collected Description      | settings.labels.dataCollectedListInfo       |
    |  31. Data Collected      | service.dataCollectedList       |
    |  32. Legal Bases Title      | settings.labels.legalBasisList       |
    |  33. Legal Bases Description      | settings.labels.legalBasisInfo       |
    |  34. Legal Bases      | service.legalBasisList       |
    |  35. Processing Location Title      | settings.labels.locationOfProcessing       |
    |  36. Processing Location      | service.locationOfProcessing       |
    |  37. Retention Period Title      | settings.labels.retentionPeriod       |
    |  38. Retention Period      | service.retentionPeriodDescription       |
    |  39. Third Country Distribution Title      | settings.labels.transferToThirdCountries       |
    |  40. Third Country Distribution      | service.thirdCountryTransfer       |
    |  41. Is Essential      | service.isEssential       |
    |  42. Data Recipients Title      | settings.labels.dataRecipientsList       |
    |  43. Data Recipients      | service.dataRecipientsList   |
    |  44. Privacy Policy Title      | settings.labels.policyOf       |
    |  45. Privacy Policy      | service.privacyPolicyURL       |
    |  46. Cookie Policy Title      | settings.labels.cookiePolicyInfo       |
    |  47. Cookie Policy       | service.cookiePolicyURL       |
    |  48. Opt Out Link Title      | settings.labels.optOut       |
    |  49. Opt Out Link      | service.optOutUrl       |
    |  50. History Title      | settings.labels.history       |
    |  51. History      | service.consent.history       |
    |  52. History Consent Given      | settings.labels.yes       |
    |  53. History Consent Not Given      | settings.labels.no      |
    |  54. History Explicit Consent      | settings.labels.explicit      |
    |  55. History Implicit Consent      | settings.labels.implicit      |

    ###Action Delegates

    CCPA is a global opted out framework. This means:

    * Consent is a boolean, no granular consent of services.
    * The consent is given by default and the user has to explicitly opt-out.

    To collect consent for CCPA, we offer one simplified method:

    **Save**
    
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
        val ccpaConsents = Usercentrics.saveOptOutForCCPA(isOptedOut: <Bool>, consentType: <UsercentricsConsentType>)
        ```

    === "Typescript<center><sub>React Native</sub></center>"
    
        ```typescript
        val ccpaConsents = Usercentrics.saveOptOutForCCPA(<boolean>, <UsercentricsConsentType>)
        ```

    !!! tip "Consent Type"
        The consent type should be based on if a customer made an **explicit** action to provide consent, or not. **Implicit** can be used if the user ignores or skips the CMP.

    ###Interaction Analytics
    To gather events in the Usercentrics analytics dashboard the following API is provided to track the available events:
    
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
        Usercentrics.track(event: <UsercentricsAnalyticsEventType>);
        ```

    === "Typescript<center><sub>React Native</sub></center>"

        ```typescript
        Usercentrics.track(<UsercentricsAnalyticsEventType>);
        ```

    **Events**

    | [iOS] Event           | [Android] Event          | Notes |
    | --------------------- | ------------------------ | ----- |
    | .cmpShown             | .CMP_SHOWN               | The banner was displayed to the user. It doesn't matter which layer. |
    | .acceptAllFirstLayer  | .ACCEPT_ALL_FIRST_LAYER  | The Accept All button was pressed from the first layer. |
    | .denyAllFirstLayer    | .DENY_ALL_FIRST_LAYER    | The Deny All button was pressed from the first layer. |
    | .saveFirstLayer       | .SAVE_FIRST_LAYER        | The Save button was pressed from the first layer. Save is mainly used for granular decisions. |
    | .acceptAllSecondLayer | .ACCEPT_ALL_SECOND_LAYER | The Accept All button was pressed from the second layer. |
    | .denyAllSecondLayer   | .DENY_ALL_SECOND_LAYER   | The Deny All button was pressed from the second layer. |
    | .saveSecondLayer      | .SAVE_SECOND_LAYER       | The Save button was pressed from the second layer. Save is mainly used for granular decisions. |
    | .imprintLink          | .IMPRINT_LINK            | The Imprint link/button was pressed. |
    | .moreInformationLink  | .MORE_INFORMATION_LINK   | The More Information link/button was pressed. This button is usually used to navigate from first layer to second layer. |
    | .privacyPolicyLink    | .PRIVACY_POLICY_LINK     | The Privacy policy link/button was pressed. |
    | .ccpaTogglesOn        | .CCPA_TOGGLES_ON         | The CCPA toggle has been set to ON. |
    | .ccpaTogglesOff       | .CCPA_TOGGLES_OFF        | The CCPA toggle has been set to OFF. |

=== "LGPD"

    ##Brazil’s Lei Geral de Proteção de Dados (LGPD)

    LGPD applies to any business or organization that processes the personal data of people in Brazil, regardless of where that business or organization itself might be located. So, if your company has any customers or clients in Brazil, you should begin preparing for LGPD compliance. 

    If you are already GDPR compliant, then you have already done the bulk of the work necessary to comply with LGPD. It is only necessary that you set the appropaite Legal Basis for all your services.

    ###Data Source

    === "Swift<center><sub>iOS</sub></center>"

        ```swift
        UsercentricsCore.isReady { status in
            
            let data = UsercentricsCore.shared.getCMPData()
            let settings = data.settings
            let services = data.services
            let categories = data.categories

        } onFailure: { error in
            // Handle non-localized error
        }
        ``` 

    === "Kotlin<center><sub>Android</sub></center>"

        ```kotlin
        Usercentrics.isReady({
            
            val data = Usercentrics.instance.getCMPData()
            val settings = data.settings
            val services = data.services
            val categories = data.categories
            
        }, { error ->
            // Handle non-localized error
        })
        ```


    === "Dart<center><sub>Flutter</sub></center>"
    
        ```dart
        try {
          final data = await Usercentrics.cmpData;
          final settings = data.settings;
          final services = data.services;
          final categories = data.categories;
    
        } catch (error) {
            // Handle non-localized error
        }
        ```

    === "Typescript<center><sub>React Native</sub></center>"
    
        ```typescript
        try {
          const data = await Usercentrics.getCMPData();
          const settings = data.settings;
          const services = data.services;
          const categories = data.categories;
        } catch (error) {
            // Handle non-localized error
        }
        ```
    

    !!! tip "Matching Categories and Services"
        You may match services to categories with `category.slug` == `service.categorySlug`.

    ###Content Mapping

    | First Layer    | SDK Property      |
    |:-------------------------| : -------------------------|
    | 1. Title   | settings.labels.firstLayerTitle    |
    | 2. Description    | settings.firstLayerDescriptionHtml (raw input) or settings.firstLayerDescription    |
    | 3. Short Description    | settings.firstLayerMobileDescriptionHtml (raw input) or settings.firstLayerMobileDescription    |
    | 4. Read More    | settings.labels.btnBannerReadMore  |
    | 5. Accept Button Title    | settings.labels.btnAcceptAll    |
    | 6. Deny Button Title    | settings.labels.btnDeny     |
    | 7. More Button Title    | settings.labels.btnMore     |

    | Second Layer    | SDK Property      |
    |:-------------------------| : -------------------------|
    | 8. Title  | settings.labels.secondLayerTitle    |
    | 9. Description   | settings.labels.secondLayerDescriptionHtml (raw input) or settings.labels.secondLayerDescription    |
    | 10. Accept Button Title  | settings.secondLayer.acceptButtonText    |
    | 11. Deny Button Title    | settings.secondLayer.denyButtonText     |

    | Banner Elements     | SDK Property      |
    |:-------------------------| : -------------------------|
    | 12. Privacy Policy Text   | settings.labels.privacyPolicyLinkText    |
    | 13. Privacy Policy URL    | settings.privacyPolicyUrl    |
    | 14. Imprint Text    | settings.labels.imprintLinkText    |
    | 15. Imprint URL    | settings.imprintUrl    |
    | 16. Language Selected       | settings.language    |
    | 17. Languages Available       | settings.languagesAvailable    |
    | 18. Categories Tab        | settings.secondLayer.tabsCategoriesLabel    |
    | 19. Services Tab     | settings.secondLayer.tabsServicesLabel   |
    | 20. Save Button Title      | settings.labels.btnSave       |

    | Category Component    | SDK Property      |
    |:-------------------------| : -------------------------|
    | 21. Category Name      | category.label       |
    | 22. Category Description      | category.description       |
    
    | Services Component    | SDK Property    |
    |:-------------------------| : -------------------------|
    |  23. Service Name      | service.dataProcessor       |
    |  24. Service Description Title      | settings.labels.descriptionOfService       |
    |  25. Service Description      | service.descriptionOfService       |
    |  26. Processing Company Title      | settings.labels.processingCompanyTitle       |
    |  27. Processing Company      | service.nameOfProcessingCompany + service.addressOfProcessingCompany       |
    |  28. Data Purposes Title      | settings.labels.dataPurposes       |
    |  29. Data Purposes Description      | settings.labels.dataPurposesInfo       |
    |  30. Data Purposes       | service.dataPurposesList       |
    |  31. Technologies Used Title      | settings.labels.technologiesUsed    |
    |  32. Technologies Used Description      | settings.labels.technologiesUsedInfo       |
    |  33. Technologies Used      | service.technologyUsed       |
    |  34. Data Collected Title      | settings.labels.dataCollectedList       |
    |  35. Data Collected Description      | settings.labels.dataCollectedListInfo       |
    |  36. Data Collected      | service.dataCollectedList       |
    |  37. Legal Bases Title      | settings.labels.legalBasisList       |
    |  38. Legal Bases Description      | settings.labels.legalBasisInfo       |
    |  39. Legal Bases      | service.legalBasisList       |
    |  40. Processing Location Title      | settings.labels.locationOfProcessing       |
    |  41. Processing Location      | service.locationOfProcessing       |
    |  42. Retention Period Title      | settings.labels.retentionPeriod       |
    |  43. Retention Period      | service.retentionPeriodDescription       |
    |  44. Third Country Distribution Title      | settings.labels.transferToThirdCountries       |
    |  45. Third Country Distribution      | service.thirdCountryTransfer       |
    |  46. Is Essential      | service.isEssential       |
    |  47. Data Recipients Title      | settings.labels.dataRecipientsList       |
    |  48. Data Recipients      | service.dataRecipientsList   |
    |  49. Privacy Policy Title      | settings.labels.policyOf       |
    |  50. Privacy Policy      | service.privacyPolicyURL       |
    |  51. Cookie Policy Title      | settings.labels.cookiePolicyInfo       |
    |  52. Cookie Policy       | service.cookiePolicyURL       |
    |  53. Opt Out Link Title      | settings.labels.optOut       |
    |  54. Opt Out Link      | service.optOutUrl       |
    |  55. History Title      | settings.labels.history       |
    |  56. History      | service.consent.history       |
    |  57. History Consent Given      | settings.labels.yes       |
    |  58. History Consent Not Given      | settings.labels.no      |
    |  59. History Explicit Consent      | settings.labels.explicit      |
    |  60. History Implicit Consent      | settings.labels.implicit      |

    ###Action Delegates

    In order to collect consent, we have provided the following 3 functions: 

    **Accept All**

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
        final consents = Usercentrics.acceptAll(consentType: <UsercentricsConsentType>);
        ```

    === "Typescript<center><sub>React Native</sub></center>"

        ```typescript
        const consents = Usercentrics.acceptAll(<UsercentricsConsentType>);
        ```

    **Deny All**

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
        final consents = Usercentrics.denyAll(consentType: <UsercentricsConsentType>);
        ```

    === "Typescript<center><sub>React Native</sub></center>"

        ```typescript
        const consents = Usercentrics.denyAll(<UsercentricsConsentType>);
        ```

    **Save**

    For granular selection, you may pass specific sets of consent with an array of decisions:

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
        final consents = Usercentrics.saveDecisions(decisions: List<UserDecision>, consentType: <UsercentricsConsentType>);
        ```

    === "Typescript<center><sub>React Native</sub></center>"

        ```typescript
        const consents = Usercentrics.saveDecisions([<UserDecision], <UsercentricsConsentType>);
        ```

    !!! tip "Consent Type"
        The consent type should be based on if a customer made an **explicit** action to provide consent, or not. **Implicit** can be used if the user ignores or skips the CMP. We highly recommend you only use implicit together with the `denyAll()` method, which will accept only essential services.
            
    ### Interaction Analytics
    To gather events in the Usercentrics analytics dashboard the following API is provided to track the available events:
    
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
        Usercentrics.track(event: <UsercentricsAnalyticsEventType>);
        ```

    === "Typescript<center><sub>React Native</sub></center>"

        ```typescript
        Usercentrics.track(<UsercentricsAnalyticsEventType>);
        ```


    **Events**

    | [iOS] Event           | [Android] Event          | Notes |
    | --------------------- | ------------------------ | ----- |
    | .cmpShown             | .CMP_SHOWN               | The banner was displayed to the user. It doesn't matter which layer. |
    | .acceptAllFirstLayer  | .ACCEPT_ALL_FIRST_LAYER  | The Accept All button was pressed from the first layer. |
    | .denyAllFirstLayer    | .DENY_ALL_FIRST_LAYER    | The Deny All button was pressed from the first layer. |
    | .saveFirstLayer       | .SAVE_FIRST_LAYER        | The Save button was pressed from the first layer. Save is mainly used for granular decisions. |
    | .acceptAllSecondLayer | .ACCEPT_ALL_SECOND_LAYER | The Accept All button was pressed from the second layer. |
    | .denyAllSecondLayer   | .DENY_ALL_SECOND_LAYER   | The Deny All button was pressed from the second layer. |
    | .saveSecondLayer      | .SAVE_SECOND_LAYER       | The Save button was pressed from the second layer. Save is mainly used for granular decisions. |
    | .imprintLink          | .IMPRINT_LINK            | The Imprint link/button was pressed. |
    | .moreInformationLink  | .MORE_INFORMATION_LINK   | The More Information link/button was pressed. This button is usually used to navigate from first layer to second layer. |
    | .privacyPolicyLink    | .PRIVACY_POLICY_LINK     | The Privacy policy link/button was pressed. |


!!! tip "Continue to Apply Consent"
    Now, it is fundamental that the user's privacy choices are applied to the 3rd party SDKs on you App. 
    Please continue to [Apply Consent](../integration/apply-consent.md).
