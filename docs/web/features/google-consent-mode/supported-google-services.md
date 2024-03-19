The following Google services currently support the Consent Mode:

| Name                           | Template Id | Consent Type      | Notes           |
|--------------------------------|-------------|-------------------|-----------------|
| Conversion Linker              | LykAT-gy    | ad_storage        | -               | 
| Display & Video 360            | UekC8ye4S   | ad_storage        | -               | 
| Doubleclick Ad                 | 9V8bg4D63   | ad_storage        | **DEPRECATED**  | 
| DoubleClick Floodlight         | ByzZ5EsOsZX | ad_storage        | **DEPRECATED**  | 
| Google Ads                     | S1_9Vsuj-Q  | ad_storage        | -               | 
| Google Ads Conversion Tracking | twMyStLkn   | ad_storage        | -               |  
| Google Ads Remarketing         | B1Hk_zoTX   | ad_storage        | -               | 
| Google Analytics               | HkocEodjb7  | analytics_storage | -               |  
| Google Analytics 4             | 87JYasXPF   | analytics_storage | -               | 
| Google Campaign Manager        | pxiRY9112   | ad_storage        | **DEPRECATED**  | 
| Google Campaign Manager 360    | dyHOCwp5Y   | ad_storage        | -               | 
| Search Ads 360                 | DHS2sEi4b   | ad_storage        | -               |

!!! danger "Important"
    When using the Google Consent Mode, the respective tags (see list above) may **not** be adjusted as described in our [guide](../google-tag-manager/configuration.md). The reason for this is the advantage of the Consent Mode: Google will use the signal to adjust the behaviour of their tags based on the user's consent in the Usercentrics CMP instead of having them blocked when no consent is given.

Details on the tag behaviour with Consent Mode can be found [here](https://support.google.com/analytics/answer/9976101?hl=en).
