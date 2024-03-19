#Apple's Privacy Manifest files

## Introduction

Apple's new privacy requirements center around documenting the data collected by your app, referred to as the **Privacy Manifest**. This manifest provides details on the data categories collected by your app and third-party SDKs, along with the purposes behind data collection.

Third-party SDKs **must include a privacy manifest** file named `PrivacyInfo.xcprivacy`. This property list records the data types collected and the reasons for using corresponding APIs.

## Do I need to update the manifest when integrating with Usercentrics SDK?

**No, we do not collect any data deemed by Apple as significant for inclusion in the manifest.**

## More information

Data collection practices are organized into categories like *Contact Info*, *Health & Fitness*, *Financial Info*, *Location*, *Sensitive Info*, *Contacts*, *User Content*, *Browsing History*, *Identifiers*, *Purchases*, *Usage Data*, *Diagnostics*, and *Other Data Types*, each encompassing specific data types.

The reasons for data collection that require reporting fall into the following purposed: *Third-Party Advertising*, *Developer’s Advertising* or *Marketing*, *Analytics*, *Product Personalization*, *App Functionality* and *Other Purposes*.

We recommend to follow Apple guidelines and privacy policies. You can find more information in their public documentation.

## Sources

[Official documentation on Privacy Manifest Files](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files)

[Official documentation on how to describe data being used](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests)
