
The `UC_UI_CMP_EVENT` event is triggered by the most important actions that can be performed in the CMP, enabling you to listen to user interactions.

!!! tip ""
    This event might prove useful when trying to compare the different variants when using the AB testing feature

The structure of the detail (`event.detail`) is the following:
```typescript
{
  abTestVariant: undefined,
  source: "second",
  type: "CMP_SHOWN"
}
```

### abTestVariant
String that identifies the AB Test Variant currently in use, if none, the value will be `undefined`.

### source
Where the event was triggered, it can be:

| Source       | Description                                       |
| ------------ | ------------------------------------------------- |
| "none"       | Triggered when the CMP was not being shown        |
| "button"     | Triggered when the Privacy Button was being shown |
| "first"       | Triggered when the First Layer was being shown    |
| "second"     | Triggered when the Second Layer was being shown   |
| "embeddings" | Triggers when the Embeddings were being shown     |
| "__ucCmp"    | Triggered by the `__ucCmp` window object          |


### type

| Event Name            | Description                                       |
| --------------------- | ------------------------------------------------- |
| CMP_SHOWN             | Triggered when the CMP is shown                   |
| ACCEPT_ALL            | Triggered by clicking the Accept All button       |
| DENY_ALL              | Triggered by clicking the Deny All button         |
| SAVE                  | Triggered by clicking the Save button             |
| MORE_INFORMATION_LINK | Triggered by clicking the More Information button |
| IMPRINT_LINK          | Triggered by clicking the Imprint link            |
| PRIVACY_POLICY_LINK   | Triggered by clicking the Privacy Policy link     |

## Example

```typescript title="Example"
window.addEventListener('UC_UI_CMP_EVENT', function(event) {
  console.log('UC_UI_CMP_EVENT event detail', event.detail)
});
```