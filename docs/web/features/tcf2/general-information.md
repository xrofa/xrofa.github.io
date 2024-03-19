# General Information

The Usercentrics CMP is IAB TCF 2.2 certified and therefore meets the requirements of the specification of the IAB TCF 2.0 framework.

The standard regulates how user consent information has to be captured and used within the programmatic advertising ecosystem, with the goal of a frictionless functioning of the ecosystem through following a standardised approach of implementing data privacy regulations.

We are briefly explaining here some key concepts of the framework:

!!! summary ""
    The tcString is a technical concept which encodes the consent information in a machine readable format. The tcString contains all required information for any system in the ecosystem to validate what consent has been given by a user and what processing is allowed based on that. The tcString is generated and provided by a CMP at the point where users make consent decisions. Each vendor service that collects data must take the information encoded in the tcString into account and decide if and what consent the user has given.

!!! summary ""
    The TCF 2.2 API is the technical concept that allows the vendors integrated in a website or app to interact with the CMP in order to e.g. obtain the tcString in a standardised way. Any IAB TCF 2.0 certified CMP implements this API.

!!! summary ""
    The Global Vendor List (GVL) is a list of all service vendors who registered for the IAB TCF 2.2 framework. By registering for the TCF 2.0 framework these vendors confirm that they comply with the framework policies. The list is maintained by the IAB and regular updates are provided, typically on a weekly basis. The list contains all necessary information about the vendors, that is required by the framework such as descriptions of the services and the data the service uses, the purposes for which the service uses the data, the duration of operation of cookies or similar information that the service stores on a user’s device.

!!! summary ""
    The TCF 2.2 framework also prescribes rather strict UX behaviours for CMPs. This impacts the design but also the content shown in a CMP and leaves little room for own optimisation. Aspects like the contrast ratio of colours and the messages that must be shown to users at certain layers of the CMP dialogues are some examples of clearly specified conditions to be met.

!!! summary ""
    TCF 2.2 follows the Service-Specific Scope. The Service-Specific Scope means that a user given consent applies only to the specific website/app and cannot be propagated to other sites. This is the scope that is broadly supported within the ad tech ecosystem and the Usercentrics CMP

***

!!! hint ""
    For further and more detailed reading on the TCF 2.2 framework, please visit this [page](https://usercentrics.com/knowledge/understanding-the-iab-framework-in-15-minutes/).