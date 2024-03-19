### Introduction

The following methods can be accessed on the following object that the CMP registers on the window object in the browser:

```typescript
  window.__ucCmp
```

### acceptAllConsents

Programmatic way to accept all consents

```typescript
  window.__ucCmp.acceptAllConsents()
```

| Input | Return Type     |
| ----- | --------------- |
| -     | `Promise<void>` |

***

### changeLanguage

Programmatic way to change the language in the CMP

!!! note ""
    Two character country code, e.g. "en" = set language to English


```typescript
  window.__ucCmp.changeLanguage(language)
```

| Input    | Input Type | Return Type     |
| -------- | ---------- | --------------- |
| language | string     | `Promise<void>` |

### denyAllConsents

Programmatic way to deny all consents

```typescript
  window.__ucCmp.denyAllConsents()
```

| Input | Return Type     |
| ----- | --------------- |
| -     | `Promise<void>` |

***

### getActiveLanguage

Programmatic way to get the currently selected language in the CMP 

```typescript
  window.__ucCmp.getActiveLanguage()
```

| Input | Return Type       |
| ----- |-------------------|
| -     | `Promise<string>` |

***

### getConsentDetails

Retrieves all the [Consent Details](./interfaces.md#consentdetails) 

```typescript
  window.__ucCmp.getConsentDetails()
```

| Input | Return Type                 |
| ----- | --------------------------- |
| -     | `Promise<ConsentDetails>`   |

***

### getControllerId

Programmatic way to get the Controller ID

```typescript
  window.__ucCmp.getControllerId()
```

| Input | Return Type       |
| ----- |-------------------|
| -     | `Promise<string>` |

***

### isConsentRequired

Programmatic way to to check if consent is required (no consent given or resurface). Return value is only available after UI has initialized.

```typescript
  function customConsentHandler(consentIsRequired) {
    console.log('consentIsRequired', consentIsRequired);
  }

  if (!window.__ucCmp || !__ucCmp.isInitialized()) {
      window.addEventListener('UC_UI_INITIALIZED', function() {
          customConsentHandler(__ucCmp.isConsentRequired());
      });
  } else {
      const isConsentRequired = await __ucCmp.isConsentRequired()
      customConsentHandler(isConsentRequired);
  }
```

| Input | Return Type       |
| ----- |-------------------|
| -     | `Promise<boolean>` |

***

### isInitialized

Programmatic way to check if the app is initialized

```typescript
  const isInitialized = await window.__ucCmp.isInitialized()
  if (isInitialized) {
  console.log('CMP is already initialized');
} 
```

| Input | Return Type       |
| ----- |-------------------|
| -     | `Promise<boolean>` |

***

### saveConsents

Saves the consents after being updated.

```typescript
  window.__ucCmp.saveConsents()
```

| Input | Return Type     |
| ----- | --------------- |
| -     | `Promise<void>` |

***

### updateCategoriesConsents

Updates consents for whole categories of services

```typescript
const categoriesConsents = [
    {id: 'marketing', consent: true}, // Marketing Category
    {id: 'functional', consent: false}, // Functional Category
]

window.__ucCmp.updateCategoriesConsents(categoriesConsents)
```

| Input              | Input Type         | Return Type     |
| ------------------ | ------------------ | --------------- |
| categoriesConsents | CategoriesConsents | `Promise<void>` |

***

### updateServicesConsents

Updates consents for individual or multiple services

```typescript
const serviceConsents = [
    {id: 'HkocEodjb7', consent: true}, // Google Analytics
    {id: 'S1_9Vsuj-Q', consent: false}, // Google Ads
]

await __ucCmp.updateServicesConsents(serviceConsents);
```

| Input            | Input Type        | Return Type     |
| ---------------- | ----------------- | --------------- |
| servicesConsents | ServicesConsents  | `Promise<void>` |

***

### updateTcfConsents

Programmatic way to update TCF consents

```typescript
  window.__ucCmp.updateTcfConsents(tcfConsents)
```

| Input        | Input Type  | Return Type     |
|--------------|-------------| --------------- |
| tcfConsents | TCFConsents | `Promise<void>` |








