Implementing Consent Mode with the Usercentrics CMP solution as an alternative to prior blocking requires the following:

## Step 1: Adjust the existing Google Tag Manager code

Your current Google Tag Manager code may currently look like this:

``` html
<script type="text/plain" data-usercentrics="Google Tag Manager">
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,’script','dataLayer','GTM-XXXXXX');</script>

```

This needs to be changed to the following:

!!! note ""
    Please make sure to put these scripts at the very top of the head tag and on the same order as below.

!!! warning ""
    To adjust the default measurement capabilities, set the default values for the command to run on every page of your site before any commands that send measurement data (such as config or event). For more information please check [Adjust Tag Behavior](https://developers.google.com/tag-platform/devguides/consent#adjust_tag_behavior)

``` html
    <script type="text/javascript">
        // create dataLayer
        window.dataLayer = window.dataLayer || [];
        function gtag() {
            dataLayer.push(arguments);
        }

        // set "denied" as default for both ad and analytics storage, as well as ad_user_data and ad_personalization,
        gtag("consent", "default", {
            ad_personalization: "denied",
            ad_storage: "denied",
            ad_user_data: "denied",
            analytics_storage: "denied",
            wait_for_update: 2000 // milliseconds to wait for update
        });

        // Enable ads data redaction by default [optional]
        gtag("set", "ads_data_redaction", true);
    </script>

    <script type="text/javascript">
        // Google Tag Manager
        (function(w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js'
            });
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src =
                'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-XXXXX'); //replace GTM-XXXXXX with Google Tag Manager ID
    </script>
```

??? help "Explanation"

    * The first part of the script initializes a plain data layer and provides the gtag function before the gtm.js/gtag.js is loaded
      
    ``` html
    <script type="text/javascript">
        // create dataLayer
        window.dataLayer = window.dataLayer || [];
        function gtag() {
            dataLayer.push(arguments);
        }
    ```
    
    * In the middle part of the code the default values for the Consent Mode keys ad_storage, ad_user_data, ad_personalization and analytics_storage are defined. Additionally we set ads_data_redaction to true which means, that ad-click identifiers (e.g., GCLID / DCLID) in consent and conversion pings are redacted and network requests will also be sent through a cookieless domain. This is only in effect, when ad_storage is set to 'denied', if ad_storage is 'granted', ads_data_redaction has no effect. Setting ads_data_redaction to true is optional. More details on behaviour can be found [here](https://support.google.com/analytics/answer/9976101?hl=en).
    
    ``` javascript
      // set "denied" as default for both ad and analytics storage as well as ad_user_data and ad_personalization, 
      gtag("consent", "default", {
          ad_personalization: "denied",
          ad_storage: "denied",
          ad_user_data: "denied",
          analytics_storage: "denied",
          wait_for_update: 2000 // milliseconds to wait for update
      });

        // Enable ads data redaction by default [optional]
        gtag("set", "ads_data_redaction", true);
        
        </script>    
    ```

    * The last part is the Google Tag Manager script. If you want to use Consent Mode as alternative to prior blocking, the type of the script tag is "text/javascript". If you use the [Smart Data Protector](/pages/features/smart-data-protector) you may have to exclude Google Tag Manager, Google Analytics and/or Google Ads Remarkting from being automatically blocked by the SDP.
    
    ``` html
    <script type="text/javascript">
        // Google Tag Manager
        (function(w, d, s, l, i) { 
            w[l] = w[l] || [];
            w[l].push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js'
            });
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src =
                'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-XXXXX'); //replace GTM-XXXXXX with Google Tag Manager ID
    </script>
    ```

***

## Step 2 (optional): Use the Usercentrics CMP events to signal the consent status via the Consent Mode API for Custom Data Processing Services

!!! warning ""
    In case you use custom data processing services, follow the steps below. Otherwise, please jump to step 3.

In order to trigger the Consent Mode API for custom Data Processing Services, you need to first add a window event. On the [Admin Interface](https://admin.usercentrics.eu/) under **Implementation -> Web** please click on **Add new Data Layer** and select **Window Event**. Then expand the **Window Event** card and on the **Window Event Name** field, please insert the name of the event. It can be anything, but just make sure to use the same event name on the script below. Then click on the **+** button and click **Save**.

Assuming you already have a window event in your Usercentrics CMP, add the following script to call the Consent Mode API in order to update the consent mode keys based on the consent status.
In this example we use the event name 'ucEvent' and the 2 custom data processing services 'Google Ads Remarketing' and 'Google Analytics'.
(If you have chosen to use different names for the data processing services use your customized ones instead.)

``` html
<script type="text/javascript">
// Please replace 'ucEvent' with the event you have just created
window.addEventListener("ucEvent", function (e) {
    if( e.detail && e.detail.event == "consent_status") {
        // Please replace the analytics service name here with the customized service    
        var ucAnalyticsService = 'Google Analytics';
        // Please replace the ad service name here with the customized service
        var ucAdService = 'Google Ads Remarketing';

        if(e.detail.hasOwnProperty(ucAnalyticsService) && e.detail.hasOwnProperty(ucAdService))
        {
            gtag("consent", "update", {
                ad_personalization: e.detail[ucAdService] ? 'granted':'denied',
                ad_storage: e.detail[ucAdService] ? 'granted':'denied',
                ad_user_data: e.detail[ucAdService] ? 'granted':'denied',
                analytics_storage: e.detail[ucAnalyticsService] ? 'granted':'denied'
            });
        }
        else {            
            if(e.detail.hasOwnProperty(ucAdService)) {
                gtag("consent", "update", {
                    ad_personalization: e.detail[ucAdService] ? 'granted':'denied'
                    ad_storage: e.detail[ucAdService] ? 'granted':'denied',
                    ad_user_data: e.detail[ucAdService] ? 'granted':'denied',
                });
            }            
            if(e.detail.hasOwnProperty(ucAnalyticsService)) {
              gtag("consent", "update", {
                    analytics_storage: e.detail[ucAnalyticsService] ? 'granted':'denied'
                });
            }
        }
    }
});
</script>
```

??? help "Explanation"
    * The event is fired on each page load and every time the user actively changes his consent decision.
    * Based on the status for both services the Consent Mode API is called to signal the granted or denied state.

***

## Step 3: Enable Google Consent Mode on the Usercentrics Admin Interface

!!! warning ""
    For new customers, Google Consent Mode is enabled by default.

Assuming you've completed the steps above, it's now time to enable the feature.

Go to **Usercentrics Admin Interface -> Configuration -> CMP Settings**, enable Google Consent Mode and click Save.

!!! danger "Important"
    Make sure that you only use one of the ways to signal the consent status, meaning either the predefined Data Processing Service templates mentioned [here](./general-information.md) or manually linking (custom) Data Processing Service templates to consent mode categories [see step 2](#step-2-optional-use-the-usercentrics-cmp-events-to-signal-the-consent-status-via-the-consent-mode-api-for-custom-data-processing-services). In case you use Google services as Custom Data Processing Services (DPSs), then we recommend disabling Google Consent Mode option via the Usercentrics Admin Interface and follow the instructions shared in [step 2](#step-2-optional-use-the-usercentrics-cmp-events-to-signal-the-consent-status-via-the-consent-mode-api-for-custom-data-processing-services) instead.