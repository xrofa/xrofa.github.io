The following dashboard provide distinctive insights into your users' behaviour with the CMP.

## User Interaction KPIs
Get insights on the received responses for your CMP layers.

![User Interaction KPIs](../../../assets/web/interaction-analytics/interaction-analytics2.png)

!!! success ""
    - **CMP Displays:** The amount of CMP_SHOWN events for the selected time range and filter
    - **CMP Interactions:** The amount of user consent interactions (${\texttt{ACCEPT_ALL} + \texttt{DENY_ALL} + \texttt{SAVE}}$)
    - **CMP Ignores:** The difference between the shown CMP and actual interactions from users (${\texttt{CMP_SHOWN} - (\texttt{ACCEPT_ALL} + \texttt{DENY_ALL} + \texttt{SAVE})}$)
    - **Interaction Rate:** How many (in %) events were actual interactions



## Interactions vs. Ignores
Get insights on the Interaction performance of your current CMP configuration.

![Interactions vs. Ignores](../../../assets/web/interaction-analytics/interaction-analytics3.png)

!!! note ""
    This graph compares the number of consent interactions (ACCEPT_ALL + DENY_ALL + SAVE) vs ignores.

## Daily Interaction Rate
Get detailed insights on the Interaction rate over time.

![Daily Interaction Rate](../../../assets/web/interaction-analytics/interaction-analytics4.png)

!!! success ""
    - Daily statistics on Interactions.
    - Compare Interaction peaks with CMP shown peaks for an even better understanding of the data
    - Compare the Interaction distribution to changes you made to your setup on a certain day

## Displays vs. Interactions
Get a granular view of the total number of CMP displays vs consent interactions.

![Displays vs. Interactions](../../../assets/web/interaction-analytics/interaction-analytics5.png)

!!! note ""
    Daily total numbers on displays & interactions.

## User Acceptance KPIs
Get insights into the type of interaction the users have with the banner.

![User Acceptance KPIs](../../../assets/web/interaction-analytics/interaction-analytics6.png)

!!! success ""
    - **Accept All:** The amount of ACCEPT_ALL events for the selected time range and filter
    - **Deny All:** The amount of DENY_ALL events for the selected time range and filter
    - **Custom:** The amount of SAVE events for the selected time range and filter
    - **Accept Rate:** How many (in %) consent events were actual Accepts ($\frac{\texttt{ACCEPT_ALL}}{\texttt{ACCEPT_ALL} + \texttt{DENY_ALL} + \texttt{SAVE}}$)

## Accept vs. Deny vs. Custom
Get insights into the consent interaction distribution.

![Accept vs. Deny vs. Custom](../../../assets/web/interaction-analytics/interaction-analytics7.png)

!!! note ""
    Compares the weights between the different consent interactions (ACCEPT_ALL vs DENY_ALL vs SAVE).

## Daily Accept Rate
Get detailed insights on the accept rate over time.

![Daily Accept Rate](../../../assets/web/interaction-analytics/interaction-analytics8.png)

!!! success ""
    - Daily statistics on Accept rate.
    - Compare Accept peaks with CMP shown peaks for an even better understanding of the data
    - Compare the Accept rate distribution to changes you made to your setup on a certain day.

## Accept All vs Deny All vs Custom (Total)
Get a granular view of the total number of the different consent interactions.

![Accept All vs Deny All vs Custom (Total)](../../../assets/web/interaction-analytics/interaction-analytics9.png)

!!! note ""
    Daily total numbers on Accept All vs Deny All vs Custom choice.

## Comparison Overview
Compare your interaction & acceptance rate over the different dimensions such as country, device, layer and variant (if A/B testing is activated).

![Comparison Overview](../../../assets/web/interaction-analytics/interaction-analytics10.png)

!!! success ""
    - Identify optimization needs for specific devices in order to optimize the overall rates.
    - Understand if specific banner configurations are required for specific countries.
    - Understand if there is a need to further optimize the 1st or 2nd layer of your CMP.
    - Have a straightforward overview of which A/B testing variant is performing better.