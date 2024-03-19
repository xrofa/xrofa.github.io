## Draft Script

To test new changes within the Admin Interface before releasing them to your live environment, you can save any changes to a draft version. To display this draft version, you will need to add a data-draft="true" attribute to the CMP script tag.

<!-- !!! note ""
    To prevent any interaction analytics data from being collected in the draft version, you can add the additional attribute data-disable-tracking to the script tag. -->

``` html
    <script
        id="usercentrics-cmp"
        data-settings-id="YOUR_SETTINGS_ID"
        src="https://web.cmp.usercentrics.eu/ui/loader.js"
        data-draft="true"
    </script>
```

## Adding a nonce to the script tag

To add a [nonce](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/nonce) to your personal script, you can add it like so:

=== "Non-TCF Script"
    ``` html
    <script
        id="usercentrics-cmp"
        data-settings-id="YOUR_SETTINGS_ID"
        src="https://web.cmp.usercentrics.eu/ui/loader.js"
        nonce="nonce-VALUE"
    </script>
    ```

=== "TCF Script"
    ``` html
    <script
        id="usercentrics-cmp"
        data-settings-id="YOUR_SETTINGS_ID"
        src="https://web.cmp.usercentrics.eu/ui/loader.js"
        data-tcf-enabled
        nonce="nonce-VALUE"
    </script>
    ```

## Improved consent sharing between subdomains

If you're using **Usercentrics Cross Domain Consent Sharing (CDCS)** your website visitors might still see the CMP again when switching to another subdomain, for example `mywebshop.com` to `checkout.mywebshop.com`. Modern browsers are causing this behavior as they block the shared iframe provided by Usercentrics. The following section describes the needed steps to prevent this from happening.

!!! note ""
    This solution will improve user experience for most browsers, however currently not for Safari users. We're actively working on this case to offer you a solution for Safari users too.

- Download the file [cross-domain-bridge.html](https://app.usercentrics.eu/browser-sdk/3.6.0/cross-domain-bridge.html) *(right click > save as ...)*
- Upload this file to your webserver. It should be reachable from your main domain that is included in all of your subdomains. For example: `https://mywebshop.com/cross-domain-bridge.html`
- Before the Usercentrics CMP script tag, set the new location of the **Cross Domain Bridge** via the `window.UC_UI_DOMAINS.crossDomainConsentSharingIFrame` property (this should be added into all the domains, including the main domain).

### Example

A complete example might look like this

``` html
<html>
<head>
<script>
    window.UC_UI_DOMAINS = {
        crossDomainConsentSharingIFrame: 'https://mywebshop.com/cross-domain-bridge.html',
    };
</script>
<script id="usercentrics-cmp" data-settings-id="XXXXXXXX" src="https://app.usercentrics.eu/browser-ui/latest/loader.js" async></script>
</head>
<body>
</body>
</html>
```

## White labeling URLs

For customers that only allow sources from the same domain on their websites for security reasons, you can now configure from which address all Usercentrics resources (JSON files, JavaScript files etc.) should be loaded.

!!! warning ""
    This should be configured before the UI script from ["Add the JavaScript Tag"](../ui.md#add-the-javascript-tag)

In order to configure the domains please define the window variable called ucCmpConfig with the following structure:

```javascript
window.ucCmpConfig = {
    proxy: {
        api: '',
        consent: '',
        crossDevice: '',
        logger: '',
        cdn: '',
    }
}
```

### Our Endpoints

!!! warning "Important"
    Your proxy servers should point to the following domains

!!! note ""
    Regarding Cross Domain Consent Sharing feature you can white label only the domain via app key or provide a full URL to be used for this feature via crossDomainConsentSharingIFrame key

| Name | Purpose | Key | Domain |
| - | - | - | - |
| Api | Api to communicate between the UI and the SDK / backend | api | https://v1.api.service.cmp.usercentrics.eu |
| Consents | Get the consents data for Cross Domain feature | consent | https://consent-api.service.consent.usercentrics.eu |
| Cross Device Consents | Get the consents data for Cross Device feature | crossDevice | https://consent-rt-ret.service.consent.usercentrics.eu |
| GraphQL | Stores all user decisions on server | logger | https://graphql.usercentrics.eu |
| CDN | URL used on Cross Domain Consent Sharing Iframe to get data | cdn | https://web.cmp.usercentrics.eu |
