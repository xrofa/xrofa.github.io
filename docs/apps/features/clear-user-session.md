# Clearing User Session

### Overview

This feature enables the clearing of previously granted user consents, which proves beneficial in scenarios involving applications or games that offer sign-out functionality,
allowing users to terminate their session. 

By removing the consents granted by the previous user, this feature ensures a smooth transition for the next user, eliminating the necessity to reset and reinitialize the SDK.

!!! note "Remote consents will not be deleted"
    This feature solely clears the session stored on the local device; all user consents, which can be retrieved using their controllerId, will remain stored on our servers.

### Examples of Use Cases

* **Sign-Out and Sign-In Flow**: If a login occurs and the current user is not associated in your system with a controllerId (which would indicate that their consents can be restored),
  the Clear User Session function should be called

* **Delete user data**: If your app or game includes a feature to delete local user data, this method offers an optimized approach to clear user data while
keeping the SDK prepared to collect new consents

## Implementation Guide

!!! warning "Loaded Settings will be kept"
    Since this feature will not reinitialize the SDK, all the Settings loaded by the settingsId or rulesetId previously used will be kept. 

#### Steps for Implementation

1. **API Invocation**: Call the `clearUserSession` API.
2. **Session Cleanup Callback**: After invoking the API, ensure to verify the successful cleaning of the session.
If the cleaning process fails, prompt the user to provide their consents again.

## Implementation

You can clear a user session in all Usercentrics supported platforms.

=== "Swift<center><sub>iOS</sub></center>"   
         
    ```swift
    UsercentricsCore.shared.clearUserSession(onSuccess: { status in
        // This callback is equivalent to isReady API
    }, onError: { error in
        // Handle non-localized error
    }
    ```
        
=== "Kotlin<center><sub>Android</sub></center>"
    
    ```kotlin
    Usercentrics.instance.clearUserSession({ status ->
        // This callback is equivalent to isReady API
    }, { error ->
        // Handle non-localized error
    })
    ```

=== "Dart<center><sub>Flutter</sub></center>"

    ```dart
    try {
      final status = await Usercentrics.clearUserSession();
      // This callback is equivalent to isReady API
    } catch (error) {
      // Handle non-localized error
    }
    ```

=== "Typescript<center><sub>React Native</sub></center>"

    ```typescript
    import { Usercentrics } from '@usercentrics/react-native-sdk';

    try {
      const status = await Usercentrics.clearUserSession();
      // This callback is equivalent to isReady API
    } catch (error) {
      // Handle non-localized error
    }
    ```

=== "C#<center><sub>Unity</sub></center>"

    ```c#
    Usercentrics.Instance.ClearUserSession((status) => {
        // This callback is equivalent to isReady API
    }, (errorString) => {
        // Handle non-localized error
    });
    ```

## Best Practices

#### Avoid Routine Invocation

* Ensure this API is called only when necessary, as invoking it excessively could burden your end-users' experience
* Within the context of signing in and out, you can eliminate the need to call this API by restoring a user session directly.
Check out [this page](./restore-user-sessions.md#graphical-overview) for more detailed instructions
