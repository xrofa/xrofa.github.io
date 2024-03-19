!!! danger ""
    This is an event that serves as a retrocompatibility if you're coming from V2, we suggest to use [UC_CONSENT](./uc-consent.md) event if you're not migrating from V2.

Usercentrics provides Data Layer and Window events that specifically fire on consent changes.

!!! hint ""
    You can check the contents of the dataLayer by using `window.dataLayer`

Below the structure of the `consent_status` is represented:

```typescript
{
    "action": "onInitialPageLoad",
    "event": "consent_status",
    "type": "EXPLICIT",
    "Service One": true,
    "Usercentrics Consent Management Platform": true,
    "Service Two": false,
    "ucCategory": {
      "essential": true,
      "functional": false,
      "marketing": null,
    },
    (...)
}
```

| Property           | Description                                                                    |
| ------------------ | ------------------------------------------------------------------------------ |
| **action**         | The action that triggered the event                                            |
| **event**          | Name of the event (`consent_status`)                                           |
| **type**           | Type of the event                                                              |
| **ucCategory**     | Object containing the identifier of all the categories and their consent status |
| **`SERVICE_NAME`** | Entry that contains the status of the service                                 |


### action
The action that triggered the event.
Below are all the possible values for this property:

| Value | Description |
| - | - |
| **onAcceptAllServices**    | Triggered once you click “Accept All” |
| **onDenyAllServices**      | Triggered once you click “Deny All”   |
| **onEssentialChange**      | |
| **onInitialPageLoad**      | Triggered on page load                |
| **onNonEURegion**          |                                       |
| **onSessionRestored**      | Triggered in one of these three situations: <ul><li>When you replace current consents by using a given Controller ID </li><li>When you use Cross Domain Consent Sharing </li><li>Via WebView User Session Continuity</li></ul> |
| **onTcfStringChange**      |                                       |
| **onUpdateServices**       | Triggered once you edit a specific set of services or a single service and these choices are saved. |
| **onMobileSessionRestore** |                                       |

### type
Type of the event.
Below are all the possible values for this property:

| Value          | Description                                   |
| -------------- | --------------------------------------------- |
| **`IMPLICIT`** | When the user didn't interact with the banner |
| **`EXPLICIT`** | When the user actively gives any type of consent   |

### ucCategory
Object containing the identifier of all the categories and their consent status.
The consent status in this object can either be:

| Value       | Description                                                       |
| ----------- | ----------------------------------------------------------------- |
| **`true`**  | If all services belonging to this category have the state `true`  |
| **`false`** | If all services belonging to this category have the state `false` | 
| **`null`**  | If services belonging to this category have mixed consent states: e.g. Marketing: null if one service is false while other services in this category are true |







