
!!! question "How long can the data for Interaction Analytics be accessed in the Admin Interface?"
    For both Interaction Analytics & Consent Analytics, the data for the last 90 days can be accessed in the Admin Interface.

!!! question "How do you handle bot traffic?"
    Events triggered by bots will be recognized and counted by our product and appear in your Raw Data Download CSV with "browser" = “bot”. The dashboard in your Admin Interface won't include any bot traffic for accurate KPI measurement. Information on which bots are detected for Interaction Analytics can be found in the following [FAQ](https://usercentrics.atlassian.net/wiki/spaces/SKB/pages/2311094403/How+do+I+know+which+bots+are+being+detected+and+excluded+from+the+Interaction+Analytics+graphs).

!!! question "How do you handle page reloads?"
    In case the page is being reloaded, resulting in the CMP being shown again to the user, we count a second `CMP_SHOWN`.

<!-- !!! question "How can I use Interaction Analytics with my custom UI?"
    In case you want to use Interaction Analytics with your own custom UI, make sure to implement the method [TRACKING_EVENT_TYPE](https://docs.usercentrics.com/cmp_browser_sdk/3.4.0/enums/TRACKING_EVENT_TYPE.html) for web or the following [events](https://docs.usercentrics.com/cmp_in_app_sdk/latest/features/interaction-analytics/) for app. -->

!!! question "How can I calculate the Interaction and Acceptance rates across platforms (web / app)?"
    When using a configuration for app and web, the Interaction Analytics graphs already show the combined values. In the raw data, however, a distinction is made between the first layer (L1) and the second layer (L2) for web. In order to manually calculate a common rate for web and app from the raw data (also for different configurations), the following formulas result:

    !!! note "Interaction Rate across platforms"
        $\frac{\texttt{ACCEPT_ALL_L1}+\texttt{ACCEPT_ALL_L2}+\texttt{ACCEPT_ALL}+\texttt{DENY_ALL_L1}+\texttt{DENY_ALL_L2}+\texttt{DENY_ALL}+\texttt{SAVE_L1}+\texttt{SAVE_L2}+\texttt{SAVE}}{\texttt{CMP_SHOWN}}$

    !!! note "Accept Rate across platforms"
        $\frac{\texttt{ACCEPT_ALL_L1}+\texttt{ACCEPT_ALL_L2}+\texttt{ACCEPT_ALL}}{\texttt{ACCEPT_ALL_L1}+\texttt{ACCEPT_ALL_L2}+\texttt{ACCEPT_ALL}+\texttt{DENY_ALL_L1}+\texttt{DENY_ALL_L2}+\texttt{DENY_ALL}+\texttt{SAVE_L1}+\texttt{SAVE_L2}+\texttt{SAVE}}$