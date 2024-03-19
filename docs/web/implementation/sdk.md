## Introduction

With the Usercentrics Web CMP SDK our aim is to provide a lightweight library which enables you to build your own fully customiziable Consent Solution, while still leveraging the backend infrastructure that we provide at Usercentrics.

!!! tip ""
    Follow this guide in order to have the Browser SDK fully prepared for your own UI design in no time.

!!! note ""
    Looking for supported attributes? 
    You can find them in the following links:
    
    - [Classes](./sdk/classes.md) 
    - [Enums](./sdk/enums.md) 
    - [Interfaces](./sdk/interfaces.md) 
    - [Types](./sdk/types.md) 

## Integrate the Browser SDK

### Installing the dependency

For starters, you will need to install the dependency. For that use the following command:

``` bash
npm install @usercentrics/cmp-browser-sdk --save
```

### Creating the Browser SDK Instance

To initialize the BrowserSDK class, please use the following:

=== "Without InitOptions"

    ``` typescript
    import { BrowserSdk } from '@usercentrics/cmp-browser-sdk';

    const browserSdk = new BrowserSdk();
    ```

=== "With InitOptions"

    !!! note ""
        InitOptions definition available [here](#initoptions)

    ``` typescript
    import { BrowserSdk } from '@usercentrics/cmp-browser-sdk';

    const initOptions = {
      disableTracking: false,
      euMode: true,
      language: "en",
      location: {
        country: "DE",
        region: "BY",
        city: "",
      },
      sandbox: false
    }

    const browserSdk = new BrowserSdk(initOptions);
    ```

### Initialize

Now with the BrowserSDK instance we can initialize the SDK.
There are two methods you can choose between on how to initialize the SDK: via RulesetId or SettingsId.

!!! note ""
    Both methods can also receive the controllerId as an optional parameter

=== "SettingsId"

    ``` typescript
    const settingsId = "/* YOUR SETTINGSID */";
    const controllerId = "/* OPTIONAL CONTROLLER ID */"
    const cmpController = await browserSdk.initBySetting(settingsId);
    const cmpController = await browserSdk.initBySetting(settingsId, controllerId);
    ```

=== "RulesetId"

    ``` typescript
    const rulesetId = "/* YOUR RULESETID */";
    const controllerId = "/* OPTIONAL CONTROLLER ID */"
    const cmpController = await browserSdk.initByRuleSet(rulesetId);
    const cmpController = await browserSdk.initByRuleSet(rulesetId, controllerId);
    ```

## Using the Browser SDK

### Getting the initial view

Now that you have your `cmpController` ready, you can check which view you should show.

``` typescript
const { ui } = cmpController;

switch (ui.initialView) {
  case 'button':
    // Show the Privacy Button
    break;
  case 'first':
    // Show the First Layer
    break;
  case 'second':
    // Show the Second Layer
    break;
  default:
    break;
}
```



