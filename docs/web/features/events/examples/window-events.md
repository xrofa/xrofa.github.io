# Listening to Window Event dispatches

It is also possible to listen to events that we dispatch with Window Event.

!!! tip ""
    The window event name can be configured in the admin interface under **Implementation -> Data Layer and Events -> Window Event**.

!!! note ""
    In the following example we assume that you configured the Window Event events that we dispatch, with the name "ucEvent" in your admin interface.

```typescript 
window.addEventListener("ucEvent", function (e) {    
  if(e.detail && e.detail.event == "consent_status") {
    // check for consent status of service "Google Ads Remarketing"
    if(e.detail['Google Ads Remarketing'] === true) {
      console.log('Google Ads Remarketing has consent');
    }
    else {
      console.log('Google Ads Remarketing has no consent');
    }
  }
});
```