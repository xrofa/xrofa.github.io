# Presenting the TV Banner

You can decide to present the **First Layer** or **Second Layer** as you deem necessary for your user experience. However, we recommend to:

* Use the **First Layer** when collecting consent for the first time. Remember that user's will be able to navigate from the **First Layer** to the **Second Layer**.
* Use the **Second Layer** for when customers want to review their choices. e.g. In your app's settings.

### Presenting the First Layer

=== "tvOS"
    ```swift
    import UsercentricsUI

    let banner = UsercentricsBanner()
    banner.showFirstLayer(hostView: self // Host UIViewController) { userResponse in
    // Handle userResponse
    }
    ```

=== "AndroidTV"
    ```kotlin
    import com.usercentrics.sdk.ui.tv.BannerSettings
    import com.usercentrics.sdk.ui.tv.UsercentricsBanner
    
    val banner = UsercentricsBanner(
        context = <Context>,
        settings = <BannerSettings?>
    )
    banner.showFirstLayer { userResponse ->
    // Handle userResponse
    }
    ```
    !!! tip "Use a valid Context"
        We are using the `Dialog` Android API for the Banner implementation. 
        It is recommended to use a `Context` that is an `Activity` or derived/wrapper from it.
        Note that the `Activity` has to be alive for the dialog to be displayed.

### Presenting the Second Layer

=== "tvOS"
    ```swift
    import UsercentricsUI

    let banner = UsercentricsBanner()
    banner.showSecondLayer(hostView: self // Host UIViewController) { userResponse in
    // Handle userResponse
    }
    ```

=== "AndroidTV"
    ```kotlin
    import com.usercentrics.sdk.ui.tv.BannerSettings
    import com.usercentrics.sdk.ui.tv.UsercentricsBanner
    
    val banner = UsercentricsBanner(
        context = <Context>,
        settings = <BannerSettings?>
    )
    banner.showSecondLayer { userResponse ->
        // Handle userResponse
    }
    ```

    !!! tip "Use a valid Context"
        We are using the `Dialog` Android API for the Banner implementation. 
        It is recommended to use a `Context` that is an `Activity` or derived/wrapper from it.
        Note that the `Activity` has to be alive for the dialog to be displayed.

## Handling User Response

After a user provides their consent choices, you will receive a [UsercentricsConsentUserResponse](../apps/integration/collect-consent.md#handling-userresponse) object in the banner presentation callback. This object will provide you with all the information you need in order to [apply consent](../apps/integration/apply-consent.md), make decisions based on the user's interaction or store the user's ControllerID if you wish to support [Cross-Device Consent Sharing](../apps/features/restore-user-sessions.md).
