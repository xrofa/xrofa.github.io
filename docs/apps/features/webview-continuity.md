# WebView User Session Continuity

For cases where your app uses WebViews, we provide a mechanism to inject a user session, so that the CMP on the WebView is not shown every time the user opens it.

To implement this feature the SDK offers the method `getUserSessionData`, which returns a String (JSON) with the user session.

=== "Swift<center><sub>iOS</sub></center>"

    This data must then be injected into a global variable called `UC_UI_USER_SESSION_DATA` in your WKWebView. 
         
    ```swift
    let sessionData = UsercentricsCore.shared.getUserSessionData()
    
    let script = """
    window.ucMobileSdk = {
        getUserSessionData: function() {
            return '\(sessionData)';
        }
    }
    """

    let userScript = WKUserScript(source: script, injectionTime: .atDocumentStart, forMainFrameOnly: true)
    let contentController = WKUserContentController()
    contentController.addUserScript(userScript)
    
    let preferences = WKPreferences()
    preferences.javaScriptEnabled = true
    
    let webConfiguration = WKWebViewConfiguration()
    webConfiguration.preferences = preferences
    webConfiguration.userContentController = contentController
    
    webView = WKWebView(frame: .zero, configuration: webConfiguration)
    webView.uiDelegate = self
    
    let myURL = URL(string:"https://<some_url>")
    let myRequest = URLRequest(url: myURL!)
    webView.load(myRequest)
    ```

=== "Kotlin<center><sub>Android</sub></center>"

    This data must be injected using a `JavaScriptInterface` with a method `getSessionData`.
    
    ```kotlin
    webView.settings.javaScriptEnabled = true
    webView.settings.domStorageEnabled = true
    
    webView.addJavascriptInterface(SampleJavascriptInterface(userSessionData), "ucMobileSdk")
    webView.loadUrl("https://<some_url>")
    ```
    
    ```kotlin
    class SampleJavascriptInterface(private val userSessionData: UserSessionData) {
    
        @JavascriptInterface
        fun getUserSessionData(): String? {
            return userSessionData
        }
    }
    ```

=== "Dart<center><sub>Flutter</sub></center>"

    This data must then be injected into a global variable called `UC_UI_USER_SESSION_DATA`. However due to the `webview_flutter` library limitations, it is important that you guarantee in some way or another that the data is available at the time the Usercentrics script is executed in the webview. For example:

    ```dart
    FutureBuilder<String>(
      future: Usercentrics.userSessionData,
      builder: (context, snapshot) {
        final userSessionData = snapshot.data;
        if (userSessionData == null) return const SizedBox();
        return WebView(
          onWebViewCreated: (WebViewController controller) async {
            this.controller = controller;
            await controller.loadFlutterAsset('assets/webview_index.html'); // loadUrl or whatever
          },
          onPageFinished: (String url) async {
            await controller?.runJavascript("""
            window.UC_UI_USER_SESSION_DATA = $userSessionData;
            window.dispatchEvent(new Event('Usercentrics_userSessionData_injected'));
            """);
          },
          javascriptMode: JavascriptMode.unrestricted,
          debuggingEnabled: true,
        );
      }),
    )
    ```
    ```javascript
    function addUsercentricsScript() {
        var settingsId = 'Yi9N3aXia';
        var script = document.createElement('script');
        script.id = 'usercentrics-cmp';
        script.setAttribute('data-settings-id', settingsId);
        script.setAttribute('src', 'https://app.usercentrics.eu/browser-ui/latest/bundle_legacy.js');
        script.async = true;
        document.head.appendChild(script);
    }
    
    window.addEventListener("Usercentrics_userSessionData_injected", function() {
        addUsercentricsScript();
    });
    ```

    See more [here](https://github.com/Usercentrics/flutter-sdk/blob/master/example/lib/webview_integration.dart).

=== "Typescript<center><sub>React Native</sub></center>"

    This data must then be injected into a global variable called `UC_UI_USER_SESSION_DATA` in your WebView `injectedJavaScriptBeforeContentLoaded` property. 

    ```typescript
    <WebView
        javaScriptEnabled={true}
        domStorageEnabled={true}
        injectedJavaScriptBeforeContentLoaded={`window.UC_UI_USER_SESSION_DATA = ${userSessionData};`.toString()}
        source=... />
    ```

    See more [here](https://github.com/Usercentrics/react-native-sdk/blob/master/example/src/screens/WebviewIntegrationScreen.tsx).


??? danger "This feature is intended to be used with a single SettingsID"
    For seamless integration and support, it is imperative that the SDK utilized within your application employs the same SettingsID as the one implemented within the WebView.
    The utilization of divergent SettingsIDs between the SDK and WebView are not supported by the SDK.


### WebView Banner and the Native SDK

When displaying a WebView and adhering to the provided instructions, it's important to note that any changes to consent made by the user within the Web banner will not automatically be reflected in the Native SDK.
This means that if a user alters their consent settings, these changes won't be communicated back to the native environment of your application.

To ensure that your application's functionality remains unaffected by these potential discrepancies, it's crucial to implement a mechanism that re-synchronizes consent statuses whenever the WebView is dismissed.
This proactive approach will help maintain consistency across your application's consent management processes.


!!! warning "Compatibility"
    User Session injection is only supported if your WebView is running version **1.4.0 or higher** of the Usercentrics Browser SDK.
