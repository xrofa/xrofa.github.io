This event gets triggered when consent changes.

## Event Detail Structure

The `event.detail` that is returned will contain a [ConsentDetails](../api/interfaces.md#consentdetails) object

## Example

```typescript title="Example"
window.addEventListener('UC_CONSENT', function (event) {
  console.log('UC_CONSENT event detail', event.detail)
});
```