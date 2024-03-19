In the following table, you will have all the available properties that we offer for the A/B testing:

!!! warning "Case sensitive"
    Every single property is case sensitive, so an incorrect input may lead to an unwanted result.

!!! warning "TCF"
    For your TCF 2.0 CMP only the specific TCF 2.0 properties can be used for A/B testing.

## Layout style

| Label | Property | Option | Example |
|-------|----------|--------|---------|
| Background Color | ```customization.color.layerBackground``` | Hexadecimal Color Code (On the Admin Interface, For A/B Testing remove the # ) | ```{ "variant1": { "customization": { "color": { "layerBackground": "0045A5" } } } }```  |
| Text Color  | ```customization.color.text``` | Hexadecimal Color Code (On the Admin Interface, For A/B Testing remove the # ) | ```{ "variant1": { "customization": { "color": { "text": "000000" } } } }```  |
| Link Color  | ```customization.color.linkFont``` | Hexadecimal Color Code (On the Admin Interface, For A/B Testing remove the # ) | ```{ "variant1": { "customization": { "color": { "linkFont": "000000" } } } }```  |
| Tab Color  | ```customization.color.secondLayerTab``` | Hexadecimal Color Code (On the Admin Interface, For A/B Testing remove the # ) | ```{ "variant1": { "customization": { "color": { "secondLayerTab": "FAFAFA" } } } }```  |
| Accent Color  | ```customization.color.tabsBorderColor```  | Hexadecimal Color Code (On the Admin Interface, For A/B Testing remove the # ) | ```{ "variant1": { "customization": { "color": { "tabsBorderColor": "0045A5" } } } }```  |

### Example

``` json
{
 "variant0": {},
 "variant1": {
  "customization": {
    "color": {
      "layerBackground": "0045A5",
      "text": "000000",
      "linkFont": "000000",
      "secondLayerTab": "FAFAFA",
      "tabsBorderColor": "0045A5"
    }
  }
 }
}
```

## First Layer Properties

| Label | Property | Option | Example |
|-------|----------|--------|---------|
| First Layer Layout | ```firstLayer.variant``` | ```“WALL”``` (Privacy Wall) OR ```“BANNER”``` (Privacy Banner)  | ``` {  "variant1": {   "firstLayer": {     "variant": "WALL"   } } ``` |
| Display Categories | ```firstLayer.isCategoryTogglesEnabled``` | ```true or false``` | ``` {  "variant1": {   "firstLayer": {     "isCategoryTogglesEnabled": true   } }``` |
| Hide Language Switch | ```firstLayer.hideLanguageSwitch``` | ```true or false``` | ``` {  "variant1": {   "firstLayer": {     "hideLanguageSwitch": true   }  } } ``` |
| Show "Deny All" Button | ```firstLayer.hideButtonDeny``` | ```true or false``` | ``` {  "variant1": {   "firstLayer": {     "hideButtonDeny": false   }  } } ``` |
| More Information Trigger | ```firstLayer.secondLayerTrigger``` | ```"LINK"``` (More Information Link) or ```"BUTTON"```(More Information Button) or ```"MORE_LINK_BUTTON"``` (More Information Link in Banner Message) | ``` {  "variant1": {   "firstLayer": {     "secondLayerTrigger": "BUTTON"   }  } } ``` |
| First Layer Background Overlay | ```firstLayer.isOverlayEnabled```       | ```true or false```  | ``` {  "variant1": {   "firstLayer": {     "isOverlayEnabled": true   }  } } ``` |
| First Layer Wall Button Alignment | ```customization.buttonAlignment```       | ```"VERTICAL" or "HORIZONTAL"```  | ``` { "variant1": { "customization": { "buttonAlignment": "HORIZONTAL" } } }``` |
| First Layer Short Message | ```firstLayer.shortMessage``` | Any Text  | ``` {  "variant1": {   "firstLayer": {     "shortMessage": "short message example"  } } ``` |
| Close CMP without accepting | ```firstLayer.closeOption``` | ```"LINK"``` (Close Link) or ```"ICON"```(Close Button)  | ``` {  "variant1": {   "firstLayer": {     "closeOption": "LINK"  } } ``` |

### Example

``` json
{
 "variant0": {},
 "variant1": {
  "firstLayer": {
    "variant": "WALL",
    "isCategoryTogglesEnabled": true,
    "hideLanguageSwitch": true,
    "hideButtonDeny": false,
    "secondLayerTrigger": "BUTTON",
    "isOverlayEnabled": false,
    "shortMessage": "short message example",
    "closeOption": "LINK"
  },
  "customization": {
    "buttonAlignment": "HORIZONTAL"
  }
 }
} 
```

## First Layer Content Properties

| Label | Property | Option | Example |
|-------|----------|--------|---------|
| First Layer Title                                   | ```labels.firstLayerTitle```          | Any Text            | ```{  "variant1": {  "labels": {     "firstLayerTitle": "First Layer",   }  } }```           |
| Banner Message                                      | ```bannerMessage```                   | Any Text            | ```{  "variant1": {   "bannerMessage": "Banner Message for First Layer<br>"  } }```          |
| Show Short Description on Mobile and Tablet Devices | ```bannerMobileDescriptionIsActive``` | ```true or false``` | ```{  "variant1": {   "bannerMobileDescriptionIsActive": true  } }```                        |
| Short Description                                   | ```bannerMobileDescription```         | Any Text            | ```{  "variant1": {   "bannerMobileDescription": "Short Description for First Layer"  } }``` |
| Read More Label                                     | ```labels.btnBannerReadMore```        | Any Text            | ```{  "variant1": {   "labels": {     "btnBannerReadMore": "Read More"   }  } }```           |
| Imprint URL                                         | ```imprintUrl```                      | Valid URL           | ```{  "variant1": {   "imprintUrl": "www.example.com/imprint"  } }```                        |
| Imprint Link Text                                   | ```labels.imprintLinkText```          | Any Text            | ```{  "variant1": {   "labels": {     "imprintLinkText": "Imprint"   }  } }```               |
| Privacy Policy URL                                  | ```privacyPolicyUrl```                | Valid URL           | ```{  "variant1": {   "privacyPolicyUrl": "www.example.com/privacy-policy"  } }```           |
| Privacy Policy Link Text                            | ```labels.privacyPolicyLinkText```    | Any Text            | ```{  "variant1": {   "labels": {     "privacyPolicyLinkText": "Privacy Policy"   }  } }```  |
| First Layer Use Short Message                       | ```firstLayer.useShortMessage```      | ```true or false``` | ```{ "variant1": {   "firstLayer": {   "useShortMessage": true } }```  |

### Example

``` json
{
 "variant0": {},
 "variant1": {
  "bannerMessage": "Banner Message for First Layer<br>",
  "bannerMobileDescriptionIsActive": true,
  "bannerMobileDescription": "Short Description for First Layer",
  "imprintUrl": "www.example.com/imprint",
  "privacyPolicyUrl": "www.example.com/privacy-policy",
  "labels": {
    "firstLayerTitle": "First Layer",
    "btnBannerReadMore": "Read More",
    "imprintLinkText": "Imprint",
    "privacyPolicyLinkText": "Privacy Policy"
  },
  "firstLayer": {
    "useShortMessage": true
 }
}
```

## Second Layer Properties

| Label                          | Property                             | Option                                                                           | Example                                                                                    |
|--------------------------------|--------------------------------------|----------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------|
| Second Layer Layout            | ```secondLayer.variant```            | ```"CENTER"``` (Privacy Settings Center) or ```"SIDE"``` (Privacy Settings Side) | ```{  "variant1": {   "secondLayer": {     "variant": "CENTER"   }  } }```        |
| Privacy Settings Side Position | ```secondLayer.side```               | ```"LEFT"```(Position: Left) or ```"RIGHT"```(Position: Right)                   | ```{  "variant1": {   "secondLayer": {     "side": "LEFT"   }  } }```             |
| Hide Language Switch           | ```secondLayer.hideLanguageSwitch``` | ```true or false```                                                              | ```{  "variant1": {   "secondLayer": {     "hideLanguageSwitch": true   }  } }``` |
| Show ‘Deny All’ Button         | ```secondLayer.hideButtonDeny```     | ```true or false```                                                              | ```{  "variant1": {   "secondLayer": {     "hideButtonDeny": false   }  } }```    |
| Second Layer Background Overlay | ```secondLayer.isOverlayEnabled```       | ```true or false```  | ```{  "variant1": {   "secondLayer": {     "isOverlayEnabled": true   }  } } ``` |
| Second Layer Default View | ```secondLayer.defaultView```       | ```"SRV"``` (Show Service Tab) or ```"CAT"``` (Show Categories Tab)  | ```{  "variant1": {   "secondLayer": {     "defaultView": "CAT"   }  } } ``` |

### Example

``` json
{
 "variant0": {},
 "variant1": {
  "secondLayer": {
    "variant": "CENTER",
    "side": "LEFT",
    "hideLanguageSwitch": true,
    "hideButtonDeny": false,
    "isOverlayEnabled": true,
    "defaultView": "CAT"
  }
 }
}
```

## Second Layer Content

| Label                    | Property                  | Option   | Example                                                                                                      |
|--------------------------|---------------------------|----------|--------------------------------------------------------------------------------------------------------------|
| Second Layer Title       | ```labels.headerCorner``` | Any Text | ```{  "variant1": {   "labels": {     "headerCorner": "Second Layer Title"   }  } }```              |
| Second Layer Description | ```labels.titleCorner```  | Any Text | ```{  "variant1": {   "labels": {     "titleCorner": "Second Layer Description Message"   }  } }``` |

### Example

``` json
{
 "variant0": {},
 "variant1": {
  "labels": {
    "headerCorner": "Second Layer Title",
    "titleCorner": "Second Layer Description Message"
  }
 }
}
```

## Privacy Trigger Properties

| Label                          | Property                       | Option               | Example        |
| ------------------------------ | ------------------------------ | -------------------- | -------------- |
| Privacy Button Trigger         | ```privacyButtonIsVisible```   |  ```true or false``` | ```{ "variant1": { "privacyButtonIsVisible": true } }``` |
| Privacy Button Allowed URLs    | ```privacyButtonUrls```        | ```{ "contains": [string] }```       | ```{ "variant1": { "privacyButtonUrls": { "contains": ["/path"] } } }``` |
| Privacy Button Icon            | ```buttonPrivacyOpenIconUrl``` | ```"https://img.usercentrics.eu/misc/icon-fingerprint@2X.png"``` (Fingerprint),  ```"https://img.usercentrics.eu/misc/icon-settings-2X.png"``` (Settings),  ```"https://img.usercentrics.eu/misc/icon-shield-2X.png"``` (Security) or a Valid URL for Custom Icon | ```{ "variant1": { "buttonPrivacyOpenIconUrl": "https://img.usercentrics.eu/misc/icon-fingerprint@2X.png" } }``` |
| Custom Icon for Privacy Button | ```buttonPrivacyOpenIconUrl``` | Valid URL  | ```{ "variant1": {   "buttonPrivacyOpenIconUrl": "https://wwww.example.com/icon.png" } }``` |
| Choose Button Position         | ```buttonDisplayLocation```    | ```"bl"``` (Bottom Left) or ```"br"``` (Bottom Right)   | ```{ "variant1": { "buttonDisplayLocation": "bl" } }```     |
| Background Color         | ```customization.color.privacyButtonBackground```    | Hexadecimal Color Code (On the Admin Interface, For A/B Testing remove the # )   | ```{ "variant1": { "customization": { "color": { "privacyButtonBackground": "0045A5" }} } }```     |

### Example

```json
{
 "variant0": {},
 "variant1": {
  "customization": {
    "color": {
      "privacyButtonBackground": "0045A5"
    }
  },
  "privacyButtonIsVisible": true,
  "privacyButtonUrls": {
    "contains": ["/path"]
  },
  "buttonPrivacyOpenIconUrl": "https://img.usercentrics.eu/misc/icon-fingerprint@2X.png",
  "buttonDisplayLocation": "bl"
 }
}
```

## Logo Properties

| Label                       | Property                       | Option                                                                | Example                                                                                                  |
|-----------------------------|--------------------------------|-----------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| Logo URL                    | ```customization.logoUrl```    | Valid URL                                                             | ```{  "variant1": {   "customization": {     "logoUrl": "https://www.example.com/logo.png"   }  } }``` |
| Logo Position (First Layer) | ```firstLayer.logoPosition```  | ```"LEFT"``` (Left), ```"CENTER"``` (Center) or ```"RIGHT"``` (Right) | ```{  "variant1": {   "firstLayer": {     "logoPosition": "LEFT"   }  } }```                           |
| Logo Alt-Tag                | ```customization.logoAltTag``` | Any Text                                                              | ```{  "variant1": {   "customization": {     "logoAltTag": "Alternative Tag"   }  } }```               |

### Example

``` json
{
 "variant0": {},
 "variant1": {
  "firstLayer": {
    "logoPosition": "LEFT",
  },
  "customization": {
    "logoUrl": "https://www.example.com/logo.png",
    "logoAltTag": "Alternative Tag"
  }
 }
}
```

## Fonts Properties

| Label                    | Property                        | Option                                                                                                     | Example                                                                                                       |
|--------------------------|---------------------------------|------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|
| Font-Family              | ```customization.font.family``` | “System fonts (Default)”, “Helvetica”, “Verdana”, “Georgia”, “Arial” or “Custom font”                      | ```{  "variant1": {   "customization": {     "font": {       "family": "Helvetica"     }   }  } }```       |
| Font-Family Custom Field | ```customization.font.family``` | Any Custom Font that you want to add  (Note: those fonts must be included in your website to make it work) | ```{  "variant1": {   "customization": {     "font": {       "family": "Source Sans Pro"     }   }  } }``` |
| Font-Size                | ```customization.font.size```   | 12, 14, 16, 18                                                                                             | ```{  "variant1": {   "customization": {     "font": {       "size": 16     }   }  } }```                  |

### Example

``` json
{
 "variant0": {},
 "variant1": {
  "customization": {
    "font": {
      "family": "Helvetica",
      "size": 16
    }
  }
 }
}
```

## Buttons Properties

| Label                      | Property                                      | Option                                                                         | Example                                                                                                             |
|----------------------------|-----------------------------------------------|--------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|
| Accept Button (Background) | ```customization.color.acceptBtnBackground```       | Hexadecimal Color Code (On the Admin Interface, For A/B Testing remove the # ) | ```{  "variant1": {   "customization": {     "color": {       "acceptBtnBackground": "FAFAFA"     }   }  } }```       |
| Accept Button (Text)       | ```customization.color.acceptBtnText``` | Hexadecimal Color Code (On the Admin Interface, For A/B Testing remove the # ) | ```{  "variant1": {   "customization": {     "color": {       "acceptBtnText": "0045A5"     }   }  } }``` |
| Deny Button (Background)   | ```customization.color.denyBtnBackground```   | Hexadecimal Color Code (On the Admin Interface, For A/B Testing remove the # ) | ```{  "variant1": {   "customization": {     "color": {       "denyBtnBackground": "0045A5"     }   }  } }```   |
| Deny Button (Text)         | ```customization.color.denyBtnText```         | Hexadecimal Color Code (On the Admin Interface, For A/B Testing remove the # ) | ```{  "variant1": {   "customization": {     "color": {       "denyBtnText": "FAFAFA"     }   }  } }```         |
| Save Button (Background)   | ```customization.color.saveBtnBackground```   | Hexadecimal Color Code (On the Admin Interface, For A/B Testing remove the # ) | ```{  "variant1": {   "customization": {     "color": {       "saveBtnBackground": "0045A5"     }   }  } }```   |
| Save Button (Text)         | ```customization.color.saveBtnText```         | Hexadecimal Color Code (On the Admin Interface, For A/B Testing remove the # ) | ```{  "variant1": {   "customization": {     "color": {       "saveBtnText": "FAFAFA"     }   }  } }```         |
| More Button (Background) | ```customization.color.moreBtnBackground```       | Hexadecimal Color Code (On the Admin Interface, For A/B Testing remove the # ) | ```{  "variant1": {   "customization": {     "color": {       "moreBtnBackground": "FAFAFA"     }   }  } }```       |
| More Button (Text)       | ```customization.color.moreBtnText``` | Hexadecimal Color Code (On the Admin Interface, For A/B Testing remove the # ) | ```{  "variant1": {   "customization": {     "color": {       "moreBtnText": "0045A5"     }   }  } }``` |
| Rounded corners (px)       | ```customization.borderRadiusButton```        | Enter Any Number                                                               | ```{  "variant1": {   "customization": {     "borderRadiusButton": 4   }  } }```                               |

### Example

``` json
{
 "variant0": {},
 "variant1": {
  "customization": {
    "borderRadiusButton": 4,
    "color": {
      "acceptBtnBackground": "0045A5",
      "acceptBtnText": "FAFAFA",
      "denyBtnBackground": "0045A5",
      "denyBtnText": "FAFAFA",
      "moreBtnBackground": "0045A5",
      "moreBtnText": "FAFAFA",
      "saveBtnBackground": "0045A5",
      "saveBtnText": "FAFAFA"
    }
  }
 }
}
```

## Toggles Properties


| Label                        | Property                                           | Option                                                                         | Example                                                                                                                    |
|------------------------------|----------------------------------------------------|--------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------|
| Active Toggle (Background)   | ```customization.color.toggleActiveBackground```   | Hexadecimal Color Code (On the Admin Interface, For A/B Testing remove the # ) | ```{  "variant1": {   "customization": {     "color": {       "toggleActiveBackground": "0045A5"     }   }  } }```    |
| Active Toggle (Icon)         | ```customization.color.toggleActiveIcon```         | Hexadecimal Color Code (On the Admin Interface, For A/B Testing remove the # ) | ```{  "variant1": {   "customization": {     "color": {       "toggleActiveIcon": "FAFAFA",     }   }  } }```         |
| Disabled Toggle (Background) | ```customization.color.toggleDisabledBackground``` | Hexadecimal Color Code (On the Admin Interface, For A/B Testing remove the # ) | ```{  "variant1": {   "customization": {     "color": {       "toggleDisabledBackground": "FA0000"     }   }  } }```  |
| Disabled Toggle (Icon)       | ```customization.color.toggleDisabledIcon```       | Hexadecimal Color Code (On the Admin Interface, For A/B Testing remove the # ) | ```{  "variant1": {   "customization": {     "color": {       "toggleDisabledIcon": "FAFAFA"     }   }  } }```        |
| Inactive Toggle (Background) | ```customization.color.toggleInactiveBackground``` | Hexadecimal Color Code (On the Admin Interface, For A/B Testing remove the # ) | ```{  "variant1": {   "customization": {     "color": {       "toggleInactiveBackground": "989898",     }   }  } }``` |
| Inactive Toggle (Icon)       | ```customization.color.toggleInactiveIcon```       | Hexadecimal Color Code (On the Admin Interface, For A/B Testing remove the # ) | ```{  "variant1": {   "customization": {     "color": {       "toggleInactiveIcon": "FAFAFA"     }   }  } }```        |

### Example

```json
{
 "variant0": {},
 "variant1": {
  "customization": {
    "color": {
      "toggleActiveBackground": "0045A5",
      "toggleActiveIcon": "FAFAFA",
      "toggleInactiveBackground": "989898",
      "toggleInactiveIcon": "FAFAFA",
      "toggleDisabledBackground": "FA0000",
      "toggleDisabledIcon": "FAFAFA"
    }
  }
 }
}
```

## TCF 2.0 Properties


| Label                     | Property                                | Option                                                                   | Example                                                                                          |
|---------------------------|-----------------------------------------|--------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| TCF2 Accept All Button Label   | ```tcf2.buttonsAcceptAllLabel```   | Any Text                                                                 | ```{  "variant1": {   "tcf2": {     "buttonsAcceptAllLabel": "Accept All"   }  } }```       |
| TCF2 Deny All Button Label   | ```tcf2.buttonsDenytAllLabel```   | Any Text                                                                 |  ```{  "variant1": {   "tcf2": {     "buttonsDenyAllLabel": "Deny All"   }  } }```        |
| TCF2 Save Button Label   | ```tcf2.buttonsSaveLabel```   | Any Text                                                                 |  ```{  "variant1": {   "tcf2": {     "buttonsSaveLabel": "Save Settings"   }  } }```        |
| TCF2 Manage Settings Label   | ```tcf2.linksManageSettingsLabel```   | Any Text                                                                 |  ```{  "variant1": {   "tcf2": {     "linksManageSettingsLabel": "More Settings"   }  } }```        |
| TCF2 Data Shared Outside Europe Text   | ```tcf2.dataSharedOutsideEUText```   | Any Text                                                                 |  ```{  "variant1": {   "tcf2": {     "dataSharedOutsideEUText": "Outside EU Text"   }  } }```         |
| TCF2 First Layer Description   | ```tcf2.firstLayerDescription```   | Any Text                                                                 |  ```{  "variant1": {   "tcf2": {     "firstLayerDescription": "description"   }  } }```       |
| TCF2 First Layer Hide Deny Button   | ```tcf2.firstLayerHideButtonDeny```   | ```true or false```                                                                 |  ```{  "variant1": {   "tcf2": {     "firstLayerHideButtonDeny": false   }  } }```        |
| TCF2 First layer Hide Toggles  | ```tcf2.firstLayerHideToggles```   | ```true or false```                                                               |  ```{  "variant1": {   "tcf2": {     "firstLayerHideToggles": false   }  } }```       |
| TCF2 First layer Show Descriptions   | ```tcf2.firstLayerShowDescriptions```   | ```true or false```                                                               |  ```{  "variant1": {   "tcf2": {     "firstLayerShowDescriptions": false   }  } }```       |
| TCF2 First Layer Title  | ```tcf2.firstLayerTitle```   | Any Text                                                                 |  ```{  "variant1": {   "tcf2": {     "firstLayerTitle": "Privacy Information"   }  } }```       |
| TCF2 Hide Legitimate Interest Toggles   | ```tcf2.hideLegitimateInterestToggles```   | ```true or false```                                                                |  ```{  "variant1": {   "tcf2": {     "hideLegitimateInterestToggles": false   }  } }```       |
| TCF2 Second Layer Hide Deny Button   | ```tcf2.secondLayerHideButtonDeny```   | ```true or false```                                                                 |  ```{  "variant1": {   "tcf2": {     "secondLayerHideButtonDeny": true   }  } }```      |
| TCF2 Second Layer Hide Toggles   | ```tcf2.secondLayerHideToggles```   | ```true or false```                                                                |  ```{  "variant1": {   "tcf2": {     "secondLayerHideToggles": false   }  } }```        |
| TCF2 Second Layer Title   | ```tcf2.secondLayerTitle```   | Any Text                                                                 |  ```{  "variant1": {   "tcf2": {     "secondLayerTitle": "Privacy Settings"   }  } }```        |
| TCF2 Hide Non IAB Vendors on First Layer   | ```tcf2.hideNonIabOnFirstLayer```   | ```true or false```                                                               |  ```{  "variant1": {   "tcf2": {     "hideNonIabOnFirstLayer": false   }  } }```       |

### Example

```json
{
  "variant0": {},
  "variant1": {
    "tcf2": {
      "buttonsAcceptAllLabel": "Accept all",
      "buttonsDenyAllLabel": "Deny all",
      "buttonsSaveLabel": "Save Settings",
      "linksManageSettingsLabel": "More Settings"
      "dataSharedOutsideEUText": "Outside EU Text",
      "firstLayerDescription": "description",
      "firstLayerHideButtonDeny": false,
      "firstLayerHideToggles": false,
      "firstLayerShowDescriptions": false,
      "firstLayerTitle": "Privacy Information",
      "hideLegitimateInterestToggles": false,
      "secondLayerHideButtonDeny": true,
      "secondLayerHideToggles": false,
      "secondLayerTitle": "Privacy Settings",
      "hideNonIabOnFirstLayer": false
    }
  }
}
```

## CCPA First Layer Properties


| Label                     | Property                                | Option                                                                   | Example                                                                                          |
|---------------------------|-----------------------------------------|--------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| CCPA First Layer Layout   | ```ccpa.firstLayerVariant```            | ```"BANNER"``` (CCPA Privacy Banner) or ```"WALL"``` (CCPA Privacy Wall) | ```{  "variant1": {   "ccpa": {     "firstLayerVariant": "BANNER"   }  } }```        |
| CCPA Hide Language Switch | ```ccpa.firstLayerHideLanguageSwitch``` | ```true or false```                                                      | ```{  "variant1": {   "ccpa": {     "firstLayerHideLanguageSwitch": true   }  } }``` |

### Example

```json
{
 "variant0": {},
 "variant1": {
  "ccpa": {
    "firstLayerVariant": "BANNER",
    "firstLayerHideLanguageSwitch": true
  }
 }
}
```

## CCPA Second Layer Properties

| Label                     | Property                                 | Option                                                                                     | Example                                                                                      |
|---------------------------|------------------------------------------|--------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| CCPA Second Layer Layout  | ```ccpa.secondLayerVariant```            | ```"CENTER"``` (CCPA Privacy Settings Center) or ```"SIDE"``` (CCPA Privacy Settings Side) | ```{  "variant1": {   "ccpa": {     "secondLayerVariant": "CENTER"   }  } }```  |
| CCPA Hide Language Switch | ```ccpa.secondLayerHideLanguageSwitch``` | ```true or false```                                                                        | {  "variant1": {   "ccpa": {     "secondLayerHideLanguageSwitch": true   }  } } |

### Example

```json
{
 "variant0": {},
 "variant1": {
  "ccpa": {
    "secondLayerVariant": "CENTER",
    "secondLayerHideLanguageSwitch": true
  }
 }
}
```

## CCPA Button Properties

| Label                     | Property                                 | Option                                                                                     | Example                                                                                      |
|---------------------------|------------------------------------------|--------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| Okay Button CCPA Background Color  | ```customization.color.ccpaButtonColor```            | Hexadecimal Color Code (On the Admin Interface, For A/B Testing remove the # ) | ```{ "variant1": { "customization": { "color": { "ccpaButtonColor": "0045A5" } } } }```  |
| Okay Button CCPA Text Color  | ```customization.color.ccpaButtonTextColor```            | Hexadecimal Color Code (On the Admin Interface, For A/B Testing remove the # ) | ```{ "variant1": { "customization": { "color": { "ccpaButtonTextColor": "FFFFFF" } } } }```  |

### Example

```json
{
 "variant0": {},
 "variant1": {
  "customization": {
    "color": {
      "ccpaButtonColor": "0045A5",
      "ccpaButtonTextColor": "FFFFFF",
    }
  }
 }
}
```

## Labels Properties

!!! warning "Warning"
    These Labels are affected by different translations. This Property table is ENGLISH-only.


| Label              | Property                  | Option   | Example                                                                                                                 |
|--------------------|---------------------------|----------|-------------------------------------------------------------------------------------------------------------------------|
| Button: Save       | ```labels.btnSave```      | Any Text | ```{  "variant0": {},  "variant1": {   "labels": {     "btnSave": "Save Services"   }  } }``` |
| Button: Deny All   | ```labels.btnDeny```      | Any Text | ```{  "variant1": {   "labels": {     "btnDeny": "Deny"     "btnMore": "More",   }  } }```                 |
| Button: More       | ```labels.btnMore```       | Any Text | ```{  "variant1": {   "labels": {     "btnMore": "More"   }  } }```                                        |
| Button: Accept All | ```labels.btnAcceptAll``` | Any Text | ```{  "variant1": {   "labels": {     "btnAcceptAll": "Accept All"   }  } }```                             |
| History (Title)    | ```labels.history```      | Any Text | ```{  "variant1": {   "labels": {     "history": "History"   }  } }```                                     |

### Example

```json
{
 "variant0": {},
 "variant1": {
  "labels": {
    "btnSave": "Save Services",
    "btnDeny": "Deny",
    "btnMore": "More",
    "btnAcceptAll": "Accept All",
    "history": "History"
  }
 }
}
```

## Links in Banner Message
In case you want to add **links** to your variant's banner message property on the first layer, you can use the following links:

| Type                     | Link                                 | 
|--------------------|---------------------------|
| Accept All | ```<a href=\"javascript:UC_UI.acceptAllConsents().then(UC_UI.closeCMP);\">Accept all</a>``` |
| Deny All | ```<a href=\"javascript:UC_UI.denyAllConsents().then(UC_UI.closeCMP);\">Deny all</a>``` |
| More Information | ```<a href=\"javascript:UC_UI.showSecondLayer();\">More information</a>``` |
| Regular Link | ```<a href=\"https://www.yourlink.com\">Your text</a>``` |