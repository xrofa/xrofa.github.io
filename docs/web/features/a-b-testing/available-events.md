!!! note ""
    This section is most likely only relevant for setting up your A/B test with an external tool. No additional events need to be defined when using our predefined UI in combination with the internal A/B testing feature.

As previously described, the UC_UI_CMP_EVENT was created to be triggered by the most important actions through the Consent Management Platform, enabling you to listen to user interactions and compare the different variants.

Within this new Custom Event, you can add an object that will specify one event type that you need to test. You can do this by using one of these:
 
``` json
{ type: event_type,
  source: ‘FIRST_LAYER’ | ‘SECOND_LAYER' | 'PRIVACY_BUTTON … }
```

Where the `event_type` can be:

| Event Name              | Description                                                     |
| ----------------------- | --------------------------------------------------------------- |
| `CMP_SHOWN`             | Event triggered when the CMP is shown                           |
| `ACCEPT_ALL`            | Event triggered by clicking the Accept All button               |
| `DENY_ALL`              | Event triggered by clicking the Deny All button                 |
| `SAVE`                  | Event triggered by clicking the Save button                     |
| `MORE_INFORMATION_LINK` | Event triggered by clicking the More Information button or link |
| `IMPRINT_LINK`          | Event triggered by clicking the Imprint link                    |
| `PRIVACY_POLICY_LINK`   | Event triggered by clicking the Privacy Policy link             |
| `CCPA_TOGGLES_ON`       | Event triggered by turning on the CCPA toggle                   |
| `CCPA_TOGGLES_OFF`      | Event triggered by turning off the CCPA toggle                  |

We’ve created a code example to make these custom events easy to understand and access.

``` javascript
window.addEventListener('UC_UI_CMP_EVENT', (data) => {
      console.log(`TEST: source => ${data.detail.source} && type => ${data.detail.type}`) 
});
```

For kameleoon, the Custom event would follow this approach where we listen to the event “a user clicked on the Accept All button” and then forward information to the AB Testing Tool Kameleoon (here called a goal, may differ between tools).

``` javascript
//Example for Kameleoon
window.addEventListener('UC_UI_CMP_EVENT', (data) => {
      console.log(`TEST: source => ${data.detail.source} && type => ${data.detail.type} && Variant => ${data.detail.abTestVariant}`) 
      if (data.detail.type === "ACCEPT_ALL") Kameleoon.API.Goals.processConversion(goalID)
});
```

In case you want to test the different user interactions only for a specific layer, you can achieve this by adding an additional condition in the code. Please add `&& data.detail.source == 'FIRST_LAYER'` after your event type for the first layer or `&& data.detail.source == 'SECOND_LAYER'` for interactions on the second layer.

``` javascript
//Example for Kameleoon
window.addEventListener(‘UC_UI_CMP_EVENT’, (data) => {
      console.log(`TEST: source => ${data.detail.source} && type => ${data.detail.type} && Variant => ${data.detail.abTestVariant}`)
      if (data.detail.type === “ACCEPT_ALL” && data.detail.source == ‘FIRST_LAYER’) Kameleoon.API.Goals.processConversion(goalID)
});
```