For Interaction Analytics the following interactions with the CMP are tracked as events and sent along with additional data to the backend.

## Events

| Event             | Description                                            |
| ----------------- | ------------------------------------------------------ |
| **CMP_SHOWN**     | CMP displayed to the user                              |
| **ACCEPT_ALL_L1** | User clicked the Accept-All button on the first Layer   |
| **DENY_ALL_L1**   | User clicked the Deny-All button on the first Layer     |
| **SAVE_L1**       | User clicked the Save button on the first Layer         |
| **ACCEPT_ALL_L2** | User clicked the Accept-All button on the second Layer |
| **DENY_ALL_L2**   | User clicked the Deny-All button on the second Layer   |
| **SAVE_L2**       | User clicked the Save button on the second Layer       |

## Additional Events

These events are not being used on the dashboards, but they are available on the [downloadable report](./csv-download.md).

| Event                     | Description                                            |
| ------------------------- | ------------------------------------------------------ |
| **CCPA_TOGGLES_OFF**      | User clicked on the OK button while CCPA toggle is off |
| **CCPA_TOGGLES_ON**       | User clicked on the OK button while CCPA toggle is on  |
| **PRIVACY_POLICY_LINK**   | User clicked on the privacy policy link                |
| **IMPRINT_LINK**          | User clicked on the legal notice link                  |
| **MORE_INFORMATION_LINK** | User clicked on the more info link                     |

!!! info ""
    Whenever the CMP is displayed, we measure a `CMP_SHOWN` event. Once the user gave a choice by clicking any CMP button or triggering any programmatic methods, we measure the choice as an event: `ACCEPT_ALL`, `DENY_ALL`, or `SAVE`

!!! warning ""
    Please note that the Usercentrics Interaction Analytics tracks interactions with the CMP. We do not measure website views or bounces.

## Examples

#### A new user visits the website for the first time and clicks on the Accept-All button

!!! check "Events"
    `CMP_SHOWN` and `ACCEPT_ALL`

***

#### The same user comes back the next day and the CMP does not get displayed again

!!! check "Events"
    No event

***

#### The same user now clicks on the Privacy Button to check their current Privacy Settings and closes it afterwards

!!! check "Events"
    `CMP_SHOWN`

***

#### The same user now clicks on the Privacy Button to check their current Privacy Settings and clicks on the Save Button afterward

!!! check "Events"
    `CMP_SHOWN` + `SAVE`

***