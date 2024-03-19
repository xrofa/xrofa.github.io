# Installing the TV SDK

=== "tvOS"

    #### Requirements
    * tvOS 11.0 or higher

    ## Using CocoaPods

    1. On your Podfile, add the following line:
        ```bash
        platform :tvos, '11.0'
        use_frameworks!  
    
        pod 'UsercentricsUI'
        ```

    2. On the root directory of your project, run the following command to install the pod.
        ```bash
        pod install
        ```

    3. Open your .xcworkspace file.
    4. 🚀 You are ready to start the SDK integration.

    ## Using Swift Package Manager (SPM)

    1. On Xcode, Select File > Swift Packages > Add Package Dependency.

    2. Enter the package repository URLs:
        ```bash
        https://bitbucket.org/usercentricscode/usercentrics-spm-ui
        ```

    3. Select the version you would like to use. We recommend sticking to "Up to Next Major" with the latest release as minor version.
    4. 🚀 You are ready to start the SDK integration.

=== "AndroidTV"

    ####Requirements
    * Android 4.1 (API 16) and higher

    !!! warning "Android minimum SDK Version"
        Support for versions lower than Android 5.0 (API Level 20) is planned to be removed in releases starting from end of March/24
    

    ##Using Gradle
    1. Add the dependency to your app's build.gradle:
        ```kotlin
        dependencies {
            implementation "com.usercentrics.sdk:usercentrics-tv"
        }
        ```
    
    2. 🚀 You are ready to start the SDK integration. 
