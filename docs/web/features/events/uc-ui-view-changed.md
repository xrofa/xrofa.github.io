
!!! note ""
    This event gets triggered when the user:

    - Opens a layer
    - Switches from layer one to layer two
    - Switches from layer two to layer one
    - Closes all layers

The event also holds additional information with more details about the user behaviour. It is possible to know the current and previous layer displayed to the user.

Possible values for the additional data:

| Value          | Description           |
| -------------- | --------------------- |
| FIRST_LAYER    | The first layer        |
| NONE           | No layer is/was shown |
| PRIVACY_BUTTON | The Privacy Button    |
| SECOND_LAYER   | The second Layer      | 

## Example 

```typescript title="Example"
window.addEventListener('UC_UI_VIEW_CHANGED', function(event) {
  console.log('Current view is: ' + event.detail.view);
  console.log('Previous view is: ' + event.detail.previousView);
});
```



