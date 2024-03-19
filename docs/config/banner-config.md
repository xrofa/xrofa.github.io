# Setting up a Banner Configuration

From your **Configurations Dashboard**, select any configuration, and a new window will open. This is your **Banner Configuration Dashboard**:

## Configuration

=== "Setup"
    Here you will find the **mandatory** fields:

    * **Configuration Name:** Give your configuration a meaningul name to easily identify it.
    * **Data Controller:** Name of legal entity collecting consent. 

    * **Domain Settings: [Web Configurations only]** Domains where banner should be permitted.
    * **Published Apps: [App Configurations only]** Declair published apps to enable App Scanner.
    
    and Language Settings:
    
    * **Language Settings:** Languages that will be available when adding translations. 
    * **Visible Languages:** Languages the CMP will support and will be available in the language toggle.

=== "Legal Specifications"
    Depending the selected **legal framework**, this section will show options related to the regulation.

=== "CMP Settings"
    Find CMP settings to enable functionality such as: 

    * Cross-Domain Consent Sharing [Web]
    * Google Consent Mode, 
    * Banner Resurfacing options
    * Bot Detection[Web].

## Service Settings

=== "DPS & App Scanner"
    
    For both **Websites and published mobile Apps**, we provide a scanner that will identify third party technologies and map them to Data Processing Services, that you can add to your configuration in a few steps.

=== "Data Processing Services"
    A **Data Processing Service (DPS)** represents any third party vendor or technology running on your website or mobile app. 

    There are 4 ways to add a DPS:

    * **Add a DPS via Scanner Results:** When running a scan, results will be presented to you, and you may add DPSs directly from there.
    * **Add a DPS via Database:** Search for a DPS by the vendor's name on our database. e.g. Adjust, Firebase, Twitter, etc.
    * **Create a Custom DPS:** If you have custom technologies or your legal team would like to have more control over the languages used in the DPS, you may create new ones from scratch.
    * **Customize Predefined Service:** Create your own DPS, starting with an already existing template.

=== "Global Vendor List"

    !!! warning "Only for TCF configurations"

    Declare TCF certified vendors in order to pass consent via the TCString. Please consider that if you declare a vendor in the Global Vendor List, you **do not** need to add them again as a DPS.

=== "Categories"
    Bundle Data Processing Services in Categories for easier user overview:

    * Categories for **Marketing, Functional and Essential** are set by default, but you can create, modify and delete categories as you need.
    * All **Data Processing Services** need to be assigned to a category.

## Appearance

=== "Layout"
    Here you will find a set of different banner layouts that you can use to render your banner, as well as customization options for the UI.

=== "Styling"
    Customize the style of your banner:

    * **Colors:** Set colors for Tabs and Button Text and Background individually.
    * **Font:** Set fonts and size for the text of the CMP. Note that the device system needs to support the font in order for this setting to work, otherwise, please inject your font programmatically.
    * **Logo:** Provide a .png image URL that can be rendered at the top of the banner. Position can also be edited.

## Content
=== "First Layer"
    Define content and links for the Banner's First Layer:

    * **Title:** Header title of First Layer.
    * **Banner Message:** Use this space to clarify why you need to track user data and what kind of data you are tracking. 
    * **Imprint & Privacy Links:** Provide links to your legal documents. Links & titles can be edited, if you would like to expose other links. 

=== "Second Layer"
    Define content for the Banner's Second Layer:

    * **Title:** Header title of Second Layer.
    * **Description:** Use this space to provide a description of the services you use and their purpose. 

=== "Labels"
    Customize and provide translations:
    
    * **Buttons:** Edit the labels and add translations to all action buttons in the CMP.
    * **History:** Edit the labela and add translations to history entries found in each service description.

## Analytics
=== "Interaction Analytics Overview"

    These dasboards will give you an overview of your user's behaviour:

    * **Displays:** Times the banner has been shown.
    * **Interactions:** Times users have saved consent in any direction.
    * **Ignores:** Displays - Interactions. This number needs to be interpreted depending on your configuration.

    The second dashboard "User Acceptance" will give you a distribution of the type of interactions customers had with your banner. e.g. Accept, Deny, Custom.

=== "Interaction Analytics Comparison"

    Get a comparison board to segregate users consent by country, device type and even banner layer.

## Integrations

A marketplace of third party integrations that you can enable with Usercentrics.

## Implementation

An overview on how to implement the Web or App SDKs, Version History and A/B Testing.


## Do you need further help?
See our [Customer Support Portal](https://usercentricssupport.zendesk.com/hc/)
