### Introduction

The following methods can be accessed through the window function that should be present:

```typescript
  window.__ucCmp
```

To check Interfaces, Types, ENUMS, please refer to the [Interfaces](./interfaces.md) page.

### closeCmp

Programmatic way to close the CMP

```typescript
  window.__ucCmp.closeCmp()
```

| Input | Return Type     |
| ----- | --------------- |
| -     | `Promise<void>` |

***

### refreshScripts

Programmatic way to recheck the unblocking of scripts
e.g. for Single Page Applications that add script tags dynamically

```typescript
  window.__ucCmp.refreshScripts()
```

| Input | Return Type     |
| ----- | --------------- |
| -     | `Promise<void>` |


***

### showFirstLayer

Programmatic way to show the First Layer

```typescript
  window.__ucCmp.showFirstLayer()
```

| Input | Return Type     |
| ----- | --------------- |
| -     | `Promise<void>` |

***

### showSecondLayer

Programmatic way to show the Second Layer

```typescript
  window.__ucCmp.showSecondLayer()
```

| Input | Return Type     |
| ----- | --------------- |
| -     | `Promise<void>` |

***

### showServiceDetails

Programmatic way to show the details of a service

```typescript
  window.__ucCmp.showServiceDetails(serviceId)
```

| Input     | Input Type | Return Type     |
|-----------|------------| --------------- |
| serviceId | string     | `Promise<void>` |

***

### Suppress the CMP (UC_UI_SUPPRESS_CMP_DISPLAY)

Programmatic way to suppress the CMP via JavaScript. Add it before the CMP Script.

```html
  <script type="application/javascript">
    var UC_UI_SUPPRESS_CMP_DISPLAY=true;
  </script>
```

***

### updateThemes

Programmatic way to update the Themes

```typescript
  window.__ucCmp.updateThemes(themeData)
```

| Input     | Input Type | Return Type     |
| --------- | ---------- | --------------- |
| themeData | ThemeData  | `Promise<void>` |