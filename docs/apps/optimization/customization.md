# Customization
User experience is a relevant variable when collecting consent. We highly encourage you to take advantage of our customization features, in order to provide a branded and user friendly banner to your users.

## Remote Customization
Use our **Remote Customization** options, for a quick out-of-the-box branding that covers all the basics. 

![LeanBanner](../../assets/apps/aiCustomization.png){: .aligncenter .imageBorder width=800px }

In the **Appearance** section of our Admin Interface, you will find the **Layout** and **Styling** tabs:

=== "Layout"

    Under **Display Options**, you will find the following options:
        
    * Hide "Deny All" button
    * Hide Language switch

    !!! tip "Showing the Language Switch"
        The language switch will only be shown in the **Second Layer**, and both of the following requirements need to be fulfilled:
        
        * Multiple **visible languages** are added in the **Configuration** section of the Admin Interface.
        * The "Hide language switch" option is disabled in the **Appearance** section of the Admin Interface, under the "Layout" tab.

=== "Styling"

    **Colors:** Set individual colors by providing a specific HEX or using our color picker for the following banner elements:
    
    * Background Color
    * Text Color
    * Links Color
    * Tab Color
    * Accent Color
    * Button Colors
    * Tabs Color
    * Toggle Colors
    
    ![Colors](../../assets/apps/colors.png){: .aligncenter .imageBorder width=500px }

    **Text Font and Size:** Only supported via [Programmatic Customization](#programmatic-customization).

    **Logo:** Set an image to appear at the top of your banner by providing a URL, as well as it's position:
    
    ![Logo](../../assets/apps/logo.png){: .aligncenter .imageBorder width=500px }

    ??? tip "Supported URL Image Formats"
        When passing a URL to fetch an image, the SDK supports: **iOS**: PNG and JPEG. **Android**: PNG, JPEG, BMP, GIF and WebP.

    ??? tip "Supporting SVG Images"
        As SVG is not a format supported by mobile operating systems, we have provided an ad-hoc solution that requires the addition of dedicaded SVG libraries to your project.
        
        === "iOS"
        
            Add SVG kit via Cocoapods:
            ```swift    
            pod 'SVGKit'
            ```

        === "Android"
        
            Add Pixplicity to your `build.gradle`:
            ```kotlin
            implementation 'com.pixplicity.sharp:sharp:1.1.3@aar'
            ```
        
        Once added, the Usercentrics SDK will make use of it when an SVG needs to be rendered.


![Admin Interface](../../assets/apps/branding.png){: .aligncenter .imageBorder width=600px }

Any changes to the properties available here, will only take effect with a new init of the SDK and clean/updated cache.

!!! tip "Forcing configuration updates during Testing"
    You may force a configuration update by using the [reset()](../api/core-api.md#reset) function, or by deleting the app and installing it again. **We only recommend doing this when integrating and testing the SDK**.

!!! tip "Configuration updates in Production"
    The SDK caches essential data on device after the first successful init, in order to be efficient with resources and provide offline capabilities. This cache is kept for several days, depending on app usage. Which means user's will not get "Published" changes from the Admin Interface immediately, but we can guaranty changes will take effect for 100% of your user base latest within a week. 

## Programmatic Customization
Use our **Programmatic Customization** API, to create advance banner designs and run-time variants. Using this API unlocks features like [A/B Testing](ab-testing.md#ab-testing) & Dark Mode.

??? danger "Compliance Note"
    Because the **Programmatic API** enables many customization options, it is important that your DPO (Data Protection Officer) reviews and approves the compliance of your design:

    e.g.

    * A user should always have clear options to accept, deny or save granular choices available as call to actions in the 1st or 2nd layer.
    * The **First Layer** should always allow a path to the **Second Layer**.
    * Calls to action should be equally prominent.

![Programmatic Customization](../../assets/apps/ProgrammaticCustomization.png){: .aligncenter .imageBorder width=800px }

When creating the UsercentricsUI banner, a `BannerSettings` property will be available for you to customize any element of the banner.

!!! warning "BannerSettings is an optional field for UsercentricsBanner constructor and an optional argument for the showFirstLayer and showSecondLayer methods"

=== "Swift<center><sub>iOS</sub></center>"
    ```swift
    let firstLayerStyleSettings = FirstLayerStyleSettings(
        buttonLayout =  [
            ButtonSettings(type: .acceptAll, font: UIFont(name: "Avenir", size: 15), cornerRadius: 18)
        ]
    )
    let bannerSettings = BannerSettings(generalStyleSettings: nil, //GeneralStyleSettings?
                                        firstLayerSettings: firstLayerStyleSettings,
                                        secondLayerSettings: nil //SecondLayerStyleSettings?)

    let banner = UsercentricsBanner(bannerSettings: bannerSettings)
    ```
    
=== "Kotlin<center><sub>Android</sub></center>"
    ```kotlin
    val firstLayerStyleSettings = FirstLayerStyleSettings(
        buttonLayout = ButtonLayout.Column(
            listOf(
                ButtonSettings(
                    type = ButtonType.ACCEPT_ALL,
                    textColor = Color.Red,
                    backgroundColor = Color.Blue,
                    cornerRadius = 24,
                    textSizeInSp = 15f,
                )
            )
        )
    )
    val bannerSettings = BannerSettings(
        generalStyleSettings = null, //GeneralStyleSettings?
        firstLayerSettings = firstLayerStyleSettings,
        secondLayerSettings = null, //SecondLayerStyleSettings?
    )
    
    val banner = UsercentricsBanner(context, bannerSettings)
    ```
            
=== "Dart<center><sub>Flutter</sub></center>"
    ```dart
    final firstLayerStyleSettings = FirstLayerStyleSettings(
        buttonLayout: ButtonLayout.column(buttons: [
            const ButtonSettings(
                type: ButtonType.acceptAll,
                textColor: Colors.black,
                backgroundColor: Colors.white,
                textSize: 16.0,
                cornerRadius: 32.0,
            ),
        ])
    )
    final bannerSettings = BannerSettings(
        general: null, //GeneralStyleSettings?
        firstLayer: firstLayerStyleSettings,
        secondLayer: null, //SecondLayerStyleSettings?,
    );

    // First Layer
    final response = await Usercentrics.showFirstLayer(
        settings: bannerSettings,
    );
 
    // Second Layer
    final response = await Usercentrics.showSecondLayer(
        settings: bannerSettings,
    );
    ```
        
=== "Typescript<center><sub>React Native</sub></center>"
    ```typescript
    const bannerSettings: BannerSettings = {
        firstLayerStyleSettings: {
            buttonLayout: ButtonLayout.row([
                {
                    buttonType: ButtonType.acceptAll,
                    cornerRadius: 30.0,
                    backgroundColorHex: "FFFFFF",
                    textSize: 16.0,
                    textColorHex: "000000",
                }
            ])
        },
        secondLayerStyleSettings: null,  //SecondLayerStyleSettings?
        generalStyleSettings: null  //GeneralStyleSettings?
    }

    // First Layer
    const response = await Usercentrics.showFirstLayer(bannerSettings);

    // Second Layer
    const response = await Usercentrics.showSecondLayer(bannerSettings);
    ```

??? tip "Dark Mode"
    Use the customization API to define both `light` and `dark` designs and use depending on device theme.

    ```
    let lightBannerTheme = BannerSettings(...) // define light theme
    let darkBannerTheme = BannerSettings(...) // define dark theme

    let theme = (<Device Theme Dark?>) = darkBannerTheme : lightBannerTheme
    let banner = UsercentricsBanner(theme)
    banner.showFirstLayer(hostView: self) { }
    ```

###General Style Settings

!!! warning "Style Settings values overwrite Remote Style values"

| Properties                    | Type   | Notes                                                                                                                                      |
|-------------------------------|--------|--------------------------------------------------------------------------------------------------------------------------------------------|
| textColor                     | Color  | Edit the text color for both **First Layer** and **Second Layer**.                                                                         |
| layerBackgroundColor          | Color  | Edit the color of the **First Layer**, and Header and Footer of the **Second Layer**.                                                      |
| layerBackgroundSecondaryColor | Color  | Edit the color of the background in the content section.                                                                                   |
| linkColor                     | Color  | Edit the color of all available links.                                                                                                     |
| tabColor                      | Color  | Edit the color of the Category and Services Tabs.                                                                                          |
| bordersColor                  | Color  | Edit the color for the borders of the Category and Services content section, Category and Service components and Service Information Tags. |
| toggleStyleSettings           | Object | Edit the toggle colors for: **Active**, **Inactive** and **Disabled** states.                                                              |
| font                          | Font   | Pass both **Regular** and **Bold** fonts to be used in the banner.                                                                         |
| logo                          | Image  | Pass a local image to be rendered as a logo in both **First Layer** and **Second Layer**.                                                  |
| links                         | Enum   | Customize the visibility of the legal links: **.both** (default), **.firstLayerOnly**, **.secondLayerOnly** and **.hidden**.               |
| disableSystemBackButton       | Bool   | Disable system back button.                                                                                                                |
| statusBarColor                | Color  | Edit the color of the status bar when the banner is displayed.                                                                             |

###First Layer Style Settings

| Properties      | Type                    | Notes                                                                                                                                                                                                       |
|-----------------|-------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| layout          | Enum                    | Select the Layout of the First Layer: **Sheet**, **Popup Center**, **Popup Bottom**, **Full**.                                                                                                              |
| headerImage     | Enum                    | Customize the layout of the image at the top of your banner: **.logo** (default), **.extended** or **.hidden**.                                                                                             |
| title           | Object                  | Customize the appearance of the title label: **Font**, **Text Size**, **Text Color** and **Text Alignment**.                                                                                                |
| message         | Object                  | Customize the appearance of the message label: **Font**, **Text Size**, **Text Color**, **Text Alignment**, **Link Text Color** and **Link Text Underline**.                                                |
| buttonLayout    | Enum                    | Customize the layout of the action buttons: **.column** (default), **.grid**, **.row**. You may also pass an array of [ButtonSettings](#button-settings) to define the order and appearance of the buttons. |
| backgroundColor | Color                   | Edit the color of the **First Layer** background.                                                                                                                                                           |
| cornerRadius    | Float                   | Edit the corner radius of the banner.                                                                                                                                                                       |
| overlayColor    | Color                   | Edit the color of the **First Layer** overlay.                                                                                                                                                              |

###Second Layer Style Settings

| Properties      | Type | Notes                                                                                                                                                                                                       |
|-----------------|------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| buttonLayout    | Enum | Customize the layout of the action buttons: **.column** (default), **.grid**, **.row**. You may also pass an array of [ButtonSettings](#button-settings) to define the order and appearance of the buttons. |
| showCloseButton | Bool | Show a close button in the **Second Layer** to allow users to dismiss the banner without editing consent.                                                                                                   |


###Button Settings

| Properties      | Type    | Notes                                                                                                                   |
|-----------------|---------|-------------------------------------------------------------------------------------------------------------------------|
| type            | Enum    | Select the **Button** Type: **Accept All**, **Deny All**, **More**, **Save**.                                           |
| font            | Font    | Customize the Font of the **Button** text.                                                                              |
| backgroundColor | Color   | Edit the color of the **Button** background.                                                                            |
| textColor       | Color   | Edit the color of the **Button** text.                                                                                  |
| textSizeInSp    | Float   | Edit the size of the **Button** text in Scalable Pixels (adjustable to the device screen density and users preference). |
| cornerRadius    | Int     | Edit the corner radius of the **Button**.                                                                               |
| isAllCaps       | Boolean | Change the **Button** text to be in all Uppercase.                                                                      |


###Accessibility

The text size within any font-utilizing sections (such as **GeneralStyleSettings**, **TitleSettings** and **MessageSettings**) is influenced by the device's Accessibility settings.
In this scenario, Usercentrics SDK automatically adjust the font size specified, in the Admin Interface, by the factor determined in the Accessibility settings of the respective device (Android or iOS).

#### Customizing fonts on iOS

On iOS, setting a font on any of our Programmatic Customization APIs (e.g., **GeneralStyleSettings**), the banner won't adhere to the accessibility settings specified on the device unless an scaled font is used.
Ensure that you pass a scaled font in order to conform to accessibility rules.

Example:
```swift
let fontMetrics = UIFontMetrics.default
let scaledFont = BannerFont(regularFont: fontMetrics.scaledFont(for: UIFont(...)), boldFont: fontMetrics.scaledFont(for: UIFont(...))
let generalStyleSettings = GeneralStyleSettings(font: scaledFont)
```

!!! note "Default behaviour"
    When no font is specified, the SDK defaults to the system font and the size set in the Admin Interface, ensuring compliance with accessibility standards.

#### Customizing fonts on Android

In Android, the operating system consistently respects the device's accessibility settings, regardless of the selected font size.
