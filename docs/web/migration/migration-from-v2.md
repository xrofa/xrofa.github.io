<style>
.md-footer__inner:not([hidden]) {
    display: none
}
</style>

# Migrate to V3

## Introduction

**V3** introduces breaking changes that will require manual updates if you have an existing codebase with a custom V2 implementation. 

This guide covers what you should be changing in order to be able to use the **V3** version.

For each step, this guide is designed to:

* help you understand the differences between V2 and **V3**
* help you resolve any breaking changes
* provide you, whenever possible, with code examples and starting points in order to migrate to V3.

!!! info
    For a broader understanding of **V3**, please read the following [document](../v3.md).

## Getting started
### Script Tag

Let's start the migration by updating the Usercentrics `<script>` tag on your website.

The main difference will be the `src` URL. In order to start using V3, please update the `src` to: `"https://web.cmp.usercentrics.eu/ui/loader.js`.

!!! info "bundle and bundle-legacy users"
    Only `loader.js` is available on V3

For highest possible performance we also offer the "plus" setup. However, we do not recommend this setup if you can't 
guarantee to update the script source regularly.

=== "V2 GDPR"

    ``` html
    <script
      id="usercentrics-cmp"
      data-settings-id="XXXXXXXX"
      src="https://app.usercentrics.eu/browser-ui/latest/loader.js" 
      async>
    </script>
    ```

=== "V2 TCF"

    ``` html
    <script
      id="usercentrics-cmp"
      data-settings-id="XXXXXXXX"
      src="https://app.usercentrics.eu/browser-ui/latest/loader.js"
      data-tcf-enabled
    >
    </script>
    ```

=== "V3 GDPR"

    ``` html
    <script
      id="usercentrics-cmp"
      data-settings-id="XXXXXXXX"
      src="https://web.cmp.usercentrics.eu/ui/loader.js" 
      async
    >
    </script>
    ```

=== "V3 TCF"

    ``` html
    <script src="https://web.cmp.usercentrics.eu/tcf.stub.js">
    <script
      id="usercentrics-cmp"
      data-settings-id="XXXXXXXX"
      src="https://web.cmp.usercentrics.eu/ui/loader.js" 
      async
    >
    </script>
    ```

=== "V3 GDPR+"
    !!! warning "Requires manual version updating"
        If you can't guarantee to update the CMP UI version manually on a frequent basis (< 8 weeks)
        please use the loader.js implementation instead.
    ``` html
    <link rel="preload" href="https://web.cmp.usercentrics.eu/ui/v/${LATEST_UC_UI_VERSION}/cmp.gdpr.js" as="script">
    <script
      id="usercentrics-cmp"
      data-settings-id="XXXXXXXX"
      src="https://web.cmp.usercentrics.eu/ui/v/${LATEST_UC_UI_VERSION}/cmp.gdpr.js" 
      async
    >
    </script>
    ```

=== "V3 TCF+"
    !!! warning "Requires manual version updating"
        If you can't guarantee to update the CMP UI version manually on a frequent basis (< 8 weeks)
        please use the loader.js implementation instead.
    ``` html
    <link rel="preload" href="https://web.cmp.usercentrics.eu/tcf/stub.js" as="script">
    <link rel="preload" href="https://web.cmp.usercentrics.eu/ui/v/${LATEST_UC_UI_VERSION}/cmp.tcf.js" as="script">

    <script src="https://web.cmp.usercentrics.eu/tcf.stub.js">
    <script
      id="usercentrics-cmp"
      data-settings-id="XXXXXXXX"
      src="https://web.cmp.usercentrics.eu/ui/v/${LATEST_UC_UI_VERSION}/cmp.tcf.js" 
      async
    >
    </script>
    ```


## Browser UI API

!!! note ""
    We recommend taking a look at our [new Browser UI API](../features/api/control-ui.md) after you resolve the breaking changes

### Renamed methods

With the introduction of V3, the following Browser UI API methods were renamed:

| Old name                                                                          | New name                                                               |
| --------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [enableScriptsForServicesWithConsent](https://docs.usercentrics.com/#/cmp-v2-ui-api?id=enablescriptsforserviceswithconsent) | `refreshScripts`             |


### Renamed methods with functional changes

The following methods, besides being renamed also got functional changes

| Old name                                                                          | New name                                                               |
| --------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [acceptServices](https://docs.usercentrics.com/#/cmp-v2-ui-api?id=acceptservices) | `updateServicesConsents` {: rowspan=2 style="vertical-align: middle;"} |
| [rejectServices](https://docs.usercentrics.com/#/cmp-v2-ui-api?id=rejectservices) | &#8288 {: style="padding:0"}                                           |
| [updateChoicesForTcf](https://docs.usercentrics.com/#/cmp-v2-ui-api?id=updatechoicesfortcf) | `updateTcfConsents` |

#### updateServicesConsents

In order to simplify the services consent updates, the `acceptServices` and `rejectServices` have been unified into one method `updateServicesConsents` which now accepts the following parameters:


| Input            | Input Type        | Return Type     |
| ---------------- | ----------------- | --------------- |
| servicesConsents | ServicesConsents  | `Promise<void>` |

```typescript
const serviceConsents = [
    {id: 'HkocEodjb7', consent: true}, // Google Analytics
    {id: 'S1_9Vsuj-Q', consent: false}, // Google Ads
]

await __ucCmp.updateServicesConsents(serviceConsents);
await __ucCmp.saveConsents();
```

#### updateTcfConsents


| Input     | Input Type   | Return Type     |
| --------- | ------------ | --------------- |
| decisions | TCFDecisions | `Promise<void>` |


``` typescript
const vendorConsents = [
    {id: 6, consent: true}, // AdSpirit GmbH
    {id: 11, legitimateInterestConsent: false}, // Quantcast
];

const decision = {
    vendors: vendorConsents
};

await updateTcfVendorConsents({ decision });

```
### Methods functional changes

All new **V3** methods are now async.
Apart from that, `denyAllConsents`, `acceptAllConsents`, `updateServicesConsents` and `updateTcfConsents` will only update the consent status. In order to save consents, you need to call `saveConsents('EXPLICIT' | 'IMPLICIT')` after updating consents.

### Removed methods

With the introduction of **V3**, the following Browser UI API methods were removed:

!!! failure "Removed methods"
#### [acceptService](https://docs.usercentrics.com/#/cmp-v2-ui-api?id=acceptservice)
#### [areAllConsentsAccepted](https://docs.usercentrics.com/#/cmp-v2-ui-api?id=areallconsentsaccepted)
#### [clearStorage](https://docs.usercentrics.com/#/cmp-v2-ui-api?id=clearstorage)
#### [denyAndCloseCcpa](https://docs.usercentrics.com/#/cmp-v2-ui-api?id=denyandcloseccpa)
#### [rejectService](https://docs.usercentrics.com/#/cmp-v2-ui-api?id=rejectservice)
#### [getServicesBaseInfo](https://docs.usercentrics.com/#/cmp-v2-ui-api?id=getservicesbaseinfo)
#### [getServicesFullInfo](https://docs.usercentrics.com/#/cmp-v2-ui-api?id=getservicesfullinfo)
#### [restartCMP](https://docs.usercentrics.com/#/cmp-v2-ui-api?id=restartcmp)
#### [restartEmbeddings](https://docs.usercentrics.com/#/cmp-v2-ui-api?id=restartembeddings)
#### [getSettings](https://docs.usercentrics.com/#/cmp-v2-ui-api?id=getsettings)
#### [getSettingsCore](https://docs.usercentrics.com/#/cmp-v2-ui-api?id=getsettingscore)
#### [getSettingsUI](https://docs.usercentrics.com/#/cmp-v2-ui-api?id=getsettingsui)
#### [getSettingsLabels](https://docs.usercentrics.com/#/cmp-v2-ui-api?id=getsettingslabels)
#### [getTCFVendors](https://docs.usercentrics.com/#/cmp-v2-ui-api?id=gettcfvendors)

[//]: # (## Events)

[//]: # ()
[//]: # (TODO: Add migration guide if needed for the V3 events.)

## Content Security Policy

For best security you should a `Content-Security-Policy` meta tag. It's important to replace the [nonce](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/nonce).

```html
<meta http-equiv="Content-Security-Policy" content="script-src 'self' https://*.usercentrics.eu 'nonce-SomeRandomString'; connect-src 'self' https://*.usercentrics.eu; img-src 'self' data: https://*.usercentrics.eu;">
<script nonce="SomeRandomString" src="https://web.cmp.usercentrics.eu/ui/loader.js" id="usercentrics-cmp" data-settings-id="YOUR_SETTINGS_ID"></script>
```

## Missing features (not implemented yet)

Whereas most of the features of v2 have been implemented, some are still on the todo list:

* Smart Data Protector compatibility
* Consent injection via `window` variable
* Custom domain names

## CustomCSS

Since the structure of the CMP changed, the custom css is not backwards compatible and needs updating.
*TODO: add css entry points*

[//]: # (Please read more about the [new custom css entry points]&#40;&#41; )

## Embeddings

Starting with **V3**, in order to simplify their usage - embeddings will be a reflection of the CMP itself, meaning that all the information present in the CMP will also be present in these.

!!! note "Setup options"
    For the `div` possible class names remain the same: `"uc-embed"` and `"uc-embed-tcf"` for GDPR and TCF, respectively.

!!! warning ""
    For more insights, please refer to the [Embeddings documentation](TODO:Add-embeddings-docs)

### Structure

Since embeddings are a reflection of the CMP in **V3**, the structure of these have been simplified. The [previous way](https://docs.usercentrics.com/#/v2-embeddings?id=outer-html-structure-without-uc-style) of configuring embeddings is no longer required because of this.

### Deprecated attributes

#### [uc-data](https://docs.usercentrics.com/#/v2-embeddings?id=embedding-data-processing-services)

As mentioned above, all the information present in the CMP will be displayed in the embeddings with no option to filter out specific information.

#### uc-styling

All embeddings will have the same styling as the CMP, so no further styling is required.

#### uc-consent-name

This attribute has been deprecated in favor of using the `uc-embed-type` value `service-specific` with the `uc-embed-service-id`.

!!! note ""
    Example on how to migrate from V2 to V3

=== "V2"

    ``` html
    <div 
      class="uc-embed"
      uc-consent-name="Youtube Video"
      uc-data="all">
    </div>
    ```

=== "V3"

    ``` html
    <div 
      class="uc-embed"
      uc-embed-type="service-specific"
      uc-embed-service-id="BJz7qNsdj-7">
    </div>
    ```

#### uc-embedding-vendors

Since we now reflect the same labels and styling as the CMP, this option is no longer available.

#### uc-embedding-non-iab-vendors

Since we now reflect the same labels and styling as the CMP, this option is no longer available.


### Renamed attributes

#### uc-embedding-type

Was renamed to `uc-embed-type`.

The values for `purpose` and `vendor` were renamed to `purposes` and `vendors`, respectively.

#### uc-show-toggle

Was renamed to `uc-embed-show-toggle`.

!!! warning ""
    Following the same phylosophy as `uc-styling` is no longer possible to change the toggle colors, they will keep the same color as selected for the CMP.
    
    In that case, `.uc-embed-toggle-button.toggle-on`, `.uc-embed-toggle-button.toggle-off`, `.uc-embed-toggle-button.toggle-disabled` are no longer supported. 

#### [uc-embedding-show-hidden-categories](https://docs.usercentrics.com/#/v2-embeddings?id=miscellaneous-other-options-to-configure-embeddings)

Was renamed to `uc-embed-show-all-categories`. All other functionality and properties remain the same.

#### uc-embedding-title

Was renamed to `uc-embed-title`.




