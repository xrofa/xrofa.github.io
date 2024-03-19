# Service Integration

Here a few important notes on what you need to consider when integrating vendors / services under TCF 2.2.

## IAB Vendors
The Usercentrics CMP exposes the IAB TCF 2.2 API which offers a standardised way for publishers and vendors to fetch the users consent information. IAB certified vendors are able to work with the TCF 2.2 API, which means in most cases no further modification or adjustments to vendor scripts are needed. 

This means vendors can request the consent state when the CMP is loaded using the __tcfapi function with the command getTCData. 

```typescript title="Sample"
__tcfapi('getTCData', 2, (tcData, success) => {
    console.log(tcData)
});
```

In order to react on changes of the consent state vendors can make use of the event listener provided by the API using the __tcfapi function with the command addEventListener.

```typescript title="Sample"
__tcfapi('addEventListener', 2, function(tcData,success){
    // inital tc string information
    if(success && tcData.eventStatus === 'tcloaded') {
        console.log(' TCF tcLoaded Event - tcString: '+tcData.tcString);        
    }
    // tc string after user interaction completed
    else if(success && tcData.eventStatus === 'useractioncomplete') {
        console.log('TCF useractioncomplete Event - tcString: '+tcData.tcString);
    }
    else {
        // do something else
    }
});
```

More details about the TCF 2.2 CMP API and its commands can be found [here](https://github.com/InteractiveAdvertisingBureau/GDPR-Transparency-and-Consent-Framework/blob/master/TCFv2/IAB%20Tech%20Lab%20-%20CMP%20API%20v2.md#cmp-api-v20).


## Non-IAB Vendors
Non-IAB vendors do not follow the framework’s concepts and therefore do not use the TCF API or tcString. For those, there is nothing TCF 2.2 specific to be considered. Use our [Direct Integration Guide](https://usercentrics.com/knowledge-hub/direct-integration-usercentrics-script-website/) to handle non-IAB vendors.


## Tag Management Systems
If you are using a tag manager for vendor script integration, you should consider the following information.

IAB registered vendors have to be loaded in order to request the tcString from our CMP and understand the information. Therefore, no tag manager triggers should be configured around those vendor tags.

Non-IAB vendors need to be handled manually. The CMP version 2 uses an event “consent_status” which should be used in your tag manager to trigger the services. 
Here's an example configuration for the [Google Tag Manager](../google-tag-manager/configuration.md)