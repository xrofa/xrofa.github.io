!!! danger "Important"
    **Google released Consent Mode v2 at the end of November 2023**. Version 2 of Consent Mode introduces two additional bits (ad_user_data & ad_personalization) within the consent mode updates.
    
    Usercentrics supports these new bits in the update signals as a standard feature. Please ensure that you are also incorporating updates to these two new bits within your default state implementation!
    
    If you are using the implementation through our Google Tag Manager community template, please update to the newest version that supports Consent Mode v2.

With [Consent Mode](https://support.google.com/analytics/answer/9976101?hl=en) Google has provided a solution for advertisers to adjust the behaviour of Google tags on their website based on the user consent status. 

By pairing the Consent Mode API with the Usercentrics Consent Management Platform (CMP) advertisers can indicate if the user has given consent for cookie usage related to ads and/or advertising. The supported Google tags will respect this signal and adjust their behaviour accordingly, as they will only utilize cookies if consent was granted for the specific purposes.

!!! danger "Important"
    Google also supports the IABs TCF 2.2 framework with its ad systems. Consent Mode is meant to be used by advertisers **not** using a TCF 2.2 CMP implementation.
    
    However, we also recommend implementing the Consent Mode default state into your website if you are using a TCF implementation.
    
    This recommendation is due to the fact that the necessary consent signals for ad_user_data and ad_personalization in some Google Tags cannot be guaranteed through the TCF API for now, owing to varying network loading times.

*** 

!!! note ""
    For the list of Google services that currently support the Consent Mode, please follow the [Supported Google Services](./supported-google-services.md)

**You may use Consent Mode instead of initially blocking the Google tags**. The benefit is that Google will use the signal to adjust the behaviour of their tags based on the user's consent in the Usercentrics CMP instead of having them blocked when no consent is given.

Details on the tag behaviour with Consent Mode can be found [here](https://support.google.com/analytics/answer/9976101?hl=en).