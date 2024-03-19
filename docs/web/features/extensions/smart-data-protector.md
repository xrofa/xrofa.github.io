<script type="text/javascript" src="https://privacy-proxy.usercentrics.eu/latest/uc-block.bundle.js"></script>

# Smart Data Protector

## Introduction

The Usercentrics Smart Data Protector is a service that blocks third-party technologies you added to your website and activates them only for customers that gave their consent to do so. This service is not limited to cookies and can prevent multiple types of resources from being loaded, thus preventing data to be sent to the third-party service.

For example, for a visual service like an embedded YouTube Video, the Smart Data Protector will not only prevent any data from being sent to the YouTube server but also provide your users with a preview image of the video, provided by our server. Similarly for a non-visual service like Google Analytics, it will block the scripts and prevent data from being sent to the servers of the service provider.

## Installation

!!! warning "Important"
    Add the following elements before all other script in your header. Do not set the asynchronous flag for the Smart Data Protector script, or else other scripts may load in parallel and are activated before the Smart Data Protector can block them.

**1:** If not done already, add the Usercentrics CMP script tag to the `<head>` section of your website.

=== "Settings-ID"
    ```html title="Add the Settings-ID Javascript tag"
    <script
        id="usercentrics-cmp"
        data-settings-id="YOUR_SETTINGS_ID"
        src="https://web.cmp.usercentrics.eu/ui/loader.js"
    >
    </script>
    ```
=== "Ruleset-ID"
    ```html title="Add the Ruleset-ID Javascript tag"
    <script
        id="usercentrics-cmp"
        data-ruleset-id="YOUR_RULESET_ID"
        src="https://web.cmp.usercentrics.eu/ui/loader.js"
    >
    </script>
    ```

**2:** Add the templates of used Data Processing Services (e.g. YouTube) to your Settings in the Admin Interface. This step is required for the Smart Data Protector to be able to unblock the technologies after the user consented.

**3:** Add the Smart Data Protector script in the `<head>` section as well.

```html title="Add the latest SDP Javascript tag"
<script 
    type="application/javascript"
    src="https://privacy-proxy.usercentrics.eu/latest/uc-block.bundle.js"
>
</script>
```


The script must load synchronously to block technologies before they are executed. Do not add attributes like `async`, `defer` or `type="module"`.

**4:** To improve performance, it is recommended to add the following statements at the top of your `<head>` section

```html title="Preload the latest SDP Javascript code"
<link 
    rel="preconnect" 
    href="//privacy-proxy.usercentrics.eu"
>
<link 
    rel="preload"
    href="//privacy-proxy.usercentrics.eu/latest/uc-block.bundle.js"
    as="script"
>
```

Finally, your `<head>` section should have a structure similar to this

```html title="Final head section structure"
<head>
    <title>Page title</title>
    <meta name="description" content="Description">
    <!-- [...] other meta tags -->

    <!-- BEGIN Usercentrics related code -->
    <link rel="preconnect" href="//privacy-proxy.usercentrics.eu">
    <link rel="preload" href="//privacy-proxy.usercentrics.eu/latest/uc-block.bundle.js" as="script">
    <script id="usercentrics-cmp" data-settings-id="XXXXXXX" src="https://web.cmp.usercentrics.eu/ui/loader.js" async></script>
    <script type="application/javascript" src="https://privacy-proxy.usercentrics.eu/latest/uc-block.bundle.js"></script>
    <script>
        // (optional) additional configs for the Smart Data Protector 
        uc.reloadOnOptIn('BJz7qNsdj-7'); // reload page on YouTube opt-in
    </script>
    <!-- END Usercentrics related code -->
    
    <!-- IMPORTANT: all other scripts are added **after** the Smart Data Protector -->
    <script type="application/javascript" src="//..."></script>
</head>
```

## Noscript protection

If a user visits your website with JavaScript disabled in the browser, the Usercentrics Smart Data Protector can not prevent that data is loaded from the iframe source (e.g. Youtube Video). To be GDPR compliant for this case, replace the `src` attribute in your iframe with `uc-src`.

**Example:** A Youtube Video iframe with adjusted attribute `<iframe uc-src="https://www.youtube.com/embed/XXX" />` will not be loaded even when JavaScript is disabled in the browser of the visitor.

## Known limitations

Due to how modern web browsers work, the Usercentrics Smart Data Protector currently has the following limitations:

- The Usercentrics technology is based on JavaScript. If your customers have JavaScript deactivated in their web browser and you have a `<noscript>` tag added to your website, transferring data to a third party can not be blocked. We suggest not using `<noscript>` tags at all.

- Although the execution of JavaScript code is blocked, the Smart Data Protector cannot prevent the download of the referenced JavaScript files. Because the IP address is sent during such a request, a third party company will still receive the IP address of your visitors.

- The previous statement also holds true for CSS code. The Smart Data Protector cannot prevent the download of CSS files. A complete blocking is only possible for iframes.

- References to third party servers inside CSS files using the `@import` statement can not be blocked.

- The support for entire JavaScript libraries is not possible, as this would block or unblock all services implemented via the respective library and prevent a granular choice by the users.

## Support for TCF 2.2

The Smart Data Protector (SDP) is a stand-alone product and works independently of the CMP version. When implemented on your website, the SDP will automatically block all supported technologies and replace them with a placeholder, regardless of whether the technology is part of the TCF 2.2 Global Vendor List or not. In order to respect the TCF 2.2 logic, the scripts of TCF 2.2 vendors should however not be blocked automatically. As a user, you must therefore ensure that the Smart Data Protector only blocks technologies / vendors that you do not wish to manage via TCF 2.2. We therefore do not recommend using the Smart Data Protector in combination with TCF 2.2.

## Support for custom service templates

The Smart Data Protector only recognizes the predefined service templates by default. Custom service templates can be supported by mapping the template ID of the custom template with the respective predefined template. Please add the following script under your Smart Data Protector script.

```html title="Service template mapping"
<script>
uc.setServiceAlias({'BJz7qNsdj-7': 'XXXXX'}) 
// XXXXX needs to be the templateId of custom Youtube service template
// ... you can also map more service IDs similarly
</script>
```
Please note that custom service templates must be mapped to the correct predefined service template in order for this feature to work correctly.

## Deactivate Smart Data Protector for specific services

The following scripts help to deactivate or activate Smart Data Protector for specific services.

!!! warning "Important"
    The Smart Data Protector will ignore deactivated Services completely. Whereas, when using `blockOnly` SDP will only block/unblock the mentioned services and ignore the rest.

    The methods `deactivateBlocking` and `blockOnly` should not be used together.

Deactivate specific Services:

```html title="Deactivating a specific service"
<script>
uc.deactivateBlocking([
  'BJz7qNsdj-7', // YouTube is not blocked
  'HkocEodjb7', // Google Analytics is not blocked
  // ... you can also add more service IDs similarly
]);
</script>
```

Only activate specific Services:

```html title="Ignore non-defined services"
<script>
uc.blockOnly([
  'BJz7qNsdj-7', // YouTube is blocked
  'HkocEodjb7', // Google Analytics is blocked
  // ... all other technologies will be ignored!
]);
</script>
```

Please note, this script is only relevant for pre-defined Data Processing Services. If you want to use a custom service, kindly use the service ID for the corresponding pre-defined service

## Display overlay for custom elements

For visually-supported services, the Smart Data Protector provides overlays with contextual opt-ins for iframe elements by default, in case consent is not given. For non-iframe or custom elements that have a visual component, an overlay can be displayed using the following script:

```html title="Custom overlay implementation"
<script>
uc.blockElements({
  'BJz7qNsdj-7': '#custom-container', // Show youtube overlay over the element with ID 'custom-container'
  'SJFe9NousWX': '.another-example' // Show Adition overlay over the element with class 'another-example'
});
</script>
```

Example - if Google Maps is injected under a div tag `<div id="12345"></div>` then the SDP script would be as follows:

```html title="Show Google Maps overlay on specific selector"
<script>
uc.blockElements({
  'S1pcEj_jZX': '#12345' // Show google maps overlay over the element with ID '12345'
});
</script>
```

**Please note:** This will still be applicable only for the currently supported technologies listed below.

## Set custom texts on SDP overlays

For the currently supported technologies, you can change the text displayed on the overlay by using the `uc.setCustomTranslations()` method. There are two ways to use this method, either with JavaScript variables or hosting files remotely.

To enable the method via Javascript variables, add the following code to your html:

```html title="Configuring custom translations"
<script>
    uc.setCustomTranslations({
      en: {
        ACCEPT: "Custom EN Accept",
        DEFAULT_DESCRIPTION: "Custom EN Description",
        DEFAULT_TITLE: "Custom EN Title"
      },
      de: {
        ACCEPT: "Custom DE Accept",
        DEFAULT_DESCRIPTION: "Custom DE Description",
        DEFAULT_TITLE: "Custom DE Title"
      }
    });
</script>
```

To enable the method via remote files, you need to host the files with the custom translations on your server and provide the Smart Data Protector with the host. For example, to set custom English texts, follow the steps mentioned below:

**1:** Create a file with English version and name it `en.json`

**2:** Fill it with following content:

```json title="en.json"
{
 "ACCEPT": "Accept",
 "DEFAULT_DESCRIPTION": "We use %TECHNOLOGY_NAME% to embed content that may collect data about your activity. Please review the details and accept the service to see this content.",
 "DEFAULT_TITLE": "We need your consent to load the %TECHNOLOGY_NAME% service!"
}
```

**3:** Host this file on your server (e.g. https://website.com/translations/en.json)

**4:** Repeat these steps for each language you want to change. Use the supported language ISO codes mentioned [here](https://usercentrics.atlassian.net/wiki/spaces/SKB/pages/223346762/Which+languages+does+the+Usercentrics+CMP+support).

**5:** Add this script to your website:

```html title="Linking remote custom translations"
<script>
uc.setCustomTranslations('https://website.com/translations');
</script>
```

!!! note 
    The value in function should point to the directory where the language json file is stored.

The Smart Data Protector will then try to fetch the custom translations for the selected language. In case some texts are missing for some languages, the default text provided by us will be displayed.

List of all available text options: `ACCEPT`, `DEFAULT_DESCRIPTION`, `DEFAULT_TITLE`, `FACEBOOK_DESCRIPTION`, `MAP_DESCRIPTION`, `MIXCLOUD_DESCRIPTION`, `MORE_INFO`, `NOT_PERMITTED_TEXT`, `PAYPAL_DESCRIPTION`, `POWERED_BY`, `RECAPTCHA_ALERT`, `RECAPTCHA_DESCRIPTION`, `VIDEO_DESCRIPTION`, `XING_DESCRIPTION`

The following diagram shows some of above options:

!!! info "Illustration - Overlay labels"
    <figure>
        <img src="../../../../assets/web/sdp/text_options.png" alt="Blocking overlay example" />
    </figure>

In case if something is wrong with CMP `NOT_PERMITTED_TEXT` is shown instead of `DEFAULT_DESCRIPTION`.

In order to provide more context, some technologies use different texts instead of the default ones. Find the list of these technologies below

| Option               | Template Id        | Description                                                              |
|----------------------|--------------------|--------------------------------------------------------------------------|
| `FACEBOOK_DESCRIPTION`  | XYQZBUojc          | Facebook                                                                 |
| `MAP_DESCRIPTION`       | S1pcEj_jZX        | Google Maps                                                             |
| `MIXCLOUD_DESCRIPTION`  | 4UGBLUJUN          | Mixcloud                                                                |
| `PAYPAL_DESCRIPTION`    | JiFH1ubU           | PayPal                                                                 |
| `RECAPTCHA_DESCRIPTION` | Hko_qNsui-Q       | Recaptcha overlay description                                           |
| `RECAPTCHA_ALERT`       | Hko_qNsui-Q       | For recaptcha 3 we have to use some specific functionality (alert is shown instead of overlay). So above text option is used for this alert description |
| `VIDEO_DESCRIPTION`      | BJz7qNsdj-7, HyEX5Nidi-m, SJ1aqNjOs-m | For some services (YouTube, Vimeo, Wistia) we use another type of embedding - video embedding. This option is used for the overlay description of above technologies |
| `XING_DESCRIPTION`       | BJREqEiOiZQ       | Xing                                                                    |

Examples of custom translations:

[en.json](../../../assets/web/sdp/json/en.json){:target="_blank"}

[de.json](../../../assets/web/sdp/json/de.json){:target="_blank"}

## Reload Page on Consent Changes

After implementing all the necessary installation steps, certain technologies (especially implemented via Javascript libraries, like Lightbox) might still not be enabled correctly after the consent is given. In such cases, we provide the fallback option to trigger a page reload in order to restore the technologies correctly.

Please add the following script to your website to trigger a page reload, after the consent is given.

```html title="Reloading when opting in to specific service"
<script type="application/javascript" src="https://privacy-proxy.usercentrics.eu/latest/uc-block.bundle.js">
</script>
<script>
 uc.reloadOnOptIn('BJz7qNsdj-7'); // reload page on YouTube opt-in
 // ... you can also add more service IDs similarly
</script>
```

Similarly, in case the consent is revoked, we also provide the fallback option to trigger a page reload in order to block the technologies correctly.

Please add the following script to your website to trigger a page reload, after the consent is revoked.

```html title="Reloading when opting out of specific service"
<script type="application/javascript" src="https://privacy-proxy.usercentrics.eu/latest/uc-block.bundle.js">
</script>
<script>
 uc.reloadOnOptOut('BJz7qNsdj-7'); // reload page on YouTube opt-out
 // ... you can also add more service IDs similarly
</script>
```

## Styling Customization (CSS)

In case the overlay is not displayed correctly on your website or the design does not fit, the layout of the overlays can be customized with your individual CSS code. We recommend to use the descendant combinator to make your rules more specific, for example to change the accept button color use the parent container as a reference:

```css title="Targeting the accept button"
.uc-embedding-container .uc-embedding-buttons .uc-embedding-accept {
  background-color: green;
}
```

The following diagram shows all available CSS classes:

!!! info "Illustration - Overlay CSS classes"
    <figure>
        <img src="../../../../assets/web/sdp/css.png" alt="Blocking overlay example" />
    </figure>

## Currently supported technologies

We support as many implementations as possible of the technologies listed below. Technologies are sorted alphabetically.

- Add This (ByOJZ54odjW7)
- Adition (SJFe9NousWX)
- Adobe Experience Cloud (f6nkjdUL)
- Adobe Typekit (HJy4c4s_jbX)
- Airtable (IdaQw5cVN)
- Amazon advertising (N2spyFPL)
- anchor.fm (6znewg1hW)
- ArcGIS Map (aXnTc_Y3n)
- AT Internet (fiQX6mqi)
- Audioboom (c6lt-aZ0)
- Audiocon (mdM6tHJ4s)
- Bing Maps (abGHajF1)
- Bitmovin (SkdccNsdj-X)
- Bookingkit (Ewb9uz1Rp)
- Bryter (A91MHlBY6)
- Calendly (vdUe2GDtm)
- Civey (xI9qM4Yhk)
- Criteo (HyeqVsdjWX)
- Dailymotion (VJNO26pZe)
- DataWrapper (8Nxb4ZtSa)
- Discord (hvWNhpF0T)
- Disqus (r1rX94i_iZX)
- eKomi (MEXztGXoM)
- Facebook Audience (rkUcEjuoWm)
- Facebook Pixel (ko1w5PpFl)
- Facebook Social Plugin (XYQZBUojc)
- Facebook Videos (r5-Z_erQ0)
- Flickr (X0wJtpzqX)
- Flockler (uJyv6-Nm)
- Flourish (kbmJpLAUf)
- Giphy (RuWQqICz)
- Glomex (BySu54sOjZQ)
- Google Ads (S1_9Vsuj-Q)
- Google AdWords Remarketing (S1_9Vsuj-Q)
- Google Analytics (HkocEodjb7)
- Google Analytics 4 (87JYasXPF)
- Google Calendar (n1jiXg1v)
- Google Forms (wgTnPe7i1)
- Google Maps (S1pcEj_jZX)
- Google Syndication (SkPc5EjOsWm)
- Google Tag Manager (BJ59EidsWQ)
- Google Fonts (HkPBYFofN)
- Here (0V-E5N_GQ)
- HubSpot (ry0QcNodoWQ)
- HubSpot forms (r1Fhc4iOoWX)
- Instagram (SyUQ54odobQ)
- Intercom (ryDQcVoOoZQ)
- Issuu (dwkRM0PG)
- JotForm (J9V5VBp3y)
- Juicer (-ONUgPRHp)
- Juris (YiVeMG4Ma)
- JW Player (ppPIzs4e)
- Klaviyo (m5uB6gnoW)
- Leadinfo (eSE_HHXnI)
- LinkedIn Plugin (Hkx754i_iWm)
- Livestorm.io (KpU9UXKjc)
- Machineseeker (ukU5jpn0K)
- Mapbox (U8QkTd2W)
- Matomo (zqWojrT0P)
- Matomo (self hosted) (u6fxocwTs)
- Matterport (7bFNv7DLf)
- Media Math (SJ6xqVidi-X)
- Mixcloud (4UGBLUJUN)
- News Anwaltblatt (SJ_6Qo9DJ)
- Outdooractive (15h3IBCa8)
- Open as App (nTiHcYnDd)
- Open Street Map (j7Igy6o8D)
- Opinion Stage (pNOkVRbV6)
- Paypal (JiFH1ubU)
- Pinterest (9Q2qrmB3)
- Piwik Pro - Duda (ze3Iyetr)
- Playbuzz (cv9bw3QAq)
- Podigee (nhLMP6qX)
- Prescreen (Sy1naC5nN)
- PriceHubble (FB_cLNwjQ)
- reCAPTCHA v1/v2 (Hko_qNsui-Q)
- reCAPTCHA v3 automatically bind variant (Hko_qNsui-Q)
- ShareThis (B1639EiOs-7)
- Shore (W0apH00t)
- Site Analytics - Duda (wkt-Vgmf7)
- Site Personalization - Duda (8u-otMeLg)
- Slideshare (jhJqRRPUe)
- Smart-rechner (lr0gmwVMY)
- Snatchbot (t-J9SUrOD)
- SoundCloud (HyP_q4sdobm)
- Sovendus (Di_NMaFOX)
- Splicky (1dU2WuKlq)
- Spotify (CguMb4Rq)
- Taboola (HkMucNoOjWX)
- Taggbox (RyDAUe7cq)
- Thinglink (T7-yEXGyq)
- TikTok (Z0TcXjY0P)
- TwentyThree (1rXAPWvo)
- Twitch (FPZz1xJI)
- Twitter Plugin (BJTzqNi_i-m)
- Typeform (r1PkZcEs_iWQ)
- Videoask (VtnVCeUzx)
- Videolyser (SDFUIfvK_)
- Vidyard (KRDJ6FLgY)
- Vimeo (HyEX5Nidi-m)
- Walls.io (FtE1AC6zU)
- Mapp Intelligence Full Feature Tracking (Ouzxu26Rv)
- Wetter (rerXlW9h2)
- Wigeogis (uJRRy9uiQ)
- Wistia (SJ1aqNjOs-m)
- Xing Plugin (BJREqEiOiZQ)
- Yelp (5qKtc_BS)
- YouTube Video (BJz7qNsdj-7)
- Yumpu (6LdBYXdAl)
- Zoho SalesIQ (sKBym34ck)
- 3Q Video (qxiCD5aN_)

In addition to the above, we support Fancybox 3 implementation of Lightbox JavaScript library.

!!! warning "Disclaimers"
    - Service providers might update implementations of services that we already support. Please contact us if a specific implementation needs to be supported, we will evaluate and get back to you as soon as possible.
    
    - Except the above mentioned services, technologies implemented via JavaScript libraries are not supported out of the box. When using a JavaScript library, it might be required to reload the page after consent changes or build your own solution with our [API](https://usercentrics.atlassian.net/wiki/spaces/SKB/pages/1372323845/How+can+I+block+iframes+using+the+Usercentrics+API) (see [known limitations](#known-limitations)).

## Browser Support for the Smart Data Protector

The number always states the minimum version supported by Usercentrics.

## Desktop Browsers

| Browser                | Version      |
| ---------------------- | ------------ |
| :fontawesome-brands-chrome: Chrome                 | 80           |
| :fontawesome-brands-edge: Edge                   | 79           |
| :fontawesome-brands-firefox: Firefox                | 78           |
| :fontawesome-brands-safari: Safari                 | 13           |


## Mobile Browsers

| Operating System | Browser                  | Version      |
| ---------------- | ----------------------   | ------------ |
| :fontawesome-brands-android: Android      | Google Chrome<br><br>Firefox|  Android 7+ <br><br> Android 7+|
| :fontawesome-brands-apple: iOS           | Safari<br><br>Chrome<br><br>Firefox|iOS 13.0<br><br>iOS 13.0<br><br>iOS 13.0|

## Examples

For some technologies the Smart Data Protector provides an overlay, allowing users to accept the correspondant services directly. In the following section you can find various examples of such supported technologies.

!!! question "Already consented?"
    If you have already accepted services in the CMP on this website, you can open the CMP by clicking the privacy button in the lower left corner of this website. You can then withdraw your consent for the individual services that are listed here, which will block the iFrames below and allow you to inspect the overlay feature of the Smart Data Protector.


### Youtube iFrame

Block the Youtube iframe `<iframe src="https://www.youtube.com/embed/XXX" />`

<iframe width="100%" height="550" src="https://www.youtube.com/embed/_Wl6FJQjPuw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Vimeo iFrame

Block the Vimeo iframe `<iframe src="https://player.vimeo.com/video/XXX" />`

<iframe src="https://player.vimeo.com/video/271380910" height="500" width="100%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

### Google Maps

Block the Google Map iframe `<iframe src="https://maps.google.com/maps?q=Munich&..." />`

<iframe src="https://maps.google.com/maps?q=munich&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="450" frameborder="0" style="padding: 0; border:0" allowfullscreen></iframe>

Block the Google Map iframe (via Google's "embed map" export) `<iframe src="https://www.google.com/maps/embed?pb=..." />`

<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12065.960719136203!2d11.582957249446354!3d48.135984184053356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sde!4v1565339365530!5m2!1sen!2sde" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>

<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBjVRsY4WFC89wr9jLI9dhtIBaxddGD3Rs&callback=initMap" async defer></script>

### SoundCloud

Block the SoundCloud iframe `<iframe width="100%" height="450"... />`

<iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/693902449&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>

### Spotify

Block the Spotify iframe `<iframe src="https://open.spotify.com/embed/track/1IbNYr8ByXsgwGbmOxLBXP"... />`

<iframe src="https://open.spotify.com/embed/track/1IbNYr8ByXsgwGbmOxLBXP" width="100%" height="450" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>

### Facebook

Block the Facebook iframe `<iframe src="https://www.facebook.com/plugins/post.php... />`

<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fusercentrics%2Fposts%2F774669983279324" width="100%" height="636" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>

### Instagram

Block the Instagram Blockquote `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram... />`

 <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/CDVl--UJ5nf/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="12" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/CDVl--UJ5nf/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;"> View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/p/CDVl--UJ5nf/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by Usercentrics GmbH (@usercentrics)</a> on <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2020-08-01T06:55:37+00:00">Jul 31, 2020 at 11:55pm PDT</time></p></div></blockquote> <script async src="//www.instagram.com/embed.js"></script>

 
### ReCaptchaV2

Block the Recaptcha form   

```html
<script src="https://www.google.com/recaptcha/api.js" async></script>
<form action="?" method="POST">
  <div class="g-recaptcha" data-sitekey="<site-key>"></div>
  <br/>
  <input type="submit" value="Submit">
</form>
```

<script src="https://www.google.com/recaptcha/api.js" async></script>
<form action="?" method="POST">
  <div class="g-recaptcha" data-sitekey="6LfoioAeAAAAALkIjS0w5UQS1xIBRFz_gglW-s7E"></div>
  <br/>
  <input type="submit" value="Submit">
</form>

### Twitter

Block the Twitter blockquote `<blockquote class="twitter-tweet"... />`

 <blockquote class="twitter-tweet"><p lang="en" dir="ltr"><a href="https://twitter.com/hashtag/Oracle?src=hash&amp;ref_src=twsrc%5Etfw">#Oracle</a> &amp; <a href="https://twitter.com/hashtag/Salesforce?src=hash&amp;ref_src=twsrc%5Etfw">#Salesforce</a> facing class action lawsuits in NL &amp; UK because of doubts about whether the data usage by their marketing platforms had been consented. The industry is changing. Privacy is the new normal. <a href="https://twitter.com/hashtag/consentmanagement?src=hash&amp;ref_src=twsrc%5Etfw">#consentmanagement</a><a href="https://t.co/Kd4ROXGAHU">https://t.co/Kd4ROXGAHU</a></p>&mdash; Usercentrics GmbH (@usercentrics) <a href="https://twitter.com/usercentrics/status/1294255568690044929?ref_src=twsrc%5Etfw">August 14, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


 <style>
    a.withdraw-button {
        padding: 8px 16px;
        font-size: 16px;
        font-weight: 600;
        background-color: #ff5800;
        color: #fff!important;
        border-radius: 4px;
        text-transform: none;
        margin-bottom: 15px!important;
    }
    a.withdraw-button:hover {
        background-color: #e15a2b;
        text-decoration: none;
    }
    .md-main .uc-embedding-wrapper h3 {
        line-height: 1.33!important;
        font-size: 18px!important;
        font-weight: bold!important;
        margin-bottom: 0px!important;
        color: #303030!important;
    }
    .uc-embedding-wrapper {
        width: unset;
    }
    .uc-embedding-wrapper .description-text, 
    .uc-embedding-wrapper .not-existing-service {
        font-size: 14px;
    }
    .uc-embedding-wrapper > span {
        font-size: 10px;
        margin-top: 4px;
    }
</style>